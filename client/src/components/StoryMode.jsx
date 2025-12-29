import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Styles imported in index.css

const StoryMode = ({ isOpen, onClose, isTurkish }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 15; // Şimdilik 15 sayfa dönüştürdük

  // Sayfa değiştirme fonksiyonları
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  // Klavye kontrolleri
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      if (e.key === 'ArrowRight') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentPage]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="story-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className="story-modal-content"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          <button className="close-story-btn" onClick={onClose}>
            <X size={24} />
          </button>

          <div className="story-header">
            <h3>{isTurkish ? 'Dijital Ayak İzi Hikayesi' : 'Digital Footprint Story'}</h3>
            <span className="page-indicator">
              {currentPage} / {totalPages}
            </span>
          </div>

          <div className="story-viewer">
            <button 
              className="story-nav-btn prev" 
              onClick={prevPage} 
              disabled={currentPage === 1}
            >
              <ChevronLeft size={32} />
            </button>

            <div className="story-image-container">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentPage}
                  src={`/story_images/page-${String(currentPage).padStart(2, '0')}.png`}
                  alt={`Story Page ${currentPage}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="story-image"
                />
              </AnimatePresence>
            </div>

            <button 
              className="story-nav-btn next" 
              onClick={nextPage} 
              disabled={currentPage === totalPages}
            >
              <ChevronRight size={32} />
            </button>
          </div>

          <div className="story-footer">
            <p>
              {isTurkish 
                ? 'Sayfaları çevirmek için okları veya klavyeni kullanabilirsin.' 
                : 'Use arrows or your keyboard to turn pages.'}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StoryMode;
