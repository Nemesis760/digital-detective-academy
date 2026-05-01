import { useEffect, useMemo, useRef, useState } from "react";

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const DEFAULT_PAIRS_TR = [
  { term: "Aktif Ayak İzi", def: "Kendi isteğinle yaptığın paylaşımlar (fotoğraf, yorum, gönderi)", emoji: "👆" },
  { term: "Pasif Ayak İzi", def: "Farkında olmadan oluşan izler (çerezler, konum, tıklama geçmişi)", emoji: "👣" },
  { term: "Çerez (Cookie)", def: "Web sitelerinin seni takip etmek için bıraktığı küçük veri dosyası", emoji: "🍪" },
  { term: "Dijital Kimlik", def: "İnternette bıraktığın tüm izlerin oluşturduğu kişisel profil", emoji: "🪪" },
  { term: "Gizlilik Ayarı", def: "Paylaşımlarını kimlerin görebileceğini belirleyen kontrol seçeneği", emoji: "🔒" },
  { term: "Dijital İtibar", def: "İnternetteki davranışlarınla oluşan sanal itibarın", emoji: "⭐" },
];

const DEFAULT_PAIRS_EN = [
  { term: "Active Footprint", def: "Data you share intentionally (photos, comments, posts)", emoji: "👆" },
  { term: "Passive Footprint", def: "Data collected without your awareness (cookies, location, clicks)", emoji: "👣" },
  { term: "Cookie", def: "Small files websites store on your device to track your activity", emoji: "🍪" },
  { term: "Digital Identity", def: "Your online profile built from all the traces you leave on the internet", emoji: "🪪" },
  { term: "Privacy Setting", def: "Controls who can see your shared content online", emoji: "🔒" },
  { term: "Digital Reputation", def: "The virtual reputation formed by your behavior online", emoji: "⭐" },
];

