import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, Cpu, ArrowRight, Globe, BookOpen, Award, Zap, Network, Handshake, Lock, Unlock, Star, Trophy } from 'lucide-react';

export default function Home() {
  const { language, toggleLanguage } = useLanguage();
  const isTurkish = language === 'tr';

  // Progress tracking (localStorage'dan al)
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('digitalShieldProgress');
    return saved ? JSON.parse(saved) : {
      module1: false,
      module2: false,
      module3: false,
      module4: false,
      module5: false,
      totalScore: 0,
      badges: []
    };
  });

  // Listen for localStorage changes to update progress
  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem('digitalShieldProgress');
      if (saved) {
        setProgress(JSON.parse(saved));
      }
    };

    // Listen for custom event when module is completed
    window.addEventListener('moduleCompleted', handleStorageChange);
    
    // Also check periodically (for same-tab updates)
    const interval = setInterval(() => {
      const saved = localStorage.getItem('digitalShieldProgress');
      if (saved) {
        const newProgress = JSON.parse(saved);
        if (JSON.stringify(newProgress) !== JSON.stringify(progress)) {
          setProgress(newProgress);
        }
      }
    }, 1000);

    return () => {
      window.removeEventListener('moduleCompleted', handleStorageChange);
      clearInterval(interval);
    };
  }, [progress]);

  // User level calculation
  const completedModules = Object.values(progress).filter(v => v === true).length;
  const userLevel = completedModules === 0 ? 'Novice Detective' : 
                   completedModules <= 2 ? 'Junior Detective' :
                   completedModules <= 4 ? 'Senior Detective' : 'Cyber Master';

  // Metinler
  const content = {
    hero: {
      title: isTurkish ? 'Dijital Dedektif Akademisine Hoş Geldin!' : 'Welcome to Digital Detective Academy!',
      subtitle: isTurkish 
        ? 'Teknolojinin gizemlerini çöz, dijital dünyada güvenle dolaş!' 
        : 'Solve the mysteries of technology, navigate the digital world safely!',
      cta: isTurkish ? 'Göreve Başla' : 'Start Mission'
    },
    missionMap: {
      title: isTurkish ? 'Görev Haritası' : 'Mission Map',
      subtitle: isTurkish ? '5 adayı keşfet ve dijital dünyanın sırlarını çöz!' : 'Explore 5 islands and solve the secrets of the digital world!'
    },
    userStats: {
      title: isTurkish ? 'Dedektif İstatistikleri' : 'Detective Stats',
      level: isTurkish ? 'Seviye' : 'Level',
      modules: isTurkish ? 'Tamamlanan Modüller' : 'Completed Modules',
      score: isTurkish ? 'Toplam Puan' : 'Total Score'
    },
    modules: {
      m1: {
        title: isTurkish ? 'Bilgisayar Dünyasını Keşfediyorum' : 'Exploring the Computer World',
        desc: isTurkish ? 'Bilgisayar Temelleri' : 'Computer Basics',
        icon: <Cpu className="w-8 h-8" />,
        color: 'from-yellow-500 to-orange-400',
        link: '/module1',
        locked: false
      },
      m2: {
        title: isTurkish ? 'Bilgisayar Ağları ve Dijital İletişim' : 'Computer Networks & Digital Communication',
        desc: isTurkish ? 'Ağlar ve Dijital İletişim' : 'Networks & Digital Communication',
        icon: <Network className="w-8 h-8" />,
        color: 'from-cyan-500 to-blue-400',
        link: '/module2',
        locked: !progress.module1
      },
      m3: {
        title: isTurkish ? 'Dijital Ayak İzi ve Çevrimiçi Gizlilik' : 'Digital Footprint & Online Privacy',
        desc: isTurkish ? 'Dijital Ayak İzi ve Gizlilik' : 'Digital Footprint & Privacy',
        icon: <Network className="w-8 h-8" />,
        color: 'from-blue-500 to-cyan-400',
        link: '/module3',
        locked: !progress.module2
      },
      m4: {
        title: isTurkish ? 'Şifre Güvenliği ve Hesap Koruma' : 'Password Security & Account Protection',
        desc: isTurkish ? 'Şifre ve Hesap Güvenliği' : 'Password & Account Security',
        icon: <Shield className="w-8 h-8" />,
        color: 'from-purple-500 to-pink-500',
        link: '/module4',
        locked: !progress.module3
      },
      m5: {
        title: isTurkish ? 'Dijital Güvenlik ve Bilinçli Teknoloji Kullanımı' : 'Digital Security & Responsible Technology Use',
        desc: isTurkish ? 'Dijital Güvenlik' : 'Digital Security',
        icon: <Shield className="w-8 h-8" />,
        color: 'from-indigo-500 to-purple-500',
        link: '/module5',
        locked: !progress.module4
      },
      m6: {
        title: isTurkish ? 'Dijital Dedektif' : 'Digital Detective',
        desc: isTurkish ? 'Olay Yeri İnceleme' : 'Crime Scene Investigation',
        icon: <Zap className="w-8 h-8" />,
        color: 'from-red-500 to-orange-500',
        link: '/module6',
        locked: !progress.module5
      }
    },
    features: [
      {
        icon: <BookOpen className="w-8 h-8 text-yellow-500" />,
        title: isTurkish ? 'İnteraktif Dersler' : 'Interactive Lessons',
        desc: isTurkish ? 'Sıkıcı metinler yok, eğlenceli aktiviteler var.' : 'No boring texts, just fun activities.'
      },
      {
        icon: <Award className="w-8 h-8 text-green-500" />,
        title: isTurkish ? 'Rozetler Kazan' : 'Earn Badges',
        desc: isTurkish ? 'Görevleri tamamla ve dedektif rozetlerini topla.' : 'Complete missions and collect detective badges.'
      },
      {
        icon: <Globe className="w-8 h-8 text-indigo-500" />,
        title: isTurkish ? 'Çift Dil Desteği' : 'Dual Language Support',
        desc: isTurkish ? 'Hem Türkçe hem İngilizce öğren.' : 'Learn in both Turkish and English.'
      }
    ]
  };

  const moduleIslands = [
    content.modules.m1,
    content.modules.m2,
    content.modules.m3,
    content.modules.m4,
    content.modules.m5,
    content.modules.m6,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 font-sans text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700 shadow-lg">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
              🛡️
            </div>
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Dijital Kalkan
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

      {/* Hero Section */}
      <header className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-[url('https://source.unsplash.com/1920x1080/?matrix,cyber')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-sm mb-6 border border-blue-500/30"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {isTurkish ? '🚀 Geleceğin Teknolojisi Burada' : '🚀 Future Technology is Here'}
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              {content.hero.title}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              {content.hero.subtitle}
            </p>
            
            <motion.a 
              href="#mission-map"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content.hero.cta}
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </header>

      {/* User Stats Section */}
      <section className="py-12 bg-slate-800/50 backdrop-blur-sm border-y border-slate-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">{content.userStats.title}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Trophy className="w-6 h-6 text-yellow-400" />
                  <span className="text-slate-400 text-sm">{content.userStats.level}</span>
                </div>
                <p className="text-2xl font-bold text-yellow-400">{userLevel}</p>
              </motion.div>
              
              <motion.div 
                className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="w-6 h-6 text-blue-400" />
                  <span className="text-slate-400 text-sm">{content.userStats.modules}</span>
                </div>
                <p className="text-2xl font-bold text-blue-400">{completedModules}/6</p>
              </motion.div>
              
              <motion.div 
                className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Star className="w-6 h-6 text-purple-400" />
                  <span className="text-slate-400 text-sm">{content.userStats.score}</span>
                </div>
                <p className="text-2xl font-bold text-purple-400">{progress.totalScore || 0}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Map Section */}
      <section id="mission-map" className="py-24 relative">
        <div className="absolute inset-0 bg-[url('https://source.unsplash.com/1920x1080/?island,ocean')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              {content.missionMap.title}
            </h2>
            <p className="text-xl text-slate-300">{content.missionMap.subtitle}</p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Island Map */}
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ height: '600px' }}>
                {moduleIslands.map((_, index) => {
                  if (index === moduleIslands.length - 1) return null;
                  const startX = (index % 3) * 33.33 + 16.66;
                  const startY = Math.floor(index / 3) * 50 + 25;
                  const endX = ((index + 1) % 3) * 33.33 + 16.66;
                  const endY = Math.floor((index + 1) / 3) * 50 + 25;
                  
                  return (
                    <motion.line
                      key={index}
                      x1={`${startX}%`}
                      y1={`${startY}%`}
                      x2={`${endX}%`}
                      y2={`${endY}%`}
                      stroke={moduleIslands[index + 1].locked ? '#475569' : 'url(#gradient)'}
                      strokeWidth="3"
                      strokeDasharray={moduleIslands[index + 1].locked ? '5,5' : '0'}
                      opacity={moduleIslands[index + 1].locked ? 0.3 : 0.6}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  );
                })}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Islands Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {moduleIslands.map((island, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative"
                  >
                    {island.locked ? (
                      <motion.div
                        className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border-2 border-slate-700 border-dashed relative overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="absolute inset-0 bg-slate-900/50"></div>
                        <div className="relative z-10 text-center">
                          <div className="mb-4 flex justify-center">
                            <div className="w-20 h-20 rounded-full bg-slate-700 flex items-center justify-center">
                              <Lock className="w-10 h-10 text-slate-500" />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-2 text-slate-500">{island.title}</h3>
                          <p className="text-slate-600 text-sm mb-4">{island.desc}</p>
                          <p className="text-xs text-slate-500">
                            {isTurkish ? 'Önceki modülü tamamla' : 'Complete previous module'}
                          </p>
                        </div>
                      </motion.div>
                    ) : (
                      <Link href={island.link}>
                        <motion.div
                          className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border-2 border-slate-600 relative overflow-hidden cursor-pointer group"
                          whileHover={{ scale: 1.05, borderColor: '#3b82f6' }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${island.color} opacity-20 rounded-bl-full`}></div>
                          <div className="relative z-10">
                            <div className="mb-4 flex justify-center">
                              <motion.div 
                                className={`w-20 h-20 rounded-full bg-gradient-to-br ${island.color} flex items-center justify-center shadow-lg`}
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <div className="text-white">
                                  {island.icon}
                                </div>
                              </motion.div>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-center">{island.title}</h3>
                            <p className="text-slate-300 text-sm text-center mb-4">{island.desc}</p>
                            <div className="flex items-center justify-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                              <span className="text-sm font-semibold">
                                {isTurkish ? 'Keşfet' : 'Explore'}
                              </span>
                              <ArrowRight className="w-4 h-4" />
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-800/50 backdrop-blur-sm border-y border-slate-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {content.features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center hover:border-blue-500 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
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
            &copy; {new Date().getFullYear()} Dijital Kalkan. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
}
