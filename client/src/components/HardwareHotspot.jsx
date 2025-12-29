import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import soundManager from '../utils/soundEffects';

/**
 * HardwareHotspot - Interactive Computer Case
 * Students click on hardware parts to learn about them
 */

const HardwareHotspot = ({ isTurkish = true }) => {
  const [selectedPart, setSelectedPart] = useState(null);
  const [clickedParts, setClickedParts] = useState(new Set());

  const hardwareParts = [
    {
      id: 'cpu',
      name: isTurkish ? 'İşlemci (CPU)' : 'Processor (CPU)',
      description: isTurkish 
        ? 'Ben bilgisayarın beyniyim! Tüm hesaplamaları yaparım ve bilgisayarın hızını belirlerim. Çok çalıştığım için ısınırım, bu yüzden üzerimde bir fan var.'
        : 'I am the brain of the computer! I perform all calculations and determine the computer\'s speed. I heat up because I work hard, so I have a fan on me.',
      position: { top: '45%', left: '65%' },
      emoji: '🧠',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'motherboard',
      name: isTurkish ? 'Anakart' : 'Motherboard',
      description: isTurkish
        ? 'Ben bilgisayarın iskeletiyim! Tüm parçaları birbirine bağlarım. Olmadan hiçbir şey çalışmaz.'
        : 'I am the skeleton of the computer! I connect all parts together. Nothing works without me.',
      position: { top: '50%', left: '50%' },
      emoji: '🔌',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ram',
      name: isTurkish ? 'RAM Bellek' : 'RAM Memory',
      description: isTurkish
        ? 'Ben geçici hafızayım! Bilgisayar açıkken bilgileri tutarım ama elektrik gidince her şey silinir. Hızlı çalışmayı sağlarım.'
        : 'I am temporary memory! I hold information while the computer is on, but everything is deleted when power goes out. I ensure fast operation.',
      position: { top: '50%', left: '35%' },
      emoji: '⚡',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'hdd',
      name: isTurkish ? 'Sabit Disk / SSD' : 'Hard Drive / SSD',
      description: isTurkish
        ? 'Ben kalıcı hafızayım! Dosyalarınızı, fotoğraflarınızı ve oyunlarınızı burada saklarım. Elektrik gitse bile silinmez.'
        : 'I am permanent memory! I store your files, photos, and games here. Not deleted even if power goes out.',
      position: { top: '75%', left: '50%' },
      emoji: '💾',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'gpu',
      name: isTurkish ? 'Ekran Kartı (GPU)' : 'Graphics Card (GPU)',
      description: isTurkish
        ? 'Ben görüntüleri oluştururum ve ekrana gönderirim. Oyunlar için çok önemliyim!'
        : 'I create images and send them to the display. I am very important for games!',
      position: { top: '60%', left: '25%' },
      emoji: '🎮',
      color: 'from-red-500 to-rose-500'
    },
    {
      id: 'fan',
      name: isTurkish ? 'Soğutucu Fan' : 'Cooling Fan',
      description: isTurkish
        ? 'Ben bilgisayarı soğuturum! İşlemci çok ısındığı için onu serin tutmam gerekir.'
        : 'I cool the computer! The processor gets very hot, so I need to keep it cool.',
      position: { top: '35%', left: '65%' },
      emoji: '🌀',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const handlePartClick = (part) => {
    setSelectedPart(part);
    soundManager.playClick();
    if (!clickedParts.has(part.id)) {
      setClickedParts(prev => new Set([...prev, part.id]));
      // Small confetti for first click
      soundManager.playCorrect();
      confetti({
        particleCount: 20,
        spread: 30,
        origin: { y: 0.6 },
        colors: ['#10b981', '#059669', '#34d399']
      });
    }
  };

  const handleClose = () => {
    setSelectedPart(null);
  };

  return (
    <div className="hardware-hotspot-container">
      <div className="hotspot-instructions">
        <p className="instruction-text">
          {isTurkish 
            ? '💡 Bilgisayar kasasının içindeki parçalara tıklayarak öğren!'
            : '💡 Click on the parts inside the computer case to learn!'}
        </p>
        <p className="progress-text">
          {isTurkish 
            ? `Keşfedilen: ${clickedParts.size}/${hardwareParts.length} parça`
            : `Discovered: ${clickedParts.size}/${hardwareParts.length} parts`}
        </p>
      </div>

      <div className="computer-case-wrapper">
        <div className="computer-case-image">
          <img 
            src="/images/hardware_motherboard.png" 
            alt={isTurkish ? 'Bilgisayar Kasası' : 'Computer Case'}
            className="case-bg"
          />
          
          {/* Interactive Hotspots */}
          {hardwareParts.map((part) => (
            <motion.button
              key={part.id}
              className={`hotspot-button ${clickedParts.has(part.id) ? 'discovered' : ''}`}
              style={part.position}
              onClick={() => handlePartClick(part)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: part.id === 'cpu' ? 0.1 : part.id === 'motherboard' ? 0.2 : 0.3 }}
            >
              <span className="hotspot-emoji">{part.emoji}</span>
              <span className="hotspot-pulse"></span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Part Information Modal */}
      <AnimatePresence>
        {selectedPart && (
          <motion.div
            className="part-info-modal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onClick={handleClose}
          >
            <motion.div
              className={`part-info-card bg-gradient-to-br ${selectedPart.color}`}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              <button className="close-modal-btn" onClick={handleClose}>
                ✕
              </button>
              <div className="part-info-header">
                <span className="part-emoji-large">{selectedPart.emoji}</span>
                <h3>{selectedPart.name}</h3>
              </div>
              <p className="part-description">{selectedPart.description}</p>
              {clickedParts.has(selectedPart.id) && (
                <motion.div
                  className="discovered-badge"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  ✓ {isTurkish ? 'Keşfedildi!' : 'Discovered!'}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .hardware-hotspot-container {
          width: 100%;
          padding: 2rem;
          background: linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%);
          border-radius: 16px;
          min-height: 500px;
        }

        .hotspot-instructions {
          text-align: center;
          margin-bottom: 2rem;
        }

        .instruction-text {
          font-size: 1.2rem;
          font-weight: 600;
          color: #4f46e5;
          margin-bottom: 0.5rem;
        }

        .progress-text {
          font-size: 0.9rem;
          color: #64748b;
        }

        .computer-case-wrapper {
          position: relative;
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .computer-case-image {
          position: relative;
          width: 100%;
          height: 400px;
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          border-radius: 8px;
          overflow: hidden;
        }

        .case-bg {
          width: 100%;
          height: 100%;
          object-fit: contain;
          opacity: 1;
          position: relative;
          z-index: 1;
        }

        .hotspot-button {
          position: absolute;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 1);
          border: 5px solid #4f46e5;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 25px rgba(79, 70, 229, 0.8), 0 0 0 4px rgba(255, 255, 255, 1), inset 0 0 20px rgba(79, 70, 229, 0.2);
          z-index: 100;
          transition: all 0.3s ease;
          transform: translate(-50%, -50%);
        }

        .hotspot-button:hover {
          transform: translate(-50%, -50%) scale(1.3);
          box-shadow: 0 8px 30px rgba(79, 70, 229, 1), 0 0 0 5px rgba(255, 255, 255, 1);
          border-width: 6px;
        }

        .hotspot-button.discovered {
          border-color: #10b981;
          background: #d1fae5;
        }

        .hotspot-emoji {
          font-size: 2rem;
          z-index: 2;
          position: relative;
        }

        .hotspot-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #4f46e5;
          opacity: 0.7;
          animation: pulse 2s infinite;
          z-index: -1;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .part-info-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(4px);
        }

        .part-info-card {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          max-width: 500px;
          width: 90%;
          position: relative;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .close-modal-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(0, 0, 0, 0.1);
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1.2rem;
          color: #64748b;
          transition: all 0.2s;
        }

        .close-modal-btn:hover {
          background: rgba(0, 0, 0, 0.2);
          transform: rotate(90deg);
        }

        .part-info-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .part-emoji-large {
          font-size: 3rem;
        }

        .part-info-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin: 0;
        }

        .part-description {
          font-size: 1.1rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.95);
          margin: 0;
        }

        .discovered-badge {
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          color: white;
          font-weight: 600;
          text-align: center;
        }

        @media (max-width: 768px) {
          .hardware-hotspot-container {
            padding: 1rem;
          }

          .computer-case-wrapper {
            padding: 1rem;
          }

          .computer-case-image {
            height: 300px;
          }

          .hotspot-button {
            width: 50px;
            height: 50px;
          }

          .hotspot-emoji {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HardwareHotspot;

