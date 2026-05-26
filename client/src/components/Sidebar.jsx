import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const MODULE_SECTIONS = {
  '/module1': {
    icon: '📚',
    label_tr: 'Bilgisayar Dünyasını Keşfediyorum',
    label_en: 'Exploring the Computer World',
    key: 'module1',
    sections_tr: [
      'Bilgisayar nedir ve nasıl düşünür?',
      'Donanım (bilgisayarın vücudu)',
      'Yazılım (bilgisayarın ruhu)',
      'Hafıza ve dosya yönetimi',
      'Dijital sağlık, etik ve güvenlik',
    ],
    sections_en: [
      'What is a computer and how does it think?',
      'Hardware (the body of the computer)',
      'Software (the soul of the computer)',
      'Memory and file management',
      'Digital health, ethics and security',
    ],
  },
  '/module2': {
    icon: '🔍',
    label_tr: 'Dijital Ayak İzi ve Çevrimiçi Gizlilik',
    label_en: 'Digital Footprint & Online Privacy',
    key: 'module2',
    sections_tr: [
      '🔍 Dijital Ayak İzi Nedir?',
      '🎯 Aktif ve Pasif Dijital Ayak İzi',
      '🔐 Kişisel Bilgiler ve Gizlilik',
      '⏳ Dijital Ayak İzinin Geleceğe Etkisi',
      '🛡️ Güvenli Dijital Davranışlar',
      "🎭 Senaryo Quiz - Zeynep'in Hikayesi",
    ],
    sections_en: [
      'What is a Digital Footprint?',
      'Active and Passive Digital Footprint',
      'Personal Information and Privacy',
      'Future Impact of Digital Footprint',
      'Safe Digital Behaviors',
      "Scenario Quiz - Zeynep's Story",
    ],
  },
  '/module3': {
    icon: '🌐',
    label_tr: 'Bilgisayar Ağları ve Dijital İletişim',
    label_en: 'Computer Networks & Digital Communication',
    key: 'module3',
    sections_tr: [
      'Ağ Nedir? İletişimin Tarihsel Gelişimi',
      'İnternet Nedir? Veri Paketleri Nasıl Yolculuk Eder?',
      'Tarayıcı ve Arama Motoru',
      'İnternet Adresi (URL) ve Uzantılar',
      'Ağ Türleri: Ev, Okul ve Halka Açık Wi-Fi',
      'Veri - İstemci - Sunucu',
      'Ağ Cihazları: Modem, Router, Switch, Ethernet',
      'Ağ Cihazlarını Eşleştir',
      'Kablolu vs Kablosuz Bağlantı',
      'Adam Asmaca',
      'Ağ Güvenliği ve Ünite Değerlendirme',
    ],
    sections_en: [
      'What is a Network? Communication Timeline',
      'What is the Internet? How Do Packets Travel?',
      'Browser and Search Engine',
      'Internet Address (URL) and Extensions',
      'Network Types: Home, School and Public Wi-Fi',
      'Data - Client - Server',
      'Network Devices: Modem, Router, Switch, Ethernet',
      'Match Network Devices',
      'Wired vs Wireless Connection',
      'Hangman',
      'Network Security and Unit Review',
    ],
  },
  '/module4': {
    icon: '🛡️',
    label_tr: 'Şifre Güvenliği ve Hesap Koruma',
    label_en: 'Password Security & Account Protection',
    key: 'module4',
    sections_tr: [
      'Cihaz Güvenliği: Kilit, Güncelleme, Yedekleme',
      'Zararlı Yazılımlar ve Güvenli İndirme',
      'Uygulama İzinleri ve Gizlilik Ayarları',
      'Ortak Ağlar, Wi-Fi Güvenliği ve Oturum Kapatma',
      'Dijital Vatandaşlık ve Yardım Alma',
    ],
    sections_en: [
      'Device Security: Lock, Update, Backup',
      'Malware and Safe Downloading',
      'App Permissions and Privacy Settings',
      'Public Networks, Wi-Fi Security and Logout',
      'Digital Citizenship and Seeking Help',
    ],
  },
  '/module5': {
    icon: '🔒',
    label_tr: 'Dijital Güvenlik ve Bilinçli Teknoloji Kullanımı',
    label_en: 'Digital Security & Responsible Technology Use',
    key: 'module5',
    sections_tr: [
      '🛡️ Dijital Güvenlik Nedir?',
      '🦠 Zararlı Yazılımlar (Virüsler ve Tehditler)',
      '📱 Güvenli Cihaz Kullanımı',
      '🔐 Uygulama İzinleri ve Gizlilik',
      '🤝 Dijital Sorumluluk',
      '🎮 Senaryo Quizleri',
      '🎯 Dijital Güvenlik Aktiviteleri',
    ],
    sections_en: [
      '🛡️ What is Digital Security?',
      '🦠 Malicious Software (Viruses and Threats)',
      '📱 Safe Device Use',
      '🔐 App Permissions and Privacy',
      '🤝 Digital Responsibility',
      '🎮 Scenario Quizzes',
      '🎯 Digital Safety Activities',
    ],
  },
  '/module6': {
    icon: '⚡',
    label_tr: 'Dijital Dedektif',
    label_en: 'Digital Detective',
    key: 'module6',
    sections_tr: [
      '🚨 Kötü Amaçlı Yazılım Belirtileri (Malware Symptoms)',
      '🎣 Kimlik Avı (Phishing) Avcılığı',
      '🛠️ Siber Krizlere Müdahale Planı',
    ],
    sections_en: [
      'Malware Symptoms',
      'Phishing Hunt',
      'Cyber Incident Response Plan',
    ],
  },
};

