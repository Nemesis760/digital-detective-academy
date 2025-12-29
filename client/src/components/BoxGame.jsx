import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Clock, Trophy, Sparkles } from 'lucide-react';
import soundManager from '../utils/soundEffects';

/**
 * BoxGame - Wordwall tarzı "Kutuyu Aç" oyunu
 * Öğrenciler kutulara tıklayarak soruları açarlar
 */

const BoxGame = ({ isTurkish = true, questions = [] }) => {
  const [openedBoxes, setOpenedBoxes] = useState(new Set());
  const [answeredBoxes, setAnsweredBoxes] = useState(new Set());
  const [currentBox, setCurrentBox] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(180); // 3 dakika
  const [gameComplete, setGameComplete] = useState(false);

  // Default questions if none provided
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

  // Timer
  useEffect(() => {
    if (timeLeft > 0 && !gameComplete) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !gameComplete) {
      setGameComplete(true);
    }
  }, [timeLeft, gameComplete]);

  const handleBoxClick = (boxId) => {
    if (answeredBoxes.has(boxId) || gameComplete) return;
    
    // Eğer zaten açıksa ve cevaplanmamışsa, soruyu göster
    if (openedBoxes.has(boxId) && !answeredBoxes.has(boxId)) {
      setCurrentBox(boxId);
      return;
    }
    
    // Yeni kutu aç
    setCurrentBox(boxId);
    setOpenedBoxes(prev => new Set([...prev, boxId]));
  };

  const handleAnswer = (isCorrect) => {
    if (!currentBox) return;
    
    const question = gameQuestions.find(q => q.id === currentBox);
    if (question && question.answer === isCorrect) {
      setScore(prev => prev + 10);
      soundManager.playCorrect();
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#10b981', '#059669', '#34d399', '#fbbf24']
      });
    } else {
      soundManager.playWrong();
    }
    
    // Bu kutuyu cevaplanmış olarak işaretle
    setAnsweredBoxes(prev => new Set([...prev, currentBox]));
    
    // Tüm sorular cevaplandı mı kontrol et
    if (answeredBoxes.size + 1 === gameQuestions.length) {
      setTimeout(() => {
        setGameComplete(true);
        soundManager.playSuccess();
        // Büyük konfeti patlaması
        setTimeout(() => {
          confetti({
            particleCount: 200,
            spread: 100,
            origin: { y: 0.5 },
            colors: ['#10b981', '#059669', '#34d399', '#fbbf24', '#f59e0b', '#6366f1']
          });
        }, 300);
      }, 500);
    }
    
    // Soruyu kapat ama kutu açık kalsın
    setTimeout(() => {
      setCurrentBox(null);
    }, 1000);
  };

  const handleReset = () => {
    setOpenedBoxes(new Set());
    setAnsweredBoxes(new Set());
    setCurrentBox(null);
    setScore(0);
    setTimeLeft(180);
    setGameComplete(false);
  };

  const getBoxColor = (boxId) => {
    const colors = [
      'from-orange-500 to-red-500',
      'from-green-500 to-emerald-500',
      'from-blue-500 to-cyan-500',
      'from-pink-500 to-rose-500',
      'from-purple-500 to-indigo-500',
    ];
    return colors[(boxId - 1) % colors.length];
  };

  return (
    <div className="box-game-container">
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
          {isTurkish 
            ? '📦 Kutuyu Aç - İşletim Sistemi Oyunu'
            : '📦 Open the Box - Operating System Game'}
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
          ? 'Açmak için birine dokunun'
          : 'Touch one to open'}
      </div>

      <div className="boxes-grid">
        {gameQuestions.map((question, index) => {
          const isOpen = openedBoxes.has(question.id);
          const isAnswered = answeredBoxes.has(question.id);
          const isCurrent = currentBox === question.id;
          const showQuestion = isOpen && (isCurrent || isAnswered);
          
          return (
            <motion.div
              key={question.id}
              className={`game-box ${isOpen ? 'opened' : ''} ${isCurrent ? 'current' : ''} ${isAnswered ? 'answered' : ''}`}
              onClick={() => !isAnswered && handleBoxClick(question.id)}
              whileHover={!isAnswered ? { scale: 1.05 } : {}}
              whileTap={!isAnswered ? { scale: 0.95 } : {}}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {showQuestion ? (
                <div className="box-content">
                  <p className="question-text">{question.question}</p>
                  {!isAnswered && (
                    <div className="answer-buttons">
                      <motion.button
                        className="answer-btn correct-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAnswer(true);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        ✅ {isTurkish ? 'Doğru' : 'True'}
                      </motion.button>
                      <motion.button
                        className="answer-btn wrong-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAnswer(false);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        ❌ {isTurkish ? 'Yanlış' : 'False'}
                      </motion.button>
                    </div>
                  )}
                  {isAnswered && (
                    <div className="answer-feedback">
                      <span className="feedback-icon">
                        {gameQuestions.find(q => q.id === question.id)?.answer ? '✅' : '❌'}
                      </span>
                      <span className="feedback-text">
                        {isTurkish ? 'Cevaplandı' : 'Answered'}
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="box-number">
                  <span className="number">{question.id}</span>
                  <span className="corner-icon">📄</span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

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
              <h2>
                {isTurkish ? '🎉 Oyun Tamamlandı!' : '🎉 Game Complete!'}
              </h2>
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

      <style jsx>{`
        .box-game-container {
          width: 100%;
          padding: 2rem;
          background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
          border-radius: 16px;
          min-height: 600px;
          position: relative;
        }

        .game-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .game-header h3 {
          font-size: 1.5rem;
          color: #0369a1;
          margin: 0;
          flex: 1;
          text-align: center;
        }

        .timer-display {
          background: white;
          padding: 0.75rem 1.25rem;
          border-radius: 20px;
          font-weight: 700;
          color: #0369a1;
          font-size: 1.1rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border: 2px solid #0369a1;
        }

        .timer-display span {
          font-variant-numeric: tabular-nums;
        }

        .score-display {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 0.75rem 1.25rem;
          border-radius: 20px;
          font-weight: 700;
          font-size: 1.1rem;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .instruction-text {
          text-align: center;
          font-size: 1.2rem;
          color: #0369a1;
          font-weight: 600;
          margin-bottom: 2rem;
        }

        .boxes-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .game-box {
          aspect-ratio: 1;
          border-radius: 16px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .game-box:not(.opened) {
          background: white;
          border: 4px solid;
          position: relative;
        }

        .game-box:not(.opened)::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.05));
          opacity: 0;
          transition: opacity 0.3s;
        }

        .game-box:not(.opened):hover::before {
          opacity: 1;
        }

        .game-box.opened {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          border: 4px solid #f59e0b;
          box-shadow: 0 8px 24px rgba(245, 158, 11, 0.3);
          animation: boxOpen 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        @keyframes boxOpen {
          0% { transform: scale(0.8) rotate(-5deg); opacity: 0.5; }
          50% { transform: scale(1.1) rotate(5deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }

        .game-box.current {
          transform: scale(1.15);
          z-index: 10;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
          animation: currentPulse 1s ease-in-out infinite;
        }

        @keyframes currentPulse {
          0%, 100% { box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25); }
          50% { box-shadow: 0 12px 32px rgba(99, 102, 241, 0.4); }
        }

        .box-number {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .box-number .number {
          font-size: 3rem;
          font-weight: 800;
          color: #1e293b;
        }

        .corner-icon {
          position: absolute;
          bottom: 8px;
          right: 8px;
          font-size: 1.5rem;
          opacity: 0.5;
        }

        .box-content {
          width: 100%;
          height: 100%;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          z-index: 5;
        }

        .question-text {
          font-size: 1rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 1rem 0;
          line-height: 1.5;
          text-align: center;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .answer-buttons {
          display: flex;
          gap: 0.5rem;
          margin-top: auto;
          z-index: 10;
          position: relative;
        }

        .answer-feedback {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: auto;
          padding: 0.5rem;
        }

        .feedback-icon {
          font-size: 2rem;
        }

        .feedback-text {
          font-size: 0.85rem;
          font-weight: 600;
          color: #64748b;
        }

        .game-box.answered {
          background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
          border-color: #10b981;
        }

        .answer-btn {
          flex: 1;
          padding: 0.75rem 0.5rem;
          border: none;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 0.85rem;
          position: relative;
          overflow: hidden;
          z-index: 20;
          min-height: 44px;
        }

        .answer-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .answer-btn:active::before {
          width: 300px;
          height: 300px;
        }

        .correct-btn {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }

        .correct-btn:hover {
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(16, 185, 129, 0.4);
        }

        .wrong-btn {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
        }

        .wrong-btn:hover {
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(239, 68, 68, 0.4);
        }

        .completion-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(4px);
        }

        .completion-card {
          background: white;
          border-radius: 20px;
          padding: 3rem;
          max-width: 500px;
          width: 90%;
          text-align: center;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .completion-card h2 {
          font-size: 2rem;
          color: #10b981;
          margin-bottom: 1rem;
        }

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
          transition: all 0.3s;
        }

        .reset-game-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
        }

        @media (max-width: 768px) {
          .boxes-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.75rem;
          }

          .game-header {
            flex-direction: column;
          }

          .game-header h3 {
            font-size: 1.2rem;
          }

          .question-text {
            font-size: 0.85rem;
          }

          .answer-btn {
            font-size: 0.75rem;
            padding: 0.4rem;
          }
        }

        @media (max-width: 480px) {
          .boxes-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .box-number .number {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default BoxGame;

