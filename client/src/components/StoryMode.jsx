import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

const pageVariants = {
  enter: (dir) => ({
    rotateY: dir > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.92,
    transformOrigin: dir > 0 ? 'left center' : 'right center',
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    transformOrigin: 'center center',
    transition: {
      rotateY: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
      opacity: { duration: 0.25 },
      scale: { duration: 0.45 },
    },
  },
  exit: (dir) => ({
    rotateY: dir > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.92,
    transformOrigin: dir > 0 ? 'right center' : 'left center',
    transition: {
      rotateY: { duration: 0.35, ease: [0.55, 0.055, 0.675, 0.19] },
      opacity: { duration: 0.2 },
      scale: { duration: 0.35 },
    },
  }),
};

const StoryMode = ({ isOpen, onClose, isTurkish }) => {
  const [[currentPage, direction], setPage] = useState([1, 0]);
  const totalPages = 15;

  const nextPage = () => {
    if (currentPage < totalPages) setPage([currentPage + 1, 1]);
  };

  const prevPage = () => {
    if (currentPage > 1) setPage([currentPage - 1, -1]);
  };

  const goToPage = (page) => {
    if (page !== currentPage) setPage([page, page > currentPage ? 1 : -1]);
  };

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
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          className="story-modal-content"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="story-header">
            <div className="story-header-left">
              <BookOpen size={20} className="story-header-icon" />
              <h3>{isTurkish ? 'Dijital Ayak İzi Hikayesi' : 'Digital Footprint Story'}</h3>
            </div>
            <div className="story-header-right">
              <span className="page-indicator">{currentPage} / {totalPages}</span>
              <button className="close-story-btn" onClick={onClose} aria-label="Kapat">
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Book area */}
          <div className="book-container">
            <button
              className="story-nav-btn prev"
              onClick={prevPage}
              disabled={currentPage === 1}
              aria-label={isTurkish ? 'Önceki sayfa' : 'Previous page'}
            >
              <ChevronLeft size={28} />
            </button>

            <div className="book-page-wrapper" style={{ perspective: '1400px' }}>
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentPage}
                  className="book-page"
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <img
                    src={`/story_images/page-${String(currentPage).padStart(2, '0')}.png`}
                    alt={`${isTurkish ? 'Sayfa' : 'Page'} ${currentPage}`}
                    className="story-image"
                    draggable={false}
                  />
                  <div className="page-curl" />
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              className="story-nav-btn next"
              onClick={nextPage}
              disabled={currentPage === totalPages}
              aria-label={isTurkish ? 'Sonraki sayfa' : 'Next page'}
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Footer */}
          <div className="story-footer">
            <div className="page-dots">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  className={`page-dot${i + 1 === currentPage ? ' active' : ''}${i + 1 < currentPage ? ' visited' : ''}`}
                  onClick={() => goToPage(i + 1)}
                  aria-label={`${isTurkish ? 'Sayfa' : 'Page'} ${i + 1}`}
                />
              ))}
            </div>
            <p className="story-hint">
              {isTurkish
                ? '← → tuşları veya ok butonlarıyla sayfaları çevirebilirsin'
                : 'Use ← → arrow keys or buttons to turn pages'}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StoryMode;
