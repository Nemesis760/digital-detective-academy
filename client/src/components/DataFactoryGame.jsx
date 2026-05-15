import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import soundManager from '../utils/soundEffects';

const DataFactoryGame = ({ isTurkish = true }) => {
  const [stations, setStations] = useState({ input: [], process: [], output: [], storage: [] });
  const [availableItems, setAvailableItems] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [gameComplete, setGameComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [dragState, setDragState] = useState({ active: false, item: null, x: 0, y: 0, offsetX: 0, offsetY: 0 });

  const scrollAreaRef = useRef(null);
  const feedbackTimeoutRef = useRef(null);
  const dragStateRef = useRef(dragState);
  const dropHandledRef = useRef(false);
  const GHOST_LIFT_Y = 36;

  const items = useMemo(() => [
    { id: 1, name: isTurkish ? 'Klavye' : 'Keyboard', category: 'input', emoji: '⌨️' },
    { id: 2, name: isTurkish ? 'Fare' : 'Mouse', category: 'input', emoji: '🖱️' },
    { id: 3, name: isTurkish ? 'Mikrofon' : 'Microphone', category: 'input', emoji: '🎤' },
    { id: 4, name: 'CPU', category: 'process', emoji: '💻' },
    { id: 5, name: isTurkish ? 'İşlemci' : 'Processor', category: 'process', emoji: '⚙️' },
    { id: 6, name: isTurkish ? 'Monitör' : 'Monitor', category: 'output', emoji: '🖥️' },
    { id: 7, name: isTurkish ? 'Hoparlör' : 'Speaker', category: 'output', emoji: '🔊' },
    { id: 8, name: isTurkish ? 'Yazıcı' : 'Printer', category: 'output', emoji: '🖨️' },
    { id: 9, name: isTurkish ? 'Sabit Disk' : 'Hard Drive', category: 'storage', emoji: '💾' },
    { id: 10, name: isTurkish ? 'USB Bellek' : 'USB Drive', category: 'storage', emoji: '💿' },
    { id: 11, name: 'RAM', category: 'storage', emoji: '🧠' },
  ], [isTurkish]);

  const stationsConfig = {
    input: { title: isTurkish ? 'Malzeme Sepeti (Input)' : 'Ingredient Bin (Input)', description: isTurkish ? 'Veri girişi yapan cihazlar' : 'Devices that input data', emoji: '📥', color: 'from-green-500 to-emerald-500' },
    process: { title: isTurkish ? 'Aşçı Fırını (Process)' : 'Chef Oven (Process)', description: isTurkish ? 'Verileri işleyen merkezi birim' : 'Central unit that processes data', emoji: '🔥', color: 'from-orange-500 to-red-500' },
    output: { title: isTurkish ? 'Servis Masası (Output)' : 'Service Table (Output)', description: isTurkish ? 'İşlenmiş veriyi gösteren cihazlar' : 'Devices that display data', emoji: '📤', color: 'from-blue-500 to-cyan-500' },
    storage: { title: isTurkish ? 'Buzdolabı (Storage)' : 'Fridge (Storage)', description: isTurkish ? 'Verileri saklayan cihazlar' : 'Devices that store data', emoji: '❄️', color: 'from-purple-500 to-pink-500' },
  };

  useEffect(() => {
    setAvailableItems([...items]);
    setStations({ input: [], process: [], output: [], storage: [] });
    setScore(0); setFeedback(null); setGameComplete(false);
    setSelectedItem(null);
    setDragState({ active: false, item: null, x: 0, y: 0, offsetX: 0, offsetY: 0 });
  }, [items]);

  useEffect(() => { return () => { if (feedbackTimeoutRef.current) clearTimeout(feedbackTimeoutRef.current); }; }, []);
  useEffect(() => { dragStateRef.current = dragState; }, [dragState]);

  const clearFeedbackLater = () => {
    if (feedbackTimeoutRef.current) clearTimeout(feedbackTimeoutRef.current);
    feedbackTimeoutRef.current = setTimeout(() => setFeedback(null), 2000);
  };

  const handleReset = () => {
    setAvailableItems([...items]);
    setStations({ input: [], process: [], output: [], storage: [] });
    setScore(0); setFeedback(null); setGameComplete(false);
    setSelectedItem(null);
    setDragState({ active: false, item: null, x: 0, y: 0, offsetX: 0, offsetY: 0 });
  };

  const confettiSuccess = () => {
    confetti({ particleCount: 60, spread: 80, startVelocity: 38, gravity: 0.9, ticks: 200, origin: { y: 0.65 } });
  };

  const confettiFinale = () => {
    const end = Date.now() + 900;
    const frame = () => {
      confetti({ particleCount: 12, spread: 110, startVelocity: 44, gravity: 0.95, ticks: 240, origin: { x: Math.random(), y: 0.6 } });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  };

  const showSuccess = (item) => {
    setFeedback({ type: 'success', message: isTurkish ? `${item.name} doğru yerde!` : `${item.name} is correct!` });
    try { soundManager.playCorrect(); } catch {}
    confettiSuccess(); clearFeedbackLater();
  };

  const showError = (item) => {
    try { soundManager.playWrong(); } catch {}
    setFeedback({ type: 'error', message: isTurkish ? `${item.name} buraya ait değil!` : `${item.name} doesn't belong here!` });
    clearFeedbackLater();
  };

  const completeGame = () => {
    setTimeout(() => {
      setGameComplete(true);
      try { soundManager.playSuccess(); } catch {}
      confettiFinale();
    }, 350);
  };

  const placeItemToStation = (stationKey, activeItem) => {
    if (activeItem.category !== stationKey) { showError(activeItem); return; }
    setStations((prev) => ({ ...prev, [stationKey]: [...prev[stationKey], activeItem] }));
    setAvailableItems((prev) => {
      const next = prev.filter((it) => it.id !== activeItem.id);
      if (next.length === 0) completeGame();
      return next;
    });
    setScore((prev) => prev + 10);
    showSuccess(activeItem);
    setSelectedItem(null);
  };

  const handleItemSelect = (item) => setSelectedItem((prev) => (prev?.id === item.id ? null : item));

  const autoScrollIfNeeded = (clientY) => {
    const el = scrollAreaRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const edge = 70, speed = 18;
    if (clientY < rect.top + edge) el.scrollBy({ top: -speed, behavior: 'auto' });
    else if (clientY > rect.bottom - edge) el.scrollBy({ top: speed, behavior: 'auto' });
  };

  const onPointerDownItem = (e, item) => {
    if (e.pointerType === 'mouse') e.preventDefault();
    const cardRect = e.currentTarget.getBoundingClientRect();
    const next = { active: true, item, x: e.clientX, y: e.clientY, offsetX: e.clientX - cardRect.left, offsetY: e.clientY - cardRect.top };
    dropHandledRef.current = false;
    dragStateRef.current = next;
    setDragState(next);
    if (e.pointerType === 'mouse') { try { e.currentTarget.setPointerCapture(e.pointerId); } catch {} }
  };

  const onPointerMove = (e) => {
    if (!dragStateRef.current.active) return;
    setDragState((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
    autoScrollIfNeeded(e.clientY);
  };

  const onPointerUp = (e) => {
    const cur = dragStateRef.current;
    if (!cur.active || !cur.item || dropHandledRef.current) return;
    dropHandledRef.current = true;
    const el = document.elementFromPoint(e.clientX, e.clientY);
    const stationKey = el?.closest?.('[data-station]')?.getAttribute?.('data-station');
    const activeItem = cur.item;
    const reset = { active: false, item: null, x: 0, y: 0, offsetX: 0, offsetY: 0 };
    dragStateRef.current = reset;
    setDragState(reset);
    if (stationKey) { placeItemToStation(stationKey, activeItem); }
    else {
      setFeedback({ type: 'error', message: isTurkish ? 'Bir istasyonun içine bırakmalısın!' : 'Drop it inside a station!' });
      clearFeedbackLater();
    }
  };

  useEffect(() => {
    if (!dragState.active) return;
    const handlePointerCancel = () => {
      if (!dragStateRef.current.active || dropHandledRef.current) return;
      dropHandledRef.current = true;
      const reset = { active: false, item: null, x: 0, y: 0, offsetX: 0, offsetY: 0 };
      dragStateRef.current = reset;
      setDragState(reset);
    };
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', handlePointerCancel);
    return () => {
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', handlePointerCancel);
    };
  }, [dragState.active]);

  return (
    <div className="data-factory-game w-full bg-slate-900 rounded-2xl overflow-hidden"
      style={{ maxWidth: '860px', margin: '0 auto' }}>

      {/* HEADER */}
      <div className="p-3 pb-2 shrink-0">
        <div className="text-center mb-2">
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">
            {isTurkish ? '🏭 Veri Fabrikası Oyunu' : '🏭 Data Factory Game'}
          </h3>
          <p className="text-slate-400 text-xs mt-1">
            {isTurkish ? 'Cihazları doğru istasyonlara sürükle veya seç! (IPOS)' : 'Drag or select devices to the correct stations! (IPOS)'}
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="bg-slate-800 px-3 py-1 rounded-lg text-sm">
            <span className="text-slate-400">{isTurkish ? 'Puan' : 'Score'}: </span>
            <span className="text-yellow-400 font-bold">{score}</span>
          </div>
          <motion.button
            onClick={handleReset}
            className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded-lg font-semibold text-sm text-white transition-colors"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          >
            {isTurkish ? '🔄 Sıfırla' : '🔄 Reset'}
          </motion.button>
        </div>

        <AnimatePresence>
          {feedback && (
            <motion.div
              initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              className={`text-center py-1.5 px-3 rounded-lg text-sm font-semibold mb-1 ${
                feedback.type === 'success'
                  ? 'bg-green-500/20 text-green-400 border border-green-500/40'
                  : 'bg-red-500/20 text-red-400 border border-red-500/40'
              }`}
            >
              {feedback.message}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ANA LAYOUT: mobilde sütun, md+ yan yana */}
      <div
        ref={scrollAreaRef}
        className="flex flex-col md:flex-row gap-3 px-3 pb-4 overflow-y-auto touch-pan-y"
        style={{ maxHeight: 'min(520px, 70vh)' }}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        {/* Öğeler — mobilde üstte (tam genişlik), md'de sağda sabit */}
        <div className="w-full md:order-2 md:w-[42%] md:flex-none min-w-0">
          <div className="bg-slate-800 rounded-xl p-2.5 md:sticky md:top-0">
            <h4 className="text-sm font-bold text-slate-200 text-center mb-2">
              {isTurkish ? '📦 Öğeler' : '📦 Items'}
            </h4>

            {/* mobilde 2 sütun, md'de tek sütun */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-1.5">
              <AnimatePresence>
                {availableItems.map((item) => {
                  const isDraggingThis = dragState.active && dragState.item?.id === item.id;
                  return (
                    <motion.div
                      key={item.id}
                      onClick={() => handleItemSelect(item)}
                      onPointerDown={(e) => onPointerDownItem(e, item)}
                      className={[
                        'flex items-center gap-2 rounded-lg px-2 py-2 md:px-3',
                        'border-2 transition-colors select-none cursor-grab active:cursor-grabbing touch-pan-y',
                        selectedItem?.id === item.id
                          ? 'bg-yellow-500/20 border-yellow-400 ring-1 ring-yellow-300'
                          : 'bg-slate-700 border-slate-600 hover:border-blue-400',
                        isDraggingThis ? 'border-yellow-400 bg-slate-600' : '',
                      ].join(' ')}
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <span className="text-lg pointer-events-none">{item.emoji}</span>
                      <span className="text-white font-semibold text-xs md:text-sm pointer-events-none truncate">{item.name}</span>
                      {selectedItem?.id === item.id && (
                        <span className="ml-auto text-yellow-300 text-xs font-bold pointer-events-none flex-shrink-0">✓</span>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {availableItems.length === 0 && !gameComplete && (
                <p className="col-span-2 md:col-span-1 text-slate-400 text-xs text-center py-4">
                  {isTurkish ? 'Tüm öğeler yerleştirildi!' : 'All items placed!'}
                </p>
              )}
            </div>

            {selectedItem && (
              <p className="text-center text-yellow-300 text-xs mt-2 font-semibold">
                {isTurkish ? '👆 İstasyona dokun' : '👆 Tap a station'}
              </p>
            )}
          </div>
        </div>

        {/* İstasyonlar — mobilde altta (tam genişlik), md'de solda */}
        <div className="w-full md:order-1 md:flex-1 min-w-0 flex flex-col gap-2.5">
          {Object.entries(stationsConfig).map(([key, config]) => (
            <motion.div
              key={key}
              data-station={key}
              className={`bg-gradient-to-br ${config.color} rounded-xl border-2 border-white/20 p-2.5 cursor-pointer`}
              style={{ minHeight: '80px' }}
              onClick={() => { if (selectedItem) placeItemToStation(key, selectedItem); }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center gap-2 mb-2 pointer-events-none">
                <span className="text-xl">{config.emoji}</span>
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-white leading-tight">{config.title}</h4>
                  <p className="text-xs text-white/70 truncate">{config.description}</p>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg px-2 py-1.5 min-h-[36px] flex flex-wrap gap-1">
                <AnimatePresence>
                  {stations[key].map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.04 }}
                      className="inline-flex items-center gap-1 bg-white/25 rounded-md px-2 py-0.5 text-white text-xs font-semibold"
                    >
                      <span className="text-base">{item.emoji}</span>
                      <span>{item.name}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {stations[key].length === 0 && <div className="w-full py-1" />}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Drag ghost */}
      <AnimatePresence>
        {dragState.active && dragState.item && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
            className="fixed z-[99999] pointer-events-none"
            style={{ left: dragState.x - dragState.offsetX, top: dragState.y - dragState.offsetY - GHOST_LIFT_Y, width: 150 }}
          >
            <div className="bg-slate-800/95 border-2 border-yellow-300/70 rounded-xl px-3 py-2 shadow-2xl">
              <div className="flex items-center gap-2">
                <span className="text-xl">{dragState.item.emoji}</span>
                <span className="text-white font-semibold text-sm">{dragState.item.name}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Complete Modal */}
      <AnimatePresence>
        {gameComplete && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={handleReset}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-6 max-w-sm text-center mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-5xl mb-3">🎉</div>
              <h3 className="text-2xl font-bold text-white mb-2">{isTurkish ? 'Tebrikler!' : 'Congratulations!'}</h3>
              <p className="text-white/90 mb-3 text-sm">{isTurkish ? 'Tüm cihazları doğru yerleştirdin!' : 'You placed all devices correctly!'}</p>
              <p className="text-xl font-bold text-white mb-4">{isTurkish ? 'Toplam Puan' : 'Total Score'}: {score}</p>
              <motion.button
                onClick={handleReset}
                className="px-5 py-2 bg-white text-orange-600 rounded-lg font-bold"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
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