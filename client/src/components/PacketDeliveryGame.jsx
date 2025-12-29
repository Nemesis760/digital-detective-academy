import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

/**
 * Packet Delivery Run - Module 2
 * Navigate a data packet through routers to reach the correct IP address
 * Avoid hacker obstacles
 */

const PacketDeliveryGame = ({ isTurkish = true }) => {
  const [gameState, setGameState] = useState('start'); // start, playing, won, lost
  const [packetPosition, setPacketPosition] = useState({ x: 50, y: 50 });
  const [targetIP, setTargetIP] = useState('192.168.1.100');
  const [currentIP, setCurrentIP] = useState('10.0.0.1');
  const [timeLeft, setTimeLeft] = useState(30);
  const [score, setScore] = useState(0);
  const [hackers, setHackers] = useState([]);
  const [routers, setRouters] = useState([
    { id: 1, x: 20, y: 30, ip: '192.168.1.1', connected: true },
    { id: 2, x: 50, y: 20, ip: '10.0.0.1', connected: false },
    { id: 3, x: 80, y: 40, ip: '172.16.0.1', connected: false },
    { id: 4, x: 60, y: 70, ip: '192.168.1.100', connected: false },
  ]);
  const gameAreaRef = useRef(null);

  useEffect(() => {
    if (gameState === 'playing') {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setGameState('lost');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      // Spawn hackers randomly
      const hackerSpawner = setInterval(() => {
        setHackers(prev => {
          const newHacker = {
            id: Date.now(),
            x: Math.random() * 80 + 10,
            y: Math.random() * 80 + 10,
          };
          return [...prev, newHacker];
        });
      }, 3000);

      // Remove hackers after 5 seconds
      const hackerRemover = setInterval(() => {
        setHackers(prev => prev.slice(1));
      }, 5000);

      return () => {
        clearInterval(timer);
        clearInterval(hackerSpawner);
        clearInterval(hackerRemover);
      };
    }
  }, [gameState]);

  useEffect(() => {
    // Check collision with hackers
    hackers.forEach(hacker => {
      const distance = Math.sqrt(
        Math.pow(packetPosition.x - hacker.x, 2) + 
        Math.pow(packetPosition.y - hacker.y, 2)
      );
      if (distance < 5) {
        setGameState('lost');
      }
    });

    // Check if reached target router
    routers.forEach(router => {
      if (router.ip === targetIP) {
        const distance = Math.sqrt(
          Math.pow(packetPosition.x - router.x, 2) + 
          Math.pow(packetPosition.y - router.y, 2)
        );
        if (distance < 8 && !router.connected) {
          setRouters(prev => prev.map(r => 
            r.id === router.id ? { ...r, connected: true } : r
          ));
          if (router.ip === targetIP) {
            setGameState('won');
            setScore(prev => prev + timeLeft * 10);
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 }
            });
          } else {
            setCurrentIP(router.ip);
            setScore(prev => prev + 50);
          }
        }
      }
    });
  }, [packetPosition, hackers, routers, targetIP, timeLeft]);

  const handleKeyPress = (e) => {
    if (gameState !== 'playing') return;

    const speed = 2;
    setPacketPosition(prev => {
      let newX = prev.x;
      let newY = prev.y;

      switch(e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          newY = Math.max(5, prev.y - speed);
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          newY = Math.min(95, prev.y + speed);
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          newX = Math.max(5, prev.x - speed);
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          newX = Math.min(95, prev.x + speed);
          break;
        default:
          return prev;
      }

      return { x: newX, y: newY };
    });
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameState]);

  const startGame = () => {
    setGameState('playing');
    setPacketPosition({ x: 50, y: 50 });
    setTimeLeft(30);
    setScore(0);
    setHackers([]);
    setRouters([
      { id: 1, x: 20, y: 30, ip: '192.168.1.1', connected: true },
      { id: 2, x: 50, y: 20, ip: '10.0.0.1', connected: false },
      { id: 3, x: 80, y: 40, ip: '172.16.0.1', connected: false },
      { id: 4, x: 60, y: 70, ip: '192.168.1.100', connected: false },
    ]);
  };

  const resetGame = () => {
    setGameState('start');
  };

  return (
    <div className="packet-delivery-game p-6 bg-slate-900 rounded-2xl">
      {/* Game Header */}
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          {isTurkish ? '📦 Paket Teslimat Oyunu' : '📦 Packet Delivery Run'}
        </h3>
        <p className="text-slate-300 mb-4">
          {isTurkish 
            ? 'Veri paketini router\'lar arasında yönlendirerek hedef IP adresine ulaştır! Hacker\'lardan kaçın!'
            : 'Navigate the data packet through routers to reach the target IP address! Avoid hackers!'}
        </p>
      </div>

      {/* Game Stats */}
      {gameState === 'playing' && (
        <div className="flex justify-center gap-6 mb-6">
          <div className="bg-slate-800 px-4 py-2 rounded-lg">
            <span className="text-slate-400 text-sm">{isTurkish ? 'Hedef IP' : 'Target IP'}: </span>
            <span className="text-green-400 font-mono font-bold">{targetIP}</span>
          </div>
          <div className="bg-slate-800 px-4 py-2 rounded-lg">
            <span className="text-slate-400 text-sm">{isTurkish ? 'Süre' : 'Time'}: </span>
            <span className={`font-bold text-xl ${timeLeft < 10 ? 'text-red-400' : 'text-yellow-400'}`}>
              {timeLeft}s
            </span>
          </div>
          <div className="bg-slate-800 px-4 py-2 rounded-lg">
            <span className="text-slate-400 text-sm">{isTurkish ? 'Puan' : 'Score'}: </span>
            <span className="text-blue-400 font-bold text-xl">{score}</span>
          </div>
        </div>
      )}

      {/* Game Area */}
      <div 
        ref={gameAreaRef}
        className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border-2 border-slate-700"
        style={{ height: '500px', width: '100%' }}
      >
        {gameState === 'start' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/90 rounded-xl"
          >
            <div className="text-6xl mb-4">🚚</div>
            <h4 className="text-2xl font-bold mb-4 text-white">
              {isTurkish ? 'Paket Teslimat Görevi' : 'Packet Delivery Mission'}
            </h4>
            <p className="text-slate-300 mb-6 text-center max-w-md">
              {isTurkish 
                ? 'Ok tuşları veya WASD ile paketi hareket ettir. Hedef IP adresine ulaş ve hacker\'lardan kaçın!'
                : 'Use arrow keys or WASD to move the packet. Reach the target IP address and avoid hackers!'}
            </p>
            <motion.button
              onClick={startGame}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-bold text-lg text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isTurkish ? '🎮 Oyunu Başlat' : '🎮 Start Game'}
            </motion.button>
          </motion.div>
        )}

        {gameState === 'playing' && (
          <>
            {/* Routers */}
            {routers.map(router => (
              <motion.div
                key={router.id}
                className={`absolute rounded-full border-4 ${
                  router.connected 
                    ? 'bg-green-500/30 border-green-500' 
                    : router.ip === targetIP
                    ? 'bg-yellow-500/30 border-yellow-500'
                    : 'bg-blue-500/30 border-blue-500'
                }`}
                style={{
                  left: `${router.x}%`,
                  top: `${router.y}%`,
                  width: '60px',
                  height: '60px',
                  transform: 'translate(-50%, -50%)'
                }}
                animate={router.ip === targetIP ? {
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl">📡</span>
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <span className="text-xs font-mono text-white bg-slate-900 px-2 py-1 rounded">
                    {router.ip}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Hackers */}
            {hackers.map(hacker => (
              <motion.div
                key={hacker.id}
                className="absolute rounded-full bg-red-500 border-2 border-red-700"
                style={{
                  left: `${hacker.x}%`,
                  top: `${hacker.y}%`,
                  width: '40px',
                  height: '40px',
                  transform: 'translate(-50%, -50%)'
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 360]
                }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl">👾</span>
                </div>
              </motion.div>
            ))}

            {/* Packet */}
            <motion.div
              className="absolute rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-white shadow-lg"
              style={{
                left: `${packetPosition.x}%`,
                top: `${packetPosition.y}%`,
                width: '50px',
                height: '50px',
                transform: 'translate(-50%, -50%)'
              }}
              animate={{
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl">📦</span>
              </div>
            </motion.div>
          </>
        )}

        {gameState === 'won' && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/95 rounded-xl"
          >
            <div className="text-6xl mb-4">🎉</div>
            <h4 className="text-3xl font-bold mb-4 text-green-400">
              {isTurkish ? 'Başarılı!' : 'Success!'}
            </h4>
            <p className="text-slate-300 mb-6">
              {isTurkish ? 'Paketi hedef IP adresine ulaştırdın!' : 'You delivered the packet to the target IP!'}
            </p>
            <p className="text-2xl font-bold text-yellow-400 mb-6">
              {isTurkish ? 'Puan' : 'Score'}: {score}
            </p>
            <motion.button
              onClick={resetGame}
              className="px-6 py-3 bg-green-600 rounded-lg font-bold text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isTurkish ? 'Tekrar Oyna' : 'Play Again'}
            </motion.button>
          </motion.div>
        )}

        {gameState === 'lost' && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/95 rounded-xl"
          >
            <div className="text-6xl mb-4">💥</div>
            <h4 className="text-3xl font-bold mb-4 text-red-400">
              {isTurkish ? 'Görev Başarısız!' : 'Mission Failed!'}
            </h4>
            <p className="text-slate-300 mb-6 text-center">
              {isTurkish 
                ? timeLeft === 0 
                  ? 'Süre doldu!' 
                  : 'Hacker tarafından yakalandın!'
                : timeLeft === 0
                ? 'Time\'s up!'
                : 'You were caught by a hacker!'}
            </p>
            <motion.button
              onClick={resetGame}
              className="px-6 py-3 bg-red-600 rounded-lg font-bold text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isTurkish ? 'Tekrar Dene' : 'Try Again'}
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Instructions */}
      {gameState === 'playing' && (
        <div className="mt-4 text-center text-slate-400 text-sm">
          {isTurkish 
            ? '💡 Ok tuşları veya WASD ile hareket et | Hedef: Sarı router\'a ulaş | Kırmızı hacker\'lardan kaçın'
            : '💡 Use arrow keys or WASD to move | Target: Reach yellow router | Avoid red hackers'}
        </div>
      )}
    </div>
  );
};

export default PacketDeliveryGame;

