import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'wouter';

import '../modules.css';
import './module4.css';

import { useLanguage } from '../contexts/LanguageContext';
import LoadingScreen from '../components/LoadingScreen';

import { MODULE4_TR } from '../content/module4_lang_tr';
import { MODULE4_EN } from '../content/module4_lang_en';

import InteractiveQuiz from '../components/InteractiveQuiz';
import Module4MiniQuiz from '../components/Module4MiniQuiz';
import CardMatchGame from '../components/CardMatchGame';
import WordPuzzleGame from '../components/WordPuzzleGame';
import PasswordSmithGame from '../components/PasswordSmithGame';

const MODULE_KEY = 'module4';

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
        {isTurkish ? 'Modül 4 Tamamlandı!' : 'Module 4 Complete!'}
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', margin: '0 0 24px', lineHeight: 1.6 }}>
        {isTurkish
          ? 'Şifre güvenliğini başarıyla öğrendin! Dijital güvenlik modülüne geçiyoruz.'
          : 'You mastered password security! Moving on to digital safety.'}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '28px' }}>
        <div style={{
          width: '52px', height: '52px', borderRadius: '50%',
          background: 'rgba(167,139,250,0.2)', border: '3px solid #a78bfa',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.5rem', fontWeight: 900, color: '#a78bfa',
        }}>{countdown}</div>
        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
          {isTurkish ? "saniye sonra Modül 5'e geçiliyor..." : 'seconds until Module 5...'}
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
        {isTurkish ? "🚀 Modül 5'e Geç" : '🚀 Go to Module 5'}
      </motion.button>
    </motion.div>
  </motion.div>
);

/* Local helper games */
const FlashcardsGame = ({ cards = [] }) => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  return (
    <div className="m4-flashcards-grid">
      {cards.map((card, idx) => (
        <button
          key={idx} type="button"
          className={`m4-flashcard ${flippedIndex === idx ? 'flipped' : ''}`}
          onClick={() => setFlippedIndex(flippedIndex === idx ? null : idx)}
        >
          <div className="m4-flashcard-inner">
            <div className="m4-flashcard-front"><p>{card.front}</p><span className="m4-flip-icon">↻</span></div>
            <div className="m4-flashcard-back"><p>{card.back}</p></div>
          </div>
        </button>
      ))}
    </div>
  );
};

