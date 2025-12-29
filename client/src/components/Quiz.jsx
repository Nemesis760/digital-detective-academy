import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import '../styles/quiz.css';

function Quiz({ isTurkish, questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [answers, setAnswers] = useState([]);

  // Boş questions kontrolü
  if (!questions || questions.length === 0) {
    return (
      <div className="quiz-container">
        <p>{isTurkish ? 'Quiz soruları yüklenemedi.' : 'Quiz questions could not be loaded.'}</p>
      </div>
    );
  }

  const question = questions[currentQuestion];
  if (!question) {
    return (
      <div className="quiz-container">
        <p>{isTurkish ? 'Soru bulunamadı.' : 'Question not found.'}</p>
      </div>
    );
  }

  const questionText = isTurkish ? question.question_tr : question.question_en;
  const options = isTurkish ? question.options_tr : question.options_en;
  const explanation = isTurkish ? question.explanation_tr : question.explanation_en;

  const handleAnswerClick = (index) => {
    if (answered) return;

    setSelectedAnswer(index);
    setAnswered(true);

    const isCorrect = index === question.correct;
    if (isCorrect) {
      setScore(score + 1);
    }

    setAnswers([...answers, {
      questionId: question.id,
      selected: index,
      correct: question.correct,
      isCorrect
    }]);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setQuizComplete(false);
    setAnswers([]);
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  if (quizComplete) {
    const percentage = (score / questions.length) * 100;
    const passed = percentage >= 70;

    return (
      <motion.div
        className="quiz-complete"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`complete-card ${passed ? 'passed' : 'failed'}`}>
          <div className="complete-icon">
            {passed ? '🎉' : '📚'}
          </div>
          
          <h2 className="complete-title">
            {passed
              ? isTurkish ? 'Harika! Başardın!' : 'Great! You passed!'
              : isTurkish ? 'Tekrar Dene!' : 'Try Again!'}
          </h2>

          <div className="score-display">
            <div className="score-circle">
              <span className="score-number">{score}</span>
              <span className="score-total">/{questions.length}</span>
            </div>
            <p className="score-percentage">{Math.round(percentage)}%</p>
          </div>

          <div className="feedback">
            {passed ? (
              <p className="feedback-text success">
                {isTurkish
                  ? '✨ Mükemmel performans! Tüm konuları iyi anlamışsın.'
                  : '✨ Excellent performance! You understand all topics well.'}
              </p>
            ) : (
              <p className="feedback-text warning">
                {isTurkish
                  ? '💪 Biraz daha çalış! Başarabilirsin.'
                  : '💪 Keep practicing! You can do it.'}
              </p>
            )}
          </div>

          <button className="restart-btn" onClick={handleRestart}>
            {isTurkish ? '🔄 Tekrar Başla' : '🔄 Restart Quiz'}
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="quiz-container">
      {/* İlerleme Çubuğu */}
      <div className="quiz-progress">
        <div className="progress-bar">
          <motion.div
            className="progress-fill"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </div>
        <p className="progress-text">
          {isTurkish ? 'Soru' : 'Question'} {currentQuestion + 1} / {questions.length}
        </p>
      </div>

      {/* Soru */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          className="quiz-question-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="question-text">{questionText}</h3>

          {/* Cevap Seçenekleri */}
          <div className="quiz-options">
            {options.map((option, index) => (
              <motion.button
                key={index}
                className={`option-button ${
                  selectedAnswer === index
                    ? index === question.correct
                      ? 'correct'
                      : 'incorrect'
                    : ''
                } ${answered && index === question.correct ? 'show-correct' : ''}`}
                onClick={() => handleAnswerClick(index)}
                disabled={answered}
                whileHover={!answered ? { scale: 1.02 } : {}}
                whileTap={!answered ? { scale: 0.98 } : {}}
              >
                <span className="option-letter">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="option-text">{option}</span>
                {selectedAnswer === index && (
                  <span className="option-icon">
                    {index === question.correct ? '✓' : '✗'}
                  </span>
                )}
              </motion.button>
            ))}
          </div>

          {/* Açıklama */}
          {answered && (
            <motion.div
              className={`explanation ${selectedAnswer === question.correct ? 'correct' : 'incorrect'}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              <p className="explanation-label">
                {selectedAnswer === question.correct
                  ? isTurkish ? '✓ Doğru!' : '✓ Correct!'
                  : isTurkish ? '✗ Yanlış!' : '✗ Incorrect!'}
              </p>
              <p className="explanation-text">{explanation}</p>
            </motion.div>
          )}

          {/* Sonraki Buton */}
          {answered && (
            <motion.button
              className="next-question-btn"
              onClick={handleNext}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {currentQuestion < questions.length - 1
                ? isTurkish ? 'Sonraki Soru →' : 'Next Question →'
                : isTurkish ? 'Sonuçları Gör' : 'See Results'}
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Quiz;
