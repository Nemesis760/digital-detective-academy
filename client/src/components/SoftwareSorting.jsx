import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import soundManager from '../utils/soundEffects';

/**
 * SoftwareSorting - Drag and Drop Software Classification
 * Students drag software icons into System Software or Application Software boxes
 */

const SoftwareSorting = ({ isTurkish = true }) => {
  const [systemSoftware, setSystemSoftware] = useState([]);
  const [applicationSoftware, setApplicationSoftware] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);

  const softwareItems = [
    { id: 1, name: isTurkish ? 'Windows' : 'Windows', icon: '🪟', type: 'system', emoji: '🪟' },
    { id: 2, name: isTurkish ? 'macOS' : 'macOS', icon: '🍎', type: 'system', emoji: '🍎' },
    { id: 3, name: isTurkish ? 'Linux' : 'Linux', icon: '🐧', type: 'system', emoji: '🐧' },
    { id: 4, name: isTurkish ? 'Android' : 'Android', icon: '🤖', type: 'system', emoji: '🤖' },
    { id: 5, name: isTurkish ? 'iOS' : 'iOS', icon: '📱', type: 'system', emoji: '📱' },
    { id: 6, name: isTurkish ? 'Microsoft Word' : 'Microsoft Word', icon: '📝', type: 'application', emoji: '📝' },
    { id: 7, name: isTurkish ? 'Paint' : 'Paint', icon: '🎨', type: 'application', emoji: '🎨' },
    { id: 8, name: isTurkish ? 'Chrome' : 'Chrome', icon: '🌐', type: 'application', emoji: '🌐' },
    { id: 9, name: isTurkish ? 'Scratch' : 'Scratch', icon: '🐱', type: 'application', emoji: '🐱' },
    { id: 10, name: isTurkish ? 'Oyun' : 'Game', icon: '🎮', type: 'application', emoji: '🎮' },
  ];

  const [availableItems, setAvailableItems] = useState([...softwareItems]);

  const handleDragStart = (item) => {
    setDraggedItem(item);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (targetType) => {
    if (!draggedItem) return;

    const isCorrect = draggedItem.type === targetType;

    if (isCorrect) {
      if (targetType === 'system') {
        setSystemSoftware(prev => [...prev, draggedItem]);
      } else {
        setApplicationSoftware(prev => [...prev, draggedItem]);
      }

      setAvailableItems(prev => prev.filter(item => item.id !== draggedItem.id));
      setScore(prev => prev + 10);
      
      setFeedback({
        type: 'success',
        message: isTurkish 
          ? `🎉 Doğru! ${draggedItem.name} doğru kategoride!`
          : `🎉 Correct! ${draggedItem.name} is in the right category!`
      });

      soundManager.playCorrect();
      confetti({
        particleCount: 30,
        spread: 40,
        origin: { y: 0.6 },
        colors: ['#10b981', '#059669', '#34d399']
      });

      setTimeout(() => setFeedback(null), 2000);
    } else {
      soundManager.playWrong();
      setFeedback({
        type: 'error',
        message: isTurkish
          ? `❌ Yanlış! ${draggedItem.name} bu kategoriye ait değil. Tekrar dene!`
          : `❌ Wrong! ${draggedItem.name} doesn't belong to this category. Try again!`
      });
      setTimeout(() => setFeedback(null), 2000);
    }

    setDraggedItem(null);
  };

  const handleReset = () => {
    setSystemSoftware([]);
    setApplicationSoftware([]);
    setAvailableItems([...softwareItems]);
    setScore(0);
    setFeedback(null);
  };

  const isComplete = availableItems.length === 0;

  return (
    <div className="software-sorting-container">
      <div className="sorting-header">
        <h3>
          {isTurkish 
            ? '🎯 Yazılımları Doğru Kategorilere Sürükle!'
            : '🎯 Drag Software to the Right Categories!'}
        </h3>
        <div className="score-display">
          {isTurkish ? 'Puan:' : 'Score:'} <span className="score-value">{score}</span>
        </div>
      </div>

      <AnimatePresence>
        {feedback && (
          <motion.div
            className={`feedback-message ${feedback.type}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {feedback.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Available Items */}
      <div className="available-items-section">
        <h4>{isTurkish ? 'Yazılımlar:' : 'Software:'}</h4>
        <div className="items-grid">
          {availableItems.map((item) => (
            <motion.div
              key={item.id}
              className="software-item"
              draggable
              onDragStart={() => handleDragStart(item)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <span className="item-emoji">{item.emoji}</span>
              <span className="item-name">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Drop Zones */}
      <div className="drop-zones">
        <div
          className={`drop-zone system-zone ${draggedItem?.type === 'system' ? 'highlight' : ''}`}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop('system')}
        >
          <div className="zone-header">
            <span className="zone-icon">👨‍✈️</span>
            <h4>{isTurkish ? 'Sistem Yazılımı' : 'System Software'}</h4>
            <p className="zone-subtitle">
              {isTurkish ? '(Kaptan - Bilgisayarı yönetir)' : '(Captain - Manages the computer)'}
            </p>
          </div>
          <div className="zone-items">
            {systemSoftware.map((item) => (
              <motion.div
                key={item.id}
                className="dropped-item"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                <span className="item-emoji">{item.emoji}</span>
                <span className="item-name">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div
          className={`drop-zone application-zone ${draggedItem?.type === 'application' ? 'highlight' : ''}`}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop('application')}
        >
          <div className="zone-header">
            <span className="zone-icon">👨‍💼</span>
            <h4>{isTurkish ? 'Uygulama Yazılımı' : 'Application Software'}</h4>
            <p className="zone-subtitle">
              {isTurkish ? '(Tayfalar - Özel işler yapar)' : '(Crew - Does specific tasks)'}
            </p>
          </div>
          <div className="zone-items">
            {applicationSoftware.map((item) => (
              <motion.div
                key={item.id}
                className="dropped-item"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                <span className="item-emoji">{item.emoji}</span>
                <span className="item-name">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Completion Message */}
      <AnimatePresence>
        {isComplete && (
          <motion.div
            className="completion-message"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h3>🎉 {isTurkish ? 'Tebrikler! Tümünü Doğru Yerleştirdin!' : 'Congratulations! You Placed Everything Correctly!'}</h3>
            <p>
              {isTurkish 
                ? `Toplam Puan: ${score}`
                : `Total Score: ${score}`}
            </p>
            <button onClick={handleReset} className="reset-btn">
              {isTurkish ? '🔄 Tekrar Oyna' : '🔄 Play Again'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <button onClick={handleReset} className="reset-btn-bottom">
        {isTurkish ? '🔄 Sıfırla' : '🔄 Reset'}
      </button>

      <style jsx>{`
        .software-sorting-container {
          width: 100%;
          padding: 2rem;
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          border-radius: 16px;
          min-height: 600px;
        }

        .sorting-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .sorting-header h3 {
          font-size: 1.5rem;
          color: #92400e;
          margin: 0;
        }

        .score-display {
          font-size: 1.2rem;
          font-weight: 600;
          color: #92400e;
        }

        .score-value {
          color: #059669;
          font-size: 1.5rem;
        }

        .feedback-message {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1.1rem;
          z-index: 1000;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .feedback-message.success {
          background: #10b981;
          color: white;
        }

        .feedback-message.error {
          background: #ef4444;
          color: white;
        }

        .available-items-section {
          margin-bottom: 2rem;
        }

        .available-items-section h4 {
          color: #92400e;
          margin-bottom: 1rem;
        }

        .items-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 1rem;
        }

        .software-item {
          background: white;
          border: 3px solid #f59e0b;
          border-radius: 12px;
          padding: 1rem;
          cursor: grab;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .software-item:active {
          cursor: grabbing;
        }

        .software-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
        }

        .item-emoji {
          font-size: 2.5rem;
        }

        .item-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: #92400e;
          text-align: center;
        }

        .drop-zones {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .drop-zone {
          background: white;
          border: 4px dashed #cbd5e1;
          border-radius: 16px;
          padding: 1.5rem;
          min-height: 300px;
          transition: all 0.3s;
        }

        .drop-zone.highlight {
          border-color: #10b981;
          background: #d1fae5;
          transform: scale(1.02);
        }

        .zone-header {
          text-align: center;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #e5e7eb;
        }

        .zone-icon {
          font-size: 3rem;
          display: block;
          margin-bottom: 0.5rem;
        }

        .zone-header h4 {
          font-size: 1.3rem;
          color: #1e293b;
          margin: 0.5rem 0;
        }

        .zone-subtitle {
          font-size: 0.9rem;
          color: #64748b;
          margin: 0;
        }

        .zone-items {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .dropped-item {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          border-radius: 8px;
          padding: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
        }

        .dropped-item .item-emoji {
          font-size: 1.5rem;
        }

        .dropped-item .item-name {
          color: white;
        }

        .completion-message {
          text-align: center;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 2rem;
          border-radius: 16px;
          margin-bottom: 1rem;
        }

        .completion-message h3 {
          font-size: 1.8rem;
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
          transition: all 0.3s;
        }

        .reset-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .reset-btn-bottom {
          width: 100%;
          background: #ef4444;
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .reset-btn-bottom:hover {
          background: #dc2626;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .drop-zones {
            grid-template-columns: 1fr;
          }

          .items-grid {
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          }
        }
      `}</style>
    </div>
  );
};

export default SoftwareSorting;

