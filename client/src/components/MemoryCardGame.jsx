import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const CARDS = [
  { id: 1, type: 'CPU', icon: '🧠' },
  { id: 2, type: 'RAM', icon: '⚡' },
  { id: 3, type: 'HDD', icon: '💾' },
  { id: 4, type: 'GPU', icon: '🎮' },
  { id: 5, type: 'Monitor', icon: '🖥️' },
  { id: 6, type: 'Mouse', icon: '🖱️' },
];

function MemoryCardGame({ isTurkish }) {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);

  useEffect(() => {
    const shuffled = [...CARDS, ...CARDS]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, uniqueId: index }));
    setCards(shuffled);
  }, []);

  const handleClick = (id) => {
    if (flipped.length === 2 || solved.includes(id) || flipped.includes(id)) return;
    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (cards[first].type === cards[second].type) {
        setSolved([...solved, first, second]);
        setFlipped([]);
        if (solved.length + 2 === cards.length) confetti();
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  return (
    <div className="memory-game p-4 bg-indigo-900 rounded-xl">
      <h2 className="text-white text-2xl font-bold mb-4 text-center">{isTurkish ? 'Kart Eşleştirme' : 'Card Matching'}</h2>
      <div className="grid grid-cols-4 gap-2">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleClick(i)}
            className={`w-16 h-20 flex items-center justify-center text-3xl rounded-lg cursor-pointer transition-colors ${flipped.includes(i) || solved.includes(i) ? 'bg-white' : 'bg-indigo-500'}`}
          >
            {(flipped.includes(i) || solved.includes(i)) ? card.icon : '?'}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default MemoryCardGame;