export default function CardMatchingGame({ pairs = [], isTurkish }) {
  const tr = isTurkish;

  const pairsData = useMemo(() => {
    const fallback = tr ? DEFAULT_PAIRS_TR : DEFAULT_PAIRS_EN;
    if (pairs && pairs.length > 0) {
      return pairs.map((p, i) => ({
        term: p.term || p[0],
        def: p.def || p[1],
        emoji: p.emoji || "📌",
      }));
    }
    return fallback;
  }, [pairs, tr]);

  const [phase, setPhase] = useState("idle"); // idle | preview | playing | done
  const [seed, setSeed] = useState(0);
  const [flipped, setFlipped] = useState([]);   // indices
  const [matched, setMatched] = useState([]);   // pairIds
  const [wrong, setWrong] = useState([]);       // indices that just failed
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [previewLeft, setPreviewLeft] = useState(3);
  const [lock, setLock] = useState(false);

  const timerRef = useRef(null);
  const previewRef = useRef(null);
  const wrongRef = useRef(null);

  const cards = useMemo(() => {
    const base = pairsData.flatMap((p, i) => [
      { uid: `t-${i}-${seed}`, pairId: i, type: "term", text: p.term, emoji: p.emoji },
      { uid: `d-${i}-${seed}`, pairId: i, type: "def",  text: p.def,  emoji: p.emoji },
    ]);
    return shuffle(base);
  }, [pairsData, seed]);

  const totalPairs = pairsData.length;
  const matchedPairs = matched.length;

  // timer
  useEffect(() => {
    if (phase !== "playing") { clearInterval(timerRef.current); return; }
    timerRef.current = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timerRef.current);
  }, [phase]);

  // preview countdown
  useEffect(() => {
    if (phase !== "preview") return;
    setPreviewLeft(3);
    let n = 3;
    previewRef.current = setInterval(() => {
      n -= 1;
      setPreviewLeft(n);
      if (n <= 0) {
        clearInterval(previewRef.current);
        setPhase("playing");
        setFlipped([]);
        setLock(false);
      }
    }, 1000);
    return () => clearInterval(previewRef.current);
  }, [phase]);

  // done check
  useEffect(() => {
    if (phase === "playing" && matchedPairs === totalPairs && totalPairs > 0) {
      clearInterval(timerRef.current);
      setPhase("done");
    }
  }, [matchedPairs, totalPairs, phase]);

  const startGame = () => {
    setSeed((s) => s + 1);
    setFlipped([]);
    setMatched([]);
    setWrong([]);
    setMoves(0);
    setScore(0);
    setSeconds(0);
    setLock(true);
    setPhase("preview");
  };

  const onFlip = (idx) => {
    if (lock || phase !== "playing") return;
    const card = cards[idx];
    if (!card) return;
    if (matched.includes(card.pairId)) return;
    if (flipped.includes(idx)) return;
    if (flipped.length >= 2) return;

    const next = [...flipped, idx];
    setFlipped(next);

    if (next.length === 2) {
      setLock(true);
      const [aIdx, bIdx] = next;
      const a = cards[aIdx], b = cards[bIdx];
      setMoves((m) => m + 1);

      if (a.pairId === b.pairId && a.type !== b.type) {
        // correct match
        setScore((s) => s + 100);
        setTimeout(() => {
          setMatched((m) => [...m, a.pairId]);
          setFlipped([]);
          setLock(false);
        }, 600);
      } else {
        // wrong
        setScore((s) => Math.max(0, s - 10));
        setWrong([aIdx, bIdx]);
        if (wrongRef.current) clearTimeout(wrongRef.current);
        wrongRef.current = setTimeout(() => {
          setFlipped([]);
          setWrong([]);
          setLock(false);
        }, 900);
      }
    }
  };

  const isFlipped = (idx) => {
    const card = cards[idx];
    if (!card) return false;
    if (phase === "preview") return true;
    if (matched.includes(card.pairId)) return true;
    return flipped.includes(idx);
  };

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  const timeStr = `${mm}:${ss}`;

  const stars = score >= totalPairs * 100
    ? "⭐⭐⭐"
    : score >= totalPairs * 60
    ? "⭐⭐"
    : "⭐";

  return (
    <div className="cmg-wrap">

      {/* ── IDLE: start screen ── */}
      {phase === "idle" && (
        <div className="cmg-start">
          <div className="cmg-start-icon">🃏</div>
          <h3 className="cmg-start-title">
            {tr ? "Kart Eşleştirme Oyunu" : "Card Matching Game"}
          </h3>
          <p className="cmg-start-desc">
            {tr
              ? "Terimleri doğru açıklamalarıyla eşleştir!"
              : "Match each term with its correct definition!"}
          </p>

          <div className="cmg-rules">
            <div className="cmg-rule">
              <span className="cmg-rule-badge term-badge">{tr ? "Terim" : "Term"}</span>
              <span>{tr ? "Mavi kartlar — kavramın adı" : "Blue cards — the concept name"}</span>
            </div>
            <div className="cmg-rule">
              <span className="cmg-rule-badge def-badge">{tr ? "Açıklama" : "Definition"}</span>
              <span>{tr ? "Mor kartlar — kavramın anlamı" : "Purple cards — what it means"}</span>
            </div>
            <div className="cmg-rule">
              <span className="cmg-rule-num">1</span>
              <span>{tr ? "Bir Terim kartı seç" : "Pick a Term card"}</span>
            </div>
            <div className="cmg-rule">
              <span className="cmg-rule-num">2</span>
              <span>{tr ? "Ona ait Açıklama kartını bul" : "Find its matching Definition card"}</span>
            </div>
            <div className="cmg-rule">
              <span className="cmg-rule-num">3</span>
              <span>{tr ? "Doğruysa kartlar açık kalır ✅" : "Correct pairs stay open ✅"}</span>
            </div>
          </div>

          <button className="cmg-btn-start" onClick={startGame}>
            {tr ? "🚀 Oyunu Başlat" : "🚀 Start Game"}
          </button>
        </div>
      )}

      {/* ── PREVIEW BANNER ── */}
      {phase === "preview" && (
        <div className="cmg-preview-banner">
          <span className="cmg-preview-emoji">🧠</span>
          <span>{tr ? "Kartları ezberle!" : "Memorize the cards!"}</span>
          <span className="cmg-preview-count">{previewLeft}</span>
        </div>
      )}

      {/* ── PLAYING / PREVIEW: stats ── */}
      {(phase === "playing" || phase === "preview") && (
        <div className="cmg-stats-bar">
          <div className="cmg-stat">
            <span className="cmg-stat-icon">⭐</span>
            <span>{tr ? "Skor" : "Score"}: <b>{score}</b></span>
          </div>
          <div className="cmg-stat">
            <span className="cmg-stat-icon">🖱️</span>
            <span>{tr ? "Hamle" : "Moves"}: <b>{moves}</b></span>
          </div>
          <div className="cmg-stat">
            <span className="cmg-stat-icon">⏱️</span>
            <span>{tr ? "Süre" : "Time"}: <b>{timeStr}</b></span>
          </div>
          <div className="cmg-stat cmg-stat-match">
            <span className="cmg-stat-icon">🎯</span>
            <span><b>{matchedPairs}/{totalPairs}</b> {tr ? "Eşleşme" : "Matched"}</span>
          </div>
          <button className="cmg-btn-restart" onClick={startGame}>
            {tr ? "↺ Yeniden" : "↺ Restart"}
          </button>
        </div>
      )}

      {/* ── CARD GRID ── */}
      {phase !== "idle" && phase !== "done" && (
        <div className="cmg-grid">
          {cards.map((card, idx) => {
            const flp = isFlipped(idx);
            const isMatch = matched.includes(card.pairId);
            const isWrong = wrong.includes(idx);
            const isSelected = flipped.includes(idx) && !isMatch;

            return (
              <button
                key={card.uid}
                className={[
                  "cmg-card",
                  flp ? "flipped" : "",
                  isMatch ? "matched" : "",
                  isWrong ? "wrong-shake" : "",
                  isSelected ? "selected" : "",
                  card.type === "term" ? "is-term" : "is-def",
                ].filter(Boolean).join(" ")}
                onClick={() => onFlip(idx)}
                disabled={lock || isMatch || phase === "preview"}
                aria-label={card.text}
              >
                <div className="cmg-card-inner">
                  {/* Front face — hidden (?) */}
                  <div className="cmg-face cmg-front">
                    <span className="cmg-q">?</span>
                  </div>
                  {/* Back face — content */}
                  <div className="cmg-face cmg-back">
                    <span className="cmg-card-emoji">{card.emoji}</span>
                    <span className={`cmg-type-badge ${card.type === "term" ? "term-badge" : "def-badge"}`}>
                      {card.type === "term"
                        ? (tr ? "Terim" : "Term")
                        : (tr ? "Açıklama" : "Definition")}
                    </span>
                    <p className="cmg-card-text">{card.text}</p>
                    {isMatch && <span className="cmg-match-check">✓</span>}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* ── DONE SCREEN ── */}
      {phase === "done" && (
        <div className="cmg-done">
          <div className="cmg-done-stars">{stars}</div>
          <h3 className="cmg-done-title">{tr ? "🎉 Harika iş!" : "🎉 Great job!"}</h3>
          <p className="cmg-done-sub">
            {tr
              ? `Tüm ${totalPairs} çifti eşleştirdin!`
              : `You matched all ${totalPairs} pairs!`}
          </p>
          <div className="cmg-done-stats">
            <div className="cmg-done-stat">
              <span className="cmg-done-stat-val">{score}</span>
              <span className="cmg-done-stat-label">{tr ? "Skor" : "Score"}</span>
            </div>
            <div className="cmg-done-stat">
              <span className="cmg-done-stat-val">{moves}</span>
              <span className="cmg-done-stat-label">{tr ? "Hamle" : "Moves"}</span>
            </div>
            <div className="cmg-done-stat">
              <span className="cmg-done-stat-val">{timeStr}</span>
              <span className="cmg-done-stat-label">{tr ? "Süre" : "Time"}</span>
            </div>
          </div>
          <button className="cmg-btn-start" onClick={startGame}>
            {tr ? "🔄 Tekrar Oyna" : "🔄 Play Again"}
          </button>
        </div>
      )}

      <style>{`
        .cmg-wrap {
          width: 100%;
          max-width: 920px;
          margin: 0 auto;
          font-family: inherit;
        }

        /* ── START SCREEN ── */
        .cmg-start {
          background: linear-gradient(135deg, #f0f4ff 0%, #faf5ff 100%);
          border: 2px solid rgba(99,102,241,.18);
          border-radius: 24px;
          padding: 32px 28px;
          text-align: center;
        }
        .cmg-start-icon { font-size: 3.2rem; margin-bottom: 10px; }
        .cmg-start-title {
          font-size: 1.5rem;
          font-weight: 900;
          color: #312e81;
          margin: 0 0 8px;
        }
        .cmg-start-desc {
          color: #4b5563;
          font-size: 1rem;
          font-weight: 700;
          margin: 0 0 20px;
        }

        .cmg-rules {
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-width: 480px;
          margin: 0 auto 24px;
          text-align: left;
        }
        .cmg-rule {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: .95rem;
          font-weight: 700;
          color: #374151;
        }
        .cmg-rule-num {
          min-width: 28px; height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #3b82f6);
          color: white;
          font-weight: 900;
          font-size: .9rem;
          display: flex; align-items: center; justify-content: center;
        }
        .cmg-rule-badge {
          padding: 4px 12px;
          border-radius: 999px;
          font-size: .8rem;
          font-weight: 900;
          white-space: nowrap;
        }
        .term-badge {
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          color: white;
        }
        .def-badge {
          background: linear-gradient(135deg, #a855f7, #ec4899);
          color: white;
        }

        .cmg-btn-start {
          padding: 14px 36px;
          border-radius: 16px;
          border: none;
          background: linear-gradient(135deg, #6366f1, #3b82f6);
          color: white;
          font-size: 1.1rem;
          font-weight: 900;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(99,102,241,.35);
          transition: transform .12s, box-shadow .18s;
        }
        .cmg-btn-start:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(99,102,241,.45);
        }
        .cmg-btn-start:active { transform: scale(.97); }

        /* ── PREVIEW BANNER ── */
        .cmg-preview-banner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: linear-gradient(135deg, rgba(59,130,246,.12), rgba(99,102,241,.12));
          border: 2px solid rgba(99,102,241,.25);
          border-radius: 16px;
          padding: 14px 20px;
          margin-bottom: 14px;
          font-size: 1.05rem;
          font-weight: 900;
          color: #312e81;
        }
        .cmg-preview-emoji { font-size: 1.5rem; }
        .cmg-preview-count {
          min-width: 36px; height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #3b82f6);
          color: white;
          font-weight: 900;
          font-size: 1.1rem;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 12px rgba(99,102,241,.4);
        }

        /* ── STATS BAR ── */
        .cmg-stats-bar {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
        }
        .cmg-stat {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background: rgba(255,255,255,.9);
          border: 1px solid rgba(0,0,0,.1);
          border-radius: 999px;
          font-weight: 800;
          font-size: .9rem;
          color: #1e1b4b;
          box-shadow: 0 2px 8px rgba(0,0,0,.06);
        }
        .cmg-stat-match { background: rgba(99,102,241,.1); border-color: rgba(99,102,241,.25); }
        .cmg-stat-icon { font-size: 1rem; }
        .cmg-btn-restart {
          margin-left: auto;
          padding: 8px 16px;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,.12);
          background: white;
          font-weight: 800;
          cursor: pointer;
          font-size: .88rem;
          transition: background .15s;
        }
        .cmg-btn-restart:hover { background: #f1f5f9; }

        /* ── CARD GRID ── */
        .cmg-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 16px;
        }
        @media (max-width: 700px) { .cmg-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 460px) { .cmg-grid { grid-template-columns: repeat(2, 1fr); } }

        /* ── CARD ── */
        .cmg-card {
          height: 140px;
          border: none;
          background: transparent;
          cursor: pointer;
          perspective: 1000px;
          padding: 0;
          border-radius: 18px;
          transition: transform .1s;
        }
        .cmg-card:hover:not(:disabled):not(.matched) { transform: translateY(-3px); }
        .cmg-card:disabled { cursor: not-allowed; }

        .cmg-card-inner {
          width: 100%; height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform .5s cubic-bezier(.4,0,.2,1);
          border-radius: 18px;
        }
        .cmg-card.flipped .cmg-card-inner { transform: rotateY(180deg); }

        .cmg-face {
          position: absolute; inset: 0;
          border-radius: 18px;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          backface-visibility: hidden;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0,0,0,.12);
        }

        /* FRONT (unrevealed) */
        .cmg-front {
          background: linear-gradient(135deg, #dbeafe 0%, #ede9fe 100%);
          border: 2px solid rgba(99,102,241,.2);
        }
        .cmg-card.selected .cmg-front {
          border: 2px solid #f59e0b;
          box-shadow: 0 0 0 3px rgba(245,158,11,.35), 0 6px 20px rgba(0,0,0,.12);
        }
        .cmg-q {
          font-size: 2.8rem;
          font-weight: 900;
          color: rgba(99,102,241,.55);
        }

        /* BACK — TERM (blue) */
        .cmg-card.is-term .cmg-back {
          background: linear-gradient(135deg, #1d4ed8 0%, #4f46e5 100%);
          color: white;
          border: 2px solid rgba(255,255,255,.25);
        }

        /* BACK — DEF (purple) */
        .cmg-card.is-def .cmg-back {
          background: linear-gradient(135deg, #7c3aed 0%, #be185d 100%);
          color: white;
          border: 2px solid rgba(255,255,255,.25);
        }

        .cmg-back {
          transform: rotateY(180deg);
          padding: 10px 8px 8px;
          gap: 6px;
        }
        .cmg-card-emoji { font-size: 1.5rem; line-height: 1; }
        .cmg-type-badge {
          padding: 3px 10px;
          border-radius: 999px;
          font-size: .72rem;
          font-weight: 900;
          background: rgba(255,255,255,.22);
          color: rgba(255,255,255,.95);
          border: 1px solid rgba(255,255,255,.3);
        }
        .cmg-card-text {
          font-size: .78rem;
          font-weight: 800;
          text-align: center;
          line-height: 1.25;
          color: rgba(255,255,255,.95);
        }
        .cmg-match-check {
          position: absolute; top: 6px; right: 8px;
          font-size: 1rem;
          color: #4ade80;
          font-weight: 900;
        }

        /* MATCHED STATE */
        .cmg-card.matched .cmg-card-inner {
          animation: cmgPop .5s ease;
        }
        .cmg-card.matched .cmg-face {
          box-shadow: 0 0 0 3px #4ade80, 0 6px 20px rgba(16,185,129,.25);
        }

        /* WRONG SHAKE */
        .cmg-card.wrong-shake .cmg-card-inner {
          animation: cmgShake .4s ease;
        }

        @keyframes cmgPop {
          0%  { transform: rotateY(180deg) scale(1); }
          50% { transform: rotateY(180deg) scale(1.07); }
          100%{ transform: rotateY(180deg) scale(1); }
        }
        @keyframes cmgShake {
          0%,100% { transform: rotateY(180deg) translateX(0); }
          20%     { transform: rotateY(180deg) translateX(-6px); }
          60%     { transform: rotateY(180deg) translateX(6px); }
        }

        /* ── DONE SCREEN ── */
        .cmg-done {
          background: linear-gradient(135deg, #f0fdf4, #ecfdf5);
          border: 2px solid rgba(16,185,129,.3);
          border-radius: 24px;
          padding: 36px 28px;
          text-align: center;
        }
        .cmg-done-stars { font-size: 2.4rem; margin-bottom: 8px; }
        .cmg-done-title {
          font-size: 1.6rem;
          font-weight: 900;
          color: #065f46;
          margin: 0 0 6px;
        }
        .cmg-done-sub {
          color: #374151;
          font-size: 1rem;
          font-weight: 700;
          margin: 0 0 20px;
        }
        .cmg-done-stats {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .cmg-done-stat {
          display: flex; flex-direction: column; align-items: center;
          background: rgba(255,255,255,.8);
          border: 1px solid rgba(16,185,129,.25);
          border-radius: 16px;
          padding: 14px 20px;
          min-width: 90px;
        }
        .cmg-done-stat-val {
          font-size: 1.6rem;
          font-weight: 900;
          color: #059669;
        }
        .cmg-done-stat-label {
          font-size: .8rem;
          font-weight: 800;
          color: #6b7280;
        }
      `}</style>
    </div>
  );
}
