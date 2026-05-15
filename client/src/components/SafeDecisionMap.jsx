import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STEPS_TR = [
  {
    time: "☀️ Sabah 08:00",
    topic: "Halka Açık Wi-Fi",
    scenario: "Okula giderken internete bağlanmak istiyorsun. Kafedeki şifresiz 'FreeWiFi' ağına mı bağlanırsın, yoksa telefon veritabanını mı kullanırsın?",
    icon: "📶",
    choices: [
      {
        label: "Kafenin şifresiz Wi-Fi'ına bağlanırım",
        safe: false,
        penalty: 20,
        consequence: "Açık Wi-Fi ağlarında verilerini gören saldırganlar olabilir! Bankacılık, şifre gibi bilgiler çalınabilir.",
        tip: "Halka açık ve şifresiz Wi-Fi'da hassas işlemler asla yapma."
      },
      {
        label: "Mobil veritabanımı kullanırım",
        safe: true,
        penalty: 0,
        consequence: "Harika seçim! Kendi mobil bağlantın çok daha güvenli. Verilerini korudun.",
        tip: "Güvenilmediğin ağlar yerine her zaman kendi bağlantını kullan."
      }
    ]
  },
  {
    time: "📚 Sabah 10:00",
    topic: "Phishing E-postası",
    scenario: "Okul bilgisayarında gelen kutunu kontrol ediyorsun. 'TEBRİKLER! 10.000 V-Bucks kazandın! Hesabını bağlamak için TIKLA!' yazan bir e-posta var.",
    icon: "📧",
    choices: [
      {
        label: "Tıklarım, V-Bucks istiyorum!",
        safe: false,
        penalty: 25,
        consequence: "Phishing tuzağına düştün! Hesabın çalındı ve cihazına zararlı yazılım bulaşmış olabilir.",
        tip: "Oyun V-Bucks'ı asla e-posta üzerinden vermez. Bu klasik phishing tuzağı."
      },
      {
        label: "Silerim ve öğretmene söylerim",
        safe: true,
        penalty: 0,
        consequence: "Çok zekice! Phishing e-postasını fark ettin ve sildin. Üstelik başkalarını da uyardın.",
        tip: "Şüpheli e-postalar bir yetişkine ya da IT ekibine bildirilmelidir."
      }
    ]
  },
  {
    time: "🎮 Öğle 12:00",
    topic: "Uygulama İndirme",
    scenario: "Oyun oynamak istiyorsun. Oyun resmi mağazada 30 TL, ama bir sitede 'Tam Sürüm Ücretsiz APK İndir!' yazıyor.",
    icon: "📱",
    choices: [
      {
        label: "Üçüncü parti siteden bedava indiririm",
        safe: false,
        penalty: 20,
        consequence: "Cihazına zararlı yazılım bulaştı! Trojan virüsü arka planda çalışarak verilerini çalıyor.",
        tip: "APK dosyaları güvenlik denetiminden geçmez. Her zaman resmi mağazaları kullan."
      },
      {
        label: "Resmi mağazadan (Play Store) indiririm",
        safe: true,
        penalty: 0,
        consequence: "Akıllı seçim! Resmi mağazalar uygulamaları güvenlik açısından denetler.",
        tip: "Bedava görünen şeyler çoğu zaman gizli bir bedeli olan şeylerdir."
      }
    ]
  },
  {
    time: "🔔 Öğle 13:00",
    topic: "Uygulama İzinleri",
    scenario: "İndirdiğin oyun ilk açılışta şunu istiyor: 'Rehberinize, Konumunuza, Kameranıza ve Mikrofonunuza erişmek istiyoruz.' Ne yaparsın?",
    icon: "🔐",
    choices: [
      {
        label: "Hepsine izin veririm, hızlı geçeyim",
        safe: false,
        penalty: 15,
        consequence: "Bu oyunun senin rehber listene ve konumuna erişimi var! Verilerini topluyor olabilir.",
        tip: "Bir oyunun rehbere veya konuma ihtiyacı yoktur. Gereksiz izinleri asla verme."
      },
      {
        label: "Sadece oyun için gerekli olanlara izin veririm",
        safe: true,
        penalty: 0,
        consequence: "Harika! Gereksiz izinleri reddederek gizliliğini korudun.",
        tip: "Her uygulamanın neden o izni istediğini sorgula."
      }
    ]
  },
  {
    time: "👥 Öğleden Sonra 15:00",
    topic: "Şifre Güvenliği",
    scenario: "Yakın arkadaşın: 'Hesabını biraz kullanabilir miyim? Şifreni yazar mısın?' diyor.",
    icon: "🔑",
    choices: [
      {
        label: "Yazarım, o güvenilir biri",
        safe: false,
        penalty: 20,
        consequence: "Şifreni paylaştın! Arkadaşın iyi niyetli olsa bile, şifren başkalarına geçebilir veya cihazında kayıtlı kalabilir.",
        tip: "Şifre ASLA paylaşılmaz — en yakın arkadaşınla bile."
      },
      {
        label: "Hayır derim, şifremi kimseyle paylaşmam",
        safe: true,
        penalty: 0,
        consequence: "Kesinlikle doğru! Şifren sadece senin bilmen gereken gizli bilgidir.",
        tip: "Şifreni kimseyle paylaşma — banka, okul veya arkadaş fark etmez."
      }
    ]
  },
  {
    time: "📲 Akşam 17:00",
    topic: "Sahte Haber",
    scenario: "WhatsApp'ta 'ACİL PAYLAŞ! Yarın tüm okullar tatil! Haberi herkese ilet!' yazan bir mesaj geldi.",
    icon: "📰",
    choices: [
      {
        label: "Hemen tüm arkadaşlarıma iletirim",
        safe: false,
        penalty: 15,
        consequence: "Sahte haberi yaydın! Arkadaşların yanlış bilgilendi, gereksiz panik yaşandı.",
        tip: "Paylaşmadan önce her zaman MEB'in resmi sitesini veya e-okul'u kontrol et."
      },
      {
        label: "Önce resmi kaynaktan doğrularım",
        safe: true,
        penalty: 0,
        consequence: "Çok akıllıca! Resmi kaynağı kontrol ettiniz ve haberin yanlış olduğunu gördünüz.",
        tip: "Sosyal sorumluluk: Doğrulamadan paylaşma."
      }
    ]
  },
  {
    time: "🔒 Akşam 19:00",
    topic: "Ekran Kilidi",
    scenario: "Tabletine ekran kilidi koymak istiyorsun. Kolayca hatırlamak için '1234' ya da '0000' mi kullanırsın?",
    icon: "📲",
    choices: [
      {
        label: "'1234' kullanırım, kolay hatırlarım",
        safe: false,
        penalty: 10,
        consequence: "1234 ve 0000 en çok denenen ilk şifrelerdir! Cihazın kolayca açılabilir.",
        tip: "Doğum tarihi veya '1234' gibi basit şifreler sadece dakikalar içinde kırılabilir."
      },
      {
        label: "Karmaşık bir desen veya PIN seçerim",
        safe: true,
        penalty: 0,
        consequence: "Mükemmel! Güçlü bir kilit cihazını ve içindeki tüm bilgileri korur.",
        tip: "İyi bir PIN en az 6 haneli ve tahmin edilmesi zor olmalıdır."
      }
    ]
  },
  {
    time: "⚙️ Gece 21:00",
    topic: "Güncelleme",
    scenario: "Telefona 'Yeni güncelleme mevcut' bildirimi geldi. Ama oyun oynuyorsun, sonraya bırakırsın.",
    icon: "🔄",
    choices: [
      {
        label: "Sonra yaparım, şimdi oyunumu bozmayayım",
        safe: false,
        penalty: 10,
        consequence: "Güncel olmayan yazılımlar güvenlik açığı içerir. Hackerlar bu açıkları hedef alır!",
        tip: "Güncellemeler güvenlik yamalarıdır — erteleyen herkes risk altındadır."
      },
      {
        label: "Şimdi güncellerim, güvenlik önemli",
        safe: true,
        penalty: 0,
        consequence: "Harika! Güncelleme, güvenlik açıklarını kapatarak seni korudu.",
        tip: "Güncelleme bildirimleri geldiğinde mümkün olan en kısa sürede yap."
      }
    ]
  }
];

