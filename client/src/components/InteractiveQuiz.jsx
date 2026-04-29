import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../modules.css';

function InteractiveQuiz({ quizItems, isTurkish, stepByStep = false }) {
  // ── Normal mod state ──────────────────────────────────────────────
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState({});

  // ── Step-by-step mod state ────────────────────────────────────────
  const [step, setStep] = useState(0);
  const [stepSelected, setStepSelected] = useState(null);
  const [stepAnswered, setStepAnswered] = useState(false);
  const [stepScore, setStepScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // ── Ortak yardımcılar ─────────────────────────────────────────────
  const isCorrectAnswer = (quizItem, selected) => {
    if (quizItem.type === 'true_false') return selected === quizItem.answer;
    if (quizItem.type === 'multiple_choice')
      return quizItem.options?.[selected]?.correct === true;
    return false;
  };

  const getOptionText = (option) => {
    if (!option) return '';
    return option.text || (isTurkish ? option.text_tr : option.text_en) || '';
  };

  const getCorrectText = (quizItem) => {
    if (quizItem.type === 'true_false')
      return quizItem.answer ? (isTurkish ? 'Doğru' : 'True') : (isTurkish ? 'Yanlış' : 'False');
    if (quizItem.type === 'multiple_choice') {
      const correctOpt = quizItem.options?.find((o) => o.correct);
      return getOptionText(correctOpt);
    }
    return '';
  };

  const getReasonText = (quizItem, isCorrect) => {
    const reason = isTurkish ? quizItem.reason_tr : quizItem.reason_en;
    if (reason && typeof reason === 'object')
      return isCorrect ? reason.correct || '' : reason.wrong || '';
    if (typeof reason === 'string') return reason;
    const expl = isTurkish ? quizItem.explanation_tr : quizItem.explanation_en;
    return expl || '';
  };

  const resolveFeedback = (feedback) => {
    if (!feedback) return '';
    if (typeof feedback === 'string') return feedback;
    if (typeof feedback === 'object') return isTurkish ? feedback.tr || '' : feedback.en || '';
    return '';
  };

  if (!quizItems || quizItems.length === 0) {
    return (
      <div className="interactive-quiz-container">
        <p>{isTurkish ? 'Quiz soruları bulunamadı.' : 'Quiz questions not found.'}</p>
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════
  // STEP-BY-STEP MOD
  // ══════════════════════════════════════════════════════════════════
  if (stepByStep) {
    const cappedItems = quizItems.slice(0, 10);
    const current = cappedItems[step];
    const isLast = step === cappedItems.length - 1;
    const correct = stepAnswered ? isCorrectAnswer(current, stepSelected) : null;
    const questionText = current?.question || (isTurkish ? current?.question_tr : current?.question_en);
    const correctText = stepAnswered ? getCorrectText(current) : '';
    const reasonText = stepAnswered ? getReasonText(current, correct) : '';

    const legacyFallback = stepAnswered
      ? correct
        ? resolveFeedback(current.correctFeedback) || ''
        : resolveFeedback(current.wrongFeedback) || ''
      : '';
    const finalReason = reasonText || legacyFallback;

    const handleStepMC = (optIndex) => {
      if (stepAnswered) return;
      const isOk = isCorrectAnswer(current, optIndex);
      setStepSelected(optIndex);
      setStepAnswered(true);
      if (isOk) setStepScore((s) => s + 1);
    };

    const handleStepTF = (val) => {
      if (stepAnswered) return;
      const isOk = isCorrectAnswer(current, val);
      setStepSelected(val);
      setStepAnswered(true);
      if (isOk) setStepScore((s) => s + 1);
    };

    const handleNext = () => {
      if (isLast) {
        setFinished(true);
      } else {
        setStep((s) => s + 1);
        setStepSelected(null);
        setStepAnswered(false);
      }
    };

    const handleRestart = () => {
      setStep(0);
      setStepSelected(null);
      setStepAnswered(false);
      setStepScore(0);
      setFinished(false);
    };

    // ── Bitiş ekranı ─────────────────────────────────────────────
    if (finished) {
      const pct = Math.round((stepScore / cappedItems.length) * 100);
      return (
        <motion.div
          className="interactive-quiz-container"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div style={{
            textAlign: 'center',
            padding: '2rem 1rem',
            background: 'linear-gradient(135deg, rgba(102,126,234,0.08), rgba(118,75,162,0.08))',
            borderRadius: '16px',
            border: '2px solid rgba(102,126,234,0.2)',
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
              {pct >= 70 ? '🏆' : '📚'}
            </div>
            <h3 style={{ color: '#667eea', fontWeight: 800, marginBottom: '0.5rem' }}>
              {isTurkish ? 'Quiz Tamamlandı!' : 'Quiz Completed!'}
            </h3>
            <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              {isTurkish
                ? `${cappedItems.length} sorudan ${stepScore} tanesini doğru cevapladın (%${pct})`
                : `You answered ${stepScore} out of ${cappedItems.length} correctly (${pct}%)`}
            </p>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleRestart}
              style={{
                padding: '10px 28px',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer',
              }}
            >
              {isTurkish ? '🔄 Tekrar Dene' : '🔄 Try Again'}
            </motion.button>
          </div>
        </motion.div>
      );
    }

    // ── Soru ekranı ──────────────────────────────────────────────
    return (
      <div className="interactive-quiz-container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
        }}>
          <h4 className="quiz-section-title" style={{ margin: 0 }}>
            {isTurkish ? 'Kendini Test Et:' : 'Test Yourself:'}
          </h4>
          <span style={{
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#94a3b8',
            background: '#f1f5f9',
            padding: '4px 12px',
            borderRadius: '20px',
          }}>
            {step + 1} / {cappedItems.length}
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            className="interactive-quiz-item"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <p className="interactive-quiz-question">{questionText}</p>

            {current.type === 'true_false' && (
              <div className="quiz-true-false-buttons">
                {[true, false].map((val) => (
                  <motion.button
                    key={String(val)}
                    className={`true-false-btn ${val ? 'true-btn' : 'false-btn'} ${
                      stepAnswered && stepSelected === val
                        ? current.answer === val ? 'correct' : 'wrong'
                        : ''
                    } ${stepAnswered && current.answer === val ? 'show-correct' : ''}`}
                    onClick={() => handleStepTF(val)}
                    disabled={stepAnswered}
                  >
                    {val
                      ? (isTurkish ? '✔ Doğru' : '✔ True')
                      : (isTurkish ? '✘ Yanlış' : '✘ False')}
                  </motion.button>
                ))}
              </div>
            )}

            {current.type === 'multiple_choice' && (
              <div className="interactive-quiz-options">
                {current.options?.map((option, optIndex) => {
                  const isSelected = stepSelected === optIndex;
                  const isOptCorrect = option.correct === true;
                  return (
                    <motion.button
                      key={optIndex}
                      className={`interactive-quiz-option ${
                        stepAnswered
                          ? isOptCorrect
                            ? 'correct'
                            : isSelected && !isOptCorrect
                            ? 'wrong'
                            : ''
                          : isSelected
                          ? 'selected'
                          : ''
                      }`}
                      onClick={() => handleStepMC(optIndex)}
                      disabled={stepAnswered}
                    >
                      <span className="option-text">{getOptionText(option)}</span>
                      {stepAnswered && isOptCorrect && <span className="option-icon">✔</span>}
                      {stepAnswered && isSelected && !isOptCorrect && <span className="option-icon">✘</span>}
                    </motion.button>
                  );
                })}
              </div>
            )}

            <AnimatePresence>
              {stepAnswered && (
                <motion.div
                  className={`quiz-feedback ${correct ? 'correct-feedback' : 'wrong-feedback'}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <p>{correct ? `✔ ${isTurkish ? 'Doğru!' : 'Correct!'}` : `✘ ${isTurkish ? 'Yanlış!' : 'Incorrect!'}`}</p>
                  {finalReason && (
                    <p className="quiz-explain">
                      {correct
                        ? (isTurkish ? 'Neden doğru? ' : 'Why correct? ')
                        : (isTurkish ? 'Neden yanlış? ' : 'Why wrong? ')}
                      {finalReason}
                    </p>
                  )}
                  {!correct && correctText && (
                    <p className="quiz-explain">
                      {isTurkish ? 'Doğru cevap: ' : 'Correct answer: '}{correctText}
                    </p>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={handleNext}
                    style={{
                      marginTop: '0.75rem',
                      padding: '9px 24px',
                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                    }}
                  >
                    {isLast
                      ? (isTurkish ? '✅ Quizi Bitir' : '✅ Finish Quiz')
                      : (isTurkish ? 'Sonraki Soru →' : 'Next Question →')}
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════
  // NORMAL MOD (tüm sorular aynı anda)
  // ══════════════════════════════════════════════════════════════════
  const handleMC = (quizIndex, optIndex) => {
    if (showResults[quizIndex]) return;
    setSelectedAnswers((prev) => ({ ...prev, [quizIndex]: optIndex }));
    setShowResults((prev) => ({ ...prev, [quizIndex]: true }));
  };

  const handleTF = (quizIndex, val) => {
    if (showResults[quizIndex]) return;
    setSelectedAnswers((prev) => ({ ...prev, [quizIndex]: val }));
    setShowResults((prev) => ({ ...prev, [quizIndex]: true }));
  };

  return (
    <div className="interactive-quiz-container">
      <h4 className="quiz-section-title">
        {isTurkish ? 'Kendini Test Et:' : 'Test Yourself:'}
      </h4>

      {quizItems.slice(0, 10).map((quizItem, quizIndex) => {
        const answered = !!showResults[quizIndex];
        const selected = selectedAnswers[quizIndex];
        const correct = answered ? isCorrectAnswer(quizItem, selected) : null;
        const questionText =
          quizItem.question || (isTurkish ? quizItem.question_tr : quizItem.question_en);

        const legacyExplanation = isTurkish ? quizItem.explanation_tr : quizItem.explanation_en;
        const legacyCorrectFeedback =
          resolveFeedback(quizItem.correctFeedback) ||
          (isTurkish ? `Doğru. ${legacyExplanation || ''}`.trim() : `Correct. ${legacyExplanation || ''}`.trim());
        const legacyWrongFeedback =
          resolveFeedback(quizItem.wrongFeedback) ||
          (isTurkish ? `Yanlış. ${legacyExplanation || ''}`.trim() : `Incorrect. ${legacyExplanation || ''}`.trim());

        const correctText = getCorrectText(quizItem);
        const reasonCorrect = getReasonText(quizItem, true);
        const reasonWrong = getReasonText(quizItem, false);
        const finalCorrectReason = reasonCorrect || legacyCorrectFeedback;
        const finalWrongReason = reasonWrong || legacyWrongFeedback;

        return (
          <motion.div
            key={quizIndex}
            className="interactive-quiz-item"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: quizIndex * 0.06 }}
          >
            <p className="interactive-quiz-question">{questionText}</p>

            {quizItem.type === 'true_false' && (
              <div className="quiz-true-false-buttons">
                <motion.button
                  className={`true-false-btn true-btn ${
                    answered && selected === true
                      ? quizItem.answer === true ? 'correct' : 'wrong'
                      : ''
                  } ${answered && quizItem.answer === true ? 'show-correct' : ''}`}
                  onClick={() => handleTF(quizIndex, true)}
                  disabled={answered}
                >
                  {isTurkish ? '✔ Doğru' : '✔ True'}
                </motion.button>
                <motion.button
                  className={`true-false-btn false-btn ${
                    answered && selected === false
                      ? quizItem.answer === false ? 'correct' : 'wrong'
                      : ''
                  } ${answered && quizItem.answer === false ? 'show-correct' : ''}`}
                  onClick={() => handleTF(quizIndex, false)}
                  disabled={answered}
                >
                  {isTurkish ? '✘ Yanlış' : '✘ False'}
                </motion.button>
              </div>
            )}

            {quizItem.type === 'multiple_choice' && (
              <div className="interactive-quiz-options">
                {quizItem.options?.map((option, optIndex) => {
                  const isSelected = selected === optIndex;
                  const isOptCorrect = option.correct === true;
                  return (
                    <motion.button
                      key={optIndex}
                      className={`interactive-quiz-option ${
                        answered
                          ? isOptCorrect ? 'correct' : isSelected && !isOptCorrect ? 'wrong' : ''
                          : isSelected ? 'selected' : ''
                      }`}
                      onClick={() => handleMC(quizIndex, optIndex)}
                      disabled={answered}
                    >
                      <span className="option-text">{getOptionText(option)}</span>
                      {answered && isOptCorrect && <span className="option-icon">✔</span>}
                      {answered && isSelected && !isOptCorrect && <span className="option-icon">✘</span>}
                    </motion.button>
                  );
                })}
              </div>
            )}

            <AnimatePresence>
              {answered && (
                <motion.div
                  className={`quiz-feedback ${correct ? 'correct-feedback' : 'wrong-feedback'}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {correct ? (
                    <div>
                      <p>✔ {isTurkish ? 'Doğru!' : 'Correct!'}</p>
                      <p className="quiz-explain">
                        {isTurkish ? 'Neden doğru? ' : 'Why correct? '}
                        {finalCorrectReason}
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p>✘ {isTurkish ? 'Yanlış!' : 'Incorrect!'}</p>
                      <p className="quiz-explain">
                        {isTurkish ? 'Neden yanlış? ' : 'Why wrong? '}
                        {finalWrongReason}
                      </p>
                      {correctText && (
                        <p className="quiz-explain">
                          {isTurkish ? 'Doğru cevap:' : 'Correct answer:'} {correctText}
                        </p>
                      )}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

export default InteractiveQuiz;
