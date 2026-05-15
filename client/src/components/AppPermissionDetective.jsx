import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const APPS_TR = [
  {
    name: "El Feneri",
    emoji: "🔦",
    desc: "Telefon flaşını yakıp söndüren basit uygulama.",
    permissions: [
      { name: "Kamera", ok: true, reason: "El feneri arka kameranın LED flaşını kullanır, bu izin gereklidir." },
      { name: "Rehber (Kişiler)", ok: false, reason: "El feneri için rehbere erişmek anlamsız! Bu izin kişisel verilerini toplamak için istenebilir." },
      { name: "Konum", ok: false, reason: "El feneri nerede olduğunu neden bilsin? Bu gereksiz ve şüpheli bir istektir." },
      { name: "Mikrofon", ok: false, reason: "El feneri için mikrofonun hiçbir işlevi yok. Bu izni verme." }
    ]
  },
  {
    name: "Hava Durumu",
    emoji: "🌤️",
    desc: "Bulunduğun yere göre hava durumu gösteren uygulama.",
    permissions: [
      { name: "Konum", ok: true, reason: "Hava durumu uygulaması bulunduğun şehri bilmek zorundadır, bu izin mantıklıdır." },
      { name: "İnternet", ok: true, reason: "Güncel hava verilerini indirmek için internet şarttır." },
      { name: "Kamera", ok: false, reason: "Hava durumu uygulamasının kameraya erişmesi gerekmez, bu şüpheli." },
      { name: "Rehber (Kişiler)", ok: false, reason: "Hava durumu uygulamasının arkadaşlarının numarasına ihtiyacı yoktur." }
    ]
  },
  {
    name: "Hesap Makinesi",
    emoji: "🧮",
    desc: "Matematik işlemleri yapan basit hesap makinesi.",
    permissions: [
      { name: "Konum", ok: false, reason: "Hesap makinesi toplama-çıkarma yapar. Konumunla ne işi olabilir? Kesinlikle şüpheli." },
      { name: "Rehber (Kişiler)", ok: false, reason: "Hesap makinesi için arkadaş listesine erişmek tamamen gereksiz ve şüpheli." },
      { name: "Kamera", ok: false, reason: "Basit bir hesap makinesi için kameraya erişim gerekmez." },
      { name: "Mikrofon", ok: false, reason: "Sesli komut olmadıkça hesap makinesi için mikrofon gerekmez. Şüpheli." }
    ]
  },
  {
    name: "Harita / Navigasyon",
    emoji: "🗺️",
    desc: "Seni hedefine yönlendiren GPS uygulaması.",
    permissions: [
      { name: "Konum", ok: true, reason: "Navigasyon uygulaması nerede olduğunu bilmek zorundadır, bu kesinlikle mantıklı." },
      { name: "İnternet", ok: true, reason: "Güncel harita ve trafik verilerini almak için internet şarttır." },
      { name: "Mikrofon", ok: true, reason: "Sesli yol tarifi için mikrofona ihtiyaç duyabilir, mantıklıdır." },
      { name: "Rehber (Kişiler)", ok: false, reason: "Navigasyon uygulamasının arkadaş listene erişmesi gerekmez. Şüpheli." }
    ]
  },
  {
    name: "Fotoğraf Düzenleme",
    emoji: "📸",
    desc: "Fotoğraflarını düzenleyip filtre ekleyebileceğin uygulama.",
    permissions: [
      { name: "Kamera", ok: true, reason: "Doğrudan fotoğraf çekmek için kameraya ihtiyaç duyabilir." },
      { name: "Galeri / Depolama", ok: true, reason: "Fotoğraflarına erişmek ve düzenlenen görüntüyü kaydetmek için gereklidir." },
      { name: "Rehber (Kişiler)", ok: false, reason: "Fotoğraf düzenleme için arkadaş listesine erişmek gereksiz ve şüpheli." },
      { name: "Konum", ok: false, reason: "Fotoğraf düzenleme uygulamasının konumunla işi yoktur. Şüpheli bir istek." }
    ]
  },
  {
    name: "Çevrimiçi Oyun",
    emoji: "🎮",
    desc: "Arkadaşlarınla oynayabileceğin çok oyunculu oyun.",
    permissions: [
      { name: "İnternet", ok: true, reason: "Çevrimiçi oyun için internet bağlantısı zorunludur." },
      { name: "Depolama", ok: true, reason: "Oyun dosyalarını, kaydedilmiş verileri saklamak için depolama gereklidir." },
      { name: "Mikrofon", ok: true, reason: "Oyun içi sesli sohbet için mikrofon mantıklıdır." },
      { name: "Rehber (Kişiler)", ok: false, reason: "Oyunun kişi listenize erişmesi gerekmez. Veri toplamak için istenmiş olabilir." },
      { name: "Konum", ok: false, reason: "Çoğu oyun için konum bilgisi gerekmez. Şüpheli bir istek." }
    ]
  },
  {
    name: "QR Kod Okuyucu",
    emoji: "📷",
    desc: "QR kodları tarayıp içeriğini gösteren uygulama.",
    permissions: [
      { name: "Kamera", ok: true, reason: "QR kodu taramak için kamera zorunludur, mantıklı bir izin." },
      { name: "İnternet", ok: true, reason: "QR kod bir web sitesine yönlendiriyorsa internet gerekir." },
      { name: "Rehber (Kişiler)", ok: false, reason: "QR kod okuyucu için arkadaş listesine erişmek tamamen gereksiz." },
      { name: "Mikrofon", ok: false, reason: "QR kod okumak için sese ihtiyaç yoktur. Bu izni verme." }
    ]
  },
  {
    name: "Müzik Çalar",
    emoji: "🎵",
    desc: "Müzik dinlemeni sağlayan uygulama.",
    permissions: [
      { name: "Depolama / Müzik", ok: true, reason: "Cihazdaki müzik dosyalarına erişmek için depolama izni gereklidir." },
      { name: "İnternet", ok: true, reason: "Çevrimiçi müzik akışı ve şarkı bilgilerini indirmek için internet şarttır." },
      { name: "Mikrofon", ok: true, reason: "'Şarkı tanıma' özelliği için mikrofon gerekebilir, mantıklıdır." },
      { name: "Rehber (Kişiler)", ok: false, reason: "Müzik çalar için kişi listesine erişmek gereksiz ve şüpheli." },
      { name: "Konum", ok: false, reason: "Müzik çaların konumunu bilmesine gerek yok. Şüpheli bir istek." }
    ]
  }
];

