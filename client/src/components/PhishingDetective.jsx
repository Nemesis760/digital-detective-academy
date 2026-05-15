import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SCENARIOS_TR = [
  {
    type: "social",
    from: "🎮 Oyun Reklamı",
    content: "TEBRİKLER! Bugünkü şanslı oyuncusun 🎉 Hesabına 10.000 elmas yüklemek için kullanıcı adını ve ŞİFRENİ gir → bit.ly/elmas-kazan",
    isSafe: false,
    tips: [
      "🚩 Şifre isteyen her reklam tuzaktır — gerçek oyunlar şifreni sormaz",
      "🚩 'bit.ly' gibi kısaltılmış linkler gerçek adresi gizler",
      "🚩 'Hemen al!' ve 'Sınırlı süre!' baskısı klasik dolandırıcılık taktiğidir"
    ],
    explanation: "Bu bir Phishing (kimlik avı) mesajıdır. Şifreni giren hesabını kaybeder."
  },
  {
    type: "email",
    from: "📧 okul@egitim.gov.tr",
    subject: "Sınav Takvimi Güncellendi",
    content: "Sayın öğrenciler, 2. dönem sınav tarihleri e-okul sisteminize yüklenmiştir. Herhangi bir sorunuz için danışman öğretmeninize başvurunuz.",
    isSafe: true,
    tips: [
      "✅ Resmi devlet alan adı (.gov.tr) — güvenilir kaynak",
      "✅ Şifre veya kişisel bilgi istenmiyor",
      "✅ Sıradan ve beklenen bir okul bildirimi"
    ],
    explanation: "Güvenli bir resmi okul bildirimidir."
  },
  {
    type: "sms",
    from: "📱 +90 555 *** **34",
    content: "Sayın müşterimiz, bankanız güvenlik ihlali tespit etti! Hesabınız 24 saat içinde dondurulacak. HEMEN doğrulayın: www.guvnli-banka.net",
    isSafe: false,
    tips: [
      "🚩 Bankalar SMS ile şifre veya kart bilgisi istemez, asla",
      "🚩 'guvnli-banka.net' — yazım hatası olan sahte adres",
      "🚩 '24 saat' tehdidi seni panikletip düşünmeden tıklatmak için"
    ],
    explanation: "Klasik banka phishing SMS'i. Linke asla tıklama, bankana telefon aç."
  },
  {
    type: "social",
    from: "💬 Annen",
    content: "Merhaba canım, akşam yemekte ne istersin? Pizza mı yoksa makarna mı? ❤️",
    isSafe: true,
    tips: [
      "✅ Tanıdığın biri, günlük normal bir konuşma",
      "✅ Hiçbir link veya kişisel bilgi talebi yok",
      "✅ Aciliyet veya baskı hissi yok"
    ],
    explanation: "Güvenli, sıradan bir aile mesajı."
  },
  {
    type: "email",
    from: "📧 security@microsoft-hesap.tk",
    subject: "ACİL: Microsoft Hesabınız Hacklendi!",
    content: "Microsoft güvenlik ekibi: Hesabınıza Rusya'dan giriş yapıldı! Hesabınızı kurtarmak için HEMEN bu linke tıklayın ve bilgilerinizi doğrulayın.",
    isSafe: false,
    tips: [
      "🚩 '@microsoft-hesap.tk' — Microsoft'un resmi adresi değil, .tk sahte bir uzantı",
      "🚩 'Rusya'dan giriş' gibi detaylar gereksiz panik yaratmak için uydurulur",
      "🚩 Microsoft asla e-posta veya SMS ile şifre istemez"
    ],
    explanation: "Microsoft kimliğine bürünen sahte e-posta. Bilgilerini asla girme."
  },
  {
    type: "sms",
    from: "📱 Minecraft",
    content: "Minecraft 1.21.1 güncellemesi hazır! Uygulama mağazasından (App Store / Play Store) güncelleme yapabilirsin. Yeni özellik: Sürüngenser biyomu ve yeni bloklar.",
    isSafe: true,
    tips: [
      "✅ Şifre veya kişisel bilgi istenmiyor",
      "✅ Resmi mağazaya yönlendiriyor, harici linke değil",
      "✅ Gerçekçi bir oyun güncelleme bildirimi"
    ],
    explanation: "Güvenli bir oyun güncelleme bildirimi."
  },
  {
    type: "social",
    from: "📲 TikTok Güvenlik",
    content: "⚠️ TikTok hesabın 3. şahıslarla paylaşıldı! Hesabını kurtarmak için kullanıcı adı ve şifreni gir: tiktok-guvenlik.ru/dogrula",
    isSafe: false,
    tips: [
      "🚩 '.ru' uzantısı — Rusya sunucusu, TikTok'un resmi adresi değil",
      "🚩 Sosyal medya şirketleri şifreni DM ile asla istemez",
      "🚩 Korku ve aciliyet duygusu yaratmak klasik manipülasyon taktiğidir"
    ],
    explanation: "TikTok kimliğine bürünen phishing mesajı. Şifreni asla girme."
  },
  {
    type: "email",
    from: "📧 matematik@okulum.edu.tr",
    subject: "Proje Teslim Tarihi Uzatıldı",
    content: "Merhaba, matematik projelerinizin teslim tarihi Cuma saat 17:00'a kadar uzatılmıştır. Projeyi e-okul sisteminden yükleyebilirsiniz. İyi çalışmalar.",
    isSafe: true,
    tips: [
      "✅ Resmi okul e-posta adresi (.edu.tr)",
      "✅ Kişisel bilgi veya şifre istenmiyor",
      "✅ Normal, beklenen bir akademik bildirim"
    ],
    explanation: "Güvenli bir öğretmen e-postası."
  },
  {
    type: "social",
    from: "💬 Bilinmeyen numara",
    content: "Merhaba! Arkadaşın Emre'den senin çok komik bir fotoğrafını aldım 😂 Görmek ister misin? → klik.bz/foto99",
    isSafe: false,
    tips: [
      "🚩 Tanımadığın biri seni link tıklamaya yönlendiriyor",
      "🚩 'klik.bz' gibi kısaltılmış linkler tehlikeli sitelere götürebilir",
      "🚩 Merak ve sosyal baskı ('arkadaşın söyledi') klasik tuzak yöntemidir"
    ],
    explanation: "Zararlı link tıklatmaya yönelik sosyal mühendislik mesajı."
  },
  {
    type: "social",
    from: "🎮 Fortnite Ödülleri",
    content: "🎁 ÖZEL: Hileci oyuncuları bildiren herkese 13.500 V-Bucks! Hesabını bağlamak için tıkla → fortnite-odul.net/vbucks",
    isSafe: false,
    tips: [
      "🚩 'fortnite-odul.net' — Fortnite'ın resmi adresi Epic Games'tir",
      "🚩 Gerçek oyunlar V-Bucks'ı sosyal medya reklamıyla vermez",
      "🚩 'Hesabını bağla' = şifreni ve hesabını çalmak istiyorlar"
    ],
    explanation: "Fortnite kimliğine bürünen sahte ödül tuzağı."
  }
];

