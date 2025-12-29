import { useState } from 'react';
import { Link } from 'wouter';
import { AnimatePresence, motion } from 'framer-motion';
import { MODULE_CONTENT_TR } from '../content/module_content_tr';
import { MODULE4_EN } from '../content/module4_lang_en';
import LoadingScreen from '../components/LoadingScreen';
import { useLanguage } from '../contexts/LanguageContext';
import PasswordSmithGame from '../components/PasswordSmithGame';
import InteractiveQuiz from '../components/InteractiveQuiz';
import WordleGame from '../components/WordleGame';
import ScenarioGame_2FA from '../components/ScenarioGame_2FA';
import TruthOrTrollGame from '../components/TruthOrTrollGame';
import '../modules.css';

// Her bölüm için genel bir bileşen
const SectionComponent = ({ section, isTurkish }) => {
  const renderActivity = () => {
    const activityType = section.activity_type;
    
    switch(activityType) {
      case 'password_smith':
        return <PasswordSmithGame isTurkish={isTurkish} />;
      case 'wordle_game':
        return <WordleGame isTurkish={isTurkish} />;
      case 'truth_or_troll':
        return <TruthOrTrollGame isTurkish={isTurkish} />;
      case 'scenario_2fa':
        return <ScenarioGame_2FA isTurkish={isTurkish} />;
      case 'quiz':
        // Section içindeki quiz sorularını bul
        let quizContent = null;
        if (section.content) {
          // Tüm content item'larında quiz ara
          for (const key in section.content) {
            if (section.content[key]?.quiz) {
              quizContent = section.content[key].quiz;
              break;
            }
          }
        }
        return quizContent ? (
          <InteractiveQuiz quizItems={quizContent} isTurkish={isTurkish} />
        ) : (
          <div className="activity-placeholder">
            <p className="activity-placeholder-text">
              {isTurkish ? 'Quiz soruları yükleniyor...' : 'Loading quiz questions...'}
            </p>
          </div>
        );
      case 'interactive_quiz':
        // Section 6 için quiz sorularını içerikten al
        let interactiveQuizContent = null;
        if (section.content) {
          if (section.content["6.1"]?.quiz) {
            interactiveQuizContent = section.content["6.1"].quiz;
          }
        }
        return interactiveQuizContent ? (
          <InteractiveQuiz quizItems={interactiveQuizContent} isTurkish={isTurkish} />
        ) : (
          <div className="activity-placeholder">
            <p className="activity-placeholder-text">
              {isTurkish ? 'Quiz soruları yükleniyor...' : 'Loading quiz questions...'}
            </p>
          </div>
        );
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

              {contentItem.quiz && (
                <InteractiveQuiz quizItems={contentItem.quiz} isTurkish={isTurkish} />
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

// Ana Module4 Bileşeni
function Module4() {
  const { language } = useLanguage();
  const isTurkish = language === 'tr';
  const [activeSection, setActiveSection] = useState(1);
  const [completedSections, setCompletedSections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Get module data based on language
  const moduleData = isTurkish ? MODULE_CONTENT_TR.module_4 : MODULE4_EN.module_4;

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
        progress.module4 = true;
        localStorage.setItem('digitalShieldProgress', JSON.stringify(progress));
        
        // Dispatch custom event to notify Home page
        window.dispatchEvent(new CustomEvent('moduleCompleted', { detail: { module: 'module4' } }));
        
        // Show completion message
        setTimeout(() => {
          alert(isTurkish 
            ? '🎉 Tebrikler! Modül 4\'ü tamamladın! Artık Modül 5\'e geçebilirsin!'
            : '🎉 Congratulations! You completed Module 4! You can now access Module 5!');
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

export default Module4;
