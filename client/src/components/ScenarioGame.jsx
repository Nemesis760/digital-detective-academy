import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ScenarioGame({ isTurkish, isModule2 }) {
  const [gameState, setGameState] = useState('start');
  const [feedback, setFeedback] = useState('');
  // ✅ FIX: cevap işlenirken tekrar tıklamayı engeller
  const [isAnswering, setIsAnswering] = useState(false);

  const module1Texts = {
    start: {
      image: '/images/game_start.png',
      title: isTurkish ? '🕵️ Dijital Dedektif: Laboratuvar Gizemi' : '🕵️ Digital Detective: Lab Mystery',
      desc: isTurkish
        ? 'Okulun bilgisayar laboratuvarında büyük bir sorun var! Yarınki sınav için bilgisayarların hazır olması gerekiyor ama hiçbiri çalışmıyor. Müdür seni görevlendirdi. Öğrendiğin bilgileri kullanarak sorunu çözebilir misin?'
        : "There is a big problem in the school computer lab! The computers need to be ready for tomorrow's exam, but none of them are working. The principal has assigned you. Can you solve the problem using what you learned?",
      btn: isTurkish ? 'Görevi Kabul Et' : 'Accept Mission'
    },
    scene1: {
      image: '/images/game_scene1_dark_room.png',
      title: isTurkish ? 'Bölüm 1: Karanlık Oda' : 'Chapter 1: The Dark Room',
      desc: isTurkish
        ? 'Laboratuvara girdin. İçerisi sessiz. Ana bilgisayarın güç düğmesine basıyorsun ama hiçbir şey olmuyor. Ekran simsiyah. Ne yapmalısın?'
        : "You entered the lab. It's quiet inside. You press the power button of the main computer, but nothing happens. The screen is pitch black. What should you do?",
      options: [
        { id: 'software', text: isTurkish ? 'Yazılımı yeniden yükle' : 'Reinstall software', correct: false, feedback: isTurkish ? 'Bilgisayar açılmadan yazılım yükleyemezsin!' : "You can't install software before the computer turns on!" },
        { id: 'cable', text: isTurkish ? 'Güç kablosunu kontrol et' : 'Check power cable', correct: true, feedback: isTurkish ? 'Harika! Kablo gevşemişti. Taktın ve ışıklar yandı!' : 'Great! The cable was loose. You plugged it in and the lights turned on!' },
        { id: 'monitor', text: isTurkish ? 'Monitörü değiştir' : 'Replace monitor', correct: false, feedback: isTurkish ? 'Sorun monitörde değil gibi, kasa da çalışmıyor.' : "The problem doesn't seem to be the monitor, the case isn't working either." }
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

  const module2Texts = {
    start: {
      image: '/images/game_social_media_setup.png',
      title: isTurkish ? '🛡️ Dijital Kalkan: Sosyal Medya Görevi' : '🛡️ Digital Shield: Social Media Mission',
      desc: isTurkish
        ? 'Yeni bir sosyal medya platformu popüler oldu: "FriendZone". Herkes orada! Sen de bir hesap açmak istiyorsun ama dikkatli olmalısın. Dijital ayak izini temiz tutarak ve güvenliğini sağlayarak hesabını kurabilir misin?'
        : 'A new social media platform has become popular: "FriendZone". Everyone is there! You want to open an account too, but you must be careful. Can you set up your account by keeping your digital footprint clean and ensuring your security?',
      btn: isTurkish ? 'Hesap Kurmaya Başla' : 'Start Setup'
    },
    scene1: {
      image: '/images/game_username_choice.png',
      title: isTurkish ? 'Adım 1: Kullanıcı Adı Seçimi' : 'Step 1: Username Choice',
      desc: isTurkish
        ? 'İlk adım kullanıcı adı seçmek. Hangi kullanıcı adını seçmelisin?'
        : 'The first step is to choose a username. Which username should you choose?',
      options: [
        { id: 'realname', text: 'AdSoyad_TCNo (AhmetYilmaz_12345)', correct: false, feedback: isTurkish ? 'Çok fazla kişisel bilgi içeriyor! TC kimlik numaranı asla kullanma.' : 'Contains too much personal info! Never use your ID number.' },
        { id: 'nickname', text: 'KodYazari_2024 (Takma İsim)', correct: true, feedback: isTurkish ? 'Harika! Takma isim kullanmak kimliğini korur.' : 'Great! Using a nickname protects your identity.' },
        { id: 'email', text: 'ahmet.yilmaz@email.com', correct: false, feedback: isTurkish ? 'E-posta adresini kullanıcı adı yaparsan spam mesajlar alabilirsin.' : 'If you use your email as username, you might get spam.' }
      ]
    },
    scene2: {
      image: '/images/game_password_creation.png',
      title: isTurkish ? 'Adım 2: Şifre Oluşturma' : 'Step 2: Password Creation',
      desc: isTurkish
        ? 'Şimdi güçlü bir şifre oluşturmalısın. Hangisi en güvenli?'
        : 'Now you must create a strong password. Which one is the most secure?',
      options: [
        { id: 'weak1', text: '123456', correct: false, feedback: isTurkish ? 'Bu dünyadaki en yaygın ve en zayıf şifre!' : 'This is the most common and weakest password in the world!' },
        { id: 'weak2', text: 'Ahmet123', correct: false, feedback: isTurkish ? 'İsmini ve ardışık sayıları kullanmak tahmin edilmesini kolaylaştırır.' : 'Using your name and sequential numbers makes it easy to guess.' },
        { id: 'strong', text: 'K!tap_M@vi92', correct: true, feedback: isTurkish ? 'Mükemmel! Büyük harf, küçük harf, rakam ve sembol içeriyor.' : 'Perfect! Contains uppercase, lowercase, numbers, and symbols.' }
      ]
    },
    scene3: {
      image: '/images/game_privacy_settings.png',
      title: isTurkish ? 'Adım 3: Gizlilik Ayarları' : 'Step 3: Privacy Settings',
      desc: isTurkish
        ? 'Hesabın kimlere açık olsun? Bu ayar çok önemli.'
        : 'Who should your account be visible to? This setting is very important.',
      options: [
        { id: 'public', text: isTurkish ? 'Herkese Açık (Dünyadaki herkes görebilir)' : 'Public (Everyone in the world can see)', correct: false, feedback: isTurkish ? 'Tanımadığın kişiler fotoğraflarını ve bilgilerini görebilir. Tehlikeli olabilir.' : 'Strangers can see your photos and info. Could be dangerous.' },
        { id: 'friends', text: isTurkish ? 'Sadece Arkadaşlar (Onayladığım kişiler)' : 'Friends Only (People I approve)', correct: true, feedback: isTurkish ? 'En güvenli seçenek! Sadece tanıdığın kişiler paylaşımlarını görebilir.' : 'Safest option! Only people you know can see your posts.' }
      ]
    },
    scene4: {
      image: '/images/game_first_post.png',
      title: isTurkish ? 'Adım 4: İlk Paylaşım' : 'Step 4: First Post',
      desc: isTurkish
        ? 'Okul gezisinde çektiğin harika bir fotoğrafı paylaşmak istiyorsun. Fotoğrafta okulun tabelası görünüyor. Ne yapmalısın?'
        : 'You want to share a great photo from the school trip. The school sign is visible in the photo. What should you do?',
      options: [
        { id: 'post_location', text: isTurkish ? 'Konum ekleyerek paylaş' : 'Share with location', correct: false, feedback: isTurkish ? 'Okulunun konumunu ve tabelasını paylaşmak seni takip edilebilir yapar.' : 'Sharing your school location and sign makes you trackable.' },
        { id: 'blur', text: isTurkish ? 'Okul tabelasını bulanıklaştır ve konum ekleme' : "Blur the sign and don't add location", correct: true, feedback: isTurkish ? 'Çok akıllıca! Kişisel alanını ve güvenliğini korudun.' : 'Very smart! You protected your personal space and safety.' }
      ]
    },
    scene5: {
      image: '/images/game_friend_request.png',
      title: isTurkish ? 'Adım 5: Arkadaşlık İsteği' : 'Step 5: Friend Request',
      desc: isTurkish
        ? 'Hesabını açar açmaz bir istek geldi: "SüperOyunYöneticisi". Profilinde hiç fotoğraf yok ve sana "Bedava oyun kredisi ister misin?" diye mesaj attı.'
        : 'As soon as you opened your account, a request came: "SuperGameAdmin". No photos on profile and messaged you "Want free game credits?".',
      options: [
        { id: 'accept', text: isTurkish ? 'Kabul et ve cevap ver' : 'Accept and reply', correct: false, feedback: isTurkish ? 'Bu bir tuzak olabilir! Tanımadığın kişilere güvenme.' : "This could be a trap! Don't trust strangers." },
        { id: 'reject', text: isTurkish ? 'Reddet ve Engelle' : 'Reject and Block', correct: true, feedback: isTurkish ? 'Doğru karar! Şüpheli hesapları engellemek en iyisidir.' : 'Right decision! Blocking suspicious accounts is best.' }
      ]
    },
    success: {
      image: '/images/game_success_shield.png',
      title: isTurkish ? '🛡️ Kalkanlar Aktif!' : '🛡️ Shields Active!',
      desc: isTurkish
        ? 'Tebrikler! Sosyal medya hesabını başarıyla ve güvenli bir şekilde kurdun. Dijital ayak izin temiz ve kalkanların seni koruyor.'
        : 'Congratulations! You successfully and securely set up your social media account. Your digital footprint is clean and your shields are protecting you.',
      btn: isTurkish ? 'Oyunu Bitir' : 'Finish Game'
    }
  };

  const texts = isModule2 ? module2Texts : module1Texts;

  const handleOptionClick = (option) => {
    // ✅ FIX: zaten bir cevap işleniyorsa tekrar tıklamayı engelle
    if (isAnswering) return;

    setIsAnswering(true);
    setFeedback(option.feedback);

    setTimeout(() => {
      setFeedback('');
      setIsAnswering(false); // ✅ FIX: kilit her durumda kaldırılıyor

      if (option.correct) {
        if (gameState === 'scene1') setGameState('scene2');
        else if (gameState === 'scene2') setGameState('scene3');
        else if (gameState === 'scene3') setGameState(isModule2 ? 'scene4' : 'success');
        else if (gameState === 'scene4') setGameState('scene5');
        else if (gameState === 'scene5') setGameState('success');
      }
    }, 2500);
  };

  const resetGame = () => {
    setGameState('start');
    setFeedback('');
    setIsAnswering(false);
  };

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
            <img src={texts.start.image} alt="Start" className="game-image" />
            <h2>{texts.start.title}</h2>
            <p>{texts.start.desc}</p>
            <button className="game-btn start-btn" onClick={() => setGameState('scene1')}>
              {texts.start.btn}
            </button>
          </motion.div>
        )}

        {gameState.startsWith('scene') && (
          <motion.div
            key={gameState}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="game-card scene-screen"
          >
            <div className="scene-header">
              <img src={texts[gameState].image} alt="Scene" className="game-image scene-img" />
              <span className="scene-badge">{texts[gameState].title}</span>
            </div>
            <p className="scene-desc">{texts[gameState].desc}</p>

            <div className="options-grid">
              {texts[gameState].options.map((opt) => (
                <button
                  key={opt.id}
                  className="option-btn"
                  onClick={() => handleOptionClick(opt)}
                  // ✅ FIX: feedback gösterilirken butonlar disabled
                  disabled={isAnswering}
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
            <img src={texts.success.image} alt="Success" className="game-image" />
            <h2>{texts.success.title}</h2>
            <p>{texts.success.desc}</p>
            <button className="game-btn success-btn" onClick={resetGame}>
              {texts.success.btn}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ScenarioGame;