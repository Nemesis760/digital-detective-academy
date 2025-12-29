import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import '../styles/drag-drop.css';

function DragDrop({ isTurkish, items, categories }) {
  const [draggedItem, setDraggedItem] = useState(null);
  const [categorizedItems, setCategorizedItems] = useState({});
  const [uncategorizedItems, setUncategorizedItems] = useState(items);
  const [feedback, setFeedback] = useState(null);
  const [allCorrect, setAllCorrect] = useState(false);
  const [dragOverCategory, setDragOverCategory] = useState(null);
  const [pulseItems, setPulseItems] = useState(new Set());

  // Kategorileri normalize et (string array veya object array olabilir)
  const normalizedCategories = categories.map((cat) => {
    if (typeof cat === 'string') {
      return { id: cat, title: cat };
    }
    return cat;
  });

  // Kategorileri başlat
  useEffect(() => {
    const initial = {};
    normalizedCategories.forEach(cat => {
      initial[cat.id] = [];
    });
    setCategorizedItems(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  const handleDragStart = (item) => {
    setDraggedItem(item);
    // Pulse efekti ekle
    setPulseItems(new Set([item.id]));
    setTimeout(() => setPulseItems(new Set()), 500);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (category) => {
    if (draggedItem) {
      setDragOverCategory(category);
    }
  };

  const handleDragLeave = () => {
    setDragOverCategory(null);
  };

  const handleDropOnCategory = (category) => {
    if (!draggedItem) return;

    const isCorrect = draggedItem.category === category;

    // Item text veya content'i al
    const itemText = draggedItem.text || draggedItem.content || '';
    
    // Feedback göster
    setFeedback({
      item: itemText,
      category: category,
      isCorrect: isCorrect,
      message: isCorrect
        ? isTurkish ? `🎉 Harika! "${itemText}" doğru yerde!`
          : `🎉 Great! "${itemText}" is in the right place!`
        : isTurkish ? `❌ Oops! "${itemText}" buraya ait değil. Tekrar dene!`
          : `❌ Oops! "${itemText}" doesn't belong here. Try again!`
    });

    if (isCorrect) {
      // Öğeyi kategoriye taşı
      setCategorizedItems(prev => ({
        ...prev,
        [category]: [...prev[category], draggedItem]
      }));

      // Uncategorized listesinden kaldır
      setUncategorizedItems(prev => prev.filter(item => item.id !== draggedItem.id));

      // Tüm öğeler kategorize edildi mi kontrol et
      if (uncategorizedItems.length === 1) {
        setTimeout(() => setAllCorrect(true), 300);
      }
    } else {
      // Yanlış cevap için shake animasyonu
      setPulseItems(new Set([draggedItem.id]));
      setTimeout(() => setPulseItems(new Set()), 600);
    }

    setDraggedItem(null);
    setDragOverCategory(null);
  };

  const handleRemoveFromCategory = (category, itemId) => {
    const item = categorizedItems[category].find(i => i.id === itemId);
    
    setCategorizedItems(prev => ({
      ...prev,
      [category]: prev[category].filter(i => i.id !== itemId)
    }));

    setUncategorizedItems(prev => [...prev, item]);
    setAllCorrect(false);
  };

  const handleReset = () => {
    setUncategorizedItems(items);
    const initial = {};
    normalizedCategories.forEach(cat => {
      initial[cat.id] = [];
    });
    setCategorizedItems(initial);
    setFeedback(null);
    setAllCorrect(false);
  };

  return (
    <div className="drag-drop-container">
      {/* Kategoriler */}
      <div className="categories-grid">
        {normalizedCategories.map((category, index) => (
          <motion.div
            key={category.id}
            className={`category-zone ${dragOverCategory === category.id ? 'drag-over' : ''}`}
            onDragOver={handleDragOver}
            onDragEnter={() => handleDragEnter(category.id)}
            onDragLeave={handleDragLeave}
            onDrop={() => handleDropOnCategory(category.id)}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: dragOverCategory === category.id ? 1.05 : 1,
              borderColor: dragOverCategory === category.id ? '#667eea' : undefined
            }}
            transition={{ 
              duration: 0.3,
              delay: index * 0.1,
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h3 
              className="category-title"
              animate={dragOverCategory === category.id ? { 
                scale: [1, 1.1, 1],
                color: '#667eea'
              } : {}}
              transition={{ duration: 0.3 }}
            >
              {category.title}
            </motion.h3>
            <div className="category-items">
              <AnimatePresence mode="popLayout">
                {categorizedItems[category.id]?.map((item, itemIndex) => (
                  <motion.div
                    key={item.id}
                    className="categorized-item"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      rotate: 0,
                      y: 0
                    }}
                    exit={{ 
                      opacity: 0, 
                      scale: 0,
                      rotate: 180,
                      transition: { duration: 0.3 }
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 25,
                      delay: itemIndex * 0.1
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: itemIndex * 0.1 + 0.2 }}
                    >
                      {item.text || item.content}
                    </motion.span>
                    <motion.button
                      className="remove-btn"
                      onClick={() => handleRemoveFromCategory(category.id, item.id)}
                      title={isTurkish ? 'Kaldır' : 'Remove'}
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      ✕
                    </motion.button>
                  </motion.div>
                ))}
              </AnimatePresence>
              {categorizedItems[category.id]?.length === 0 && (
                <motion.p 
                  className="empty-message"
                  animate={dragOverCategory === category.id ? {
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 1, 0.5]
                  } : {}}
                  transition={{ 
                    duration: 1,
                    repeat: dragOverCategory === category.id ? Infinity : 0
                  }}
                >
                  {isTurkish ? '✨ Öğe sürükle buraya! ✨' : '✨ Drag items here! ✨'}
                </motion.p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Sürüklenecek Öğeler */}
      <div className="draggable-items-section">
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {isTurkish ? '🎯 Öğeleri Kategorilere Sürükle' : '🎯 Drag Items to Categories'}
        </motion.h3>
        <div className="draggable-items">
          <AnimatePresence mode="popLayout">
            {uncategorizedItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={`draggable-item ${draggedItem?.id === item.id ? 'dragging' : ''} ${pulseItems.has(item.id) ? 'pulse' : ''}`}
                draggable
                onDragStart={() => handleDragStart(item)}
                initial={{ opacity: 0, x: -50, rotate: -10, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  rotate: 0,
                  scale: pulseItems.has(item.id) ? [1, 1.2, 1] : 1,
                  y: pulseItems.has(item.id) ? [0, -10, 0] : 0
                }}
                exit={{ 
                  opacity: 0, 
                  x: 50,
                  rotate: 10,
                  scale: 0.8,
                  transition: { duration: 0.3 }
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: index * 0.1
                }}
                whileHover={{ 
                  scale: 1.15, 
                  rotate: [0, -5, 5, 0],
                  boxShadow: '0 12px 24px rgba(102, 126, 234, 0.4)',
                  transition: { duration: 0.3 }
                }}
                whileDrag={{ 
                  scale: 1.1, 
                  opacity: 0.8,
                  rotate: 5,
                  zIndex: 1000,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  animate={pulseItems.has(item.id) ? {
                    color: ['#333', '#667eea', '#333']
                  } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {item.text || item.content}
                </motion.span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            className={`feedback-message ${feedback.isCorrect ? 'success' : 'error'}`}
            initial={{ opacity: 0, y: -50, scale: 0.8, rotateX: -90 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              rotateX: 0
            }}
            exit={{ 
              opacity: 0, 
              y: -50, 
              scale: 0.8,
              transition: { duration: 0.2 }
            }}
            transition={{ 
              type: "spring",
              stiffness: 500,
              damping: 25
            }}
          >
            <motion.p
              animate={feedback.isCorrect ? {
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              } : {
                x: [0, -10, 10, -10, 0]
              }}
              transition={{ duration: 0.5 }}
            >
              {feedback.message}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Başarı Mesajı */}
      <AnimatePresence>
        {allCorrect && (
          <motion.div
            className="success-banner"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
              y: [0, -20, 0]
            }}
            exit={{ 
              opacity: 0, 
              scale: 0,
              transition: { duration: 0.3 }
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
          >
            <motion.p 
              className="success-text"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              🎉 {isTurkish ? 'Harika! Tüm öğeleri doğru kategorilere yerleştirdin!' : 'Great! You categorized all items correctly!'}
            </motion.p>
            <motion.div
              style={{
                fontSize: '3rem',
                marginTop: '1rem'
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              ⭐
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Kontrol Butonları */}
      <div className="drag-drop-controls">
        <motion.button 
          className="reset-btn" 
          onClick={handleReset}
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -10, 10, -10, 0],
            boxShadow: '0 8px 16px rgba(102, 126, 234, 0.4)'
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          {isTurkish ? '🔄 Sıfırla' : '🔄 Reset'}
        </motion.button>
      </div>
    </div>
  );
}

export default DragDrop;
