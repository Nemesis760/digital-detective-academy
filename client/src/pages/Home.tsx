import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Shield, Cpu, ArrowRight, Globe, BookOpen, Award, Zap,
  Network, Lock, Star, Trophy, Search, Eye, ChevronRight
} from 'lucide-react';

// Sidebar'ı home sayfasında gizlemek için event dispatch
function useSidebarVisibility() {
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('sidebarVisibility', { detail: { visible: false } }));
    return () => {
      window.dispatchEvent(new CustomEvent('sidebarVisibility', { detail: { visible: true } }));
    };
  }, []);
}

export default function Home() {
  const { language, toggleLanguage } = useLanguage();
  const isTurkish = language === 'tr';

  useSidebarVisibility();

  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem('digitalShieldProgress');
      return saved
        ? JSON.parse(saved)
        : {
            module1: false,
            module2: false,
            module3: false,
            module4: false,
            module5: false,
            module6: false,
            totalScore: 0,
            badges: []
          };
    } catch {
      return {
        module1: false,
        module2: false,
        module3: false,
        module4: false,
        module5: false,
        module6: false,
        totalScore: 0,
        badges: []
      };
    }
  });

  useEffect(() => {
    const sync = () => {
      try {
        const saved = localStorage.getItem('digitalShieldProgress');
        if (saved) {
          setProgress(prev => {
            const next = JSON.parse(saved);
            return JSON.stringify(next) !== JSON.stringify(prev) ? next : prev;
          });
        }
      } catch {}
    };

    window.addEventListener('moduleCompleted', sync);
    window.addEventListener('storage', sync);
    const interval = setInterval(sync, 2000);

    return () => {
      window.removeEventListener('moduleCompleted', sync);
      window.removeEventListener('storage', sync);
      clearInterval(interval);
    };
  }, []);

  const completedModules = ['module1','module2','module3','module4','module5','module6']
    .filter(k => progress[k] === true).length;

  const userLevel =
    completedModules === 0 ? (isTurkish ? 'Acemi Dedektif' : 'Novice Detective') :
    completedModules <= 2 ? (isTurkish ? 'Genç Dedektif' : 'Junior Detective') :
    completedModules <= 4 ? (isTurkish ? 'Kıdemli Dedektif' : 'Senior Detective') :
                            (isTurkish ? 'Siber Usta' : 'Cyber Master');

  const BADGES = [
    { id: 'module1', emoji: '🖥️', name_tr: 'Bilgisayar Kâşifi', name_en: 'Computer Explorer' },
    { id: 'module2', emoji: '👣', name_tr: 'Dijital İzci',       name_en: 'Digital Tracker'   },
    { id: 'module3', emoji: '🌐', name_tr: 'Ağ Dedektifi',       name_en: 'Network Detective'  },
    { id: 'module4', emoji: '🔐', name_tr: 'Güvenlik Uzmanı',    name_en: 'Security Expert'    },
    { id: 'module5', emoji: '🛡️', name_tr: 'Siber Koruyucu',     name_en: 'Cyber Protector'    },
    { id: 'module6', emoji: '🕵️', name_tr: 'Baş Dedektif',       name_en: 'Head Detective'     },
  ];

  const earnedBadges: string[] = progress.badges || [];

  const moduleIslands = [
    {
      title: isTurkish ? 'Bilgisayar Dünyasını Keşfediyorum' : 'Exploring the Computer World',
      desc: isTurkish ? 'Bilgisayar Temelleri' : 'Computer Basics',
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-400',
      link: '/module1',
      locked: false
    },
    {
      title: isTurkish ? 'Dijital Ayak İzi ve Çevrimiçi Gizlilik' : 'Digital Footprint & Online Privacy',
      desc: isTurkish ? 'Dijital Ayak İzi ve Gizlilik' : 'Digital Footprint & Privacy',
      icon: <Eye className="w-8 h-8" />,
      color: 'from-teal-500 to-cyan-400',
      link: '/module2',
      locked: !progress.module1
    },
    {
      title: isTurkish ? 'Bilgisayar Ağları ve Dijital İletişim' : 'Computer Networks & Digital Communication',
      desc: isTurkish ? 'Ağlar ve Dijital İletişim' : 'Networks & Digital Communication',
      icon: <Network className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-400',
      link: '/module3',
      locked: !progress.module2
    },
    {
      title: isTurkish ? 'Dijital Güvenlik ve Bilinçli Teknoloji' : 'Digital Safety & Smart Tech Habits',
      desc: isTurkish ? 'Güvenli Teknoloji Kullanımı' : 'Smart Tech Habits',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      link: '/module4',
      locked: !progress.module3
    },
    {
      title: isTurkish ? 'Dijital Güvenlik ve Bilinçli Teknoloji Kullanımı' : 'Digital Security & Responsible Technology Use',
      desc: isTurkish ? 'Sorumlu Teknoloji' : 'Responsible Technology',
      icon: <Lock className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      link: '/module5',
      locked: !progress.module4
    },
    {
      title: isTurkish ? 'Dijital Dedektif' : 'Digital Detective',
      desc: isTurkish ? 'Olay Yeri İnceleme' : 'Crime Scene Investigation',
      icon: <Search className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      link: '/module6',
      locked: !progress.module5
    }
  ];

  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-yellow-400" />,
      title: isTurkish ? 'İnteraktif Dersler' : 'Interactive Lessons',
      desc: isTurkish ? 'Sıkıcı metinler yok, eğlenceli aktiviteler var.' : 'No boring texts, just fun activities.'
    },
    {
      icon: <Award className="w-8 h-8 text-green-400" />,
      title: isTurkish ? 'Rozetler Kazan' : 'Earn Badges',
      desc: isTurkish ? 'Görevleri tamamla ve dedektif rozetlerini topla.' : 'Complete missions and collect detective badges.'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: isTurkish ? 'Çift Dil Desteği' : 'Dual Language Support',
      desc: isTurkish ? 'Hem Türkçe hem İngilizce öğren.' : 'Learn in both Turkish and English.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 font-sans text-white">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700 shadow-lg">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 border border-white/15 backdrop-blur-md shadow-lg">
              <span className="text-xl">🕵️‍♂️</span>
            </div>
            <span className="font-extrabold text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
              {isTurkish ? 'Dijital Dedektif Akademisi' : 'Digital Detective Academy'}
            </span>
          </div>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors font-medium text-sm border border-slate-600"
          >
            <Globe className="w-4 h-4" />
            {isTurkish ? 'English' : 'Türkçe'}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <motion.span
              className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-sm mb-6 border border-blue-500/30"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {isTurkish ? '🚀 Geleceğin Teknolojisi Burada' : '🚀 Future Technology is Here'}
            </motion.span>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              {isTurkish ? 'Dijital Dedektif Akademisine Hoş Geldin!' : 'Welcome to Digital Detective Academy!'}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              {isTurkish
                ? 'Teknolojinin gizemlerini çöz, dijital dünyada güvenle dolaş!'
                : 'Solve the mysteries of technology, navigate the digital world safely!'}
            </p>

            <motion.a
              href="#mission-map"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isTurkish ? 'Göreve Başla' : 'Start Mission'}
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </header>

      {/* User Stats */}
      <section className="py-12 bg-slate-800/50 backdrop-blur-sm border-y border-slate-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">
              {isTurkish ? 'Dedektif İstatistikleri' : 'Detective Stats'}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700" whileHover={{ scale: 1.05 }}>
                <div className="flex items-center gap-3 mb-2">
                  <Trophy className="w-6 h-6 text-yellow-400" />
                  <span className="text-slate-400 text-sm">{isTurkish ? 'Seviye' : 'Level'}</span>
                </div>
                <p className="text-2xl font-bold text-yellow-400">{userLevel}</p>
              </motion.div>

              <motion.div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700" whileHover={{ scale: 1.05 }}>
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="w-6 h-6 text-blue-400" />
                  <span className="text-slate-400 text-sm">{isTurkish ? 'Tamamlanan Modüller' : 'Completed Modules'}</span>
                </div>
                <p className="text-2xl font-bold text-blue-400">{completedModules}/6</p>
              </motion.div>

              <motion.div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700" whileHover={{ scale: 1.05 }}>
                <div className="flex items-center gap-3 mb-2">
                  <Star className="w-6 h-6 text-purple-400" />
                  <span className="text-slate-400 text-sm">{isTurkish ? 'Toplam Puan' : 'Total Score'}</span>
                </div>
                <p className="text-2xl font-bold text-purple-400">{progress.totalScore || 0}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">
              {isTurkish ? 'Rozetlerim' : 'My Badges'}
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {BADGES.map((badge) => {
                const earned = earnedBadges.includes(badge.id);
                return (
                  <motion.div
                    key={badge.id}
                    whileHover={{ scale: 1.08 }}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-colors ${
                      earned
                        ? 'bg-gradient-to-b from-yellow-500/20 to-orange-500/10 border-yellow-500/50'
                        : 'bg-slate-800/40 border-slate-700 opacity-40'
                    }`}
                  >
                    <span className="text-4xl">{earned ? badge.emoji : '🔒'}</span>
                    <span className={`text-xs font-semibold text-center leading-tight ${earned ? 'text-yellow-300' : 'text-slate-500'}`}>
                      {isTurkish ? badge.name_tr : badge.name_en}
                    </span>
                    {earned && (
                      <span className="text-xs text-green-400 font-bold">✓</span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Map */}
      <section id="mission-map" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-700/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-700/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              {isTurkish ? 'Görev Haritası' : 'Mission Map'}
            </h2>
            <p className="text-xl text-slate-300">
              {isTurkish ? '6 adayı keşfet ve dijital dünyanın sırlarını çöz!' : 'Explore 6 islands and solve the secrets of the digital world!'}
            </p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4" />
          </div>

          <div className="max-w-6xl mx-auto relative">
            {/* SVG bağlantı çizgileri — path kullanıldı, line değil */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 300 200"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
              <motion.path d="M 50,50 L 150,50"
                stroke={moduleIslands[1].locked ? '#475569' : 'url(#lineGradient)'}
                strokeWidth="1.5" fill="none"
                strokeDasharray={moduleIslands[1].locked ? '4,4' : '0'}
                opacity={moduleIslands[1].locked ? 0.3 : 0.6}
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.path d="M 150,50 L 250,50"
                stroke={moduleIslands[2].locked ? '#475569' : 'url(#lineGradient)'}
                strokeWidth="1.5" fill="none"
                strokeDasharray={moduleIslands[2].locked ? '4,4' : '0'}
                opacity={moduleIslands[2].locked ? 0.3 : 0.6}
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <motion.path d="M 250,50 C 285,50 285,150 250,150"
                stroke={moduleIslands[3].locked ? '#475569' : 'url(#lineGradient)'}
                strokeWidth="1.5" fill="none"
                strokeDasharray={moduleIslands[3].locked ? '4,4' : '0'}
                opacity={moduleIslands[3].locked ? 0.3 : 0.6}
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
              <motion.path d="M 250,150 L 150,150"
                stroke={moduleIslands[4].locked ? '#475569' : 'url(#lineGradient)'}
                strokeWidth="1.5" fill="none"
                strokeDasharray={moduleIslands[4].locked ? '4,4' : '0'}
                opacity={moduleIslands[4].locked ? 0.3 : 0.6}
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
              <motion.path d="M 150,150 L 50,150"
                stroke={moduleIslands[5].locked ? '#475569' : 'url(#lineGradient)'}
                strokeWidth="1.5" fill="none"
                strokeDasharray={moduleIslands[5].locked ? '4,4' : '0'}
                opacity={moduleIslands[5].locked ? 0.3 : 0.6}
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              />
            </svg>

            {/* Island Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {moduleIslands.map((island, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                >
                  {island.locked ? (
                    <div className="bg-slate-800/50 rounded-2xl p-8 border-2 border-slate-700 border-dashed relative overflow-hidden">
                      <div className="absolute inset-0 bg-slate-900/50 rounded-2xl" />
                      <div className="relative z-10 text-center">
                        <div className="mb-4 flex justify-center">
                          <div className="w-20 h-20 rounded-full bg-slate-700 flex items-center justify-center">
                            <Lock className="w-10 h-10 text-slate-500" />
                          </div>
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-slate-500 leading-tight">{island.title}</h3>
                        <p className="text-slate-600 text-sm mb-3">{island.desc}</p>
                        <p className="text-xs text-slate-500 italic">
                          {isTurkish ? '🔒 Önceki modülü tamamla' : '🔒 Complete previous module'}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <Link href={island.link}>
                      <motion.div
                        className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border-2 border-slate-600 relative overflow-hidden cursor-pointer group"
                        whileHover={{ scale: 1.05, borderColor: '#3b82f6' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${island.color} opacity-20 rounded-bl-full`} />
                        <div className="relative z-10">
                          <div className="mb-4 flex justify-center">
                            <motion.div
                              className={`w-20 h-20 rounded-full bg-gradient-to-br ${island.color} flex items-center justify-center shadow-lg`}
                              animate={{ rotate: [0, 5, -5, 0] }}
                              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            >
                              <div className="text-white">{island.icon}</div>
                            </motion.div>
                          </div>
                          <h3 className="text-lg font-bold mb-1 text-center leading-tight">{island.title}</h3>
                          <p className="text-slate-400 text-sm text-center mb-4">{island.desc}</p>
                          <div className="flex items-center justify-center gap-1 text-blue-400 group-hover:text-blue-300 transition-colors">
                            <span className="text-sm font-semibold">{isTurkish ? 'Keşfet' : 'Explore'}</span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-slate-800/50 backdrop-blur-sm border-y border-slate-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-800/80 rounded-xl p-6 border border-slate-700 text-center hover:border-blue-500 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-slate-900 border-t border-slate-700">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()}{' '}
            {isTurkish
              ? 'Dijital Dedektif Akademisi. Tüm hakları saklıdır.'
              : 'Digital Detective Academy. All rights reserved.'}
          </p>
        </div>
      </footer>

    </div>
  );
}