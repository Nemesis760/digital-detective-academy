import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './card-matching.css';

function CardMatchingGame({ isTurkish }) {
  const scenarios = [
    {
      id: 1,
      text: isTurkish 
        ? "Arkadaşının doğum gününü kutlayan bir gönderi paylaştın."
        : "You shared a post celebrating your friend's birthday.",
      correct: "active",
      explanation: isTurkish 
        ? "Kendi isteğinle paylaştığın için bu aktif ayak izidir."
        : "This is an active footprint because you shared it intentionally."
    },
    {
      id: 2,
      text: isTurkish
        ? "Bir alışveriş sitesinde gezdin, bir şey almadın ama sonra o ürünün reklamını gördün."
        : "You browsed a shopping site, didn't buy anything, but then saw an ad for that product.",
      correct: "passive",
      explanation: isTurkish
        ? "Farkında olmadan takip edildiğin için bu pasif ayak izidir."
        : "This is a passive footprint because you were tracked without your awareness."
    },
    {
      id: 3,
      text: isTurkish
        ? "Instagram'da bir fotoğraf yükledin."
        : "You uploaded a photo on Instagram.",
      correct: "active",
      explanation: isTurkish
        ? "Bilerek paylaştığın için aktif ayak izidir."
        : "This is an active footprint because you shared it intentionally."
    },
    {
      id: 4,
      text: isTurkish
        ? "Bir web sitesi çerezlerle seni takip etti."
        : "A website tracked you with cookies.",
      correct: "passive",
      explanation: isTurkish
        ? "Farkında olmadan oluştuğu için pasif ayak izidir."
        : "This is a passive footprint because it was created without your awareness."
    }
  ];

  const [selectedCards, setSelectedCards] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [completed, setCompleted] = useState([]);

  const handleCardClick = (scenario, type) => {
    if (completed.includes(scenario.id)) return;

    const isCorrect = scenario.correct === type;
    
    if (isCorrect) {
      setCompleted([...completed, scenario.id]);
      setFeedback({
        type: 'correct',
        message: isTurkish ? '✅ Doğru!' : '✅ Correct!',
        explanation: scenario.explanation
      });
    } else {
      setFeedback({
        type: 'wrong',
        message: isTurkish ? '❌ Yanlış! Tekrar dene.' : '❌ Wrong! Try again.',
        explanation: scenario.explanation
      });
    }

    setTimeout(() => {
      setFeedback(null);
    }, 3000);
  };

  return (
    <div className="card-matching-game">
      <div className="game-instructions">
        <h3>{isTurkish ? '🎯 Hangi İz? Kart Oyunu' : '🎯 Which Footprint? Card Game'}</h3>
        <p>{isTurkish 
          ? 'Durumları oku ve doğru kartı (Aktif/Pasif) seç.'
          : 'Read the situations and select the correct card (Active/Passive).'}
        </p>
      </div>

      <div className="scenarios-container">
        {scenarios.map((scenario) => (
          <motion.div
            key={scenario.id}
            className={`scenario-card ${completed.includes(scenario.id) ? 'completed' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: scenario.id * 0.1 }}
          >
            <p className="scenario-text">{scenario.text}</p>
            <div className="card-buttons">
              <button
                className={`card-btn active-btn ${completed.includes(scenario.id) && scenario.correct === 'active' ? 'correct' : ''}`}
                onClick={() => handleCardClick(scenario, 'active')}
                disabled={completed.includes(scenario.id)}
              >
                {isTurkish ? '🎯 Aktif' : '🎯 Active'}
              </button>
              <button
                className={`card-btn passive-btn ${completed.includes(scenario.id) && scenario.correct === 'passive' ? 'correct' : ''}`}
                onClick={() => handleCardClick(scenario, 'passive')}
                disabled={completed.includes(scenario.id)}
              >
                {isTurkish ? '👁️ Pasif' : '👁️ Passive'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {feedback && (
          <motion.div
            className={`feedback-message ${feedback.type}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <p className="feedback-text">{feedback.message}</p>
            <p className="feedback-explanation">{feedback.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {completed.length === scenarios.length && (
        <motion.div
          className="completion-message"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h3>🎉 {isTurkish ? 'Tebrikler! Tüm kartları doğru eşleştirdin!' : 'Congratulations! You matched all cards correctly!'}</h3>
        </motion.div>
      )}
    </div>
  );
}

export default CardMatchingGame;