const APPS_EN = [
  {
    name: "Flashlight",
    emoji: "🔦",
    desc: "Simple app that turns your phone's flash on and off.",
    permissions: [
      { name: "Camera", ok: true, reason: "The flashlight uses the LED flash of the camera — this permission makes sense." },
      { name: "Contacts", ok: false, reason: "Why does a flashlight need your contacts? This could be data collection." },
      { name: "Location", ok: false, reason: "Why does a flashlight need to know where you are? Suspicious." },
      { name: "Microphone", ok: false, reason: "A flashlight has no use for the microphone. Don't give this permission." }
    ]
  },
  {
    name: "Weather App",
    emoji: "🌤️",
    desc: "Shows weather forecasts based on your location.",
    permissions: [
      { name: "Location", ok: true, reason: "A weather app needs to know your city — this permission makes sense." },
      { name: "Internet", ok: true, reason: "Internet is required to download current weather data." },
      { name: "Camera", ok: false, reason: "A weather app has no reason to access your camera. Suspicious." },
      { name: "Contacts", ok: false, reason: "A weather app doesn't need your friends' phone numbers." }
    ]
  },
  {
    name: "Calculator",
    emoji: "🧮",
    desc: "Simple app for doing math calculations.",
    permissions: [
      { name: "Location", ok: false, reason: "A calculator does math. Why would it need your location? Very suspicious." },
      { name: "Contacts", ok: false, reason: "A calculator has no reason to access your contact list. Suspicious." },
      { name: "Camera", ok: false, reason: "A basic calculator doesn't need camera access." },
      { name: "Microphone", ok: false, reason: "Unless it has voice input, a calculator doesn't need the microphone." }
    ]
  },
  {
    name: "Maps / Navigation",
    emoji: "🗺️",
    desc: "GPS app that guides you to your destination.",
    permissions: [
      { name: "Location", ok: true, reason: "Navigation must know where you are — absolutely necessary." },
      { name: "Internet", ok: true, reason: "Needed to download map and traffic data in real time." },
      { name: "Microphone", ok: true, reason: "May be needed for voice-guided directions — makes sense." },
      { name: "Contacts", ok: false, reason: "Navigation doesn't need access to your contact list. Suspicious." }
    ]
  },
  {
    name: "Photo Editor",
    emoji: "📸",
    desc: "App for editing photos and applying filters.",
    permissions: [
      { name: "Camera", ok: true, reason: "May need camera access to capture photos directly." },
      { name: "Gallery / Storage", ok: true, reason: "Needs access to your photos and to save edited images." },
      { name: "Contacts", ok: false, reason: "A photo editor doesn't need your contact list. Suspicious." },
      { name: "Location", ok: false, reason: "A photo editor has no need for your location. Suspicious request." }
    ]
  },
  {
    name: "Online Game",
    emoji: "🎮",
    desc: "Multiplayer game you can play with friends online.",
    permissions: [
      { name: "Internet", ok: true, reason: "Internet connection is required for an online game." },
      { name: "Storage", ok: true, reason: "Needed to store game files and save data." },
      { name: "Microphone", ok: true, reason: "Needed for in-game voice chat — makes sense." },
      { name: "Contacts", ok: false, reason: "Games don't need your contact list. Could be for data collection." },
      { name: "Location", ok: false, reason: "Most games don't need your location. Suspicious." }
    ]
  },
  {
    name: "QR Code Reader",
    emoji: "📷",
    desc: "App that scans QR codes and shows their content.",
    permissions: [
      { name: "Camera", ok: true, reason: "Camera is required to scan QR codes — obviously necessary." },
      { name: "Internet", ok: true, reason: "Needed if the QR code links to a website." },
      { name: "Contacts", ok: false, reason: "A QR reader has no reason to access your contacts." },
      { name: "Microphone", ok: false, reason: "Reading QR codes doesn't require sound. Don't give this." }
    ]
  },
  {
    name: "Music Player",
    emoji: "🎵",
    desc: "App for listening to music.",
    permissions: [
      { name: "Storage / Music", ok: true, reason: "Needs access to music files on your device." },
      { name: "Internet", ok: true, reason: "Needed for streaming music and downloading song info." },
      { name: "Microphone", ok: true, reason: "May be needed for a 'song recognition' feature — reasonable." },
      { name: "Contacts", ok: false, reason: "A music player doesn't need your contact list. Suspicious." },
      { name: "Location", ok: false, reason: "A music player doesn't need to know where you are. Suspicious." }
    ]
  }
];

