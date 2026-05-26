import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { Helmet } from 'react-helmet-async';
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
      situation: isTurkish
        ? 'Efe, sosyal medyada bir fotoğraf paylaşıyor. Paylaşım yaparken konum etiketini açık mı bırakmalı, yoksa kapalı mı tutmalı?'
        : 'Efe is sharing a photo on social media. Should he leave the location tag ON or keep it OFF?',
      question: isTurkish ? 'Efe ne yapmalı?' : 'What should Efe do?',
      choices: [
        {
          id: 1, correct: false,
          label: isTurkish ? '📍 Konum Etiketini AÇIK bırak' : '📍 Keep Location Tag ON',
          explanation: isTurkish
            ? '❌ Yanlış! Konumunu herkesle paylaşmak seni ve aileni tehlikeye atar. Nerede olduğunu yabancılar görebilir.'
            : '❌ Wrong! Sharing your location with everyone puts you and your family at risk. Strangers can see where you are.',
        },
        {
          id: 2, correct: true,
          label: isTurkish ? '🔒 Konum Etiketini KAPALI tut' : '🔒 Keep Location Tag OFF',
          explanation: isTurkish
            ? '✅ Harika! Konumunu gizleyerek gizliliğini koruyorsun. Nerede olduğunu sadece istediğin kişiler bilmeli!'
            : '✅ Great! Hiding your location protects your privacy. Only people you trust should know where you are!',
        },
      ],
    },
    {
      title: isTurkish ? '🔐 Şifre Tuzağı' : '🔐 Password Trap',
      image: '/images/module6/game_password_creation.png',
      situation: isTurkish
        ? 'Efe\'nin en iyi arkadaşı şifreni soruyor: "Bana ver, seninle bir oyun oynamak istiyorum." Efe ne yapmalı?'
        : 'Efe\'s best friend is asking for his password: "Give it to me, I want to play a game with you." What should Efe do?',
      question: isTurkish ? 'Efe ne yapmalı?' : 'What should Efe do?',
      choices: [
        {
          id: 1, correct: false,
          label: isTurkish ? '🔓 Şifremi arkadaşıma vereyim' : '🔓 Give my password to my friend',
          explanation: isTurkish
            ? '❌ Yanlış! Şifreni en yakın arkadaşına bile vermemelisin. Şifreler tamamen kişiseldir — kimseyle paylaşılmaz!'
            : '❌ Wrong! You should never give your password to anyone, even your best friend. Passwords are completely personal!',
        },
        {
          id: 2, correct: true,
          label: isTurkish ? '🛡️ Şifremi kimseyle paylaşmam' : '🛡️ I never share my password',
          explanation: isTurkish
            ? '✅ Süper! Şifreler yalnızca sana aittir. Sana gerçekten önem veren hiçbir kişi şifreni istemez. Güçlü ve gizli tut!'
            : '✅ Well done! Passwords belong only to you. Anyone who truly cares about you would never ask for your password. Keep it strong and secret!',
        },
      ],
    },
    {
      title: isTurkish ? '📨 Tanımadık Mesaj' : '📨 Unknown Message',
      image: '/images/module6/game_friend_request.png',
      situation: isTurkish
        ? 'Efe\'ye sosyal medyada tanımadığı biri arkadaşlık isteği gönderiyor ve "Seninle arkadaş olmak istiyorum, çok güzel fotoğrafların var" diyor.'
        : 'A stranger sends Efe a friend request on social media saying "I want to be your friend, you have great photos."',
      question: isTurkish ? 'Efe ne yapmalı?' : 'What should Efe do?',
      choices: [
        {
          id: 1, correct: false,
          label: isTurkish ? '✔️ İsteği kabul edeyim, samimi görünüyor' : '✔️ Accept the request, they seem nice',
          explanation: isTurkish
            ? '❌ Dikkat! İnternette tanımadığın kişiler her zaman göründükleri gibi olmayabilir. Yabancıların arkadaşlık isteklerini asla kabul etme!'
            : '❌ Warning! People online are not always who they seem. Never accept friend requests from strangers you don\'t know in real life!',
        },
        {
          id: 2, correct: true,
          label: isTurkish ? '🚫 İsteği reddet ve bir büyüğüme söyle' : '🚫 Reject the request and tell an adult',
          explanation: isTurkish
            ? '✅ Doğru! Tanımadığın kişilerin isteklerini reddet ve bu durumu güvendiğin bir büyüğüne haber ver. Güvende olmak önemlidir!'
            : '✅ Correct! Reject requests from people you don\'t know and tell a trusted adult. Staying safe is what matters most!',
        },
      ],
    },
    {
      title: isTurkish ? '📧 Acil E-posta' : '📧 Urgent Email',
      image: '/images/module6/game_privacy_settings.png',
      situation: isTurkish
        ? 'Efe\'ye "Tebrikler! 1.000 TL kazandınız! Ödülünüzü almak için hemen tıklayın ve bilgilerinizi girin!" yazılı bir e-posta geliyor.'
        : 'Efe receives an email: "Congratulations! You won $500! Click here immediately and enter your details to claim your prize!"',
      question: isTurkish ? 'Efe ne yapmalı?' : 'What should Efe do?',
      choices: [
        {
          id: 1, correct: false,
          label: isTurkish ? '🎁 Hemen tıklayayım, ödül kazandım!' : '🎁 Click immediately, I won a prize!',
          explanation: isTurkish
            ? '❌ Dur! Bu bir phishing (kimlik avı) tuzağıdır! Kimse sana bedava para vermez. Bu tür e-postalar kişisel bilgilerini çalmak için tasarlanmıştır.'
            : '❌ Stop! This is a phishing scam! Nobody gives away free money. These emails are designed to steal your personal information.',
        },
        {
          id: 2, correct: true,
          label: isTurkish ? '🗑️ E-postayı sil, büyüğüme haber ver' : '🗑️ Delete the email, tell an adult',
          explanation: isTurkish
            ? '✅ Harika karar! "Hemen tıkla" veya "ödül kazandın" gibi mesajlar oltalama saldırısıdır. Silip bir yetişkine söylemek en güvenli yoldur!'
            : '✅ Great decision! Messages saying "click now" or "you won a prize" are phishing attacks. Deleting and telling an adult is the safest path!',
        },
      ],
    },
  ];

  const [step, setStep] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  const playSound = (soundFile) => {
    try { new Audio(soundFile).play().catch(() => {}); } catch (_) {}
  };

  const handleChoice = (choice) => {
    if (answered) return;
    setSelectedId(choice.id);
    setAnswered(true);
    setIsCorrect(choice.correct);
    playSound(choice.correct ? '/sounds/correct.mp3' : '/sounds/wrong.mp3');
  };

  const handleNext = () => {
    setStep((s) => s + 1);
    setAnswered(false);
    setSelectedId(null);
    setIsCorrect(false);
  };

  if (step >= scenarios.length) {
    return (
      <motion.div
        className="quiz-completion-box"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🏆</div>
        <h3>{isTurkish ? 'Tüm Görevler Tamamlandı!' : 'All Missions Completed!'}</h3>
        <p>{isTurkish ? 'Artık bilinçli bir dijital vatandaşsın! Harika iş çıkardın.' : 'You are now a responsible digital citizen! Great job.'}</p>
        <motion.button
          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
          onClick={() => { setStep(0); setAnswered(false); setSelectedId(null); }}
          style={{
            marginTop: '1rem', padding: '10px 28px',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white', border: 'none', borderRadius: '10px',
            fontWeight: 700, cursor: 'pointer',
          }}
        >
          🔄 {isTurkish ? 'Tekrar Oyna' : 'Play Again'}
        </motion.button>
      </motion.div>
    );
  }

  const current = scenarios[step];
  const selectedChoice = current.choices.find((c) => c.id === selectedId);

  return (
    <div style={{ maxWidth: '640px', margin: '0 auto' }}>
      {/* Başlık ve ilerleme */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, color: '#3b82f6' }}>{current.title}</h3>
        <span style={{
          background: '#e0e7ff', color: '#3730a3', fontWeight: 700,
          fontSize: '0.8rem', padding: '4px 12px', borderRadius: '20px',
        }}>
          {isTurkish ? 'Görev' : 'Mission'} {step + 1} / {scenarios.length}
        </span>
      </div>

      {/* Senaryo açıklaması */}
      <div style={{
        background: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '12px',
        padding: '0.85rem 1rem', marginBottom: '1rem', fontSize: '0.95rem', color: '#0c4a6e',
      }}>
        📖 {current.situation}
      </div>

      {/* Görsel */}
      <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '1rem', border: '2px solid #e2e8f0' }}>
        <img
          src={current.image}
          alt={current.title}
          style={{ width: '100%', display: 'block', maxHeight: '300px', objectFit: 'cover' }}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>

      {/* Soru */}
      <p style={{ fontWeight: 700, fontSize: '1rem', color: '#1e293b', marginBottom: '0.75rem' }}>
        ❓ {current.question}
      </p>

      {/* Seçenekler */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1rem' }}>
        {current.choices.map((choice) => {
          const isSelected = selectedId === choice.id;
          let bg = '#f8fafc', border = '#cbd5e1', color = '#1e293b';
          if (answered && isSelected && choice.correct) { bg = '#dcfce7'; border = '#22c55e'; color = '#15803d'; }
          else if (answered && isSelected && !choice.correct) { bg = '#fee2e2'; border = '#ef4444'; color = '#991b1b'; }
          else if (answered && choice.correct) { bg = '#dcfce7'; border = '#22c55e'; color = '#15803d'; }
          return (
            <motion.button
              key={choice.id}
              whileHover={!answered ? { scale: 1.02 } : {}}
              whileTap={!answered ? { scale: 0.98 } : {}}
              onClick={() => handleChoice(choice)}
              disabled={answered}
              style={{
                padding: '0.85rem 1.1rem', background: bg,
                border: `2px solid ${border}`, borderRadius: '10px',
                color, fontWeight: 600, fontSize: '0.95rem',
                cursor: answered ? 'default' : 'pointer',
                textAlign: 'left', transition: 'all 0.2s',
              }}
            >
              {choice.label}
            </motion.button>
          );
        })}
      </div>

      {/* Geri bildirim */}
      <AnimatePresence>
        {answered && selectedChoice && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{
              background: isCorrect ? '#dcfce7' : '#fee2e2',
              border: `2px solid ${isCorrect ? '#22c55e' : '#ef4444'}`,
              borderRadius: '12px', padding: '0.85rem 1rem',
              color: isCorrect ? '#15803d' : '#991b1b',
              fontSize: '0.92rem', fontWeight: 600, marginBottom: '1rem',
            }}
          >
            {selectedChoice.explanation}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sonraki buton */}
      {answered && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
          onClick={handleNext}
          style={{
            padding: '10px 28px',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white', border: 'none', borderRadius: '10px',
            fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer',
          }}
        >
          {step + 1 < scenarios.length
            ? (isTurkish ? 'Sonraki Görev →' : 'Next Mission →')
            : (isTurkish ? '✅ Tamamla' : '✅ Finish')}
        </motion.button>
      )}
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
      if (!progress.badges) progress.badges = [];
      if (!progress.badges.includes('module6')) progress.badges.push('module6');
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
      <Helmet>
        <title>Dijital Dedektif | Digital Detective Academy</title>
        <meta name="description" content="Son görev! Tüm öğrendiklerini kullanarak dijital dedektif ol. Gerçek senaryolarla bilgini test et." />
        <meta property="og:title" content="Dijital Dedektif | Digital Detective Academy" />
        <meta property="og:description" content="Son görev! Tüm öğrendiklerini kullanarak dijital dedektif ol. Gerçek senaryolarla bilgini test et." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.digitaldetectiveacademy.com/module6" />
        <meta property="og:image" content="https://www.digitaldetectiveacademy.com/og-image.png" />
      </Helmet>
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
            onClick={() => { handleSectionComplete(activeSection); setActiveSection((p) => Math.min(sections.length, p + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); document.documentElement.scrollTop = 0; document.body.scrollTop = 0; }}
          >
            {isTurkish ? 'Sonraki' : 'Next'} {'->'}
          </button>
        )}
      </div>
    </div>
  );
}

export default Module6;
