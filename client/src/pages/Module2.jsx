import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { MODULE2_TR } from '../content/module2_lang_tr';
import { MODULE2_EN } from '../content/module2_lang_en';
import LoadingScreen from '../components/LoadingScreen';
import { useLanguage } from '../contexts/LanguageContext';
import CardMatchingGame from '../components/CardMatchingGame';
import HardwareHotspot from '../components/HardwareHotspot';
import TruthOrTrollGame from '../components/TruthOrTrollGame';
import InteractiveQuiz from '../components/InteractiveQuiz';
import ScenarioGame from '../components/ScenarioGame';
import StoryMode from '../components/StoryMode';
import ContentQuizGame from '../components/ContentQuizGame';
import WheelQuizGame from '../components/WheelQuizGame';
import '../modules.css';

const MODULE_KEY = 'module2';

// ✅ Tamamlama ekranı — Module1 ile aynı yapı
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
        borderRadius: '24px',
        padding: '48px 40px',
        textAlign: 'center',
        maxWidth: '460px',
        width: '90%',
        boxShadow: '0 25px 80px rgba(102,126,234,0.4)',
        border: '1px solid rgba(167,139,250,0.3)',
      }}
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 10, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ fontSize: '4rem', marginBottom: '16px' }}
      >
        🎉
      </motion.div>

      <h2 style={{ color: 'white', fontWeight: 900, fontSize: '1.8rem', margin: '0 0 10px' }}>
        {isTurkish ? 'Modül 2 Tamamlandı!' : 'Module 2 Complete!'}
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', margin: '0 0 24px', lineHeight: 1.6 }}>
        {isTurkish
          ? 'Dijital ayak izi ve çevrimiçi gizliliği başarıyla öğrendin! Şimdi bilgisayar ağları dünyasına geçiyoruz.'
          : 'You mastered digital footprint and online privacy! Now moving on to computer networks.'}
      </p>

      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
        marginBottom: '28px',
      }}>
        <div style={{
          width: '52px', height: '52px', borderRadius: '50%',
          background: 'rgba(167,139,250,0.2)',
          border: '3px solid #a78bfa',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.5rem', fontWeight: 900, color: '#a78bfa',
        }}>
          {countdown}
        </div>
        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
          {isTurkish ? "saniye sonra Modül 3'e geçiliyor..." : 'seconds until Module 3...'}
        </span>
      </div>

      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={onNavigate}
        style={{
          padding: '14px 32px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white', border: 'none', borderRadius: '12px',
          fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
          boxShadow: '0 8px 20px rgba(102,126,234,0.4)',
        }}
      >
        {isTurkish ? "🚀 Modül 3'e Geç" : '🚀 Go to Module 3'}
      </motion.button>
    </motion.div>
  </motion.div>
);

