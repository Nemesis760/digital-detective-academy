import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FILE_EXTENSIONS_ROUNDS from "./fileExtensionsData";

import airplanePng from "../../assets/module1/file-extensions-airplane/airplane.png";
import cloudPng from "../../assets/module1/file-extensions-airplane/cloud.png";
import sfxCorrect from "../../assets/module1/file-extensions-airplane/sfx_correct.mp3";
import sfxWrong from "../../assets/module1/file-extensions-airplane/sfx_wrong.mp3";

const ASPECT_W = 960;
const ASPECT_H = 540;

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

function useAudio(src) {
  const audioRef = useRef(null);
  useEffect(() => {
    try {
      audioRef.current = src ? new Audio(src) : null;
      if (audioRef.current) audioRef.current.volume = 0.5;
    } catch {
      audioRef.current = null;
    }
  }, [src]);
  return () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  };
}

// Clouds start off the right side, staggered — no immediate collision
function buildClouds(round) {
  const slots = round.options.length;
  const ySlots = [110, 240, 370, 160, 300, 200];
  return round.options.map((opt, i) => ({
    id: `${round.promptTr}-${opt}`,
    label: opt,
    isCorrect: round.correct.includes(opt),
    x: ASPECT_W * 0.65 + i * 230,
    y: ySlots[i % ySlots.length],
    r: 44,
    hit: false,
    result: null,
    pop: 0,
  }));
}

