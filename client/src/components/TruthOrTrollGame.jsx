import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import confetti from 'canvas-confetti';

/**
 * Truth or Troll - Module 3
 * Tinder-style swipe game for detecting fake news and cyberbullying
 * Swipe RIGHT for Safe/Real, LEFT for Bullying/Fake
 */

const TruthOrTrollGame = ({ isTurkish = true }) => {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [swipeDirection, setSwipeDirection] = useState(null);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  // Game cards data
  const gameCards = [
    {
      id: 1,
      type: 'news',
      content: isTurkish 
        ? 'NASA, Mars\'ta su buldu! Bilim insanları heyecanlı.'
        : 'NASA found water on Mars! Scientists are excited.',
      correct: 'real',
      explanation: isTurkish 
        ? 'Bu gerçek bir haber. NASA resmi kaynaklardan doğruladı.'
        : 'This is real news. NASA confirmed from official sources.'
    },
    {
      id: 2,
      type: 'social',
      content: isTurkish
        ? 'Sen çok aptalsın! Hiçbir şeyi doğru yapamıyorsun.'
        : 'You are so stupid! You can\'t do anything right.',
      correct: 'bullying',
      explanation: isTurkish
        ? 'Bu siber zorbalık. Kişiye hakaret ediliyor.'
        : 'This is cyberbullying. The person is being insulted.'
    },
    {
      id: 3,
      type: 'news',
      content: isTurkish
        ? 'ÜCRETSİZ iPhone 15! Hemen tıkla ve kazan!'
        : 'FREE iPhone 15! Click now and win!',
      correct: 'fake',
      explanation: isTurkish
        ? 'Bu sahte bir haber. Ücretsiz ürün vaatleri genelde dolandırıcılıktır.'
        : 'This is fake news. Free product promises are usually scams.'
    },
    {
      id: 4,
      type: 'social',
      content: isTurkish
        ? 'Merhaba! Bugün nasılsın? Dersler nasıl gidiyor?'
        : 'Hello! How are you today? How are classes going?',
      correct: 'real',
      explanation: isTurkish
        ? 'Bu normal bir sohbet. Zararsız ve samimi.'
        : 'This is normal conversation. Harmless and friendly.'
    },
    {
      id: 5,
      type: 'news',
      content: isTurkish
        ? 'Yerel okul, öğrencilerine yeni tabletler dağıttı.'
        : 'Local school distributed new tablets to students.',
      correct: 'real',
      explanation: isTurkish
        ? 'Bu gerçek bir haber. Yerel haber kaynaklarından doğrulandı.'
        : 'This is real news. Verified from local news sources.'
    },
    {
      id: 6,
      type: 'social',
      content: isTurkish
        ? 'Seni hiç sevmiyorum. Okuldan gitmelisin.'
        : 'I don\'t like you at all. You should leave school.',
      correct: 'bullying',
      explanation: isTurkish
        ? 'Bu siber zorbalık. Kişiyi dışlama ve tehdit içeriyor.'
        : 'This is cyberbullying. Contains exclusion and threats.'
    },
    {
      id: 7,
      type: 'news',
      content: isTurkish
        ? 'ŞOK! Ünlü oyuncu gizli hastalığı açıkladı!'
        : 'SHOCK! Famous actor revealed secret illness!',
      correct: 'fake',
      explanation: isTurkish
        ? 'Bu muhtemelen sahte haber. Sansasyonel başlıklar genelde clickbait\'tir.'
        : 'This is probably fake news. Sensational headlines are usually clickbait.'
    },
    {
      id: 8,
      type: 'social',
      content: isTurkish
        ? 'Harika bir iş çıkardın! Tebrikler!'
        : 'You did a great job! Congratulations!',
      correct: 'real',
      explanation: isTurkish
        ? 'Bu pozitif bir mesaj. Destekleyici ve teşvik edici.'
        : 'This is a positive message. Supportive and encouraging.'
    }
  ];

  useEffect(() => {
    setCards([...gameCards]);
  }, []);

  const currentCard = cards[currentIndex];

  const handleSwipe = (direction) => {
    if (!currentCard) return;

    const isCorrect = 
      (direction === 'right' && (currentCard.correct === 'real' || currentCard.correct === 'safe')) ||
      (direction === 'left' && (currentCard.correct === 'fake' || currentCard.correct === 'bullying'));

    setSwipeDirection(direction);

    if (isCorrect) {
      setScore(prev => prev + 10);
      setFeedback({
        type: 'success',
        message: isTurkish ? '🎉 Doğru!' : '🎉 Correct!',
        explanation: currentCard.explanation
      });
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.6 }
      });
    } else {
      setFeedback({
        type: 'error',
        message: isTurkish ? '❌ Yanlış!' : '❌ Wrong!',
        explanation: currentCard.explanation
      });
    }

    setTimeout(() => {
      if (currentIndex < cards.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setFeedback(null);
        setSwipeDirection(null);
        x.set(0);
      } else {
        setGameComplete(true);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }, 1500);
  };

  const handleDragEnd = (event, info) => {
    const threshold = 100;
    if (Math.abs(info.offset.x) > threshold) {
      handleSwipe(info.offset.x > 0 ? 'right' : 'left');
    } else {
      x.set(0);
    }
  };

  const resetGame = () => {
    setCurrentIndex(0);
    setScore(0);
    setGameComplete(false);
    setFeedback(null);
    setSwipeDirection(null);
    x.set(0);
  };

  if (gameComplete) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="truth-or-troll-game p-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl text-center"
      >
        <div className="text-6xl mb-4">🏆</div>
        <h3 className="text-3xl font-bold text-white mb-4">
          {isTurkish ? 'Tebrikler!' : 'Congratulations!'}
        </h3>
        <p className="text-white/90 mb-6 text-lg">
          {isTurkish 
            ? 'Tüm kartları doğru sınıflandırdın! Dijital vatandaşlık konusunda uzmanlaşıyorsun!'
            : 'You classified all cards correctly! You\'re becoming an expert in digital citizenship!'}
        </p>
        <p className="text-3xl font-bold text-white mb-8">
          {isTurkish ? 'Toplam Puan' : 'Total Score'}: {score}
        </p>
        <motion.button
          onClick={resetGame}
          className="px-8 py-4 bg-white text-green-600 rounded-xl font-bold text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isTurkish ? 'Tekrar Oyna' : 'Play Again'}
        </motion.button>
      </motion.div>
    );
  }

  if (!currentCard) {
    return <div className="text-center p-8">{isTurkish ? 'Yükleniyor...' : 'Loading...'}</div>;
  }

  return (
    <div className="truth-or-troll-game p-6 bg-slate-900 rounded-2xl">
      {/* Game Header */}
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
          {isTurkish ? '✅ Sahte mi Gerçek mi?' : '✅ Truth or Troll?'}
        </h3>
        <p className="text-slate-300 mb-4">
          {isTurkish 
            ? 'Kartları sağa kaydır (✅ Gerçek/Güvenli) veya sola kaydır (❌ Sahte/Zorbalık)'
            : 'Swipe cards right (✅ Real/Safe) or left (❌ Fake/Bullying)'}
        </p>
        <div className="flex justify-center gap-6">
          <div className="bg-slate-800 px-4 py-2 rounded-lg">
            <span className="text-slate-400 text-sm">{isTurkish ? 'Kart' : 'Card'}: </span>
            <span className="text-blue-400 font-bold">{currentIndex + 1}/{cards.length}</span>
          </div>
          <div className="bg-slate-800 px-4 py-2 rounded-lg">
            <span className="text-slate-400 text-sm">{isTurkish ? 'Puan' : 'Score'}: </span>
            <span className="text-green-400 font-bold">{score}</span>
          </div>
        </div>
      </div>

      {/* Card Stack */}
      <div className="relative h-[500px] flex items-center justify-center mb-6">
        <AnimatePresence>
          <motion.div
            key={currentCard.id}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            style={{ x, rotate, opacity }}
            className="absolute w-80 h-96 bg-white rounded-2xl shadow-2xl cursor-grab active:cursor-grabbing"
            whileTap={{ cursor: 'grabbing' }}
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ 
              scale: swipeDirection ? 0.8 : 1, 
              opacity: swipeDirection ? 0 : 1,
              y: swipeDirection ? (swipeDirection === 'right' ? -200 : 200) : 0,
              rotate: swipeDirection ? (swipeDirection === 'right' ? 30 : -30) : 0
            }}
            exit={{ 
              x: swipeDirection === 'right' ? 300 : -300,
              opacity: 0,
              rotate: swipeDirection === 'right' ? 30 : -30
            }}
          >
            <div className="h-full p-8 flex flex-col">
              <div className="mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  currentCard.type === 'news' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-purple-100 text-purple-700'
                }`}>
                  {currentCard.type === 'news' 
                    ? (isTurkish ? '📰 Haber' : '📰 News')
                    : (isTurkish ? '💬 Sosyal Medya' : '💬 Social Media')}
                </span>
              </div>
              
              <div className="flex-1 flex items-center justify-center">
                <p className="text-2xl font-semibold text-slate-800 text-center leading-relaxed">
                  {currentCard.content}
                </p>
              </div>

              <div className="mt-4 flex justify-center gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-1">❌</div>
                  <span className="text-xs text-slate-500">{isTurkish ? 'Sahte/Zorbalık' : 'Fake/Bullying'}</span>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-1">✅</div>
                  <span className="text-xs text-slate-500">{isTurkish ? 'Gerçek/Güvenli' : 'Real/Safe'}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Swipe Hints */}
        {!swipeDirection && (
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute left-8 top-1/2 transform -translate-y-1/2 text-red-400 text-6xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ❌
            </motion.div>
            <motion.div
              className="absolute right-8 top-1/2 transform -translate-y-1/2 text-green-400 text-6xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ✅
            </motion.div>
          </div>
        )}
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`p-4 rounded-lg mb-4 ${
              feedback.type === 'success'
                ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                : 'bg-red-500/20 text-red-400 border border-red-500/50'
            }`}
          >
            <p className="font-bold text-lg mb-2">{feedback.message}</p>
            <p className="text-sm">{feedback.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <motion.button
          onClick={() => handleSwipe('left')}
          className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl font-bold text-white text-lg flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ❌ {isTurkish ? 'Sahte/Zorbalık' : 'Fake/Bullying'}
        </motion.button>
        <motion.button
          onClick={() => handleSwipe('right')}
          className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl font-bold text-white text-lg flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ✅ {isTurkish ? 'Gerçek/Güvenli' : 'Real/Safe'}
        </motion.button>
      </div>

      <p className="text-center text-slate-400 text-sm mt-4">
        {isTurkish 
          ? '💡 İpucu: Kartı sürükleyerek veya butonlara tıklayarak oynayabilirsin'
          : '💡 Tip: You can play by dragging the card or clicking the buttons'}
      </p>
    </div>
  );
};

export default TruthOrTrollGame;

