import { useMemo, useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import soundManager from "../utils/soundEffects";

/**
 * Hardware Hotspot Game (TR/EN)
 * - Discovery-based learning (hotspots)
 * - Unlocks mini-quiz after enough discoveries
 * - Badges + confetti feedback
 * - Mobile-friendly hit areas
 *
 * Image path:
 *  /images/module1/hardware_case.png   (place under client/public/images/)
 */

const HardwareHotspot = ({ isTurkish = true }) => {
  // -----------------------------
  // Game State
  // -----------------------------
  const [selectedPartId, setSelectedPartId] = useState(null);
  const [clickedParts, setClickedParts] = useState(() => new Set());
  const [mode, setMode] = useState("discover"); // discover | quiz | done
  const [feedback, setFeedback] = useState(null); // {type, text}
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const stageRef = useRef(null);
  const feedbackTimeoutRef = useRef(null);
  const confettiCooldownRef = useRef(0);

  const t = useMemo(
    () => ({
      tip: isTurkish
        ? "Kasadaki parçalara tıkla → keşfet → mini sınavı aç!"
        : "Click parts → discover → unlock the mini quiz!",
      discovered: isTurkish ? "Keşfedilen" : "Discovered",
      startQuiz: isTurkish ? "Mini Sınavı Başlat" : "Start Mini Quiz",
      keepExploring: isTurkish ? "Biraz daha keşfet!" : "Keep exploring!",
      needAtLeast: isTurkish ? "Mini sınav için en az 4 parça keşfet." : "Discover at least 4 parts to unlock the quiz.",
      quizTitle: isTurkish ? "Mini Sınav" : "Mini Quiz",
      backToExplore: isTurkish ? "Keşfe Dön" : "Back to Explore",
      correct: isTurkish ? "Doğru!" : "Correct!",
      wrong: isTurkish ? "Yanlış!" : "Wrong!",
      next: isTurkish ? "Sonraki" : "Next",
      finish: isTurkish ? "Bitir" : "Finish",
      finalTitle: isTurkish ? "Donanım Ustası!" : "Hardware Master!",
      finalText: isTurkish
        ? "Harika! Tüm parçaları keşfettin ve mini sınavı tamamladın."
        : "Great! You discovered all parts and completed the mini quiz.",
      playAgain: isTurkish ? "Tekrar Oyna" : "Play Again",
      hint: isTurkish ? "İpucu: Farklı parçaları tıkla ve karşılaştır." : "Tip: Click different parts and compare.",
      selectHint: isTurkish
        ? "Bir parçaya tıklayınca açıklama burada görünecek."
        : "Click a part to see its explanation here.",
    }),
    [isTurkish]
  );

  // -----------------------------
  // Parts (positions are %)
  // IMPORTANT: These positions are for your provided case image.
  // If they are slightly off, tweak top/left numbers.
  // -----------------------------
  const hardwareParts = useMemo(
    () => [
      {
        id: "cpu",
        name: isTurkish ? "İşlemci (CPU)" : "Processor (CPU)",
        description: isTurkish
          ? "Bilgisayarın beyni! Komutları işler, hız ve performansı etkiler."
          : "The computer’s brain! It processes instructions and affects speed and performance.",
        position: { top: 30, left: 34 },
        emoji: "🧠",
      },
      {
        id: "ram",
        name: isTurkish ? "RAM Bellek" : "RAM Memory",
        description: isTurkish
          ? "Geçici hafıza! Programlar çalışırken hızlı veri tutar; bilgisayar kapanınca temizlenir."
          : "Temporary memory! Holds data fast while programs run; clears when power is off.",
        position: { top: 28, left: 48 },
        emoji: "⚡",
      },
      {
        id: "gpu",
        name: isTurkish ? "Ekran Kartı (GPU)" : "Graphics Card (GPU)",
        description: isTurkish
          ? "Görüntüyü üretir. Oyunlar ve grafik işlemlerinde çok önemlidir."
          : "Creates visuals. Very important for gaming and graphics work.",
        position: { top: 60, left: 40 },
        emoji: "🎮",
      },
      {
        id: "storage",
        name: isTurkish ? "Depolama (SSD / HDD)" : "Storage (SSD / HDD)",
        description: isTurkish
          ? "Kalıcı hafıza. Dosyalar ve oyunlar burada saklanır; elektrik kesilse de silinmez."
          : "Permanent storage. Files and games stay here even when power is off.",
        position: { top: 35, left: 60 },
        emoji: "💾",
      },
      {
        id: "fan",
        name: isTurkish ? "Fan / Soğutma" : "Fan / Cooling",
        description: isTurkish
          ? "Parçaları serin tutar. Isıyı düşürerek performansın korunmasına yardım eder."
          : "Keeps parts cool. Helps maintain performance by reducing heat.",
        position: { top: 14, left: 46 },
        emoji: "🌀",
      },
      {
        id: "psu",
        name: isTurkish ? "Güç Kaynağı (PSU)" : "Power Supply (PSU)",
        description: isTurkish
          ? "Elektriği bilgisayarın kullanacağı güce çevirir ve tüm parçalara dağıtır."
          : "Converts wall power into usable power and distributes it to components.",
        position: { top: 80, left: 28 },
        emoji: "🔋",
      },
    ],
    [isTurkish]
  );

  const selectedPart = hardwareParts.find((p) => p.id === selectedPartId) || null;

  const discoveredCount = clickedParts.size;
  const totalCount = hardwareParts.length;

  // Unlock quiz after 4 discoveries (pedagogically: exploration first)
  useEffect(() => {
    if (mode === "discover" && discoveredCount >= 4) {
      // soft prompt to start quiz
      setFeedback((prev) => prev ?? { type: "info", text: t.needAtLeast });
      clearFeedbackLater(2500);
    }
  }, [discoveredCount, mode, t.needAtLeast]);

  const clearFeedbackLater = (ms = 1800) => {
    if (feedbackTimeoutRef.current) clearTimeout(feedbackTimeoutRef.current);
    feedbackTimeoutRef.current = setTimeout(() => setFeedback(null), ms);
  };

  useEffect(() => {
    return () => {
      if (feedbackTimeoutRef.current) clearTimeout(feedbackTimeoutRef.current);
    };
  }, []);

  // -----------------------------
  // Confetti helpers
  // -----------------------------
  const fireConfettiAtStage = () => {
    const now = Date.now();
    if (now - confettiCooldownRef.current < 220) return;
    confettiCooldownRef.current = now;

    const rect = stageRef.current?.getBoundingClientRect();
    const origin = rect
      ? {
          x: (rect.left + rect.width * 0.5) / window.innerWidth,
          y: (rect.top + rect.height * 0.55) / window.innerHeight,
        }
      : { x: 0.5, y: 0.6 };

    confetti({
      particleCount: 24,
      spread: 70,
      startVelocity: 36,
      gravity: 0.95,
      ticks: 210,
      origin,
      scalar: 1.0,
    });

    setTimeout(() => {
      confetti({
        particleCount: 18,
        spread: 110,
        startVelocity: 28,
        gravity: 1.05,
        ticks: 240,
        origin,
        scalar: 0.95,
      });
    }, 110);
  };

  const finaleConfetti = () => {
    const duration = 900;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 14,
        spread: 120,
        startVelocity: 46,
        gravity: 0.95,
        ticks: 260,
        origin: { x: Math.random(), y: 0.6 },
        scalar: 1.05,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };

    frame();
  };

  // -----------------------------
  // Interactions
  // -----------------------------
  const handlePartClick = (part) => {
    setSelectedPartId(part.id);
    soundManager.playClick();

    if (!clickedParts.has(part.id)) {
      setClickedParts((prev) => new Set([...prev, part.id]));
      soundManager.playCorrect();
      fireConfettiAtStage();

      setFeedback({
        type: "success",
        text: isTurkish ? "Keşfettin! +1" : "Discovered! +1",
      });
      clearFeedbackLater(1000);
    }
  };

  const resetGame = () => {
    setSelectedPartId(null);
    setClickedParts(new Set());
    setMode("discover");
    setFeedback(null);
    setQuizIndex(0);
    setQuizScore(0);
    setAnswered(false);
  };

  // -----------------------------
  // Quiz content (pedagogical: short, concept-checking)
  // We ask "function" questions (IPOS-friendly thinking)
  // -----------------------------
  const quizQuestions = useMemo(
    () => [
      {
        id: "q1",
        question: isTurkish ? "Hangi parça 'geçici hafıza'dır?" : "Which part is 'temporary memory'?",
        options: [
          { id: "a", text: "RAM", correct: true },
          { id: "b", text: isTurkish ? "Depolama (SSD/HDD)" : "Storage (SSD/HDD)", correct: false },
          { id: "c", text: "GPU", correct: false },
        ],
        explain: isTurkish
          ? "RAM geçici çalışır: bilgisayar kapanınca içindeki veriler silinir."
          : "RAM is temporary: data clears when power is off.",
      },
      {
        id: "q2",
        question: isTurkish ? "Görüntü üretiminde en önemli parça hangisi?" : "Which part is most important for rendering visuals?",
        options: [
          { id: "a", text: "CPU", correct: false },
          { id: "b", text: "GPU", correct: true },
          { id: "c", text: isTurkish ? "Güç Kaynağı (PSU)" : "Power Supply (PSU)", correct: false },
        ],
        explain: isTurkish
          ? "GPU görüntü işleme için özelleşmiştir."
          : "GPU is specialized for graphics processing.",
      },
      {
        id: "q3",
        question: isTurkish ? "Dosyaların kalıcı olarak saklandığı yer neresidir?" : "Where are files stored permanently?",
        options: [
          { id: "a", text: isTurkish ? "Depolama (SSD/HDD)" : "Storage (SSD/HDD)", correct: true },
          { id: "b", text: "RAM", correct: false },
          { id: "c", text: isTurkish ? "Fan/Soğutma" : "Fan/Cooling", correct: false },
        ],
        explain: isTurkish
          ? "SSD/HDD kapalıyken de veriyi tutar."
          : "SSD/HDD keeps data even when power is off.",
      },
      {
        id: "q4",
        question: isTurkish ? "Bilgisayara elektrik gücünü sağlayıp dağıtan parça hangisi?" : "Which part provides and distributes power?",
        options: [
          { id: "a", text: "PSU", correct: true },
          { id: "b", text: "GPU", correct: false },
          { id: "c", text: "CPU", correct: false },
        ],
        explain: isTurkish
          ? "PSU, elektriği dönüştürür ve bileşenlere iletir."
          : "PSU converts and distributes power to components.",
      },
    ],
    [isTurkish]
  );

  const currentQ = quizQuestions[quizIndex];

  const startQuiz = () => {
    if (discoveredCount < 4) {
      setFeedback({ type: "error", text: t.needAtLeast });
      clearFeedbackLater(2200);
      soundManager.playWrong();
      return;
    }
    setMode("quiz");
    setQuizIndex(0);
    setQuizScore(0);
    setAnswered(false);
    setFeedback(null);
    soundManager.playClick();
  };

  const answerQuiz = (opt) => {
    if (answered) return;

    setAnswered(true);

    if (opt.correct) {
      setQuizScore((s) => s + 1);
      setFeedback({ type: "success", text: `${t.correct} ${currentQ.explain}` });
      soundManager.playCorrect();
      fireConfettiAtStage();
    } else {
      setFeedback({ type: "error", text: `${t.wrong} ${currentQ.explain}` });
      soundManager.playWrong();
    }
    clearFeedbackLater(2400);
  };

  const nextQuiz = () => {
    if (!answered) return;

    const isLast = quizIndex === quizQuestions.length - 1;
    if (isLast) {
      setMode("done");
      setFeedback(null);
      soundManager.playSuccess();
      finaleConfetti();
      return;
    }

    setQuizIndex((i) => i + 1);
    setAnswered(false);
    setFeedback(null);
    soundManager.playClick();
  };

  // If user discovers all parts, we gently push quiz
  useEffect(() => {
    if (mode === "discover" && discoveredCount === totalCount) {
      setFeedback({
        type: "info",
        text: isTurkish
          ? "Mükemmel! Şimdi mini sınavla bilgini test et."
          : "Awesome! Now test your knowledge with the mini quiz.",
      });
      clearFeedbackLater(2600);
    }
  }, [discoveredCount, totalCount, mode, isTurkish]);

  // -----------------------------
  // UI
  // -----------------------------
  return (
    <div className="hh-root">
      {/* Top info strip */}
      <div className="hh-info">
        <div className="hh-tip">💡 {t.tip}</div>

        <div className="hh-right">
          <div className="hh-progress">
            {t.discovered}: <strong>{discoveredCount}/{totalCount}</strong>
          </div>

          {mode === "discover" && (
            <button
              type="button"
              className={`hh-cta ${discoveredCount >= 4 ? "is-ready" : ""}`}
              onClick={startQuiz}
              title={t.needAtLeast}
            >
              {t.startQuiz}
            </button>
          )}

          {mode === "quiz" && (
            <button type="button" className="hh-cta is-ghost" onClick={() => setMode("discover")}>
              {t.backToExplore}
            </button>
          )}
        </div>
      </div>

      {/* Feedback toast */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            className={`hh-toast ${feedback.type}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {feedback.text}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image stage */}
      <div className="hh-stage" ref={stageRef}>
        <div className="hh-imageWrap">
          <img
            src="/images/module1/hardware_case.png"
            alt={isTurkish ? "Bilgisayar Kasası (İçi)" : "PC Case Interior"}
            className="hh-image"
            draggable={false}
          />

          {/* Hotspots always visible (discovery-based) */}
          {hardwareParts.map((part) => {
            const discovered = clickedParts.has(part.id);
            const active = selectedPartId === part.id;

            return (
              <motion.button
                key={part.id}
                type="button"
                className={`hh-hotspot ${discovered ? "is-discovered" : ""} ${active ? "is-active" : ""}`}
                style={{ top: `${part.position.top}%`, left: `${part.position.left}%` }}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handlePartClick(part)}
                whileTap={{ scale: 0.95 }}
                aria-label={part.name}
                title={part.name}
              >
                <span className="hh-hitArea" aria-hidden />
                <span className="hh-emoji">{part.emoji}</span>
                <span className="hh-pulse" />
              </motion.button>
            );
          })}

          {/* Popup overlay — appears on the image when a hotspot is clicked */}
          <AnimatePresence>
            {selectedPart && mode === "discover" && (
              <motion.div
                className="hh-popup"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  className="hh-popupClose"
                  onClick={(e) => { e.stopPropagation(); setSelectedPartId(null); }}
                  aria-label="Close"
                >✕</button>
                <div className="hh-popupEmoji">{selectedPart.emoji}</div>
                <div className="hh-popupName">{selectedPart.name}</div>
                <p className="hh-popupDesc">{selectedPart.description}</p>
                {clickedParts.has(selectedPart.id) && (
                  <span className="hh-badge" style={{ marginTop: 8, display: "inline-block" }}>
                    ✓ {isTurkish ? "Keşfedildi" : "Discovered"}
                  </span>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Panel area */}
      <div className="hh-panel">
        {/* DISCOVER PANEL — just a subtle hint, real info is in the popup */}
        {mode === "discover" && (
          <div className="hh-detail">
            <div className="hh-empty">{selectedPart ? t.hint : t.selectHint}</div>
          </div>
        )}

        {/* QUIZ PANEL */}
        {mode === "quiz" && (
          <div className="hh-quiz">
            <div className="hh-quizHeader">
              <div className="hh-quizTitle">🧩 {t.quizTitle}</div>
              <div className="hh-quizMeta">
                {quizIndex + 1}/{quizQuestions.length} • {isTurkish ? "Skor" : "Score"}:{" "}
                <strong>{quizScore}</strong>
              </div>
            </div>

            <div className="hh-quizCard">
              <div className="hh-q">{currentQ.question}</div>

              <div className="hh-options">
                {currentQ.options.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    className={`hh-opt ${answered ? "is-locked" : ""}`}
                    onClick={() => answerQuiz(opt)}
                    disabled={answered}
                  >
                    {opt.text}
                  </button>
                ))}
              </div>

              <div className="hh-quizFooter">
                <button
                  type="button"
                  className={`hh-next ${answered ? "is-ready" : ""}`}
                  onClick={nextQuiz}
                  disabled={!answered}
                >
                  {quizIndex === quizQuestions.length - 1 ? t.finish : t.next}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* DONE PANEL */}
        {mode === "done" && (
          <motion.div className="hh-done" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <div className="hh-doneBadge">🏆</div>
            <div className="hh-doneTitle">{t.finalTitle}</div>
            <div className="hh-doneText">{t.finalText}</div>
            <div className="hh-doneScore">
              {isTurkish ? "Mini sınav skoru" : "Mini quiz score"}:{" "}
              <strong>{quizScore}/{quizQuestions.length}</strong>
            </div>

            <button type="button" className="hh-cta is-ready" onClick={resetGame}>
              {t.playAgain}
            </button>
          </motion.div>
        )}
      </div>

      {/* Styles */}
      <style>{`
        .hh-root{ width:100%; }

        .hh-info{
          background:#eef2ff;
          border-radius:14px;
          padding:14px 16px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:12px;
          margin-bottom:10px;
        }
        .hh-tip{ color:#4f46e5; font-weight:700; }

        .hh-right{ display:flex; align-items:center; gap:12px; }
        .hh-progress{ color:#64748b; font-size:0.95rem; white-space:nowrap; }

        .hh-cta{
          border:none;
          background:#e2e8f0;
          color:#0f172a;
          padding:10px 12px;
          border-radius:999px;
          font-weight:800;
          cursor:pointer;
          transition:transform .12s ease, background .12s ease;
          white-space:nowrap;
        }
        .hh-cta:hover{ transform:scale(1.03); }
        .hh-cta.is-ready{ background:#4f46e5; color:#fff; }
        .hh-cta.is-ghost{ background:#ffffff; border:1px solid #cbd5e1; }

        .hh-toast{
          margin:10px 0 12px;
          padding:10px 12px;
          border-radius:12px;
          font-weight:700;
          border:1px solid #e2e8f0;
          background:#fff;
          color:#0f172a;
        }
        .hh-toast.success{ border-color:#86efac; background:#ecfdf5; color:#065f46; }
        .hh-toast.error{ border-color:#fecaca; background:#fef2f2; color:#991b1b; }
        .hh-toast.info{ border-color:#c7d2fe; background:#eef2ff; color:#3730a3; }

        .hh-stage{
          background:#eef2ff;
          border-radius:14px;
          padding:18px;
        }
        .hh-imageWrap{
          position:relative;
          background:linear-gradient(135deg,#0b1220 0%,#111827 100%);
          border-radius:12px;
          overflow:hidden;
          padding:10px;
          display:flex;
          align-items:center;
          justify-content:center;
          min-height:260px;
          max-height:340px;
        }
        .hh-image{
          width:100%;
          max-width:700px;
          max-height:320px;
          height:auto;
          object-fit:contain;
          user-select:none;
          pointer-events:none;
          border-radius:10px;
        }

        /* Hotspots */
        .hh-hotspot{
          position:absolute;
          transform:translate(-50%,-50%);
          width:54px;
          height:54px;
          border-radius:999px;
          border:4px solid #6366f1;
          background:#fff;
          cursor:pointer;
          display:flex;
          align-items:center;
          justify-content:center;
          box-shadow:0 10px 25px rgba(99,102,241,.35);
          -webkit-tap-highlight-color: transparent;
        }
        .hh-hotspot:focus{ outline:none; }
        .hh-hotspot.is-discovered{
          border-color:#10b981;
          background:#d1fae5;
          box-shadow:0 10px 25px rgba(16,185,129,.25);
        }
        .hh-hotspot.is-active{
          outline:4px solid rgba(255,255,255,.85);
          outline-offset:2px;
        }

        .hh-hitArea{
          position:absolute;
          inset:-14px;
          border-radius:999px;
          background:transparent;
        }

        .hh-emoji{ font-size:1.6rem; position:relative; z-index:2; }
        .hh-pulse{
          position:absolute;
          inset:-2px;
          border-radius:999px;
          background:rgba(99,102,241,.25);
          animation:hhPulse 2s infinite;
          z-index:1;
        }
        .hh-hotspot.is-discovered .hh-pulse{ background:rgba(16,185,129,.22); }
        @keyframes hhPulse{
          0%,100%{ transform:scale(1); opacity:.35; }
          50%{ transform:scale(1.45); opacity:0; }
        }

        /* Popup overlay on image */
        .hh-popup{
          position:absolute;
          bottom:12px;
          left:50%;
          transform:translateX(-50%);
          width:calc(100% - 28px);
          max-width:460px;
          background:rgba(255,255,255,0.97);
          border-radius:16px;
          padding:16px 18px;
          box-shadow:0 8px 36px rgba(0,0,0,0.38);
          z-index:30;
          text-align:center;
          border:2px solid #6366f1;
          backdrop-filter:blur(6px);
        }
        .hh-popupClose{
          position:absolute;
          top:8px; right:10px;
          background:none; border:none;
          font-size:1.1rem; cursor:pointer;
          color:#64748b; line-height:1; padding:4px;
          border-radius:6px;
          transition:background .12s;
        }
        .hh-popupClose:hover{ background:#f1f5f9; }
        .hh-popupEmoji{ font-size:2.2rem; margin-bottom:4px; }
        .hh-popupName{ font-weight:900; color:#0f172a; font-size:1.1rem; margin-bottom:6px; }
        .hh-popupDesc{ color:#334155; line-height:1.55; margin:0; font-size:0.95rem; }

        /* Panel */
        .hh-panel{ margin-top:14px; }

        .hh-card{
          background:#fff;
          border-radius:14px;
          padding:16px;
          box-shadow:0 10px 25px rgba(0,0,0,.08);
          border:1px solid #e2e8f0;
        }
        .hh-cardHeader{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:12px;
          margin-bottom:8px;
        }
        .hh-cardTitle{
          display:flex;
          align-items:center;
          gap:10px;
          font-weight:900;
          color:#0f172a;
        }
        .hh-cardEmoji{ font-size:1.6rem; }
        .hh-badge{
          background:#ecfdf5;
          color:#047857;
          border:1px solid #a7f3d0;
          padding:6px 10px;
          border-radius:999px;
          font-weight:800;
          font-size:.9rem;
          white-space:nowrap;
        }
        .hh-cardDesc{ color:#334155; line-height:1.6; margin:0; }

        .hh-hintRow{
          display:flex;
          align-items:center;
          gap:8px;
          margin-top:10px;
          color:#64748b;
          font-size:.92rem;
        }
        .hh-hintDot{
          width:8px; height:8px;
          border-radius:999px;
          background:#6366f1;
          opacity:.65;
        }

        .hh-miniGoals{
          margin-top:12px;
          padding-top:12px;
          border-top:1px dashed #e2e8f0;
          display:flex;
          flex-direction:column;
          gap:8px;
          color:#475569;
          font-weight:600;
          font-size:.95rem;
        }
        .hh-goal{ display:flex; align-items:center; gap:8px; }
        .hh-goalDot{ width:8px; height:8px; border-radius:999px; background:#10b981; opacity:.7; }

        .hh-empty{
          background:#fff;
          border:1px dashed #cbd5e1;
          color:#64748b;
          border-radius:14px;
          padding:16px;
          text-align:center;
        }

        /* Quiz */
        .hh-quiz{
          background:#fff;
          border:1px solid #e2e8f0;
          border-radius:14px;
          padding:16px;
          box-shadow:0 10px 25px rgba(0,0,0,.06);
        }
        .hh-quizHeader{
          display:flex;
          align-items:flex-end;
          justify-content:space-between;
          gap:12px;
          margin-bottom:12px;
        }
        .hh-quizTitle{
          font-weight:900;
          font-size:1.1rem;
          color:#0f172a;
        }
        .hh-quizMeta{ color:#64748b; font-weight:700; }

        .hh-quizCard{
          background:#f8fafc;
          border:1px solid #e2e8f0;
          border-radius:14px;
          padding:14px;
        }
        .hh-q{
          font-weight:900;
          color:#0f172a;
          margin-bottom:10px;
        }
        .hh-options{
          display:grid;
          grid-template-columns:1fr;
          gap:10px;
        }
        .hh-opt{
          border:2px solid #cbd5e1;
          background:#fff;
          border-radius:12px;
          padding:12px;
          text-align:left;
          font-weight:800;
          cursor:pointer;
          transition:transform .12s ease, border .12s ease;
        }
        .hh-opt:hover{ transform:translateY(-1px); border-color:#6366f1; }
        .hh-opt.is-locked{ cursor:not-allowed; opacity:.85; }
        .hh-opt:disabled{ cursor:not-allowed; }

        .hh-quizFooter{
          display:flex;
          justify-content:flex-end;
          margin-top:12px;
        }
        .hh-next{
          border:none;
          background:#e2e8f0;
          color:#0f172a;
          padding:10px 14px;
          border-radius:12px;
          font-weight:900;
          cursor:not-allowed;
          opacity:.85;
        }
        .hh-next.is-ready{
          background:#4f46e5;
          color:#fff;
          cursor:pointer;
          opacity:1;
        }

        /* Done */
        .hh-done{
          background:linear-gradient(135deg,#4f46e5 0%,#9333ea 100%);
          border-radius:16px;
          padding:18px;
          color:#fff;
          text-align:center;
          box-shadow:0 14px 35px rgba(79,70,229,.35);
        }
        .hh-doneBadge{ font-size:3rem; margin-bottom:6px; }
        .hh-doneTitle{ font-weight:1000; font-size:1.35rem; margin-bottom:6px; }
        .hh-doneText{ opacity:.95; font-weight:700; }
        .hh-doneScore{ margin:10px 0 14px; font-weight:900; }

        @media (max-width:768px){
          .hh-info{ flex-direction:column; align-items:flex-start; }
          .hh-right{ width:100%; justify-content:space-between; }
          .hh-imageWrap{ min-height:260px; padding:12px; }
          .hh-hotspot{ width:46px; height:46px; }
          .hh-emoji{ font-size:1.35rem; }
          .hh-hitArea{ inset:-16px; }
        }
      `}</style>
    </div>
  );
};

export default HardwareHotspot;
