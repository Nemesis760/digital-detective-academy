// -*- coding: utf-8 -*-
import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { AnimatePresence, motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import { MODULE3_TR } from '../content/module3_lang_tr';
import { MODULE3_EN } from '../content/module3_lang_en';

import LoadingScreen from '../components/LoadingScreen';
import { useLanguage } from '../contexts/LanguageContext';

import HardwareHotspot from '../components/HardwareHotspot';
import NetworkDeviceMatchingGame from '../components/NetworkDeviceMatchingGame';
import NetworkDevicePlacementGame from '../components/NetworkDevicePlacementGame';
import InteractiveQuiz from '../components/InteractiveQuiz';
import ScenarioGame from '../components/ScenarioGame';
import HangmanGame from '../components/HangmanGame';
import StoryMode from '../components/StoryMode';
import VideoLinks from '../components/VideoLinks';

import { NETWORK_SECURITY_HANGMAN } from "../content/activities/network_security_hangman";
import { BROWSER_SEARCH_CARD_MATCHING } from '../content/activities/browser_search_card_matching';
import { CLIENT_SERVER_CARD_MATCHING } from '../content/activities/client_server_card_matching';
import { URL_PARTS_QUIZ } from '../content/activities/url_parts_quiz';
import { NETWORK_TYPES_CARD_MATCHING } from '../content/activities/network_types_card_matching';
import { DEVICE_COMMUNICATION_HOTSPOT } from '../content/activities/device_communication_hotspot';
import { NETWORK_DEVICE_MATCHING } from '../content/activities/network_device_matching';
import { NETWORK_SECURITY_QUIZ } from '../content/activities/network_security_quiz';
import { NETWORK_LOST_PACKET_SCENARIO } from '../content/activities/network_lost_packet_scenario';
import { WIRED_WIRELESS_TRUTH_OR_TROLL } from '../content/activities/wired_wireless_truth_or_troll';

const WIRED_WIRELESS_QUIZ = WIRED_WIRELESS_TRUTH_OR_TROLL.statements.map((s) => ({
  type: 'true_false',
  question_tr: s.text_tr,
  question_en: s.text_en,
  answer: s.answer,
  explanation_tr: s.explanation_tr,
  explanation_en: s.explanation_en,
}));

import '../modules.css';

const MODULE_KEY = 'module3';

// ------------------------------------------------------
// Completion Screen
// ------------------------------------------------------
const CompletionScreen = ({ isTurkish, onNavigate, countdown }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    style={{
      position: 'fixed',
      inset: 0,
      zIndex: 2000,
      background: 'rgba(10,15,40,0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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
        {isTurkish ? 'Modül 3 Tamamlandı!' : 'Module 3 Complete!'}
      </h2>

      <p
        style={{
          color: 'rgba(255,255,255,0.75)',
          fontSize: '1rem',
          margin: '0 0 24px',
          lineHeight: 1.6,
        }}
      >
        {isTurkish
          ? 'Bilgisayar ağları ve dijital iletişimi başarıyla tamamladın! Şimdi Modül 4\'e geçiyoruz.'
          : 'You successfully completed computer networks and digital communication! Now moving on to Module 4.'}
      </p>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '28px',
        }}
      >
        <div
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: 'rgba(167,139,250,0.2)',
            border: '3px solid #a78bfa',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            fontWeight: 900,
            color: '#a78bfa',
          }}
        >
          {countdown}
        </div>

        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
          {isTurkish ? "saniye sonra Modül 4'e geçiliyor..." : 'seconds until Module 4...'}
        </span>
      </div>

      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={onNavigate}
        style={{
          padding: '14px 32px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          fontWeight: 700,
          fontSize: '1rem',
          cursor: 'pointer',
          boxShadow: '0 8px 20px rgba(102,126,234,0.4)',
        }}
      >
        {isTurkish ? "🚀 Modül 4'e Geç" : '🚀 Go to Module 4'}
      </motion.button>
    </motion.div>
  </motion.div>
);

