import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

/**
 * Sidebar - Sağ Tarafta Açılır/Kapanır Yan Panel
 * Modüllere hızlı erişim, ayarlar, bilgiler
 */

const Sidebar = () => {
  const { isTurkish, toggleLanguage } = useLanguage();
  const { theme, toggleTheme, switchable } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const menuItems = isTurkish ? [
    { icon: '🏠', label: 'Ana Sayfa', path: '/' },
    { icon: '📚', label: 'Bilgisayar Dünyasını Keşfediyorum', subtitle: 'Bilgisayar Temelleri', path: '/module1' },
    { icon: '🔗', label: 'Bilgisayar Ağları ve Dijital İletişim', subtitle: 'Ağlar ve Dijital İletişim', path: '/module2' },
    { icon: '🌐', label: 'Dijital Ayak İzi ve Çevrimiçi Gizlilik', subtitle: 'Dijital Ayak İzi ve Gizlilik', path: '/module3' },
    { icon: '🛡️', label: 'Şifre Güvenliği ve Hesap Koruma', subtitle: 'Şifre ve Hesap Güvenliği', path: '/module4' },
    { icon: '🔒', label: 'Dijital Güvenlik ve Bilinçli Teknoloji Kullanımı', subtitle: 'Dijital Güvenlik', path: '/module5' },
    { icon: '⚡', label: 'Dijital Dedektif', subtitle: 'Olay Yeri İnceleme', path: '/module6' },
  ] : [
    { icon: '🏠', label: 'Home', path: '/' },
    { icon: '📚', label: 'Exploring the Computer World', subtitle: 'Computer Basics', path: '/module1' },
    { icon: '🔗', label: 'Computer Networks & Digital Communication', subtitle: 'Networks & Digital Communication', path: '/module2' },
    { icon: '🌐', label: 'Digital Footprint & Online Privacy', subtitle: 'Digital Footprint & Privacy', path: '/module3' },
    { icon: '🛡️', label: 'Password Security & Account Protection', subtitle: 'Password & Account Security', path: '/module4' },
    { icon: '🔒', label: 'Digital Security & Responsible Technology Use', subtitle: 'Digital Security', path: '/module5' },
    { icon: '⚡', label: 'Digital Detective', subtitle: 'Crime Scene Investigation', path: '/module6' },
  ];

  const infoItems = isTurkish ? [
    { icon: '📖', label: 'Kurulum Kılavuzu', action: () => alert('Kurulum Kılavuzu: npm install && npm run dev') },
    { icon: '❓', label: 'Sıkça Sorulan Sorular', action: () => alert('SSS: Modüller nasıl kullanılır?') },
    { icon: '📞', label: 'İletişim', action: () => alert('E-posta: info@digitalsecurity.edu') },
  ] : [
    { icon: '📖', label: 'Installation Guide', action: () => alert('Installation: npm install && npm run dev') },
    { icon: '❓', label: 'FAQ', action: () => alert('FAQ: How to use modules?') },
    { icon: '📞', label: 'Contact', action: () => alert('Email: info@digitalsecurity.edu') },
  ];

  return (
    <>
      {/* TOGGLE BUTTON */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="sidebar-toggle"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title={isOpen ? (isTurkish ? 'Kapat' : 'Close') : (isTurkish ? 'Aç' : 'Open')}
      >
        <span className="toggle-icon">{isOpen ? '✕' : '☰'}</span>
      </motion.button>

      {/* BACKDROP */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="sidebar-backdrop"
          />
        )}
      </AnimatePresence>

      {/* SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 350 }}
            animate={{ x: 0 }}
            exit={{ x: 350 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="sidebar"
          >
            {/* HEADER */}
            <div className="sidebar-header">
              <h2>{isTurkish ? '📋 Menü' : '📋 Menu'}</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="close-btn"
              >
                ✕
              </button>
            </div>

            {/* DIVIDER */}
            <div className="sidebar-divider"></div>

            {/* NAVIGATION MENU */}
            <nav className="sidebar-nav">
              <h3>{isTurkish ? '🎓 Modüller' : '🎓 Modules'}</h3>
              <div className="nav-items">
                {menuItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link href={item.path}>
                      <a
                        className={`nav-item ${location === item.path ? 'active' : ''}`}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="nav-icon">{item.icon}</span>
                        <div className="nav-label-wrapper">
                          <span className="nav-label">{item.label}</span>
                          {item.subtitle && (
                            <span className="nav-subtitle">{item.subtitle}</span>
                          )}
                        </div>
                        <span className="nav-arrow">→</span>
                      </a>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </nav>

            {/* DIVIDER */}
            <div className="sidebar-divider"></div>

            {/* SETTINGS */}
            <div className="sidebar-settings">
              <h3>{isTurkish ? '⚙️ Ayarlar' : '⚙️ Settings'}</h3>
              
              <motion.button
                onClick={toggleLanguage}
                className="settings-item language-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="setting-icon">🌐</span>
                <span className="setting-label">
                  {isTurkish ? 'Dil: Türkçe' : 'Language: English'}
                </span>
                <span className="setting-value">
                  {isTurkish ? '🇹🇷' : '🇬🇧'}
                </span>
              </motion.button>

              <motion.button
                onClick={() => toggleTheme?.()}
                className="settings-item theme-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={!switchable || !toggleTheme}
              >
                <span className="setting-icon">🎨</span>
                <span className="setting-label">
                  {isTurkish ? 'Tema' : 'Theme'}
                </span>
                <span className="setting-value">
                  {theme === 'dark' ? '🌙' : '☀️'}
                </span>
              </motion.button>

              <motion.button
                onClick={() => alert(isTurkish ? 'Ses: Açık' : 'Sound: On')}
                className="settings-item sound-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="setting-icon">🔊</span>
                <span className="setting-label">
                  {isTurkish ? 'Ses' : 'Sound'}
                </span>
                <span className="setting-value">✓</span>
              </motion.button>
            </div>

            {/* DIVIDER */}
            <div className="sidebar-divider"></div>

            {/* INFO SECTION */}
            <div className="sidebar-info">
              <h3>{isTurkish ? '📚 Bilgi' : '📚 Information'}</h3>
              <div className="info-items">
                {infoItems.map((item, idx) => (
                  <motion.button
                    key={idx}
                    onClick={item.action}
                    className="info-item"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + idx * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="info-icon">{item.icon}</span>
                    <span className="info-label">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* DIVIDER */}
            <div className="sidebar-divider"></div>

            {/* FOOTER */}
            <div className="sidebar-footer">
              <div className="footer-content">
                <p className="footer-title">
                  {isTurkish ? '🛡️ Dijital Güvenlik' : '🛡️ Digital Security'}
                </p>
                <p className="footer-subtitle">
                  {isTurkish ? 'Eğitim Platformu v1.0' : 'Education Platform v1.0'}
                </p>
                <p className="footer-text">
                  {isTurkish 
                    ? '© 2025 Tüm Hakları Saklıdır' 
                    : '© 2025 All Rights Reserved'}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        /* TOGGLE BUTTON */
        .sidebar-toggle {
          position: fixed;
          right: 20px;
          top: 80px;
          z-index: 999;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          cursor: pointer;
          font-size: 1.5rem;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sidebar-toggle:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
        }

        .sidebar-toggle:active {
          transform: scale(0.95);
        }

        .toggle-icon {
          font-weight: bold;
          font-size: 1.8rem;
        }

        /* BACKDROP */
        .sidebar-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 998;
          backdrop-filter: blur(4px);
        }

        /* SIDEBAR */
        .sidebar {
          position: fixed;
          right: 0;
          top: 0;
          bottom: 0;
          width: 350px;
          background: linear-gradient(180deg, #ffffff 0%, #f5f7fa 100%);
          z-index: 1000;
          box-shadow: -5px 0 30px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }

        :global(.dark) .sidebar {
          background: linear-gradient(180deg, #0b1220 0%, #111827 100%);
        }

        :global(.dark) .nav-item,
        :global(.dark) .settings-item,
        :global(.dark) .info-item {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.12);
          color: rgba(255, 255, 255, 0.9);
        }

        :global(.dark) .sidebar-nav h3,
        :global(.dark) .sidebar-settings h3,
        :global(.dark) .sidebar-info h3 {
          color: #93c5fd;
        }

        :global(.dark) .setting-value,
        :global(.dark) .nav-arrow,
        :global(.dark) .footer-title {
          color: #93c5fd;
        }

        :global(.dark) .footer-subtitle,
        :global(.dark) .footer-text {
          color: rgba(255, 255, 255, 0.6);
        }

        /* HEADER */
        .sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-bottom: 3px solid #667eea;
        }

        .sidebar-header h2 {
          margin: 0;
          font-size: 1.5rem;
          font-weight: bold;
        }

        .close-btn {
          background: transparent;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 5px;
          transition: all 0.3s ease;
        }

        .close-btn:hover {
          transform: scale(1.2);
        }

        /* DIVIDER */
        .sidebar-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #ddd, transparent);
          margin: 15px 0;
        }

        /* NAVIGATION */
        .sidebar-nav {
          padding: 20px;
          flex: 1;
        }

        .sidebar-nav h3 {
          margin: 0 0 15px 0;
          color: #667eea;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: bold;
        }

        .nav-items {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 15px;
          background: white;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          color: #333;
          font-weight: 500;
        }

        .nav-item:hover {
          background: linear-gradient(135deg, #f0f4ff 0%, #f5e6ff 100%);
          border-color: #667eea;
          transform: translateX(-5px);
        }

        .nav-item.active {
          border-color: #667eea;
          background: linear-gradient(135deg, #f0f4ff 0%, #f5e6ff 100%);
        }

        .nav-icon {
          font-size: 1.3rem;
          min-width: 30px;
          text-align: center;
        }

        .nav-label-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .nav-label {
          font-size: 0.95rem;
          font-weight: 600;
        }

        .nav-subtitle {
          font-size: 0.8rem;
          color: #666;
          font-weight: 400;
        }

        :global(.dark) .nav-subtitle {
          color: rgba(255, 255, 255, 0.6);
        }

        .nav-arrow {
          color: #667eea;
          font-weight: bold;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .nav-item:hover .nav-arrow {
          opacity: 1;
          transform: translateX(5px);
        }

        /* SETTINGS */
        .sidebar-settings {
          padding: 20px;
        }

        .sidebar-settings h3 {
          margin: 0 0 15px 0;
          color: #667eea;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: bold;
        }

        .settings-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 15px;
          background: white;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 10px;
          font-weight: 500;
          color: #333;
        }

        .settings-item:hover {
          background: linear-gradient(135deg, #f0f4ff 0%, #f5e6ff 100%);
          border-color: #667eea;
          transform: translateX(-5px);
        }

        .setting-icon {
          font-size: 1.3rem;
          min-width: 30px;
          text-align: center;
        }

        .setting-label {
          flex: 1;
          font-size: 0.95rem;
        }

        .setting-value {
          font-size: 1.1rem;
          font-weight: bold;
          color: #667eea;
        }

        /* INFO SECTION */
        .sidebar-info {
          padding: 20px;
        }

        .sidebar-info h3 {
          margin: 0 0 15px 0;
          color: #667eea;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: bold;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 15px;
          background: white;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
          color: #333;
        }

        .info-item:hover {
          background: linear-gradient(135deg, #f0f4ff 0%, #f5e6ff 100%);
          border-color: #667eea;
          transform: translateX(-5px);
        }

        .info-icon {
          font-size: 1.3rem;
          min-width: 30px;
          text-align: center;
        }

        .info-label {
          flex: 1;
          font-size: 0.95rem;
        }

        /* FOOTER */
        .sidebar-footer {
          padding: 20px;
          background: linear-gradient(135deg, #f0f4ff 0%, #f5e6ff 100%);
          border-top: 2px solid #e0e0e0;
          text-align: center;
        }

        .footer-content {
          margin: 0;
        }

        .footer-title {
          margin: 0 0 5px 0;
          font-size: 1.1rem;
          font-weight: bold;
          color: #667eea;
        }

        .footer-subtitle {
          margin: 0 0 10px 0;
          font-size: 0.9rem;
          color: #666;
        }

        .footer-text {
          margin: 0;
          font-size: 0.8rem;
          color: #999;
        }

        /* SCROLLBAR */
        .sidebar::-webkit-scrollbar {
          width: 6px;
        }

        .sidebar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        .sidebar::-webkit-scrollbar-thumb {
          background: #667eea;
          border-radius: 3px;
        }

        .sidebar::-webkit-scrollbar-thumb:hover {
          background: #764ba2;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .sidebar {
            width: 100%;
            max-width: 300px;
          }

          .sidebar-toggle {
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
            top: 70px;
          }

          .sidebar-header h2 {
            font-size: 1.3rem;
          }

          .nav-item,
          .settings-item,
          .info-item {
            padding: 10px 12px;
            font-size: 0.9rem;
          }

          .nav-icon,
          .setting-icon,
          .info-icon {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .sidebar {
            width: 100%;
          }

          .sidebar-toggle {
            width: 45px;
            height: 45px;
            right: 15px;
            top: 70px;
            font-size: 1rem;
          }

          .sidebar-nav,
          .sidebar-settings,
          .sidebar-info,
          .sidebar-footer {
            padding: 15px;
          }

          .nav-item,
          .settings-item,
          .info-item {
            padding: 10px;
            font-size: 0.85rem;
          }

          .nav-label,
          .setting-label,
          .info-label {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </>
  );
};

export default Sidebar;
