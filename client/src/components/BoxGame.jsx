import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Clock, Trophy } from 'lucide-react';
import soundManager from '../utils/soundEffects';

const BoxGame = ({ isTurkish = true, questions = [] }) => {
  const [openedBoxes, setOpenedBoxes] = useState(new Set());
  const [answeredBoxes, setAnsweredBoxes] = useState(new Set());
  const [boxResults, setBoxResults] = useState({});
  const [currentBox, setCurrentBox] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(180);
  const [gameComplete, setGameComplete] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const defaultQuestions = isTurkish ? [
    { id: 1, question: "İşletim sistemi dosyaların yönetimini sağlar.", answer: true },
    { id: 2, question: "Açık kaynak kodlu işletim sistemleri herkes tarafından geliştirilebilir.", answer: true },
    { id: 3, question: "Bir cihaz sadece bir işletim sistemini destekler.", answer: false },
    { id: 4, question: "Android bir işletim sistemidir.", answer: true },
    { id: 5, question: "Bilgisayarda işletim sistemi olmak zorunda değildir.", answer: false },
    { id: 6, question: "İşletim sistemi her zaman kuruludur.", answer: true },
    { id: 7, question: "Pardus işletim sistemi Linux çekirdeğini kullanır.", answer: true },
    { id: 8, question: "İşletim sistemi sadece internete girmemizi sağlar.", answer: false },
    { id: 9, question: "macOS işletim sistemini Apple firması geliştirmiştir.", answer: true },
    { id: 10, question: "Windows işletim sisteminin geliştiricilerinden birisi de TUBİTAK'tır.", answer: false },
  ] : [
    { id: 1, question: "Operating system manages files.", answer: true },
    { id: 2, question: "Open source operating systems can be developed by anyone.", answer: true },
    { id: 3, question: "A device supports only one operating system.", answer: false },
    { id: 4, question: "Android is an operating system.", answer: true },
    { id: 5, question: "A computer doesn't need an operating system.", answer: false },
    { id: 6, question: "Operating system is always installed.", answer: true },
    { id: 7, question: "Pardus operating system uses Linux kernel.", answer: true },
    { id: 8, question: "Operating system only allows us to access the internet.", answer: false },
    { id: 9, question: "Apple developed macOS operating system.", answer: true },
    { id: 10, question: "TUBİTAK is one of the developers of Windows operating system.", answer: false },
  ];

  const gameQuestions = questions.length > 0 ? questions : defaultQuestions;

  useEffect(() => {
    if (!isStarted || gameComplete) return;
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (timeLeft === 0) setGameComplete(true);
  }, [timeLeft, gameComplete, isStarted]);

  const handleBoxClick = (boxId) => {
    if (!isStarted || answeredBoxes.has(boxId) || gameComplete) return;
    setCurrentBox(boxId);
    setOpenedBoxes(prev => new Set([...prev, boxId]));
  };

  const handleAnswer = (isCorrect) => {
    if (!currentBox) return;
    const question = gameQuestions.find(q => q.id === currentBox);
    const wasCorrect = question && question.answer === isCorrect;

    if (wasCorrect) {
      setScore(prev => prev + 10);
      soundManager.playCorrect();
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#10b981', '#059669', '#34d399', '#fbbf24'],
      });
    } else {
      soundManager.playWrong();
    }

    setBoxResults(prev => ({ ...prev, [currentBox]: wasCorrect }));
    setAnsweredBoxes(prev => new Set([...prev, currentBox]));

    if (answeredBoxes.size + 1 === gameQuestions.length) {
      setTimeout(() => {
        setGameComplete(true);
        soundManager.playSuccess();
        setTimeout(() => {
          confetti({
            particleCount: 200,
            spread: 100,
            origin: { y: 0.5 },
            colors: ['#10b981', '#059669', '#34d399', '#fbbf24', '#f59e0b', '#6366f1'],
          });
        }, 300);
      }, 500);
    }

    setTimeout(() => setCurrentBox(null), 800);
  };

  const handleReset = () => {
    setOpenedBoxes(new Set());
    setAnsweredBoxes(new Set());
    setBoxResults({});
    setCurrentBox(null);
    setScore(0);
    setTimeLeft(180);
    setGameComplete(false);
    setIsStarted(false);
  };

  const handleStart = () => {
    setIsStarted(true);
    if (timeLeft <= 0) setTimeLeft(180);
  };

  const currentQuestion = currentBox ? gameQuestions.find(q => q.id === currentBox) : null;

  return (
    <div className="box-game-container">
      {/* Header */}
      <div className="game-header">
        <motion.div
          className="timer-display"
          animate={timeLeft <= 10 ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.5, repeat: timeLeft <= 10 ? Infinity : 0 }}
        >
          <Clock size={20} />
          <span>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
        </motion.div>
        <h3>
          {isTurkish ? '📦 Kutuyu Aç - İşletim Sistemi Oyunu' : '📦 Open the Box - Operating System Game'}
        </h3>
        <motion.div
          className="score-display"
          animate={{ scale: score > 0 ? [1, 1.1, 1] : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Trophy size={20} />
          <span>{score} / {gameQuestions.length * 10}</span>
        </motion.div>
      </div>

      <div className="instruction-text">
        {isTurkish
          ? (isStarted ? 'Bir kutuya tıkla, soruyu gör, cevapla!' : 'Başlatmak için butona dokunun')
          : (isStarted ? 'Click a box, read the question, answer it!' : 'Tap the button to start')}
      </div>

      {!isStarted && !gameComplete && (
        <div className="start-area">
          <button className="start-btn" onClick={handleStart}>
            {isTurkish ? 'Başlat' : 'Start'}
          </button>
        </div>
      )}

      {/* Question panel — shown above the grid when a box is open */}
      <AnimatePresence>
        {currentQuestion && !answeredBoxes.has(currentBox) && (
          <motion.div
            className="question-panel"
            key={currentBox}
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.25 }}
          >
            <p className="panel-question-label">
              {isTurkish ? `Soru ${currentBox}` : `Question ${currentBox}`}
            </p>
            <p className="panel-question-text">{currentQuestion.question}</p>
            <div className="panel-answer-buttons">
              <motion.button
                className="answer-btn correct-btn"
                onClick={() => handleAnswer(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ✅ {isTurkish ? 'Doğru' : 'True'}
              </motion.button>
              <motion.button
                className="answer-btn wrong-btn"
                onClick={() => handleAnswer(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ❌ {isTurkish ? 'Yanlış' : 'False'}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Boxes grid — always fixed layout, no expanding */}
      <div className={`boxes-grid${!isStarted ? ' disabled' : ''}`}>
        {gameQuestions.map((question, index) => {
          const isOpen = openedBoxes.has(question.id);
          const isAnswered = answeredBoxes.has(question.id);
          const isCurrent = currentBox === question.id;
          const wasCorrect = boxResults[question.id];

          return (
            <motion.div
              key={question.id}
              className={`game-box${isOpen ? ' opened' : ''}${isCurrent ? ' current' : ''}${isAnswered ? ' answered' : ''}${isAnswered && wasCorrect ? ' correct-answer' : ''}${isAnswered && !wasCorrect ? ' wrong-answer' : ''}`}
              onClick={() => !isAnswered && !isCurrent && handleBoxClick(question.id)}
              whileHover={!isAnswered && isStarted ? { scale: 1.06 } : {}}
              whileTap={!isAnswered && isStarted ? { scale: 0.94 } : {}}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.06 }}
            >
              {isAnswered ? (
                <div className="box-number">
                  <span className="answer-result-icon">{wasCorrect ? '✅' : '❌'}</span>
                  <span className="corner-num">{question.id}</span>
                </div>
              ) : (
                <div className="box-number">
                  <span className="number">{question.id}</span>
                  {isOpen && <span className="opened-badge">📖</span>}
                  {!isOpen && <span className="corner-icon">📄</span>}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Completion modal */}
      <AnimatePresence>
        {gameComplete && (
          <motion.div
            className="completion-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="completion-card"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
            >
              <h2>{isTurkish ? '🎉 Oyun Tamamlandı!' : '🎉 Game Complete!'}</h2>
              <p className="final-score">
                {isTurkish ? 'Toplam Puan:' : 'Total Score:'} {score} / {gameQuestions.length * 10}
              </p>
              <p className="final-message">
                {score === gameQuestions.length * 10
                  ? (isTurkish ? 'Mükemmel! Tüm soruları doğru cevapladın!' : 'Perfect! You answered all questions correctly!')
                  : score >= (gameQuestions.length * 10) / 2
                    ? (isTurkish ? 'İyi iş! Biraz daha çalış!' : 'Good job! Study a bit more!')
                    : (isTurkish ? 'Tekrar denemek iyi olur!' : 'It would be good to try again!')}
              </p>
              <button onClick={handleReset} className="reset-game-btn">
                {isTurkish ? '🔄 Tekrar Oyna' : '🔄 Play Again'}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .box-game-container {
          width: 100%;
          padding: 2rem;
          background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
          border-radius: 16px;
          min-height: 500px;
          position: relative;
        }

        .game-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .game-header h3 {
          font-size: 1.4rem;
          color: #0369a1;
          margin: 0;
          flex: 1;
          text-align: center;
        }

        .timer-display {
          background: white;
          padding: 0.65rem 1.1rem;
          border-radius: 20px;
          font-weight: 700;
          color: #0369a1;
          font-size: 1rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.12);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border: 2px solid #0369a1;
          white-space: nowrap;
        }

        .timer-display span { font-variant-numeric: tabular-nums; }

        .score-display {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 0.65rem 1.1rem;
          border-radius: 20px;
          font-weight: 700;
          font-size: 1rem;
          box-shadow: 0 4px 12px rgba(16,185,129,0.3);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          white-space: nowrap;
        }

        .instruction-text {
          text-align: center;
          font-size: 1.1rem;
          color: #0369a1;
          font-weight: 600;
          margin-bottom: 1.25rem;
        }

        .start-area {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .start-btn {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          border: none;
          padding: 0.8rem 2rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          box-shadow: 0 6px 16px rgba(99,102,241,0.4);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .start-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(99,102,241,0.5);
        }

        /* ── Question panel ── */
        .question-panel {
          background: white;
          border-radius: 16px;
          padding: 1.5rem 2rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 8px 28px rgba(99,102,241,0.18);
          border: 2px solid #6366f1;
          text-align: center;
        }

        .panel-question-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: #6366f1;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 0 0 0.5rem;
        }

        .panel-question-text {
          font-size: 1.15rem;
          font-weight: 700;
          color: #1e293b;
          line-height: 1.55;
          margin: 0 0 1.25rem;
        }

        .panel-answer-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .answer-btn {
          padding: 0.75rem 2rem;
          border: none;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
          font-size: 1rem;
          transition: transform 0.2s, box-shadow 0.2s;
          min-width: 130px;
        }

        .correct-btn {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(16,185,129,0.3);
        }

        .correct-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(16,185,129,0.45);
        }

        .wrong-btn {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(239,68,68,0.3);
        }

        .wrong-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(239,68,68,0.45);
        }

        /* ── Boxes grid — always fixed, never changes size ── */
        .boxes-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0.9rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .boxes-grid.disabled {
          opacity: 0.55;
          pointer-events: none;
        }

        .game-box {
          aspect-ratio: 1;
          border-radius: 14px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 14px rgba(0,0,0,0.12);
          transition: box-shadow 0.25s, border-color 0.25s;
          background: white;
          border: 3px solid #e2e8f0;
        }

        .game-box:not(.answered):not(.opened):hover {
          box-shadow: 0 6px 20px rgba(99,102,241,0.22);
          border-color: #6366f1;
        }

        .game-box.opened:not(.answered) {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          border-color: #f59e0b;
          box-shadow: 0 6px 20px rgba(245,158,11,0.35);
        }

        .game-box.current {
          border-color: #6366f1;
          box-shadow: 0 6px 24px rgba(99,102,241,0.45);
          animation: currentPulse 1.2s ease-in-out infinite;
        }

        @keyframes currentPulse {
          0%, 100% { box-shadow: 0 6px 20px rgba(99,102,241,0.35); }
          50%       { box-shadow: 0 6px 28px rgba(99,102,241,0.6); }
        }

        .game-box.correct-answer {
          background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
          border-color: #10b981;
          cursor: default;
        }

        .game-box.wrong-answer {
          background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
          border-color: #ef4444;
          cursor: default;
        }

        /* Box number display */
        .box-number {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .number {
          font-size: 2.4rem;
          font-weight: 800;
          color: #1e293b;
        }

        .corner-icon {
          position: absolute;
          bottom: 6px;
          right: 6px;
          font-size: 1.2rem;
          opacity: 0.4;
        }

        .opened-badge {
          position: absolute;
          bottom: 6px;
          right: 6px;
          font-size: 1.2rem;
          opacity: 0.7;
        }

        .answer-result-icon {
          font-size: 2rem;
        }

        .corner-num {
          position: absolute;
          bottom: 4px;
          right: 6px;
          font-size: 0.7rem;
          font-weight: 700;
          color: #94a3b8;
        }

        /* Completion modal */
        .completion-modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.65);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(4px);
        }

        .completion-card {
          background: white;
          border-radius: 20px;
          padding: 3rem 2.5rem;
          max-width: 480px;
          width: 90%;
          text-align: center;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }

        .completion-card h2 { font-size: 2rem; color: #10b981; margin-bottom: 1rem; }

        .final-score {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin: 1rem 0;
        }

        .final-message {
          font-size: 1.1rem;
          color: #64748b;
          margin: 1rem 0;
          line-height: 1.6;
        }

        .reset-game-btn {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          margin-top: 1.5rem;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .reset-game-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(99,102,241,0.4);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .boxes-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 0.65rem;
          }
          .game-header h3 { font-size: 1.1rem; }
          .number { font-size: 1.8rem; }
          .panel-question-text { font-size: 1rem; }
          .answer-btn { padding: 0.65rem 1rem; font-size: 0.9rem; min-width: 100px; }
        }

        @media (max-width: 480px) {
          .boxes-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5rem;
          }
          .box-game-container { padding: 1.25rem; }
          .game-header { flex-direction: column; }
          .number { font-size: 1.5rem; }
          .panel-answer-buttons { gap: 0.6rem; }
          .answer-btn { min-width: 80px; }
        }
      `}</style>
    </div>
  );
};

export default BoxGame;