const SectionComponent = ({ section, isTurkish }) => {
  const [showStory, setShowStory] = useState(false);

  const renderActivity = () => {
    const activityType = section.activity_type;
    switch (activityType) {
      case 'card_matching':
        return <CardMatchingGame isTurkish={isTurkish} />;
      case 'network_hotspot':
        return <HardwareHotspot isTurkish={isTurkish} />;
      case 'truth_or_troll':
        return <TruthOrTrollGame isTurkish={isTurkish} />;
      case 'quiz':
      case 'content_quiz':
        return <ContentQuizGame section={section} isTurkish={isTurkish} />;
      case 'interactive_quiz': {
        let quizContent = null;
        if (section.content) {
          for (const key in section.content) {
            if (section.content[key]?.quiz) { quizContent = section.content[key].quiz; break; }
          }
        }
        return quizContent ? (
          <InteractiveQuiz quizItems={quizContent} isTurkish={isTurkish} stepByStep />
        ) : (
          <div className="activity-placeholder">
            <p className="activity-placeholder-text">
              {isTurkish ? 'Quiz soruları yükleniyor...' : 'Loading quiz questions...'}
            </p>
          </div>
        );
      }
      case 'scenario_game':
        return <ScenarioGame isTurkish={isTurkish} isModule2 />;
      case 'wheel_quiz': {
        const wheelQuestions = section?.content?.wheel_questions || section?.wheel_questions || [];
        return <WheelQuizGame isTurkish={isTurkish} questions={wheelQuestions} />;
      }
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
              {Array.isArray(contentItem.video_links) && contentItem.video_links.length > 0 && (
                <div className="video-cards">
                  <h4 className="video-cards-title">
                    {contentItem.video_title || (isTurkish ? 'Video Kartları' : 'Video Cards')}
                  </h4>
                  <div className="video-cards-grid">
                    {contentItem.video_links.map((video, idx) => (
                      <div className="video-card" key={`${key}-video-${idx}`}>
                        <div className="video-card-thumb">
                          <img src={video.thumbnail} alt={video.title} loading="lazy" onError={(e) => { e.target.style.display = 'none'; }} />
                        </div>
                        <div className="video-card-body">
                          <p className="video-card-title">{video.title}</p>
                          <button className="video-card-btn" onClick={() => window.open(video.url, '_blank', 'noopener,noreferrer')}>
                            {contentItem.video_cta || (isTurkish ? 'İzle' : 'Watch')}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {contentItem.quiz &&
                section.activity_type !== 'content_quiz' &&
                section.activity_type !== 'interactive_quiz' && (
                  <InteractiveQuiz quizItems={contentItem.quiz} isTurkish={isTurkish} stepByStep />
                )}
              {contentItem.story_images && (
                <div className="story-images-section">
                  <button onClick={() => setShowStory(true)} className="story-open-btn">
                    {isTurkish ? 'Dijital Ayak İzi Hikayesini Oku' : 'Read Digital Footprint Story'}
                  </button>
                  <StoryMode isOpen={showStory} onClose={() => setShowStory(false)} isTurkish={isTurkish} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {(() => { const act = renderActivity(); return act ? (
        <div className="activity-box">
          <h3>{section.activity_title}</h3>
          <p>{section.activity_desc}</p>
          {act}
        </div>
      ) : null; })()}
    </motion.div>
  );
};

function Module2() {
  const languageState = useLanguage?.();
  const language = languageState?.language || 'tr';
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

  const moduleData = isTurkish ? MODULE2_TR.module_2 : MODULE2_EN.module_2;

  const sections = moduleData.sections.map((section, index) => ({
    id: index + 1,
    title_tr: section.title,
    component: () => <SectionComponent section={section} isTurkish={isTurkish} />,
  }));

  // ✅ activeSection localStorage
  useEffect(() => {
    const clamped = Math.min(Math.max(activeSection, 1), sections.length);
    if (clamped !== activeSection) { setActiveSection(clamped); return; }
    localStorage.setItem(`${MODULE_KEY}_activeSection`, String(activeSection));
  }, [activeSection, sections.length]);

  // ✅ completedSections localStorage + Sidebar event
  useEffect(() => {
    localStorage.setItem(`${MODULE_KEY}_completedSections`, JSON.stringify(completedSections));
    window.dispatchEvent(new CustomEvent('sectionProgressUpdate', {
      detail: { module: MODULE_KEY, completedSections, totalSections: sections.length, activeSection },
    }));
  }, [completedSections, activeSection, sections.length]);

  // ✅ Geri sayım
  useEffect(() => {
    if (!showCompletion) return;
    if (countdown <= 0) { navigate('/module3'); return; }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [showCompletion, countdown, navigate]);

  // ✅ Sidebar section tıklaması
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
    if (!completedSections.includes(sectionId)) {
      const newCompleted = [...completedSections, sectionId];
      setCompletedSections(newCompleted);
      if (newCompleted.length === sections.length) {
        const progress = JSON.parse(localStorage.getItem('digitalShieldProgress') || '{}');
        progress.module2 = true;
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
    <div className="module-container module-page module2">
      <AnimatePresence>
        {showCompletion && (
          <CompletionScreen
            isTurkish={isTurkish}
            countdown={countdown}
            onNavigate={() => navigate('/module3')}
          />
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
          onClick={() => { setActiveSection((p) => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          disabled={activeSection === 1}
        >
          {'<-'} {isTurkish ? 'Önceki' : 'Previous'}
        </button>
        <span style={{ color: '#64748b', fontWeight: 600, fontSize: '0.9rem' }}>
          {activeSection} / {sections.length}
        </span>
        <button
          className="nav-btn next"
          onClick={() => {
            handleSectionComplete(activeSection);
            setActiveSection((p) => Math.min(sections.length, p + 1));
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          disabled={activeSection === sections.length}
        >
          {isTurkish ? 'Sonraki' : 'Next'} {'->'}
        </button>
      </div>
    </div>
  );
}

export default Module2;