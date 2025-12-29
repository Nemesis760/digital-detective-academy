import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import soundManager from '../utils/soundEffects';

/**
 * ScenarioGame_2FA - 2FA (İki Aşamalı Doğrulama) Senaryo Oyunu
 * Öğrenciler 2FA'nın önemini senaryolar üzerinden öğrenir
 */

function ScenarioGame_2FA({ isTurkish = true }) {
  const [gameState, setGameState] = useState('start');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const scenarios = {
    start: {
      image: '/images/module4/phone_lock_screen.png',
      title: isTurkish ? '🔒 2FA Güvenlik Macerası' : '🔒 2FA Security Adventure',
      desc: isTurkish
        ? 'Efe, oyun hesabını güvenli hale getirmek istiyor. Şifresi güçlü ama yeterli mi? 2FA\'nın önemini senaryolar üzerinden öğrenelim!'
        : 'Efe wants to secure his game account. His password is strong, but is it enough? Let\'s learn the importance of 2FA through scenarios!',
      btn: isTurkish ? 'Macera Başlasın!' : 'Start Adventure!'
    },
    step1: {
      image: '/images/password_security_hero.png',
      title: isTurkish ? 'Senaryo 1: Hesap Ayarları' : 'Scenario 1: Account Settings',
      desc: isTurkish
        ? 'Efe oyun hesabının ayarlarına bakıyor. "İki Aşamalı Doğrulama (2FA)" seçeneğini görüyor. Ne yapmalı?'
        : 'Efe is looking at his game account settings. He sees the "Two-Factor Authentication (2FA)" option. What should he do?',
      options: [
        {
          id: 'skip_2fa',
          text: isTurkish ? 'Atla, şifrem zaten güçlü' : 'Skip it, my password is already strong',
          correct: false,
          feedback: isTurkish
            ? '❌ Yanlış! Şifre güçlü olsa bile çalınabilir. 2FA ekstra koruma sağlar.'
            : '❌ Wrong! Even if your password is strong, it can be stolen. 2FA provides extra protection.'
        },
        {
          id: 'enable_2fa',
          text: isTurkish ? 'Aç, ekstra güvenlik için' : 'Enable it for extra security',
          correct: true,
          feedback: isTurkish
            ? '✅ Harika! 2FA hesabını çift koruma ile güvenli hale getirir.'
            : '✅ Great! 2FA secures your account with double protection.'
        },
        {
          id: 'later',
          text: isTurkish ? 'Sonra açarım, şimdi gerek yok' : 'I\'ll enable it later, not needed now',
          correct: false,
          feedback: isTurkish
            ? '❌ Güvenlik ertelememeli! Şimdi açmak en iyisi.'
            : '❌ Security shouldn\'t be postponed! It\'s best to enable it now.'
        }
      ]
    },
    step2: {
      image: '/images/module4/kid_with_tablet.png',
      title: isTurkish ? 'Senaryo 2: Telefon Kodu' : 'Scenario 2: Phone Code',
      desc: isTurkish
        ? 'Efe 2FA\'yı açtı. Giriş yaparken telefonuna 6 haneli bir kod geldi. Bu kod ne işe yarar?'
        : 'Efe enabled 2FA. When logging in, a 6-digit code came to his phone. What is this code for?',
      options: [
        {
          id: 'ignore_code',
          text: isTurkish ? 'Görmezden gel, şifre yeterli' : 'Ignore it, password is enough',
          correct: false,
          feedback: isTurkish
            ? '❌ Kod 2FA\'nın ikinci kilididir! Girmelisin.'
            : '❌ The code is 2FA\'s second lock! You must enter it.'
        },
        {
          id: 'enter_code',
          text: isTurkish ? 'Giriş ekranına gir, ikinci kilit bu' : 'Enter it on login screen, this is the second lock',
          correct: true,
          feedback: isTurkish
            ? '✅ Doğru! Kod, şifre çalınsa bile hesabını koruyan ikinci kilittir.'
            : '✅ Correct! The code is the second lock that protects your account even if your password is stolen.'
        },
        {
          id: 'share_code',
          text: isTurkish ? 'Arkadaşıma gönder, o da girsin' : 'Send to my friend, let them enter it',
          correct: false,
          feedback: isTurkish
            ? '❌ Asla! 2FA kodunu kimseyle paylaşma. Sadece sen kullanmalısın.'
            : '❌ Never! Never share your 2FA code with anyone. Only you should use it.'
        }
      ]
    },
    step3: {
      image: '/images/module4/download_warning.png',
      title: isTurkish ? 'Senaryo 3: Hacker Saldırısı' : 'Scenario 3: Hacker Attack',
      desc: isTurkish
        ? 'Bir hacker Efe\'nin şifresini çaldı ve hesabına girmeye çalışıyor. Şifreyi biliyor ama telefonu yok. Ne olur?'
        : 'A hacker stole Efe\'s password and is trying to access his account. He knows the password but doesn\'t have the phone. What happens?',
      options: [
        {
          id: 'hacker_success',
          text: isTurkish ? 'Hacker hesaba girer, şifre yeterli' : 'Hacker accesses account, password is enough',
          correct: false,
          feedback: isTurkish
            ? '❌ Yanlış! 2FA açıksa hacker telefon kodunu bilmediği için giremez.'
            : '❌ Wrong! If 2FA is enabled, the hacker cannot access because they don\'t know the phone code.'
        },
        {
          id: 'hacker_blocked',
          text: isTurkish ? 'Hacker giremez, 2FA koruyor' : 'Hacker cannot access, 2FA protects',
          correct: true,
          feedback: isTurkish
            ? '✅ Mükemmel! 2FA sayesinde şifre çalınsa bile hesap güvende kalır.'
            : '✅ Perfect! Thanks to 2FA, even if the password is stolen, the account remains secure.'
        },
        {
          id: 'depends',
          text: isTurkish ? 'Duruma göre değişir' : 'Depends on the situation',
          correct: false,
          feedback: isTurkish
            ? '❌ Hayır! 2FA açıksa kesinlikle korur.'
            : '❌ No! If 2FA is enabled, it definitely protects.'
        }
      ]
    },
    step4: {
      image: '/images/module4/digital_citizenship_poster.png',
      title: isTurkish ? 'Senaryo 4: Hangi Hesaplarda Açmalı?' : 'Scenario 4: Which Accounts Should Enable It?',
      desc: isTurkish
        ? 'Efe hangi hesaplarında 2FA açmalı?'
        : 'Which accounts should Efe enable 2FA on?',
      options: [
        {
          id: 'only_email',
          text: isTurkish ? 'Sadece e-posta hesabı' : 'Only email account',
          correct: false,
          feedback: isTurkish
            ? '❌ Tüm önemli hesaplarda açmalısın!'
            : '❌ You should enable it on all important accounts!'
        },
        {
          id: 'all_important',
          text: isTurkish ? 'Tüm önemli hesaplar (e-posta, sosyal medya, oyun)' : 'All important accounts (email, social media, games)',
          correct: true,
          feedback: isTurkish
            ? '✅ Doğru! E-posta, sosyal medya ve oyun hesaplarında mutlaka açmalısın.'
            : '✅ Correct! You must enable it on email, social media, and game accounts.'
        },
        {
          id: 'none',
          text: isTurkish ? 'Hiçbirinde, gerek yok' : 'None, not needed',
          correct: false,
          feedback: isTurkish
            ? '❌ 2FA tüm hesaplar için önemlidir!'
            : '❌ 2FA is important for all accounts!'
        }
      ]
    },
    step5: {
      image: '/images/module4/locked_door_tablet_metaphor.png',
      title: isTurkish ? 'Senaryo 5: Kod Kaybolursa?' : 'Scenario 5: What If Code is Lost?',
      desc: isTurkish
        ? 'Efe telefonunu kaybetti ve 2FA kodunu alamıyor. Ne yapmalı?'
        : 'Efe lost his phone and cannot receive the 2FA code. What should he do?',
      options: [
        {
          id: 'panic',
          text: isTurkish ? 'Panik yap, hesap kayboldu' : 'Panic, account is lost',
          correct: false,
          feedback: isTurkish
            ? '❌ Panik yapma! Yedek kodlar veya hesap kurtarma seçenekleri var.'
            : '❌ Don\'t panic! There are backup codes or account recovery options.'
        },
        {
          id: 'recovery',
          text: isTurkish ? 'Yedek kodları kullan veya hesap kurtarma yap' : 'Use backup codes or account recovery',
          correct: true,
          feedback: isTurkish
            ? '✅ Doğru! 2FA açarken yedek kodlar kaydetmelisin. Hesap kurtarma seçeneklerini de kullanabilirsin.'
            : '✅ Correct! You should save backup codes when enabling 2FA. You can also use account recovery options.'
        },
        {
          id: 'disable_2fa',
          text: isTurkish ? '2FA\'yı kapat, sorun çözülsün' : 'Disable 2FA, problem solved',
          correct: false,
          feedback: isTurkish
            ? '❌ 2FA\'yı kapatmak güvenliği azaltır. Yedek kodları kullan.'
            : '❌ Disabling 2FA reduces security. Use backup codes.'
        }
      ]
    },
    success: {
      image: '/images/module4/digital_citizenship_poster.png',
      title: isTurkish ? '🎉 Tebrikler! 2FA Uzmanı Oldun!' : '🎉 Congratulations! You\'re a 2FA Expert!',
      desc: isTurkish
        ? `Harika iş çıkardın! ${score}/5 soruyu doğru cevapladın. Artık 2FA\'nın önemini biliyorsun ve hesaplarını nasıl koruyacağını öğrendin.`
        : `Great job! You answered ${score}/5 questions correctly. Now you know the importance of 2FA and how to protect your accounts.`,
      btn: isTurkish ? 'Tekrar Oyna' : 'Play Again'
    }
  };

  const handleOptionClick = (option) => {
    if (showAnswer) return; // Cevap zaten verildiyse tekrar tıklamayı engelle
    
    setSelectedOption(option.id);
    setShowAnswer(true);
    setFeedback(option.feedback);
    
    if (option.correct) {
      setScore(prev => prev + 1);
      setCompletedSteps(prev => prev + 1);
      soundManager.playCorrect();
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.6 },
        colors: ['#10b981', '#059669', '#34d399']
      });
      
      setTimeout(() => {
        setFeedback('');
        setSelectedOption(null);
        setShowAnswer(false);
        if (gameState === 'step1') setGameState('step2');
        else if (gameState === 'step2') setGameState('step3');
        else if (gameState === 'step3') setGameState('step4');
        else if (gameState === 'step4') setGameState('step5');
        else if (gameState === 'step5') {
          soundManager.playSuccess();
          setTimeout(() => {
            confetti({
              particleCount: 200,
              spread: 100,
              origin: { y: 0.5 },
              colors: ['#10b981', '#059669', '#34d399', '#fbbf24', '#6366f1']
            });
          }, 300);
          setGameState('success');
        }
      }, 2000);
    } else {
      soundManager.playWrong();
      setTimeout(() => {
        setFeedback('');
        setSelectedOption(null);
        setShowAnswer(false);
      }, 2000);
    }
  };

  const resetGame = () => {
    setGameState('start');
    setFeedback('');
    setScore(0);
    setCompletedSteps(0);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  const currentScenario = scenarios[gameState];

  return (
    <div className="scenario-game-2fa-container">
      <AnimatePresence mode="wait">
        {gameState === 'start' && (
          <motion.div
            key="start"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="scenario-start-card"
          >
            <div className="scenario-image-wrapper">
              <img 
                src={currentScenario.image} 
                alt="Start" 
                className="scenario-image"
                onError={(e) => {
                  e.target.src = '/images/password_security_hero.png';
                }}
              />
            </div>
            <h2 className="scenario-title">{currentScenario.title}</h2>
            <p className="scenario-desc">{currentScenario.desc}</p>
            <motion.button
              className="scenario-btn start-btn"
              onClick={() => setGameState('step1')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {currentScenario.btn}
            </motion.button>
          </motion.div>
        )}

        {gameState.startsWith('step') && (
          <motion.div
            key={gameState}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="scenario-question-card"
          >
            <div className="scenario-progress">
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${(completedSteps / 5) * 100}%` }}
                ></div>
              </div>
              <p className="progress-text">
                {isTurkish ? 'İlerleme:' : 'Progress:'} {completedSteps}/5
              </p>
            </div>

            <div className="scenario-image-wrapper">
              <img 
                src={currentScenario.image} 
                alt={currentScenario.title}
                className="scenario-image"
                onError={(e) => {
                  e.target.src = '/images/password_security_hero.png';
                }}
              />
            </div>

            <h2 className="scenario-title">{currentScenario.title}</h2>
            <p className="scenario-desc">{currentScenario.desc}</p>

            <div className="scenario-options">
              {currentScenario.options.map((option, idx) => {
                const isSelected = selectedOption === option.id;
                const getOptionClass = () => {
                  if (!showAnswer) return 'scenario-option';
                  if (option.correct) return 'scenario-option correct';
                  if (isSelected && !option.correct) return 'scenario-option wrong';
                  return 'scenario-option';
                };
                
                return (
                  <motion.button
                    key={option.id}
                    className={getOptionClass()}
                    onClick={() => handleOptionClick(option)}
                    disabled={showAnswer}
                    whileHover={!showAnswer ? { scale: 1.02 } : {}}
                    whileTap={!showAnswer ? { scale: 0.98 } : {}}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {showAnswer && option.correct && '✅ '}
                    {showAnswer && isSelected && !option.correct && '❌ '}
                    {option.text}
                  </motion.button>
                );
              })}
            </div>

            <AnimatePresence>
              {feedback && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`scenario-feedback ${feedback.startsWith('✅') ? 'correct' : 'wrong'}`}
                >
                  {feedback}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {gameState === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="scenario-success-card"
          >
            <div className="scenario-image-wrapper">
              <img 
                src={currentScenario.image} 
                alt="Success" 
                className="scenario-image"
                onError={(e) => {
                  e.target.src = '/images/password_security_hero.png';
                }}
              />
            </div>
            <h2 className="scenario-title">{currentScenario.title}</h2>
            <p className="scenario-desc">{currentScenario.desc}</p>
            <div className="score-display">
              <span className="score-number">{score}/5</span>
              <span className="score-label">
                {isTurkish ? 'Doğru Cevap' : 'Correct Answers'}
              </span>
            </div>
            <motion.button
              className="scenario-btn success-btn"
              onClick={resetGame}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {currentScenario.btn}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .scenario-game-2fa-container {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          background: linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%);
          border-radius: 20px;
          min-height: 600px;
        }

        .scenario-start-card,
        .scenario-question-card,
        .scenario-success-card {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .scenario-image-wrapper {
          width: 100%;
          max-width: 300px;
          margin: 0 auto 1.5rem;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .scenario-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .scenario-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #4f46e5;
          margin-bottom: 1rem;
        }

        .scenario-desc {
          font-size: 1.1rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .scenario-progress {
          margin-bottom: 2rem;
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: #e0e7ff;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #4f46e5, #7c3aed);
          transition: width 0.5s ease;
        }

        .progress-text {
          font-size: 0.9rem;
          color: #64748b;
          font-weight: 600;
        }

        .scenario-options {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .scenario-option {
          padding: 1rem 1.5rem;
          border: 2px solid #e0e7ff;
          border-radius: 12px;
          background: white;
          font-size: 1rem;
          font-weight: 600;
          color: #1e293b;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }

        .scenario-option:hover:not(:disabled) {
          border-color: #4f46e5;
          background: #f0f4ff;
          transform: translateX(5px);
        }

        .scenario-option:disabled {
          cursor: not-allowed;
          opacity: 0.8;
        }

        .scenario-option.correct {
          border-color: #10b981;
          background: #d1fae5;
          color: #059669;
        }

        .scenario-option.wrong {
          border-color: #ef4444;
          background: #fee2e2;
          color: #dc2626;
        }

        .scenario-feedback {
          padding: 1rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          margin-top: 1rem;
        }

        .scenario-feedback.correct {
          background: #d1fae5;
          color: #059669;
          border: 2px solid #10b981;
        }

        .scenario-feedback.wrong {
          background: #fee2e2;
          color: #dc2626;
          border: 2px solid #ef4444;
        }

        .scenario-btn {
          padding: 1rem 2rem;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .start-btn {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(79, 70, 229, 0.4);
        }

        .start-btn:hover {
          box-shadow: 0 6px 20px rgba(79, 70, 229, 0.6);
        }

        .success-btn {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
        }

        .success-btn:hover {
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.6);
        }

        .score-display {
          margin: 2rem 0;
          padding: 1.5rem;
          background: linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%);
          border-radius: 12px;
          border: 2px solid #4f46e5;
        }

        .score-number {
          display: block;
          font-size: 3rem;
          font-weight: 800;
          color: #4f46e5;
          margin-bottom: 0.5rem;
        }

        .score-label {
          display: block;
          font-size: 1.1rem;
          color: #64748b;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .scenario-game-2fa-container {
            padding: 1rem;
          }

          .scenario-start-card,
          .scenario-question-card,
          .scenario-success-card {
            padding: 1.5rem;
          }

          .scenario-title {
            font-size: 1.5rem;
          }

          .scenario-desc {
            font-size: 1rem;
          }

          .scenario-option {
            padding: 0.75rem 1rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}

export default ScenarioGame_2FA;