export default function FileExtensionsAirplaneGame() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const rafRef = useRef(0);
  const lastTimeRef = useRef(0);
  const inputRef = useRef({ up: false, down: false });
  const dragRef = useRef(null);
  // Refs for values used inside canvas loop — avoids useEffect restarts
  const shakeRef = useRef(0);
  const livesRef = useRef(3);
  const isRunningRef = useRef(false);
  const gameOverRef = useRef(false);
  const showAnswersRef = useRef(false);
  const roundIndexRef = useRef(0);

  const [roundIndex, setRoundIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [message, setMessage] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const round = FILE_EXTENSIONS_ROUNDS[roundIndex];
  const totalRounds = FILE_EXTENSIONS_ROUNDS.length;

  const playCorrect = useAudio(sfxCorrect);
  const playWrong = useAudio(sfxWrong);

  const stateRef = useRef({
    plane: { x: 200, y: 260, vy: 0 },
    clouds: buildClouds(FILE_EXTENSIONS_ROUNDS[0]),
    advancePending: false,
    effects: [],
    correctHits: new Set(),
  });

  // Keep refs in sync with state
  useEffect(() => { isRunningRef.current = isRunning; }, [isRunning]);
  useEffect(() => { gameOverRef.current = gameOver; }, [gameOver]);
  useEffect(() => { showAnswersRef.current = showAnswers; }, [showAnswers]);
  useEffect(() => { roundIndexRef.current = roundIndex; }, [roundIndex]);

  // Reset clouds + plane + correctHits on round change
  useEffect(() => {
    stateRef.current.clouds = buildClouds(FILE_EXTENSIONS_ROUNDS[roundIndex]);
    stateRef.current.plane = { x: 200, y: 260, vy: 0 };
    stateRef.current.advancePending = false;
    stateRef.current.correctHits = new Set();
  }, [roundIndex]);

  // W/S only keyboard controls
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "w" || e.key === "W") inputRef.current.up = true;
      if (e.key === "s" || e.key === "S") inputRef.current.down = true;
      if (e.key === "Escape" && isFullscreen) setIsFullscreen(false);
    };
    const onKeyUp = (e) => {
      if (e.key === "w" || e.key === "W") inputRef.current.up = false;
      if (e.key === "s" || e.key === "S") inputRef.current.down = false;
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [isFullscreen]);

  // Single persistent canvas loop — no state deps that change mid-game
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    let running = true;

    const cloudImg = new Image(); cloudImg.src = cloudPng;
    const planeImg = new Image(); planeImg.src = airplanePng;

    const drawBackground = () => {
      ctx.fillStyle = "#87ceeb";
      ctx.fillRect(0, 0, ASPECT_W, ASPECT_H);
    };

    const drawCloud = (cloud) => {
      const { x, y, r, hit, pop, result, label } = cloud;
      const alpha = hit ? Math.max(0, 1 - pop / 22) : 1;
      ctx.save();
      ctx.globalAlpha = alpha;

      if (cloudImg.complete && cloudImg.naturalWidth > 0) {
        ctx.drawImage(cloudImg, x - r - 18, y - r - 12, r * 2.2, r * 1.7);
      } else {
        ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.beginPath();
        ctx.ellipse(x, y, r * 1.2, r * 0.8, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.font = "bold 20px 'Trebuchet MS', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.lineWidth = 4;
      ctx.strokeStyle = "rgba(255,255,255,0.85)";
      ctx.strokeText(label.toUpperCase(), x, y + 2);
      ctx.fillStyle = "#0f172a";
      ctx.fillText(label.toUpperCase(), x, y + 2);

      if (result === "ok") {
        ctx.fillStyle = "rgba(34,197,94,0.9)";
        ctx.beginPath();
        ctx.arc(x + 34, y - 22, 16, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "white";
        ctx.font = "bold 16px sans-serif";
        ctx.fillText("✓", x + 34, y - 22);
      }
      if (result === "bad") {
        ctx.fillStyle = "rgba(239,68,68,0.9)";
        ctx.beginPath();
        ctx.arc(x + 34, y - 22, 16, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "white";
        ctx.font = "bold 16px sans-serif";
        ctx.fillText("✕", x + 34, y - 22);
      }

      ctx.restore();
    };

    const drawEffects = (dt) => {
      const effects = stateRef.current.effects;
      for (const effect of effects) {
        effect.age += dt;
        const t = effect.age / effect.duration;
        if (t >= 1) continue;
        ctx.save();
        if (effect.type === "ok") {
          ctx.globalAlpha = 1 - t;
          ctx.strokeStyle = "rgba(34,197,94,0.9)";
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(effect.x, effect.y, 10 + t * 40, 0, Math.PI * 2);
          ctx.stroke();
        } else {
          ctx.globalAlpha = 1 - t;
          ctx.fillStyle = "rgba(239,68,68,0.65)";
          ctx.beginPath();
          ctx.arc(effect.x, effect.y, 8 + t * 34, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
      stateRef.current.effects = effects.filter((e) => e.age < e.duration);
    };

    const drawPlane = (plane) => {
      const size = 120;
      ctx.save();
      ctx.translate(plane.x, plane.y);
      if (planeImg.complete && planeImg.naturalWidth > 0) {
        ctx.drawImage(planeImg, -size / 2, -size / 2, size, size);
      } else {
        ctx.fillStyle = "#ef4444";
        ctx.beginPath();
        ctx.moveTo(-28, -18);
        ctx.lineTo(32, 0);
        ctx.lineTo(-28, 18);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    };

    const update = (dt) => {
      const state = stateRef.current;

      const accel = 3000;
      const damping = 0.82;
      const maxSpeed = 520;

      if (inputRef.current.up)   state.plane.vy -= accel * dt;
      if (inputRef.current.down) state.plane.vy += accel * dt;

      if (dragRef.current) {
        state.plane.vy += dragRef.current.dy * 16 * dt;
      }

      state.plane.vy = clamp(state.plane.vy * damping, -maxSpeed, maxSpeed);
      state.plane.y  = clamp(state.plane.y + state.plane.vy * dt, 50, ASPECT_H - 80);
      state.plane.x  = 200;

      for (const cloud of state.clouds) {
        cloud.x -= 90 * dt;
        if (cloud.x < -140) cloud.x = ASPECT_W + 140;
        if (cloud.hit) { cloud.pop += dt * 30; continue; }

        const dx = state.plane.x - cloud.x;
        const dy = state.plane.y - cloud.y;
        if (Math.sqrt(dx * dx + dy * dy) < cloud.r + 18) {
          cloud.hit = true;
          cloud.pop = 1;
          cloud.result = cloud.isCorrect ? "ok" : "bad";

          if (cloud.isCorrect) {
            playCorrect();
            state.correctHits.add(cloud.label);
            setScore((s) => s + 10);
            setMessage({ type: "ok", text: "Doğru! ✓" });
            setTimeout(() => setMessage(null), 800);
            state.effects.push({ x: cloud.x, y: cloud.y, type: "ok", age: 0, duration: 0.6 });
          } else {
            playWrong();
            const nl = Math.max(0, livesRef.current - 1);
            livesRef.current = nl;
            setLives(nl);
            setMessage({ type: "bad", text: "Yanlış! ✕" });
            shakeRef.current = 14;
            setTimeout(() => setMessage(null), 800);
            state.effects.push({ x: cloud.x, y: cloud.y, type: "bad", age: 0, duration: 0.6 });
          }
        }
      }
    };

    const draw = (dt) => {
      ctx.save();
      if (shakeRef.current > 0) {
        const s = (Math.random() - 0.5) * shakeRef.current;
        ctx.translate(s, s);
        shakeRef.current = Math.max(0, shakeRef.current - dt * 60);
      }
      drawBackground(dt);
      stateRef.current.clouds.forEach(drawCloud);
      drawEffects(dt);
      drawPlane(stateRef.current.plane);
      ctx.restore();
    };

    const loop = (t) => {
      if (!running) return;
      if (!lastTimeRef.current) lastTimeRef.current = t;
      const dt = Math.min(0.032, (t - lastTimeRef.current) / 1000);
      lastTimeRef.current = t;

      const running_ = isRunningRef.current;
      const over     = gameOverRef.current;
      const answers  = showAnswersRef.current;
      const ridx     = roundIndexRef.current;

      if (running_) update(dt);
      draw(dt);

      if (running_ && !over && !answers) {
        const currentRound = FILE_EXTENSIONS_ROUNDS[ridx];
        const allCorrect = currentRound.correct.every(
          (label) => stateRef.current.correctHits.has(label)
        );

        if (allCorrect && !stateRef.current.advancePending) {
          stateRef.current.advancePending = true;
          setTimeout(() => {
            if (ridx < totalRounds - 1) {
              setRoundIndex((i) => i + 1);
            } else {
              setGameOver(true);
            }
          }, 500);
        }

        if (livesRef.current <= 0) setGameOver(true);
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    const onResize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width  = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width  = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.imageSmoothingEnabled  = true;
      ctx.imageSmoothingQuality  = "high";
      ctx.setTransform((rect.width / ASPECT_W) * dpr, 0, 0, (rect.height / ASPECT_H) * dpr, 0, 0);
    };

    onResize();
    // ResizeObserver fires whenever the container changes size (e.g. fullscreen toggle)
    const ro = new ResizeObserver(() => onResize());
    ro.observe(container);
    return () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []); // ← runs once; reads live values through refs

  const startAgain = () => {
    livesRef.current = 3;
    shakeRef.current = 0;
    setRoundIndex(0);
    setScore(0);
    setLives(3);
    setGameOver(false);
    setShowAnswers(false);
    setMessage(null);
    stateRef.current.clouds = buildClouds(FILE_EXTENSIONS_ROUNDS[0]);
    stateRef.current.plane  = { x: 200, y: 260, vy: 0 };
    stateRef.current.advancePending = false;
    stateRef.current.effects = [];
    stateRef.current.correctHits = new Set();
  };

  const startGame = () => { startAgain(); setIsRunning(true); };

  const onPointerDown = (e) => {
    if (!isRunningRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    dragRef.current = { startY: e.clientY - rect.top, dy: 0 };
  };
  const onPointerMove = (e) => {
    if (!dragRef.current || !isRunningRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    dragRef.current.dy = (e.clientY - rect.top) - dragRef.current.startY;
  };
  const onPointerUp = () => { dragRef.current = null; };

  return (
    <div className={`w-full ${isFullscreen ? "fixed inset-0 z-50 bg-black/70 p-4" : ""}`}>
      <div className={`mx-auto w-full ${isFullscreen ? "h-full max-w-none" : "max-w-6xl"} bg-slate-900/90 rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)] overflow-hidden`}>
        <div
          className={`relative ${isFullscreen ? "h-full" : "aspect-[16/9]"}`}
          ref={containerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

          {/* ── Top HUD ── */}
          <div className="absolute inset-x-4 top-4 z-10 flex items-start justify-between gap-3 pointer-events-none">
            {/* Left: title + current question */}
            <div className="rounded-2xl bg-black/50 border border-white/15 px-4 py-2.5 text-white shadow-lg backdrop-blur-md max-w-xs pointer-events-auto">
              <div className="text-[10px] uppercase tracking-widest text-slate-400 mb-0.5">✈️ Dosya Uzantıları Oyunu</div>
              <div className="text-sm font-bold text-slate-100 leading-snug">{round.promptTr}</div>
            </div>

            {/* Right: lives + score + fullscreen */}
            <div className="flex flex-col items-end gap-1.5 pointer-events-auto">
              <div className="flex items-center gap-1 bg-black/50 border border-white/15 backdrop-blur-md px-3 py-1.5 rounded-2xl">
                {Array.from({ length: 3 }).map((_, i) => (
                  <span key={i} className={`text-xl leading-none transition-opacity duration-300 ${i < lives ? "opacity-100" : "opacity-15"}`}>❤️</span>
                ))}
              </div>
              <div className="flex items-center gap-2 bg-black/50 border border-white/15 backdrop-blur-md px-3 py-1.5 rounded-2xl text-white text-sm font-bold">
                <span>⭐</span>
                <span>{score}</span>
                <span className="text-white/40 text-xs">({roundIndex + 1}/{totalRounds})</span>
              </div>
              <button
                type="button"
                onClick={() => setIsFullscreen((p) => !p)}
                className="rounded-full bg-black/50 border border-white/20 px-3 py-1.5 text-white text-xs backdrop-blur-md hover:bg-black/65 transition"
              >
                {isFullscreen ? "✕ Küçült" : "⛶ Tam ekran"}
              </button>
            </div>
          </div>

          {/* ── Bottom hint ── */}
          <div className="absolute inset-x-4 bottom-4 z-10 rounded-xl bg-black/35 border border-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-md text-center pointer-events-none">
            Doğru uzantı bulutlarından geç, yanlış bulutlardan kaçın.
            <span className="hidden md:inline"> &nbsp;⌨️ <strong>W</strong> yukarı / <strong>S</strong> aşağı &nbsp;|&nbsp; 📱 ekranda sürükle</span>
          </div>

          {/* ── Correct / Wrong feedback ── */}
          <AnimatePresence>
            {message && (
              <motion.div
                className={`absolute top-[88px] left-1/2 -translate-x-1/2 px-6 py-2.5 rounded-full text-white font-extrabold text-lg shadow-xl pointer-events-none ${
                  message.type === "ok" ? "bg-green-500/90" : "bg-red-500/90"
                }`}
                initial={{ scale: 0.6, opacity: 0, y: -8 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.6, opacity: 0, y: -8 }}
              >
                {message.text}
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Start screen ── */}
          {!isRunning && !gameOver && !showAnswers && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/50 backdrop-blur-sm">
              <div className="w-[min(480px,92vw)] rounded-2xl border border-white/15 bg-slate-900/92 p-7 text-white shadow-2xl">
                <div className="text-xs uppercase tracking-widest text-slate-400 mb-1">✈️ Uçak Oyunu</div>
                <h3 className="text-2xl font-extrabold mb-2">Dosya Uzantıları</h3>
                <p className="text-sm text-slate-300 mb-4">
                  Doğru uzantı bulutlarından geç, yanlış bulutlardan kaçın. Tamamlayınca otomatik ilerler.
                </p>
                <ul className="text-sm text-slate-300 space-y-1 mb-6">
                  <li>⌨️ Klavye: <strong>W</strong> yukarı / <strong>S</strong> aşağı</li>
                  <li>📱 Mobil: ekranda sürükle</li>
                </ul>
                <div className="flex flex-wrap gap-3">
                  <button
                    className="px-5 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 font-bold transition"
                    onClick={startGame}
                  >
                    Başlat
                  </button>
                  <button
                    className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 font-bold transition"
                    onClick={() => setIsFullscreen(true)}
                  >
                    Tam Ekran
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Game Over ── */}
      <AnimatePresence>
        {gameOver && !showAnswers && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-slate-900 text-white rounded-2xl p-7 w-[min(420px,90vw)] shadow-2xl border border-white/10 text-center"
              initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.88, opacity: 0 }}
            >
              <div className="text-5xl mb-3">{score >= totalRounds * 10 ? "🏆" : "💀"}</div>
              <h3 className="text-2xl font-bold mb-1">Oyun Bitti!</h3>
              <p className="text-slate-300 mb-5">
                Puan: <strong className="text-white text-xl">{score}</strong>
                <span className="text-slate-400"> / {totalRounds * 10}</span>
              </p>
              <div className="flex flex-col gap-2">
                <button className="px-5 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 font-bold transition" onClick={() => setShowAnswers(true)}>
                  📋 Cevapları Gör
                </button>
                <button className="px-5 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 font-bold transition" onClick={startGame}>
                  🔄 Tekrar Oyna
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Answers panel ── */}
      <AnimatePresence>
        {showAnswers && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-y-auto"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <div className="min-h-screen flex items-center justify-center px-4 py-8">
              <div className="bg-slate-900 text-white rounded-2xl p-6 w-[min(700px,95vw)] shadow-2xl border border-white/10">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-2xl font-bold">Cevaplar</h3>
                  <button className="px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 font-bold transition text-sm" onClick={startGame}>
                    🔄 Yeniden Başlat
                  </button>
                </div>
                <div className="space-y-3">
                  {FILE_EXTENSIONS_ROUNDS.map((item, idx) => (
                    <div key={item.promptTr} className="border border-white/10 rounded-xl p-3 bg-white/5">
                      <div className="font-semibold">{idx + 1}. {item.promptTr}</div>
                      <div className="text-sm text-emerald-400 mt-1">
                        ✅ {item.correct.join(", ")}
                        {item.optional ? <span className="text-slate-400"> (opsiyonel: {item.optional.join(", ")})</span> : ""}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
