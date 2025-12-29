import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../modules.css';

function InteractiveQuiz({ quizItems, isTurkish }) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState({});

  const handleAnswerClick = (quizIndex, answerIndex, isCorrect) => {
    if (showResults[quizIndex]) return; // Already answered
    
    setSelectedAnswers(prev => ({
      ...prev,
      [quizIndex]: answerIndex
    }));
    
    setShowResults(prev => ({
      ...prev,
      [quizIndex]: true
    }));
  };

  const handleTrueFalseClick = (quizIndex, answer) => {
    if (showResults[quizIndex]) return;
    
    const quizItem = quizItems[quizIndex];
    const isCorrect = answer === quizItem.answer;
    
    setSelectedAnswers(prev => ({
      ...prev,
      [quizIndex]: answer
    }));
    
    setShowResults(prev => ({
      ...prev,
      [quizIndex]: true
    }));
  };

  if (!quizItems || quizItems.length === 0) {
    return (
      <div className="interactive-quiz-container">
        <p>{isTurkish ? 'Quiz soruları bulunamadı.' : 'Quiz questions not found.'}</p>
      </div>
    );
  }

  return (
    <div className="interactive-quiz-container">
      <h4 className="quiz-section-title">
        {isTurkish ? 'Kendini Test Et:' : 'Test Yourself:'}
      </h4>
      
      {quizItems.map((quizItem, quizIndex) => (
        <motion.div
          key={quizIndex}
          className="interactive-quiz-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: quizIndex * 0.1 }}
        >
          <p className="interactive-quiz-question">{quizItem.question}</p>
          
          {quizItem.type === 'true_false' && (
            <div className="quiz-true-false-buttons">
              <motion.button
                className={`true-false-btn true-btn ${
                  showResults[quizIndex] && selectedAnswers[quizIndex] === true
                    ? quizItem.answer === true
                      ? 'correct'
                      : 'wrong'
                    : ''
                } ${showResults[quizIndex] && quizItem.answer === true ? 'show-correct' : ''}`}
                onClick={() => handleTrueFalseClick(quizIndex, true)}
                disabled={showResults[quizIndex]}
                whileHover={!showResults[quizIndex] ? { scale: 1.05 } : {}}
                whileTap={!showResults[quizIndex] ? { scale: 0.95 } : {}}
              >
                {isTurkish ? '✅ Doğru' : '✅ True'}
              </motion.button>
              
              <motion.button
                className={`true-false-btn false-btn ${
                  showResults[quizIndex] && selectedAnswers[quizIndex] === false
                    ? quizItem.answer === false
                      ? 'correct'
                      : 'wrong'
                    : ''
                } ${showResults[quizIndex] && quizItem.answer === false ? 'show-correct' : ''}`}
                onClick={() => handleTrueFalseClick(quizIndex, false)}
                disabled={showResults[quizIndex]}
                whileHover={!showResults[quizIndex] ? { scale: 1.05 } : {}}
                whileTap={!showResults[quizIndex] ? { scale: 0.95 } : {}}
              >
                {isTurkish ? '❌ Yanlış' : '❌ False'}
              </motion.button>
            </div>
          )}

          {quizItem.type === 'multiple_choice' && (
            <div className="interactive-quiz-options">
              {quizItem.options.map((option, optIndex) => {
                const isSelected = selectedAnswers[quizIndex] === optIndex;
                const isCorrect = option.correct;
                const isAnswered = showResults[quizIndex];
                
                return (
                  <motion.button
                    key={optIndex}
                    className={`interactive-quiz-option ${
                      isAnswered
                        ? isCorrect
                          ? 'correct'
                          : isSelected && !isCorrect
                            ? 'wrong'
                            : ''
                        : isSelected
                          ? 'selected'
                          : ''
                    }`}
                    onClick={() => handleAnswerClick(quizIndex, optIndex, isCorrect)}
                    disabled={isAnswered}
                    whileHover={!isAnswered ? { scale: 1.02 } : {}}
                    whileTap={!isAnswered ? { scale: 0.98 } : {}}
                  >
                    <span className="option-text">{option.text}</span>
                    {isAnswered && isCorrect && (
                      <span className="option-icon">✓</span>
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <span className="option-icon">✗</span>
                    )}
                  </motion.button>
                );
              })}
            </div>
          )}

          <AnimatePresence>
            {showResults[quizIndex] && (
              <motion.div
                className={`quiz-feedback ${
                  (quizItem.type === 'true_false' && selectedAnswers[quizIndex] === quizItem.answer) ||
                  (quizItem.type === 'multiple_choice' && quizItem.options[selectedAnswers[quizIndex]]?.correct)
                    ? 'correct-feedback'
                    : 'wrong-feedback'
                }`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                {(quizItem.type === 'true_false' && selectedAnswers[quizIndex] === quizItem.answer) ||
                (quizItem.type === 'multiple_choice' && quizItem.options[selectedAnswers[quizIndex]]?.correct) ? (
                  <p>✅ {isTurkish ? 'Doğru!' : 'Correct!'}</p>
                ) : (
                  <p>❌ {isTurkish ? 'Yanlış! Tekrar dene.' : 'Incorrect! Try again.'}</p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

export default InteractiveQuiz;