const SCENARIOS_EN = [
  {
    type: "social",
    from: "🎮 Game Advertisement",
    content: "CONGRATULATIONS! You're today's lucky player 🎉 Enter your username and PASSWORD to load 10,000 gems → bit.ly/gems-win",
    isSafe: false,
    tips: [
      "🚩 Any ad asking for your password is a trap — real games never ask for it",
      "🚩 Shortened links like 'bit.ly' hide the real destination",
      "🚩 'Get it now!' and 'Limited time!' pressure is a classic scam tactic"
    ],
    explanation: "This is a Phishing message. Entering your password means losing your account."
  },
  {
    type: "email",
    from: "📧 school@education.gov",
    subject: "Exam Schedule Updated",
    content: "Dear students, the 2nd semester exam dates have been uploaded to the student portal. Please contact your homeroom teacher if you have any questions.",
    isSafe: true,
    tips: [
      "✅ Official government domain — trusted source",
      "✅ No password or personal information requested",
      "✅ Normal, expected school notification"
    ],
    explanation: "A safe official school announcement."
  },
  {
    type: "sms",
    from: "📱 +1 555 ***-**34",
    content: "Dear customer, your bank detected a security breach! Your account will be frozen in 24 hours. VERIFY NOW: www.secure-bankk.net",
    isSafe: false,
    tips: [
      "🚩 Banks never ask for passwords or card info via SMS",
      "🚩 'secure-bankk.net' — misspelled fake address",
      "🚩 '24-hour' threat is designed to panic you into clicking without thinking"
    ],
    explanation: "Classic bank phishing SMS. Never click — call your bank directly."
  },
  {
    type: "social",
    from: "💬 Mom",
    content: "Hi honey, what do you want for dinner tonight? Pizza or pasta? ❤️",
    isSafe: true,
    tips: [
      "✅ Someone you know, normal everyday conversation",
      "✅ No links or requests for personal info",
      "✅ No urgency or pressure"
    ],
    explanation: "Safe, ordinary family message."
  },
  {
    type: "email",
    from: "📧 security@microsoft-account.tk",
    subject: "URGENT: Your Microsoft Account Was Hacked!",
    content: "Microsoft security team: Someone from Russia logged into your account! Click IMMEDIATELY to verify your identity and recover your account.",
    isSafe: false,
    tips: [
      "🚩 '@microsoft-account.tk' — not Microsoft's real domain, .tk is a red flag",
      "🚩 'Russia' details are invented to create panic",
      "🚩 Microsoft never asks for passwords via email or SMS"
    ],
    explanation: "Fake email impersonating Microsoft. Never enter your info."
  },
  {
    type: "sms",
    from: "📱 Minecraft",
    content: "Minecraft 1.21.1 update is ready! Update now from the App Store or Play Store. New features: Creaking biome and new blocks.",
    isSafe: true,
    tips: [
      "✅ No password or personal info requested",
      "✅ Directs to the official app store, not an external link",
      "✅ Realistic game update notification"
    ],
    explanation: "Safe game update notification."
  },
  {
    type: "social",
    from: "📲 TikTok Security",
    content: "⚠️ Your TikTok was shared with third parties! Enter your username and password to recover your account: tiktok-security.ru/verify",
    isSafe: false,
    tips: [
      "🚩 '.ru' extension — Russian server, not TikTok's real address",
      "🚩 Social media companies never ask for your password via DM",
      "🚩 Creating fear and urgency is a classic manipulation tactic"
    ],
    explanation: "Phishing message impersonating TikTok."
  },
  {
    type: "email",
    from: "📧 math@myschool.edu",
    subject: "Project Deadline Extended",
    content: "Hello everyone, the math project deadline has been extended to Friday at 5:00 PM. You can submit your project through the student portal. Good luck!",
    isSafe: true,
    tips: [
      "✅ Official school email address (.edu)",
      "✅ No personal info or password requested",
      "✅ Normal academic notification"
    ],
    explanation: "Safe teacher email."
  },
  {
    type: "social",
    from: "💬 Unknown number",
    content: "Hey! I got a really funny photo of you from your friend Jake 😂 Want to see it? → klik.bz/photo99",
    isSafe: false,
    tips: [
      "🚩 A stranger is directing you to click a link",
      "🚩 Shortened links like 'klik.bz' can lead to dangerous websites",
      "🚩 Using curiosity and social pressure ('your friend said') is a classic trap"
    ],
    explanation: "Social engineering message designed to make you click a harmful link."
  },
  {
    type: "social",
    from: "🎮 Fortnite Rewards",
    content: "🎁 SPECIAL: Report cheaters and get 13,500 V-Bucks FREE! Connect your account here → fortnite-rewards.net/vbucks",
    isSafe: false,
    tips: [
      "🚩 'fortnite-rewards.net' — Fortnite's real site is epicgames.com",
      "🚩 Real games never give V-Bucks through social media ads",
      "🚩 'Connect your account' = they want to steal your password"
    ],
    explanation: "Fake reward trap impersonating Fortnite."
  }
];

