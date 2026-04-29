import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { MODULE6_TR } from '../content/module6_lang_tr';
import { MODULE6_EN } from '../content/module6_lang_en';
import LoadingScreen from '../components/LoadingScreen';
import { useLanguage } from '../contexts/LanguageContext';
import CyberCrisisSimulation from '../components/CyberCrisisSimulation';
import InteractiveQuiz from '../components/InteractiveQuiz';
import VideoLinks from '../components/VideoLinks';
import '../modules.css';
import './module6.css';

const MODULE_KEY = 'module6';

function AdvancedHotspotCyberQuiz({ isTurkish }) {
  const scenarios = [
    {
      title: isTurkish ? '🔗 Gizemli Link' : '🔗 Mystery Link',
      image: '/images/module6/game_first_post.png',
      question: isTurkish ? 'Efe hangisine tıklamalı?' : 'Where should Efe click?',
      hotspots: [
        { id: 1, correct: false, style: { top: '45%', left: '30%' } },
        { id: 2, correct: true, style: { top: '72%', left: '65%' } },
      ],
      correctText: isTurkish ? 'Harika! Bilinmeyen linkler silinmelidir.' : 'Great! Unknown links should be deleted.',
      wrongText: isTurkish ? 'Bu tehlikeli olabilir. Tekrar dene!' : 'This could be dangerous. Try again!',
    },
    {
      title: isTurkish ? '🔐 Şifre Tuzağı' : '🔐 Password Trap',
      image: '/images/module6/game_password_creation.png',
      question: isTurkish ? 'Doğru davranış hangisi?' : 'Which is the right action?',
      hotspots: [
        { id: 1, correct: false, style: { top: '55%', left: '42%' } },
        { id: 2, correct: true, style: { top: '78%', left: '68%' } },
      ],
      correctText: isTurkish ? 'Süper! Şifreler gizli tutulur.' : 'Well done! Passwords are private.',
      wrongText: isTurkish ? 'Yanlış seçim! Şifre paylaşılmaz.' : 'Wrong choice! Passwords are not shared.',
    },
    {
      title: isTurkish ? '📨 Tanımadık Mesaj' : '📨 Unknown Message',
      image: '/images/module6/game_friend_request.png',
      question: isTurkish ? 'Efe ne yapmalı?' : 'What should Efe do?',
      hotspots: [
        { id: 1, correct: false, style: { top: '50%', left: '35%' } },
        { id: 2, correct: true, style: { top: '75%', left: '70%' } },
      ],
      correctText: isTurkish ? 'Doğru! Tanımadığın kişilerle konuşma.' : 'Correct! Do not talk to strangers.',
      wrongText: isTurkish ? 'Bu güvenli değil. Tekrar dene.' : 'This is not safe. Try again.',
    },
    {
      title: isTurkish ? '📧 Acil E-posta' : '📧 Urgent Email',
      image: '/images/module6/game_privacy_settings.png',
      question: isTurkish ? 'En güvenli seçim hangisi?' : 'What is the safest choice?',
      hotspots: [
        { id: 1, correct: false, style: { top: '48%', left: '40%' } },
        { id: 2, correct: true, style: { top: '80%', left: '65%' } },
      ],
      correctText: isTurkish ? 'Harika! Önce bir büyüğüne danışmalısın.' : 'Great! Ask an adult first.',
      wrongText: isTurkish ? 'Acele etmek risklidir!' : 'Rushing can be risky!',
    },
  ];

  const [step, setStep] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [clickedIds, setClickedIds] = useState(new Set());

  const playSound = (soundFile) => {
    try {
      const audio = new Audio(soundFile);
      audio.volume = 0.5;
      audio.play().catch(() => {});
    } catch (_) {}
  };

  const handleClick = (spot) => {
    if (clickedIds.has(spot.id)) return;
    setClickedIds((prev) => new Set([...prev, spot.id]));
    setIsCorrect(spot.correct);
    setFeedback(spot.correct ? scenarios[step].correctText : scenarios[step].wrongText);
    if (spot.correct) {
      playSound('/sounds/correct.mp3');
      setTimeout(() => { setFeedback(null); setClickedIds(new Set()); setStep((prev) => prev + 1); }, 2000);
    } else {
      playSound('/sounds/wrong.mp3');
      setTimeout(() => { setFeedback(null); }, 2000);
    }
  };

  if (step >= scenarios.length) {
    return (
      <motion.div className="quiz-completion-box" initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
        <h3>{isTurkish ? 'Tüm Görevler Tamamlandı!' : 'All Missions Completed!'}</h3>
        <p>{isTurkish ? 'Artık bilinçli bir dijital vatandaşsın!' : 'You are now a responsible digital citizen!'}</p>
      </motion.div>
    );
  }

  const current = scenarios[step];

  return (
    <div className="hotspot-quiz-container">
      <div className="hotspot-quiz-header">
        <h3>{current.title}</h3>
        <p className="hotspot-quiz-question">{current.question}</p>
        <div className="hotspot-quiz-progress">
          {isTurkish ? 'Görev' : 'Mission'} {step + 1}/{scenarios.length}
        </div>
      </div>
      <div className="hotspot-image-wrapper">
        <img src={current.image} alt={current.title} className="hotspot-quiz-image" />
        {current.hotspots.map((spot) => {
          const wasClicked = clickedIds.has(spot.id);
          const resultClass = wasClicked ? (spot.correct ? 'hotspot-correct' : 'hotspot-wrong') : '';
          return (
            <button key={spot.id} className={`hotspot-button ${resultClass}`} style={spot.style} onClick={() => handleClick(spot)} aria-label="Click to answer" />
          );
        })}
      </div>
      <AnimatePresence>
        {feedback && (
          <motion.div className={`feedback-box ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}`} initial={{ scale: 0.8, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.8, y: -20 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
            {feedback}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Intro wrapper for Crisis Simulation
function CrisisSimulationIntro({ isTurkish }) {
  const [started, setStarted] = useState(false);
  if (started) return <CyberCrisisSimulation isTurkish={isTurkish} />;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
        borderRadius: '16px', padding: '2rem 2.5rem', color: 'white',
        border: '1px solid rgba(99,102,241,0.3)',
        boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
        maxWidth: '640px', margin: '0 auto',
      }}
    >
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛡️</div>
      <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.75rem', color: '#a78bfa' }}>
        {isTurkish ? 'Kriz Simülasyonu' : 'Crisis Simulation'}
      </h3>
      <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
        {isTurkish
          ? 'Bilgisayarın siber saldırıya uğruyor! Doğru adımları izleyerek sistemi kurtar. Her kararın sistem bütünlüğünü etkiler — dikkatli ol!'
          : 'Your computer is under cyber attack! Follow the correct steps to save the system. Every decision affects system integrity — be careful!'}
      </p>
      <ul style={{ color: 'rgba(255,255,255,0.7)', paddingLeft: '1.25rem', marginBottom: '1.75rem', lineHeight: 1.8 }}>
        <li>{isTurkish ? '🔍 Sistemdeki ipuçlarını bul (sahte URL, CPU kullanımı...)' : '🔍 Find clues in the system (fake URL, CPU usage...)'}</li>
        <li>{isTurkish ? '🌐 İnterneti kes — bağlantı açıkken hasar artmaya devam eder' : '🌐 Disconnect internet — damage keeps growing while connected'}</li>
        <li>{isTurkish ? '🧹 Tarama aracını kullanarak virüsü temizle' : '🧹 Use the scan tool to clean the virus'}</li>
        <li>{isTurkish ? '⏱️ Sınırlı süren var — hızlı hareket et!' : '⏱️ You have limited time — act fast!'}</li>
      </ul>
      <motion.button
        whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
        onClick={() => setStarted(true)}
        style={{
          padding: '12px 32px',
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
          color: 'white', border: 'none', borderRadius: '12px',
          fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
          boxShadow: '0 8px 20px rgba(99,102,241,0.4)',
        }}
      >
        🚀 {isTurkish ? 'Simülasyonu Başlat' : 'Start Simulation'}
      </motion.button>
    </motion.div>
  );
}

const SectionComponent = ({ section, isTurkish }) => {
  const activityType = section.activity_type;

  const renderActivity = () => {
    switch (activityType) {
      case 'interactive_quiz':
      case 'quiz': {
        let quizContent = null;
        if (section.content) {
          for (const key in section.content) {
            if (section.content[key]?.quiz) { quizContent = section.content[key].quiz; break; }
          }
        }
        return quizContent
          ? <InteractiveQuiz quizItems={quizContent} isTurkish={isTurkish} stepByStep={true} />
          : <div className="activity-placeholder"><p className="activity-placeholder-text">{isTurkish ? 'Quiz yükleniyor...' : 'Loading quiz...'}</p></div>;
      }
      case 'hotspot_quiz': return <AdvancedHotspotCyberQuiz isTurkish={isTurkish} />;
      case 'crisis_simulation': return <CrisisSimulationIntro isTurkish={isTurkish} />;
      default:
        return (
          <div className="activity-placeholder">
            <p className="activity-placeholder-text">
              {isTurkish ? 'Aktivite bileşeni yükleniyor...' : 'Loading activity component...'}
            </p>
          </div>
        );
    }
  };

  const getActivityTitle = () => {
    switch (activityType) {
      case 'interactive_quiz':
      case 'quiz': return isTurkish ? '🧩 Quiz' : '🧩 Quiz';
      case 'hotspot_quiz': return isTurkish ? '🎯 Senaryo Oyunu' : '🎯 Scenario Game';
      case 'crisis_simulation': return isTurkish ? '🛠️ Kriz Simülasyonu' : '🛠️ Crisis Simulation';
      default: return section.activity_title;
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="section-content">
      {section.subtitle && <div className="section-subtitle"><p>{section.subtitle}</p></div>}
      <div className="section-intro"><p>{section.intro}</p></div>

      {section.content && (
        <div className="content-sections">
          {Object.entries(section.content).map(([key, contentItem]) => (
            <motion.div key={key} className="content-item" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <h3 className="content-item-title">{contentItem.title}</h3>
              {contentItem.image && <img src={contentItem.image} alt={contentItem.title} className="content-image" onError={(e) => { e.target.style.display = 'none'; }} />}
              <p className="content-description">{contentItem.description}</p>
              {contentItem.points && <ul className="content-points">{contentItem.points.map((point, idx) => <li key={idx}>{point}</li>)}</ul>}
              {contentItem.examples && Array.isArray(contentItem.examples) && (
                <div className="content-examples">
                  <h4>{isTurkish ? 'Örnekler:' : 'Examples:'}</h4>
                  <ul>{contentItem.examples.map((example, idx) => <li key={idx}>{example}</li>)}</ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {section.video_links && <VideoLinks videoLinks={section.video_links} />}

      <div className="activity-box">
        <h3>{getActivityTitle()}</h3>
        <p>{section.activity_desc}</p>
        {renderActivity()}
      </div>
    </motion.div>
  );
};

const CompletionScreen = ({ isTurkish }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    style={{
      position: 'fixed', inset: 0, zIndex: 2000,
      background: 'rgba(10,15,40,0.85)', backdropFilter: 'blur(8px)',
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
      <motion.div animate={{ rotate: [0, 10, -10, 10, 0], scale: [1, 1.2, 1] }} transition={{ duration: 0.6, delay: 0.3 }} style={{ fontSize: '4rem', marginBottom: '16px' }}>🏆</motion.div>
      <h2 style={{ color: 'white', fontWeight: 900, fontSize: '1.8rem', margin: '0 0 10px' }}>
        {isTurkish ? 'Tebrikler! Tüm Modüller Tamamlandı!' : 'Congratulations! All Modules Complete!'}
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', margin: '0 0 24px', lineHeight: 1.6 }}>
        {isTurkish ? 'Dijital Dedektif Akademisi\'ni başarıyla bitirdin!' : 'You have successfully completed the Digital Detective Academy!'}
      </p>
    </motion.div>
  </motion.div>
);

function Module6() {
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

  const moduleData = isTurkish ? MODULE6_TR.module_6 : MODULE6_EN.module_6;

  const sections = moduleData.sections.map((section, index) => ({
    id: index + 1,
    title_tr: section.title,
    component: () => <SectionComponent section={section} isTurkish={isTurkish} />,
  }));

  useEffect(() => {
    const clamped = Math.min(Math.max(activeSection, 1), sections.length);
    if (clamped !== activeSection) { setActiveSection(clamped); return; }
    localStorage.setItem(`${MODULE_KEY}_activeSection`, String(activeSection));
  }, [activeSection, sections.length]);

  useEffect(() => {
    localStorage.setItem(`${MODULE_KEY}_completedSections`, JSON.stringify(completedSections));
    window.dispatchEvent(new CustomEvent('sectionProgressUpdate', {
      detail: { module: MODULE_KEY, completedSections, totalSections: sections.length, activeSection },
    }));
  }, [completedSections, activeSection, sections.length]);

  useEffect(() => {
    const handler = (e) => {
      if (e.detail.module === MODULE_KEY) {
        setActiveSection(e.detail.sectionId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('sidebarSectionClick', handler);
    return () => window.removeEventListener('sidebarSectionClick', handler);
  }, []);

  const handleSectionComplete = (sectionId) => {
    if (completedSections.includes(sectionId)) return;
    const newCompleted = [...completedSections, sectionId];
    setCompletedSections(newCompleted);
    if (newCompleted.length === sections.length) {
      const progress = JSON.parse(localStorage.getItem('digitalShieldProgress') || '{}');
      progress.module6 = true;
      localStorage.setItem('digitalShieldProgress', JSON.stringify(progress));
      window.dispatchEvent(new CustomEvent('moduleCompleted', { detail: { module: MODULE_KEY } }));
      setTimeout(() => setShowCompletion(true), 400);
    }
  };

  const currentSection = sections.find((s) => s.id === activeSection);
  const SectionComponentToRender = currentSection?.component;

  if (isLoading) {
    setTimeout(() => setIsLoading(false), 1000);
    return <LoadingScreen onComplete={() => setIsLoading(false)} isTurkish={isTurkish} />;
  }

  return (
    <div className="module-container module-page module6">
      <AnimatePresence>
        {showCompletion && <CompletionScreen isTurkish={isTurkish} />}
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
            <button
              className="mark-complete-btn"
              onClick={() => handleSectionComplete(activeSection)}
              disabled={completedSections.includes(activeSection)}
            >
              {completedSections.includes(activeSection)
                ? isTurkish ? 'Tamamlandı ✓' : 'Completed ✓'
                : isTurkish ? 'Tamamla' : 'Complete'}
            </button>
          </div>
          {SectionComponentToRender && <SectionComponentToRender />}
        </motion.div>
      </AnimatePresence>

      <div className="section-navigation" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 3rem 2rem 4rem' }}>
        <button
          className="nav-btn prev"
          onClick={() => { setActiveSection((p) => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); document.documentElement.scrollTop = 0; document.body.scrollTop = 0; }}
          disabled={activeSection === 1}
        >
          {'<-'} {isTurkish ? 'Önceki' : 'Previous'}
        </button>
        <span style={{ color: '#64748b', fontWeight: 600, fontSize: '0.9rem' }}>
          {activeSection} / {sections.length}
        </span>
        <button
          className="nav-btn next"
          onClick={() => { handleSectionComplete(activeSection); setActiveSection((p) => Math.min(sections.length, p + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); document.documentElement.scrollTop = 0; document.body.scrollTop = 0; }}
          disabled={activeSection === sections.length}
        >
          {isTurkish ? 'Sonraki' : 'Next'} {'->'}
        </button>
      </div>
    </div>
  );
}

export default Module6;
