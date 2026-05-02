import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/cyber-crisis.css';

/**
 * CyberCrisisSimulation - Gelişmiş Siber Kriz Simülasyonu
 * Ortaokul öğrencileri için etkileşimli, gerilimli oyun deneyimi
 * 
 * Aşamalar:
 * 1. Boot - Sistem başlatma
 * 2. Desktop - Normal masaüstü (sakin dönem)
 * 3. Infected - Saldırı başlıyor (Detect aşaması)
 * 4. Investigating - İpuçları bulma
 * 5. Cleaning - Müdahale (Respond aşaması)
 * 6. Won - Başarılı kurtarma
 * 7. Lost - Sistem çöküşü
 */

const CyberCrisisSimulation = ({ isTurkish = true }) => {
  // ============================================================
  // OYUN DURUMU (STATE)
  // ============================================================
  const [phase, setPhase] = useState('boot');
  const [systemIntegrity, setSystemIntegrity] = useState(100);
  const [timeLeft, setTimeLeft] = useState(90);
  const [cluesFound, setCluesFound] = useState({
    fakeUrl: false,
    cpuUsage: false,
    typo: false,
    processName: false
  });
  const [isInternetConnected, setInternetConnected] = useState(true);
  const [activeTool, setActiveTool] = useState('cursor');
  const [feedback, setFeedback] = useState('');
  const [glitchIntensity, setGlitchIntensity] = useState(0);
  const [windowShake, setWindowShake] = useState(false);
  const [score, setScore] = useState(0);
  const feedbackTimeoutRef = useRef(null);

  // ============================================================
  // ZAMANLAYICI VE ZORLUK MOTORU
  // ============================================================
  useEffect(() => {
    let timer;
    
    if (phase === 'infected' || phase === 'investigating') {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setPhase('lost');
            return 0;
          }
          return prev - 1;
        });

        // İnternet bağlıysa hasar artar
        if (isInternetConnected) {
          setSystemIntegrity(prev => {
            const newValue = Math.max(0, prev - 0.8);
            // Zorluk arttıkça glitch efekti artar
            setGlitchIntensity(Math.min(10, (100 - newValue) / 10));
            return newValue;
          });
        }

        // Zaman azaldıkça sallantı artar
        if (timeLeft < 30) {
          setWindowShake(true);
          setTimeout(() => setWindowShake(false), 200);
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [phase, isInternetConnected, timeLeft]);

  // ============================================================
  // GERİ BİLDİRİM YÖNETİMİ
  // ============================================================
  const showFeedback = (message, duration = 3000) => {
    setFeedback(message);
    if (feedbackTimeoutRef.current) {
      clearTimeout(feedbackTimeoutRef.current);
    }
    feedbackTimeoutRef.current = setTimeout(() => {
      setFeedback('');
    }, duration);
  };

  // ============================================================
  // OYUN FONKSİYONLARI
  // ============================================================

  const bootSystem = () => {
    setPhase('desktop');
    setSystemIntegrity(100);
    setTimeLeft(10); // 10 seconds challenge
    setCluesFound({ fakeUrl: false, cpuUsage: false, typo: false, processName: false });
    setInternetConnected(true);
    setScore(0);
    setGlitchIntensity(0);
    
    setTimeout(() => {
      setPhase('infected');
      showFeedback(
        isTurkish
          ? '⚠️ UYARI: Şüpheli aktivite tespit edildi!'
          : '⚠️ WARNING: Suspicious activity detected!'
      );
    }, 2500);
  };

  const toggleTool = (tool) => {
    setActiveTool(tool);
    showFeedback(
      tool === 'magnifier'
        ? (isTurkish ? '🔍 İnceleme Modu Aktif' : '🔍 Inspection Mode Active')
        : (isTurkish ? '👆 Normal Mod' : '👆 Normal Mode'),
      1500
    );
  };

  // Dedektiflik Mekaniği (Detect)
  const inspectObject = (type) => {
    if (activeTool !== 'magnifier') {
      showFeedback(
        isTurkish
          ? '🔍 Önce İnceleme Modunu Aç!'
          : '🔍 First, activate Inspection Mode!'
      );
      return;
    }

    if (cluesFound[type]) {
      showFeedback(
        isTurkish
          ? '✅ Bu ipucu zaten bulundu.'
          : '✅ This clue already found.'
      );
      return;
    }

    const newClues = { ...cluesFound, [type]: true };
    setCluesFound(newClues);

    let message = '';
    let points = 15;

    switch (type) {
      case 'fakeUrl':
        message = isTurkish
          ? '🔍 BULUNDU: URL sahte! "g0ogle.com" (sıfır ile) yazıyor!'
          : '🔍 FOUND: Fake URL! It says "g0ogle.com" (with zero)!';
        break;
      case 'cpuUsage':
        message = isTurkish
          ? '🔍 BULUNDU: CPU %99! Gizli bir yazılım çalışıyor!'
          : '🔍 FOUND: CPU 99%! Hidden process running!';
        break;
      case 'typo':
        message = isTurkish
          ? '🔍 BULUNDU: Yazım hatası! "Odül" yerine "Odun" yazılmış!'
          : '🔍 FOUND: Typo! "Prize" misspelled as "Priz"!';
        break;
      case 'processName':
        message = isTurkish
          ? '🔍 BULUNDU: İşlem adı "miner.exe" - Kripto Para Madencisi!'
          : '🔍 FOUND: Process "miner.exe" - Crypto Miner!';
        break;
      default:
        break;
    }

    showFeedback(message);
    setSystemIntegrity(prev => Math.min(100, prev + 5));
    setScore(prev => prev + points);
  };

  // Müdahale Mekaniği (Respond)
  const disconnectInternet = () => {
    if (!isInternetConnected) {
      showFeedback(
        isTurkish
          ? '⚠️ İnternet zaten kesik.'
          : '⚠️ Internet already disconnected.'
      );
      return;
    }

    setInternetConnected(false);
    setScore(prev => prev + 20);
    showFeedback(
      isTurkish
        ? '🔌 İnternet kesildi! Virüsün yayılması durdu.'
        : '🔌 Internet disconnected! Spread stopped.'
    );
  };

  const runAntivirus = () => {
    const foundCount = Object.values(cluesFound).filter(Boolean).length;

    if (isInternetConnected) {
      setSystemIntegrity(prev => Math.max(0, prev - 20));
      showFeedback(
        isTurkish
          ? '❌ HATA: Önce interneti kesmelisin! Virüs veri göndermeye devam ediyor.'
          : '❌ ERROR: Disconnect internet first! Virus still sending data.'
      );
      return;
    }

    if (foundCount < 2) {
      setSystemIntegrity(prev => Math.max(0, prev - 10));
      showFeedback(
        isTurkish
          ? '⚠️ Yetersiz Kanıt: En az 2 ipucu bulmalısın.'
          : '⚠️ Insufficient Evidence: Find at least 2 clues.'
      );
      return;
    }

    // Kazanma koşulu
    setPhase('won');
    setScore(prev => prev + 50);
  };

  const clickFakeButton = () => {
    setSystemIntegrity(prev => Math.max(0, prev - 30));
    setWindowShake(true);
    setTimeout(() => setWindowShake(false), 300);
    showFeedback(
      isTurkish
        ? '❌ TUZAK! "Kapat" butonu sahteydi. Yeni pencereler açıldı!'
        : '❌ TRAP! The "Close" button was fake. More windows opened!'
    );
  };

  const clickClaimButton = () => {
    setSystemIntegrity(prev => Math.max(0, prev - 25));
    setWindowShake(true);
    setTimeout(() => setWindowShake(false), 300);
    showFeedback(
      isTurkish
        ? '❌ TUZAK! Ödülü talep ettiniz. Bilgileriniz çalındı!'
        : '❌ TRAP! You claimed the prize. Your data was stolen!'
    );
  };

  // ============================================================
  // RENDER BİLEŞENLERİ
  // ============================================================

  return (
    <div className="cyber-crisis-container">
      {/* BOOT EKRANI */}
      {phase === 'boot' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="boot-screen"
        >
          <div className="boot-content">
            <h1 className="boot-title">CyberOS v3.0</h1>
            <div className="boot-animation">
              <div className="boot-bar"></div>
            </div>
            <p className="boot-text">
              {isTurkish ? 'Sistem başlatılıyor...' : 'System initializing...'}
            </p>
            <button
              onClick={bootSystem}
              className="boot-button"
            >
              {isTurkish ? '▶ SİSTEMİ BAŞLAT' : '▶ BOOT SYSTEM'}
            </button>
          </div>
        </motion.div>
      )}

      {/* MASAÜSTÜ & OYUN ALANI */}
      {(phase === 'desktop' || phase === 'infected' || phase === 'investigating') && (
        <div className={`desktop-environment ${windowShake ? 'shake' : ''}`}>
          {/* GLITCH EFEKTI */}
          {glitchIntensity > 0 && (
            <div
              className="glitch-effect"
              style={{ opacity: glitchIntensity / 10 }}
            ></div>
          )}

          {/* HUD (Head-Up Display) */}
          <div className="hud-panel">
            <div className="hud-item health">
              <span className="hud-icon">❤️</span>
              <span className="hud-label">
                {isTurkish ? 'Sistem Sağlığı' : 'System Health'}
              </span>
              <div className="health-bar">
                <div
                  className="health-fill"
                  style={{
                    width: `${systemIntegrity}%`,
                    backgroundColor:
                      systemIntegrity > 50
                        ? '#27ae60'
                        : systemIntegrity > 25
                        ? '#f39c12'
                        : '#e74c3c'
                  }}
                ></div>
              </div>
              <span className="hud-value">{Math.floor(systemIntegrity)}%</span>
            </div>

            <div className={`hud-item connection ${isInternetConnected ? 'online' : 'offline'}`}>
              <span className="hud-icon">🌐</span>
              <span className="hud-label">
                {isInternetConnected
                  ? (isTurkish ? 'BAĞLI' : 'ONLINE')
                  : (isTurkish ? 'KESİLDİ' : 'OFFLINE')}
              </span>
            </div>

            <div className="hud-item timer">
              <span className="hud-icon">⏱️</span>
              <span className={`hud-value ${timeLeft < 15 ? 'critical' : ''}`}>
                {timeLeft}s
              </span>
            </div>

            <div className="hud-item score">
              <span className="hud-icon">⭐</span>
              <span className="hud-value">{score}</span>
            </div>
          </div>

          {/* GERİ BİLDİRİM BALONU */}
          <AnimatePresence>
            {feedback && (
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                className="feedback-balloon"
              >
                {feedback}
              </motion.div>
            )}
          </AnimatePresence>

          {/* ZARARLI YAZILIM PENCERESİ */}
          {phase !== 'desktop' && (
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              className="malware-window"
            >
              <div className="window-titlebar">
                <span className="window-title">!!! WINNER !!!</span>
                <button
                  onClick={clickFakeButton}
                  className="fake-close-btn"
                  title={isTurkish ? 'Bu butona tıklama!' : 'Don\'t click this!'}
                >
                  ✕
                </button>
              </div>

              <div className="window-content">
                <h2 className="alert-title">
                  {isTurkish ? '🎉 TEBRİKLER! 🎉' : '🎉 CONGRATULATIONS! 🎉'}
                </h2>
                <p className="alert-subtitle">
                  {isTurkish
                    ? 'iPhone 15 KAZANDINIZ! Hemen tıklayın!'
                    : 'You WON an iPhone 15! Click now!'}
                </p>
                <div className="phone-image" style={{ fontSize: '4rem', textAlign: 'center', margin: '1rem 0' }}>
                  📱
                </div>

                {/* İPUCU 1: Sahte URL */}
                <div
                  className={`clue-box url-clue ${cluesFound.fakeUrl ? 'found' : ''}`}
                  onClick={() => inspectObject('fakeUrl')}
                  role="button"
                  tabIndex={0}
                >
                  <small className="clue-label">
                    {isTurkish ? 'Web Adresi:' : 'Web Address:'}
                  </small>
                  <span className="fake-url">
                    http://www.g0ogle-rewards.xyz
                  </span>
                  {cluesFound.fakeUrl && (
                    <span className="clue-found">⚠️ SAHTE URL</span>
                  )}
                </div>

                {/* İPUCU 2: Yazım Hatası */}
                <div
                  className={`clue-box typo-clue ${cluesFound.typo ? 'found' : ''}`}
                  onClick={() => inspectObject('typo')}
                  role="button"
                  tabIndex={0}
                >
                  <p className="typo-text">
                    {isTurkish
                      ? '"Hemen odülünü almak için tikla!"'
                      : '"Clik here for your prize!"'}
                  </p>
                  {cluesFound.typo && (
                    <span className="clue-found">⚠️ YAZIM HATASI</span>
                  )}
                </div>

                {/* BUTONLAR */}
                <div className="button-group">
                  <button
                    onClick={clickClaimButton}
                    className="claim-button"
                  >
                    {isTurkish ? '🎁 ÖDÜLÜ AL' : '🎁 CLAIM PRIZE'}
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* SİSTEM MONİTÖRÜ */}
          <motion.div
            className={`system-monitor ${cluesFound.cpuUsage ? 'found' : ''}`}
            onClick={() => inspectObject('cpuUsage')}
            role="button"
            tabIndex={0}
          >
            <div className="monitor-header">
              {isTurkish ? 'Sistem İzleyici' : 'System Monitor'}
            </div>
            <div className="monitor-content">
              <div className="monitor-line">
                <span>CPU:</span>
                <div className="monitor-bar">
                  <div className="monitor-fill" style={{ width: '99%' }}></div>
                </div>
                <span>99%</span>
              </div>
              <div className="monitor-line">
                <span>RAM:</span>
                <div className="monitor-bar">
                  <div className="monitor-fill" style={{ width: '85%' }}></div>
                </div>
                <span>85%</span>
              </div>
              <div className="monitor-process">
                <div className="process-item">
                  <span
                    className={`process-name ${cluesFound.processName ? 'found' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      inspectObject('processName');
                    }}
                  >
                    miner.exe
                  </span>
                  <span className="process-status">🔴 Yüksek Kullanım</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ARAÇ ÇUBUĞU */}
          <div className="taskbar">
            <div className="tool-group">
              <button
                onClick={() => toggleTool('cursor')}
                className={`tool-button ${activeTool === 'cursor' ? 'active' : ''}`}
              >
                👆 {isTurkish ? 'Seç' : 'Select'}
              </button>
              <button
                onClick={() => toggleTool('magnifier')}
                className={`tool-button ${activeTool === 'magnifier' ? 'active' : ''}`}
              >
                🔍 {isTurkish ? 'İncele' : 'Inspect'}
              </button>
            </div>

            <div className="separator"></div>

            <div className="action-group">
              <button
                onClick={disconnectInternet}
                disabled={!isInternetConnected}
                className={`action-button disconnect ${!isInternetConnected ? 'disabled' : ''}`}
              >
                {isInternetConnected
                  ? '🔌 ' + (isTurkish ? 'KABLOYU ÇEK' : 'PULL PLUG')
                  : '✅ ' + (isTurkish ? 'KESİLDİ' : 'DISCONNECTED')}
              </button>
              <button
                onClick={runAntivirus}
                className="action-button antivirus"
              >
                🛡️ {isTurkish ? 'ANTİVİRÜS TARAMA' : 'ANTIVIRUS SCAN'}
              </button>
            </div>
          </div>

          {/* İPUÇLARI GÖSTERGESI */}
          <div className="clues-indicator">
            <span className="clues-label">
              {isTurkish ? 'İpuçları:' : 'Clues:'}
            </span>
            <div className="clues-dots">
              {Object.entries(cluesFound).map(([key, found]) => (
                <div
                  key={key}
                  className={`clue-dot ${found ? 'found' : ''}`}
                  title={key}
                ></div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* KAYBETME EKRANI (BSOD) */}
      {phase === 'lost' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bsod-screen"
        >
          <div className="bsod-content">
            <h1 className="bsod-emoji">:(</h1>
            <h2 className="bsod-title">
              {isTurkish
                ? 'Bilgisayarınız bir sorunla karşılaştı.'
                : 'Your PC ran into a problem.'}
            </h2>
            <p className="bsod-code">
              {isTurkish ? 'HATA KODU: ' : 'ERROR CODE: '}
              <strong>SIBER_DIKKATSIZLIK</strong>
            </p>
            <p className="bsod-reason">
              {isTurkish ? 'Sebep: ' : 'Reason: '}
              {timeLeft === 0
                ? (isTurkish ? 'Zaman doldu.' : 'Time out.')
                : (isTurkish ? 'Sistem çöktü.' : 'System crash.')}
            </p>
            <p className="bsod-message">
              {isTurkish
                ? 'İnternet bağlantısını kesmeyi unuttuğunuz için virüs tüm sistemi enfekte etti.'
                : 'Because you forgot to disconnect the internet, the virus infected the entire system.'}
            </p>
            <button
              onClick={bootSystem}
              className="restart-button"
            >
              {isTurkish ? '🔄 SİSTEMİ YENİDEN BAŞLAT' : '🔄 RESTART SYSTEM'}
            </button>
          </div>
        </motion.div>
      )}

      {/* KAZANMA EKRANI */}
      {phase === 'won' && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="victory-screen"
        >
          <div className="victory-content">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity }}
              className="victory-icon"
            >
              🛡️
            </motion.div>
            <h1 className="victory-title">
              {isTurkish ? '🎯 GÖREV BAŞARILI! 🎯' : '🎯 MISSION ACCOMPLISHED! 🎯'}
            </h1>
            <p className="victory-message">
              {isTurkish
                ? 'Mükemmel bir siber dedektiflik örneği! İpuçlarını buldun, interneti keserek yayılmayı önledin ve tehdidi temizledin.'
                : 'Excellent cyber detective work! You found the clues, disconnected to stop the spread, and purged the threat.'}
            </p>

            <div className="operation-report">
              <h3>{isTurkish ? '📋 Operasyon Raporu' : '📋 Operation Report'}</h3>
              <ul className="report-list">
                <li className={cluesFound.fakeUrl ? 'completed' : ''}>
                  {cluesFound.fakeUrl ? '✅' : '❌'} {isTurkish ? 'Sahte URL Tespit Edildi' : 'Fake URL Detected'}
                </li>
                <li className={cluesFound.cpuUsage ? 'completed' : ''}>
                  {cluesFound.cpuUsage ? '✅' : '❌'} {isTurkish ? 'Anormal CPU Kullanımı Fark Edildi' : 'Abnormal CPU Usage Spotted'}
                </li>
                <li className={!isInternetConnected ? 'completed' : ''}>
                  {!isInternetConnected ? '✅' : '❌'} {isTurkish ? 'Bağlantı Zamanında Kesildi' : 'Connection Cut in Time'}
                </li>
                <li className={cluesFound.typo ? 'completed' : ''}>
                  {cluesFound.typo ? '✅' : '❌'} {isTurkish ? 'Yazım Hatası Fark Edildi' : 'Typo Spotted'}
                </li>
              </ul>
            </div>

            <div className="final-score">
              <h3>{isTurkish ? 'Toplam Puan' : 'Total Score'}</h3>
              <div className="score-value">{score}</div>
            </div>

            <button
              onClick={bootSystem}
              className="restart-button"
            >
              {isTurkish ? '🔄 YENİDEN OYNA' : '🔄 PLAY AGAIN'}
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CyberCrisisSimulation;
