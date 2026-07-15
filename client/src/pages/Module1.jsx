import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { MODULE1_TR } from '../content/module1_lang_tr';
import { MODULE1_EN } from '../content/module1_lang_en';
import LoadingScreen from '../components/LoadingScreen';
import { useLanguage } from '../contexts/LanguageContext';
import DataFactoryGame from '../components/DataFactoryGame';
import DataUnitsCrosswordWordwall from '../components/DataUnitsCrosswordWordwall';
import HardwareHotspot from '../components/HardwareHotspot';
import SoftwareSorting from '../components/SoftwareSorting';
import FileExtensionFlashcards from '../components/FileExtensionFlashcards';
import FileExtensionsAirplaneGame from '../components/games/FileExtensionsAirplaneGame';
import ScenarioTest from '../components/ScenarioTest';
import BoxGame from '../components/BoxGame';
import VideoLinks from '../components/VideoLinks';
import { handleImgError } from '../utils/imageFallback';
import { Helmet } from 'react-helmet-async';
import CompletionScreen from '../components/CompletionScreen';
import '../modules.css';

const MODULE_KEY = 'module1';


const ImageLightbox = ({ src, alt, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
    style={{
      position: 'fixed', inset: 0, zIndex: 3000,
      background: 'rgba(0,0,0,0.9)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: 'zoom-out', padding: '20px',
    }}
  >
    <img
      src={src}
      alt={alt}
      style={{ maxWidth: '95vw', maxHeight: '90vh', objectFit: 'contain', borderRadius: '8px' }}
      onClick={(e) => e.stopPropagation()}
    />
    <button
      onClick={onClose}
      style={{
        position: 'absolute', top: '16px', right: '20px',
        background: 'rgba(255,255,255,0.15)', border: 'none',
        color: 'white', fontSize: '1.5rem', cursor: 'pointer',
        borderRadius: '50%', width: '40px', height: '40px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >✕</button>
  </motion.div>
);

const SectionComponent = ({ section, isTurkish }) => {
  const [lightbox, setLightbox] = useState(null);
  const renderActivityByType = (activityType) => {
    switch (activityType) {
      case 'data_factory':
        return <div className="dfg-wrap"><div className="dfg-viewport"><DataFactoryGame isTurkish={isTurkish} /></div></div>;
      case 'data_units_crossword':
      case 'data_units_crossword_wordwall':
        return <DataUnitsCrosswordWordwall />;
      case 'hardware_hotspot':
        return <HardwareHotspot isTurkish={isTurkish} />;
      case 'software_sorting':
        return <SoftwareSorting isTurkish={isTurkish} />;
      case 'box_game':
        return <BoxGame isTurkish={isTurkish} />;
      case 'file_extensions_airplane':
        return <FileExtensionsAirplaneGame />;
      case 'file_flashcards':
        return <FileExtensionFlashcards isTurkish={isTurkish} />;
      case 'scenario_test':
        return <ScenarioTest isTurkish={isTurkish} />;
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
    <>
      <AnimatePresence>
        {lightbox && <ImageLightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
      </AnimatePresence>
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
              {contentItem.image && <img src={contentItem.image} alt={contentItem.title} className="content-image" onError={handleImgError} onClick={() => setLightbox({ src: contentItem.image, alt: contentItem.title })} />}
              <p className="content-description">{contentItem.description}</p>
              {contentItem.points && <ul className="content-points">{contentItem.points.map((p, i) => <li key={i}>{p}</li>)}</ul>}
              {contentItem.examples && Array.isArray(contentItem.examples) && (
                <div className="content-examples">
                  <h4>{isTurkish ? 'Örnekler:' : 'Examples:'}</h4>
                  <ul>{contentItem.examples.map((e, i) => <li key={i}>{e}</li>)}</ul>
                </div>
              )}
              {contentItem.table && (
                <div className="content-table">
                  {Object.entries(contentItem.table).map(([category, data]) => (
                    <div key={category} className="table-item">
                      <h4>{category}</h4>
                      <p><strong>{isTurkish ? 'Görev:' : 'Function:'}</strong> {data['görev'] || data.function}</p>
                      <p><strong>{isTurkish ? 'Örnekler:' : 'Examples:'}</strong> {data['örnekler'] || data.examples}</p>
                      {data.image && <img src={data.image} alt={category} className="table-image" onError={handleImgError} />}
                      {data.images && (
                        <div className="table-images-grid">
                          {Object.entries(data.images).map(([k, src]) => (
                            <div key={k} className="table-image-item">
                              <img src={src} alt={k} className="table-image-small" onError={handleImgError} />
                              <p className="table-image-label">{k}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {contentItem.detailed_parts && (
                <div className="detailed-parts">
                  {contentItem.detailed_parts.map((part, i) => (
                    <div key={i} className="part-card">
                      {part.image && <img src={part.image} alt={part.name} className="part-image" onError={handleImgError} />}
                      <h4>{part.name}</h4>
                      <p><strong>{isTurkish ? 'Görev:' : 'Role:'}</strong> {part.role}</p>
                      <p><em>{part.analogy}</em></p>
                    </div>
                  ))}
                </div>
              )}
              {contentItem.visual_comparison && (
                <div className="visual-comparison">
                  {contentItem.visual_comparison.map((item, i) => (
                    <div key={i} className="comparison-item"><strong>{item.unit}</strong>: {item.size} - {item.example}</div>
                  ))}
                </div>
              )}
              {contentItem.common_extensions && (
                <div className="extensions-grid">
                  {contentItem.common_extensions.map((ext, i) => (
                    <div key={i} className="extension-card">
                      <span className="ext-icon">{ext.icon}</span>
                      <span className="ext-name">{ext.ext}</span>
                      <span className="ext-type">{ext.type}</span>
                      <span className="ext-example">{ext.example}</span>
                    </div>
                  ))}
                </div>
              )}
              {contentItem.organization_tips && <ul className="tips-list">{contentItem.organization_tips.map((t, i) => <li key={i}>{t}</li>)}</ul>}
              {contentItem.checklist && <div className="checklist">{contentItem.checklist.map((item, i) => <div key={i} className="checklist-item">{item}</div>)}</div>}
              {contentItem.threat_types && (
                <div className="threat-types">
                  {contentItem.threat_types.map((t, i) => (
                    <div key={i} className="threat-card">
                      <h4>{t.name}</h4><p>{t.description}</p>
                      <p><strong>{isTurkish ? 'Korunma:' : 'Protection:'}</strong> {t.protection}</p>
                    </div>
                  ))}
                </div>
              )}
              {contentItem.password_rules && <div className="password-rules">{contentItem.password_rules.map((r, i) => <div key={i} className="rule-item">{r}</div>)}</div>}
              {contentItem.scenarios && (
                <div className="scenarios">
                  {contentItem.scenarios.map((s, i) => (
                    <div key={i} className="scenario-card">
                      <h4>{s.situation}</h4>
                      <p><strong>{isTurkish ? 'Yanlış:' : 'Wrong:'}</strong> {s.wrong}</p>
                      <p><strong>{isTurkish ? 'Doğru:' : 'Right:'}</strong> {s.right}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}

      <VideoLinks videoLinks={section.video_links} />

      {Array.isArray(section.activities) && section.activities.length > 0 ? (
        section.activities.map((activity, index) => (
          <div
            className={`activity-box${activity.activity_type === 'file_extensions_airplane' ? ' hidden md:block' : ''}`}
            key={`${activity.activity_type}-${index}`}
          >
            <h3>{activity.activity_title}</h3>
            <p>{activity.activity_desc}</p>
            {renderActivityByType(activity.activity_type)}
          </div>
        ))
      ) : section.activity_type ? (
        <div className={`activity-box${section.activity_type === 'file_extensions_airplane' ? ' hidden md:block' : ''}`}>
          <h3>{section.activity_title}</h3>
          <p>{section.activity_desc}</p>
          {renderActivityByType(section.activity_type)}
        </div>
      ) : null}
    </motion.div>
    </>
  );
};

function Module1() {
  const { language } = useLanguage();
  const isTurkish = language === 'tr';
  const [, navigate] = useLocation();

  const [activeSection, setActiveSection] = useState(() => {
    return Number(localStorage.getItem(`${MODULE_KEY}_activeSection`)) || 1;
  });

  const [completedSections, setCompletedSections] = useState(() => {
    try { return JSON.parse(localStorage.getItem(`${MODULE_KEY}_completedSections`) || '[]'); }
    catch { return []; }
  });

  const [isLoading, setIsLoading] = useState(true);
  // ✅ Tamamlama ekranı state'leri
  const [showCompletion, setShowCompletion] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const moduleData = isTurkish ? MODULE1_TR.module_1 : MODULE1_EN.module_1;
  const sections = moduleData.sections.map((section, index) => ({
    id: index + 1,
    title_tr: section.title,
    component: () => <SectionComponent section={section} isTurkish={isTurkish} />,
  }));

  useEffect(() => {
    const clamped = Math.min(Math.max(activeSection, 1), sections.length);
    if (clamped !== activeSection) { setActiveSection(clamped); return; }
    localStorage.setItem(`${MODULE_KEY}_activeSection`, String(activeSection));
    window.scrollTo(0, 0);
  }, [activeSection, sections.length]);

  useEffect(() => {
    localStorage.setItem(`${MODULE_KEY}_completedSections`, JSON.stringify(completedSections));
    window.dispatchEvent(new CustomEvent('sectionProgressUpdate', {
      detail: { module: MODULE_KEY, completedSections, totalSections: sections.length, activeSection },
    }));
  }, [completedSections, activeSection, sections.length]);

  // ✅ Geri sayım — tamamlama ekranı açıkken çalışır
  useEffect(() => {
    if (!showCompletion) return;
    if (countdown <= 0) { localStorage.setItem('module2_activeSection', '1'); navigate('/module2'); return; }
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
        progress.module1 = true;
        if (!progress.badges) progress.badges = [];
        if (!progress.badges.includes('module1')) progress.badges.push('module1');
        localStorage.setItem('digitalShieldProgress', JSON.stringify(progress));
        window.dispatchEvent(new CustomEvent('moduleCompleted', { detail: { module: MODULE_KEY } }));
        // ✅ alert yerine tamamlama ekranı
        setTimeout(() => {
          setShowCompletion(true);
          setCountdown(5);
        }, 400);
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
    <div className="module-container module-page module1">
      <Helmet>
        <title>Bilgisayar Dünyasını Keşfediyorum | Digital Detective Academy</title>
        <meta name="description" content="Donanım, yazılım, dosya uzantıları ve veri birimleri hakkında her şeyi interaktif oyunlar ve etkinliklerle öğren." />
        <meta property="og:title" content="Bilgisayar Dünyasını Keşfediyorum | Digital Detective Academy" />
        <meta property="og:description" content="Donanım, yazılım, dosya uzantıları ve veri birimleri hakkında her şeyi interaktif oyunlar ve etkinliklerle öğren." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.digitaldetectiveacademy.com/module1" />
        <meta property="og:image" content="https://www.digitaldetectiveacademy.com/og-image.png" />
      </Helmet>
      {/* ✅ Tamamlama ekranı */}
      <AnimatePresence>
        {showCompletion && (
          <CompletionScreen
            title={isTurkish ? 'Modül 1 Tamamlandı!' : 'Module 1 Complete!'}
            description={isTurkish ? 'Bilgisayar dünyasını başarıyla keşfettin! Şimdi ağlar ve iletişim dünyasına geçiyoruz.' : 'You successfully explored the computer world! Now moving on to networks and communication.'}
            countdown={countdown}
            nextLabel={isTurkish ? "saniye sonra Modül 2'ye geçiliyor..." : 'seconds until Module 2...'}
            buttonLabel={isTurkish ? "🚀 Modül 2'ye Geç" : '🚀 Go to Module 2'}
            onNavigate={() => { localStorage.setItem('module2_activeSection', '1'); navigate('/module2'); }}
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

export default Module1;