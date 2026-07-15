import { useEffect, useMemo, useState } from "react";

function normalizeWord(w) {
  return String(w || "").trim().toUpperCase().replace(/\s+/g, "");
}

function scoreGuess(guess, target) {
  const g = guess.split("");
  const t = target.split("");
  const result = Array(g.length).fill("absent");
  const used = Array(t.length).fill(false);
  for (let i = 0; i < g.length; i++) {
    if (g[i] === t[i]) { result[i] = "correct"; used[i] = true; }
  }
  for (let i = 0; i < g.length; i++) {
    if (result[i] === "correct") continue;
    const idx = t.findIndex((ch, j) => !used[j] && ch === g[i]);
    if (idx !== -1) { result[i] = "present"; used[idx] = true; }
  }
  return result;
}

const TR_ROWS = [
  ["E","R","T","Y","U","I","O","P","Ğ","Ü"],
  ["A","S","D","F","G","H","J","K","L","Ş","İ"],
  ["Z","C","V","B","N","M","Ö","Ç"],
];
const EN_ROWS = [
  ["Q","W","E","R","T","Y","U","I","O","P"],
  ["A","S","D","F","G","H","J","K","L"],
  ["Z","X","C","V","B","N","M"],
];
const TR_CHARSET = new Set("ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ");
const EN_CHARSET = new Set("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

const WORD_LENGTH = 5;
const MAX_TRIES = 6;

export default function WordPuzzleGame({ words = [], isTurkish }) {
  const pool = useMemo(() => {
    const cleaned = (words || []).map(normalizeWord).filter(w => w.length === WORD_LENGTH);
    return cleaned.length ? cleaned : ["GUARD","CYBER","LOCKS","SMART","CLOUD"];
  }, [words]);

  const [seed, setSeed] = useState(0);
  const target = useMemo(() => pool[seed % pool.length], [pool, seed]);

  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const [grid, setGrid] = useState(() => Array.from({ length: MAX_TRIES }, () => Array(WORD_LENGTH).fill("")));
  const [statuses, setStatuses] = useState(() => Array.from({ length: MAX_TRIES }, () => Array(WORD_LENGTH).fill("")));
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);
  const [keyStatus, setKeyStatus] = useState({});
  const [shake, setShake] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const h = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  const ROWS = isTurkish ? TR_ROWS : EN_ROWS;
  const CHARSET = isTurkish ? TR_CHARSET : EN_CHARSET;

  const setCell = (r, c, val) =>
    setGrid(prev => { const copy = prev.map(rr => rr.slice()); copy[r][c] = val; return copy; });

  const reset = () => {
    setRow(0); setCol(0);
    setGrid(Array.from({ length: MAX_TRIES }, () => Array(WORD_LENGTH).fill("")));
    setStatuses(Array.from({ length: MAX_TRIES }, () => Array(WORD_LENGTH).fill("")));
    setKeyStatus({}); setMessage(""); setDone(false);
  };

  const nextWord = () => { setSeed(s => s + 1); reset(); };

  const processKey = (key) => {
    if (key === "ENTER") {
      if (done) return;
      const guess = grid[row].join("");
      if (guess.length < WORD_LENGTH || grid[row].some(x => !x)) {
        setMessage(isTurkish ? "5 harf yazmalısın." : "Type 5 letters.");
        setShake(true);
        setTimeout(() => setShake(false), 400);
        return;
      }
      const fb = scoreGuess(guess, target);
      setStatuses(prev => { const copy = prev.map(rr => rr.slice()); copy[row] = fb; return copy; });
      setKeyStatus(prev => {
        const next = { ...prev };
        const rank = { absent: 0, present: 1, correct: 2 };
        for (let i = 0; i < WORD_LENGTH; i++) {
          const letter = guess[i]; const st = fb[i]; const old = next[letter];
          if (!old || rank[st] > rank[old]) next[letter] = st;
        }
        return next;
      });
      if (guess === target) {
        setDone(true);
        setMessage(isTurkish ? "🎉 Doğru! Harika iş!" : "🎉 Correct! Great job!");
        return;
      }
      if (row + 1 >= MAX_TRIES) {
        setDone(true);
        setMessage(isTurkish ? `😅 Bitti! Cevap: ${target}` : `😅 Game over! Word: ${target}`);
        return;
      }
      setRow(r => r + 1); setCol(0); setMessage("");
    } else if (key === "BACKSPACE") {
      if (done) return;
      if (col > 0) { setCell(row, col - 1, ""); setCol(c => Math.max(0, c - 1)); }
    } else {
      if (done || row >= MAX_TRIES || col >= WORD_LENGTH) return;
      setCell(row, col, key);
      setCol(c => Math.min(WORD_LENGTH, c + 1));
    }
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === "Enter") { e.preventDefault(); processKey("ENTER"); return; }
      if (e.key === "Backspace") { e.preventDefault(); processKey("BACKSPACE"); return; }
      const upper = e.key.length === 1 ? e.key.toUpperCase() : "";
      if (upper && CHARSET.has(upper)) { e.preventDefault(); processKey(upper); }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grid, row, col, done, target, CHARSET]);

  const renderCell = (r, c) => {
    const val = grid[r][c];
    const st = statuses[r][c];
    const isActive = r === row && c === col && !done && !val;
    const isShaking = shake && r === row;
    return (
      <div key={`${r}-${c}`}
        className={[
          "wp-cell",
          st ? `wp-${st}` : "",
          isActive ? "wp-active" : "",
          isShaking ? "wp-shake" : "",
        ].filter(Boolean).join(" ")}
      >
        {val}
      </div>
    );
  };

  const keyClass = (k) => {
    const st = keyStatus[k];
    return ["wp-key", st ? `wp-key-${st}` : ""].filter(Boolean).join(" ");
  };

  const VKey = ({ k, wide }) => (
    <button
      type="button"
      className={[keyClass(k), wide ? "wp-wide" : ""].filter(Boolean).join(" ")}
      onPointerDown={(e) => { e.preventDefault(); processKey(k); }}
      disabled={done}
      aria-label={k}
    >
      {k === "ENTER" ? "↵" : k === "BACKSPACE" ? "⌫" : k}
    </button>
  );

  const Keyboard = () => (
    <div className="wp-kbd">
      {ROWS.map((rowKeys, ri) => (
        <div key={ri} className="wp-kbd-row">
          {ri === ROWS.length - 1 && <VKey k="ENTER" wide />}
          {rowKeys.map(k => <VKey key={k} k={k} />)}
          {ri === ROWS.length - 1 && <VKey k="BACKSPACE" wide />}
        </div>
      ))}
    </div>
  );

  const msgIsGood = message.startsWith("🎉");
  const msgIsError = message.startsWith("😅") || (message && !msgIsGood);

  /* ── MOBILE LAYOUT ── */
  if (isMobile) {
    return (
      <div className="wp-mobile-root">
        {/* ── Scrollable top ── */}
        <div className="wp-mobile-scroll">
          {/* Title + actions */}
          <div className="wp-top">
            <div className="wp-title">
              <span className="wp-title-icon">🔐</span>
              {isTurkish ? "Kelime Oyunu" : "Word Game"}
            </div>
            <div className="wp-actions">
              <button type="button" className="wp-btn-sm"
                onPointerDown={e => { e.preventDefault(); reset(); }}>
                {isTurkish ? "↺ Sıfırla" : "↺ Reset"}
              </button>
              <button type="button" className="wp-btn-sm wp-btn-primary"
                onPointerDown={e => { e.preventDefault(); nextWord(); }}>
                {isTurkish ? "Yeni ›" : "Next ›"}
              </button>
            </div>
          </div>

          {/* Legend */}
          <div className="wp-legend">
            <span className="wp-legend-item"><span>🟩</span>{isTurkish ? "doğru yer" : "right place"}</span>
            <span className="wp-legend-sep">·</span>
            <span className="wp-legend-item"><span>🟨</span>{isTurkish ? "yanlış yer" : "wrong place"}</span>
            <span className="wp-legend-sep">·</span>
            <span className="wp-legend-item"><span>⬜</span>{isTurkish ? "yok" : "absent"}</span>
          </div>

          {/* Word bank */}
          <div className="wp-bank">
            <div className="wp-bank-label">{isTurkish ? "Kelime Havuzu" : "Word Bank"}</div>
            <div className="wp-pills">
              {pool.map((w, idx) => (
                <span key={`${w}-${idx}`} className="wp-pill">{w}</span>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="wp-grid wp-grid-mobile">
            {Array.from({ length: MAX_TRIES }).map((_, r) => (
              <div key={r} className="wp-row">
                {Array.from({ length: WORD_LENGTH }).map((__, c) => renderCell(r, c))}
              </div>
            ))}
          </div>

          {/* Message */}
          {message && (
            <div className={`wp-msg ${msgIsGood ? "wp-msg-good" : msgIsError ? "wp-msg-bad" : ""}`}>
              {message}
            </div>
          )}

          {done && (
            <div className="wp-done-actions">
              <button type="button" className="wp-done-btn"
                onPointerDown={e => { e.preventDefault(); nextWord(); }}>
                {isTurkish ? "Yeni Kelime →" : "Next Word →"}
              </button>
            </div>
          )}
        </div>

        {/* ── Keyboard fixed at bottom ── */}
        <div className="wp-mobile-kbd">
          <Keyboard />
        </div>

        <style>{WP_CSS}</style>
      </div>
    );
  }

  /* ── DESKTOP LAYOUT ── */
  return (
    <div className="wp-wrap">
      <div className="wp-top">
        <div className="wp-title">
          <span className="wp-title-icon">🔐</span>
          {isTurkish ? "Kelime Oyunu" : "Word Game"}
        </div>
        <div className="wp-actions">
          <button type="button" className="wp-btn" onClick={reset}>{isTurkish ? "Sıfırla" : "Reset"}</button>
          <button type="button" className="wp-btn wp-btn-primary" onClick={nextWord}>{isTurkish ? "Yeni Kelime" : "New Word"}</button>
        </div>
      </div>

      <div className="wp-help">
        <p className="wp-help-title">
          {isTurkish ? "Kelime Oyunu: Dijital Güvenlik Terimleri" : "Word Game: Digital Safety Terms"}
        </p>
        <p className="wp-help-sub">
          {isTurkish
            ? "Gizli kelime, aşağıdaki dijital güvenlik kelimelerinden biridir."
            : "The secret word is one of the digital safety terms below."}
        </p>
        <ul className="wp-help-steps">
          <li>{isTurkish ? "5 harf yaz ve Enter'a bas." : "Type 5 letters and press Enter."}</li>
          <li>{isTurkish ? "🟩 doğru yer • 🟨 yanlış yer • ⬜ yok" : "🟩 right place • 🟨 wrong place • ⬜ not in word"}</li>
          <li>{isTurkish ? "6 denemede kelimeyi bul!" : "Find it in 6 tries!"}</li>
        </ul>
      </div>

      <div className="wp-bank">
        <div className="wp-bank-label">{isTurkish ? "Kelime Havuzu" : "Word Bank"}</div>
        <div className="wp-pills">
          {pool.map((w, idx) => <span key={`${w}-${idx}`} className="wp-pill">{w}</span>)}
        </div>
      </div>

      <div className="wp-grid">
        {Array.from({ length: MAX_TRIES }).map((_, r) => (
          <div key={r} className="wp-row">
            {Array.from({ length: WORD_LENGTH }).map((__, c) => renderCell(r, c))}
          </div>
        ))}
      </div>

      {message && (
        <div className={`wp-msg ${msgIsGood ? "wp-msg-good" : msgIsError ? "wp-msg-bad" : ""}`}>
          {message}
        </div>
      )}

      {done && (
        <div className="wp-done-actions">
          <button type="button" className="wp-done-btn" onClick={nextWord}>
            {isTurkish ? "Yeni Kelime →" : "Next Word →"}
          </button>
        </div>
      )}

      <Keyboard />
      <style>{WP_CSS}</style>
    </div>
  );
}

/* ─────────────────────── CSS ─────────────────────── */
const WP_CSS = `

/* ── Root containers ── */
.wp-wrap {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 18px 16px;
  border-radius: 20px;
  border: 1px solid rgba(99,102,241,.18);
  background: linear-gradient(180deg,rgba(255,255,255,.95),rgba(248,250,252,.90));
  box-shadow: 0 16px 40px rgba(2,6,23,.08), 0 1px 0 rgba(255,255,255,.8) inset;
  font-family: inherit;
}

.wp-mobile-root {
  display: flex;
  flex-direction: column;
  height: calc(100svh - 110px);
  min-height: 480px;
  max-height: 820px;
  border-radius: 20px;
  border: 1px solid rgba(99,102,241,.15);
  background: linear-gradient(180deg,rgba(255,255,255,.97),rgba(248,250,252,.93));
  box-shadow: 0 12px 32px rgba(2,6,23,.08);
  overflow: hidden;
}

.wp-mobile-scroll {
  flex: 1;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  padding: 14px 14px 8px;
  scroll-padding-bottom: 8px;
}

.wp-mobile-kbd {
  flex-shrink: 0;
  padding: 8px 10px 10px;
  background: rgba(248,250,252,.98);
  border-top: 1px solid rgba(15,23,42,.08);
  backdrop-filter: blur(10px);
}

/* ── Header ── */
.wp-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
}

.wp-title {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 900;
  font-size: 1.05rem;
  color: #0f172a;
  letter-spacing: .2px;
}
.wp-title-icon { font-size: 1.1rem; }

.wp-actions { display: flex; gap: 8px; }

/* Desktop buttons */
.wp-btn {
  padding: 8px 14px;
  border-radius: 12px;
  border: 1px solid rgba(15,23,42,.12);
  background: rgba(255,255,255,.9);
  cursor: pointer;
  font-weight: 800;
  font-size: .88rem;
  transition: transform .08s, box-shadow .15s, background .15s;
  box-shadow: 0 4px 12px rgba(2,6,23,.06);
}
.wp-btn:hover { background: #fff; box-shadow: 0 8px 20px rgba(2,6,23,.09); }
.wp-btn:active { transform: scale(.97); }
.wp-btn-primary {
  border: none; color: #fff;
  background: linear-gradient(135deg,#6366f1,#3b82f6);
  box-shadow: 0 8px 20px rgba(99,102,241,.25);
}
.wp-btn-primary:hover { box-shadow: 0 12px 28px rgba(99,102,241,.32); }

/* Mobile compact buttons */
.wp-btn-sm {
  padding: 6px 12px;
  border-radius: 10px;
  border: 1px solid rgba(15,23,42,.12);
  background: rgba(255,255,255,.9);
  cursor: pointer;
  font-weight: 800;
  font-size: .80rem;
  white-space: nowrap;
  transition: transform .08s;
  box-shadow: 0 3px 8px rgba(2,6,23,.06);
}
.wp-btn-sm:active { transform: scale(.96); }
.wp-btn-sm.wp-btn-primary {
  border: none; color: #fff;
  background: linear-gradient(135deg,#6366f1,#3b82f6);
  box-shadow: 0 4px 12px rgba(99,102,241,.24);
}

/* ── Legend (mobile) ── */
.wp-legend {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 6px 0 10px;
  font-size: .76rem;
  font-weight: 700;
  color: rgba(15,23,42,.72);
  flex-wrap: wrap;
}
.wp-legend-item { display: flex; align-items: center; gap: 3px; }
.wp-legend-sep { color: rgba(15,23,42,.3); }

/* ── Help box (desktop only) ── */
.wp-help {
  border-radius: 14px;
  border: 1px solid rgba(99,102,241,.16);
  background: rgba(99,102,241,.07);
  padding: 12px 14px;
  margin: 10px 0 12px;
}
.wp-help-title { font-weight: 900; margin: 0 0 5px; font-size: .9rem; color: #0f172a; }
.wp-help-sub   { margin: 0 0 7px; font-weight: 700; font-size: .85rem; opacity: .85; }
.wp-help-steps {
  margin: 0; padding-left: 18px;
  font-weight: 700; font-size: .84rem; line-height: 1.55;
}

/* ── Word bank ── */
.wp-bank { margin: 0 0 12px; }
.wp-bank-label {
  font-weight: 900; font-size: .82rem;
  color: rgba(15,23,42,.65);
  text-transform: uppercase;
  letter-spacing: .6px;
  margin-bottom: 6px;
}
.wp-pills { display: flex; flex-wrap: wrap; gap: 6px; }
.wp-pill {
  padding: 5px 10px;
  border-radius: 99px;
  border: 1px solid rgba(15,23,42,.10);
  background: rgba(255,255,255,.92);
  font-weight: 900;
  font-size: .78rem;
  letter-spacing: .8px;
  color: #0f172a;
  box-shadow: 0 2px 6px rgba(2,6,23,.05);
}

/* ── Grid ── */
.wp-grid {
  display: grid;
  gap: 8px;
  margin: 12px auto;
  width: 100%;
  max-width: 360px;
}
.wp-grid-mobile {
  max-width: 290px;
  gap: 6px;
  margin: 8px auto;
}

.wp-row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
}
.wp-grid-mobile .wp-row { gap: 5px; }

.wp-cell {
  aspect-ratio: 1;
  border-radius: 12px;
  border: 2px solid rgba(15,23,42,.11);
  background: rgba(255,255,255,.92);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 900;
  letter-spacing: 1px;
  color: #0f172a;
  box-shadow: 0 4px 10px rgba(2,6,23,.05), 0 1px 0 rgba(255,255,255,.7) inset;
  transition: border-color .15s, background .2s, box-shadow .15s;
  user-select: none;
}
.wp-grid-mobile .wp-cell {
  font-size: 1.1rem;
  border-radius: 9px;
}

.wp-active {
  border-color: rgba(99,102,241,.6);
  box-shadow: 0 0 0 3px rgba(99,102,241,.14), 0 4px 10px rgba(2,6,23,.05);
}
.wp-correct {
  background: linear-gradient(145deg,rgba(16,185,129,.28),rgba(16,185,129,.18));
  border-color: rgba(16,185,129,.6);
  color: #064e3b;
}
.wp-present {
  background: linear-gradient(145deg,rgba(245,158,11,.30),rgba(245,158,11,.18));
  border-color: rgba(245,158,11,.65);
  color: #78350f;
}
.wp-absent {
  background: linear-gradient(145deg,rgba(148,163,184,.22),rgba(148,163,184,.13));
  border-color: rgba(148,163,184,.55);
  color: rgba(15,23,42,.5);
}

.wp-cell.wp-correct,
.wp-cell.wp-present,
.wp-cell.wp-absent { animation: wpFlip .22s ease; }
@keyframes wpFlip { 0%{transform:scale(.9)} 60%{transform:scale(1.04)} 100%{transform:scale(1)} }

.wp-shake { animation: wpShake .38s ease !important; }
@keyframes wpShake {
  0%,100%{transform:translateX(0)}
  20%{transform:translateX(-6px)}
  40%{transform:translateX(6px)}
  60%{transform:translateX(-4px)}
  80%{transform:translateX(4px)}
}

/* ── Message ── */
.wp-msg {
  margin: 10px 0 6px;
  padding: 10px 14px;
  border-radius: 12px;
  font-weight: 800;
  font-size: .9rem;
  background: rgba(248,250,252,.9);
  border: 1px solid rgba(15,23,42,.10);
  color: rgba(15,23,42,.85);
  text-align: center;
}
.wp-msg-good {
  background: rgba(16,185,129,.12);
  border-color: rgba(16,185,129,.4);
  color: #064e3b;
}
.wp-msg-bad {
  background: rgba(239,68,68,.10);
  border-color: rgba(239,68,68,.35);
  color: #7f1d1d;
}

/* ── Done state ── */
.wp-done-actions {
  display: flex;
  justify-content: center;
  margin: 10px 0 6px;
}
.wp-done-btn {
  padding: 11px 28px;
  border-radius: 14px;
  border: none;
  background: linear-gradient(135deg,#6366f1,#3b82f6);
  color: #fff;
  font-weight: 900;
  font-size: .95rem;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(99,102,241,.28);
  transition: transform .08s, box-shadow .15s;
}
.wp-done-btn:hover { box-shadow: 0 14px 32px rgba(99,102,241,.36); }
.wp-done-btn:active { transform: scale(.97); }

/* ── Keyboard ── */
.wp-kbd { display: flex; flex-direction: column; gap: 6px; }
.wp-kbd-row {
  display: flex;
  gap: 5px;
  justify-content: center;
}

/* Desktop keys */
.wp-key {
  height: 56px;
  min-width: 36px;
  flex: 0 0 auto;
  padding: 0 10px;
  border-radius: 12px;
  border: 1px solid rgba(15,23,42,.12);
  background: rgba(255,255,255,.92);
  cursor: pointer;
  font-weight: 900;
  font-size: .88rem;
  color: #0f172a;
  box-shadow: 0 3px 8px rgba(2,6,23,.07), 0 1px 0 rgba(255,255,255,.8) inset;
  transition: transform .06s, box-shadow .14s, background .14s, border-color .14s;
  user-select: none;
  touch-action: manipulation;
}
.wp-key:hover { box-shadow: 0 6px 16px rgba(2,6,23,.10); }
.wp-key:active { transform: scale(.95); }
.wp-key:disabled { opacity: .55; cursor: not-allowed; }
.wp-wide { min-width: 70px; padding: 0 8px; font-size: .8rem; }

/* Mobile keys — flex: 1 so they fill the row equally */
.wp-mobile-kbd .wp-key {
  flex: 1;
  min-width: 0;
  height: 46px;
  padding: 0;
  font-size: .72rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(2,6,23,.08), 0 1px 0 rgba(255,255,255,.7) inset;
}
.wp-mobile-kbd .wp-wide {
  flex: 1.5;
  font-size: .66rem;
  letter-spacing: -.2px;
}
.wp-mobile-kbd .wp-kbd { gap: 5px; }
.wp-mobile-kbd .wp-kbd-row { gap: 3px; }

/* Key color states */
.wp-key-correct {
  background: linear-gradient(145deg,rgba(16,185,129,.3),rgba(16,185,129,.2));
  border-color: rgba(16,185,129,.55);
  color: #064e3b;
}
.wp-key-present {
  background: linear-gradient(145deg,rgba(245,158,11,.32),rgba(245,158,11,.20));
  border-color: rgba(245,158,11,.60);
  color: #78350f;
}
.wp-key-absent {
  background: linear-gradient(145deg,rgba(148,163,184,.28),rgba(148,163,184,.18));
  border-color: rgba(148,163,184,.55);
  color: rgba(15,23,42,.45);
}
`;
