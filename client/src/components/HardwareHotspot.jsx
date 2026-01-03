import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import soundManager from '../utils/soundEffects';

/**
 * HardwareHotspot - Interactive Motherboard/Case image with hotspots
 * Layout updated to match Module card UI (no full-screen modal)
 */
const HardwareHotspot = ({ isTurkish = true }) => {
  const [selectedPartId, setSelectedPartId] = useState(null);
  const [clickedParts, setClickedParts] = useState(() => new Set());

  const hardwareParts = useMemo(() => ([
    {
      id: 'cpu',
      name: isTurkish ? 'İşlemci (CPU)' : 'Processor (CPU)',
      description: isTurkish
        ? 'Ben bilgisayarın beyniyim! Hesaplamaları yaparım, hızını etkilerim. Çok çalışınca ısınırım; bu yüzden soğutucuya ihtiyaç duyarım.'
        : "I am the computer's brain! I do calculations and affect speed. I heat up when working, so I need cooling.",
      position: { top: 46, left: 67 }, // percent
      emoji: '🧠'
    },
    {
      id: 'motherboard',
      name: isTurkish ? 'Anakart' : 'Motherboard',
      description: isTurkish
        ? 'Ben bilgisayarın ana bağlantı merkeziyim! Tüm parçalar burada birleşir; veriler buradan geçer.'
        : 'I am the main connection hub! All parts connect here and data flows through me.',
      position: { top: 55, left: 52 },
      emoji: '🔌'
    },
    {
      id: 'ram',
      name: isTurkish ? 'RAM Bellek' : 'RAM Memory',
      description: isTurkish
        ? 'Ben geçici hafızayım! Bilgisayar açıkken hızlıca bilgi tutarım. Kapanınca içim boşalır.'
        : 'I am temporary memory! I hold data quickly while the computer is on. I clear when power is off.',
      position: { top: 58, left: 33 },
      emoji: '⚡'
    },
    {
      id: 'hdd',
      name: isTurkish ? 'Depolama (SSD/HDD)' : 'Storage (SSD/HDD)',
      description: isTurkish
        ? 'Ben kalıcı hafızayım! Dosyalar, fotoğraflar ve oyunlar bende durur. Bilgisayar kapansa da silinmem.'
        : "I am permanent storage! Files, photos, and games stay with me even when power is off.",
      position: { top: 80, left: 52 },
      emoji: '💾'
    },
    {
      id: 'gpu',
      name: isTurkish ? 'Ekran Kartı (GPU)' : 'Graphics Card (GPU)',
      description: isTurkish
        ? 'Ben görüntüleri oluştururum. Oyunlar ve grafik işleri için çok önemliyim!'
        : 'I create images. I am very important for gaming and graphics!',
      position: { top: 68, left: 24 },
      emoji: '🎮'
    },
    {
      id: 'fan',
      name: isTurkish ? 'Soğutucu / Fan' : 'Cooling Fan',
      description: isTurkish
        ? 'Ben soğuturum! İşlemci ve diğer parçaların serin kalmasına yardım ederim.'
        : 'I cool things down! I help the CPU and other parts stay cool.',
      position: { top: 38, left: 67 },
      emoji: '🌀'
    }
  ]), [isTurkish]);

  const selectedPart = hardwareParts.find(p => p.id === selectedPartId) || null;

  const handlePartClick = (part) => {
    setSelectedPartId(part.id);
    soundManager.playClick();

    if (!clickedParts.has(part.id)) {
      setClickedParts(prev => new Set([...prev, part.id]));
      soundManager.playCorrect();
      confetti({
        particleCount: 18,
        spread: 35,
        origin: { y: 0.65 },
      });
    }
  };

  const discoveredCount = clickedParts.size;
  const totalCount = hardwareParts.length;

  return (
    <div className="hh-root">
      {/* Top info strip (matches module look) */}
      <div className="hh-info">
        <div className="hh-tip">
          💡 {isTurkish
            ? 'Bilgisayar kasasının içindeki parçalara tıklayarak öğren!'
            : 'Click parts inside the computer to learn!'}
        </div>
        <div className="hh-progress">
          {isTurkish ? 'Keşfedilen' : 'Discovered'}: <strong>{discoveredCount}/{totalCount}</strong>
        </div>
      </div>

      {/* Image area */}
      <div className="hh-stage">
        <div className="hh-imageWrap">
          <img
            src="/images/hardware_motherboard.png"
            alt={isTurkish ? 'Bilgisayar Kasası' : 'Computer Case'}
            className="hh-image"
            draggable={false}
          />

          {hardwareParts.map((part) => {
            const discovered = clickedParts.has(part.id);
            const active = selectedPartId === part.id;

            return (
              <motion.button
                key={part.id}
                type="button"
                className={`hh-hotspot ${discovered ? 'is-discovered' : ''} ${active ? 'is-active' : ''}`}
                style={{ top: `${part.position.top}%`, left: `${part.position.left}%` }}
                onClick={() => handlePartClick(part)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                aria-label={part.name}
                title={part.name}
              >
                <span className="hh-emoji">{part.emoji}</span>
                <span className="hh-pulse" />
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Detail panel (instead of fullscreen modal) */}
      <div className="hh-detail">
        {selectedPart ? (
          <motion.div
            className="hh-card"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="hh-cardHeader">
              <div className="hh-cardTitle">
                <span className="hh-cardEmoji">{selectedPart.emoji}</span>
                <span>{selectedPart.name}</span>
              </div>

              {clickedParts.has(selectedPart.id) && (
                <span className="hh-badge">
                  ✓ {isTurkish ? 'Keşfedildi' : 'Discovered'}
                </span>
              )}
            </div>

            <p className="hh-cardDesc">{selectedPart.description}</p>

            <div className="hh-hintRow">
              <span className="hh-hintDot" />
              <span className="hh-hintText">
                {isTurkish
                  ? 'İpucu: Başka bir parçaya tıklayıp karşılaştır!'
                  : 'Tip: Click another part and compare!'}
              </span>
            </div>
          </motion.div>
        ) : (
          <div className="hh-empty">
            {isTurkish
              ? 'Bir parçaya tıklayınca açıklama burada görünecek.'
              : 'Click a part to see its explanation here.'}
          </div>
        )}
      </div>

      <style>{`
        .hh-root{
          width:100%;
        }

        /* top strip */
        .hh-info{
          background:#eef2ff;
          border-radius:14px;
          padding:14px 16px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:12px;
          margin-bottom:14px;
        }
        .hh-tip{
          color:#4f46e5;
          font-weight:600;
        }
        .hh-progress{
          color:#64748b;
          font-size:0.95rem;
          white-space:nowrap;
        }

        /* stage */
        .hh-stage{
          background:#eef2ff;
          border-radius:14px;
          padding:18px;
        }
        .hh-imageWrap{
          position:relative;
          background:linear-gradient(135deg,#1e293b 0%,#334155 100%);
          border-radius:12px;
          overflow:hidden;
          padding:18px;
          display:flex;
          align-items:center;
          justify-content:center;
          min-height:360px;
        }
        .hh-image{
          width:100%;
          max-width:760px;
          height:auto;
          object-fit:contain;
          user-select:none;
          pointer-events:none;
          border-radius:10px;
        }

        /* hotspots */
        .hh-hotspot{
          position:absolute;
          transform:translate(-50%,-50%);
          width:52px;
          height:52px;
          border-radius:999px;
          border:4px solid #4f46e5;
          background:#fff;
          cursor:pointer;
          display:flex;
          align-items:center;
          justify-content:center;
          box-shadow:0 10px 25px rgba(79,70,229,.35);
        }
        .hh-hotspot.is-discovered{
          border-color:#10b981;
          background:#d1fae5;
          box-shadow:0 10px 25px rgba(16,185,129,.25);
        }
        .hh-hotspot.is-active{
          outline:4px solid rgba(255,255,255,.8);
          outline-offset:2px;
        }
        .hh-emoji{
          font-size:1.6rem;
          position:relative;
          z-index:2;
        }
        .hh-pulse{
          position:absolute;
          inset:-2px;
          border-radius:999px;
          background:rgba(79,70,229,.25);
          animation:hhPulse 2s infinite;
          z-index:1;
        }
        .hh-hotspot.is-discovered .hh-pulse{
          background:rgba(16,185,129,.22);
        }
        @keyframes hhPulse{
          0%,100%{ transform:scale(1); opacity:.35; }
          50%{ transform:scale(1.45); opacity:0; }
        }

        /* detail */
        .hh-detail{
          margin-top:14px;
        }
        .hh-card{
          background:#fff;
          border-radius:14px;
          padding:16px;
          box-shadow:0 10px 25px rgba(0,0,0,.08);
          border:1px solid #e2e8f0;
        }
        .hh-cardHeader{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:12px;
          margin-bottom:8px;
        }
        .hh-cardTitle{
          display:flex;
          align-items:center;
          gap:10px;
          font-weight:800;
          color:#0f172a;
        }
        .hh-cardEmoji{
          font-size:1.6rem;
        }
        .hh-badge{
          background:#ecfdf5;
          color:#047857;
          border:1px solid #a7f3d0;
          padding:6px 10px;
          border-radius:999px;
          font-weight:700;
          font-size:.9rem;
          white-space:nowrap;
        }
        .hh-cardDesc{
          color:#334155;
          line-height:1.6;
          margin:0;
        }
        .hh-hintRow{
          display:flex;
          align-items:center;
          gap:8px;
          margin-top:10px;
          color:#64748b;
          font-size:.92rem;
        }
        .hh-hintDot{
          width:8px;
          height:8px;
          border-radius:999px;
          background:#4f46e5;
          opacity:.6;
        }
        .hh-empty{
          background:#fff;
          border:1px dashed #cbd5e1;
          color:#64748b;
          border-radius:14px;
          padding:16px;
          text-align:center;
        }

        @media (max-width:768px){
          .hh-info{
            flex-direction:column;
            align-items:flex-start;
          }
          .hh-imageWrap{
            min-height:280px;
            padding:14px;
          }
          .hh-hotspot{
            width:44px;
            height:44px;
          }
          .hh-emoji{ font-size:1.35rem; }
        }
      `}</style>
    </div>
  );
};

export default HardwareHotspot;
