import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";

/* ------------------------------
   Helpers
------------------------------ */
function pad2(n) {
  return String(n).padStart(2, "0");
}

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

function keyOf(r, c) {
  return `${r},${c}`;
}

/* ------------------------------
   Timer hook
------------------------------ */
function useTimer(isRunning) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isRunning) return;
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [isRunning]);

  const mm = Math.floor(seconds / 60);
  const ss = seconds % 60;

  return {
    seconds,
    label: `${mm}:${pad2(ss)}`,
    reset: () => setSeconds(0),
  };
}

/* ------------------------------
   Puzzle definition
   (Wordwall-like: choose word -> type letters)
------------------------------ */
const GRID_ROWS = 12;
const GRID_COLS = 12;

// Türkçe: büyük harfler (A-Z + TR)
const WORDS = [
  { id: "W3", number: 3, dir: "across", row: 1, col: 1, answer: "KILOBYTE", clueTr: "1024 BYTE = 1 ?" },
  { id: "W4", number: 4, dir: "across", row: 8, col: 0, answer: "MEGABYTE", clueTr: "1024 KILOBYTE = 1 ?" },
  { id: "W6", number: 6, dir: "across", row: 4, col: 4, answer: "GIGABYTE", clueTr: "1024 MEGABYTE = 1 ?" },
  { id: "W5", number: 5, dir: "down",   row: 1, col: 7, answer: "TERABYTE", clueTr: "1024 GIGABYTE = 1 ?" },
  { id: "W2", number: 2, dir: "down",   row: 8, col: 4, answer: "BYTE",     clueTr: "8 BIT = 1 ?" },
  { id: "W1", number: 1, dir: "across", row: 10, col: 2, answer: "BIT",      clueTr: "Verinin en küçük birimi?" },
];

function getWordCells(w) {
  const coords = [];
  for (let i = 0; i < w.answer.length; i++) {
    coords.push({
      r: w.row + (w.dir === "down" ? i : 0),
      c: w.col + (w.dir === "across" ? i : 0),
    });
  }
  return coords;
}

function buildSolutionGrid() {
  const cells = Array.from({ length: GRID_ROWS }, () =>
    Array.from({ length: GRID_COLS }, () => null)
  );

  for (const w of WORDS) {
    const letters = w.answer.toUpperCase().split("");
    for (let i = 0; i < letters.length; i++) {
      const r = w.row + (w.dir === "down" ? i : 0);
      const c = w.col + (w.dir === "across" ? i : 0);
      const ch = letters[i];

      if (!cells[r][c]) {
        cells[r][c] = { ch, wordIds: [w.id] };
      } else {
        // Kesişim: word id ekle (harflerin aynı olması beklenir)
        cells[r][c].wordIds.push(w.id);
      }
    }
  }
  return cells;
}

function makeStartNumberMap() {
  const map = new Map();
  for (const w of WORDS) map.set(keyOf(w.row, w.col), w.number);
  return map;
}

/* ------------------------------
   Wordwall-ish animations
------------------------------ */
const shakeAnim = {
  x: [0, -7, 7, -6, 6, -4, 4, 0],
  transition: { duration: 0.42 },
};

const floatY = {
  initial: { y: 0 },
  animate: { y: [0, -10, 0] },
  transition: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
};

