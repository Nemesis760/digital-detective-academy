import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { WORDS, WORD_INFO } from './WordData';
import soundManager from '../utils/soundEffects';

const KEYBOARD = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

const getStatuses = (guess, target) => {
  const res = Array(guess.length).fill('absent');
  const t = target.split('');

  // Önce doğru pozisyonları işaretle
  guess.split('').forEach((c, i) => {
    if (c === target[i]) {
      res[i] = 'correct';
      t[i] = null;
    }
  });

  // Sonra mevcut ama yanlış pozisyondaki harfleri işaretle
  guess.split('').forEach((c, i) => {
    if (res[i] === 'correct') return;
    const idx = t.indexOf(c);
    if (idx !== -1) {
      res[i] = 'present';
      t[idx] = null;
    }
  });

  return res;
};

function Keyboard({ onKey, letterStatuses, isTurkish }) {
  const getKeyColor = (letter) => {
    const status = letterStatuses[letter];
    if (status === 'correct') return 'bg-green-600';
    if (status === 'present') return 'bg-yellow-500';
    if (status === 'absent') return 'bg-slate-600';
    return 'bg-slate-700 hover:bg-slate-600';
  };

  return (
    <div className="mt-6 space-y-2">
      {KEYBOARD.map((row, i) => (
        <div key={i} className="flex justify-center gap-1.5">
          {row.split('').map(k => (
            <motion.button
              key={k}
              onClick={() => onKey(k)}
              className={`w-10 h-12 ${getKeyColor(k)} rounded text-white font-bold text-sm transition-all`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {k}
            </motion.button>
          ))}
        </div>
      ))}
      <div className="flex justify-center gap-2 mt-2">
        <motion.button
          onClick={() => onKey('ENTER')}
          className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded font-bold text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isTurkish ? 'Gönder' : 'Enter'}
        </motion.button>
        <motion.button
          onClick={() => onKey('BACK')}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-bold text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ⌫
        </motion.button>
      </div>
    </div>
  );
}

