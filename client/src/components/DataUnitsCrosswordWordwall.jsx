import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";

// ── Helpers ───────────────────────────────────────────────────────────────────
function pad2(n) { return String(n).padStart(2, "0"); }
function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }
function keyOf(r, c) { return `${r},${c}`; }

// ── Timer ─────────────────────────────────────────────────────────────────────
function useTimer(isRunning) {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    if (!isRunning) return;
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [isRunning]);
  const mm = Math.floor(seconds / 60);
  const ss = seconds % 60;
  return { seconds, label: `${mm}:${pad2(ss)}`, reset: () => setSeconds(0) };
}

// ── Puzzle ────────────────────────────────────────────────────────────────────
const GRID_ROWS = 12;
const GRID_COLS = 12;

const WORDS = [
  { id: "W3", number: 3, dir: "across", row: 1,  col: 1, answer: "KILOBYTE", clueTr: "1024 BYTE = 1 ?" },
  { id: "W4", number: 4, dir: "across", row: 8,  col: 0, answer: "MEGABYTE", clueTr: "1024 KILOBYTE = 1 ?" },
  { id: "W6", number: 6, dir: "across", row: 4,  col: 4, answer: "GIGABYTE", clueTr: "1024 MEGABYTE = 1 ?" },
  { id: "W5", number: 5, dir: "down",   row: 1,  col: 7, answer: "TERABYTE", clueTr: "1024 GIGABYTE = 1 ?" },
  { id: "W2", number: 2, dir: "down",   row: 8,  col: 4, answer: "BYTE",     clueTr: "8 BIT = 1 ?" },
  { id: "W1", number: 1, dir: "across", row: 10, col: 2, answer: "BIT",      clueTr: "Verinin en küçük birimi?" },
];

function getWordCells(w) {
  const coords = [];
  for (let i = 0; i < w.answer.length; i++) {
    coords.push({ r: w.row + (w.dir === "down" ? i : 0), c: w.col + (w.dir === "across" ? i : 0) });
  }
  return coords;
}

function buildSolutionGrid() {
  const cells = Array.from({ length: GRID_ROWS }, () => Array.from({ length: GRID_COLS }, () => null));
  for (const w of WORDS) {
    const letters = w.answer.toUpperCase().split("");
    for (let i = 0; i < letters.length; i++) {
      const r = w.row + (w.dir === "down" ? i : 0);
      const c = w.col + (w.dir === "across" ? i : 0);
      const ch = letters[i];
      if (!cells[r][c]) cells[r][c] = { ch, wordIds: [w.id] };
      else cells[r][c].wordIds.push(w.id);
    }
  }
  return cells;
}

function makeStartNumberMap() {
  const map = new Map();
  for (const w of WORDS) map.set(keyOf(w.row, w.col), w.number);
  return map;
}

// ── Animations ────────────────────────────────────────────────────────────────
const shakeAnim = { x: [0, -7, 7, -6, 6, -4, 4, 0], transition: { duration: 0.42 } };

// ── Background balloons ───────────────────────────────────────────────────────
function BalloonsOverlay({ density = 8 }) {
  const balloons = useMemo(() => {
    const arr = [];
    for (let i = 0; i < density; i++) {
      arr.push({
        id: i, left: `${Math.random() * 100}%`, top: `${Math.random() * 60}%`,
        size: 90 + Math.random() * 120, blur: Math.random() * 2,
        opacity: 0.18 + Math.random() * 0.18, delay: Math.random() * 2,
      });
    }
    return arr;
  }, [density]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] rounded-full bg-blue-400/10 blur-3xl" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[520px] h-[220px] rounded-full bg-pink-400/10 blur-3xl" />
      {balloons.map((b, idx) => (
        <motion.div key={b.id} className="absolute" style={{ left: b.left, top: b.top }}
          initial={{ y: 10, opacity: 0 }} animate={{ y: [10, -18, 10], opacity: 1 }}
          transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, ease: "easeInOut", delay: b.delay }}>
          <div className="rounded-full" style={{
            width: b.size, height: b.size, filter: `blur(${b.blur}px)`, opacity: b.opacity,
            background: idx % 4 === 0
              ? "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.65), rgba(255,165,0,0.55), rgba(255,0,128,0.22))"
              : idx % 4 === 1
              ? "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.65), rgba(56,189,248,0.55), rgba(99,102,241,0.22))"
              : idx % 4 === 2
              ? "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.65), rgba(34,197,94,0.55), rgba(16,185,129,0.22))"
              : "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.65), rgba(168,85,247,0.55), rgba(236,72,153,0.22))",
          }} />
          <div className="mx-auto mt-2 w-[2px] h-24 bg-white/10 rounded-full" />
        </motion.div>
      ))}
    </div>
  );
}