const TYPE_LABELS = {
  tr: { email: "E-posta", sms: "SMS", social: "Mesaj / Bildirim" },
  en: { email: "Email", sms: "SMS", social: "Message / Notification" },
};

export default function PhishingDetective({ isTurkish }) {
  const scenarios = isTurkish ? SCENARIOS_TR : SCENARIOS_EN;
  const tl = (tr, en) => (isTurkish ? tr : en);

  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState(null); // 'safe' | 'suspicious'
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const s = scenarios[index];
  const isLast = index === scenarios.length - 1;
  const typeLabels = isTurkish ? TYPE_LABELS.tr : TYPE_LABELS.en;

  const handlePick = (choice) => {
    if (picked !== null) return;
    setPicked(choice);
    const correct = (choice === "suspicious") === !s.isSafe;
    if (correct) setScore((prev) => prev + 1);
  };

  const handleNext = () => {
    if (isLast) {
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
      setPicked(null);
    }
  };

  const handleRestart = () => {
    setIndex(0);
    setPicked(null);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const pct = Math.round((score / scenarios.length) * 100);
    const perfect = pct === 100;
    return (
      <motion.div
        className="pd-done"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="pd-done-emoji">{perfect ? "🕵️" : pct >= 70 ? "🎉" : "📚"}</div>
        <div className="pd-done-title">
          {perfect
            ? tl("Mükemmel Dedektif!", "Perfect Detective!")
            : tl("Quiz Tamamlandı!", "Quiz Complete!")}
        </div>
        <div className="pd-done-score">
          {tl(
            `${scenarios.length} mesajdan ${score} doğru — %${pct}`,
            `${score} of ${scenarios.length} correct — ${pct}%`
          )}
        </div>
        <div className="pd-done-msg">
          {perfect
            ? tl("Tüm mesajları doğru sınıflandırdın! Gerçek bir dijital dedektifsin 🔍", "You classified every message correctly! You're a true digital detective 🔍")
            : pct >= 70
            ? tl("Çok iyi! Tekrar dene, mükemmele ulaşırsın.", "Great job! Try again for a perfect score.")
            : tl("Tekrar dene, phishing mesajlarını daha iyi tanımayı öğreneceksin.", "Try again, you'll get better at spotting phishing messages.")}
        </div>
        <button className="pd-restart-btn" onClick={handleRestart}>
          🔄 {tl("Tekrar Dene", "Try Again")}
        </button>
        <style>{styles}</style>
      </motion.div>
    );
  }

  const userPickedSafe = picked === "safe";
  const userPickedSuspicious = picked === "suspicious";
  const answeredCorrectly = picked !== null && ((picked === "suspicious") === !s.isSafe);

  return (
    <div className="pd-wrap">
      {/* Progress */}
      <div className="pd-progress">
        <span className="pd-progress-label">
          {tl("Mesaj", "Message")} {index + 1}/{scenarios.length}
        </span>
        <div className="pd-bar">
          <div className="pd-bar-fill" style={{ width: `${((index + 1) / scenarios.length) * 100}%` }} />
        </div>
        <span className="pd-score-badge">🕵️ {score}</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -28 }}
          transition={{ duration: 0.22 }}
        >
          {/* Message card */}
          <div className="pd-message-card">
            <div className="pd-msg-type-row">
              <span className="pd-msg-type-badge">{typeLabels[s.type]}</span>
              {s.subject && <span className="pd-msg-subject">"{s.subject}"</span>}
            </div>
            <div className="pd-msg-from">
              <strong>{tl("Gönderen:", "From:")}</strong> {s.from}
            </div>
            <div className="pd-msg-body">{s.content}</div>
          </div>

          {/* Buttons */}
          {picked === null && (
            <div className="pd-btn-row">
              <button
                className="pd-btn pd-btn-safe"
                onClick={() => handlePick("safe")}
              >
                🟢 {tl("Güvenli", "Safe")}
              </button>
              <button
                className="pd-btn pd-btn-suspicious"
                onClick={() => handlePick("suspicious")}
              >
                🔴 {tl("Şüpheli", "Suspicious")}
              </button>
            </div>
          )}

          {/* Feedback */}
          <AnimatePresence>
            {picked !== null && (
              <motion.div
                className={`pd-feedback ${answeredCorrectly ? "pd-fb-ok" : "pd-fb-bad"}`}
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                transition={{ duration: 0.28 }}
              >
                <div className="pd-fb-header">
                  <span className="pd-fb-emoji">{answeredCorrectly ? "✅" : "❌"}</span>
                  <span className="pd-fb-verdict">
                    {answeredCorrectly
                      ? tl("Doğru! ", "Correct! ")
                      : tl("Yanlış! ", "Wrong! ")}
                    <span className={s.isSafe ? "pd-verdict-safe" : "pd-verdict-phishing"}>
                      {s.isSafe
                        ? tl("Bu mesaj GÜVENLİDİR.", "This message is SAFE.")
                        : tl("Bu mesaj PHİSHİNG (SAHTE)!", "This message is PHISHING (FAKE)!")}
                    </span>
                  </span>
                </div>

                <div className="pd-fb-explanation">{s.explanation}</div>

                <div className="pd-tips-title">
                  {tl("📋 Dikkat etmen gereken işaretler:", "📋 Signs to watch for:")}
                </div>
                <div className="pd-tips-list">
                  {s.tips.map((tip, i) => (
                    <div key={i} className="pd-tip">{tip}</div>
                  ))}
                </div>

                <button className="pd-next-btn" onClick={handleNext}>
                  {isLast
                    ? tl("✅ Testi Bitir", "✅ Finish")
                    : tl("Sonraki Mesaj →", "Next Message →")}
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
.pd-wrap {
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
}

/* PROGRESS */
.pd-progress {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}
.pd-progress-label {
  font-size: 0.78rem;
  font-weight: 700;
  color: #dc2626;
  white-space: nowrap;
}
.pd-bar {
  flex: 1;
  height: 5px;
  background: #fee2e2;
  border-radius: 999px;
  overflow: hidden;
}
.pd-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #ef4444, #f97316);
  border-radius: 999px;
  transition: width 0.4s ease;
}
.pd-score-badge {
  font-size: 0.78rem;
  font-weight: 800;
  color: #b91c1c;
  background: #fee2e2;
  padding: 2px 8px;
  border-radius: 999px;
  white-space: nowrap;
}

/* MESSAGE CARD */
.pd-message-card {
  background: linear-gradient(160deg, #f8faff 0%, #ffffff 60%, #fff7ed 100%);
  border: 1.5px solid rgba(239, 68, 68, 0.18);
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 6px 24px rgba(239, 68, 68, 0.08), 0 2px 8px rgba(0,0,0,0.04);
  margin-bottom: 12px;
}
.pd-msg-type-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  flex-wrap: wrap;
}
.pd-msg-type-badge {
  font-size: 0.72rem;
  font-weight: 800;
  background: linear-gradient(135deg, #fef3c7, #fed7aa);
  color: #92400e;
  border: 1px solid #fde68a;
  padding: 2px 8px;
  border-radius: 999px;
}
.pd-msg-subject {
  font-size: 0.78rem;
  font-weight: 700;
  color: #475569;
  font-style: italic;
}
.pd-msg-from {
  font-size: 0.82rem;
  font-weight: 700;
  color: #334155;
  margin-bottom: 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(0,0,0,0.07);
}
.pd-msg-body {
  font-size: 0.95rem;
  font-weight: 600;
  color: #0f172a;
  line-height: 1.55;
}

/* BUTTONS */
.pd-btn-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 4px;
}
.pd-btn {
  padding: 13px 10px;
  border-radius: 12px;
  border: 2.5px solid transparent;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.18s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.pd-btn-safe {
  background: linear-gradient(135deg, #d1fae5, #ecfdf5);
  border-color: rgba(16, 185, 129, 0.3);
  color: #065f46;
}
.pd-btn-safe:hover {
  background: linear-gradient(135deg, #a7f3d0, #d1fae5);
  border-color: #10b981;
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.2);
}
.pd-btn-suspicious {
  background: linear-gradient(135deg, #fee2e2, #fff1f2);
  border-color: rgba(239, 68, 68, 0.3);
  color: #7f1d1d;
}
.pd-btn-suspicious:hover {
  background: linear-gradient(135deg, #fca5a5, #fee2e2);
  border-color: #ef4444;
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(239, 68, 68, 0.2);
}

/* FEEDBACK */
.pd-feedback {
  border-radius: 14px;
  padding: 14px 16px;
  overflow: hidden;
}
.pd-fb-ok {
  background: linear-gradient(135deg, #d1fae5, #ecfdf5);
  border: 1.5px solid #6ee7b7;
}
.pd-fb-bad {
  background: linear-gradient(135deg, #fee2e2, #fff1f2);
  border: 1.5px solid #fca5a5;
}
.pd-fb-header {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 8px;
}
.pd-fb-emoji {
  font-size: 1.2rem;
  flex-shrink: 0;
  margin-top: 1px;
}
.pd-fb-verdict {
  font-size: 0.95rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.4;
}
.pd-verdict-safe {
  color: #065f46;
}
.pd-verdict-phishing {
  color: #7f1d1d;
}
.pd-fb-explanation {
  font-size: 0.85rem;
  font-weight: 600;
  color: #334155;
  background: rgba(255,255,255,0.6);
  border-radius: 8px;
  padding: 6px 10px;
  margin-bottom: 10px;
  line-height: 1.5;
}
.pd-tips-title {
  font-size: 0.82rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 6px;
}
.pd-tips-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 12px;
}
.pd-tip {
  font-size: 0.83rem;
  font-weight: 600;
  color: #1e293b;
  background: rgba(255,255,255,0.65);
  border-radius: 8px;
  padding: 5px 10px;
  line-height: 1.45;
}
.pd-next-btn {
  display: block;
  width: 100%;
  padding: 10px 16px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, #ef4444, #f97316);
  color: white;
  font-weight: 800;
  font-size: 0.92rem;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(239, 68, 68, 0.28);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.pd-next-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 7px 18px rgba(239, 68, 68, 0.35);
}

/* DONE SCREEN */
.pd-done {
  background: linear-gradient(160deg, #fff1f2, #fff7ed);
  border: 2px solid rgba(239, 68, 68, 0.2);
  border-radius: 18px;
  padding: 28px 20px;
  text-align: center;
  box-shadow: 0 12px 40px rgba(239, 68, 68, 0.1);
  max-width: 680px;
  margin: 0 auto;
}
.pd-done-emoji {
  font-size: 2.8rem;
  margin-bottom: 8px;
}
.pd-done-title {
  font-size: 1.25rem;
  font-weight: 900;
  color: #7f1d1d;
  margin-bottom: 8px;
}
.pd-done-score {
  font-size: 0.97rem;
  font-weight: 700;
  color: #b91c1c;
  background: #fee2e2;
  display: inline-block;
  padding: 5px 16px;
  border-radius: 999px;
  margin-bottom: 8px;
}
.pd-done-msg {
  font-size: 0.9rem;
  color: #475569;
  margin-bottom: 18px;
  line-height: 1.5;
}
.pd-restart-btn {
  padding: 10px 28px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, #ef4444, #f97316);
  color: white;
  font-weight: 800;
  font-size: 0.95rem;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(239, 68, 68, 0.28);
  transition: transform 0.15s ease;
}
.pd-restart-btn:hover {
  transform: translateY(-2px);
}
`;