function BalloonsOverlay({ density = 8 }) {
  // Sade ama "Wordwall hissi": yüzen balonlar + confetti vibe
  const balloons = useMemo(() => {
    const arr = [];
    for (let i = 0; i < density; i++) {
      arr.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 60}%`,
        size: 90 + Math.random() * 120,
        blur: 0 + Math.random() * 2,
        opacity: 0.18 + Math.random() * 0.18,
        delay: Math.random() * 2,
      });
    }
    return arr;
  }, [density]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* yumuşak renkli parıltılar */}
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] rounded-full bg-blue-400/10 blur-3xl" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[520px] h-[220px] rounded-full bg-pink-400/10 blur-3xl" />

      {balloons.map((b, idx) => (
        <motion.div
          key={b.id}
          className="absolute"
          style={{ left: b.left, top: b.top }}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: [10, -18, 10], opacity: 1 }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: b.delay,
          }}
        >
          <div
            className="rounded-full"
            style={{
              width: b.size,
              height: b.size,
              filter: `blur(${b.blur}px)`,
              opacity: b.opacity,
              background:
                idx % 4 === 0
                  ? "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.65), rgba(255,165,0,0.55), rgba(255,0,128,0.22))"
                  : idx % 4 === 1
                  ? "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.65), rgba(56,189,248,0.55), rgba(99,102,241,0.22))"
                  : idx % 4 === 2
                  ? "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.65), rgba(34,197,94,0.55), rgba(16,185,129,0.22))"
                  : "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.65), rgba(168,85,247,0.55), rgba(236,72,153,0.22))",
            }}
          />
          {/* ip (basit) */}
          <div className="mx-auto mt-2 w-[2px] h-24 bg-white/10 rounded-full" />
        </motion.div>
      ))}
    </div>
  );
}

/* ------------------------------
   Mini lesson card
------------------------------ */
function MiniLesson({ selectedClue }) {
  return (
    <div className="bg-white/7 border border-white/12 rounded-xl p-4 shadow-[0_10px_35px_rgba(0,0,0,0.35)] backdrop-blur-md">
      <div className="flex items-center justify-between gap-2">
        <div className="font-extrabold text-white">📘 Mini Konu Anlatımı</div>
        <motion.div {...floatY} className="text-xs text-white/70">
          Hızlı ipuçları
        </motion.div>
      </div>

      <div className="mt-2 text-sm text-white/80 leading-relaxed">
        <div className="mb-2">
          <span className="font-semibold text-white">Bit</span> verinin en küçük birimidir.{" "}
          <span className="font-semibold text-white">8 bit = 1 byte</span>.
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="rounded-lg bg-black/20 border border-white/10 p-2">
            <div className="font-bold text-white">1024 Byte</div>
            <div className="text-white/75">= 1 Kilobyte</div>
          </div>
          <div className="rounded-lg bg-black/20 border border-white/10 p-2">
            <div className="font-bold text-white">1024 KB</div>
            <div className="text-white/75">= 1 Megabyte</div>
          </div>
          <div className="rounded-lg bg-black/20 border border-white/10 p-2">
            <div className="font-bold text-white">1024 MB</div>
            <div className="text-white/75">= 1 Gigabyte</div>
          </div>
          <div className="rounded-lg bg-black/20 border border-white/10 p-2">
            <div className="font-bold text-white">1024 GB</div>
            <div className="text-white/75">= 1 Terabyte</div>
          </div>
        </div>

        <div className="mt-3 text-xs text-white/70">
          🎯 Mantık: Her seferinde{" "}
          <span className="font-semibold text-white">1024</span> kat büyüyerek bir üst birime geçilir.
        </div>

        <div className="mt-3 rounded-lg bg-blue-500/15 border border-blue-400/25 p-2 text-xs">
          <div className="font-bold text-white/90">Seçili ipucu</div>
          <div className="text-white/80">
            {selectedClue ? (
              <span className="font-semibold">{selectedClue}</span>
            ) : (
              "Soldan bir soru seçince ipucu burada görünür."
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------
   Main game UI (normal + overlay)
------------------------------ */
function GameUI({
  isOverlay = false,
  showFullscreenButton = false,
  onOpenFullscreen = null,
  onRequestClose = null,
  backgroundUrl = "/images/data_units_bg.png", // sen public/images içine koy
}) {
  const solution = useMemo(() => buildSolutionGrid(), []);
  const startNums = useMemo(() => makeStartNumberMap(), []);
  const wordCells = useMemo(() => {
    const m = new Map();
    for (const w of WORDS) m.set(w.id, getWordCells(w));
    return m;
  }, []);

  const { label: timeLabel, reset: resetTimer } = useTimer(true);

  const [mode, setMode] = useState("select"); // select | type
  const [selectedWordId, setSelectedWordId] = useState(null);
  const [cursorIndex, setCursorIndex] = useState(0);

  const [entries, setEntries] = useState(() => ({})); // "r,c" -> char
  const [solved, setSolved] = useState(() => new Set()); // wordId
  const [score, setScore] = useState(0);

  const [toast, setToast] = useState(null);
  const [shakeKey, setShakeKey] = useState(0);
  const [checkStatus, setCheckStatus] = useState(null);

  // NEW: parlatma / shine animasyonu için
  const [recentSolved, setRecentSolved] = useState(null); // wordId
  const [shineTick, setShineTick] = useState(0);

  const selectedWord = useMemo(
    () => WORDS.find((w) => w.id === selectedWordId) ?? null,
    [selectedWordId]
  );

  const selectedCoords = useMemo(() => {
    if (!selectedWord) return [];
    return wordCells.get(selectedWord.id) ?? [];
  }, [selectedWord, wordCells]);

  const isCellLocked = (cell) => {
    const sol = solution[cell.r][cell.c];
    if (!sol) return false;
    return sol.wordIds.some((id) => solved.has(id));
  };

  const findNextEditableIndex = (start) => {
    for (let i = Math.max(start, 0); i < selectedCoords.length; i += 1) {
      if (!isCellLocked(selectedCoords[i])) return i;
    }
    return -1;
  };

  const findPrevEditableIndex = (start) => {
    for (let i = Math.min(start, selectedCoords.length - 1); i >= 0; i -= 1) {
      if (!isCellLocked(selectedCoords[i])) return i;
    }
    return -1;
  };


  const activeCell = useMemo(() => {
    if (!selectedCoords.length) return null;
    const idx = clamp(cursorIndex, 0, selectedCoords.length - 1);
    return selectedCoords[idx];
  }, [cursorIndex, selectedCoords]);

  const rootRef = useRef(null);

  useEffect(() => {
    const firstEditable = findNextEditableIndex(0);
    setCursorIndex(firstEditable >= 0 ? firstEditable : 0);
    setCheckStatus(null);
    if (selectedWordId) setMode("type");
  }, [selectedWordId, selectedCoords]);

  useEffect(() => {
    if (mode === "type") {
      setTimeout(() => rootRef.current?.focus(), 0);
    }
  }, [mode]);

  const setToastAuto = (obj) => {
    setToast(obj);
    setTimeout(() => setToast(null), 1400);
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

  const isWordSolved = (wordId) => solved.has(wordId);

  const wordTypedString = (w, entriesMap = entries) => {
    const coords = wordCells.get(w.id) ?? [];
    return coords.map(({ r, c }) => (entriesMap[keyOf(r, c)] ?? "").toUpperCase()).join("");
  };

  const doConfetti = () => {
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.65 },
      });
    } catch {}
  };

  const checkSelectedWord = (entriesOverride) => {
    if (!selectedWord) return false;
    if (isWordSolved(selectedWord.id)) return true;

    const entriesMap = entriesOverride ?? entries;
    const typed = wordTypedString(selectedWord, entriesMap);
    const coords = wordCells.get(selectedWord.id) ?? [];
    const hasEmpty = coords.some(({ r, c }) => !entriesMap[keyOf(r, c)]);

    if (typed.length !== selectedWord.answer.length || hasEmpty) {
      setShakeKey((k) => k + 1);
      setToastAuto({ type: "bad", text: "Eksik cevap. Tamamla." });
      setCheckStatus({ wordId: selectedWord.id, type: "bad", text: "Eksik cevap" });
      return false;
    }

    const ok = typed === selectedWord.answer.toUpperCase();

    if (ok) {
      // solved
      setSolved((prev) => new Set(prev).add(selectedWord.id));
      setScore((s) => s + 10);

      setRecentSolved(selectedWord.id);
      setShineTick((t) => t + 1);

      setCheckStatus({ wordId: selectedWord.id, type: "ok", text: "✅ Doğru!" });
      setToastAuto({ type: "ok", text: "🎉 Harika! Kelime kilitlendi." });
      doConfetti();

      setTimeout(() => {
        setSelectedWordId(null);
        setMode("select");
      }, 350);

      // kısa süre sonra recentSolved söndür
      setTimeout(() => setRecentSolved(null), 1200);

      return true;
    }

    setShakeKey((k) => k + 1);
    setCheckStatus({ wordId: selectedWord.id, type: "bad", text: "❌ Yanlış" });
    setToastAuto({ type: "bad", text: "❌ Yanlış, tekrar dene." });
    return false;
  };

  const handleKeyDown = (e) => {
    if (mode !== "type") return;
    if (!selectedWord) return;
    if (isWordSolved(selectedWord.id)) return;

    const cell = activeCell;
    if (!cell) return;

    if (e.key === "Escape" && isOverlay && onRequestClose) {
      onRequestClose();
      return;
    }

    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prevIdx = findPrevEditableIndex(cursorIndex - 1);
      if (prevIdx >= 0) setCursorIndex(prevIdx);
      return;
    }
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const nextIdx = findNextEditableIndex(cursorIndex + 1);
      if (nextIdx >= 0) setCursorIndex(nextIdx);
      return;
    }

    if (e.key === "Backspace") {
      e.preventDefault();
      const prevIdx = findPrevEditableIndex(cursorIndex);
      if (prevIdx < 0) return;
      const prevCell = selectedCoords[prevIdx];
      const k = keyOf(prevCell.r, prevCell.c);
      if (entries[k]) {
        clearCharAt(prevCell.r, prevCell.c);
        setCursorIndex(prevIdx);
      } else {
        const prevIdx2 = findPrevEditableIndex(prevIdx - 1);
        if (prevIdx2 >= 0) {
          const prevCell2 = selectedCoords[prevIdx2];
          clearCharAt(prevCell2.r, prevCell2.c);
          setCursorIndex(prevIdx2);
        }
      }
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      checkSelectedWord();
      return;
    }

    const letter = e.key?.toUpperCase();
    if (/^[A-Z\u0130\u011E\u00DC\u015E\u00D6\u00C7]$/.test(letter)) {
      e.preventDefault();
      const nextEntries = { ...entries, [keyOf(cell.r, cell.c)]: letter };
      setCharAt(cell.r, cell.c, letter);

      if (cursorIndex < selectedCoords.length - 1) {
        setCursorIndex((i) => i + 1);
      } else {
        checkSelectedWord(nextEntries);
      }
    }
  };

  const restart = () => {
    setEntries({});
    setSolved(new Set());
    setSelectedWordId(null);
    setMode("select");
    setCursorIndex(0);
    setScore(0);
    setToast(null);
    setShakeKey(0);
    setCheckStatus(null);
    setRecentSolved(null);
    resetTimer();
  };

  const pickWord = (wordId) => {
    if (isWordSolved(wordId)) return;
    setSelectedWordId(wordId);
    setMode("type");
  };

  // Hücre boyutu: mobilde küçüt, masaüstünde büyüt
  const cellSizeMax = isOverlay ? 46 : 36;
  const cellStyle = {
    width: `clamp(22px, 5.5vw, ${cellSizeMax}px)`,
    height: `clamp(22px, 5.5vw, ${cellSizeMax}px)`,
  };

  const total = WORDS.length;
  const doneCount = solved.size;

  return (
    <div
      ref={rootRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={`relative w-full h-full text-white outline-none ${
        isOverlay ? "rounded-none" : "rounded-2xl"
      } overflow-hidden`}
      style={{ outline: "none" }}
    >
      {/* Background image + dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${backgroundUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(1.05)",
        }}
      />
      <div className="absolute inset-0 bg-slate-950/65" />
      <BalloonsOverlay density={isOverlay ? 12 : 8} />

      {/* Top bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <div className="opacity-90 font-semibold">⏱ {timeLabel}</div>
          <div className="opacity-80">✓ {doneCount}/{total}</div>
          <div className="font-extrabold text-yellow-300">Skor: {score}</div>
          <div className="hidden md:flex items-center gap-2">
            <div className="h-2 w-40 bg-white/10 rounded-full overflow-hidden border border-white/10">
              <div
                className="h-full bg-gradient-to-r from-yellow-400/80 to-orange-400/80"
                style={{ width: `${(doneCount / total) * 100}%` }}
              />
            </div>
            <div className="text-xs opacity-70">{Math.round((doneCount / total) * 100)}%</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-start sm:justify-end">
          <button
            onClick={restart}
            className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-sm shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
            title="Baştan başlat"
          >
            ↻ Baştan Başlat
          </button>

          {showFullscreenButton && (
            <button
              onClick={onOpenFullscreen}
              className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-sm shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
              title="Tam ekran aç"
              type="button"
            >
              ⛶ Tam ekran
            </button>
          )}

          {isOverlay && (
            <button
              onClick={onRequestClose}
              className="px-3 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-sm shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
              title="Kapat (Esc)"
            >
              ✕ Kapat
            </button>
          )}
        </div>
      </div>

      {/* Title + hint */}
      <div className="relative z-10 px-4 py-3">
        <div className="text-center text-lg font-extrabold tracking-wide drop-shadow">
          {mode === "select" ? "🎈 Bir kelime seç" : "⌨️ Harfleri yazın"}
        </div>

        <div className="mt-2 text-center text-sm opacity-95">
          {mode === "select" ? (
            <span className="opacity-90">
              Soldaki sorulardan birini seç veya gridde numaralı kutuya tıkla.
            </span>
          ) : (
            <span className="hidden md:inline"><span className="opacity-75">İpucu:</span>{" "}
              <span className="font-extrabold text-white">{selectedWord?.clueTr}</span>
              <span className="opacity-70"> — </span>
              <span className="opacity-95">Enter = kontrol, Backspace = sil</span></span>
          )}
        </div>

        {checkStatus && (
          <div
            className={`mt-2 mx-auto w-fit px-3 py-1 rounded-lg text-sm border backdrop-blur-md ${
              checkStatus.type === "ok"
                ? "bg-green-500/20 border-green-500/40"
                : "bg-red-500/20 border-red-500/40"
            }`}
          >
            {checkStatus.text}
          </div>
        )}

        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              className={`mt-2 mx-auto w-fit px-3 py-1 rounded-lg text-sm border shadow-[0_12px_28px_rgba(0,0,0,0.35)] backdrop-blur-md ${
                toast.type === "ok"
                  ? "bg-green-500/20 border-green-500/40"
                  : "bg-red-500/20 border-red-500/40"
              }`}
            >
              {toast.text}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Body: mobilde sutun, lg'de yan yana */}
      <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-[260px_1fr] xl:grid-cols-[260px_1fr_300px] gap-3 px-3 pb-4">

        {/* Sorular: mobilde yatay scroll, lg'de sol panel */}
        <div className="bg-black/20 border border-white/12 rounded-2xl p-3 backdrop-blur-md shadow-[0_18px_45px_rgba(0,0,0,0.40)]">
          <div className="text-sm font-extrabold mb-2 opacity-95">Sorular</div>
          {/* mobilde yatay, lg'de dikey liste */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-1 lg:pb-0">
            {WORDS
              .slice()
              .sort((a, b) => a.number - b.number)
              .map((w) => {
                const active = w.id === selectedWordId;
                const done = solved.has(w.id);
                return (
                  <button
                    key={w.id}
                    onClick={() => pickWord(w.id)}
                    className={[
                      "text-left px-3 py-2 rounded-xl border transition shadow-[0_10px_25px_rgba(0,0,0,0.25)] flex-shrink-0 lg:flex-shrink",
                      active
                        ? "bg-blue-500/20 border-blue-400/45"
                        : "bg-white/6 border-white/12 hover:bg-white/10",
                      done ? "opacity-55" : "",
                    ].join(" ")}
                    disabled={done}
                    title={done ? "Tamamlandı" : "Seç"}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-xs lg:text-sm font-extrabold whitespace-nowrap lg:whitespace-normal">
                        <span className="inline-block w-5 opacity-90">{w.number}.</span> {w.clueTr}
                      </div>
                      <div className="text-xs opacity-85 ml-2">
                        {done ? "✓" : w.dir === "across" ? "→" : "↓"}
                      </div>
                    </div>
                    <div className="text-xs opacity-75 mt-0.5">{w.answer.length} harf</div>
                  </button>
                );
              })}
          </div>
        </div>

        {/* Grid — yatay scroll ile taşmayı önle */}
        <div className="bg-black/20 border border-white/12 rounded-2xl p-3 overflow-auto backdrop-blur-md shadow-[0_18px_45px_rgba(0,0,0,0.40)]">
          <motion.div
            key={shakeKey}
            animate={toast?.type === "bad" ? shakeAnim : {}}
            className="mx-auto w-fit"
          >
            <div
              className="grid gap-[3px]"
              style={{
                gridTemplateColumns: `repeat(${GRID_COLS}, ${cellStyle.width})`,
                gridTemplateRows: `repeat(${GRID_ROWS}, ${cellStyle.height})`,
              }}
            >
              {Array.from({ length: GRID_ROWS }).map((_, r) =>
                Array.from({ length: GRID_COLS }).map((__, c) => {
                  const sol = solution[r][c];
                  if (!sol) {
                    return <div key={`${r}-${c}`} style={cellStyle} className="bg-transparent" />;
                  }

                  const k = keyOf(r, c);
                  const val = (entries[k] ?? "").toUpperCase();

                  const inSelected = selectedWordId ? sol.wordIds.includes(selectedWordId) : false;
                  const isStart = startNums.has(k);
                  const num = startNums.get(k);

                  const locked = sol.wordIds.some((id) => solved.has(id));
                  const inRecentSolved = recentSolved ? sol.wordIds.includes(recentSolved) : false;

                  const clickableWordId =
                    selectedWordId && sol.wordIds.includes(selectedWordId)
                      ? selectedWordId
                      : sol.wordIds[0];

                  const isActive =
                    mode === "type" &&
                    inSelected &&
                    activeCell &&
                    activeCell.r === r &&
                    activeCell.c === c;

                  const baseBg = locked ? "bg-green-500/18" : "bg-white/10";
                  const baseBorder = locked ? "border-green-300/35" : "border-white/18";

                  return (
                    <motion.button
                      key={`${r}-${c}-${shineTick}`}
                      onClick={() => {
                        if (locked) return;
                        pickWord(clickableWordId);
                        setTimeout(() => {
                          const w = WORDS.find((x) => x.id === clickableWordId);
                          if (!w) return;
                          const coords = wordCells.get(w.id) ?? [];
                          const idx = coords.findIndex((p) => p.r === r && p.c === c);
                          if (idx >= 0) setCursorIndex(idx);
                        }, 0);
                      }}
                      disabled={locked}
                      style={cellStyle}
                      className={[
                        "relative rounded-md border flex items-center justify-center select-none transition",
                        "font-extrabold",
                        baseBg,
                        baseBorder,
                        "shadow-[0_4px_12px_rgba(0,0,0,0.35)]",
                        "before:content-[''] before:absolute before:inset-0 before:rounded-md before:pointer-events-none",
                        "before:bg-gradient-to-b before:from-white/10 before:to-transparent",
                        mode === "type" && inSelected ? "ring-2 ring-blue-400/40" : "",
                        isActive ? "ring-4 ring-yellow-300/55" : "",
                        locked ? "shadow-[0_0_0_1px_rgba(134,239,172,0.25)]" : "",
                      ].join(" ")}
                      title={sol.wordIds.join(", ")}
                      initial={false}
                      animate={
                        inRecentSolved
                          ? { boxShadow: "0 0 0 1px rgba(250,204,21,0.25), 0 0 28px rgba(250,204,21,0.28)" }
                          : {}
                      }
                      transition={{ duration: 0.35 }}
                    >
                      {inRecentSolved && (
                        <motion.span
                          className="absolute inset-0 rounded-md pointer-events-none overflow-hidden"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <motion.span
                            className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/18 to-transparent rotate-12"
                            initial={{ x: 0 }}
                            animate={{ x: "220%" }}
                            transition={{ duration: 0.65, ease: "easeInOut" }}
                          />
                        </motion.span>
                      )}

                      {isStart && (
                        <span className="absolute top-0.5 left-0.5 text-[9px] leading-none opacity-85 font-extrabold">
                          {num}
                        </span>
                      )}

                      <span
                        className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]"
                        style={{ fontSize: `clamp(10px, 2.8vw, 16px)` }}
                      >
                        {val}
                      </span>
                    </motion.button>
                  );
                })
              )}
            </div>
          </motion.div>

          <div className="mt-2 text-xs text-white/65">
            Önce <span className="font-semibold">kelime seç</span>, sonra yaz. Son harfte otomatik kontrol.
          </div>
        </div>

        {/* Mini ders: mobilde altta, xl'de sag panel */}
        <div className="xl:block">
          <MiniLesson selectedClue={selectedWord?.clueTr ?? null} />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------
   Export component with fullscreen overlay
------------------------------ */
export default function DataUnitsCrosswordWordwall() {
  const [overlayOpen, setOverlayOpen] = useState(false);

  useEffect(() => {
    if (!overlayOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOverlayOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [overlayOpen]);

  return (
    <div className="w-full">
      {/* Normal view */}
      <div className="relative rounded-2xl border border-white/10 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
        <GameUI showFullscreenButton onOpenFullscreen={() => setOverlayOpen(true)} />
      </div>

      {/* Fullscreen overlay (kırpıksız) */}
      <AnimatePresence>
        {overlayOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm"
            onMouseDown={() => setOverlayOpen(false)}
          >
            <div
              className="w-screen h-[100dvh] bg-black"
              onMouseDown={(e) => e.stopPropagation()}
            >
              <GameUI
                isOverlay
                onRequestClose={() => setOverlayOpen(false)}
                showFullscreenButton={false}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}




