import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { MODULE5_TR } from '../content/module5_lang_tr';
import { MODULE5_EN } from '../content/module5_lang_en';
import LoadingScreen from '../components/LoadingScreen';
import { useLanguage } from '../contexts/LanguageContext';
import InteractiveQuiz from '../components/InteractiveQuiz';
import CardMatchGame from '../components/CardMatchGame';
import PhishingDetective from '../components/PhishingDetective';
import AppPermissionDetective from '../components/AppPermissionDetective';
import NewsVerifier from '../components/NewsVerifier';
import SafeDecisionMap from '../components/SafeDecisionMap';
import HangmanGame from '../components/HangmanGame';
import { CYBER_SECURITY_HANGMAN } from '../content/activities/cyber_security_hangman';
import '../modules.css';
import './module5.css';

const VIRUS_PAIRS_TR = [
  ['Virüs', 'Dosyalara bulaşır ve onları bozar'],
  ['Casus Yazılım (Spyware)', 'Şifrelerini ve bilgilerini gizlice çalar'],
  ['Fidye Yazılımı (Ransomware)', 'Dosyalarını kilitler ve para ister'],
  ['Reklam Yazılımı (Adware)', 'Sürekli istenmeyen reklam pencereleri açar'],
  ['Truva Atı (Trojan)', 'Yararlı görünür ama içten zarar verir'],
  ['Solucan (Worm)', 'Ağ üzerinden kendini kopyalayarak yayılır'],
];

const VIRUS_PAIRS_EN = [
  ['Virus', 'Infects and corrupts files on your device'],
  ['Spyware', 'Secretly steals your passwords and data'],
  ['Ransomware', 'Locks your files and demands money to unlock'],
  ['Adware', 'Floods your screen with unwanted pop-up ads'],
  ['Trojan', 'Looks useful but causes harm from the inside'],
  ['Worm', 'Copies itself across networks to spread damage'],
];

const MODULE_KEY = 'module5';

/* ✅ Tamamlama ekranı */
const CompletionScreen = ({ isTurkish, onNavigate, countdown }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    style={{
      position: 'fixed', inset: 0, zIndex: 2000,
      background: 'rgba(10,15,40,0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}
  >
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.15 }}
      style={{
        background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)',
        borderRadius: '24px', padding: '48px 40px', textAlign: 'center',
        maxWidth: '460px', width: '90%',
        boxShadow: '0 25px 80px rgba(102,126,234,0.4)',
        border: '1px solid rgba(167,139,250,0.3)',
      }}
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 10, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ fontSize: '4rem', marginBottom: '16px' }}
      >🎉</motion.div>
      <h2 style={{ color: 'white', fontWeight: 900, fontSize: '1.8rem', margin: '0 0 10px' }}>
        {isTurkish ? 'Modül 5 Tamamlandı!' : 'Module 5 Complete!'}
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', margin: '0 0 24px', lineHeight: 1.6 }}>
        {isTurkish
          ? 'Dijital güvenliği başarıyla öğrendin! Son modüle geçiyoruz.'
          : 'You mastered digital safety! Moving on to the final module.'}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '28px' }}>
        <div style={{
          width: '52px', height: '52px', borderRadius: '50%',
          background: 'rgba(167,139,250,0.2)', border: '3px solid #a78bfa',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.5rem', fontWeight: 900, color: '#a78bfa',
        }}>{countdown}</div>
        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
          {isTurkish ? "saniye sonra Modül 6'ya geçiliyor..." : 'seconds until Module 6...'}
        </span>
      </div>
      <motion.button
        whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
        onClick={onNavigate}
        style={{
          padding: '14px 32px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white', border: 'none', borderRadius: '12px',
          fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
          boxShadow: '0 8px 20px rgba(102,126,234,0.4)',
        }}
      >
        {isTurkish ? "🚀 Modül 6'ya Geç" : '🚀 Go to Module 6'}
      </motion.button>
    </motion.div>
  </motion.div>
);

