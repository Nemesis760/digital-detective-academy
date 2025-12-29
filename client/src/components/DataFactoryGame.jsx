import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import soundManager from '../utils/soundEffects';

/**
 * Data Factory Game - Module 1
 * Kitchen metaphor for IPOS (Input-Process-Output-Storage)
 * Users drag items to correct kitchen stations
 */

const DataFactoryGame = ({ isTurkish = true }) => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [stations, setStations] = useState({
    input: [],
    process: [],
    output: [],
    storage: []
  });
  const [feedback, setFeedback] = useState(null);
  const [gameComplete, setGameComplete] = useState(false);
  const [score, setScore] = useState(0);

  // Items to categorize
  const items = [
    { id: 1, name: isTurkish ? 'Klavye' : 'Keyboard', category: 'input', emoji: '⌨️' },
    { id: 2, name: isTurkish ? 'Fare' : 'Mouse', category: 'input', emoji: '🖱️' },
    { id: 3, name: isTurkish ? 'Mikrofon' : 'Microphone', category: 'input', emoji: '🎤' },
    { id: 4, name: isTurkish ? 'CPU' : 'CPU', category: 'process', emoji: '💻' },
    { id: 5, name: isTurkish ? 'İşlemci' : 'Processor', category: 'process', emoji: '⚙️' },
    { id: 6, name: isTurkish ? 'Monitör' : 'Monitor', category: 'output', emoji: '🖥️' },
    { id: 7, name: isTurkish ? 'Hoparlör' : 'Speaker', category: 'output', emoji: '🔊' },
    { id: 8, name: isTurkish ? 'Yazıcı' : 'Printer', category: 'output', emoji: '🖨️' },
    { id: 9, name: isTurkish ? 'Sabit Disk' : 'Hard Drive', category: 'storage', emoji: '💾' },
    { id: 10, name: isTurkish ? 'USB Bellek' : 'USB Drive', category: 'storage', emoji: '💿' },
    { id: 11, name: isTurkish ? 'RAM' : 'RAM', category: 'storage', emoji: '🧠' },
  ];

  const [availableItems, setAvailableItems] = useState([...items]);

  const stationsConfig = {
    input: {
      title: isTurkish ? 'Malzeme Sepeti (Input)' : 'Ingredient Bin (Input)',
      description: isTurkish ? 'Bilgisayara veri girişi yapan cihazlar' : 'Devices that input data to computer',
      emoji: '📥',
      color: 'from-green-500 to-emerald-500'
    },
    process: {
      title: isTurkish ? 'Aşçı Fırını (Process)' : 'Chef Oven (Process)',
      description: isTurkish ? 'Verileri işleyen merkezi birim' : 'Central unit that processes data',
      emoji: '🔥',
      color: 'from-orange-500 to-red-500'
    },
    output: {
      title: isTurkish ? 'Servis Masası (Output)' : 'Service Table (Output)',
      description: isTurkish ? 'İşlenmiş veriyi gösteren cihazlar' : 'Devices that display processed data',
      emoji: '📤',
      color: 'from-blue-500 to-cyan-500'
    },
    storage: {
      title: isTurkish ? 'Buzdolabı (Storage)' : 'Fridge (Storage)',
      description: isTurkish ? 'Verileri saklayan cihazlar' : 'Devices that store data',
      emoji: '❄️',
      color: 'from-purple-500 to-pink-500'
    }
  };

  const handleDragStart = (item) => {
    setDraggedItem(item);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (stationKey) => {
    if (!draggedItem) return;

    const isCorrect = draggedItem.category === stationKey;

    if (isCorrect) {
      // Move item to station
      setStations(prev => ({
        ...prev,
        [stationKey]: [...prev[stationKey], draggedItem]
      }));
      
      // Remove from available items
      setAvailableItems(prev => prev.filter(item => item.id !== draggedItem.id));
      
      // Update score
      setScore(prev => prev + 10);
      
      // Show success feedback
      setFeedback({
        type: 'success',
        message: isTurkish ? `🎉 Harika! ${draggedItem.name} doğru yerde!` : `🎉 Great! ${draggedItem.name} is correct!`
      });

      // Sound and confetti effect
      soundManager.playCorrect();
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#10b981', '#059669', '#34d399', '#fbbf24']
      });

      // Check if game is complete
      if (availableItems.length === 1) {
        setTimeout(() => {
          setGameComplete(true);
          soundManager.playSuccess();
          confetti({
            particleCount: 200,
            spread: 100,
            origin: { y: 0.6 },
            colors: ['#10b981', '#059669', '#34d399', '#fbbf24', '#f59e0b', '#6366f1']
          });
        }, 500);
      }
    } else {
      // Wrong placement
      soundManager.playWrong();
      setFeedback({
        type: 'error',
        message: isTurkish ? `❌ ${draggedItem.name} buraya ait değil! Tekrar dene.` : `❌ ${draggedItem.name} doesn't belong here! Try again.`
      });
    }

    setDraggedItem(null);
    setTimeout(() => setFeedback(null), 2000);
  };

  const handleReset = () => {
    setStations({ input: [], process: [], output: [], storage: [] });
    setAvailableItems([...items]);
    setGameComplete(false);
    setScore(0);
    setFeedback(null);
  };

  return (
    <div className="data-factory-game p-6 bg-slate-900 rounded-2xl">
      {/* Game Header */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">
          {isTurkish ? '🏭 Veri Fabrikası Oyunu' : '🏭 Data Factory Game'}
        </h3>
        <p className="text-slate-300 mb-4">
          {isTurkish 
            ? 'Cihazları doğru mutfak istasyonlarına sürükle! (IPOS: Input-Process-Output-Storage)'
            : 'Drag devices to the correct kitchen stations! (IPOS: Input-Process-Output-Storage)'}
        </p>
        <div className="flex items-center justify-center gap-4">
          <div className="bg-slate-800 px-4 py-2 rounded-lg">
            <span className="text-slate-400 text-sm">{isTurkish ? 'Puan' : 'Score'}: </span>
            <span className="text-yellow-400 font-bold text-xl">{score}</span>
          </div>
          <motion.button
            onClick={handleReset}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isTurkish ? '🔄 Sıfırla' : '🔄 Reset'}
          </motion.button>
        </div>
      </div>

      {/* Feedback Message */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`text-center mb-6 p-4 rounded-lg font-semibold ${
              feedback.type === 'success' 
                ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                : 'bg-red-500/20 text-red-400 border border-red-500/50'
            }`}
          >
            {feedback.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Kitchen Stations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {Object.entries(stationsConfig).map(([key, config]) => (
          <motion.div
            key={key}
            className={`bg-gradient-to-br ${config.color} rounded-xl p-6 border-2 border-white/20 min-h-[200px]`}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(key)}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">{config.emoji}</div>
              <h4 className="text-xl font-bold text-white mb-1">{config.title}</h4>
              <p className="text-sm text-white/80">{config.description}</p>
            </div>
            
            <div className="min-h-[120px] bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <AnimatePresence>
                {stations[key].map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0, rotate: 180 }}
                    transition={{ delay: index * 0.1 }}
                    className="inline-block bg-white/20 rounded-lg px-3 py-2 m-1 text-white font-semibold"
                  >
                    {item.emoji} {item.name}
                  </motion.div>
                ))}
              </AnimatePresence>
              {stations[key].length === 0 && (
                <p className="text-white/50 text-center text-sm py-8">
                  {isTurkish ? '✨ Öğe sürükle buraya! ✨' : '✨ Drag items here! ✨'}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Available Items */}
      <div className="bg-slate-800 rounded-xl p-6">
        <h4 className="text-xl font-bold mb-4 text-center text-slate-200">
          {isTurkish ? '📦 Sürüklenecek Öğeler' : '📦 Items to Drag'}
        </h4>
        <div className="flex flex-wrap gap-3 justify-center">
          <AnimatePresence>
            {availableItems.map((item) => (
              <motion.div
                key={item.id}
                draggable
                onDragStart={() => handleDragStart(item)}
                className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg px-4 py-3 cursor-grab active:cursor-grabbing border-2 border-slate-600 hover:border-blue-500 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileDrag={{ scale: 1.2, rotate: 10, zIndex: 1000 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="ml-2 text-white font-semibold">{item.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Game Complete Modal */}
      <AnimatePresence>
        {gameComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={handleReset}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-8 max-w-md text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {isTurkish ? 'Tebrikler!' : 'Congratulations!'}
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                {isTurkish 
                  ? 'Tüm cihazları doğru istasyonlara yerleştirdin! Dijital mutfak hazır!'
                  : 'You placed all devices in the correct stations! Digital kitchen is ready!'}
              </p>
              <p className="text-2xl font-bold text-white mb-6">
                {isTurkish ? 'Toplam Puan' : 'Total Score'}: {score}
              </p>
              <motion.button
                onClick={handleReset}
                className="px-6 py-3 bg-white text-orange-600 rounded-lg font-bold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isTurkish ? 'Tekrar Oyna' : 'Play Again'}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DataFactoryGame;