// ── Intro card ────────────────────────────────────────────────────────────────
function IntroCard({ onStart }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <motion.div
        initial={{ scale: 0.88, opacity: 0, y: 24 }} animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.88, opacity: 0, y: 24 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        className="w-full max-w-md rounded-2xl border border-white/15 bg-slate-900/90 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.6)] p-6 text-white">
        <div className="text-center mb-4">
          <div className="text-4xl mb-2">🧩</div>
          <h2 className="text-xl font-extrabold tracking-wide">Veri Birimleri Bulmacası</h2>
          <p className="text-sm text-white/60 mt-1">Nasıl oynanır?</p>
        </div>
        <ul className="space-y-2.5 text-sm text-white/85 mb-6">
          <li className="flex gap-3 items-start">
            <span className="text-lg leading-none flex-shrink-0">1️⃣</span>
            <span>Aşağıdaki sorulardan birini seç <strong>ya da</strong> ızgaradaki numaralı kutuya dokun.</span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-lg leading-none flex-shrink-0">⌨️</span>
            <span>Klavyeyi kullanarak harfleri yaz. Son harfte cevap <strong>otomatik kontrol edilir</strong>.</span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-lg leading-none flex-shrink-0">✅</span>
            <span>Doğru cevap girilince kelime <strong>yeşile döner</strong> ve kilitlenir.</span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-lg leading-none flex-shrink-0">📱</span>
            <span>Mobilde ekran klavyesini kullanabilirsin.</span>
          </li>
        </ul>
        <button onClick={onStart}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 font-extrabold text-white text-base shadow-[0_8px_24px_rgba(99,102,241,0.45)] transition">
          🚀 Başla
        </button>
      </motion.div>
    </motion.div>
  );
}

// ── Virtual keyboard ──────────────────────────────────────────────────────────
const KB_ROWS = [
  ["Q","W","E","R","T","Y","U","I","O","P"],
  ["A","S","D","F","G","H","J","K","L"],
  ["⌫","Z","X","C","V","B","N","M","↵"],
];

