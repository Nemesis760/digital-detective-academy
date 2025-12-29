import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Styles imported in index.css

function ScenarioGame({ isTurkish, isModule2 = false }) {
  const [gameState, setGameState] = useState('start');
  const [feedback, setFeedback] = useState('');
  const [correctChoices, setCorrectChoices] = useState(0);

  // MODÜL 2 OYUN METİNLERİ
  const module2Texts = {
    start: {
      image: '/images/game_social_media_setup.png',
      title: isTurkish ? '📱 Sosyal Medya Hesabı Kurma' : '📱 Setting Up a Social Media Account',
      desc: isTurkish 
        ? 'Yeni bir sosyal medya platformuna katılıyorsun. Hesabını güvenli bir şekilde kurmalısın. Her adımda doğru seçimleri yapabilir misin?'
        : 'You\'re joining a new social media platform. You must set up your account securely. Can you make the right choices at each step?',
      btn: isTurkish ? 'Başla' : 'Start'
    },
    step1: {
      image: '/images/game_username_choice.png',
      title: isTurkish ? 'Adım 1: Kullanıcı Adı Seç' : 'Step 1: Choose a Username',
      desc: isTurkish
        ? 'Sosyal medya hesabın için bir kullanıcı adı seçmelisin. Hangi kullanıcı adı daha güvenli?'
        : 'You need to choose a username for your social media account. Which username is safer?',
      options: [
        { 
          id: 'bad_username', 
          text: isTurkish ? 'AhmetAhmet2010 - Adın ve doğum yılın' : 'JohnJohn2010 - Your name and birth year', 
          correct: false, 
          feedback: isTurkish ? '❌ Adını ve doğum yılını kullanmak güvenli değil! Kişisel bilgiler tahmin edilmesi kolay.' : '❌ Using your name and birth year is not safe! Personal information is easy to guess.' 
        },
        { 
          id: 'good_username', 
          text: isTurkish ? 'Gizli_Kaşif_2024 - Kişisel bilgi içermeyen' : 'Secret_Explorer_2024 - Doesn\'t contain personal information', 
          correct: true, 
          feedback: isTurkish ? '✅ Harika! Kişisel bilgi içermeyen bir ad seçtin.' : '✅ Great! You chose a name that doesn\'t contain personal information.' 
        }
      ]
    },
    step2: {
      image: '/images/game_password_creation.png',
      title: isTurkish ? 'Adım 2: Güçlü Şifre Oluştur' : 'Step 2: Create a Strong Password',
      desc: isTurkish
        ? 'Şimdi hesabın için güçlü bir şifre oluşturmalısın. Hangi şifre daha güvenli?'
        : 'Now you need to create a strong password for your account. Which password is safer?',
      options: [
        { 
          id: 'weak_password', 
          text: '123456 - ' + (isTurkish ? 'Basit ve kolay' : 'Simple and easy'), 
          correct: false, 
          feedback: isTurkish ? '❌ Bu şifre çok basit! Kolayca tahmin edilebilir.' : '❌ This password is too simple! It can be easily guessed.' 
        },
        { 
          id: 'strong_password', 
          text: isTurkish ? 'Kaşif@Dijital#2024 - Uzun, karışık ve güçlü' : 'Explorer@Digital#2024 - Long, complex and strong', 
          correct: true, 
          feedback: isTurkish ? '✅ Mükemmel! Çok güçlü bir şifre oluşturdun.' : '✅ Perfect! You created a very strong password.' 
        }
      ]
    },
    step3: {
      image: '/images/game_privacy_settings.png',
      title: isTurkish ? 'Adım 3: Gizlilik Ayarlarını Ayarla' : 'Step 3: Set Your Privacy Settings',
      desc: isTurkish
        ? 'Gizlilik ayarlarını yapılandırmalısın. Profilini kime göstermek istersin?'
        : 'You need to configure your privacy settings. Who do you want to see your profile?',
      options: [
        { 
          id: 'public_profile', 
          text: isTurkish ? 'Herkese Açık - Herkes görebilir' : 'Public - Everyone can see', 
          correct: false, 
          feedback: isTurkish ? '❌ Profilini herkese açmak riskli! Bilinmeyen kişiler seni takip edebilir.' : '❌ Making your profile public is risky! Unknown people can follow you.' 
        },
        { 
          id: 'friends_only', 
          text: isTurkish ? 'Sadece Arkadaşlar - Güvenli ve kontrollü' : 'Friends Only - Safe and controlled', 
          correct: true, 
          feedback: isTurkish ? '✅ Akıllı seçim! Sadece arkadaşlarının görmesi daha güvenli.' : '✅ Smart choice! It\'s safer for only your friends to see.' 
        }
      ]
    },
    step4: {
      image: '/images/game_2fa_setup.png',
      title: isTurkish ? 'Adım 4: İki Faktörlü Kimlik Doğrulama Aç' : 'Step 4: Enable Two-Factor Authentication',
      desc: isTurkish
        ? 'Hesabını daha güvenli hale getirmek için 2FA açmalısın. Ne yapmalısın?'
        : 'You should enable 2FA to make your account more secure. What should you do?',
      options: [
        { 
          id: 'no_2fa', 
          text: isTurkish ? 'Açma, gerekli değil' : 'Don\'t enable it, not necessary', 
          correct: false, 
          feedback: isTurkish ? '❌ 2FA açmamak hesabını riskli hale getirir. Şifren çalınsa bile, ikinci kod olmadan kimse giremez.' : '❌ Not enabling 2FA leaves your account at risk. Even if your password is stolen, no one can log in without the second code.' 
        },
        { 
          id: 'enable_2fa', 
          text: isTurkish ? 'Aç, SMS veya uygulama ile' : 'Enable it with SMS or app', 
          correct: true, 
          feedback: isTurkish ? '✅ Harika! Hesabını çift koruma ile güvenli hale getirdin.' : '✅ Excellent! You secured your account with double protection.' 
        }
      ]
    },
    step5: {
      image: '/images/game_first_post.png',
      title: isTurkish ? 'Adım 5: İlk Paylaşımını Yap' : 'Step 5: Make Your First Post',
      desc: isTurkish
        ? 'Tatil fotoğrafını paylaşmak istiyorsun. Konum etiketini ne yapmalısın?'
        : 'You want to share a vacation photo. What should you do with the location tag?',
      options: [
        { 
          id: 'location_on', 
          text: isTurkish ? 'Konum etiketini açık bırak, herkese göster' : 'Leave location tag on, show to everyone', 
          correct: false, 
          feedback: isTurkish ? '❌ Konum etiketini açık bırakmak güvenli değil! Kötü niyetli kişiler seni bulabilir.' : '❌ Leaving location tag on is not safe! Malicious people can find you.' 
        },
        { 
          id: 'location_off', 
          text: isTurkish ? 'Konum etiketini kapat, sadece arkadaşlara göster' : 'Turn off location tag, show only to friends', 
          correct: true, 
          feedback: isTurkish ? '✅ Doğru seçim! Konum bilgisini gizli tutarak güvenliğini korudun.' : '✅ Correct choice! You protected your security by keeping location information private.' 
        }
      ]
    },
    step6: {
      image: '/images/game_friend_request.png',
      title: isTurkish ? 'Adım 6: Arkadaş İsteği Geldi' : 'Step 6: You Received a Friend Request',
      desc: isTurkish
        ? 'Tanımadığın biri seni arkadaş olarak eklemek istiyor. Ne yapmalısın?'
        : 'Someone you don\'t know wants to add you as a friend. What should you do?',
      options: [
        { 
          id: 'accept_unknown', 
          text: isTurkish ? 'Hemen kabul et, ne kadar çok arkadaş o kadar iyi' : 'Accept immediately, more friends is better', 
          correct: false, 
          feedback: isTurkish ? '❌ Bilinmeyen kişileri kabul etmek riskli! Sahte hesaplar olabilir.' : '❌ Accepting unknown people is risky! Fake accounts may exist.' 
        },
        { 
          id: 'check_profile', 
          text: isTurkish ? 'Profilini kontrol et, tanımıyorsan reddet' : 'Check their profile, decline if you don\'t know them', 
          correct: true, 
          feedback: isTurkish ? '✅ Mükemmel! Güvenli bir seçim yaptın.' : '✅ Perfect! You made a safe choice.' 
        }
      ]
    },
    success: {
      image: '/images/game_success_shield.png',
      title: isTurkish ? '🎉 Tebrikler!' : '🎉 Congratulations!',
      desc: isTurkish
        ? `Hesabını tamamen güvenli bir şekilde kurdum! ${correctChoices}/6 adımda doğru seçimleri yaptın. Artık dijital kalkanını başarıyla oluşturdun!`
        : `You set up your account completely securely! You made the right choices in ${correctChoices}/6 steps. You've successfully built your digital shield!`,
      btn: isTurkish ? 'Oyunu Bitir' : 'Finish Game'
    }
  };

  // MODÜL 1 OYUN METİNLERİ (ORIJINAL)
  const module1Texts = {
    start: {
      image: '/images/game_start.png',
      title: isTurkish ? '🕵️ Dijital Dedektif: Laboratuvar Gizemi' : '🕵️ Digital Detective: Lab Mystery',
      desc: isTurkish 
        ? 'Okulun bilgisayar laboratuvarında büyük bir sorun var! Yarınki sınav için bilgisayarların hazır olması gerekiyor ama hiçbiri çalışmıyor. Müdür seni görevlendirdi. Öğrendiğin bilgileri kullanarak sorunu çözebilir misin?'
        : 'There is a big problem in the school computer lab! The computers need to be ready for tomorrow\'s exam, but none of them are working. The principal has assigned you. Can you solve the problem using what you learned?',
      btn: isTurkish ? 'Görevi Kabul Et' : 'Accept Mission'
    },
    scene1: {
      image: '/images/game_scene1_dark_room.png',
      title: isTurkish ? 'Bölüm 1: Karanlık Oda' : 'Chapter 1: The Dark Room',
      desc: isTurkish
        ? 'Laboratuvara girdin. İçerisi sessiz. Ana bilgisayarın güç düğmesine basıyorsun ama hiçbir şey olmuyor. Ekran simsiyah. Ne yapmalısın?'
        : 'You entered the lab. It\'s quiet inside. You press the power button of the main computer, but nothing happens. The screen is pitch black. What should you do?',
      options: [
        { id: 'software', text: isTurkish ? 'Yazılımı yeniden yükle' : 'Reinstall software', correct: false, feedback: isTurkish ? 'Bilgisayar açılmadan yazılım yükleyemezsin!' : 'You can\'t install software before the computer turns on!' },
        { id: 'cable', text: isTurkish ? 'Güç kablosunu kontrol et' : 'Check power cable', correct: true, feedback: isTurkish ? 'Harika! Kablo gevşemişti. Taktın ve ışıklar yandı!' : 'Great! The cable was loose. You plugged it in and the lights turned on!' },
        { id: 'monitor', text: isTurkish ? 'Monitörü değiştir' : 'Replace monitor', correct: false, feedback: isTurkish ? 'Sorun monitörde değil gibi, kasa da çalışmıyor.' : 'The problem doesn\'t seem to be the monitor, the case isn\'t working either.' }
      ]
    },
    scene2: {
      image: '/images/game_scene2_os_error.png',
      title: isTurkish ? 'Bölüm 2: İşletim Sistemi Hatası' : 'Chapter 2: Operating System Error',
      desc: isTurkish
        ? 'Bilgisayar açıldı ama ekranda garip yazılar var. İşletim sistemi yüklenmiyor. Ekranda "OS Not Found" yazıyor. Bu bilgisayar bir Apple Mac bilgisayarı. Hangi sistemi yüklemelisin?'
        : 'The computer turned on, but there are strange texts on the screen. The operating system is not loading. It says "OS Not Found". This is an Apple Mac computer. Which system should you install?',
      options: [
        { id: 'windows', text: 'Windows 11', correct: false, feedback: isTurkish ? 'Mac bilgisayarlar genellikle macOS kullanır.' : 'Mac computers usually use macOS.' },
        { id: 'android', text: 'Android', correct: false, feedback: isTurkish ? 'Android telefonlar içindir!' : 'Android is for phones!' },
        { id: 'macos', text: 'macOS', correct: true, feedback: isTurkish ? 'Doğru! macOS yükledin ve sistem açıldı.' : 'Correct! You installed macOS and the system booted up.' }
      ]
    },
    scene3: {
      image: '/images/game_scene3_messy_desktop.png',
      title: isTurkish ? 'Bölüm 3: Kayıp Dosya' : 'Chapter 3: The Lost File',
      desc: isTurkish
        ? 'Masaüstü çok dağınık! Yüzlerce dosya var. Müdürün "SINAV_SORULARI.docx" dosyasını bulup "GİZLİ" klasörüne taşıman gerekiyor. Dosya nerede olabilir?'
        : 'The desktop is very messy! There are hundreds of files. You need to find the "EXAM_QUESTIONS.docx" file and move it to the "SECRET" folder. Where could the file be?',
      options: [
        { id: 'music', text: isTurkish ? 'Müzik klasöründe (.mp3)' : 'In Music folder (.mp3)', correct: false, feedback: isTurkish ? '.docx bir müzik dosyası değildir.' : '.docx is not a music file.' },
        { id: 'images', text: isTurkish ? 'Resim klasöründe (.jpg)' : 'In Pictures folder (.jpg)', correct: false, feedback: isTurkish ? '.docx bir resim dosyası değildir.' : '.docx is not an image file.' },
        { id: 'documents', text: isTurkish ? 'Belgeler klasöründe (.docx)' : 'In Documents folder (.docx)', correct: true, feedback: isTurkish ? 'Buldun! Dosyayı güvenli klasöre taşıdın.' : 'Found it! You moved the file to the secure folder.' }
      ]
    },
    success: {
      image: '/images/game_success.png',
      title: isTurkish ? '🎉 Görev Tamamlandı!' : '🎉 Mission Accomplished!',
      desc: isTurkish
        ? 'Tebrikler Dedektif! Bilgisayarı tamir ettin, sistemi kurdun ve sınav sorularını kurtardın. Okul sana minnettar!'
        : 'Congratulations Detective! You fixed the computer, installed the system, and saved the exam questions. The school is grateful to you!',
      btn: isTurkish ? 'Oyunu Bitir' : 'Finish Game'
    }
  };

  const texts = isModule2 ? module2Texts : module1Texts;

  const handleOptionClick = (option) => {
    setFeedback(option.feedback);
    
    if (option.correct) {
      if (isModule2) {
        setCorrectChoices(correctChoices + 1);
      }
      
      setTimeout(() => {
        setFeedback('');
        
        if (isModule2) {
          if (gameState === 'start') setGameState('step1');
          else if (gameState === 'step1') setGameState('step2');
          else if (gameState === 'step2') setGameState('step3');
          else if (gameState === 'step3') setGameState('step4');
          else if (gameState === 'step4') setGameState('step5');
          else if (gameState === 'step5') setGameState('step6');
          else if (gameState === 'step6') setGameState('success');
        } else {
          if (gameState === 'start') setGameState('scene1');
          else if (gameState === 'scene1') setGameState('scene2');
          else if (gameState === 'scene2') setGameState('scene3');
          else if (gameState === 'scene3') setGameState('success');
        }
      }, 2000);
    }
  };

  const resetGame = () => {
    setGameState('start');
    setFeedback('');
    setCorrectChoices(0);
  };

  const currentText = texts[gameState];

  return (
    <div className="scenario-game-container">
      <AnimatePresence mode="wait">
        {gameState === 'start' && (
          <motion.div 
            key="start"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="game-card start-screen"
          >
            <img src={currentText.image} alt="Start" className="game-image" />
            <h2>{currentText.title}</h2>
            <p>{currentText.desc}</p>
            <button 
              className="game-btn start-btn" 
              onClick={() => setGameState(isModule2 ? 'step1' : 'scene1')}
            >
              {currentText.btn}
            </button>
          </motion.div>
        )}

        {isModule2 && (gameState === 'step1' || gameState === 'step2' || gameState === 'step3' || gameState === 'step4' || gameState === 'step5' || gameState === 'step6') && (
          <motion.div 
            key="step"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="game-card scene-screen"
          >
            <div className="scene-header">
              <img src={currentText.image} alt="Step" className="game-image scene-img" />
              <span className="scene-badge">{currentText.title}</span>
            </div>
            <p className="scene-desc">{currentText.desc}</p>
            
            <div className="options-grid">
              {currentText.options.map((opt) => (
                <button 
                  key={opt.id} 
                  className="option-btn"
                  onClick={() => handleOptionClick(opt)}
                >
                  {opt.text}
                </button>
              ))}
            </div>

            {feedback && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="game-feedback"
              >
                {feedback}
              </motion.div>
            )}
          </motion.div>
        )}

        {!isModule2 && (gameState === 'scene1' || gameState === 'scene2' || gameState === 'scene3') && (
          <motion.div 
            key="scene"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="game-card scene-screen"
          >
            <div className="scene-header">
              <img src={currentText.image} alt="Scene" className="game-image scene-img" />
              <span className="scene-badge">{currentText.title}</span>
            </div>
            <p className="scene-desc">{currentText.desc}</p>
            
            <div className="options-grid">
              {currentText.options.map((opt) => (
                <button 
                  key={opt.id} 
                  className="option-btn"
                  onClick={() => handleOptionClick(opt)}
                >
                  {opt.text}
                </button>
              ))}
            </div>

            {feedback && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="game-feedback"
              >
                {feedback}
              </motion.div>
            )}
          </motion.div>
        )}

        {gameState === 'success' && (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="game-card success-screen"
          >
            <img src={currentText.image} alt="Success" className="game-image" />
            <h2>{currentText.title}</h2>
            <p>{currentText.desc}</p>
            <button className="game-btn success-btn" onClick={resetGame}>
              {currentText.btn}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ScenarioGame;
