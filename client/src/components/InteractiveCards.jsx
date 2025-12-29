import { useState } from 'react';
import { motion } from 'framer-motion';
// Styles imported in index.css

function InteractiveCards({ isTurkish, cards }) {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    }),
    hover: {
      y: -10,
      boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
    }
  };

  return (
    <div className="interactive-cards-container">
      <div className="cards-grid">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className={`card ${selectedCard === card.id ? 'selected' : ''}`}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            custom={index}
            onClick={() => setSelectedCard(selectedCard === card.id ? null : card.id)}
          >
            <div className="card-inner">
              <div className="card-front">
                <h3>{isTurkish ? card.title_tr : card.title_en}</h3>
                <p className="card-desc">
                  {isTurkish ? card.desc_tr : card.desc_en}
                </p>
              </div>

              {selectedCard === card.id && (
                <motion.div
                  className="card-back"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="example-label">
                    {isTurkish ? 'Örnek:' : 'Example:'}
                  </p>
                  <p className="example-text">
                    {isTurkish ? card.example_tr : card.example_en}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default InteractiveCards;
