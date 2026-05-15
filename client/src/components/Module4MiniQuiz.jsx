import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Module4MiniQuiz.css";

function Module4MiniQuiz({ isTurkish, questions = [] }) {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (!questions.length) {
    return (
      <div className="m4mq-empty">
        {isTurkish ? "Soru bulunamadı." : "No questions found."}
      </div>
    );
  }

  const q = questions[index];
  const isLast = index === questions.length - 1;

  const isCorrect =
    q.type === "tf"
      ? picked === q.answer
      : q.type === "mcq"
      ? picked === q.answerIndex
      : false;

  const handlePick = (val) => {
    if (answered) return;
    const correct =
      q.type === "tf" ? val === q.answer : val === q.answerIndex;
    setPicked(val);
    setAnswered(true);
    if (correct) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (isLast) {
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
      setPicked(null);
      setAnswered(false);
    }
  };

  const handleRestart = () => {
    setIndex(0);
    setPicked(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
  };

  const getExplanation = () => {
    if (isCorrect) return q.explanation_correct || q.explanation || "";
    return q.explanation_wrong || q.explanation || "";
  };

  const getCorrectLabel = () => {
    if (q.type === "tf")
      return q.answer
        ? isTurkish ? "Doğru" : "True"
        : isTurkish ? "Yanlış" : "False";
    return q.options?.[q.answerIndex] || "";
  };

  /* ── COMPLETION SCREEN ── */
  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    const perfect = pct === 100;

    if (perfect) {
      return (
        <motion.div
          className="m4mq-perfect"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {/* Confetti burst */}
          <div className="m4mq-confetti" aria-hidden="true">
            {["🎉","⭐","🌟","✨","🏆","🎊","💫","🎈","⭐","🌟"].map((e, i) => (
              <motion.span
                key={i}
                className="m4mq-confetti-piece"
                initial={{ opacity: 1, y: 0, x: 0, scale: 0.5 }}
                animate={{
                  opacity: 0,
                  y: -(60 + Math.random() * 80),
                  x: (i % 2 === 0 ? 1 : -1) * (16 + i * 22),
                  scale: 1.5,
                  rotate: (i % 2 === 0 ? 1 : -1) * 30,
                }}
                transition={{ duration: 1.1, delay: i * 0.07, ease: "easeOut" }}
              >
                {e}
              </motion.span>
            ))}
          </div>

          <motion.div
            className="m4mq-perfect-trophy"
            animate={{ rotate: [0, -10, 10, -8, 8, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            🏆
          </motion.div>

          <motion.div
            className="m4mq-perfect-title"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            {isTurkish ? "Tebrikler!" : "Congratulations!"}
          </motion.div>

          <motion.div
            className="m4mq-perfect-subtitle"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {isTurkish
              ? `Tüm ${questions.length} soruyu doğru cevapladın! 🎯`
              : `You answered all ${questions.length} questions correctly! 🎯`}
          </motion.div>

          <motion.div
            className="m4mq-perfect-stars"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            {"⭐".repeat(questions.length)}
          </motion.div>

          <motion.button
            className="m4mq-restart-btn"
            onClick={handleRestart}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            🔄 {isTurkish ? "Tekrar Dene" : "Try Again"}
          </motion.button>
        </motion.div>
      );
    }

    const emoji = pct >= 67 ? "🎉" : "📚";
    const msg = isTurkish
      ? pct >= 67
        ? "Çok iyi! Tekrar dene, mükemmele ulaşırsın!"
        : "Tekrar dene, daha iyisini yapabilirsin!"
      : pct >= 67
      ? "Great! Try again for a perfect score!"
      : "Keep trying, you can do better!";

    return (
      <motion.div
        className="m4mq-done"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="m4mq-done-emoji">{emoji}</div>
        <div className="m4mq-done-title">
          {isTurkish ? "Quiz Tamamlandı!" : "Quiz Complete!"}
        </div>
        <div className="m4mq-done-score">
          {isTurkish
            ? `${questions.length} sorudan ${score} doğru — %${pct}`
            : `${score} of ${questions.length} correct — ${pct}%`}
        </div>
        <div className="m4mq-done-msg">{msg}</div>
        <button className="m4mq-restart-btn" onClick={handleRestart}>
          🔄 {isTurkish ? "Tekrar Dene" : "Try Again"}
        </button>
      </motion.div>
    );
  }

  /* ── QUESTION SCREEN ── */
  return (
    <div className="m4mq">
      {/* Progress bar */}
      <div className="m4mq-progress">
        <span className="m4mq-progress-label">
          {isTurkish ? "Soru" : "Q"} {index + 1}/{questions.length}
        </span>
        <div className="m4mq-bar">
          <div
            className="m4mq-bar-fill"
            style={{ width: `${((index + 1) / questions.length) * 100}%` }}
          />
        </div>
        <span className="m4mq-score-badge">⭐ {score}</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="m4mq-card"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -32 }}
          transition={{ duration: 0.25 }}
        >
          {/* Question */}
          <div className="m4mq-question">{q.question}</div>

          {/* True / False */}
          {q.type === "tf" && (
            <div className="m4mq-tf-row">
              {[true, false].map((val) => {
                const sel = picked === val;
                const ansRight = q.answer === val;
                return (
                  <button
                    key={String(val)}
                    className={`m4mq-tf-btn${
                      answered
                        ? ansRight
                          ? " m4mq-correct"
                          : sel
                          ? " m4mq-wrong"
                          : " m4mq-dim"
                        : sel
                        ? " m4mq-selected"
                        : ""
                    }`}
                    onClick={() => handlePick(val)}
                    disabled={answered}
                  >
                    <span className="m4mq-tf-icon">{val ? "✔" : "✘"}</span>
                    <span>{val ? (isTurkish ? "Doğru" : "True") : (isTurkish ? "Yanlış" : "False")}</span>
                    {answered && ansRight && <span className="m4mq-badge-right">✓</span>}
                  </button>
                );
              })}
            </div>
          )}

          {/* MCQ */}
          {q.type === "mcq" && (
            <div className="m4mq-options">
              {q.options.map((opt, i) => {
                const sel = picked === i;
                const ansRight = q.answerIndex === i;
                return (
                  <button
                    key={i}
                    className={`m4mq-option${
                      answered
                        ? ansRight
                          ? " m4mq-correct"
                          : sel
                          ? " m4mq-wrong"
                          : " m4mq-dim"
                        : sel
                        ? " m4mq-selected"
                        : ""
                    }`}
                    onClick={() => handlePick(i)}
                    disabled={answered}
                  >
                    <span className="m4mq-opt-letter">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="m4mq-opt-text">{opt}</span>
                    {answered && ansRight && <span className="m4mq-badge-right">✓</span>}
                    {answered && sel && !ansRight && <span className="m4mq-badge-wrong">✗</span>}
                  </button>
                );
              })}
            </div>
          )}

          {/* Feedback */}
          <AnimatePresence>
            {answered && (
              <motion.div
                className={`m4mq-feedback ${isCorrect ? "m4mq-fb-ok" : "m4mq-fb-bad"}`}
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                transition={{ duration: 0.3 }}
              >
                <div className="m4mq-fb-header">
                  <span className="m4mq-fb-emoji">{isCorrect ? "🎉" : "😅"}</span>
                  <span className="m4mq-fb-title">
                    {isCorrect
                      ? isTurkish ? "Harika! Doğru cevap!" : "Great! Correct answer!"
                      : isTurkish ? "Yanlış!" : "Incorrect!"}
                  </span>
                </div>

                {!isCorrect && (
                  <div className="m4mq-fb-correct-row">
                    ✅ {isTurkish ? "Doğru cevap: " : "Correct answer: "}
                    <strong>{getCorrectLabel()}</strong>
                  </div>
                )}

                {getExplanation() && (
                  <div className="m4mq-fb-why">
                    💡{" "}
                    <strong>
                      {isCorrect
                        ? isTurkish ? "Neden doğru? " : "Why correct? "
                        : isTurkish ? "Neden yanlış? " : "Why wrong? "}
                    </strong>
                    {getExplanation()}
                  </div>
                )}

                <button className="m4mq-next-btn" onClick={handleNext}>
                  {isLast
                    ? isTurkish ? "✅ Quizi Bitir" : "✅ Finish Quiz"
                    : isTurkish ? "Sonraki Soru →" : "Next Question →"}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Module4MiniQuiz;
