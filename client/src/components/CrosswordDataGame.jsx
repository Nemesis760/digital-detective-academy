import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./crossword-data-game.css";

const GRID_ROWS = 12;
const GRID_COLS = 12;

const QUESTIONS = [
  { id: "Q1", number: 1, dir: "across", row: 10, col: 2, answer: "BIT", clue: "Verinin en küçük birimi?" },
  { id: "Q2", number: 2, dir: "down", row: 8, col: 4, answer: "BYTE", clue: "8 BIT = 1 ?" },
  { id: "Q3", number: 3, dir: "across", row: 1, col: 1, answer: "KILOBYTE", clue: "1024 BYTE = 1 ?" },
  { id: "Q4", number: 4, dir: "across", row: 8, col: 0, answer: "MEGABYTE", clue: "1024 KILOBYTE = 1 ?" },
  { id: "Q5", number: 5, dir: "across", row: 4, col: 4, answer: "GIGABYTE", clue: "1024 MEGABYTE = 1 ?" },
  { id: "Q6", number: 6, dir: "down", row: 1, col: 7, answer: "TERABYTE", clue: "1024 GIGABYTE = 1 ?" },
];

const HINTS = {
  Q1: "Bit, bilgisayardaki en küçük bilgi parçasıdır. 0 veya 1 olabilir.",
  Q2: "8 bit birleşince 1 byte eder. Byte, harf ve sayıları saklamada kullanılır.",
  Q3: "Bilgisayarda bilgiler 2 tabanlı sistemle saklanır. Bu yüzden 1024 byte, 1 kilobyte eder.",
  Q4: "1024 kilobyte, 1 megabyte eder. Fotoğraflar ve küçük dosyalar için yaygındır.",
  Q5: "1024 megabyte, 1 gigabyte eder. Uygulamalar ve oyunlar genelde GB ile ölçülür.",
  Q6: "1024 gigabyte, 1 terabyte eder. Büyük arşivler ve diskler TB ile ifade edilir.",
};

function keyOf(r, c) {
  return `${r},${c}`;
}

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

function getWordCells(word) {
  const coords = [];
  for (let i = 0; i < word.answer.length; i += 1) {
    coords.push({
      r: word.row + (word.dir === "down" ? i : 0),
      c: word.col + (word.dir === "across" ? i : 0),
    });
  }
  return coords;
}

function buildGrid() {
  const cells = Array.from({ length: GRID_ROWS }, () =>
    Array.from({ length: GRID_COLS }, () => null)
  );

  QUESTIONS.forEach((word) => {
    const letters = word.answer.toUpperCase().split("");
    letters.forEach((ch, i) => {
      const r = word.row + (word.dir === "down" ? i : 0);
      const c = word.col + (word.dir === "across" ? i : 0);
      if (!cells[r][c]) {
        cells[r][c] = { ch, wordIds: [word.id] };
      } else {
        cells[r][c].wordIds.push(word.id);
      }
    });
  });

  return cells;
}

function makeStartNumbers() {
  const map = new Map();
  QUESTIONS.forEach((word) => {
    map.set(keyOf(word.row, word.col), word.number);
  });
  return map;
}

const letterAnim = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.15 },
};

const pulseAnim = {
  animate: { boxShadow: "0 0 0 4px rgba(34, 197, 94, 0.2)" },
  transition: { duration: 0.6, repeat: 2, repeatType: "mirror" },
};