function MiniQuiz({ word, isTurkish }) {
  const [ans, setAns] = useState(null);
  const [showResult, setShowResult] = useState(false);
  
  const info = WORD_INFO[word]?.[isTurkish ? 'tr' : 'en'];
  if (!info) return null;

  const handleAnswer = (answer) => {
    setAns(answer);
    setShowResult(true);
    if (answer) {
      soundManager.playCorrect();
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.7 }
      });
    } else {
      soundManager.playWrong();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-4 bg-gradient-to-r from-indigo-800 to-purple-800 p-4 rounded-xl border-2 border-indigo-500"
    >
      <p className="text-sm mb-3 font-semibold text-white">
        ❓ {isTurkish ? 'Bu kavram ne işe yarar?' : 'What does this concept do?'}
      </p>
      <div className="flex gap-2">
        <motion.button
          onClick={() => handleAnswer(true)}
          disabled={showResult}
          className={`flex-1 px-3 py-2 rounded-lg font-bold text-sm transition-all ${
            showResult && ans
              ? 'bg-green-600 text-white'
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
          whileHover={!showResult ? { scale: 1.05 } : {}}
          whileTap={!showResult ? { scale: 0.95 } : {}}
        >
          {isTurkish ? '✅ Bizi korur' : '✅ Protects us'}
        </motion.button>
        <motion.button
          onClick={() => handleAnswer(false)}
          disabled={showResult}
          className={`flex-1 px-3 py-2 rounded-lg font-bold text-sm transition-all ${
            showResult && !ans
              ? 'bg-red-600 text-white'
              : 'bg-red-500 hover:bg-red-600 text-white'
          }`}
          whileHover={!showResult ? { scale: 1.05 } : {}}
          whileTap={!showResult ? { scale: 0.95 } : {}}
        >
          {isTurkish ? '❌ Önemsizdir' : '❌ Not important'}
        </motion.button>
      </div>
      {showResult && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`mt-3 text-center font-bold text-sm ${
            ans ? 'text-green-300' : 'text-red-300'
          }`}
        >
          {ans
            ? (isTurkish ? '✅ Doğru! Bu kavram bizi korur!' : '✅ Correct! This concept protects us!')
            : (isTurkish ? '❌ Tekrar düşün. Bu kavram önemlidir!' : '❌ Think again. This concept is important!')}
        </motion.p>
      )}
    </motion.div>
  );
}

function InfoCard({ word, isTurkish }) {
  if (!WORD_INFO[word]) return null;
  const lang = isTurkish ? 'tr' : 'en';
  const info = WORD_INFO[word][lang];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-6 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 p-6 rounded-xl text-white shadow-2xl border-2 border-indigo-400"
    >
      <motion.h3
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="text-2xl font-bold mb-3 flex items-center gap-2"
      >
        <span className="text-3xl">📘</span>
        {info.title}
      </motion.h3>
      <p className="text-base mb-3 leading-relaxed">{info.text}</p>
      <div className="bg-indigo-800/50 p-3 rounded-lg mb-3">
        <p className="text-sm">
          <strong className="text-yellow-300">📌 {isTurkish ? 'Örnek:' : 'Example:'}</strong>{' '}
          {info.example}
        </p>
      </div>
      <div className="bg-purple-800/50 p-3 rounded-lg">
        <p className="text-sm">
          <strong className="text-cyan-300">💡 {isTurkish ? 'İpucu:' : 'Tip:'}</strong>{' '}
          {info.tip}
        </p>
      </div>
      <MiniQuiz word={word} isTurkish={isTurkish} />
    </motion.div>
  );
}

export default function WordleGame({ isTurkish = true }) {
  const lang = isTurkish ? 'tr' : 'en';
  const [target, setTarget] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [current, setCurrent] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [letterStatuses, setLetterStatuses] = useState({});
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const list = WORDS[lang];
    const randomWord = list[Math.floor(Math.random() * list.length)];
    setTarget(randomWord);
    setGuesses([]);
    setCurrent('');
    setGameOver(false);
    setWon(false);
    setLetterStatuses({});
    setShowHint(false);
  }, [lang]);

  useEffect(() => {
    const newStatuses = { ...letterStatuses };
    guesses.forEach(guess => {
      const statuses = getStatuses(guess, target);
      guess.split('').forEach((letter, i) => {
        const status = statuses[i];
        if (!newStatuses[letter] || status === 'correct') {
          newStatuses[letter] = status;
        } else if (status === 'present' && newStatuses[letter] !== 'correct') {
          newStatuses[letter] = status;
        }
      });
    });
    setLetterStatuses(newStatuses);
  }, [guesses, target]);

  const onKey = (k) => {
    if (gameOver) return;

    if (k === 'ENTER') {
      if (current.length !== target.length) {
        soundManager.playWrong();
        return;
      }
      if (!WORDS[lang].includes(current)) {
        soundManager.playWrong();
        return;
      }
      
      const newGuesses = [...guesses, current];
      setGuesses(newGuesses);
      
      if (current === target) {
        setWon(true);
        setGameOver(true);
        soundManager.playSuccess();
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#10b981', '#059669', '#34d399', '#fbbf24', '#6366f1']
        });
      } else if (newGuesses.length >= 6) {
        setGameOver(true);
        soundManager.playWrong();
      } else {
        soundManager.playClick();
      }
      
      setCurrent('');
    } else if (k === 'BACK') {
      setCurrent(p => p.slice(0, -1));
      soundManager.playClick();
    } else if (/^[A-Z]$/.test(k) && current.length < target.length) {
      setCurrent(p => p + k);
      soundManager.playClick();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameOver) return;
      if (e.key === 'Enter') {
        onKey('ENTER');
      } else if (e.key === 'Backspace') {
        onKey('BACK');
      } else if (/^[A-Za-z]$/.test(e.key)) {
        onKey(e.key.toUpperCase());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [current, guesses, gameOver, target]);

  const handleNewGame = () => {
    const list = WORDS[lang];
    const randomWord = list[Math.floor(Math.random() * list.length)];
    setTarget(randomWord);
    setGuesses([]);
    setCurrent('');
    setGameOver(false);
    setWon(false);
    setLetterStatuses({});
    setShowHint(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white rounded-2xl shadow-2xl border-2 border-indigo-500">
      <div className="text-center mb-6">
        <motion.h2
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400"
        >
          {isTurkish ? '🛡️ Siber Kelime Oyunu' : '🛡️ Cyber Word Game'}
        </motion.h2>
        <p className="text-slate-300 text-sm">
          {isTurkish
            ? `${target.length} harfli siber güvenlik kelimesini bul!`
            : `Find the ${target.length}-letter cybersecurity word!`}
        </p>
        {!gameOver && (
          <motion.button
            onClick={() => setShowHint(!showHint)}
            className="mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm font-semibold transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showHint ? '❌ İpucunu Gizle' : '💡 İpucu Göster'}
          </motion.button>
        )}
      </div>

      {showHint && WORD_INFO[target] && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mb-4 bg-yellow-500/20 border-2 border-yellow-500 rounded-lg p-3"
        >
          <p className="text-yellow-200 text-sm">
            <strong>💡 {isTurkish ? 'İpucu:' : 'Hint:'}</strong>{' '}
            {WORD_INFO[target][lang].tip}
          </p>
        </motion.div>
      )}

      <div className="grid gap-2 mb-4 justify-center">
        {[...Array(6)].map((_, i) => {
          const guess = guesses[i] || (i === guesses.length ? current : '');
          const status = guesses[i] ? getStatuses(guesses[i], target) : [];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex justify-center gap-2"
            >
              {[...Array(target.length)].map((_, j) => {
                const s = status[j];
                const bg =
                  s === 'correct'
                    ? 'bg-green-500'
                    : s === 'present'
                    ? 'bg-yellow-500'
                    : s === 'absent'
                    ? 'bg-slate-600'
                    : 'bg-slate-700 border-2 border-slate-600';
                return (
                  <motion.div
                    key={j}
                    initial={{ scale: 0.8, rotateY: 0 }}
                    animate={{
                      scale: 1,
                      rotateY: s ? 360 : 0
                    }}
                    transition={{
                      delay: j * 0.1,
                      duration: 0.5
                    }}
                    className={`w-14 h-14 flex items-center justify-center rounded-lg font-bold text-xl ${bg} shadow-lg`}
                  >
                    {guess[j] || ''}
                  </motion.div>
                );
              })}
            </motion.div>
          );
        })}
      </div>

      <Keyboard onKey={onKey} letterStatuses={letterStatuses} isTurkish={isTurkish} />

      <AnimatePresence>
        {gameOver && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="mt-6"
          >
            <div className="text-center mb-4">
              <motion.h3
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={`text-2xl font-bold mb-2 ${
                  won ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {won
                  ? (isTurkish ? '🎉 Tebrikler! Kelimeyi Buldun!' : '🎉 Congratulations! You Found the Word!')
                  : (isTurkish ? '😔 Oyun Bitti!' : '😔 Game Over!')}
              </motion.h3>
              <p className="text-slate-300 mb-4">
                {isTurkish ? 'Kelime:' : 'Word:'}{' '}
                <span className="font-bold text-2xl text-cyan-400">{target}</span>
              </p>
              <motion.button
                onClick={handleNewGame}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-lg font-bold text-white shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isTurkish ? '🔄 Yeni Oyun' : '🔄 New Game'}
              </motion.button>
            </div>
            <InfoCard word={target} isTurkish={isTurkish} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