const STEPS_EN = [
  {
    time: "☀️ 8:00 AM",
    topic: "Public Wi-Fi",
    scenario: "You want to get online on the way to school. Do you connect to the café's unsecured 'FreeWiFi' network, or use your mobile data?",
    icon: "📶",
    choices: [
      {
        label: "Connect to the café's free Wi-Fi",
        safe: false,
        penalty: 20,
        consequence: "Attackers on open Wi-Fi networks can intercept your data! Passwords and sensitive info can be stolen.",
        tip: "Never do sensitive things (banking, passwords) on open public Wi-Fi."
      },
      {
        label: "Use my mobile data",
        safe: true,
        penalty: 0,
        consequence: "Great choice! Your mobile connection is much safer. Your data is protected.",
        tip: "Always use your own connection instead of untrusted public networks."
      }
    ]
  },
  {
    time: "📚 10:00 AM",
    topic: "Phishing Email",
    scenario: "You check your inbox on a school computer. There's an email saying: 'CONGRATULATIONS! You've won 10,000 V-Bucks! CLICK to connect your account!'",
    icon: "📧",
    choices: [
      {
        label: "I'll click — I want V-Bucks!",
        safe: false,
        penalty: 25,
        consequence: "You fell for a phishing trap! Your account could be stolen and malware may have infected the device.",
        tip: "Games never give V-Bucks via email. This is a classic phishing trap."
      },
      {
        label: "I'll delete it and tell my teacher",
        safe: true,
        penalty: 0,
        consequence: "Smart! You recognized the phishing email and deleted it. You also warned others.",
        tip: "Report suspicious emails to a trusted adult or IT team."
      }
    ]
  },
  {
    time: "🎮 Noon 12:00",
    topic: "App Download",
    scenario: "You want to play a game. It costs $5 on the official store, but a website says 'Download Full Version Free APK!'",
    icon: "📱",
    choices: [
      {
        label: "Download it free from the third-party site",
        safe: false,
        penalty: 20,
        consequence: "Your device got infected! A Trojan virus is running in the background stealing your data.",
        tip: "APK files bypass security checks. Always use official app stores."
      },
      {
        label: "Download it from the official store (Play Store)",
        safe: true,
        penalty: 0,
        consequence: "Smart choice! Official stores review apps for security before publishing.",
        tip: "Things that appear free often come with a hidden cost."
      }
    ]
  },
  {
    time: "🔔 1:00 PM",
    topic: "App Permissions",
    scenario: "The game you downloaded says on first launch: 'We'd like access to your Contacts, Location, Camera, and Microphone.'",
    icon: "🔐",
    choices: [
      {
        label: "Allow everything — let's get past this quickly",
        safe: false,
        penalty: 15,
        consequence: "This game now has access to your contacts and location! It could be collecting your data.",
        tip: "A game doesn't need your contacts or location. Never grant unnecessary permissions."
      },
      {
        label: "Allow only what the game actually needs",
        safe: true,
        penalty: 0,
        consequence: "Excellent! By denying unnecessary permissions, you protected your privacy.",
        tip: "Always ask yourself: why does this app need this permission?"
      }
    ]
  },
  {
    time: "👥 3:00 PM",
    topic: "Password Security",
    scenario: "Your close friend says: 'Can I use your account for a bit? What's your password?'",
    icon: "🔑",
    choices: [
      {
        label: "I'll tell them — they're trustworthy",
        safe: false,
        penalty: 20,
        consequence: "You shared your password! Even if your friend has good intentions, your password may end up in the wrong hands or stay saved on their device.",
        tip: "Passwords are NEVER shared — not even with your closest friend."
      },
      {
        label: "No — I don't share my password with anyone",
        safe: true,
        penalty: 0,
        consequence: "Absolutely correct! Your password is secret information only you should know.",
        tip: "Never share your password — not with a bank, school, or friend."
      }
    ]
  },
  {
    time: "📲 5:00 PM",
    topic: "Fake News",
    scenario: "You get a WhatsApp message: 'URGENT SHARE! School is cancelled tomorrow! Forward to everyone!'",
    icon: "📰",
    choices: [
      {
        label: "I'll forward it to all my friends immediately",
        safe: false,
        penalty: 15,
        consequence: "You spread fake news! Your friends got wrong information and unnecessary panic was created.",
        tip: "Always check the Ministry of Education's official site before sharing school news."
      },
      {
        label: "I'll verify it from an official source first",
        safe: true,
        penalty: 0,
        consequence: "Very smart! You checked the official source and saw the news was false.",
        tip: "Social responsibility: don't share before verifying."
      }
    ]
  },
  {
    time: "🔒 7:00 PM",
    topic: "Screen Lock",
    scenario: "You want to set a screen lock on your tablet. Should you use '1234' or '0000' so you can easily remember it?",
    icon: "📲",
    choices: [
      {
        label: "I'll use '1234' — easy to remember",
        safe: false,
        penalty: 10,
        consequence: "1234 and 0000 are the first codes attackers try! Your device can easily be unlocked.",
        tip: "Simple PINs like '1234' or your birth date can be cracked in minutes."
      },
      {
        label: "I'll choose a complex pattern or PIN",
        safe: true,
        penalty: 0,
        consequence: "Perfect! A strong lock protects your device and all the information inside it.",
        tip: "A good PIN should be at least 6 digits and hard to guess."
      }
    ]
  },
  {
    time: "⚙️ 9:00 PM",
    topic: "Software Update",
    scenario: "Your phone just notified you: 'New update available.' But you're in the middle of a game — you'll do it later.",
    icon: "🔄",
    choices: [
      {
        label: "I'll do it later — don't want to interrupt my game",
        safe: false,
        penalty: 10,
        consequence: "Outdated software contains security vulnerabilities. Hackers target these gaps!",
        tip: "Updates are security patches — everyone who delays is at risk."
      },
      {
        label: "I'll update now — security matters",
        safe: true,
        penalty: 0,
        consequence: "Excellent! The update closed security vulnerabilities and protected you.",
        tip: "When update notifications appear, install them as soon as possible."
      }
    ]
  }
];