export default function AppPermissionDetective({ isTurkish }) {
  const apps = isTurkish ? APPS_TR : APPS_EN;
  const tl = (tr, en) => (isTurkish ? tr : en);

  const [appIndex, setAppIndex] = useState(0);
  const [picks, setPicks] = useState({}); // { permIndex: 'ok'|'suspicious' }
  const [submitted, setSubmitted] = useState(false);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [finished, setFinished] = useState(false);

  const app = apps[appIndex];
  const isLastApp = appIndex === apps.length - 1;
  const allPicked = Object.keys(picks).length === app.permissions.length;

  const handlePick = (permIndex, choice) => {
    if (submitted) return;
    setPicks((prev) => ({ ...prev, [permIndex]: choice }));
  };

  const handleSubmit = () => {
    let correct = 0;
    app.permissions.forEach((perm, i) => {
      const userSaidOk = picks[i] === "ok";
      if (userSaidOk === perm.ok) correct++;
    });
    setTotalCorrect((prev) => prev + correct);
    setTotalQuestions((prev) => prev + app.permissions.length);
    setSubmitted(true);
  };

  const handleNext = () => {
    if (isLastApp) {
      setFinished(true);
    } else {
      setAppIndex((i) => i + 1);
      setPicks({});
      setSubmitted(false);
    }
  };

  const handleRestart = () => {
    setAppIndex(0);
    setPicks({});
    setSubmitted(false);
    setTotalCorrect(0);
    setTotalQuestions(0);
    setFinished(false);
  };

  if (finished) {
    const pct = Math.round((totalCorrect / totalQuestions) * 100);
    return (
      <motion.div
        className="apd-done"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="apd-done-emoji">{pct === 100 ? "🏆" : pct >= 70 ? "🎉" : "📱"}</div>
        <div className="apd-done-title">
          {pct === 100
            ? tl("Mükemmel İzin Dedektifi!", "Perfect Permission Detective!")
            : tl("Aktivite Tamamlandı!", "Activity Complete!")}
        </div>
        <div className="apd-done-score">
          {tl(
            `${totalQuestions} izinden ${totalCorrect} doğru — %${pct}`,
            `${totalCorrect} of ${totalQuestions} correct — ${pct}%`
          )}
        </div>
        <div className="apd-done-msg">
          {pct === 100
            ? tl("Tüm izinleri doğru sınıflandırdın! Gerçek bir gizlilik uzmanısın.", "You classified every permission correctly! You're a true privacy expert.")
            : pct >= 70
            ? tl("Çok iyi! Tekrar dene, mükemmele ulaşırsın.", "Great job! Try again for a perfect score.")
            : tl("Hangi izinlerin şüpheli olduğunu öğrenmek için tekrar dene.", "Try again to learn which permissions are suspicious.")}
        </div>
        <button className="apd-restart-btn" onClick={handleRestart}>
          🔄 {tl("Tekrar Dene", "Try Again")}
        </button>
        <style>{styles}</style>
      </motion.div>
    );
  }

  return (
    <div className="apd-wrap">
      {/* Progress */}
      <div className="apd-progress">
        <span className="apd-progress-label">
          {tl("Uygulama", "App")} {appIndex + 1}/{apps.length}
        </span>
        <div className="apd-bar">
          <div className="apd-bar-fill" style={{ width: `${((appIndex + 1) / apps.length) * 100}%` }} />
        </div>
        <span className="apd-score-badge">📱 {totalCorrect}</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={appIndex}
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -28 }}
          transition={{ duration: 0.22 }}
        >
          {/* App card */}
          <div className="apd-app-card">
            <div className="apd-app-emoji">{app.emoji}</div>
            <div className="apd-app-info">
              <div className="apd-app-name">{app.name}</div>
              <div className="apd-app-desc">{app.desc}</div>
            </div>
          </div>

          {/* Instruction */}
          <div className="apd-instruction">
            {tl(
              "Bu uygulama hangi izinleri istiyor? Her birini sınıflandır:",
              "This app is requesting permissions. Classify each one:"
            )}
          </div>

          {/* Permissions list */}
          <div className="apd-perms-list">
            {app.permissions.map((perm, i) => {
              const userPick = picks[i];
              const isRevealed = submitted;
              const userCorrect = submitted && userPick !== undefined && (userPick === "ok") === perm.ok;
              const userWrong = submitted && userPick !== undefined && (userPick === "ok") !== perm.ok;

              return (
                <div
                  key={i}
                  className={`apd-perm-row ${submitted ? (perm.ok ? "apd-perm-ok" : "apd-perm-suspicious") : ""}`}
                >
                  <div className="apd-perm-top">
                    <div className="apd-perm-name">
                      {submitted && (
                        <span className="apd-perm-icon">{perm.ok ? "✅" : "🚫"}</span>
                      )}
                      {perm.name}
                    </div>
                    {!submitted && (
                      <div className="apd-perm-btns">
                        <button
                          className={`apd-perm-btn apd-ok-btn ${userPick === "ok" ? "apd-selected" : ""}`}
                          onClick={() => handlePick(i, "ok")}
                        >
                          ✅ {tl("Mantıklı", "Makes Sense")}
                        </button>
                        <button
                          className={`apd-perm-btn apd-sus-btn ${userPick === "suspicious" ? "apd-selected-sus" : ""}`}
                          onClick={() => handlePick(i, "suspicious")}
                        >
                          🚫 {tl("Şüpheli", "Suspicious")}
                        </button>
                      </div>
                    )}
                    {submitted && (
                      <span className={`apd-result-badge ${userCorrect ? "apd-result-right" : "apd-result-wrong"}`}>
                        {userCorrect ? tl("Doğru ✓", "Correct ✓") : tl("Yanlış ✗", "Wrong ✗")}
                      </span>
                    )}
                  </div>
                  {submitted && (
                    <motion.div
                      className="apd-perm-reason"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.2, delay: i * 0.06 }}
                    >
                      {perm.reason}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Submit / Next */}
          {!submitted ? (
            <button
              className="apd-submit-btn"
              onClick={handleSubmit}
              disabled={!allPicked}
            >
              {tl("Cevapları Kontrol Et →", "Check Answers →")}
            </button>
          ) : (
            <button className="apd-next-btn" onClick={handleNext}>
              {isLastApp
                ? tl("✅ Aktiviteyi Bitir", "✅ Finish Activity")
                : tl("Sonraki Uygulama →", "Next App →")}
            </button>
          )}
        </motion.div>
      </AnimatePresence>

      <style>{styles}</style>
    </div>
  );
}

const styles = `
.apd-wrap {
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
}

/* PROGRESS */
.apd-progress {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}
.apd-progress-label {
  font-size: 0.78rem;
  font-weight: 700;
  color: #7c3aed;
  white-space: nowrap;
}
.apd-bar {
  flex: 1;
  height: 5px;
  background: #ede9fe;
  border-radius: 999px;
  overflow: hidden;
}
.apd-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #7c3aed, #6366f1);
  border-radius: 999px;
  transition: width 0.4s ease;
}
.apd-score-badge {
  font-size: 0.78rem;
  font-weight: 800;
  color: #5b21b6;
  background: #ede9fe;
  padding: 2px 8px;
  border-radius: 999px;
  white-space: nowrap;
}

/* APP CARD */
.apd-app-card {
  display: flex;
  align-items: center;
  gap: 14px;
  background: linear-gradient(135deg, #f5f3ff, #ede9fe);
  border: 1.5px solid rgba(124, 58, 237, 0.2);
  border-radius: 16px;
  padding: 14px 16px;
  margin-bottom: 10px;
  box-shadow: 0 4px 16px rgba(124, 58, 237, 0.1);
}
.apd-app-emoji {
  font-size: 2.4rem;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 6px rgba(124,58,237,0.2));
}
.apd-app-info {
  flex: 1;
}
.apd-app-name {
  font-size: 1.1rem;
  font-weight: 900;
  color: #3b0764;
  margin-bottom: 3px;
}
.apd-app-desc {
  font-size: 0.83rem;
  font-weight: 600;
  color: #6b21a8;
  line-height: 1.4;
}

/* INSTRUCTION */
.apd-instruction {
  font-size: 0.87rem;
  font-weight: 700;
  color: #374151;
  margin-bottom: 10px;
  padding: 7px 12px;
  background: rgba(124, 58, 237, 0.06);
  border-radius: 8px;
  border-left: 3px solid #7c3aed;
}

/* PERMISSIONS */
.apd-perms-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
}
.apd-perm-row {
  border-radius: 12px;
  border: 1.5px solid rgba(124,58,237,0.15);
  background: #ffffff;
  padding: 10px 12px;
  transition: border-color 0.2s;
}
.apd-perm-ok {
  border-color: rgba(16, 185, 129, 0.35);
  background: linear-gradient(135deg, #f0fdf4, #ffffff);
}
.apd-perm-suspicious {
  border-color: rgba(239, 68, 68, 0.35);
  background: linear-gradient(135deg, #fff1f2, #ffffff);
}
.apd-perm-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  flex-wrap: wrap;
}
.apd-perm-name {
  font-size: 0.9rem;
  font-weight: 800;
  color: #1e1b4b;
  display: flex;
  align-items: center;
  gap: 6px;
}
.apd-perm-icon {
  font-size: 1rem;
}
.apd-perm-btns {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.apd-perm-btn {
  padding: 5px 10px;
  border-radius: 8px;
  border: 1.5px solid transparent;
  font-size: 0.78rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s ease;
}
.apd-ok-btn {
  background: #f0fdf4;
  border-color: rgba(16, 185, 129, 0.25);
  color: #065f46;
}
.apd-ok-btn:hover, .apd-ok-btn.apd-selected {
  background: #d1fae5;
  border-color: #10b981;
}
.apd-sus-btn {
  background: #fff1f2;
  border-color: rgba(239, 68, 68, 0.25);
  color: #7f1d1d;
}
.apd-sus-btn:hover, .apd-sus-btn.apd-selected-sus {
  background: #fee2e2;
  border-color: #ef4444;
}
.apd-result-badge {
  font-size: 0.78rem;
  font-weight: 800;
  padding: 3px 9px;
  border-radius: 999px;
  white-space: nowrap;
}
.apd-result-right {
  background: #d1fae5;
  color: #065f46;
}
.apd-result-wrong {
  background: #fee2e2;
  color: #7f1d1d;
}
.apd-perm-reason {
  font-size: 0.8rem;
  font-weight: 600;
  color: #374151;
  margin-top: 7px;
  padding: 6px 8px;
  background: rgba(255,255,255,0.7);
  border-radius: 7px;
  line-height: 1.45;
  overflow: hidden;
}

/* BUTTONS */
.apd-submit-btn {
  display: block;
  width: 100%;
  padding: 11px 16px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, #7c3aed, #6366f1);
  color: white;
  font-weight: 800;
  font-size: 0.93rem;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(124, 58, 237, 0.28);
  transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s;
}
.apd-submit-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 7px 18px rgba(124, 58, 237, 0.35);
}
.apd-submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.apd-next-btn {
  display: block;
  width: 100%;
  padding: 11px 16px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  color: white;
  font-weight: 800;
  font-size: 0.93rem;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(59, 130, 246, 0.28);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.apd-next-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 7px 18px rgba(59, 130, 246, 0.35);
}

/* DONE SCREEN */
.apd-done {
  background: linear-gradient(160deg, #f5f3ff, #ede9fe);
  border: 2px solid rgba(124, 58, 237, 0.2);
  border-radius: 18px;
  padding: 28px 20px;
  text-align: center;
  box-shadow: 0 12px 40px rgba(124, 58, 237, 0.1);
  max-width: 680px;
  margin: 0 auto;
}
.apd-done-emoji {
  font-size: 2.8rem;
  margin-bottom: 8px;
}
.apd-done-title {
  font-size: 1.2rem;
  font-weight: 900;
  color: #3b0764;
  margin-bottom: 8px;
}
.apd-done-score {
  font-size: 0.97rem;
  font-weight: 700;
  color: #5b21b6;
  background: #ede9fe;
  display: inline-block;
  padding: 5px 16px;
  border-radius: 999px;
  margin-bottom: 8px;
}
.apd-done-msg {
  font-size: 0.9rem;
  color: #475569;
  margin-bottom: 18px;
  line-height: 1.5;
}
.apd-restart-btn {
  padding: 10px 28px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, #7c3aed, #6366f1);
  color: white;
  font-weight: 800;
  font-size: 0.95rem;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(124, 58, 237, 0.28);
  transition: transform 0.15s ease;
}
.apd-restart-btn:hover {
  transform: translateY(-2px);
}
`;
