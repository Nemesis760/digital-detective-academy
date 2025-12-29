import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// Styles imported in index.css

const LoadingScreen = ({ onComplete, isTurkish }) => {
  const [progress, setProgress] = useState(0);
  const [tip, setTip] = useState('');

  const tips = {
    tr: [
      "Güçlü bir şifre en az 8 karakterden oluşmalı ve büyük/küçük harf, rakam, sembol içermelidir.",
      "İnternette paylaştığın her şey kalıcıdır. Silinse bile bir kopyası kalabilir.",
      "Tanımadığın kişilerden gelen arkadaşlık isteklerini kabul etme.",
      "Konum bilgilerini herkesle paylaşma, sadece güvendiğin kişilerle paylaş.",
      "İki faktörlü kimlik doğrulama (2FA) hesabını ekstra güvende tutar.",
      "Ortak kullanılan bilgisayarlarda 'Beni Hatırla' seçeneğini asla işaretleme.",
      "Şüpheli bağlantılara tıklama, kimlik avı tuzağı olabilir.",
      "Gizlilik ayarlarını düzenli olarak kontrol et.",
      "Başkalarının fotoğraflarını izinsiz paylaşma.",
      "Dijital ayak izin, gelecekteki iş veya okul başvurularını etkileyebilir."
    ],
    en: [
      "A strong password must be at least 8 characters long and include upper/lowercase letters, numbers, and symbols.",
      "Everything you share online is permanent. Even if deleted, a copy may remain.",
      "Do not accept friend requests from strangers.",
      "Do not share your location with everyone, only with people you trust.",
      "Two-factor authentication (2FA) keeps your account extra safe.",
      "Never check 'Remember Me' on public computers.",
      "Do not click on suspicious links, it could be a phishing trap.",
      "Check your privacy settings regularly.",
      "Do not share others' photos without permission.",
      "Your digital footprint can affect future job or school applications."
    ]
  };

  useEffect(() => {
    // Rastgele ipucu seç
    const currentTips = isTurkish ? tips.tr : tips.en;
    const randomTip = currentTips[Math.floor(Math.random() * currentTips.length)];
    setTip(randomTip);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Wait a bit before finishing
          return 100;
        }
        // Random increment for realistic effect
        const increment = Math.random() * 15;
        return Math.min(prev + increment, 100);
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onComplete, isTurkish]);

  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-content">
        <motion.div 
          className="loading-icon"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity }
          }}
        >
          🚀
        </motion.div>
        
        <h2 className="loading-title">
          {isTurkish ? 'Modül Yükleniyor...' : 'Loading Module...'}
        </h2>
        
        <div className="loading-bar-container">
          <motion.div 
            className="loading-bar-fill"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="loading-percentage">{Math.round(progress)}%</p>
        
        <motion.div 
          className="loading-tip-container"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span className="tip-label">{isTurkish ? '💡 İPUCU:' : '💡 TIP:'}</span>
          <p className="loading-tip">{tip}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
