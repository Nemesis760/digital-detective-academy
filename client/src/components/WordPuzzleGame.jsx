import { useEffect, useMemo, useRef, useState } from "react";

function normalizeWord(w) {
  return String(w || "")
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "");
}

// Wordle feedback:
// correct: doğru harf doğru yerde
// present: doğru harf yanlış yerde
// absent: yok
function scoreGuess(guess, target) {
  const g = guess.split("");
  const t = target.split("");

  const result = Array(g.length).fill("absent");
  const used = Array(t.length).fill(false);

  // 1) correct
  for (let i = 0; i < g.length; i++) {
    if (g[i] === t[i]) {
      result[i] = "correct";
      used[i] = true;
    }
  }

  // 2) present
  for (let i = 0; i < g.length; i++) {
    if (result[i] === "correct") continue;
    const idx = t.findIndex((ch, j) => !used[j] && ch === g[i]);
    if (idx !== -1) {
      result[i] = "present";
      used[idx] = true;
    }
  }

  return result;
}

const TR_KEYS = [
  "E","R","T","Y","U","I","O","P","Ğ","Ü",      // satır 1: 10
  "A","S","D","F","G","H","J","K","L","Ş","İ",  // satır 2: 11
  "Z","C","V","B","N","M","Ö","Ç"               // satır 3: 8  → Enter + 8 + ⌫ sığar
];

const TR_CHARSET = new Set("ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ");