function VirtualKeyboard({ onKey, disabled }) {
  return (
    <div style={{
      background: "rgba(10,15,28,0.97)",
      backdropFilter: "blur(16px)",
      padding: "10px 3px 16px",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      flexShrink: 0,
    }}>
      {KB_ROWS.map((row, ri) => (
        <div key={ri} style={{ display: "flex", justifyContent: "center", gap: "5px", marginBottom: ri < 2 ? "6px" : 0 }}>
          {row.map((key) => {
            const isSpecial = key === "⌫" || key === "↵";
            const keyVal = key === "⌫" ? "BACKSPACE" : key === "↵" ? "ENTER" : key;
            return (
              <motion.button
                key={key}
                onPointerDown={(e) => { e.preventDefault(); if (!disabled) onKey(keyVal); }}
                disabled={disabled}
                whileTap={{ scale: 0.8 }}
                style={{
                  width: isSpecial ? "50px" : "31px",
                  height: "44px",
                  background: isSpecial ? "rgba(71,85,105,0.95)" : "rgba(51,65,85,0.95)",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderBottom: "3px solid rgba(0,0,0,0.35)",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: isSpecial ? "16px" : "14px",
                  cursor: disabled ? "not-allowed" : "pointer",
                  opacity: disabled ? 0.35 : 1,
                  touchAction: "manipulation",
                  userSelect: "none",
                  WebkitUserSelect: "none",
                  boxShadow: "0 3px 8px rgba(0,0,0,0.5)",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {key}
              </motion.button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

// ── Word progress bar ─────────────────────────────────────────────────────────
function WordProgress({ coords, cursorIndex, entries, isCellLocked }) {
  if (!coords || coords.length === 0) return null;
  return (
    <div style={{
      display: "flex", justifyContent: "center", gap: "5px",
      padding: "6px 8px", overflowX: "auto", flexShrink: 0,
    }}>
      {coords.map((coord, idx) => {
        const val = (entries[keyOf(coord.r, coord.c)] ?? "").toUpperCase();
        const isActive = idx === cursorIndex;
        const locked = isCellLocked(coord);
        return (
          <motion.div key={idx}
            animate={isActive ? { scale: [1, 1.15, 1] } : {}}
            transition={{ duration: 0.25 }}
            style={{
              minWidth: "32px", width: "32px", height: "40px", flexShrink: 0,
              background: locked ? "rgba(34,197,94,0.22)" : isActive ? "rgba(250,204,21,0.28)" : "rgba(255,255,255,0.08)",
              border: `2px solid ${locked ? "rgba(34,197,94,0.65)" : isActive ? "rgba(250,204,21,0.8)" : "rgba(255,255,255,0.2)"}`,
              borderRadius: "8px",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 900, fontSize: "18px", color: "white",
              boxShadow: isActive ? "0 0 14px rgba(250,204,21,0.3)" : "none",
            }}
          >
            {val}
          </motion.div>
        );
      })}
    </div>
  );
}

// ── Main game UI ──────────────────────────────────────────────────────────────
function GameUI({ isOverlay = false, showFullscreenButton = false, onOpenFullscreen = null, onRequestClose = null, backgroundUrl = "/images/data_units_bg.png", started = false, onStart }) {
  const solution  = useMemo(() => buildSolutionGrid(), []);
  const startNums = useMemo(() => makeStartNumberMap(), []);
  const wordCells = useMemo(() => {
    const m = new Map();
    for (const w of WORDS) m.set(w.id, getWordCells(w));
    return m;
  }, []);

  const { label: timeLabel, reset: resetTimer } = useTimer(started);

  const [mode, setMode]               = useState("select");
  const [selectedWordId, setSelectedWordId] = useState(null);
  const [cursorIndex, setCursorIndex] = useState(0);
  const [entries, setEntries]         = useState({});
  const [solved, setSolved]           = useState(() => new Set());
  const [score, setScore]             = useState(0);
  const [toast, setToast]             = useState(null);
  const [shakeKey, setShakeKey]       = useState(0);
  const [checkStatus, setCheckStatus] = useState(null);
  const [recentSolved, setRecentSolved] = useState(null);
  const [shineTick, setShineTick]     = useState(0);
  const [isMobile, setIsMobile]       = useState(false);

  const rootRef = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const selectedWord   = useMemo(() => WORDS.find((w) => w.id === selectedWordId) ?? null, [selectedWordId]);
  const selectedCoords = useMemo(() => selectedWord ? (wordCells.get(selectedWord.id) ?? []) : [], [selectedWord, wordCells]);

  const isCellLocked = (cell) => {
    const sol = solution[cell.r][cell.c];
    if (!sol) return false;
    return sol.wordIds.some((id) => solved.has(id));
  };

  const findNextEditable = (start) => {
    for (let i = Math.max(start, 0); i < selectedCoords.length; i++) {
      if (!isCellLocked(selectedCoords[i])) return i;
    }
    return -1;
  };

  const findPrevEditable = (start) => {
    for (let i = Math.min(start, selectedCoords.length - 1); i >= 0; i--) {
      if (!isCellLocked(selectedCoords[i])) return i;
    }
    return -1;
  };

  const activeCell = useMemo(() => {
    if (!selectedCoords.length) return null;
    return selectedCoords[clamp(cursorIndex, 0, selectedCoords.length - 1)];
  }, [cursorIndex, selectedCoords]);

  useEffect(() => {
    const first = findNextEditable(0);
    setCursorIndex(first >= 0 ? first : 0);
    setCheckStatus(null);
    if (selectedWordId) setMode("type");
  }, [selectedWordId, selectedCoords]);

  useEffect(() => {
    if (mode === "type" && !isMobile) setTimeout(() => rootRef.current?.focus(), 0);
  }, [mode, isMobile]);

  const setToastAuto = (obj) => { setToast(obj); setTimeout(() => setToast(null), 1400); };
  const setCharAt    = (r, c, ch) => setEntries((p) => ({ ...p, [keyOf(r, c)]: ch }));
  const clearCharAt  = (r, c) => setEntries((p) => { const n = { ...p }; delete n[keyOf(r, c)]; return n; });

  const wordTypedString = (w, entriesMap = entries) => {
    const coords = wordCells.get(w.id) ?? [];
    return coords.map(({ r, c }) => (entriesMap[keyOf(r, c)] ?? "").toUpperCase()).join("");
  };

  const doConfetti = () => { try { confetti({ particleCount: 90, spread: 70, origin: { y: 0.65 } }); } catch {} };

  const checkSelectedWord = (entriesOverride) => {
    if (!selectedWord) return false;
    if (solved.has(selectedWord.id)) return true;
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
      setSolved((prev) => new Set(prev).add(selectedWord.id));
      setScore((s) => s + 10);
      setRecentSolved(selectedWord.id);
      setShineTick((t) => t + 1);
      setCheckStatus({ wordId: selectedWord.id, type: "ok", text: "✅ Doğru!" });
      setToastAuto({ type: "ok", text: "🎉 Harika! Kelime kilitlendi." });
      doConfetti();
      setTimeout(() => { setSelectedWordId(null); setMode("select"); }, 350);
      setTimeout(() => setRecentSolved(null), 1200);
      return true;
    }
    setShakeKey((k) => k + 1);
    setCheckStatus({ wordId: selectedWord.id, type: "bad", text: "❌ Yanlış" });
    setToastAuto({ type: "bad", text: "❌ Yanlış, tekrar dene." });
    return false;
  };

  // Shared key logic — used by both physical keyboard and virtual keyboard
  const processKey = (key) => {
    if (!started) return;
    if (mode !== "type" || !selectedWord || solved.has(selectedWord.id) || !activeCell) return;

    if (key === "ESCAPE" && isOverlay && onRequestClose) { onRequestClose(); return; }
    if (key === "ARROWLEFT" || key === "ARROWUP") { const p = findPrevEditable(cursorIndex - 1); if (p >= 0) setCursorIndex(p); return; }
    if (key === "ARROWRIGHT" || key === "ARROWDOWN") { const n = findNextEditable(cursorIndex + 1); if (n >= 0) setCursorIndex(n); return; }
    if (key === "BACKSPACE") {
      const p = findPrevEditable(cursorIndex);
      if (p < 0) return;
      const pc = selectedCoords[p];
      const k = keyOf(pc.r, pc.c);
      if (entries[k]) { clearCharAt(pc.r, pc.c); setCursorIndex(p); }
      else {
        const p2 = findPrevEditable(p - 1);
        if (p2 >= 0) { clearCharAt(selectedCoords[p2].r, selectedCoords[p2].c); setCursorIndex(p2); }
      }
      return;
    }
    if (key === "ENTER") { checkSelectedWord(); return; }
    const letter = key.length === 1 ? key.toUpperCase() : key;
    if (/^[A-ZİĞÜŞÖÇ]$/.test(letter)) {
      const nextEntries = { ...entries, [keyOf(activeCell.r, activeCell.c)]: letter };
      setCharAt(activeCell.r, activeCell.c, letter);
      if (cursorIndex < selectedCoords.length - 1) setCursorIndex((i) => i + 1);
      else checkSelectedWord(nextEntries);
    }
  };

  const handleKeyDown = (e) => {
    const nav = ["ArrowLeft","ArrowUp","ArrowRight","ArrowDown","Backspace","Enter","Escape"," "];
    if (nav.includes(e.key) || e.key.length === 1) e.preventDefault();
    const mapped = { ArrowLeft:"ARROWLEFT", ArrowRight:"ARROWRIGHT", ArrowUp:"ARROWUP", ArrowDown:"ARROWDOWN", Backspace:"BACKSPACE", Enter:"ENTER", Escape:"ESCAPE" };
    processKey(mapped[e.key] ?? e.key);
  };

  const handleVirtualKey = (key) => processKey(key);

  const restart = () => {
    setEntries({}); setSolved(new Set()); setSelectedWordId(null); setMode("select");
    setCursorIndex(0); setScore(0); setToast(null); setShakeKey(0); setCheckStatus(null);
    setRecentSolved(null); resetTimer();
  };

  const pickWord = (wordId) => {
    if (!started || solved.has(wordId)) return;
    setSelectedWordId(wordId);
    setMode("type");
  };

  const total     = WORDS.length;
  const doneCount = solved.size;
  const allDone   = doneCount === total;

  // Cell size: bigger on overlay, responsive on embedded
  const cellSize = isOverlay ? 42 : 36;
  const cellStyle = { width: `${cellSize}px`, height: `${cellSize}px` };

  // ── Grid element (shared between mobile and desktop) ──────────────────────
  const gridEl = (
    <motion.div key={shakeKey} animate={toast?.type === "bad" ? shakeAnim : {}}>
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${GRID_COLS}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${GRID_ROWS}, ${cellSize}px)`,
          gap: "3px",
        }}
      >
        {Array.from({ length: GRID_ROWS }).map((_, r) =>
          Array.from({ length: GRID_COLS }).map((__, c) => {
            const sol = solution[r][c];
            if (!sol) return <div key={`${r}-${c}`} style={cellStyle} className="bg-transparent" />;
            const k = keyOf(r, c);
            const val = (entries[k] ?? "").toUpperCase();
            const inSelected = selectedWordId ? sol.wordIds.includes(selectedWordId) : false;
            const isStart = startNums.has(k);
            const num = startNums.get(k);
            const locked = sol.wordIds.some((id) => solved.has(id));
            const inRecentSolved = recentSolved ? sol.wordIds.includes(recentSolved) : false;
            const clickableWordId = selectedWordId && sol.wordIds.includes(selectedWordId) ? selectedWordId : sol.wordIds[0];
            const isActive = mode === "type" && inSelected && activeCell && activeCell.r === r && activeCell.c === c;
            return (
              <motion.button
                key={`${r}-${c}-${shineTick}`}
                onClick={() => {
                  if (locked || !started) return;
                  pickWord(clickableWordId);
                  setTimeout(() => {
                    const w = WORDS.find((x) => x.id === clickableWordId);
                    if (!w) return;
                    const coords = wordCells.get(w.id) ?? [];
                    const idx = coords.findIndex((p) => p.r === r && p.c === c);
                    if (idx >= 0) setCursorIndex(idx);
                  }, 0);
                }}
                disabled={locked || !started}
                style={cellStyle}
                className={[
                  "relative rounded-md border flex items-center justify-center select-none transition font-extrabold",
                  locked ? "bg-green-500/18 border-green-300/35" : "bg-white/10 border-white/18",
                  "shadow-[0_4px_12px_rgba(0,0,0,0.35)]",
                  "before:content-[''] before:absolute before:inset-0 before:rounded-md before:pointer-events-none",
                  "before:bg-gradient-to-b before:from-white/10 before:to-transparent",
                  mode === "type" && inSelected ? "ring-2 ring-blue-400/40" : "",
                  isActive ? "ring-4 ring-yellow-300/55" : "",
                ].join(" ")}
                initial={false}
                animate={inRecentSolved ? { boxShadow: "0 0 0 1px rgba(250,204,21,0.25), 0 0 28px rgba(250,204,21,0.28)" } : {}}
                transition={{ duration: 0.35 }}
              >
                {inRecentSolved && (
                  <motion.span className="absolute inset-0 rounded-md pointer-events-none overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <motion.span
                      className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/18 to-transparent rotate-12"
                      initial={{ x: 0 }} animate={{ x: "220%" }} transition={{ duration: 0.65, ease: "easeInOut" }}
                    />
                  </motion.span>
                )}
                {isStart && (
                  <span className="absolute top-0.5 left-0.5 text-[8px] leading-none opacity-85 font-extrabold">{num}</span>
                )}
                <span className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]" style={{ fontSize: `${Math.round(cellSize * 0.4)}px` }}>
                  {val}
                </span>
              </motion.button>
            );
          })
        )}
      </div>
    </motion.div>
  );

  // ── Questions list ────────────────────────────────────────────────────────
  const questionButtons = (horizontal = false) => WORDS.slice().sort((a, b) => a.number - b.number).map((w) => {
    const active = w.id === selectedWordId;
    const done = solved.has(w.id);
    return (
      <button
        key={w.id}
        onClick={() => pickWord(w.id)}
        disabled={done || !started}
        className={[
          "text-left px-3 py-2 rounded-xl border transition shadow-[0_10px_25px_rgba(0,0,0,0.25)]",
          horizontal ? "flex-shrink-0" : "",
          active ? "bg-blue-500/20 border-blue-400/45" : "bg-white/6 border-white/12 hover:bg-white/10",
          done ? "opacity-55" : "",
          !started ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        ].join(" ")}
      >
        <div className="flex items-center justify-between gap-2">
          <div className={`font-extrabold ${horizontal ? "whitespace-nowrap text-xs" : "text-sm"}`}>
            <span className="inline-block w-5 opacity-90">{w.number}.</span> {w.clueTr}
          </div>
          <div className="text-xs opacity-85 ml-2">{done ? "✓" : w.dir === "across" ? "→" : "↓"}</div>
        </div>
        <div className="text-xs opacity-75 mt-0.5">{w.answer.length} harf</div>
      </button>
    );
  });

  // ── Top bar ───────────────────────────────────────────────────────────────
  const topBar = (
    <div className="relative z-10 flex items-center justify-between gap-2 px-3 py-2 border-b border-white/10 bg-black/20 backdrop-blur-md flex-shrink-0">
      <div className="flex items-center gap-3 text-sm flex-wrap">
        <div className="opacity-90 font-semibold">⏱ {timeLabel}</div>
        <div className="opacity-80 font-semibold">✓ {doneCount}/{total}</div>
        <div className="font-extrabold text-yellow-300">+{score}p</div>
        <div className="h-2 w-24 bg-white/10 rounded-full overflow-hidden border border-white/10">
          <div className="h-full bg-gradient-to-r from-yellow-400/80 to-orange-400/80 transition-all duration-500"
            style={{ width: `${(doneCount / total) * 100}%` }} />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={restart} className="px-2 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-xs">
          ↻ Baştan
        </button>
        {showFullscreenButton && (
          <button onClick={onOpenFullscreen} className="px-2 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-xs hidden md:block">
            ⛶ Tam ekran
          </button>
        )}
        {isOverlay && (
          <button onClick={onRequestClose} className="px-2 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-xs">
            ✕ Kapat
          </button>
        )}
      </div>
    </div>
  );

  // ── Clue + toast area ─────────────────────────────────────────────────────
  const clueBar = (
    <div className="relative z-10 px-3 py-2 flex-shrink-0">
      <AnimatePresence>
        {toast && (
          <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
            className={`mx-auto w-fit px-3 py-1.5 rounded-lg text-sm font-bold border backdrop-blur-md shadow-lg text-center ${
              toast.type === "ok" ? "bg-green-500/20 border-green-500/40 text-green-300" : "bg-red-500/20 border-red-500/40 text-red-300"
            }`}>
            {toast.text}
          </motion.div>
        )}
      </AnimatePresence>

      {mode === "type" && selectedWord && !toast && (
        <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
          className="text-center bg-blue-500/15 border border-blue-400/25 rounded-xl px-3 py-2">
          <div className="text-xs text-blue-300/80 mb-0.5">
            {selectedWord.dir === "across" ? "→ Yatay" : "↓ Dikey"} · {selectedWord.answer.length} harf
          </div>
          <div className="font-extrabold text-white text-sm">{selectedWord.clueTr}</div>
        </motion.div>
      )}

      {mode === "select" && !toast && (
        <div className="text-center text-white/50 text-xs py-1">
          {started ? "Bir soru seç veya ızgarada numaralı kutuya dokun" : "Başla'ya bas"}
        </div>
      )}
    </div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // MOBILE LAYOUT
  // ═══════════════════════════════════════════════════════════════════════════
  if (isMobile && !isOverlay) {
    return (
      <div
        ref={rootRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="relative w-full text-white outline-none rounded-2xl overflow-hidden flex flex-col"
        style={{ outline: "none", minHeight: "680px" }}
      >
        {/* Background */}
        <div className="absolute inset-0" style={{ backgroundImage: `url('${backgroundUrl}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-slate-950/70" />
        <BalloonsOverlay density={6} />

        <AnimatePresence>{!started && <IntroCard onStart={onStart} />}</AnimatePresence>

        {/* Top bar */}
        {topBar}

        {/* Clue bar */}
        {clueBar}

        {/* Word progress */}
        {mode === "type" && selectedWord && (
          <div className="relative z-10 flex-shrink-0 pb-1">
            <WordProgress
              coords={selectedCoords}
              cursorIndex={cursorIndex}
              entries={entries}
              isCellLocked={isCellLocked}
            />
          </div>
        )}

        {/* Scrollable body: grid + questions */}
        <div className="relative z-10 flex-1 overflow-y-auto overflow-x-hidden px-2 pb-2">
          {/* Grid — horizontally scrollable */}
          <div className="overflow-x-auto py-2 flex justify-center">
            <div className="bg-black/20 border border-white/12 rounded-2xl p-3 backdrop-blur-md shadow-[0_18px_45px_rgba(0,0,0,0.40)] inline-block">
              {gridEl}
            </div>
          </div>

          {/* Questions — vertical list */}
          <div className="mt-2 bg-black/20 border border-white/12 rounded-2xl p-2.5 backdrop-blur-md">
            <div className="text-xs font-extrabold mb-2 opacity-75 px-1">📋 Sorular</div>
            <div className="flex flex-col gap-1.5">
              {questionButtons(false)}
            </div>
          </div>
        </div>

        {/* Virtual keyboard pinned to bottom */}
        <div className="relative z-10">
          <VirtualKeyboard
            onKey={handleVirtualKey}
            disabled={!started || mode !== "type" || !selectedWord || solved.has(selectedWord?.id ?? "")}
          />
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // DESKTOP / OVERLAY LAYOUT (original layout, refined)
  // ═══════════════════════════════════════════════════════════════════════════
  return (
    <div
      ref={rootRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={`relative w-full h-full text-white outline-none ${isOverlay ? "rounded-none" : "rounded-2xl"} overflow-hidden flex flex-col`}
      style={{ outline: "none" }}
    >
      {/* Background */}
      <div className="absolute inset-0" style={{ backgroundImage: `url('${backgroundUrl}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute inset-0 bg-slate-950/65" />
      <BalloonsOverlay density={isOverlay ? 12 : 8} />

      <AnimatePresence>{!started && <IntroCard onStart={onStart} />}</AnimatePresence>

      {/* Top bar */}
      {topBar}

      {/* Clue area */}
      <div className="relative z-10 px-4 py-2 flex-shrink-0">
        <div className="text-center text-base font-extrabold tracking-wide drop-shadow">
          {mode === "select" ? "🎈 Bir kelime seç" : "⌨️ Harfleri yazın"}
        </div>
        <div className="mt-1 text-center text-sm opacity-90">
          {mode === "select" ? (
            <span className="opacity-80">Soldaki sorulardan birini seç veya gridde numaralı kutuya tıkla.</span>
          ) : (
            <span>
              <span className="opacity-75">İpucu: </span>
              <span className="font-extrabold text-white">{selectedWord?.clueTr}</span>
              <span className="opacity-70"> — Enter = kontrol, Backspace = sil</span>
            </span>
          )}
        </div>
        {checkStatus && (
          <div className={`mt-2 mx-auto w-fit px-3 py-1 rounded-lg text-sm border backdrop-blur-md ${
            checkStatus.type === "ok" ? "bg-green-500/20 border-green-500/40" : "bg-red-500/20 border-red-500/40"
          }`}>{checkStatus.text}</div>
        )}
        <AnimatePresence>
          {toast && (
            <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
              className={`mt-2 mx-auto w-fit px-3 py-1 rounded-lg text-sm border backdrop-blur-md shadow-lg ${
                toast.type === "ok" ? "bg-green-500/20 border-green-500/40" : "bg-red-500/20 border-red-500/40"
              }`}>
              {toast.text}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Body */}
      <div className="relative z-10 flex-1 overflow-hidden">
        <div className="h-full flex flex-col lg:grid lg:grid-cols-[240px_1fr] gap-3 px-3 pb-4 overflow-y-auto">
          {/* Questions panel */}
          <div className="bg-black/20 border border-white/12 rounded-2xl p-3 backdrop-blur-md shadow-[0_18px_45px_rgba(0,0,0,0.40)] lg:overflow-y-auto">
            <div className="text-sm font-extrabold mb-2 opacity-95">Sorular</div>
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-1 lg:pb-0">
              {questionButtons(true)}
            </div>
          </div>

          {/* Grid panel */}
          <div className="bg-black/20 border border-white/12 rounded-2xl p-4 overflow-auto backdrop-blur-md shadow-[0_18px_45px_rgba(0,0,0,0.40)] flex flex-col items-center justify-center">
            {gridEl}
            <div className="mt-3 text-xs text-white/55 text-center">
              Önce <span className="font-semibold text-white/75">kelime seç</span>, sonra yaz. Son harfte otomatik kontrol.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Export ────────────────────────────────────────────────────────────────────
export default function DataUnitsCrosswordWordwall() {
  const [overlayOpen, setOverlayOpen]     = useState(false);
  const [started, setStarted]             = useState(false);
  const [overlayStarted, setOverlayStarted] = useState(false);

  useEffect(() => {
    if (!overlayOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setOverlayOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [overlayOpen]);

  return (
    <div className="w-full">
      <div className="relative rounded-2xl border border-white/10 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
        style={{ minHeight: 560 }}>
        <GameUI
          showFullscreenButton
          onOpenFullscreen={() => { setOverlayOpen(true); setOverlayStarted(false); }}
          started={started}
          onStart={() => setStarted(true)}
        />
      </div>

      <AnimatePresence>
        {overlayOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm"
            onMouseDown={() => setOverlayOpen(false)}>
            <div className="w-screen h-[100dvh] bg-black" onMouseDown={(e) => e.stopPropagation()}>
              <GameUI
                isOverlay
                onRequestClose={() => setOverlayOpen(false)}
                showFullscreenButton={false}
                started={overlayStarted}
                onStart={() => setOverlayStarted(true)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
