import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

/**
 * Password Smith - Module 4
 * Interactive password strength game
 * As user types password, sword levels up (Rusty -> Iron -> Diamond)
 */

const PasswordSmithGame = ({ isTurkish = true }) => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const [swordLevel, setSwordLevel] = useState('rusty');
  const [feedback, setFeedback] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const swordLevels = {
    rusty: {
      name: isTurkish ? 'Paslı Kılıç' : 'Rusty Sword',
      emoji: '🗡️',
      color: 'from-gray-400 to-gray-600',
      minStrength: 0,
      maxStrength: 25
    },
    iron: {
      name: isTurkish ? 'Demir Kılıç' : 'Iron Sword',
      emoji: '⚔️',
      color: 'from-slate-400 to-slate-600',
      minStrength: 25,
      maxStrength: 50
    },
    steel: {
      name: isTurkish ? 'Çelik Kılıç' : 'Steel Sword',
      emoji: '🔪',
      color: 'from-blue-400 to-blue-600',
      minStrength: 50,
      maxStrength: 75
    },
    diamond: {
      name: isTurkish ? 'Elmas Kılıç' : 'Diamond Sword',
      emoji: '💎',
      color: 'from-purple-400 to-pink-600',
      minStrength: 75,
      maxStrength: 100
    }
  };

  useEffect(() => {
    calculateStrength(password);
  }, [password]);

  const calculateStrength = (pwd) => {
    let strength = 0;
    const feedbackList = [];

    // Length check
    if (pwd.length >= 8) {
      strength += 20;
      feedbackList.push({ type: 'success', text: isTurkish ? '✓ En az 8 karakter' : '✓ At least 8 characters' });
    } else if (pwd.length > 0) {
      feedbackList.push({ type: 'warning', text: isTurkish ? '⚠ En az 8 karakter gerekli' : '⚠ At least 8 characters required' });
    }

    // Uppercase check
    if (/[A-Z]/.test(pwd)) {
      strength += 15;
      feedbackList.push({ type: 'success', text: isTurkish ? '✓ Büyük harf var' : '✓ Contains uppercase' });
    } else if (pwd.length > 0) {
      feedbackList.push({ type: 'info', text: isTurkish ? '💡 Büyük harf ekle' : '💡 Add uppercase letter' });
    }

    // Lowercase check
    if (/[a-z]/.test(pwd)) {
      strength += 15;
      feedbackList.push({ type: 'success', text: isTurkish ? '✓ Küçük harf var' : '✓ Contains lowercase' });
    } else if (pwd.length > 0) {
      feedbackList.push({ type: 'info', text: isTurkish ? '💡 Küçük harf ekle' : '💡 Add lowercase letter' });
    }

    // Number check
    if (/\d/.test(pwd)) {
      strength += 20;
      feedbackList.push({ type: 'success', text: isTurkish ? '✓ Rakam var' : '✓ Contains number' });
    } else if (pwd.length > 0) {
      feedbackList.push({ type: 'info', text: isTurkish ? '💡 Rakam ekle' : '💡 Add number' });
    }

    // Special character check
    if (/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) {
      strength += 20;
      feedbackList.push({ type: 'success', text: isTurkish ? '✓ Özel karakter var' : '✓ Contains special character' });
    } else if (pwd.length > 0) {
      feedbackList.push({ type: 'info', text: isTurkish ? '💡 Özel karakter ekle (!@#$% vb.)' : '💡 Add special character (!@#$% etc.)' });
    }

    // Length bonus
    if (pwd.length >= 12) {
      strength += 10;
      feedbackList.push({ type: 'success', text: isTurkish ? '✓ Uzun şifre bonusu' : '✓ Long password bonus' });
    }

    setStrength(Math.min(100, strength));
    setFeedback(feedbackList);

    // Update sword level
    if (strength >= 75) {
      setSwordLevel('diamond');
      if (strength === 100) {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
      }
    } else if (strength >= 50) {
      setSwordLevel('steel');
    } else if (strength >= 25) {
      setSwordLevel('iron');
    } else {
      setSwordLevel('rusty');
    }
  };

  const getStrengthColor = () => {
    if (strength < 25) return 'from-red-500 to-red-700';
    if (strength < 50) return 'from-orange-500 to-orange-700';
    if (strength < 75) return 'from-yellow-500 to-yellow-700';
    return 'from-green-500 to-emerald-700';
  };

  const getStrengthLabel = () => {
    if (strength < 25) return isTurkish ? 'Çok Zayıf' : 'Very Weak';
    if (strength < 50) return isTurkish ? 'Zayıf' : 'Weak';
    if (strength < 75) return isTurkish ? 'Orta' : 'Medium';
    if (strength < 100) return isTurkish ? 'Güçlü' : 'Strong';
    return isTurkish ? 'Çok Güçlü!' : 'Very Strong!';
  };

  const resetPassword = () => {
    setPassword('');
    setStrength(0);
    setSwordLevel('rusty');
    setFeedback([]);
  };

  const currentSword = swordLevels[swordLevel];

  return (
    <div className="password-smith-game p-6 bg-slate-900 rounded-2xl">
      {/* Game Header */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          {isTurkish ? '⚒️ Şifre Demircisi' : '⚒️ Password Smith'}
        </h3>
        <p className="text-slate-300 mb-4">
          {isTurkish 
            ? 'Şifre yaz ve kılıcını güçlendir! Güçlü şifre = Güçlü kılıç!'
            : 'Type a password and forge your sword! Strong password = Strong sword!'}
        </p>
      </div>

      {/* Sword Display */}
      <div className="flex flex-col items-center mb-8">
        <motion.div
          className={`w-48 h-48 bg-gradient-to-br ${currentSword.color} rounded-2xl flex items-center justify-center shadow-2xl mb-4 relative overflow-hidden`}
          animate={{
            scale: strength === 100 ? [1, 1.1, 1] : 1,
            boxShadow: strength === 100 
              ? ['0 0 20px rgba(168, 85, 247, 0.5)', '0 0 40px rgba(168, 85, 247, 0.8)', '0 0 20px rgba(168, 85, 247, 0.5)']
              : '0 10px 30px rgba(0, 0, 0, 0.3)'
          }}
          transition={{ duration: 1, repeat: strength === 100 ? Infinity : 0 }}
        >
          <div className="text-8xl">{currentSword.emoji}</div>
          {strength === 100 && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
        </motion.div>
        
        <h4 className="text-2xl font-bold text-white mb-2">{currentSword.name}</h4>
        <p className="text-slate-400 text-sm">
          {isTurkish ? 'Seviye' : 'Level'}: {Object.keys(swordLevels).indexOf(swordLevel) + 1}/4
        </p>
      </div>

      {/* Password Input */}
      <div className="mb-6">
        <label className="block text-slate-300 font-semibold mb-2">
          {isTurkish ? 'Şifrenizi Girin' : 'Enter Your Password'}
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 rounded-lg text-white text-lg font-mono focus:outline-none focus:border-purple-500 transition-colors"
            placeholder={isTurkish ? 'Şifre yazın...' : 'Type password...'}
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
          >
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </button>
        </div>
      </div>

      {/* Strength Meter */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-slate-300 font-semibold">
            {isTurkish ? 'Şifre Gücü' : 'Password Strength'}
          </span>
          <span className={`font-bold text-lg ${strength < 25 ? 'text-red-400' : strength < 50 ? 'text-orange-400' : strength < 75 ? 'text-yellow-400' : 'text-green-400'}`}>
            {getStrengthLabel()} ({strength}%)
          </span>
        </div>
        <div className="w-full h-6 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${getStrengthColor()}`}
            initial={{ width: 0 }}
            animate={{ width: `${strength}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Feedback List */}
      <div className="mb-6 bg-slate-800 rounded-lg p-4 min-h-[150px]">
        <h5 className="text-slate-300 font-semibold mb-3">
          {isTurkish ? 'Şifre Kontrol Listesi' : 'Password Checklist'}
        </h5>
        <div className="space-y-2">
          {feedback.length === 0 ? (
            <p className="text-slate-500 text-sm">
              {isTurkish ? 'Şifre yazmaya başla...' : 'Start typing your password...'}
            </p>
          ) : (
            feedback.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`flex items-center gap-2 text-sm ${
                  item.type === 'success' ? 'text-green-400' :
                  item.type === 'warning' ? 'text-yellow-400' :
                  'text-blue-400'
                }`}
              >
                <span>{item.text}</span>
              </motion.div>
            ))
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <motion.button
          onClick={resetPassword}
          className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isTurkish ? '🔄 Temizle' : '🔄 Clear'}
        </motion.button>
      </div>

      {/* Tips */}
      {strength === 100 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-center"
        >
          <p className="text-green-400 font-bold text-lg">
            {isTurkish ? '🎉 Mükemmel! Elmas kılıcını kazandın!' : '🎉 Perfect! You forged a diamond sword!'}
          </p>
          <p className="text-green-300 text-sm mt-2">
            {isTurkish 
              ? 'Bu şifre çok güçlü! Güvenli bir şekilde kullanabilirsin.'
              : 'This password is very strong! You can use it safely.'}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default PasswordSmithGame;

