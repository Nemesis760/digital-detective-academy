import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * DragDropEnhanced - Geliştirilmiş Sürükle-Bırak Aktivitesi
 * Modül 2 için - Parola Bileşenleri Oyunu
 */

const DragDropEnhanced = ({ isTurkish = true }) => {
  const [items, setItems] = useState([
    { id: 1, text: isTurkish ? 'Büyük Harf (A)' : 'Uppercase (A)', category: 'strong', icon: '🔤', color: '#3498db' },
    { id: 2, text: isTurkish ? 'Sayı (9)' : 'Number (9)', category: 'strong', icon: '🔢', color: '#e74c3c' },
    { id: 3, text: isTurkish ? 'Sembol (@)' : 'Symbol (@)', category: 'strong', icon: '🔣', color: '#f39c12' },
    { id: 4, text: isTurkish ? 'Uzunluk (8+ karakter)' : 'Length (8+ chars)', category: 'strong', icon: '📏', color: '#27ae60' },
    { id: 5, text: isTurkish ? 'Sadece Küçük Harf' : 'Only Lowercase', category: 'weak', icon: '🔡', color: '#95a5a6' },
    { id: 6, text: isTurkish ? 'Kısa Parola (4 karakter)' : 'Short Password (4 chars)', category: 'weak', icon: '⚠️', color: '#95a5a6' },
    { id: 7, text: isTurkish ? 'Doğum Tarihi' : 'Birth Date', category: 'weak', icon: '📅', color: '#95a5a6' },
  ]);

  const [strongItems, setStrongItems] = useState([]);
  const [weakItems, setWeakItems] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDropStrong = (e) => {
    e.preventDefault();
    if (!draggedItem) return;

    if (draggedItem.category === 'strong') {
      setStrongItems([...strongItems, draggedItem]);
      setItems(items.filter(item => item.id !== draggedItem.id));
      setFeedback(isTurkish ? '✅ Doğru! Güçlü bir bileşen.' : '✅ Correct! A strong component.');
      setScore(score + 10);
    } else {
      setFeedback(isTurkish ? '❌ Yanlış! Bu zayıf bir bileşen.' : '❌ Wrong! This is a weak component.');
      setScore(Math.max(0, score - 5));
    }
    setDraggedItem(null);
  };

  const handleDropWeak = (e) => {
    e.preventDefault();
    if (!draggedItem) return;

    if (draggedItem.category === 'weak') {
      setWeakItems([...weakItems, draggedItem]);
      setItems(items.filter(item => item.id !== draggedItem.id));
      setFeedback(isTurkish ? '✅ Doğru! Zayıf bir bileşen.' : '✅ Correct! A weak component.');
      setScore(score + 10);
    } else {
      setFeedback(isTurkish ? '❌ Yanlış! Bu güçlü bir bileşen.' : '❌ Wrong! This is a strong component.');
      setScore(Math.max(0, score - 5));
    }
    setDraggedItem(null);
  };

  const resetGame = () => {
    setItems([
      { id: 1, text: isTurkish ? 'Büyük Harf (A)' : 'Uppercase (A)', category: 'strong', icon: '🔤', color: '#3498db' },
      { id: 2, text: isTurkish ? 'Sayı (9)' : 'Number (9)', category: 'strong', icon: '🔢', color: '#e74c3c' },
      { id: 3, text: isTurkish ? 'Sembol (@)' : 'Symbol (@)', category: 'strong', icon: '🔣', color: '#f39c12' },
      { id: 4, text: isTurkish ? 'Uzunluk (8+ karakter)' : 'Length (8+ chars)', category: 'strong', icon: '📏', color: '#27ae60' },
      { id: 5, text: isTurkish ? 'Sadece Küçük Harf' : 'Only Lowercase', category: 'weak', icon: '🔡', color: '#95a5a6' },
      { id: 6, text: isTurkish ? 'Kısa Parola (4 karakter)' : 'Short Password (4 chars)', category: 'weak', icon: '⚠️', color: '#95a5a6' },
      { id: 7, text: isTurkish ? 'Doğum Tarihi' : 'Birth Date', category: 'weak', icon: '📅', color: '#95a5a6' },
    ]);
    setStrongItems([]);
    setWeakItems([]);
    setFeedback('');
    setScore(0);
  };

  return (
    <div className="drag-drop-enhanced">
      <div className="game-header">
        <h2>{isTurkish ? '🎮 Parola Bileşenleri Oyunu' : '🎮 Password Components Game'}</h2>
        <div className="game-stats">
          <div className="stat">
            <span className="stat-label">{isTurkish ? 'Puan' : 'Score'}</span>
            <span className="stat-value">{score}</span>
          </div>
          <div className="stat">
            <span className="stat-label">{isTurkish ? 'Kalan' : 'Remaining'}</span>
            <span className="stat-value">{items.length}</span>
          </div>
        </div>
      </div>

      <p className="instructions">
        {isTurkish
          ? '🎯 Parola bileşenlerini doğru kategorilere sürükle! Güçlü bileşenleri sol tarafa, zayıf bileşenleri sağ tarafa koy.'
          : '🎯 Drag password components to the correct categories! Put strong components on the left, weak ones on the right.'}
      </p>

      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`feedback ${feedback.includes('✅') ? 'success' : 'error'}`}
          >
            {feedback}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="game-container">
        {/* SÜRÜKLENECEK ÖĞELER */}
        <div className="items-area">
          <h3>{isTurkish ? '📦 Sürükle' : '📦 Drag'}</h3>
          <div className="items-grid">
            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  draggable
                  onDragStart={(e) => handleDragStart(e, item)}
                  className="draggable-item"
                  style={{ borderColor: item.color }}
                >
                  <div className="item-icon">{item.icon}</div>
                  <div className="item-text">{item.text}</div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* BIRAKILACAK ALANLAR */}
        <div className="drop-areas">
          {/* GÜÇLÜ BILEŞENLER */}
          <motion.div
            onDragOver={handleDragOver}
            onDrop={handleDropStrong}
            className="drop-zone strong-zone"
          >
            <h3>💪 {isTurkish ? 'Güçlü Bileşenler' : 'Strong Components'}</h3>
            <div className="drop-content">
              <AnimatePresence>
                {strongItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="dropped-item strong"
                    style={{ borderColor: item.color }}
                  >
                    <div className="item-icon">{item.icon}</div>
                    <div className="item-text">{item.text}</div>
                    <div className="check-mark">✓</div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {strongItems.length === 0 && (
                <div className="empty-state">{isTurkish ? 'Güçlü bileşenleri buraya bırak' : 'Drop strong components here'}</div>
              )}
            </div>
          </motion.div>

          {/* ZAYIF BILEŞENLER */}
          <motion.div
            onDragOver={handleDragOver}
            onDrop={handleDropWeak}
            className="drop-zone weak-zone"
          >
            <h3>⚠️ {isTurkish ? 'Zayıf Bileşenler' : 'Weak Components'}</h3>
            <div className="drop-content">
              <AnimatePresence>
                {weakItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="dropped-item weak"
                    style={{ borderColor: item.color }}
                  >
                    <div className="item-icon">{item.icon}</div>
                    <div className="item-text">{item.text}</div>
                    <div className="check-mark">✓</div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {weakItems.length === 0 && (
                <div className="empty-state">{isTurkish ? 'Zayıf bileşenleri buraya bırak' : 'Drop weak components here'}</div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {items.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="completion-message"
        >
          <h3>🎉 {isTurkish ? 'Tebrikler!' : 'Congratulations!'}</h3>
          <p>{isTurkish ? 'Tüm bileşenleri doğru yere yerleştirdin!' : 'You placed all components correctly!'}</p>
          <p className="final-score">{isTurkish ? 'Toplam Puan' : 'Total Score'}: {score}</p>
          <button onClick={resetGame} className="reset-button">
            {isTurkish ? '🔄 Yeniden Oyna' : '🔄 Play Again'}
          </button>
        </motion.div>
      )}

      {items.length > 0 && (
        <button onClick={resetGame} className="reset-button-small">
          {isTurkish ? '🔄 Sıfırla' : '🔄 Reset'}
        </button>
      )}

      <style jsx>{`
        .drag-drop-enhanced {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          padding: 30px;
          border-radius: 15px;
          margin: 20px 0;
        }

        .game-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .game-header h2 {
          margin: 0;
          color: #667eea;
          font-size: 1.8rem;
        }

        .game-stats {
          display: flex;
          gap: 20px;
        }

        .stat {
          background: white;
          padding: 12px 20px;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .stat-label {
          font-size: 0.85rem;
          color: #999;
          text-transform: uppercase;
          font-weight: bold;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: bold;
          color: #667eea;
        }

        .instructions {
          background: white;
          padding: 15px 20px;
          border-radius: 8px;
          color: #555;
          margin-bottom: 20px;
          border-left: 4px solid #667eea;
        }

        .feedback {
          padding: 15px 20px;
          border-radius: 8px;
          margin-bottom: 20px;
          font-weight: bold;
          text-align: center;
          animation: slideDown 0.3s ease;
        }

        .feedback.success {
          background: #d4edda;
          color: #155724;
          border: 2px solid #28a745;
        }

        .feedback.error {
          background: #f8d7da;
          color: #721c24;
          border: 2px solid #f5c6cb;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .game-container {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .items-area,
        .drop-areas {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .items-area h3,
        .drop-zone h3 {
          margin: 0 0 15px 0;
          color: #333;
          font-size: 1.1rem;
        }

        .items-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
        }

        .draggable-item {
          background: white;
          border: 3px solid;
          border-radius: 10px;
          padding: 15px;
          cursor: grab;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .draggable-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
        }

        .draggable-item:active {
          cursor: grabbing;
          opacity: 0.7;
        }

        .item-icon {
          font-size: 1.8rem;
          min-width: 40px;
          text-align: center;
        }

        .item-text {
          flex: 1;
          font-weight: 600;
          color: #333;
          font-size: 0.95rem;
        }

        .drop-areas {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .drop-zone {
          background: white;
          border: 3px dashed #999;
          border-radius: 12px;
          padding: 20px;
          min-height: 400px;
          transition: all 0.3s ease;
        }

        .drop-zone.strong-zone {
          border-color: #27ae60;
          background: linear-gradient(135deg, #f0fff4 0%, #e6f7ed 100%);
        }

        .drop-zone.weak-zone {
          border-color: #e74c3c;
          background: linear-gradient(135deg, #fff5f5 0%, #ffe6e6 100%);
        }

        .drop-zone:hover {
          border-color: #667eea;
          background-color: #f9f9f9;
        }

        .drop-content {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 10px;
          min-height: 350px;
        }

        .dropped-item {
          background: white;
          border: 2px solid;
          border-radius: 8px;
          padding: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          position: relative;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .dropped-item.strong {
          background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
        }

        .dropped-item.weak {
          background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
        }

        .dropped-item .item-icon {
          font-size: 2rem;
        }

        .dropped-item .item-text {
          font-size: 0.8rem;
          text-align: center;
          font-weight: 600;
        }

        .check-mark {
          position: absolute;
          top: -10px;
          right: -10px;
          background: #27ae60;
          color: white;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .empty-state {
          grid-column: 1 / -1;
          text-align: center;
          color: #999;
          padding: 40px 20px;
          font-size: 0.95rem;
          font-style: italic;
        }

        .completion-message {
          background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
          border: 3px solid #27ae60;
          border-radius: 12px;
          padding: 30px;
          text-align: center;
          margin-top: 20px;
        }

        .completion-message h3 {
          color: #155724;
          font-size: 1.8rem;
          margin: 0 0 10px 0;
        }

        .completion-message p {
          color: #155724;
          margin: 10px 0;
        }

        .final-score {
          font-size: 1.3rem;
          font-weight: bold;
          margin: 15px 0 20px 0;
        }

        .reset-button,
        .reset-button-small {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        .reset-button {
          display: block;
          margin: 20px auto 0;
          padding: 15px 30px;
          font-size: 1.1rem;
        }

        .reset-button-small {
          display: block;
          margin: 20px auto 0;
          padding: 10px 20px;
          font-size: 0.9rem;
        }

        .reset-button:hover,
        .reset-button-small:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        @media (max-width: 1024px) {
          .game-container {
            grid-template-columns: 1fr;
          }

          .drop-areas {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .drag-drop-enhanced {
            padding: 20px;
          }

          .game-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .game-header h2 {
            font-size: 1.4rem;
          }

          .items-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .drop-content {
            grid-template-columns: repeat(2, 1fr);
            min-height: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default DragDropEnhanced;
