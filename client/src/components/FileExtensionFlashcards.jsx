import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import soundManager from '../utils/soundEffects';

/**
 * FileExtensionFlashcards - Interactive Flashcard Game
 * Students flip cards to learn file extensions
 */

const FileExtensionFlashcards = ({ isTurkish = true }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState(new Set());
  const [isFlipped, setIsFlipped] = useState(false);

  const flashcards = [
    { ext: '.txt', type: isTurkish ? 'Metin Dosyası' : 'Text File', icon: '📝', description: isTurkish ? 'Düz metin dosyası' : 'Plain text file' },
    { ext: '.jpg', type: isTurkish ? 'Resim Dosyası' : 'Image File', icon: '🖼️', description: isTurkish ? 'Fotoğraf veya resim' : 'Photo or image' },
    { ext: '.mp3', type: isTurkish ? 'Ses Dosyası' : 'Audio File', icon: '🎵', description: isTurkish ? 'Müzik veya ses kaydı' : 'Music or audio recording' },
    { ext: '.mp4', type: isTurkish ? 'Video Dosyası' : 'Video File', icon: '🎬', description: isTurkish ? 'Film veya video' : 'Movie or video' },
    { ext: '.pdf', type: isTurkish ? 'Belge Dosyası' : 'Document File', icon: '📕', description: isTurkish ? 'Kitap veya belge' : 'Book or document' },
    { ext: '.exe', type: isTurkish ? 'Program Dosyası' : 'Program File', icon: '⚙️', description: isTurkish ? 'Çalıştırılabilir program' : 'Executable program' },
    { ext: '.zip', type: isTurkish ? 'Arşiv Dosyası' : 'Archive File', icon: '📦', description: isTurkish ? 'Sıkıştırılmış dosyalar' : 'Compressed files' },
    { ext: '.html', type: isTurkish ? 'Web Sayfası' : 'Web Page', icon: '🌐', description: isTurkish ? 'İnternet sayfası' : 'Internet page' },
  ];

  const currentCard = flashcards[currentCardIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    soundManager.playClick();
    if (!flippedCards.has(currentCardIndex)) {
      setFlippedCards(prev => new Set([...prev, currentCardIndex]));
      soundManager.playCorrect();
      if (flippedCards.size + 1 === flashcards.length - 1) {
        soundManager.playSuccess();
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#10b981', '#059669', '#34d399', '#fbbf24', '#f59e0b']
        });
      }
    }
  };

  const handleNext = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
      setIsFlipped(false);
    }
  };

  const handlePrev = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(prev => prev - 1);
      setIsFlipped(false);
    }
  };

  const handleReset = () => {
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setFlippedCards(new Set());
  };

  const progress = ((flippedCards.size / flashcards.length) * 100).toFixed(0);

  return (
    <div className="flashcards-container">
      <div className="flashcards-header">
        <h3>
          {isTurkish 
            ? '🎴 Dosya Uzantılarını Öğren!'
            : '🎴 Learn File Extensions!'}
        </h3>
        <div className="progress-bar-wrapper">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="progress-text">
            {flippedCards.size}/{flashcards.length} {isTurkish ? 'Kart Çevrildi' : 'Cards Flipped'}
          </span>
        </div>
      </div>

      <div className="flashcard-wrapper">
        <motion.div
          className={`flashcard ${isFlipped ? 'flipped' : ''}`}
          onClick={handleFlip}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flashcard-inner">
            <div className="flashcard-front">
              <div className="card-content">
                <span className="card-extension">{currentCard.ext}</span>
                <p className="card-hint">
                  {isTurkish ? 'Kartı çevirmek için tıkla!' : 'Click to flip the card!'}
                </p>
              </div>
            </div>
            <div className="flashcard-back">
              <div className="card-content">
                <span className="card-icon">{currentCard.icon}</span>
                <h4 className="card-type">{currentCard.type}</h4>
                <p className="card-description">{currentCard.description}</p>
                {flippedCards.has(currentCardIndex) && (
                  <span className="learned-badge">✓ {isTurkish ? 'Öğrenildi!' : 'Learned!'}</span>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flashcard-controls">
        <button 
          onClick={handlePrev} 
          disabled={currentCardIndex === 0}
          className="nav-btn prev-btn"
        >
          ← {isTurkish ? 'Önceki' : 'Previous'}
        </button>
        
        <span className="card-counter">
          {currentCardIndex + 1} / {flashcards.length}
        </span>

        <button 
          onClick={handleNext} 
          disabled={currentCardIndex === flashcards.length - 1}
          className="nav-btn next-btn"
        >
          {isTurkish ? 'Sonraki' : 'Next'} →
        </button>
      </div>

      {flippedCards.size === flashcards.length && (
        <motion.div
          className="completion-message"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3>🎉 {isTurkish ? 'Tebrikler! Tüm kartları öğrendin!' : 'Congratulations! You learned all cards!'}</h3>
          <button onClick={handleReset} className="reset-btn">
            {isTurkish ? '🔄 Tekrar Oyna' : '🔄 Play Again'}
          </button>
        </motion.div>
      )}

      <style jsx>{`
        .flashcards-container {
          width: 100%;
          padding: 2rem;
          background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
          border-radius: 16px;
          min-height: 500px;
        }

        .flashcards-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .flashcards-header h3 {
          font-size: 1.8rem;
          color: #4f46e5;
          margin-bottom: 1rem;
        }

        .progress-bar-wrapper {
          max-width: 400px;
          margin: 0 auto;
        }

        .progress-bar {
          width: 100%;
          height: 10px;
          background: #cbd5e1;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #10b981, #059669);
          border-radius: 10px;
          transition: width 0.5s ease;
        }

        .progress-text {
          font-size: 0.9rem;
          color: #64748b;
        }

        .flashcard-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
          perspective: 1000px;
        }

        .flashcard {
          width: 100%;
          max-width: 400px;
          height: 300px;
          cursor: pointer;
          position: relative;
        }

        .flashcard-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.6s;
        }

        .flashcard.flipped .flashcard-inner {
          transform: rotateY(180deg);
        }

        .flashcard-front,
        .flashcard-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .flashcard-front {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
        }

        .flashcard-back {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          transform: rotateY(180deg);
        }

        .card-content {
          text-align: center;
          padding: 2rem;
        }

        .card-extension {
          font-size: 4rem;
          font-weight: 800;
          display: block;
          margin-bottom: 1rem;
        }

        .card-hint {
          font-size: 1rem;
          opacity: 0.9;
        }

        .card-icon {
          font-size: 4rem;
          display: block;
          margin-bottom: 1rem;
        }

        .card-type {
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0.5rem 0;
        }

        .card-description {
          font-size: 1.1rem;
          opacity: 0.95;
          margin: 0;
        }

        .learned-badge {
          display: inline-block;
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          font-weight: 600;
        }

        .flashcard-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 400px;
          margin: 0 auto;
        }

        .nav-btn {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          background: white;
          color: #4f46e5;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .nav-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
        }

        .nav-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .card-counter {
          font-weight: 600;
          color: #4f46e5;
          font-size: 1.1rem;
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

        @media (max-width: 768px) {
          .flashcard {
            max-width: 100%;
            height: 250px;
          }

          .card-extension,
          .card-icon {
            font-size: 3rem;
          }

          .card-type {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default FileExtensionFlashcards;

