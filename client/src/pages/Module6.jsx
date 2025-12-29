import { useState } from 'react';
import { Link } from 'wouter';
import { AnimatePresence, motion } from 'framer-motion';
import { MODULE_CONTENT_TR } from '../content/module_content_tr';
import { MODULE6_EN } from '../content/module6_lang_en';
import LoadingScreen from '../components/LoadingScreen';
import { useLanguage } from '../contexts/LanguageContext';
import CyberCrisisSimulation from '../components/CyberCrisisSimulation';
import FlappyBirdGame from '../components/FlappyBirdGame';
import '../modules.css';
import './module5.css';

/* ======================================================
   ADVANCED HOTSPOT CYBER QUIZ
   Sesli + Animasyonlu + 4 Senaryo
====================================================== */

function AdvancedHotspotCyberQuiz({ isTurkish }) {
  const scenarios = [
    {
      title: isTurkish ? 'Gizemli Link' : 'Mystery Link',
      image: '/images/quiz/link-message.jpg',
      question: isTurkish
        ? 'Efe hangisine tıklamalı?'
        : 'Where should Efe click?',
      hotspots: [
        { id: 1, correct: false, style: { top: '45%', left: '30%' } },
        { id: 2, correct: true, style: { top: '72%', left: '65%' } }
      ],
      correctText: isTurkish
        ? 'Harika! Bilinmeyen linkler silinmelidir 🛡️'
        : 'Great! Unknown links should be deleted 🛡️',
      wrongText: isTurkish
        ? 'Bu tehlikeli olabilir. Tekrar dene!'
        : 'This could be dangerous. Try again!'
    },
    {
      title: isTurkish ? 'Şifre Tuzağı' : 'Password Trap',
      image: '/images/quiz/password.jpg',
      question: isTurkish
        ? 'Doğru davranış hangisi?'
        : 'Which is the right action?',
      hotspots: [
        { id: 1, correct: false, style: { top: '55%', left: '42%' } },
        { id: 2, correct: true, style: { top: '78%', left: '68%' } }
      ],
      correctText: isTurkish
        ? 'Süper! Şifreler gizli tutulur 🔐'
        : 'Well done! Passwords are private 🔐',
      wrongText: isTurkish
        ? 'Yanlış seçim! Şifre paylaşılmaz.'
        : 'Wrong choice! Passwords are not shared.'
    },
    {
      title: isTurkish ? 'Tanımadık Mesaj' : 'Unknown Message',
      image: '/images/quiz/stranger-message.jpg',
      question: isTurkish
        ? 'Efe ne yapmalı?'
        : 'What should Efe do?',
      hotspots: [
        { id: 1, correct: false, style: { top: '50%', left: '35%' } },
        { id: 2, correct: true, style: { top: '75%', left: '70%' } }
      ],
      correctText: isTurkish
        ? 'Doğru! Tanımadığın kişilerle konuşma 🚫'
        : 'Correct! Do not talk to strangers 🚫',
      wrongText: isTurkish
        ? 'Bu güvenli değil. Tekrar dene.'
        : 'This is not safe. Try again.'
    },
    {
      title: isTurkish ? 'Acil E-posta' : 'Urgent Email',
      image: '/images/quiz/email-urgent.jpg',
      question: isTurkish
        ? 'En güvenli seçim hangisi?'
        : 'What is the safest choice?',
      hotspots: [
        { id: 1, correct: false, style: { top: '48%', left: '40%' } },
        { id: 2, correct: true, style: { top: '80%', left: '65%' } }
      ],
      correctText: isTurkish
        ? 'Harika! Önce bir büyüğüne danışmalısın 👨‍👩‍👧'
        : 'Great! Ask an adult first 👨‍👩‍👧',
      wrongText: isTurkish
        ? 'Acele etmek risklidir!'
        : 'Rushing can be risky!'
    }
  ];

  const [step, setStep] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  const playSound = (soundFile) => {
    try {
      const audio = new Audio(soundFile);
      audio.volume = 0.5;
      audio.play().catch(err => console.log('Audio play failed:', err));
    } catch (err) {
      console.log('Sound error:', err);
    }
  };

  const handleClick = (spot) => {
    setIsCorrect(spot.correct);
    setFeedback(
      spot.correct ? scenarios[step].correctText : scenarios[step].wrongText
    );

    if (spot.correct) {
      playSound('/sounds/correct.mp3');
      setTimeout(() => {
        setFeedback(null);
        setStep((prev) => prev + 1);
      }, 2000);
    } else {
      playSound('/sounds/wrong.mp3');
      setTimeout(() => {
        setFeedback(null);
      }, 2000);
    }
  };

  if (step >= scenarios.length) {
    return (
      <motion.div
        className="quiz-completion-box"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <h3>🏆 {isTurkish ? 'Tüm Görevler Tamamlandı!' : 'All Missions Completed!'}</h3>
        <p>
          {isTurkish
            ? 'Artık bilinçli bir dijital vatandaşsın!'
            : 'You are now a responsible digital citizen!'}
        </p>
      </motion.div>
    );
  }

  const current = scenarios[step];

  return (
    <div className="hotspot-quiz-container">
      <div className="hotspot-quiz-header">
        <h3>🕵️ {current.title}</h3>
        <p className="hotspot-quiz-question">{current.question}</p>
        <div className="hotspot-quiz-progress">
          {isTurkish ? 'Görev' : 'Mission'} {step + 1}/{scenarios.length}
        </div>
      </div>

      <div className="hotspot-image-wrapper">
        <img src={current.image} alt={current.title} className="hotspot-quiz-image" />
        {current.hotspots.map((spot) => (
          <button
            key={spot.id}
            className={`hotspot-button ${spot.correct ? 'hotspot-correct' : 'hotspot-wrong'}`}
            style={spot.style}
            onClick={() => handleClick(spot)}
            aria-label={spot.correct ? 'Correct answer' : 'Wrong answer'}
          />
        ))}
      </div>

      <AnimatePresence>
        {feedback && (
          <motion.div
            className={`feedback-box ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}`}
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {feedback}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Her bölüm için genel bir bileşen
const SectionComponent = ({ section, isTurkish }) => {
  const renderActivity = () => {
    const activityType = section.activity_type;
    
    switch(activityType) {
      case 'flappy_bird':
        return <FlappyBirdGame isTurkish={isTurkish} />;
      case 'hotspot_quiz':
        return <AdvancedHotspotCyberQuiz isTurkish={isTurkish} />;
      case 'crisis_simulation':
        return <CyberCrisisSimulation isTurkish={isTurkish} />;
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

      {/* Content Sections */}
      {section.content && (
        <div className="content-sections">
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
                    e.target.style.display = 'none';
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

              {contentItem.examples && Array.isArray(contentItem.examples) && (
                <div className="content-examples">
                  <h4>{isTurkish ? 'Örnekler:' : 'Examples:'}</h4>
                  <ul>
                    {contentItem.examples.map((example, idx) => (
                      <li key={idx}>{example}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {/* Aktivite Alanı */}
      <div className="activity-box">
        <h3>{section.activity_title}</h3>
        <p>{section.activity_desc}</p>
        {renderActivity()}
      </div>
    </motion.div>
  );
};

// Ana Module6 Bileşeni
function Module6() {
  const { language } = useLanguage();
  const isTurkish = language === 'tr';
  const [activeSection, setActiveSection] = useState(1);
  const [completedSections, setCompletedSections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Get module data based on language
  const moduleData = isTurkish ? MODULE_CONTENT_TR.module_6 : MODULE6_EN.module_6;

  const sections = moduleData.sections.map((section, index) => ({
    id: index + 1,
    title_tr: section.title,
    component: () => <SectionComponent section={section} isTurkish={isTurkish} />,
  }));

  const handleSectionComplete = (sectionId) => {
    if (!completedSections.includes(sectionId)) {
      const newCompleted = [...completedSections, sectionId];
      setCompletedSections(newCompleted);
      
      // Check if all sections are completed
      if (newCompleted.length === sections.length) {
        // Mark module as completed in localStorage
        const progress = JSON.parse(localStorage.getItem('digitalShieldProgress') || '{}');
        progress.module6 = true;
        localStorage.setItem('digitalShieldProgress', JSON.stringify(progress));
        
        // Dispatch custom event to notify Home page
        window.dispatchEvent(new CustomEvent('moduleCompleted', { detail: { module: 'module6' } }));
        
        // Show completion message
        setTimeout(() => {
          alert(isTurkish 
            ? '🎉 Tebrikler! Modül 6\'yı tamamladın! Tüm modülleri bitirdin!'
            : '🎉 Congratulations! You completed Module 6! You finished all modules!');
        }, 500);
      }
    }
  };

  const currentSection = sections.find(s => s.id === activeSection);
  const SectionComponentToRender = currentSection?.component;

  // Simülasyon için Loading ekranını kaldır
  if (isLoading) {
    setTimeout(() => setIsLoading(false), 1000);
    return <LoadingScreen onComplete={() => setIsLoading(false)} isTurkish={isTurkish} />;
  }

  return (
    <div className="module-container">
      <div className="module-layout">
        {/* Sol Menu */}
        <div className="module-sidebar">
          <div className="sidebar-header">
            <Link href="/" className="back-home-btn">
              ← {isTurkish ? 'Ana Sayfa' : 'Home'}
            </Link>
            <h2>{moduleData.title}</h2>
            <p>{moduleData.subtitle}</p>
          </div>

          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${(completedSections.length / sections.length) * 100}%` }}
            ></div>
          </div>
          <p className="progress-text">
            {completedSections.length}/{sections.length} {isTurkish ? 'Tamamlandı' : 'Completed'}
          </p>

          <div className="sections-nav">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`nav-item ${activeSection === section.id ? 'active' : ''} ${completedSections.includes(section.id) ? 'completed' : ''}`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.title_tr}
              </button>
            ))}
          </div>
        </div>

        {/* Ana İçerik */}
        <div className="module-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="content-wrapper"
            >
              <div className="content-header">
                <h1>{currentSection?.title_tr}</h1>
                <button 
                  className="mark-complete-btn"
                  onClick={() => handleSectionComplete(activeSection)}
                  disabled={completedSections.includes(activeSection)}
                >
                  {completedSections.includes(activeSection) 
                    ? (isTurkish ? 'Tamamlandı ✓' : 'Completed ✓')
                    : (isTurkish ? 'Tamamla' : 'Complete')}
                </button>
              </div>

              {SectionComponentToRender && <SectionComponentToRender />}
            </motion.div>
          </AnimatePresence>

          {/* Bölüm Navigasyonu */}
          <div className="section-navigation">
            <button 
              className="nav-btn prev"
              onClick={() => setActiveSection(prev => Math.max(1, prev - 1))}
              disabled={activeSection === 1}
            >
              ← {isTurkish ? 'Önceki' : 'Previous'}
            </button>
            
            <button 
              className="nav-btn next"
              onClick={() => {
                handleSectionComplete(activeSection);
                setActiveSection(prev => Math.min(sections.length, prev + 1));
              }}
              disabled={activeSection === sections.length}
            >
              {isTurkish ? 'Sonraki' : 'Next'} →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Module6;