const MAX_LOSS = STEPS_TR.reduce((sum, s) => sum + s.choices[0].penalty, 0);

function ScoreRing({ score }) {
  const pct = Math.max(0, Math.min(100, score));
  const r = 42;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  const color = pct >= 80 ? "#10b981" : pct >= 60 ? "#f59e0b" : pct >= 40 ? "#f97316" : "#ef4444";
  return (
    <svg width="110" height="110" viewBox="0 0 110 110" style={{ display: "block", margin: "0 auto" }}>
      <circle cx="55" cy="55" r={r} fill="none" stroke="#e2e8f0" strokeWidth="10" />
      <circle
        cx="55" cy="55" r={r} fill="none"
        stroke={color} strokeWidth="10"
        strokeDasharray={`${dash} ${circ - dash}`}
        strokeDashoffset={circ / 4}
        strokeLinecap="round"
        style={{ transition: "stroke-dasharray 0.8s ease" }}
      />
      <text x="55" y="60" textAnchor="middle" fontSize="22" fontWeight="900" fill={color}>{score}</text>
    </svg>
  );
}

export default function SafeDecisionMap({ isTurkish }) {
  const steps = isTurkish ? STEPS_TR : STEPS_EN;
  const tl = (tr, en) => (isTurkish ? tr : en);

  const [stepIndex, setStepIndex] = useState(0);
  const [pickedChoice, setPickedChoice] = useState(null); // 0 | 1
  const [score, setScore] = useState(100);
  const [choices, setChoices] = useState([]); // array of choice indices
  const [showConsequence, setShowConsequence] = useState(false);
  const [finished, setFinished] = useState(false);

  const step = steps[stepIndex];
  const isLast = stepIndex === steps.length - 1;

  const handlePick = (idx) => {
    if (pickedChoice !== null) return;
    setPickedChoice(idx);
    setShowConsequence(true);
    const ch = step.choices[idx];
    if (!ch.safe) setScore((s) => Math.max(0, s - ch.penalty));
    setChoices((prev) => [...prev, idx]);
  };

  const handleNext = () => {
    if (isLast) {
      setFinished(true);
    } else {
      setStepIndex((i) => i + 1);
      setPickedChoice(null);
      setShowConsequence(false);
    }
  };

  const handleRestart = () => {
    setStepIndex(0);
    setPickedChoice(null);
    setShowConsequence(false);
    setScore(100);
    setChoices([]);
    setFinished(false);
  };

  const getTier = (s) => {
    if (s >= 90) return { label: tl("🏆 Dijital Güvenlik Uzmanı!", "🏆 Digital Security Expert!"), color: "#059669" };
    if (s >= 70) return { label: tl("🎉 Güvenli Kullanıcı", "🎉 Safe User"), color: "#0284c7" };
    if (s >= 50) return { label: tl("📚 Gelişiyor", "📚 Getting Better"), color: "#d97706" };
    return { label: tl("🛡️ Tekrar Dene", "🛡️ Try Again"), color: "#dc2626" };
  };

  if (finished) {
    const tier = getTier(score);
    const correctCount = choices.filter((c, i) => steps[i].choices[c].safe).length;
    return (
      <motion.div className="sdm-done" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
        <div className="sdm-done-title">
          {tl("Dijital Günün Tamamlandı!", "Your Online Day Is Complete!")}
        </div>
        <div className="sdm-ring-wrap">
          <ScoreRing score={score} />
          <div className="sdm-ring-label" style={{ color: tier.color }}>{tl("Puanın", "Your Score")}</div>
        </div>
        <div className="sdm-tier" style={{ color: tier.color }}>{tier.label}</div>
        <div className="sdm-done-stats">
          <span className="sdm-stat-pill sdm-stat-ok">
            ✅ {correctCount} {tl("doğru karar", "correct decision")}
          </span>
          <span className="sdm-stat-pill sdm-stat-bad">
            ❌ {steps.length - correctCount} {tl("hatalı karar", "wrong decision")}
          </span>
        </div>
        {score < 100 && (
          <div className="sdm-done-msg">
            {tl(
              "Hatalı kararların bir sonraki seferinde daha dikkatli olmana yardımcı olacak. Tekrar dene!",
              "Your wrong decisions will help you be more careful next time. Try again!"
            )}
          </div>
        )}
        {score === 100 && (
          <div className="sdm-done-msg">
            {tl(
              "Tüm kararları doğru aldın! Dijital dünyada güvendesin.",
              "You made all the right decisions! You're safe in the digital world."
            )}
          </div>
        )}
        <button className="sdm-restart-btn" onClick={handleRestart}>
          🔄 {tl("Tekrar Oyna", "Play Again")}
        </button>
        <style>{styles}</style>
      </motion.div>
    );
  }

  const chosen = pickedChoice !== null ? step.choices[pickedChoice] : null;

  return (
    <div className="sdm-wrap">
      {/* Header */}
      <div className="sdm-header">
        <div className="sdm-step-label">
          {tl("Karar", "Decision")} {stepIndex + 1}/{steps.length}
        </div>
        <div className="sdm-bar">
          <div className="sdm-bar-fill" style={{ width: `${((stepIndex) / steps.length) * 100}%` }} />
        </div>
        <div className="sdm-score-pill">{tl("Puan:", "Score:")} <strong>{score}</strong></div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={stepIndex}
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -28 }}
          transition={{ duration: 0.22 }}
        >
          {/* Step card */}
          <div className="sdm-step-card">
            <div className="sdm-step-meta">
              <span className="sdm-time-badge">{step.time}</span>
              <span className="sdm-topic-badge">{step.icon} {step.topic}</span>
            </div>
            <div className="sdm-scenario">{step.scenario}</div>
          </div>

          {/* Choices */}
          {pickedChoice === null && (
            <div className="sdm-choices">
              {step.choices.map((ch, idx) => (
                <motion.button
                  key={idx}
                  className="sdm-choice-btn"
                  onClick={() => handlePick(idx)}
                  whileHover={{ scale: 1.015, translateY: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="sdm-choice-letter">{String.fromCharCode(65 + idx)}</span>
                  <span className="sdm-choice-text">{ch.label}</span>
                </motion.button>
              ))}
            </div>
          )}

          {/* Selected + consequence */}
          {pickedChoice !== null && chosen && (
            <div className="sdm-choices">
              {step.choices.map((ch, idx) => (
                <div
                  key={idx}
                  className={`sdm-choice-result ${
                    idx === pickedChoice
                      ? ch.safe ? "sdm-result-safe" : "sdm-result-danger"
                      : "sdm-result-dim"
                  }`}
                >
                  <span className="sdm-choice-letter">
                    {idx === pickedChoice ? (ch.safe ? "✅" : "❌") : String.fromCharCode(65 + idx)}
                  </span>
                  <span className="sdm-choice-text">{ch.label}</span>
                  {idx === pickedChoice && !ch.safe && (
                    <span className="sdm-penalty-badge">-{ch.penalty} {tl("puan", "pts")}</span>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Consequence panel */}
          <AnimatePresence>
            {showConsequence && chosen && (
              <motion.div
                className={`sdm-consequence ${chosen.safe ? "sdm-cons-safe" : "sdm-cons-danger"}`}
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                transition={{ duration: 0.3 }}
              >
                <div className="sdm-cons-header">
                  <span className="sdm-cons-emoji">{chosen.safe ? "🛡️" : "⚠️"}</span>
                  <span className="sdm-cons-title">
                    {chosen.safe ? tl("Güvenli Seçim!", "Safe Choice!") : tl("Dikkat!", "Watch Out!")}
                  </span>
                </div>
                <div className="sdm-cons-text">{chosen.consequence}</div>
                <div className="sdm-cons-tip">
                  <span className="sdm-tip-icon">💡</span>
                  <span>{chosen.tip}</span>
                </div>
                <button className="sdm-next-btn" onClick={handleNext}>
                  {isLast
                    ? tl("📊 Sonucu Gör", "📊 See Results")
                    : tl("Sonraki Karar →", "Next Decision →")}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      <style>{styles}</style>
    </div>
  );
}

const styles = `
.sdm-wrap {
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
}
/* HEADER */
.sdm-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}
.sdm-step-label {
  font-size: 0.78rem;
  font-weight: 700;
  color: #1d4ed8;
  white-space: nowrap;
}
.sdm-bar {
  flex: 1;
  min-width: 60px;
  height: 5px;
  background: #dbeafe;
  border-radius: 999px;
  overflow: hidden;
}
.sdm-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #6366f1);
  border-radius: 999px;
  transition: width 0.4s ease;
}
.sdm-score-pill {
  font-size: 0.82rem;
  font-weight: 700;
  color: #1e1b4b;
  background: #e0e7ff;
  padding: 3px 10px;
  border-radius: 999px;
  white-space: nowrap;
}
/* STEP CARD */
.sdm-step-card {
  background: linear-gradient(160deg, #f8faff 0%, #ffffff 60%, #fefce8 100%);
  border: 1.5px solid rgba(59, 130, 246, 0.18);
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 6px 24px rgba(59, 130, 246, 0.08);
  margin-bottom: 12px;
}
.sdm-step-meta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.sdm-time-badge {
  font-size: 0.75rem;
  font-weight: 800;
  background: linear-gradient(135deg, #dbeafe, #ede9fe);
  color: #1e1b4b;
  padding: 3px 10px;
  border-radius: 999px;
  border: 1px solid rgba(99,102,241,0.2);
}
.sdm-topic-badge {
  font-size: 0.75rem;
  font-weight: 800;
  background: linear-gradient(135deg, #fef3c7, #fed7aa);
  color: #78350f;
  padding: 3px 10px;
  border-radius: 999px;
  border: 1px solid #fde68a;
}
.sdm-scenario {
  font-size: 0.97rem;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.5;
}
/* CHOICES */
.sdm-choices {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 4px;
}
.sdm-choice-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-radius: 12px;
  border: 2px solid rgba(59, 130, 246, 0.2);
  background: white;
  cursor: pointer;
  text-align: left;
  font-size: 0.93rem;
  font-weight: 700;
  color: #1e293b;
  transition: all 0.18s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.sdm-choice-btn:hover {
  background: linear-gradient(135deg, #eff6ff, #f5f3ff);
  border-color: rgba(99,102,241,0.4);
  box-shadow: 0 4px 14px rgba(99,102,241,0.12);
}
.sdm-choice-letter {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: linear-gradient(135deg, #dbeafe, #ede9fe);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 900;
  color: #1e1b4b;
}
.sdm-choice-text { flex: 1; }
/* RESULTS */
.sdm-choice-result {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-radius: 12px;
  border: 2px solid transparent;
  font-size: 0.93rem;
  font-weight: 700;
  position: relative;
}
.sdm-result-safe {
  background: linear-gradient(135deg, #d1fae5, #ecfdf5);
  border-color: #10b981;
  color: #064e3b;
}
.sdm-result-danger {
  background: linear-gradient(135deg, #fee2e2, #fff1f2);
  border-color: #ef4444;
  color: #7f1d1d;
}
.sdm-result-dim {
  background: #f8fafc;
  border-color: #e2e8f0;
  color: #94a3b8;
  opacity: 0.6;
}
.sdm-penalty-badge {
  margin-left: auto;
  font-size: 0.78rem;
  font-weight: 900;
  background: #fee2e2;
  color: #b91c1c;
  padding: 2px 8px;
  border-radius: 999px;
  flex-shrink: 0;
}
/* CONSEQUENCE */
.sdm-consequence {
  border-radius: 14px;
  padding: 14px 16px;
  overflow: hidden;
}
.sdm-cons-safe {
  background: linear-gradient(135deg, #d1fae5, #ecfdf5);
  border: 1.5px solid #6ee7b7;
}
.sdm-cons-danger {
  background: linear-gradient(135deg, #fee2e2, #fff1f2);
  border: 1.5px solid #fca5a5;
}
.sdm-cons-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}
.sdm-cons-emoji { font-size: 1.3rem; }
.sdm-cons-title {
  font-size: 1rem;
  font-weight: 900;
  color: #0f172a;
}
.sdm-cons-text {
  font-size: 0.87rem;
  font-weight: 600;
  color: #1e293b;
  line-height: 1.5;
  margin-bottom: 10px;
  padding: 6px 10px;
  background: rgba(255,255,255,0.6);
  border-radius: 8px;
}
.sdm-cons-tip {
  display: flex;
  gap: 6px;
  align-items: flex-start;
  font-size: 0.83rem;
  font-weight: 700;
  color: #334155;
  margin-bottom: 12px;
  padding: 6px 10px;
  background: rgba(255,255,255,0.5);
  border-radius: 8px;
  line-height: 1.45;
}
.sdm-tip-icon { flex-shrink: 0; font-size: 1rem; }
.sdm-next-btn {
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
  box-shadow: 0 4px 14px rgba(59, 130, 246, 0.3);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.sdm-next-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 7px 18px rgba(59, 130, 246, 0.38);
}
/* DONE */
.sdm-done {
  background: linear-gradient(160deg, #f8faff, #f0fdf4);
  border: 2px solid rgba(59, 130, 246, 0.2);
  border-radius: 20px;
  padding: 28px 20px;
  text-align: center;
  box-shadow: 0 12px 40px rgba(59, 130, 246, 0.1);
  max-width: 680px;
  margin: 0 auto;
}
.sdm-done-title {
  font-size: 1.2rem;
  font-weight: 900;
  color: #1e1b4b;
  margin-bottom: 16px;
}
.sdm-ring-wrap { margin-bottom: 6px; }
.sdm-ring-label {
  font-size: 0.82rem;
  font-weight: 800;
  margin-bottom: 10px;
}
.sdm-tier {
  font-size: 1.15rem;
  font-weight: 900;
  margin-bottom: 14px;
}
.sdm-done-stats {
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 12px;
}
.sdm-stat-pill {
  font-size: 0.83rem;
  font-weight: 800;
  padding: 4px 12px;
  border-radius: 999px;
}
.sdm-stat-ok { background: #d1fae5; color: #065f46; }
.sdm-stat-bad { background: #fee2e2; color: #7f1d1d; }
.sdm-done-msg {
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.5;
  margin-bottom: 20px;
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
}
.sdm-restart-btn {
  padding: 11px 28px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  color: white;
  font-weight: 800;
  font-size: 0.95rem;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3);
  transition: transform 0.15s ease;
}
.sdm-restart-btn:hover { transform: translateY(-2px); }
`;