const SorterGame = ({ activity, isTurkish }) => {
  const items = activity?.items || [];
  const [placement, setPlacement] = useState({});
  const [draggedId, setDraggedId] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const init = {};
    for (const it of items) init[it.id] = 'pool';
    setPlacement(init); setDraggedId(null); setShowResults(false); setFeedback('');
  }, [activity]);

  const poolItems = items.filter((it) => (placement[it.id] || 'pool') === 'pool');
  const safeItems = items.filter((it) => placement[it.id] === 'safe');
  const riskyItems = items.filter((it) => placement[it.id] === 'risky');
  const allPlaced = items.length > 0 && poolItems.length === 0;

  const onDragStart = (e, id) => { setDraggedId(id); try { e.dataTransfer.setData('text/plain', String(id)); } catch {} };
  const onDragOver = (e) => { e.preventDefault(); };
  const moveTo = (id, zone) => { setPlacement((prev) => ({ ...prev, [id]: zone })); setShowResults(false); setFeedback(''); };
  const onDrop = (e, zone) => {
    e.preventDefault();
    const id = (() => { try { return e.dataTransfer.getData('text/plain'); } catch { return ''; } })() || draggedId;
    if (!id) return;
    moveTo(id, zone); setDraggedId(null);
  };

  const checkAnswers = () => {
    if (!allPlaced) return;
    setShowResults(true);
    const wrongCount = items.filter((it) => placement[it.id] !== it.correctCategory).length;
    setFeedback(wrongCount === 0
      ? (isTurkish ? 'Harika! Hepsi doğru. ✅' : 'Great! All correct. ✅')
      : (isTurkish ? `Bazıları yanlış. ${wrongCount} tane tekrar dene. 🔁` : `Some are wrong. Try again: ${wrongCount} item(s). 🔁`));
  };

  const cardClass = (it) => {
    if (!showResults) return 'm4-sorter-card';
    return `m4-sorter-card ${placement[it.id] === it.correctCategory ? 'is-correct' : 'is-wrong'}`;
  };

  return (
    <div className="m4-sorter-dnd">
      <div className="m4-sorter-top">
        <h4 className="m4-sorter-title">Sort It: Safe or Risky?</h4>
        <p className="m4-sorter-instr">{isTurkish ? 'Davranışları doğru kutuya sürükle.' : 'Drag each action into the correct box.'}</p>
      </div>
      <div className="m4-sorter-board">
        <div className="m4-sorter-col">
          <div className="m4-sorter-col-head"><span className="m4-sorter-col-title">{isTurkish ? 'Kartlar' : 'Cards'}</span></div>
          <div className="m4-sorter-pool" onDragOver={onDragOver} onDrop={(e) => onDrop(e, 'pool')}>
            {poolItems.length === 0
              ? <div className="m4-sorter-empty">{isTurkish ? 'Tüm kartları kutulara bıraktın!' : 'You placed all cards!'}</div>
              : poolItems.map((it) => (
                <div key={it.id} className={cardClass(it)} draggable onDragStart={(e) => onDragStart(e, it.id)}
                  role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') moveTo(it.id, 'safe'); }}>
                  {it.text}
                </div>
              ))}
          </div>
        </div>
        <div className="m4-sorter-zones">
          {['safe', 'risky'].map((zone) => (
            <div key={zone} className={`m4-sorter-zone ${zone}`} onDragOver={onDragOver} onDrop={(e) => onDrop(e, zone)}>
              <div className="m4-sorter-zone-head">
                <div className={`m4-sorter-zone-badge ${zone}`}>{zone.toUpperCase()}</div>
                <div className="m4-sorter-zone-sub">{zone === 'safe' ? (isTurkish ? 'Güvenli' : 'Safe') : (isTurkish ? 'Riskli' : 'Risky')}</div>
              </div>
              <div className="m4-sorter-zone-body">
                {(zone === 'safe' ? safeItems : riskyItems).length === 0
                  ? <div className="m4-sorter-empty">{isTurkish ? 'Buraya bırak' : 'Drop here'}</div>
                  : (zone === 'safe' ? safeItems : riskyItems).map((it) => (
                    <div key={it.id} className={cardClass(it)} draggable={!showResults} onDragStart={(e) => onDragStart(e, it.id)}>{it.text}</div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="m4-sorter-actions">
        <button type="button" className="m4-check-btn" onClick={checkAnswers} disabled={!allPlaced}>
          {isTurkish ? 'Kontrol Et' : 'Check Answers'}
        </button>
        <button type="button" className="m4-sorter-reset" onClick={() => {
          const init = {}; for (const it of items) init[it.id] = 'pool';
          setPlacement(init); setShowResults(false); setFeedback('');
        }}>
          {isTurkish ? 'Sıfırla' : 'Reset'}
        </button>
      </div>
      {feedback && <div className="m4-sorter-feedback">{feedback}</div>}
    </div>
  );
};

function ActivityRenderer({ activity, isTurkish }) {
  if (!activity) return null;
  if (activity.type === 'mini_quiz') return <Module4MiniQuiz questions={activity.questions || []} isTurkish={isTurkish} />;
  if (activity.type === 'flashcards') return <FlashcardsGame cards={activity.cards || []} />;
  if (activity.type === 'sorter') return <SorterGame activity={activity} isTurkish={isTurkish} />;
  return null;
}

function GameRenderer({ game, isTurkish }) {
  if (!game) return null;
  if (game.type === 'password_game') return <PasswordSmithGame isTurkish={isTurkish} tips={game.tips || []} />;
  if (game.type === 'word_puzzle') return <WordPuzzleGame isTurkish={isTurkish} words={game.words || []} />;
  if (game.type === 'card_match') return <CardMatchGame isTurkish={isTurkish} pairs={game.pairs || []} />;
  return null;
}

export default function Module4() {
  const { language } = useLanguage();
  const isTurkish = language === 'tr';
  const [, navigate] = useLocation();

  const moduleData = useMemo(() => (isTurkish ? MODULE4_TR.module_4 : MODULE4_EN.module_4), [isTurkish]);
  const sections = moduleData?.sections || [];

  const [activeSection, setActiveSection] = useState(() => {
    const parsed = Number(localStorage.getItem(`${MODULE_KEY}_activeSection`));
    return Number.isFinite(parsed) && parsed >= 1 ? parsed : 1;
  });

  const [completed, setCompleted] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(`${MODULE_KEY}_completedSections`) || '[]');
      return new Set(stored);
    } catch { return new Set(); }
  });

  const [isLoading, setIsLoading] = useState(true);
  const [showCompletion, setShowCompletion] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(t);
  }, []);

  // ✅ activeSection localStorage + scroll to top
  useEffect(() => {
    localStorage.setItem(`${MODULE_KEY}_activeSection`, String(activeSection));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  // ✅ completed → localStorage + Sidebar event
  useEffect(() => {
    const arr = Array.from(completed);
    localStorage.setItem(`${MODULE_KEY}_completedSections`, JSON.stringify(arr));
    window.dispatchEvent(new CustomEvent('sectionProgressUpdate', {
      detail: { module: MODULE_KEY, completedSections: arr, totalSections: sections.length, activeSection },
    }));
  }, [completed, activeSection, sections.length]);

  // ✅ Geri sayım
  useEffect(() => {
    if (!showCompletion) return;
    if (countdown <= 0) { navigate('/module5'); return; }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [showCompletion, countdown, navigate]);

  // ✅ Sidebar section tıklaması
  useEffect(() => {
    const handler = (e) => {
      if (e.detail.module === MODULE_KEY) {
        setActiveSection(e.detail.sectionId);
      }
    };
    window.addEventListener('sidebarSectionClick', handler);
    return () => window.removeEventListener('sidebarSectionClick', handler);
  }, []);

  const markComplete = (id) => {
    setCompleted((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);

      if (next.size === sections.length) {
        const progress = JSON.parse(localStorage.getItem('digitalShieldProgress') || '{}');
        progress.module4 = true;
        if (!progress.badges) progress.badges = [];
        if (!progress.badges.includes('module4')) progress.badges.push('module4');
        localStorage.setItem('digitalShieldProgress', JSON.stringify(progress));
        window.dispatchEvent(new CustomEvent('moduleCompleted', { detail: { module: MODULE_KEY } }));
        setTimeout(() => { setShowCompletion(true); setCountdown(5); }, 400);
      }
      return next;
    });
  };

  const progressPct = sections.length ? Math.round((completed.size / sections.length) * 100) : 0;
  const current = sections.find((s) => s.id === activeSection) || sections[0];

  if (isLoading) return <LoadingScreen onComplete={() => setIsLoading(false)} isTurkish={isTurkish} />;
  if (!current) return <div className="module-container module-page module4">Section not found</div>;

  const sectionImages = current.images || [];
  const sectionContent = current.content || [];
  const maxPairs = Math.max(sectionContent.length, sectionImages.length);
  const hasPairedFlow = sectionContent.length > 0 && sectionImages.length > 0;

  return (
    // ✅ Sol sidebar kaldırıldı
    <div className="module-container module-page module4 m4-page">
      <AnimatePresence>
        {showCompletion && (
          <CompletionScreen isTurkish={isTurkish} countdown={countdown} onNavigate={() => navigate('/module5')} />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -18 }}
          transition={{ duration: 0.32, ease: 'easeInOut' }}
          className="content-wrapper"
          style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 3rem 2rem 4rem' }}
        >
          <div className="content-header">
            <h1>{current.title}</h1>
          </div>

          {moduleData.hero_image && activeSection === 1 && (
            <div className="m4-visual-container">
              <img src={moduleData.hero_image} alt={isTurkish ? 'Dijital güvenlik' : 'Digital safety'} className="m4-main-image" />
            </div>
          )}

          <div className="section-content">
            <div className="section-intro"><p>{current.intro}</p></div>

            <div className="m4-learn-box">
              <h3 className="m4-learn-title">{isTurkish ? 'Bu bölümde neler var?' : "What's in this section?"}</h3>
              <p className="m4-learn-sub">
                {isTurkish
                  ? `Toplam ${sectionContent.length} kısa madde ve ${sectionImages.length} görsel var.`
                  : `You have ${sectionContent.length} short points and ${sectionImages.length} images.`}
              </p>
            </div>

            {hasPairedFlow ? (
              <div className="m4-flow">
                {Array.from({ length: maxPairs }).map((_, idx) => {
                  const text = sectionContent[idx];
                  const img = sectionImages[idx];
                  return (
                    <div key={`${current.id}-flow-${idx}`} className="m4-flow-item">
                      <div className="m4-flow-text">
                        {text && <div className="m4-flow-bullet"><span className="m4-flow-dot" aria-hidden="true">✓</span><span>{text}</span></div>}
                      </div>
                      <div className="m4-flow-image">
                        {img && <img src={img.src} alt={isTurkish ? img.alt_tr : img.alt_en} className="m4-section-image" loading="lazy" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="m4-visual-block">
                <div className="m4-text-block">
                  <ul className="m4-keypoints-list">
                    {sectionContent.map((t, idx) => <li key={`${current.id}-c-${idx}`}>{t}</li>)}
                  </ul>
                </div>
                <div className="m4-image-wrapper">
                  {sectionImages.map((img, idx) => (
                    <div key={`${current.id}-img-${idx}`} style={{ marginBottom: 14 }}>
                      <img src={img.src} alt={isTurkish ? img.alt_tr : img.alt_en} className="m4-section-image" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {current.activity && (
              <div className="activity-box">
                <h3>{current.activity.title}</h3>
                <p>{current.activity.description}</p>
                <ActivityRenderer activity={current.activity} isTurkish={isTurkish} />
              </div>
            )}

            {current.game && (
              <div className="activity-box m4-game-box">
                <h3 style={{ color: '#ec4899' }}>{current.game.title}</h3>
                <p>{current.game.description}</p>
                <GameRenderer game={current.game} isTurkish={isTurkish} />
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="section-navigation" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 3rem 2rem 4rem' }}>
        <button type="button" className="nav-btn prev"
          onClick={() => setActiveSection((p) => Math.max(1, p - 1))}
          disabled={activeSection === 1}
        >
          {isTurkish ? 'Önceki' : 'Previous'}
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
            type="button"
            className="nav-btn next"
            onClick={() => markComplete(activeSection)}
            disabled={completed.has(activeSection)}
            style={{ background: completed.has(activeSection) ? '#10b981' : '#7c3aed' }}
          >
            {completed.has(activeSection)
              ? (isTurkish ? 'Tamamlandı ✓' : 'Completed ✓')
              : (isTurkish ? '✓ Modülü Tamamla' : '✓ Complete Module')}
          </button>
        ) : (
          <button type="button" className="nav-btn next"
            onClick={() => { markComplete(activeSection); setActiveSection((p) => Math.min(sections.length, p + 1)); }}
          >
            {isTurkish ? 'Sonraki' : 'Next'}
          </button>
        )}
      </div>
    </div>
  );
}