const SectionComponent = ({ section, isTurkish }) => {
  const virusPairs = isTurkish ? VIRUS_PAIRS_TR : VIRUS_PAIRS_EN;

  const renderActivity = (type) => {
    switch (type) {
      case 'quiz':
      case 'interactive_quiz': {
        let quizContent = null;
        if (section.content) {
          for (const key in section.content) {
            if (section.content[key]?.quiz) { quizContent = section.content[key].quiz; break; }
          }
        }
        return quizContent ? (
          <InteractiveQuiz quizItems={quizContent} isTurkish={isTurkish} stepByStep={true} />
        ) : (
          <div className="activity-placeholder">
            <p className="activity-placeholder-text">
              {isTurkish ? 'Quiz soruları yükleniyor...' : 'Loading quiz questions...'}
            </p>
          </div>
        );
      }
      case 'virus_match':
        return <CardMatchGame isTurkish={isTurkish} pairs={virusPairs} />;
      case 'app_permission':
        return <AppPermissionDetective isTurkish={isTurkish} />;
      case 'phishing_detective':
        return <PhishingDetective isTurkish={isTurkish} />;
      case 'news_verifier':
        return <NewsVerifier isTurkish={isTurkish} />;
      case 'safe_decision_map':
        return <SafeDecisionMap isTurkish={isTurkish} />;
      case 'cyber_hangman':
        return <HangmanGame isTurkish={isTurkish} data={CYBER_SECURITY_HANGMAN} />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="section-content"
    >
      {section.subtitle && <div className="section-subtitle"><p>{section.subtitle}</p></div>}
      <div className="section-intro"><p>{section.intro}</p></div>

      {section.content && (
        <div className="content-sections">
          {Object.entries(section.content).map(([key, contentItem]) => (
            <motion.div key={key} className="content-item" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <h3 className="content-item-title">{contentItem.title}</h3>
              {contentItem.image && (
                <img src={contentItem.image} alt={contentItem.title} className="content-image" onError={(e) => { e.target.style.display = 'none'; }} />
              )}
              <p className="content-description">{contentItem.description}</p>
              {contentItem.points && (
                <ul className="content-points">{contentItem.points.map((p, i) => <li key={i}>{p}</li>)}</ul>
              )}
              {contentItem.examples && Array.isArray(contentItem.examples) && (
                <div className="content-examples">
                  <h4>{isTurkish ? 'Örnekler:' : 'Examples:'}</h4>
                  <ul>{contentItem.examples.map((e, i) => <li key={i}>{e}</li>)}</ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {/* Primary activity */}
      {section.activity_title && (
        <div className="activity-box">
          <h3>{section.activity_title}</h3>
          {section.activity_desc && <p>{section.activity_desc}</p>}
          {renderActivity(section.activity_type)}
        </div>
      )}

      {/* Secondary activity (virus_match, app_permission, phishing_detective) */}
      {section.second_activity_type && (
        <div className="activity-box" style={{ marginTop: '2rem' }}>
          <h3>{section.second_activity_title || (isTurkish ? '🎮 Aktivite' : '🎮 Activity')}</h3>
          {section.second_activity_desc && <p>{section.second_activity_desc}</p>}
          {renderActivity(section.second_activity_type)}
        </div>
      )}
    </motion.div>
  );
};

// ✅ Birleştirilmiş Senaryo Quiz bölümü — iki quiz yan yana/alt alta gösterilir
const CombinedSectionComponent = ({ sections, isTurkish }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="section-content"
  >
    <div className="section-intro">
      <p>{isTurkish ? '🎮 Senaryo Quizleri — Her ikisini de tamamla!' : '🎮 Scenario Quizzes — Complete both!'}</p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {sections.map((section, idx) => (
        <div key={idx} style={{
          border: '2px solid rgba(99,102,241,0.2)',
          borderRadius: '16px',
          padding: '1.5rem',
          background: 'rgba(99,102,241,0.04)',
        }}>
          <h2 style={{ color: '#6366f1', fontWeight: 800, marginBottom: '0.75rem', fontSize: '1.2rem' }}>
            {section.title}
          </h2>
          <SectionComponent section={section} isTurkish={isTurkish} />
        </div>
      ))}
    </div>
  </motion.div>
);

function Module5() {
  const { language } = useLanguage();
  const isTurkish = language === 'tr';
  const [, navigate] = useLocation();

  const [activeSection, setActiveSection] = useState(() => {
    const parsed = Number(localStorage.getItem(`${MODULE_KEY}_activeSection`));
    return Number.isFinite(parsed) && parsed >= 1 ? parsed : 1;
  });

  const [completedSections, setCompletedSections] = useState(() => {
    try { return JSON.parse(localStorage.getItem(`${MODULE_KEY}_completedSections`) || '[]'); }
    catch { return []; }
  });

  const [isLoading, setIsLoading] = useState(true);
  const [showCompletion, setShowCompletion] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const moduleData = isTurkish ? MODULE5_TR.module_5 : MODULE5_EN.module_5;

  // ✅ "Senaryo" içeren ardışık bölümleri gruplandır
const sections = (() => {
  const raw = moduleData.sections;
  const result = [];
  let i = 0;
  while (i < raw.length) {
    const isScenario = (s) =>
      s.title?.toLowerCase().includes('senaryo') ||
      s.title?.toLowerCase().includes('scenario');

    if (isScenario(raw[i])) {
      const group = [raw[i]];
      while (i + 1 < raw.length && isScenario(raw[i + 1])) {
        i++;
        group.push(raw[i]);
      }
      // ✅ snapshot — closure'a referans değil kopya giriyor
      const groupSnapshot = [...group];
      result.push({
        id: result.length + 1,
        title_tr: isTurkish ? '🎮 Senaryo Quizleri' : '🎮 Scenario Quizzes',
        isGroup: true,
        groupSections: groupSnapshot,
        component: () => <CombinedSectionComponent sections={groupSnapshot} isTurkish={isTurkish} />,
      });
    } else {
      // ✅ snapshot — i ilerlemeden önce değer kaydedildi
      const sectionSnapshot = raw[i];
      result.push({
        id: result.length + 1,
        title_tr: sectionSnapshot.title,
        isGroup: false,
        component: () => <SectionComponent section={sectionSnapshot} isTurkish={isTurkish} />,
      });
    }
    i++;
  }
  return result;
})();

  useEffect(() => {
    const clamped = Math.min(Math.max(activeSection, 1), sections.length);
    if (clamped !== activeSection) { setActiveSection(clamped); return; }
    localStorage.setItem(`${MODULE_KEY}_activeSection`, String(activeSection));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection, sections.length]);

  useEffect(() => {
    localStorage.setItem(`${MODULE_KEY}_completedSections`, JSON.stringify(completedSections));
    window.dispatchEvent(new CustomEvent('sectionProgressUpdate', {
      detail: { module: MODULE_KEY, completedSections, totalSections: sections.length, activeSection },
    }));
  }, [completedSections, activeSection, sections.length]);

  useEffect(() => {
    if (!showCompletion) return;
    if (countdown <= 0) { navigate('/module6'); return; }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [showCompletion, countdown, navigate]);

  useEffect(() => {
    const handler = (e) => {
      if (e.detail.module === MODULE_KEY) {
        setActiveSection(e.detail.sectionId);
      }
    };
    window.addEventListener('sidebarSectionClick', handler);
    return () => window.removeEventListener('sidebarSectionClick', handler);
  }, []);

  const handleSectionComplete = (sectionId) => {
    if (!completedSections.includes(sectionId)) {
      const newCompleted = [...completedSections, sectionId];
      setCompletedSections(newCompleted);
      if (newCompleted.length === sections.length) {
        const progress = JSON.parse(localStorage.getItem('digitalShieldProgress') || '{}');
        progress.module5 = true;
        if (!progress.badges) progress.badges = [];
        if (!progress.badges.includes('module5')) progress.badges.push('module5');
        localStorage.setItem('digitalShieldProgress', JSON.stringify(progress));
        window.dispatchEvent(new CustomEvent('moduleCompleted', { detail: { module: MODULE_KEY } }));
        setTimeout(() => { setShowCompletion(true); setCountdown(5); }, 400);
      }
    }
  };

  const currentSection = sections.find((s) => s.id === activeSection);
  const SectionComponentToRender = currentSection?.component;

  if (isLoading) {
    setTimeout(() => setIsLoading(false), 1000);
    return <LoadingScreen onComplete={() => setIsLoading(false)} isTurkish={isTurkish} />;
  }

  return (
    <div className="module-container module-page module5">
      <AnimatePresence>
        {showCompletion && (
          <CompletionScreen isTurkish={isTurkish} countdown={countdown} onNavigate={() => navigate('/module6')} />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="content-wrapper"
          style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 3rem 2rem 4rem' }}
        >
          <div className="content-header">
            <h1>{currentSection?.title_tr}</h1>
          </div>
          {SectionComponentToRender && <SectionComponentToRender />}
        </motion.div>
      </AnimatePresence>

      <div className="section-navigation" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 3rem 2rem 4rem' }}>
        <button
          className="nav-btn prev"
          onClick={() => setActiveSection((p) => Math.max(1, p - 1))}
          disabled={activeSection === 1}
        >
          {'<-'} {isTurkish ? 'Önceki' : 'Previous'}
        </button>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', minWidth: '100px' }}>
          <span style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            borderRadius: '999px',
            padding: '6px 22px',
            fontWeight: 800,
            fontSize: '0.88rem',
            letterSpacing: '0.04em',
            boxShadow: '0 2px 12px rgba(102,126,234,0.3)',
            whiteSpace: 'nowrap',
          }}>
            {activeSection} / {sections.length}
          </span>
          <div style={{ width: '72px', height: '4px', background: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
            <div style={{
              width: `${Math.round((activeSection / sections.length) * 100)}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #667eea, #764ba2)',
              borderRadius: '999px',
              transition: 'width 0.4s ease',
            }} />
          </div>
        </div>
        {activeSection === sections.length ? (
          <button
            className="nav-btn next"
            onClick={() => handleSectionComplete(activeSection)}
            disabled={completedSections.includes(activeSection)}
            style={{ background: completedSections.includes(activeSection) ? '#10b981' : '#7c3aed' }}
          >
            {completedSections.includes(activeSection)
              ? (isTurkish ? 'Tamamlandı ✓' : 'Completed ✓')
              : (isTurkish ? '✓ Modülü Tamamla' : '✓ Complete Module')}
          </button>
        ) : (
          <button
            className="nav-btn next"
            onClick={() => {
              handleSectionComplete(activeSection);
              setActiveSection((p) => Math.min(sections.length, p + 1));
            }}
          >
            {isTurkish ? 'Sonraki' : 'Next'} {'->'}
          </button>
        )}
      </div>
    </div>
  );
}

export default Module5;