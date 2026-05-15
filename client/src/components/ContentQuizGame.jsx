import { useEffect, useMemo, useState } from 'react';
import './ContentQuizGame.css';

const ContentQuizGame = ({ section, isTurkish }) => {
  const questions = useMemo(() => {
    if (!section?.content) return [];
    const keys = Object.keys(section.content).sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true })
    );
    const merged = [];
    keys.forEach((key) => {
      const item = section.content[key];
      if (Array.isArray(item?.quiz)) {
        item.quiz.forEach((q) => merged.push(q));
      }
    });
    return merged;
  }, [section]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setCurrentIndex(0);
    setScore(0);
    setSelected(null);
    setIsCorrect(null);
    setIsComplete(false);
  }, [section?.id, questions.length]);

  if (!questions.length) {
    return (
      <div className="content-quiz-game empty">
        <p>{isTurkish ? 'Bu bölüm için quiz bulunamadı.' : 'No quiz found for this section.'}</p>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (value, optionIndex = null) => {
    if (selected !== null || isComplete) return;
    let correct = false;
    if (currentQuestion.type === 'true_false') {
      correct = value === currentQuestion.answer;
    } else if (currentQuestion.type === 'multiple_choice' && Array.isArray(currentQuestion.options)) {
      correct = Boolean(currentQuestion.options[optionIndex]?.correct);
    }
    setSelected(optionIndex ?? value);
    setIsCorrect(correct);
    if (correct) setScore((prev) => prev + 1);
  };

  const handleNext = () => {
    if (currentIndex + 1 >= questions.length) {
      setIsComplete(true);
      return;
    }
    setCurrentIndex((prev) => prev + 1);
    setSelected(null);
    setIsCorrect(null);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelected(null);
    setIsCorrect(null);
    setIsComplete(false);
  };

  const explanation = isTurkish
    ? currentQuestion.explanation_tr
    : currentQuestion.explanation_en;

  const answered = selected !== null;

  return (
    <div className="content-quiz-game">
      <div className="content-quiz-header">
        <div className="content-quiz-progress">
          {isTurkish ? 'Soru' : 'Question'} {currentIndex + 1}/{questions.length}
        </div>
        <div className="content-quiz-score">
          {isTurkish ? 'Skor' : 'Score'}: {score}/{questions.length}
        </div>
      </div>

      {isComplete ? (
        <div className="content-quiz-complete">
          <div className="cqg-complete-icon">
            {score === questions.length ? '🏆' : score >= questions.length * 0.7 ? '🎉' : '💪'}
          </div>
          <h4>{isTurkish ? 'Tamamlandı!' : 'Completed!'}</h4>
          <p className="cqg-complete-score">
            {score}/{questions.length} {isTurkish ? 'doğru' : 'correct'}
          </p>
          <p className="cqg-complete-msg">
            {score === questions.length
              ? (isTurkish ? 'Mükemmel! Tüm sorular doğru!' : 'Perfect! All correct!')
              : score >= questions.length * 0.7
              ? (isTurkish ? 'Harika iş! Devam et!' : 'Great job! Keep it up!')
              : (isTurkish ? 'Tekrar dene, daha iyisini yapabilirsin!' : 'Try again, you can do better!')}
          </p>
          <button className="content-quiz-restart" onClick={handleRestart}>
            {isTurkish ? '🔄 Tekrar Başlat' : '🔄 Restart'}
          </button>
        </div>
      ) : (
        <>
          <div className="content-quiz-question">{currentQuestion.question}</div>

          {currentQuestion.type === 'multiple_choice' && (
            <div className="content-quiz-options">
              {currentQuestion.options?.map((option, index) => {
                let cls = 'content-quiz-option';
                if (answered) {
                  if (option.correct) cls += ' correct';
                  else if (selected === index && !option.correct) cls += ' wrong';
                }
                return (
                  <button
                    key={`${currentIndex}-opt-${index}`}
                    className={cls}
                    onClick={() => handleAnswer(option.text, index)}
                    disabled={answered}
                  >
                    {option.text}
                    {answered && option.correct && <span className="cqg-icon">✓</span>}
                    {answered && selected === index && !option.correct && <span className="cqg-icon">✗</span>}
                  </button>
                );
              })}
            </div>
          )}

          {currentQuestion.type === 'true_false' && (
            <div className="content-quiz-options true-false">
              {[true, false].map((val) => {
                const label = val
                  ? (isTurkish ? 'Doğru' : 'True')
                  : (isTurkish ? 'Yanlış' : 'False');
                let cls = 'content-quiz-option';
                if (answered) {
                  if (val === currentQuestion.answer) cls += ' correct';
                  else if (selected === val && val !== currentQuestion.answer) cls += ' wrong';
                }
                return (
                  <button
                    key={String(val)}
                    className={cls}
                    onClick={() => handleAnswer(val)}
                    disabled={answered}
                  >
                    {val ? '✔' : '✘'} {label}
                    {answered && val === currentQuestion.answer && <span className="cqg-icon">✓</span>}
                  </button>
                );
              })}
            </div>
          )}

          {answered && (
            <div className={`content-quiz-feedback ${isCorrect ? 'correct' : 'wrong'}`}>
              <div className="cqg-feedback-header">
                {isCorrect
                  ? (isTurkish ? '✅ Harika! Doğru cevap!' : '✅ Great! Correct answer!')
                  : (isTurkish ? '❌ Yanlış cevap.' : '❌ Wrong answer.')}
              </div>
              {explanation && (
                <div className="cqg-explanation">
                  <span className="cqg-why">
                    {isTurkish ? '💡 Neden?' : '💡 Why?'}
                  </span>{' '}
                  {explanation}
                </div>
              )}
            </div>
          )}

          <div className="content-quiz-actions">
            <button
              className="content-quiz-next"
              onClick={handleNext}
              disabled={!answered}
            >
              {currentIndex + 1 >= questions.length
                ? (isTurkish ? '✔ Quizi Bitir' : '✔ Finish Quiz')
                : (isTurkish ? 'Sonraki →' : 'Next →')}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ContentQuizGame;
