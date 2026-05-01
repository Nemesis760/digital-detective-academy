import { useEffect, useMemo, useState } from "react";

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function nowMs() {
  return typeof performance !== "undefined" ? performance.now() : Date.now();
}

const DEFAULT_PAIRS_TR = [
  { term: "Aktif Ayak İzi", def: "Kullanıcının bilerek yaptığı paylaşımlar (fotoğraf, yorum, gönderi)" },
  { term: "Pasif Ayak İzi", def: "Farkında olmadan oluşan izler (çerezler, konum, tıklama geçmişi)" },
  { term: "Çerez (Cookie)", def: "Web sitelerinin seni takip etmek için cihazına bıraktığı küçük veri dosyası" },
  { term: "Dijital Kimlik", def: "İnternette bıraktığın tüm izlerin oluşturduğu kişisel profil" },
  { term: "Gizlilik Ayarı", def: "Paylaşımlarının kimler tarafından görüleceğini kontrol eden seçenek" },
  { term: "Dijital İtibar", def: "İnternetteki davranışlarına göre oluşan sanal itibarın" },
];

const DEFAULT_PAIRS_EN = [
  { term: "Active Footprint", def: "Data you share intentionally (photos, comments, posts)" },
  { term: "Passive Footprint", def: "Data collected without your awareness (cookies, location, click history)" },
  { term: "Cookie", def: "Small files websites store on your device to track your activity" },
  { term: "Digital Identity", def: "Your online profile built from all the traces you leave on the internet" },
  { term: "Privacy Setting", def: "Controls who can see your shared content online" },
  { term: "Digital Reputation", def: "The virtual reputation formed by your behavior on the internet" },
];

