import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Gamepad2, Target } from 'lucide-react';
import soundManager from '../utils/soundEffects';

/**
 * ScenarioTest - Scenario-Based Ethics and Security Test
 * Students answer questions about digital ethics and security
 */

const ScenarioTest = ({ isTurkish = true }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set());

  const questions = [
    {
      question: isTurkish 
        ? "Ali internette çok beğendiği bir oyunu 'crack'li (korsan) olarak indirdi. Ali neyi ihlal etti?"
        : "Ali downloaded a game he really liked as 'cracked' (pirated) from the internet. What did Ali violate?",
      options: [
        isTurkish ? "Sadece telif hakkı" : "Only copyright",
        isTurkish ? "Sadece güvenlik (virüs riski)" : "Only security (virus risk)",
        isTurkish ? "Hem telif hakkı hem güvenlik" : "Both copyright and security",
        isTurkish ? "Hiçbir şey, ücretsiz indirmek serbest" : "Nothing, free download is allowed"
      ],
      correct: 2,
      explanation: isTurkish
        ? "Korsan yazılım hem telif hakkını ihlal eder hem de virüs içerme riski taşır. Her zaman yasal yollardan yazılım indirmeliyiz."
        : "Pirated software violates both copyright and carries virus risk. We should always download software through legal means."
    },
    {
      question: isTurkish
        ? "Ayşe, ödevinde kullandığı bir resmi internetten buldu ve izin almadan kullandı. Bu doğru mu?"
        : "Ayşe found an image on the internet for her homework and used it without permission. Is this correct?",
      options: [
        isTurkish ? "Evet, ödev için kullanmak serbest" : "Yes, using for homework is allowed",
        isTurkish ? "Hayır, telif hakkı ihlali" : "No, copyright violation",
        isTurkish ? "Evet, sadece ödev için sorun yok" : "Yes, only for homework it's fine",
        isTurkish ? "Hayır, ama sadece uyarı verilir" : "No, but only a warning is given"
      ],
      correct: 1,
      explanation: isTurkish
        ? "İzinsiz kullanım telif hakkı ihlalidir. Ücretsiz stok fotoğraflar veya açık lisanslı içerikler kullanmalıyız."
        : "Unauthorized use is copyright violation. We should use free stock photos or open-licensed content."
    },
    {
      question: isTurkish
        ? "Mehmet'in bilgisayarı çok yavaşladı ve sürekli garip pencereler açılıyor. Ne yapmalı?"
        : "Mehmet's computer became very slow and strange windows keep opening. What should he do?",
      options: [
        isTurkish ? "Hiçbir şey yapma, kendiliğinden düzelir" : "Do nothing, it will fix itself",
        isTurkish ? "Antivirüs taraması yap ve ebeveynlere/öğretmene haber ver" : "Run antivirus scan and tell parents/teacher",
        isTurkish ? "Bilgisayarı kapat ve bir daha açma" : "Turn off computer and never turn it on",
        isTurkish ? "İnterneti kapat, sorun çözülür" : "Turn off internet, problem solved"
      ],
      correct: 1,
      explanation: isTurkish
        ? "Bu virüs belirtileridir. Hemen antivirüs taraması yapmalı ve bir yetişkine haber vermeliyiz."
        : "These are virus symptoms. We should immediately run antivirus scan and inform an adult."
    },
    {
      question: isTurkish
        ? "Zeynep'in şifresi '123456'. Bu şifre güçlü mü?"
        : "Zeynep's password is '123456'. Is this password strong?",
      options: [
        isTurkish ? "Evet, sayılar içeriyor" : "Yes, it contains numbers",
        isTurkish ? "Hayır, çok basit ve tahmin edilebilir" : "No, too simple and guessable",
        isTurkish ? "Evet, 6 karakter uzun" : "Yes, 6 characters long",
        isTurkish ? "Hayır, ama sadece harf eksik" : "No, but only letters are missing"
      ],
      correct: 1,
      explanation: isTurkish
        ? "'123456' dünyanın en yaygın şifrelerinden biridir. Güçlü şifre büyük harf, küçük harf, rakam ve sembol içermelidir."
        : "'123456' is one of the most common passwords in the world. Strong password should contain uppercase, lowercase, numbers and symbols."
    }
  ];

  const currentQuestion = questions[currentQuestionIndex];
  const isComplete = answeredQuestions.size === questions.length;

  const handleAnswerSelect = (index) => {
    if (answeredQuestions.has(currentQuestionIndex)) return;
    
    setSelectedAnswer(index);
    setShowFeedback(true);

    if (index === currentQuestion.correct) {
      setScore(prev => prev + 1);
      if (!answeredQuestions.has(currentQuestionIndex)) {
        soundManager.playCorrect();
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#10b981', '#059669', '#34d399']
        });
      }
    } else {
      soundManager.playWrong();
    }

    setAnsweredQuestions(prev => new Set([...prev, currentQuestionIndex]));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setAnsweredQuestions(new Set());
  };

  // Tamamlama kontrolü
  useEffect(() => {
    if (isComplete && score === questions.length) {
      soundManager.playSuccess();
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#10b981', '#059669', '#34d399', '#fbbf24', '#f59e0b']
      });
    }
  }, [isComplete, score, questions.length]);

  return (
    <div className="scenario-test-container">
      <div className="test-header">
        <div className="header-icons">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <Gamepad2 className="header-icon gamepad-icon" size={28} />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Target className="header-icon target-icon" size={28} />
          </motion.div>
          <h3>
            {isTurkish 
              ? 'Senaryo Bazlı Test'
              : 'Scenario-Based Test'}
          </h3>
        </div>
        <div className="score-display">
          {isTurkish ? 'Puan:' : 'Score:'} <span className="score-value">{score}/{questions.length}</span>
        </div>
      </div>

      <div className="question-card">
        <div className="question-number">
          {isTurkish ? 'Soru' : 'Question'} {currentQuestionIndex + 1} / {questions.length}
        </div>
        
        <h4 className="question-text">{currentQuestion.question}</h4>

        <div className="options-grid">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === currentQuestion.correct;
            const isAnswered = answeredQuestions.has(currentQuestionIndex);
            const showResult = isAnswered && showFeedback;

            return (
              <motion.button
                key={index}
                className={`option-btn ${
                  showResult 
                    ? isCorrect 
                      ? 'correct' 
                      : isSelected && !isCorrect 
                        ? 'incorrect' 
                        : ''
                    : isSelected 
                      ? 'selected' 
                      : ''
                }`}
                onClick={() => handleAnswerSelect(index)}
                disabled={isAnswered}
                whileHover={!isAnswered ? { scale: 1.02 } : {}}
                whileTap={!isAnswered ? { scale: 0.98 } : {}}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{option}</span>
                {showResult && isCorrect && (
                  <span className="result-icon">✓</span>
                )}
                {showResult && isSelected && !isCorrect && (
                  <span className="result-icon">✕</span>
                )}
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence>
          {showFeedback && (
            <motion.div
              className={`feedback-box ${selectedAnswer === currentQuestion.correct ? 'success' : 'error'}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <p className="feedback-text">
                {selectedAnswer === currentQuestion.correct
                  ? (isTurkish ? '🎉 Doğru Cevap!' : '🎉 Correct Answer!')
                  : (isTurkish ? '❌ Yanlış Cevap' : '❌ Wrong Answer')}
              </p>
              <p className="explanation-text">{currentQuestion.explanation}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="test-controls">
        <button 
          onClick={handlePrev} 
          disabled={currentQuestionIndex === 0}
          className="nav-btn prev-btn"
        >
          ← {isTurkish ? 'Önceki' : 'Previous'}
        </button>

        {currentQuestionIndex < questions.length - 1 ? (
          <button 
            onClick={handleNext} 
            disabled={!answeredQuestions.has(currentQuestionIndex)}
            className="nav-btn next-btn"
          >
            {isTurkish ? 'Sonraki' : 'Next'} →
          </button>
        ) : (
          <button 
            onClick={handleReset} 
            className="nav-btn reset-btn"
          >
            {isTurkish ? '🔄 Tekrar Oyna' : '🔄 Play Again'}
          </button>
        )}
      </div>

      <AnimatePresence>
        {isComplete && (
          <motion.div
            className="completion-message"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h3>
              {isTurkish 
                ? `🎉 Test Tamamlandı! Puanın: ${score}/${questions.length}`
                : `🎉 Test Complete! Your Score: ${score}/${questions.length}`}
            </h3>
            <p className="final-message">
              {score === questions.length
                ? (isTurkish 
                    ? 'Mükemmel! Tüm soruları doğru cevapladın!'
                    : 'Perfect! You answered all questions correctly!')
                : score >= questions.length / 2
                  ? (isTurkish
                      ? 'İyi iş! Biraz daha çalışarak mükemmel olabilirsin!'
                      : 'Good job! You can be perfect with a bit more practice!')
                  : (isTurkish
                      ? 'Tekrar gözden geçirmek iyi olur!'
                      : 'It would be good to review again!')}
            </p>
            <button onClick={handleReset} className="reset-btn">
              {isTurkish ? '🔄 Tekrar Oyna' : '🔄 Play Again'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .scenario-test-container {
          width: 100%;
          padding: 2rem;
          background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
          border-radius: 16px;
          min-height: 600px;
        }

        .test-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .header-icons {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .header-icon {
          color: #dc2626;
        }

        .gamepad-icon {
          color: #8b5cf6;
        }

        .target-icon {
          color: #ef4444;
        }

        .test-header h3 {
          font-size: 1.8rem;
          color: #dc2626;
          margin: 0;
          font-weight: 700;
        }

        .score-display {
          font-size: 1.3rem;
          font-weight: 700;
          color: #dc2626;
          background: rgba(255, 255, 255, 0.9);
          padding: 0.5rem 1rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .score-value {
          color: #10b981;
          font-size: 1.4rem;
        }

        .question-card {
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);
          margin-bottom: 2rem;
          position: relative;
          overflow: hidden;
        }

        .question-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #8b5cf6, #ef4444, #10b981, #6366f1);
          background-size: 200% 100%;
          animation: gradientShift 3s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .question-number {
          font-size: 0.9rem;
          color: #64748b;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .question-text {
          font-size: 1.4rem;
          color: #1e293b;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .options-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .option-btn {
          background: white;
          border: 3px solid #e5e7eb;
          border-radius: 12px;
          padding: 1.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 1rem;
          text-align: left;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 1.1rem;
          position: relative;
          overflow: hidden;
        }

        .option-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s;
        }

        .option-btn:hover:not(:disabled)::before {
          left: 100%;
        }

        .option-btn:hover:not(:disabled) {
          border-color: #6366f1;
          background: #f0f4ff;
          transform: translateX(4px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
        }

        .option-btn.selected {
          border-color: #6366f1;
          background: #e0e7ff;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }

        .option-btn.correct {
          border-color: #10b981;
          background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
          box-shadow: 0 4px 16px rgba(16, 185, 129, 0.3);
          animation: correctPulse 0.6s ease-out;
        }

        @keyframes correctPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }

        .option-btn.incorrect {
          border-color: #ef4444;
          background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
          box-shadow: 0 4px 16px rgba(239, 68, 68, 0.3);
          animation: shake 0.5s ease-out;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }

        .option-btn:disabled {
          cursor: not-allowed;
        }

        .option-letter {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          flex-shrink: 0;
          font-size: 1.1rem;
          box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);
          transition: all 0.3s;
        }

        .option-btn:hover:not(:disabled) .option-letter {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        }

        .option-btn.correct .option-letter {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.4);
        }

        .option-btn.incorrect .option-letter {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          box-shadow: 0 2px 8px rgba(239, 68, 68, 0.4);
        }

        .option-text {
          flex: 1;
          color: #1e293b;
        }

        .result-icon {
          font-size: 1.8rem;
          font-weight: 700;
          animation: iconPop 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        @keyframes iconPop {
          0% { transform: scale(0); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }

        .option-btn.correct .result-icon {
          color: #10b981;
          filter: drop-shadow(0 2px 4px rgba(16, 185, 129, 0.4));
        }

        .option-btn.incorrect .result-icon {
          color: #ef4444;
          filter: drop-shadow(0 2px 4px rgba(239, 68, 68, 0.4));
        }

        .feedback-box {
          padding: 1.5rem;
          border-radius: 12px;
          margin-top: 1rem;
        }

        .feedback-box.success {
          background: #d1fae5;
          border: 2px solid #10b981;
        }

        .feedback-box.error {
          background: #fee2e2;
          border: 2px solid #ef4444;
        }

        .feedback-text {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .feedback-box.success .feedback-text {
          color: #059669;
        }

        .feedback-box.error .feedback-text {
          color: #dc2626;
        }

        .explanation-text {
          color: #1e293b;
          line-height: 1.6;
          margin: 0;
        }

        .test-controls {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
        }

        .nav-btn {
          padding: 1rem 2rem;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 1rem;
        }

        .prev-btn {
          background: #e5e7eb;
          color: #1e293b;
        }

        .prev-btn:hover:not(:disabled) {
          background: #d1d5db;
        }

        .next-btn,
        .reset-btn {
          background: #6366f1;
          color: white;
        }

        .next-btn:hover:not(:disabled),
        .reset-btn:hover {
          background: #4f46e5;
          transform: translateY(-2px);
        }

        .nav-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .completion-message {
          text-align: center;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 2rem;
          border-radius: 16px;
          margin-top: 2rem;
        }

        .completion-message h3 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }

        .final-message {
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }

        .reset-btn {
          background: white;
          color: #059669;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          margin-top: 1rem;
        }

        .reset-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .question-text {
            font-size: 1.2rem;
          }

          .option-btn {
            padding: 1rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ScenarioTest;