// ------------------------------------------------------
// Section Component
// ------------------------------------------------------
const SectionComponent = ({ section, isTurkish }) => {
  const [showStory, setShowStory] = useState(false);

  const shouldRenderInlineQuiz = section.activity_type !== 'interactive_quiz';
  const isDeviceSection = section.id === 7;

  const getActivityData = (currentSection) => {
    if (!currentSection) return null;
    const { activity_type, activity_key } = currentSection;

    switch (activity_type) {
      case 'card_matching': {
        const map = {
          network_types: NETWORK_TYPES_CARD_MATCHING,
          browser_search: BROWSER_SEARCH_CARD_MATCHING,
          client_server: CLIENT_SERVER_CARD_MATCHING,
        };
        return map[activity_key] || null;
      }

      case 'interactive_quiz': {
        const map = {
          network_security: NETWORK_SECURITY_QUIZ.quiz,
          url_parts: URL_PARTS_QUIZ.quiz,
          wired_wireless: WIRED_WIRELESS_QUIZ,
        };

        if (activity_key) {
          return map[activity_key] || null;
        }

        if (currentSection.content) {
          for (const key in currentSection.content) {
            if (currentSection.content[key]?.quiz) {
              return currentSection.content[key].quiz;
            }
          }
        }

        return null;
      }

      case 'network_hotspot': {
        const map = {
          device_communication: DEVICE_COMMUNICATION_HOTSPOT,
        };
        return map[activity_key] || null;
      }

      case 'network_device_matching': {
        if (activity_key === 'network_device_matching') return NETWORK_DEVICE_MATCHING;
        return null;
      }

      case 'network_device_placement':
        return true;

      case 'hangman': {
        const map = {
          network_security_hangman: NETWORK_SECURITY_HANGMAN,
        };
        return map[activity_key] || null;
      }

      case 'scenario_game': {
        const map = {
          lost_packet: NETWORK_LOST_PACKET_SCENARIO,
        };
        return map[activity_key] || null;
      }

      default:
        return null;
    }
  };

  const renderActivity = (activityData) => {
    switch (section.activity_type) {
      case 'network_hotspot':
        if (!activityData) return null;
        return <HardwareHotspot isTurkish={isTurkish} data={activityData} />;

      case 'network_device_matching':
        if (!activityData) return null;
        return <NetworkDeviceMatchingGame isTurkish={isTurkish} data={activityData} />;

      case 'network_device_placement':
        return <NetworkDevicePlacementGame isTurkish={isTurkish} />;

      case 'hangman':
        if (!activityData) return null;
        return <HangmanGame isTurkish={isTurkish} data={activityData} compact />;

      case 'interactive_quiz':
        if (!activityData) return null;
        return (
          <InteractiveQuiz
            quizItems={activityData}
            isTurkish={isTurkish}
            stepByStep={section.activity_key === 'network_security'}
          />
        );

      case 'scenario_game':
        if (!activityData) return null;
        return <ScenarioGame isTurkish={isTurkish} data={activityData} />;

      default:
        return null;
    }
  };

  const activityData = getActivityData(section);
  const activityElement =
    section.activity_type && activityData ? renderActivity(activityData) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="section-content"
    >
      {section.subtitle && (
        <div className="section-subtitle">
          <p>{section.subtitle}</p>
        </div>
      )}

      <div className="section-intro">
        <p>{section.intro}</p>
      </div>

      {section.content && (
        <div className={`content-sections ${isDeviceSection ? 'module3-device-grid' : ''}`}>
          {Object.entries(section.content).map(([key, contentItem]) => (
            <motion.div
              key={key}
              className="content-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="content-item-title">{contentItem.title}</h3>

              {contentItem.image && (
                <img
                  src={contentItem.image}
                  alt={contentItem.title}
                  className="content-image"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              )}

              <p className="content-description">{contentItem.description}</p>

              {contentItem.points && (
                <ul className="content-points">
                  {contentItem.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}

              {Array.isArray(contentItem.examples) && contentItem.examples.length > 0 && (
                <div className="content-examples">
                  <h4>{isTurkish ? 'Örnekler:' : 'Examples:'}</h4>
                  <ul>
                    {contentItem.examples.map((example, idx) => (
                      <li key={idx}>{example}</li>
                    ))}
                  </ul>
                </div>
              )}

              {Array.isArray(contentItem.video_links) && contentItem.video_links.length > 0 && (
                <VideoLinks videoLinks={contentItem.video_links} />
              )}

              {shouldRenderInlineQuiz && contentItem.quiz && (
                <InteractiveQuiz quizItems={contentItem.quiz} isTurkish={isTurkish} />
              )}

              {contentItem.story_images && (
                <div className="story-images-section">
                  <button onClick={() => setShowStory(true)} className="story-open-btn">
                    📖 {isTurkish ? 'Hikayeyi Oku' : 'Read Story'}
                  </button>

                  <StoryMode
                    isOpen={showStory}
                    onClose={() => setShowStory(false)}
                    isTurkish={isTurkish}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {section.activity_type && !activityData && (
        <div className="activity-placeholder">
          <p className="activity-placeholder-text">
            {isTurkish
              ? `Aktivite verisi eksik: ${section.activity_type} / ${section.activity_key || 'key yok'}`
              : `Activity data missing: ${section.activity_type} / ${section.activity_key || 'no key'}`}
          </p>
        </div>
      )}

      {activityElement && (
        <div className="activity-box">
          <h3>{section.activity_title}</h3>
          <p>{section.activity_desc}</p>
          {activityElement}
        </div>
      )}
    </motion.div>
  );
};

// ------------------------------------------------------
// Main Module
// ------------------------------------------------------
function Module3() {
  const { language } = useLanguage();
  const isTurkish = language === 'tr';
  const [, navigate] = useLocation();

  const [activeSection, setActiveSection] = useState(() => {
    const parsed = Number(localStorage.getItem(`${MODULE_KEY}_activeSection`));
    return Number.isFinite(parsed) && parsed >= 1 ? parsed : 1;
  });

  const [completedSections, setCompletedSections] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(`${MODULE_KEY}_completedSections`) || '[]');
    } catch {
      return [];
    }
  });

  const [isLoading, setIsLoading] = useState(true);
  const [showCompletion, setShowCompletion] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const moduleData = isTurkish ? MODULE3_TR.module_3 : MODULE3_EN.module_3;

  const sections = moduleData.sections.map((section, index) => ({
    id: index + 1,
    title_tr: section.title,
    component: () => <SectionComponent section={section} isTurkish={isTurkish} />,
  }));

  useEffect(() => {
    const clamped = Math.min(Math.max(activeSection, 1), sections.length);
    if (clamped !== activeSection) {
      setActiveSection(clamped);
      return;
    }
    localStorage.setItem(`${MODULE_KEY}_activeSection`, String(activeSection));
  }, [activeSection, sections.length]);

  useEffect(() => {
    localStorage.setItem(`${MODULE_KEY}_completedSections`, JSON.stringify(completedSections));
    window.dispatchEvent(
      new CustomEvent('sectionProgressUpdate', {
        detail: {
          module: MODULE_KEY,
          completedSections,
          totalSections: sections.length,
          activeSection,
        },
      })
    );
  }, [completedSections, activeSection, sections.length]);

  useEffect(() => {
    if (!showCompletion) return;
    if (countdown <= 0) {
      navigate('/module4');
      return;
    }

    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [showCompletion, countdown, navigate]);

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
      progress.module3 = true;
      if (!progress.badges) progress.badges = [];
      if (!progress.badges.includes('module3')) progress.badges.push('module3');
      localStorage.setItem('digitalShieldProgress', JSON.stringify(progress));

      window.dispatchEvent(
        new CustomEvent('moduleCompleted', { detail: { module: MODULE_KEY } })
      );

      setTimeout(() => {
        setShowCompletion(true);
        setCountdown(5);
      }, 400);
    }
  };

  const currentSection = sections.find((s) => s.id === activeSection);
  const SectionComponentToRender = currentSection?.component;

  if (isLoading) {
    setTimeout(() => setIsLoading(false), 1000);
    return <LoadingScreen onComplete={() => setIsLoading(false)} isTurkish={isTurkish} />;
  }

  return (
    <div className="module-container module-page module3">
      <Helmet>
        <title>Bilgisayar Ağları ve Dijital İletişim | Digital Detective Academy</title>
        <meta name="description" content="İnternet nasıl çalışır? Ağ cihazları, protokoller ve dijital iletişimi interaktif oyunlarla öğren." />
        <meta property="og:title" content="Bilgisayar Ağları ve Dijital İletişim | Digital Detective Academy" />
        <meta property="og:description" content="İnternet nasıl çalışır? Ağ cihazları, protokoller ve dijital iletişimi interaktif oyunlarla öğren." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.digitaldetectiveacademy.com/module3" />
        <meta property="og:image" content="https://www.digitaldetectiveacademy.com/og-image.png" />
      </Helmet>
      <AnimatePresence>
        {showCompletion && (
          <CompletionScreen
            isTurkish={isTurkish}
            countdown={countdown}
            onNavigate={() => navigate('/module4')}
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
          </div>

          {SectionComponentToRender && <SectionComponentToRender />}
        </motion.div>
      </AnimatePresence>

      <div
        className="section-navigation"
        style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 3rem 2rem 4rem' }}
      >
        <button
          className="nav-btn prev"
          onClick={() => {
            setActiveSection((prev) => Math.max(1, prev - 1));
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
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
              setActiveSection((prev) => Math.min(sections.length, prev + 1));
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {isTurkish ? 'Sonraki' : 'Next'} {'->'}
          </button>
        )}
      </div>
    </div>
  );
}

export default Module3;