const SIDEBAR_WIDTH = 300;

const Sidebar = () => {
  const { isTurkish, toggleLanguage } = useLanguage();
  const { theme, toggleTheme, switchable } = useTheme();
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(() => window.innerWidth >= 768);
  const [isVisible, setIsVisible] = useState(true);
  const [location] = useLocation();
  const [expandedModule, setExpandedModule] = useState(null);
  const [moduleProgress, setModuleProgress] = useState({});

  // HOOK 0 — mobil tespiti ve resize takibi
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) setIsOpen(false);
      else setIsOpen(true);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // HOOK 1 — sidebarVisibility event (home'da gizle)
  useEffect(() => {
    const handler = (e) => {
      const visible = e.detail?.visible ?? true;
      setIsVisible(visible);
      if (!visible) {
        document.body.style.marginLeft = '0px';
      }
    };
    window.addEventListener('sidebarVisibility', handler);
    return () => window.removeEventListener('sidebarVisibility', handler);
  }, []);

  // HOOK 2 — progress okuma (location değişince)
  useEffect(() => {
    const progress = {};
    Object.entries(MODULE_SECTIONS).forEach(([path, mod]) => {
      try {
        const completed = JSON.parse(
          localStorage.getItem(`${mod.key}_completedSections`) || '[]'
        );
        const active = Number(localStorage.getItem(`${mod.key}_activeSection`)) || 1;
        progress[path] = { completed, active };
      } catch {
        progress[path] = { completed: [], active: 1 };
      }
    });
    setModuleProgress(progress);
  }, [location]);

  // HOOK 3 — progress event listener
  useEffect(() => {
    const readProgress = () => {
      const progress = {};
      Object.entries(MODULE_SECTIONS).forEach(([path, mod]) => {
        try {
          const completed = JSON.parse(
            localStorage.getItem(`${mod.key}_completedSections`) || '[]'
          );
          const active = Number(localStorage.getItem(`${mod.key}_activeSection`)) || 1;
          progress[path] = { completed, active };
        } catch {
          progress[path] = { completed: [], active: 1 };
        }
      });
      setModuleProgress(progress);
    };

    window.addEventListener('sectionProgressUpdate', readProgress);
    window.addEventListener('moduleCompleted', readProgress);
    return () => {
      window.removeEventListener('sectionProgressUpdate', readProgress);
      window.removeEventListener('moduleCompleted', readProgress);
    };
  }, []);

  // HOOK 4 — aktif modülü genişlet
  useEffect(() => {
    if (MODULE_SECTIONS[location]) setExpandedModule(location);
  }, [location]);

  // HOOK 5 — body margin (mobilde overlay, masaüstünde push)
  useEffect(() => {
    if (!isVisible) return;
    document.body.style.marginLeft = (!isMobile && isOpen) ? `${SIDEBAR_WIDTH}px` : '0px';
    document.body.style.transition = 'margin-left 0.3s ease';
    return () => {
      document.body.style.marginLeft = '0px';
    };
  }, [isOpen, isVisible, isMobile]);

  // ── TÜM HOOK'LAR BITTI — şimdi early return güvenli ──
  if (!isVisible) return null;

  const globalProgress = (() => {
    try {
      return JSON.parse(localStorage.getItem('digitalShieldProgress') || '{}');
    } catch {
      return {};
    }
  })();

  const completedModuleCount = Object.values(globalProgress).filter(Boolean).length;
  const totalModules = Object.keys(MODULE_SECTIONS).length;
  const isDark = theme === 'dark';

  const sectionLinkStyle = (isCurrent) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 10px',
    borderRadius: '8px',
    marginBottom: '2px',
    textDecoration: 'none',
    color: isCurrent ? '#667eea' : isDark ? 'rgba(255,255,255,0.7)' : '#475569',
    background: isCurrent ? 'rgba(102,126,234,0.08)' : 'transparent',
    fontWeight: isCurrent ? 700 : 500,
    fontSize: '0.8rem',
    cursor: 'pointer',
  });

  return (
    <>
      {/* Mobil overlay — sidebar açıkken arka planı karartır */}
      {isMobile && isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.55)',
            zIndex: 999,
          }}
        />
      )}

      {/* Toggle butonu */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'fixed',
          left: isOpen ? `${SIDEBAR_WIDTH + 12}px` : '12px',
          top: '12px',
          zIndex: 1001,
          width: '42px',
          height: '42px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1.1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(102,126,234,0.4)',
          transition: 'left 0.3s ease',
        }}
      >
        {isOpen ? '✕' : '☰'}
      </motion.button>

      {/* Sidebar paneli */}
      <motion.div
        animate={{ x: isOpen ? 0 : -SIDEBAR_WIDTH }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          width: `${SIDEBAR_WIDTH}px`,
          background: isDark
            ? 'linear-gradient(180deg, #0b1220 0%, #111827 100%)'
            : '#ffffff',
          zIndex: 1000,
          boxShadow: isOpen ? '4px 0 20px rgba(0,0,0,0.12)' : 'none',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          borderRight: `1px solid ${isDark ? '#1e293b' : '#f1f5f9'}`,
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '14px 16px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            flexShrink: 0,
          }}
        >
          <div style={{ color: 'white', fontWeight: 900, fontSize: '1rem' }}>
            🛡️ {isTurkish ? 'Dijital Güvenlik' : 'Digital Security'}
          </div>
          <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.73rem', marginTop: '2px' }}>
            {completedModuleCount}/{totalModules}{' '}
            {isTurkish ? 'modül tamamlandı' : 'modules completed'}
          </div>
        </div>

        {/* Progress Bar */}
        <div
          style={{
            padding: '10px 16px',
            borderBottom: `1px solid ${isDark ? '#1e293b' : '#f1f5f9'}`,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '0.72rem',
              color: '#94a3b8',
              fontWeight: 600,
              marginBottom: '5px',
            }}
          >
            <span>{isTurkish ? 'Genel İlerleme' : 'Overall Progress'}</span>
            <span>{Math.round((completedModuleCount / totalModules) * 100)}%</span>
          </div>
          <div
            style={{
              height: '5px',
              background: isDark ? '#1e293b' : '#e2e8f0',
              borderRadius: '3px',
              overflow: 'hidden',
            }}
          >
            <motion.div
              animate={{ width: `${(completedModuleCount / totalModules) * 100}%` }}
              transition={{ duration: 0.6 }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #667eea, #764ba2)',
                borderRadius: '3px',
              }}
            />
          </div>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '8px 10px', overflowY: 'auto' }}>
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 14px',
              borderRadius: '12px',
              marginBottom: '8px',
              textDecoration: 'none',
              color: 'white',
              background:
                location === '/'
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  : 'linear-gradient(135deg, rgba(102,126,234,0.18) 0%, rgba(118,75,162,0.18) 100%)',
              fontWeight: 700,
              fontSize: '0.88rem',
              border:
                location === '/'
                  ? '1.5px solid rgba(102,126,234,0.6)'
                  : '1.5px solid rgba(102,126,234,0.25)',
              boxShadow: location === '/' ? '0 4px 14px rgba(102,126,234,0.35)' : 'none',
              transition: 'all 0.2s ease',
            }}
          >
            <span style={{ fontSize: '1.1rem' }}>🏠</span>
            <span>{isTurkish ? 'Ana Sayfa' : 'Home'}</span>
          </Link>

          <div
            style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              color: '#94a3b8',
              letterSpacing: '0.08em',
              padding: '5px 10px 3px',
              textTransform: 'uppercase',
            }}
          >
            {isTurkish ? 'Modüller' : 'Modules'}
          </div>

          {Object.entries(MODULE_SECTIONS).map(([path, mod]) => {
            const isActive = location === path;
            const isExpanded = expandedModule === path;
            const prog = moduleProgress[path] || { completed: [], active: 1 };
            const moduleCompleted = globalProgress[mod.key];
            const sections = isTurkish ? mod.sections_tr : mod.sections_en;
            const hasSections = sections.length > 0;
            const pct = hasSections
              ? Math.round((prog.completed.length / sections.length) * 100)
              : 0;

            return (
              <div key={path} style={{ marginBottom: '2px' }}>
                <div
                  onClick={() => setExpandedModule(isExpanded ? null : path)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                    padding: '9px 10px',
                    borderRadius: '9px',
                    cursor: 'pointer',
                    background: isActive
                      ? 'linear-gradient(135deg, rgba(102,126,234,0.12), rgba(118,75,162,0.08))'
                      : 'transparent',
                    border: isActive
                      ? '1px solid rgba(102,126,234,0.2)'
                      : '1px solid transparent',
                  }}
                >
                  <span style={{ fontSize: '1rem', minWidth: '20px' }}>{mod.icon}</span>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: '0.78rem',
                        color: isActive
                          ? '#667eea'
                          : isDark
                          ? 'rgba(255,255,255,0.9)'
                          : '#1e293b',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {isTurkish ? mod.label_tr : mod.label_en}
                    </div>

                    {hasSections && (
                      <div
                        style={{
                          marginTop: '3px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                        }}
                      >
                        <div
                          style={{
                            flex: 1,
                            height: '3px',
                            background: isDark ? '#1e293b' : '#e2e8f0',
                            borderRadius: '2px',
                            overflow: 'hidden',
                          }}
                        >
                          <motion.div
                            animate={{ width: `${pct}%` }}
                            transition={{ duration: 0.5 }}
                            style={{
                              height: '100%',
                              background: moduleCompleted
                                ? '#10b981'
                                : 'linear-gradient(90deg, #667eea, #764ba2)',
                              borderRadius: '2px',
                            }}
                          />
                        </div>
                        <span
                          style={{
                            fontSize: '0.62rem',
                            color: '#94a3b8',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {prog.completed.length}/{sections.length}
                        </span>
                      </div>
                    )}
                  </div>

                  {moduleCompleted && (
                    <span style={{ color: '#10b981', fontSize: '0.8rem' }}>✓</span>
                  )}

                  {hasSections && (
                    <motion.span
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ color: '#94a3b8', fontSize: '0.6rem', flexShrink: 0 }}
                    >
                      ▼
                    </motion.span>
                  )}
                </div>

                <AnimatePresence initial={false}>
                  {isExpanded && hasSections && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ padding: '3px 3px 5px 30px' }}>
                        {sections.map((sectionTitle, idx) => {
                          const sectionId = idx + 1;
                          const isCompleted = prog.completed.includes(sectionId);
                          const isCurrent = isActive && prog.active === sectionId;

                          return (
                            <Link
                              key={idx}
                              href={path}
                              onClick={() => {
                                localStorage.setItem(
                                  `${mod.key}_activeSection`,
                                  String(sectionId)
                                );
                                window.dispatchEvent(
                                  new CustomEvent('sidebarSectionClick', {
                                    detail: { module: mod.key, sectionId },
                                  })
                                );
                              }}
                              style={sectionLinkStyle(isCurrent)}
                            >
                              <span
                                style={{
                                  width: '13px',
                                  height: '13px',
                                  borderRadius: '50%',
                                  border: `2px solid ${
                                    isCompleted
                                      ? '#10b981'
                                      : isCurrent
                                      ? '#667eea'
                                      : '#cbd5e1'
                                  }`,
                                  background: isCompleted ? '#10b981' : 'transparent',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: '0.5rem',
                                  color: 'white',
                                  flexShrink: 0,
                                }}
                              >
                                {isCompleted ? '✓' : ''}
                              </span>
                              <span
                                style={{
                                  flex: 1,
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                }}
                              >
                                {sectionTitle}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Footer */}
        <div
          style={{
            padding: '12px 14px',
            borderTop: `1px solid ${isDark ? '#1e293b' : '#f1f5f9'}`,
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}
        >
          <button
            onClick={toggleLanguage}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 12px',
              borderRadius: '9px',
              border: `1px solid ${isDark ? '#1e293b' : '#e2e8f0'}`,
              background: isDark ? 'rgba(255,255,255,0.05)' : '#f8fafc',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.83rem',
              color: isDark ? 'rgba(255,255,255,0.85)' : '#334155',
              width: '100%',
              textAlign: 'left',
            }}
          >
            <span>🌐</span>
            <span style={{ flex: 1 }}>{isTurkish ? 'Türkçe' : 'English'}</span>
            <span>{isTurkish ? '🇹🇷' : '🇬🇧'}</span>
          </button>

          {switchable && toggleTheme && (
            <button
              onClick={toggleTheme}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 12px',
                borderRadius: '9px',
                border: `1px solid ${isDark ? '#1e293b' : '#e2e8f0'}`,
                background: isDark ? 'rgba(255,255,255,0.05)' : '#f8fafc',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.83rem',
                color: isDark ? 'rgba(255,255,255,0.85)' : '#334155',
                width: '100%',
                textAlign: 'left',
              }}
            >
              <span>{theme === 'dark' ? '🌙' : '☀️'}</span>
              <span style={{ flex: 1 }}>{isTurkish ? 'Tema' : 'Theme'}</span>
            </button>
          )}

          <div
            style={{
              textAlign: 'center',
              color: '#94a3b8',
              fontSize: '0.68rem',
              paddingTop: '2px',
            }}
          >
            🛡️ Digital Detective Academy v1.0
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;