// entries, solved, score are lifted up and shared between normal + fullscreen views
function CrosswordBoard({ isOverlay, onRequestClose, entries, setEntries, solved, setSolved, score, setScore }) {
  const solution = useMemo(() => buildGrid(), []);
  const startNums = useMemo(() => makeStartNumbers(), []);
  const wordCells = useMemo(() => {
    const map = new Map();
    QUESTIONS.forEach((w) => map.set(w.id, getWordCells(w)));
    return map;
  }, []);

  const [selectedWordId, setSelectedWordId] = useState(null);
  const [cursorIndex, setCursorIndex] = useState(0);
  const [toast, setToast] = useState(null);
  const [shakeKey, setShakeKey] = useState(0);
  const [hintOpen, setHintOpen] = useState(true);

  const rootRef = useRef(null);
  const selectedWord = useMemo(
    () => QUESTIONS.find((w) => w.id === selectedWordId) ?? null,
    [selectedWordId]
  );

  const selectedCoords = useMemo(() => {
    if (!selectedWord) return [];
    return wordCells.get(selectedWord.id) ?? [];
  }, [selectedWord, wordCells]);

  const activeCell = useMemo(() => {
    if (!selectedCoords.length) return null;
    return selectedCoords[clamp(cursorIndex, 0, selectedCoords.length - 1)];
  }, [cursorIndex, selectedCoords]);

  useEffect(() => {
    if (selectedWordId) {
      setCursorIndex(0);
      setTimeout(() => rootRef.current?.focus(), 0);
    }
  }, [selectedWordId]);

  const setToastAuto = (obj) => {
    setToast(obj);
    setTimeout(() => setToast(null), 1200);
  };

  const setCharAt = (r, c, ch) => {
    const k = keyOf(r, c);
    setEntries((prev) => ({ ...prev, [k]: ch }));
  };

  const clearCharAt = (r, c) => {
    const k = keyOf(r, c);
    setEntries((prev) => {
      const next = { ...prev };
      delete next[k];
      return next;
    });
  };

  const wordTypedString = (word) => {
    const coords = wordCells.get(word.id) ?? [];
    return coords.map(({ r, c }) => (entries[keyOf(r, c)] ?? "").toUpperCase()).join("");
  };

  const checkSelectedWord = () => {
    if (!selectedWord) return;
    if (solved.has(selectedWord.id)) return;

    const typed = wordTypedString(selectedWord);
    if (typed.length !== selectedWord.answer.length || typed.includes("")) return;

    const ok = typed === selectedWord.answer.toUpperCase();
    if (ok) {
      setSolved((prev) => new Set(prev).add(selectedWord.id));
      setScore((s) => s + 10);
      setToastAuto({ type: "ok", text: "✅ Doğru!" });
      setTimeout(() => setSelectedWordId(null), 250);
      return;
    }

    setShakeKey((k) => k + 1);
    setToastAuto({ type: "bad", text: "❌ Yanlış, tekrar dene." });
  };

  const doBackspace = () => {
    if (!selectedWord || solved.has(selectedWord.id) || !activeCell) return;
    const k = keyOf(activeCell.r, activeCell.c);
    if (entries[k]) {
      clearCharAt(activeCell.r, activeCell.c);
    } else {
      const prevIdx = clamp(cursorIndex - 1, 0, selectedCoords.length - 1);
      setCursorIndex(prevIdx);
      const prev = selectedCoords[prevIdx];
      if (prev) clearCharAt(prev.r, prev.c);
    }
  };

  const handleKeyDown = (e) => {
    if (!selectedWord) return;
    if (solved.has(selectedWord.id)) return;
    if (!activeCell) return;

    if (e.key === "Escape" && isOverlay && onRequestClose) {
      onRequestClose();
      return;
    }

    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      setCursorIndex((i) => clamp(i - 1, 0, selectedCoords.length - 1));
      return;
    }
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      setCursorIndex((i) => clamp(i + 1, 0, selectedCoords.length - 1));
      return;
    }

    if (e.key === "Backspace") {
      e.preventDefault();
      doBackspace();
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      checkSelectedWord();
      return;
    }

    const letter = e.key?.toUpperCase();
    if (/^[A-ZİĞÜŞÖÇ]$/.test(letter)) {
      e.preventDefault();
      setCharAt(activeCell.r, activeCell.c, letter);
      if (cursorIndex < selectedCoords.length - 1) {
        setCursorIndex((i) => i + 1);
      } else {
        setTimeout(() => checkSelectedWord(), 0);
      }
    }
  };

  const restart = () => {
    setEntries({});
    setSolved(new Set());
    setSelectedWordId(null);
    setCursorIndex(0);
    setScore(0);
    setToast(null);
    setShakeKey(0);
  };

  const pickWord = (wordId, r, c) => {
    if (solved.has(wordId)) return;
    setSelectedWordId(wordId);
    if (typeof r === "number" && typeof c === "number") {
      const coords = wordCells.get(wordId) ?? [];
      const idx = coords.findIndex((p) => p.r === r && p.c === c);
      if (idx >= 0) setCursorIndex(idx);
    }
  };

  const hintText = selectedWord ? HINTS[selectedWord.id] : HINTS.Q3;
  const cellSize = isOverlay ? 44 : 38;
  const cellStyle = {
    width: `clamp(30px, 3.6vw, ${cellSize}px)`,
    height: `clamp(30px, 3.6vw, ${cellSize}px)`,
  };

  return (
    <div
      ref={rootRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={`cdg-root ${isOverlay ? "cdg-root--overlay" : ""}`}
    >
      <div className="cdg-overlay" />

      <div className="cdg-header">
        <div className="cdg-header-left">
          <div className="cdg-title">Veri Birimleri Bulmacası</div>
          <div className="cdg-subtitle">
            {selectedWord ? "Harfleri yazın" : "Bir kelime seç"}
          </div>
        </div>
        <div className="cdg-header-right">
          <div className="cdg-score">Skor: {score}</div>
          <button type="button" className="cdg-btn" onClick={restart}>
            ↻ Baştan başlat
          </button>
          {isOverlay && (
            <button type="button" className="cdg-btn cdg-btn--close" onClick={onRequestClose}>
              ✕ Kapat
            </button>
          )}
        </div>
      </div>

      <div className="cdg-body">
        <div className="cdg-panel">
          <div className="cdg-panel-title">Sorular</div>
          <div className="cdg-questions">
            {QUESTIONS.slice()
              .sort((a, b) => a.number - b.number)
              .map((q) => {
                const active = q.id === selectedWordId;
                const done = solved.has(q.id);
                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => pickWord(q.id)}
                    disabled={done}
                    className={[
                      "cdg-question",
                      active ? "cdg-question--active" : "",
                      done ? "cdg-question--done" : "",
                    ].join(" ")}
                  >
                    <div className="cdg-question-top">
                      <span className="cdg-question-num">{q.number}.</span>
                      <span className="cdg-question-text">{q.clue}</span>
                    </div>
                    <div className="cdg-question-meta">
                      {q.answer.length} harf · {q.dir === "across" ? "→" : "↓"}
                    </div>
                  </button>
                );
              })}
          </div>
        </div>

        <div className="cdg-grid-wrap">
          <AnimatePresence>
            {toast && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className={`cdg-toast ${toast.type === "ok" ? "cdg-toast--ok" : "cdg-toast--bad"}`}
              >
                {toast.text}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            key={shakeKey}
            animate={toast?.type === "bad" ? { x: [0, -6, 6, -5, 5, -3, 3, 0] } : {}}
            transition={{ duration: 0.45 }}
            className="cdg-grid"
          >
            {Array.from({ length: GRID_ROWS }).map((_, r) =>
              Array.from({ length: GRID_COLS }).map((__, c) => {
                const sol = solution[r][c];
                if (!sol) {
                  return <div key={`${r}-${c}`} style={cellStyle} className="cdg-cell cdg-cell--empty" />;
                }

                const k = keyOf(r, c);
                const val = (entries[k] ?? "").toUpperCase();
                const inSelected = selectedWordId ? sol.wordIds.includes(selectedWordId) : false;
                const locked = sol.wordIds.some((id) => solved.has(id));
                const isStart = startNums.has(k);
                const num = startNums.get(k);
                const clickableWordId =
                  selectedWordId && sol.wordIds.includes(selectedWordId)
                    ? selectedWordId
                    : sol.wordIds[0];

                const isActive =
                  selectedWordId &&
                  inSelected &&
                  activeCell &&
                  activeCell.r === r &&
                  activeCell.c === c;

                return (
                  <button
                    key={`${r}-${c}`}
                    type="button"
                    disabled={locked}
                    style={cellStyle}
                    onClick={() => pickWord(clickableWordId, r, c)}
                    className={[
                      "cdg-cell",
                      inSelected ? "cdg-cell--highlight" : "",
                      isActive ? "cdg-cell--active" : "",
                      locked ? "cdg-cell--locked" : "",
                    ].join(" ")}
                  >
                    {isStart && <span className="cdg-cell-num">{num}</span>}
                    <motion.span {...letterAnim} className="cdg-cell-letter">
                      {val}
                    </motion.span>
                    {locked && <motion.span {...pulseAnim} className="cdg-cell-glow" />}
                  </button>
                );
              })
            )}
          </motion.div>

          {/* Backspace button — visible when a word is selected */}
          {selectedWord && !solved.has(selectedWord.id) && (
            <div className="cdg-actions">
              <button
                type="button"
                className="cdg-btn cdg-btn--backspace"
                onClick={() => { doBackspace(); rootRef.current?.focus(); }}
              >
                ⌫ Geri Sil
              </button>
              <button
                type="button"
                className="cdg-btn cdg-btn--check"
                onClick={() => { checkSelectedWord(); rootRef.current?.focus(); }}
              >
                ✓ Kontrol Et
              </button>
            </div>
          )}

          {/* Collapsible hint */}
          <div className="cdg-hint">
            <button
              type="button"
              className="cdg-hint-toggle"
              onClick={() => setHintOpen((o) => !o)}
            >
              <span>💡 İpucu & Bilgi</span>
              <span className="cdg-hint-chevron">{hintOpen ? "▲" : "▼"}</span>
            </button>
            <AnimatePresence initial={false}>
              {hintOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="cdg-hint-body"
                >
                  <div className="cdg-hint-text">{hintText}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CrosswordDataGame() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Shared state — survives normal ↔ fullscreen switch
  const [entries, setEntries] = useState({});
  const [solved, setSolved] = useState(() => new Set());
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!isFullscreen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIsFullscreen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isFullscreen]);

  const sharedProps = { entries, setEntries, solved, setSolved, score, setScore };

  return (
    <div className="cdg-container">
      <div className="cdg-card">
        <button type="button" className="cdg-fullscreen-btn" onClick={() => setIsFullscreen(true)}>
          ⛶ Tam ekran
        </button>
        <div className="cdg-card-body">
          <CrosswordBoard {...sharedProps} />
        </div>
      </div>

      {isFullscreen && (
        <div className="cdg-fullscreen" onMouseDown={() => setIsFullscreen(false)}>
          <div className="cdg-fullscreen-content" onMouseDown={(e) => e.stopPropagation()}>
            <CrosswordBoard isOverlay onRequestClose={() => setIsFullscreen(false)} {...sharedProps} />
          </div>
        </div>
      )}
    </div>
  );
}