export default function CardMatchGame({ pairs = [], isTurkish }) {
  const baseCards = useMemo(() => {
    const defaultPairs = isTurkish ? DEFAULT_PAIRS_TR : DEFAULT_PAIRS_EN;
    // pairs: [{term, def}]
    const source = (pairs && pairs.length > 0) ? pairs : defaultPairs;
    const clean = source.filter((p) => p?.term && p?.def);
    const items = clean.flatMap((p, idx) => [
      { id: `t-${idx}`, type: "term", value: String(p.term), pairId: idx },
      { id: `d-${idx}`, type: "def", value: String(p.def), pairId: idx },
    ]);
    return items;
  }, [pairs, isTurkish]);

  const [seed, setSeed] = useState(0);

  const cards = useMemo(() => {
    return shuffle(baseCards.map((c) => ({ ...c, uid: `${c.id}-${seed}` })));
  }, [baseCards, seed]);

  const [flipped, setFlipped] = useState([]); // array of indices (max 2)
  const [matched, setMatched] = useState(() => new Set()); // uid
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [lock, setLock] = useState(false);

  const [startTime, setStartTime] = useState(() => nowMs());
  const [elapsed, setElapsed] = useState(0);
  const [done, setDone] = useState(false);

  // timer
  useEffect(() => {
    if (done) return;
    const t = setInterval(() => {
      setElapsed(Math.max(0, Math.floor((nowMs() - startTime) / 1000)));
    }, 400);
    return () => clearInterval(t);
  }, [startTime, done]);

  const reset = () => {
    setSeed((s) => s + 1);
    setFlipped([]);
    setMatched(new Set());
    setMoves(0);
    setScore(0);
    setLock(false);
    setStartTime(nowMs());
    setElapsed(0);
    setDone(false);
  };

  // auto-complete check
  useEffect(() => {
    if (!cards.length) return;
    if (matched.size === cards.length && !done) {
      setDone(true);
      // bonus: hızlı bitirene ekstra
      const timeBonus = Math.max(0, 120 - elapsed) * 2; // 0..240
      setScore((s) => s + timeBonus);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matched, cards.length]);

  const onFlip = (idx) => {
    if (lock || done) return;
    const c = cards[idx];
    if (!c) return;
    if (matched.has(c.uid)) return;
    if (flipped.includes(idx)) return;

    if (flipped.length === 2) return;

    const next = [...flipped, idx];
    setFlipped(next);

    if (next.length === 2) {
      setMoves((m) => m + 1);
      const [aIdx, bIdx] = next;
      const a = cards[aIdx];
      const b = cards[bIdx];

      const isPair = a.pairId === b.pairId && a.type !== b.type;

      if (isPair) {
        // match
        setMatched((prev) => {
          const n = new Set(prev);
          n.add(a.uid);
          n.add(b.uid);
          return n;
        });

        // scoring:
        // +100 base, + hızlılık bonusu (az hamle + hızlı eşleşme)
        setScore((s) => s + 100);

        // küçük animasyon için kısa süre lock
        setLock(true);
        setTimeout(() => {
          setFlipped([]);
          setLock(false);
        }, 450);
      } else {
        // wrong: -10 (min 0)
        setScore((s) => Math.max(0, s - 10));
        setLock(true);
        setTimeout(() => {
          setFlipped([]);
          setLock(false);
        }, 650);
      }
    }
  };

  const totalPairs = Math.floor(cards.length / 2);
  const matchedPairs = Math.floor(matched.size / 2);

  return (
    <div className="cm-wrap">
      <div className="cm-top">
        <div className="cm-title">{isTurkish ? "Kart Eşleştirme" : "Card Match"}</div>

        <div className="cm-stats">
          <span className="cm-pill">{isTurkish ? "Skor" : "Score"}: <b>{score}</b></span>
          <span className="cm-pill">{isTurkish ? "Hamle" : "Moves"}: <b>{moves}</b></span>
          <span className="cm-pill">{isTurkish ? "Süre" : "Time"}: <b>{elapsed}s</b></span>
          <span className="cm-pill">{matchedPairs}/{totalPairs} {isTurkish ? "Eşleşme" : "Matches"}</span>
        </div>

        <div className="cm-actions">
          <button type="button" className="cm-btn" onClick={reset}>
            {isTurkish ? "Yeniden Başlat" : "Restart"}
          </button>
        </div>
      </div>

      {done && (
        <div className="cm-done">
          <div className="cm-done-card">
            <div className="cm-done-title">{isTurkish ? "🎉 Tebrikler!" : "🎉 Well done!"}</div>
            <div className="cm-done-text">
              {isTurkish
                ? `Tüm kartları eşleştirdin. Skorun: ${score} • Süre: ${elapsed}s • Hamle: ${moves}`
                : `You matched all cards. Score: ${score} • Time: ${elapsed}s • Moves: ${moves}`}
            </div>
            <button type="button" className="cm-btn cm-btn-primary" onClick={reset}>
              {isTurkish ? "Tekrar Oyna" : "Play Again"}
            </button>
          </div>
        </div>
      )}

      <div className="cm-grid" aria-label="Card matching board">
        {cards.map((c, idx) => {
          const isFlipped = flipped.includes(idx) || matched.has(c.uid);
          const isMatched = matched.has(c.uid);

          return (
            <button
              key={c.uid}
              type="button"
              className={`cm-card ${isFlipped ? "is-flipped" : ""} ${isMatched ? "is-matched" : ""}`}
              onClick={() => onFlip(idx)}
              disabled={lock || done}
            >
              <div className="cm-inner">
                <div className="cm-face cm-front">
                  <span className="cm-q">?</span>
                </div>

                <div className="cm-face cm-back">
                  <div className={`cm-tag ${c.type === "term" ? "term" : "def"}`}>
                    {c.type === "term" ? (isTurkish ? "Terim" : "Term") : (isTurkish ? "Açıklama" : "Definition")}
                  </div>
                  <div className="cm-text">{c.value}</div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="cm-hint">
        {isTurkish
          ? "İpucu: Bir terim ile onun açıklamasını eşleştir."
          : "Tip: Match a term with its definition."}
      </div>

      <style>
        {`
        .cm-wrap{
          width:100%;
          max-width:900px;
          margin:0 auto;
          border-radius:16px;
          border:1px solid var(--border-color, rgba(0,0,0,.1));
          background:var(--bg-secondary, rgba(255,255,255,.75));
          padding:14px;
        }
        .cm-top{display:flex;flex-direction:column;gap:10px;margin-bottom:12px;}
        .cm-title{font-weight:900;font-size:1.1rem;}
        .cm-stats{display:flex;gap:8px;flex-wrap:wrap}
        .cm-pill{
          padding:6px 10px;border-radius:999px;
          border:1px solid rgba(0,0,0,.12);
          background:rgba(255,255,255,.7);
          font-weight:700;
        }
        .cm-actions{display:flex;gap:8px;justify-content:flex-end}
        .cm-btn{
          padding:8px 12px;border-radius:12px;
          border:1px solid rgba(0,0,0,.12);
          background:var(--bg-primary, #fff);
          cursor:pointer;font-weight:800;
        }
        .cm-btn-primary{
          background:var(--gradient-primary, linear-gradient(135deg,#6366f1,#3b82f6));
          color:#fff;border:none;
        }

        .cm-grid{
          display:grid;
          grid-template-columns: repeat(4, 1fr);
          gap:10px;
        }
        @media (max-width: 860px){ .cm-grid{ grid-template-columns: repeat(3, 1fr);} }
        @media (max-width: 560px){ .cm-grid{ grid-template-columns: repeat(2, 1fr);} }

        .cm-card{
          height:120px;
          border:none;
          background:transparent;
          cursor:pointer;
          perspective: 900px;
          padding:0;
        }
        .cm-card:disabled{cursor:not-allowed;opacity:.9}

        .cm-inner{
          width:100%;
          height:100%;
          position:relative;
          transform-style:preserve-3d;
          transition: transform .45s ease;
          border-radius:16px;
        }
        .cm-card.is-flipped .cm-inner{ transform: rotateY(180deg); }

        .cm-face{
          position:absolute; inset:0;
          border-radius:16px;
          border:1px solid rgba(0,0,0,.12);
          display:flex; align-items:center; justify-content:center;
          backface-visibility:hidden;
          overflow:hidden;
          box-shadow: 0 6px 18px rgba(0,0,0,.10);
        }
        .cm-front{
          background: linear-gradient(135deg, rgba(99,102,241,.16), rgba(59,130,246,.16));
        }
        .cm-q{
          font-size:2.4rem;
          font-weight:900;
          opacity:.85;
        }
        .cm-back{
          background: rgba(255,255,255,.92);
          transform: rotateY(180deg);
          padding:12px;
          display:flex;
          flex-direction:column;
          align-items:flex-start;
          justify-content:space-between;
          gap:10px;
        }

        .cm-tag{
          font-size:.78rem;
          font-weight:900;
          padding:6px 10px;
          border-radius:999px;
          border:1px solid rgba(0,0,0,.12);
          background: rgba(255,255,255,.85);
        }
        .cm-tag.term{ border-color: rgba(59,130,246,.45); }
        .cm-tag.def{ border-color: rgba(236,72,153,.45); }

        .cm-text{
          width:100%;
          font-weight:900;
          line-height:1.2;
          color: var(--text-primary, #0f172a);
          text-align:left;
          font-size: .95rem;
        }

        /* matched animation */
        .cm-card.is-matched .cm-face{
          border-color: rgba(16,185,129,.55);
          box-shadow: 0 10px 26px rgba(16,185,129,.18);
        }
        .cm-card.is-matched .cm-inner{
          animation: cmPulse .55s ease;
        }
        @keyframes cmPulse{
          0%{ transform: scale(1) rotateY(180deg); }
          50%{ transform: scale(1.03) rotateY(180deg); }
          100%{ transform: scale(1) rotateY(180deg); }
        }

        .cm-hint{
          margin-top:10px;
          opacity:.85;
          font-weight:700;
        }

        /* done overlay */
        .cm-done{
          margin-bottom:12px;
        }
        .cm-done-card{
          border-radius:16px;
          border:1px solid rgba(16,185,129,.35);
          background: rgba(16,185,129,.10);
          padding:12px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:12px;
          flex-wrap:wrap;
        }
        .cm-done-title{font-weight:1000;font-size:1.05rem}
        .cm-done-text{font-weight:800;opacity:.9}
        `}
      </style>
    </div>
  );
}