export default function WordPuzzleGame({ words = [], isTurkish }) {
  const WORD_LENGTH = 5;
  const MAX_TRIES = 6;

  const pool = useMemo(() => {
    const cleaned = (words || [])
      .map(normalizeWord)
      .filter((w) => w.length === WORD_LENGTH);
    return cleaned.length ? cleaned : ["GUARD", "CYBER", "LOCKS", "SMART", "CLOUD"];
  }, [words]);

  const [seed, setSeed] = useState(0);
  const target = useMemo(() => pool[seed % pool.length], [pool, seed]);

  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const [grid, setGrid] = useState(() => Array.from({ length: MAX_TRIES }, () => Array(WORD_LENGTH).fill("")));
  const [statuses, setStatuses] = useState(() => Array.from({ length: MAX_TRIES }, () => Array(WORD_LENGTH).fill("")));
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);

  const [keyStatus, setKeyStatus] = useState({}); // letter -> correct/present/absent
  const containerRef = useRef(null);

  const reset = () => {
    setRow(0);
    setCol(0);
    setGrid(Array.from({ length: MAX_TRIES }, () => Array(WORD_LENGTH).fill("")));
    setStatuses(Array.from({ length: MAX_TRIES }, () => Array(WORD_LENGTH).fill("")));
    setKeyStatus({});
    setMessage("");
    setDone(false);
  };

  const nextWord = () => {
    setSeed((s) => s + 1);
    reset();
  };

  const setCell = (r, c, val) => {
    setGrid((prev) => {
      const copy = prev.map((rr) => rr.slice());
      copy[r][c] = val;
      return copy;
    });
  };

  const backspace = () => {
    if (done) return;
    if (col > 0) {
      setCell(row, col - 1, "");
      setCol((c) => Math.max(0, c - 1));
    }
  };

  const typeLetter = (ch) => {
    if (done) return;
    if (row >= MAX_TRIES) return;
    if (col >= WORD_LENGTH) return;
    setCell(row, col, ch);
    setCol((c) => Math.min(WORD_LENGTH, c + 1));
  };

  const submit = () => {
    if (done) return;
    const guess = grid[row].join("");
    if (guess.length !== WORD_LENGTH || grid[row].some((x) => !x)) {
      setMessage(isTurkish ? "5 harf yazmalısın." : "Type 5 letters.");
      return;
    }

    const fb = scoreGuess(guess, target);
    setStatuses((prev) => {
      const copy = prev.map((rr) => rr.slice());
      copy[row] = fb;
      return copy;
    });

    // update keyboard states (correct > present > absent)
    setKeyStatus((prev) => {
      const next = { ...prev };
      for (let i = 0; i < WORD_LENGTH; i++) {
        const letter = guess[i];
        const st = fb[i];
        const old = next[letter];

        const rank = { absent: 0, present: 1, correct: 2 };
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
      setMessage(isTurkish ? `😅 Bitti! Doğru kelime: ${target}` : `😅 Game over! Word: ${target}`);
      return;
    }

    setRow((r) => r + 1);
    setCol(0);
    setMessage("");
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      const k = e.key;

      if (k === "Enter") {
        e.preventDefault();
        submit();
        return;
      }
      if (k === "Backspace") {
        e.preventDefault();
        backspace();
        return;
      }

      const upper = k.length === 1 ? k.toUpperCase() : "";
      if (upper && TR_CHARSET.has(upper)) {
        e.preventDefault();
        typeLetter(upper);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grid, row, col, done, target]);

  useEffect(() => {
    // focus container for accessibility (optional)
    containerRef.current?.focus?.();
  }, []);

  const renderCell = (r, c) => {
    const val = grid[r][c];
    const st = statuses[r][c];
    const isActive = r === row && c === col && !done;

    return (
      <div
        key={`${r}-${c}`}
        className={`wp-cell ${st ? `wp-${st}` : ""} ${isActive ? "wp-active" : ""}`}
      >
        {val}
      </div>
    );
  };

  const keyClass = (k) => {
    const st = keyStatus[k];
    if (!st) return "wp-key";
    return `wp-key wp-${st}`;
  };

  return (
    <div className="wp-wrap" ref={containerRef} tabIndex={-1}>
      <div className="wp-top">
        <div className="wp-title">
          {isTurkish ? "Kelime Oyunu" : "Word Game"}
        </div>

        <div className="wp-actions">
          <button type="button" className="wp-btn" onClick={reset}>
            {isTurkish ? "Sıfırla" : "Reset"}
          </button>
          <button type="button" className="wp-btn wp-btn-primary" onClick={nextWord}>
            {isTurkish ? "Yeni Kelime" : "New Word"}
          </button>
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
        <div className="wp-bank-head">
          <div className="wp-bank-label">{isTurkish ? "Kelime Havuzu" : "Word Bank"}</div>
        </div>
        <div className="wp-pills">
          {pool.map((w, idx) => (
            <span key={`${w}-${idx}`} className="wp-pill">
              {w}
            </span>
          ))}
        </div>
      </div>

      <div className="wp-grid" aria-label="Wordle grid">
        {Array.from({ length: MAX_TRIES }).map((_, r) => (
          <div key={r} className="wp-row">
            {Array.from({ length: WORD_LENGTH }).map((__, c) => renderCell(r, c))}
          </div>
        ))}
      </div>

      <div className="wp-message" role="status" aria-live="polite">
        {message || (isTurkish ? "İpucu: Büyük harflerle yaz." : "Tip: Type in uppercase.")}
      </div>

      <div className="wp-kbd" aria-label="Keyboard">
        <div className="wp-kbd-row">
          {TR_KEYS.slice(0, 10).map((k) => (
            <button key={k} type="button" className={keyClass(k)} onClick={() => typeLetter(k)} disabled={done}>
              {k}
            </button>
          ))}
        </div>
        <div className="wp-kbd-row">
          {TR_KEYS.slice(10, 21).map((k) => (
            <button key={k} type="button" className={keyClass(k)} onClick={() => typeLetter(k)} disabled={done}>
              {k}
            </button>
          ))}
        </div>
        <div className="wp-kbd-row">
          <button type="button" className="wp-key wp-wide" onClick={submit} disabled={done}>
            Enter
          </button>
          {TR_KEYS.slice(21).map((k) => (
            <button key={k} type="button" className={keyClass(k)} onClick={() => typeLetter(k)} disabled={done}>
              {k}
            </button>
          ))}
          <button type="button" className="wp-key wp-wide" onClick={backspace} disabled={done}>
            ⌫
          </button>
        </div>
      </div>

      {/* Self-contained CSS */}
      <style>
        {`
.wp-wrap{
  width:100%;
  max-width: 620px;
  margin: 0 auto;
  padding: 16px;
  border-radius: 20px;
  border: 1px solid rgba(99,102,241,.20);
  background: linear-gradient(180deg, rgba(255,255,255,.90), rgba(255,255,255,.78));
  box-shadow:
    0 12px 28px rgba(2,6,23,.08),
    0 1px 0 rgba(255,255,255,.7) inset;
}

.wp-top{
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap: 12px;
  margin-bottom: 10px;
}

.wp-title{
  font-weight: 1000;
  font-size: 1.05rem;
  letter-spacing: .2px;
  color: #0f172a;
}

.wp-actions{
  display:flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.wp-btn{
  padding: 9px 12px;
  border-radius: 14px;
  border: 1px solid rgba(15,23,42,.12);
  background: rgba(255,255,255,.9);
  cursor: pointer;
  font-weight: 900;
  transition: transform .08s ease, box-shadow .18s ease, background .18s ease;
  box-shadow: 0 6px 18px rgba(2,6,23,.06);
}
.wp-btn:hover{
  background: rgba(255,255,255,1);
  box-shadow: 0 10px 24px rgba(2,6,23,.10);
}
.wp-btn:active{ transform: scale(.98); }

.wp-btn-primary{
  border: none;
  color: #fff;
  background: linear-gradient(135deg, #6366f1, #3b82f6);
  box-shadow: 0 12px 26px rgba(59,130,246,.22);
}
.wp-btn-primary:hover{
  box-shadow: 0 16px 34px rgba(59,130,246,.28);
}

.wp-grid{
  display:grid;
  gap: 10px;
  margin: 14px 0 10px;
}

.wp-row{
  display:grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}

.wp-cell{
  height: 58px;
  border-radius: 16px;
  border: 1.5px solid rgba(15,23,42,.12);
  background: rgba(255,255,255,.92);
  display:flex;
  align-items:center;
  justify-content:center;

  font-size: 1.35rem;
  font-weight: 1000;
  letter-spacing: 2px;
  color: #0f172a;

  box-shadow:
    0 10px 20px rgba(2,6,23,.06),
    0 1px 0 rgba(255,255,255,.7) inset;

  transition: transform .10s ease, border-color .18s ease, box-shadow .18s ease, background .18s ease;
  user-select:none;
}

.wp-active{
  border-color: rgba(59,130,246,.65);
  box-shadow:
    0 0 0 4px rgba(59,130,246,.15),
    0 10px 20px rgba(2,6,23,.06);
}

.wp-correct{
  background: linear-gradient(180deg, rgba(16,185,129,.22), rgba(16,185,129,.16));
  border-color: rgba(16,185,129,.65);
}
.wp-present{
  background: linear-gradient(180deg, rgba(245,158,11,.24), rgba(245,158,11,.16));
  border-color: rgba(245,158,11,.70);
}
.wp-absent{
  background: linear-gradient(180deg, rgba(148,163,184,.22), rgba(148,163,184,.14));
  border-color: rgba(148,163,184,.70);
  color: rgba(15,23,42,.65);
}

.wp-cell.wp-correct,
.wp-cell.wp-present,
.wp-cell.wp-absent{
  animation: wpPop .18s ease;
}
@keyframes wpPop{
  0%{ transform: scale(.98); }
  100%{ transform: scale(1); }
}

.wp-message{
  min-height: 24px;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid rgba(15,23,42,.10);
  background: rgba(255,255,255,.85);
  font-weight: 900;
  color: rgba(15,23,42,.85);
  box-shadow: 0 8px 18px rgba(2,6,23,.05);
  margin: 10px 0 12px;
}

.wp-kbd{
  display:grid;
  gap: 10px;
}

.wp-kbd-row{
  display:flex;
  gap: 8px;
  justify-content:center;
  flex-wrap: nowrap;
}

.wp-key{
  min-width: 38px;
  padding: 10px 10px;
  border-radius: 14px;
  border: 1px solid rgba(15,23,42,.12);
  background: rgba(255,255,255,.92);
  cursor: pointer;

  font-weight: 1000;
  box-shadow: 0 10px 22px rgba(2,6,23,.06);
  transition: transform .08s ease, box-shadow .18s ease, background .18s ease, border-color .18s ease;
  user-select:none;
}
.wp-key:hover{
  box-shadow: 0 14px 28px rgba(2,6,23,.10);
}
.wp-key:active{ transform: scale(.98); }

.wp-wide{ min-width: 86px; }

.wp-key.wp-correct{
  background: linear-gradient(180deg, rgba(16,185,129,.26), rgba(16,185,129,.18));
  border-color: rgba(16,185,129,.70);
}
.wp-key.wp-present{
  background: linear-gradient(180deg, rgba(245,158,11,.28), rgba(245,158,11,.18));
  border-color: rgba(245,158,11,.75);
}
.wp-key.wp-absent{
  background: linear-gradient(180deg, rgba(148,163,184,.26), rgba(148,163,184,.16));
  border-color: rgba(148,163,184,.75);
  color: rgba(15,23,42,.75);
}
.wp-key:disabled{ opacity:.6; cursor:not-allowed }

/* Add extra styles for NEW instruction + bank UI */
.wp-help{
  border-radius: 16px;
  border: 1px solid rgba(99,102,241,.16);
  background: rgba(99,102,241,.08);
  padding: 12px;
  margin: 10px 0 12px;
}
.wp-help-title{
  font-weight: 1000;
  margin: 0 0 6px 0;
  color: #0f172a;
}
.wp-help-sub{
  margin: 0 0 8px 0;
  font-weight: 800;
  opacity: .9;
}
.wp-help-steps{
  margin: 0;
  padding-left: 18px;
  font-weight: 800;
  line-height: 1.4;
}
.wp-bank{
  margin: 10px 0 12px;
}
.wp-bank-head{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap: 10px;
  margin-bottom: 8px;
}
.wp-bank-label{
  font-weight: 1000;
}
.wp-bank-toggle{
  border:none;
  background: transparent;
  cursor:pointer;
  font-weight: 1000;
  color: rgba(59,130,246,1);
}
.wp-pills{
  display:flex;
  flex-wrap:wrap;
  gap: 8px;
}
.wp-pill{
  padding: 7px 10px;
  border-radius: 999px;
  border: 1px solid rgba(15,23,42,.12);
  background: rgba(255,255,255,.92);
  font-weight: 1000;
  letter-spacing: .6px;
  font-size: .86rem;
}

@media (max-width: 520px){
  .wp-cell{ height: 52px; font-size: 1.2rem; }
  .wp-key{ min-width: 34px; padding: 9px 8px; }
  .wp-wide{ min-width: 76px; }
}
        `}
      </style>
    </div>
  );
}
