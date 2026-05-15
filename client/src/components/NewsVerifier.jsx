import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NEWS_TR = [
  {
    headline: "ŞOKE! Bilim insanları kanıtladı: 5G sinyalleri beyin hücrelerini öldürüyor!",
    source: "📲 Kaynak: @sikayet_paylas / Telegram grubu",
    snippet: "Anonim bir kullanıcının paylaştığı görüntüde 5G kulesinin yanındaki ağaçların solduğu iddia ediliyor...",
    isReal: false,
    tips: [
      "🚩 'ŞOKE', 'KANITI VAR', 'HERKESİN BİLMESİ GEREKEN' gibi abartılı başlıklar sahte haberin işareti",
      "🚩 Kaynak: Telegram grubu veya sosyal medya hesabı — bilimsel makale değil",
      "🚩 Dünya Sağlık Örgütü ve binlerce bağımsız çalışma 5G'nin insan sağlığına zararsız olduğunu gösteriyor"
    ],
    explanation: "Bu dezenformasyon (yanlış bilgi) içeriğidir. 5G ile ilgili bu tür iddiaların bilimsel bir temeli yoktur."
  },
  {
    headline: "NASA, Mars'ta eski bir nehir yatağı keşfetti — araştırma Nature dergisinde yayımlandı",
    source: "📰 Kaynak: NASA Resmi Sitesi / Nature Dergisi, 2024",
    snippet: "Mars keşif aracı Perseverance, gezegenin kuzey kesiminde milyonlarca yıl önce akan bir nehre ait tortul taşlar buldu.",
    isReal: true,
    tips: [
      "✅ NASA resmi sitesi ve Nature gibi hakemli dergiler — doğrulanabilir kaynaklar",
      "✅ Yayın tarihi ve araştırma adı verilmiş, kolayca kontrol edilebilir",
      "✅ Abartılı dil yok, bilimsel ve ölçülü bir dil kullanılmış"
    ],
    explanation: "Bu güvenilir bir bilim haberidir. Resmi kaynaklardan doğrulanabilir."
  },
  {
    headline: "ACİL PAYLAŞ! Şehrin su depolarına kimyasal karıştırıldı — musluk suyunu içmeyin!",
    source: "📲 Kaynak: WhatsApp grubu 'Mahalle Haberleri'",
    snippet: "Bir tanıdığımın komşusu duydu, belediye saklıyor ama haber yavaş yayılıyor. Herkese iletin!",
    isReal: false,
    tips: [
      "🚩 'ACİL PAYLAŞ' baskısı, panik yaratarak doğrulamadan yayılmanı sağlamak için kullanılır",
      "🚩 'Bir tanıdığımın komşusu' — doğrulanamayan zincir tanıklık, güvenilmez",
      "🚩 Böyle bir durum olsaydı resmi belediye kanalları, TV ve radyo duyururdu"
    ],
    explanation: "Klasik panik oluşturan sahte haber zinciri. Resmi kanalları kontrol etmeden asla paylaşma."
  },
  {
    headline: "Türkiye'de internet kullanıcı sayısı 67 milyonu aştı — TÜİK 2024 raporu",
    source: "📰 Kaynak: TÜİK (Türkiye İstatistik Kurumu) 2024 Dijital Dönüşüm Raporu",
    snippet: "TÜİK'in yıllık dijital dönüşüm raporuna göre, Türkiye nüfusunun yüzde 78'i düzenli internet kullanıcısı.",
    isReal: true,
    tips: [
      "✅ TÜİK Türkiye'nin resmi istatistik kurumu — birinci el kaynak",
      "✅ Rapor adı, yılı ve spesifik istatistikler verilmiş — doğrulanabilir",
      "✅ Panik veya abartı içermeyen, istatistiksel bir haber"
    ],
    explanation: "Güvenilir resmi istatistik haberidir. TÜİK sitesinden doğrulanabilir."
  },
  {
    headline: "Ünlü doktor açıkladı: Sarımsak yiyen çocuklar COVID'e yakalanmıyor — aşı gereksiz!",
    source: "📲 Kaynak: Instagram sayfası 'Doğal_Sağlık_TR' (22 bin takipçi)",
    snippet: "Doktorumuz olarak bilinen Bu kişi tıbbi diploma göstermeden iddiada bulunuyor...",
    isReal: false,
    tips: [
      "🚩 'Ünlü doktor' belirsiz — adı, kurumu, yayını yok; kim bu kişi?",
      "🚩 Sarımsağın COVID önlediğine dair klinik kanıt yoktur",
      "🚩 Aşı karşıtı içerik yayan Instagram sayfaları güvenilir tıbbi kaynak değildir"
    ],
    explanation: "Tehlikeli tıbbi yanlış bilgi. Sağlık konularında her zaman yetkili kurumları (Sağlık Bakanlığı, WHO) kontrol et."
  },
  {
    headline: "Siber saldırılar 2023'te küresel ekonomiye 8 trilyon dolar zarar verdi — Cybersecurity Ventures raporu",
    source: "📰 Kaynak: Cybersecurity Ventures Yıllık Siber Suç Raporu, 2023",
    snippet: "Araştırma şirketi, fidye yazılımları, veri ihlalleri ve kimlik avı saldırılarının yarattığı ekonomik zararı hesapladı.",
    isReal: true,
    tips: [
      "✅ Kaynak: Tanınmış siber güvenlik araştırma şirketi ve resmi yıllık rapor",
      "✅ Rakam büyük ama abartı yok; bu tür raporlar düzenli yayımlanır",
      "✅ Çok sayıda güvenilir haber sitesi bu rakamı doğruladı"
    ],
    explanation: "Güvenilir araştırma raporuna dayalı bir haberdir."
  },
  {
    headline: "BİLİNMEYEN GERÇEK: Güneş kremi kanser yapıyor, şirketler yıllardır saklıyor!",
    source: "📲 Kaynak: YouTube videosu, 'Sağlık Sırları' kanalı (14 dakika)",
    snippet: "Anlatıcı gerçek adını vermeden kimyasal formüller hakkında iddialarda bulunuyor...",
    isReal: false,
    tips: [
      "🚩 'Saklanan gerçek', 'komplo' dili sahte haberlerin klasik çerçevesi",
      "🚩 İsimsiz YouTube kanalı — hiçbir bilimsel kurum veya dergi desteği yok",
      "🚩 Dünya genelinde dermatoloji dernekleri güneş kreminin kanser riskini DÜŞÜRDÜĞÜNÜ kanıtladı"
    ],
    explanation: "Tehlikeli bir sağlık komplo teorisidir. Güneş kremi kullanımı bilimsel olarak önerilmektedir."
  },
  {
    headline: "Dünya Sağlık Örgütü: Küresel aşılama oranları 2023'te yüzde 83'e ulaştı",
    source: "📰 Kaynak: WHO (Dünya Sağlık Örgütü) 2023 İmmünizasyon Raporu",
    snippet: "DSÖ'nün yıllık raporuna göre, dünya çapında çocuk aşılama programları pandemi sonrası toparlanma gösterdi.",
    isReal: true,
    tips: [
      "✅ WHO, BM'ye bağlı güvenilir küresel sağlık kuruluşu",
      "✅ Yıllık rapor — düzenli yayımlanan, doğrulanabilir veri",
      "✅ Ölçülü, panik veya abartı içermeyen sağlık haberi"
    ],
    explanation: "Güvenilir uluslararası kuruluş verisidir."
  },
  {
    headline: "OKULLAR BU HAFTA TATİL! Milli Eğitim Bakanlığı az önce açıkladı!!",
    source: "📲 Kaynak: @okul_haberleri Twitter hesabı (oluşturulma: 3 ay önce)",
    snippet: "Detay yok, kaynak yok. Sadece büyük harflerle yazılmış bir tweet ve 50 bin retweet.",
    isReal: false,
    tips: [
      "🚩 Milli Eğitim Bakanlığı resmi tatil açıklamalarını kendi web sitesi ve resmi kanallardan yapar",
      "🚩 3 aylık hesap, anonim, resmi logosu veya doğrulama işareti yok",
      "🚩 'Bu hafta', 'az önce' gibi belirsiz zaman ifadeleri + büyük harf baskısı sahte haberin işareti"
    ],
    explanation: "Sahte okul tatil haberi. Her zaman MEB'in resmi sitesini ve e-okul sistemini kontrol et."
  },
  {
    headline: "Google, Türkiye'de siber güvenlik okuryazarlığı için 5 milyon dolarlık fon ayırdı",
    source: "📰 Kaynak: Google Türkiye Resmi Blog / Hürriyet Teknoloji, Mart 2024",
    snippet: "Google.org, Türkiye'deki öğrencilere yönelik dijital güvenlik eğitim programları için kaynak sağlayacak.",
    isReal: true,
    tips: [
      "✅ Google'ın resmi blogu doğrulanabilir birinci el kaynak",
      "✅ Hürriyet gibi köklü haber kuruluşları da doğrulamış",
      "✅ Spesifik rakam, tarih ve program detayı verilmiş"
    ],
    explanation: "Doğrulanabilir kurumsal haber. Google blog ve güvenilir medya organları tarafından doğrulanmış."
  }
];

const NEWS_EN = [
  {
    headline: "SHOCKING! Scientists prove: 5G signals are killing brain cells!",
    source: "📲 Source: @share_now / Anonymous Telegram group",
    snippet: "A user claims that trees near a 5G tower are wilting in a shared video...",
    isReal: false,
    tips: [
      "🚩 'SHOCKING', 'PROOF', 'WHAT THEY DON'T WANT YOU TO KNOW' — classic fake news language",
      "🚩 Source: Telegram group, not a scientific journal",
      "🚩 WHO and thousands of independent studies confirm 5G is safe for human health"
    ],
    explanation: "This is disinformation. No scientific basis exists for claims that 5G harms human health."
  },
  {
    headline: "NASA discovers ancient riverbed on Mars — study published in Nature journal",
    source: "📰 Source: NASA Official Website / Nature Journal, 2024",
    snippet: "Perseverance rover found sedimentary rocks in Mars's northern region from a river that flowed millions of years ago.",
    isReal: true,
    tips: [
      "✅ NASA's official site and peer-reviewed journals like Nature — verifiable sources",
      "✅ Publication date and study name provided — easily checkable",
      "✅ No sensationalized language — scientific and measured tone"
    ],
    explanation: "This is a reliable science news story. Verifiable from official sources."
  },
  {
    headline: "URGENT SHARE! Chemicals have been added to city water supply — don't drink tap water!",
    source: "📲 Source: WhatsApp group 'Neighborhood News'",
    snippet: "A neighbor of someone I know heard this, the municipality is hiding it — spread the word!",
    isReal: false,
    tips: [
      "🚩 'URGENT SHARE' pressure makes you spread without verifying",
      "🚩 'Someone's neighbor heard' — unverifiable chain of hearsay",
      "🚩 A real event like this would be announced by official government channels, TV, and radio"
    ],
    explanation: "Classic panic-inducing fake news chain. Never share before checking official channels."
  },
  {
    headline: "Internet users in Turkey surpass 67 million — TÜİK 2024 report",
    source: "📰 Source: TÜİK (Turkish Statistical Institute) 2024 Digital Transformation Report",
    snippet: "According to TÜİK's annual report, 78% of Turkey's population are regular internet users.",
    isReal: true,
    tips: [
      "✅ TÜİK is Turkey's official statistics institute — primary source",
      "✅ Report name, year, and specific statistics provided — verifiable",
      "✅ No panic or exaggeration — factual statistical reporting"
    ],
    explanation: "Reliable official statistics. Verifiable at TÜİK's website."
  },
  {
    headline: "Famous doctor reveals: Children who eat garlic don't get COVID — vaccine unnecessary!",
    source: "📲 Source: Instagram page 'Natural_Health_Tips' (22K followers)",
    snippet: "This person makes claims about medical formulas without showing any medical degree...",
    isReal: false,
    tips: [
      "🚩 'Famous doctor' is vague — no name, institution, or published paper",
      "🚩 No clinical evidence that garlic prevents COVID",
      "🚩 Anti-vaccine Instagram pages are not reliable medical sources"
    ],
    explanation: "Dangerous medical misinformation. Always check health authorities (WHO, Health Ministry) on medical topics."
  },
  {
    headline: "Cyberattacks cost the global economy $8 trillion in 2023 — Cybersecurity Ventures report",
    source: "📰 Source: Cybersecurity Ventures Annual Cybercrime Report, 2023",
    snippet: "The research firm calculated damage from ransomware, data breaches, and phishing attacks.",
    isReal: true,
    tips: [
      "✅ Source: Well-known cybersecurity research firm and its official annual report",
      "✅ Large number but not exaggerated — these reports are published regularly",
      "✅ Verified by multiple credible news outlets"
    ],
    explanation: "This is a reliable story based on a published research report."
  },
  {
    headline: "HIDDEN TRUTH: Sunscreen causes cancer — companies have been hiding it for years!",
    source: "📲 Source: YouTube video, 'Health Secrets' channel (14 minutes)",
    snippet: "An unnamed narrator makes claims about chemical formulas without credentials...",
    isReal: false,
    tips: [
      "🚩 'Hidden truth', 'conspiracy' language is a classic fake news framing",
      "🚩 Anonymous YouTube channel — no scientific institution or journal backing",
      "🚩 Dermatology associations worldwide have proven sunscreen REDUCES cancer risk"
    ],
    explanation: "A dangerous health conspiracy theory. Sunscreen use is scientifically recommended."
  },
  {
    headline: "WHO: Global vaccination rates reached 83% in 2023",
    source: "📰 Source: WHO (World Health Organization) 2023 Immunization Report",
    snippet: "According to the WHO's annual report, childhood immunization programs showed post-pandemic recovery.",
    isReal: true,
    tips: [
      "✅ WHO is a trusted UN global health organization",
      "✅ Annual report — regularly published, verifiable data",
      "✅ Measured, factual health news without panic or exaggeration"
    ],
    explanation: "Reliable international organization data."
  },
  {
    headline: "SCHOOLS CLOSED THIS WEEK! Ministry of Education just announced!!",
    source: "📲 Source: @school_news Twitter account (created: 3 months ago)",
    snippet: "No details, no source. Just a tweet in ALL CAPS with 50,000 retweets.",
    isReal: false,
    tips: [
      "🚩 Ministries make official announcements through their own websites and verified channels",
      "🚩 3-month-old anonymous account with no official badge or verification",
      "🚩 'This week', 'just now' vague time expressions + ALL CAPS pressure = fake news signals"
    ],
    explanation: "Fake school closure news. Always check the Ministry's official site and student portal."
  },
  {
    headline: "Google allocates $5 million fund for cybersecurity literacy in Turkey",
    source: "📰 Source: Google Turkey Official Blog / Hurriyet Technology, March 2024",
    snippet: "Google.org will provide resources for digital security education programs targeting students in Turkey.",
    isReal: true,
    tips: [
      "✅ Google's official blog is a verifiable primary source",
      "✅ Confirmed by established news organizations",
      "✅ Specific amount, date, and program details provided"
    ],
    explanation: "Verifiable corporate news. Confirmed by Google blog and credible media."
  }
];

export default function NewsVerifier({ isTurkish }) {
  const news = isTurkish ? NEWS_TR : NEWS_EN;
  const tl = (tr, en) => (isTurkish ? tr : en);

  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState(null); // 'real' | 'fake'
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const n = news[index];
  const isLast = index === news.length - 1;
  const answeredCorrectly = picked !== null && ((picked === "real") === n.isReal);

  const handlePick = (choice) => {
    if (picked !== null) return;
    setPicked(choice);
    if ((choice === "real") === n.isReal) setScore((s) => s + 1);
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
    const pct = Math.round((score / news.length) * 100);
    const perfect = pct === 100;
    return (
      <motion.div className="nv-done" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
        <div className="nv-done-emoji">{perfect ? "🏆" : pct >= 70 ? "🎉" : "📰"}</div>
        <div className="nv-done-title">
          {perfect
            ? tl("Mükemmel Haber Dedektifi!", "Perfect Fact-Checker!")
            : tl("Quiz Tamamlandı!", "Quiz Complete!")}
        </div>
        <div className="nv-done-score">
          {tl(`${news.length} haberden ${score} doğru — %${pct}`, `${score} of ${news.length} correct — ${pct}%`)}
        </div>
        <div className="nv-done-msg">
          {perfect
            ? tl("Tüm haberleri doğru sınıflandırdın! Gerçek bir medya okuryazarısın.", "You classified every story correctly! You're a true media literacy expert.")
            : pct >= 70
            ? tl("Çok iyi! Tekrar dene, mükemmele ulaşırsın.", "Great! Try again for a perfect score.")
            : tl("Sahte haberleri tanımak zor olabilir. Tekrar dene!", "Spotting fake news takes practice. Try again!")}
        </div>
        <button className="nv-restart-btn" onClick={handleRestart}>
          🔄 {tl("Tekrar Dene", "Try Again")}
        </button>
        <style>{styles}</style>
      </motion.div>
    );
  }

  return (
    <div className="nv-wrap">
      {/* Progress */}
      <div className="nv-progress">
        <span className="nv-progress-label">
          {tl("Haber", "Story")} {index + 1}/{news.length}
        </span>
        <div className="nv-bar">
          <div className="nv-bar-fill" style={{ width: `${((index + 1) / news.length) * 100}%` }} />
        </div>
        <span className="nv-score-badge">📰 {score}</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -28 }}
          transition={{ duration: 0.22 }}
        >
          {/* News card */}
          <div className="nv-news-card">
            <div className="nv-news-label">{tl("📰 Manşet / Paylaşım", "📰 Headline / Post")}</div>
            <div className="nv-headline">"{n.headline}"</div>
            <div className="nv-source">{n.source}</div>
            {n.snippet && <div className="nv-snippet">{n.snippet}</div>}
          </div>

          {/* Question */}
          <div className="nv-question">
            {tl("Bu haber sence güvenilir mi?", "Do you think this story is reliable?")}
          </div>

          {/* Buttons */}
          {picked === null && (
            <div className="nv-btn-row">
              <button className="nv-btn nv-btn-real" onClick={() => handlePick("real")}>
                🟢 {tl("Güvenilir Kaynak", "Reliable Source")}
              </button>
              <button className="nv-btn nv-btn-fake" onClick={() => handlePick("fake")}>
                🔴 {tl("Şüpheli / Sahte", "Suspicious / Fake")}
              </button>
            </div>
          )}

          {/* Feedback */}
          <AnimatePresence>
            {picked !== null && (
              <motion.div
                className={`nv-feedback ${answeredCorrectly ? "nv-fb-ok" : "nv-fb-bad"}`}
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                transition={{ duration: 0.28 }}
              >
                <div className="nv-fb-header">
                  <span className="nv-fb-emoji">{answeredCorrectly ? "✅" : "❌"}</span>
                  <span className="nv-fb-verdict">
                    {answeredCorrectly ? tl("Doğru! ", "Correct! ") : tl("Yanlış! ", "Wrong! ")}
                    <span className={n.isReal ? "nv-verdict-real" : "nv-verdict-fake"}>
                      {n.isReal
                        ? tl("Bu haber GÜVENİLİR.", "This story is RELIABLE.")
                        : tl("Bu haber SAHTE / YANILTICI!", "This story is FAKE / MISLEADING!")}
                    </span>
                  </span>
                </div>

                <div className="nv-fb-explanation">{n.explanation}</div>

                <div className="nv-tips-title">
                  {tl("🔍 Nasıl anlarsın?", "🔍 How can you tell?")}
                </div>
                <div className="nv-tips-list">
                  {n.tips.map((tip, i) => (
                    <div key={i} className="nv-tip">{tip}</div>
                  ))}
                </div>

                <button className="nv-next-btn" onClick={handleNext}>
                  {isLast ? tl("✅ Testi Bitir", "✅ Finish") : tl("Sonraki Haber →", "Next Story →")}
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
.nv-wrap {
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
}
.nv-progress {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}
.nv-progress-label {
  font-size: 0.78rem;
  font-weight: 700;
  color: #0369a1;
  white-space: nowrap;
}
.nv-bar {
  flex: 1;
  height: 5px;
  background: #bae6fd;
  border-radius: 999px;
  overflow: hidden;
}
.nv-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #0284c7, #0ea5e9);
  border-radius: 999px;
  transition: width 0.4s ease;
}
.nv-score-badge {
  font-size: 0.78rem;
  font-weight: 800;
  color: #075985;
  background: #e0f2fe;
  padding: 2px 8px;
  border-radius: 999px;
  white-space: nowrap;
}
/* NEWS CARD */
.nv-news-card {
  background: linear-gradient(160deg, #f0f9ff 0%, #ffffff 60%, #fefce8 100%);
  border: 1.5px solid rgba(2, 132, 199, 0.18);
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 6px 24px rgba(2, 132, 199, 0.08), 0 2px 8px rgba(0,0,0,0.04);
  margin-bottom: 10px;
}
.nv-news-label {
  font-size: 0.72rem;
  font-weight: 800;
  color: #075985;
  background: #e0f2fe;
  border: 1px solid #bae6fd;
  display: inline-block;
  padding: 2px 8px;
  border-radius: 999px;
  margin-bottom: 10px;
}
.nv-headline {
  font-size: 1.05rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.45;
  margin-bottom: 8px;
  font-style: italic;
}
.nv-source {
  font-size: 0.8rem;
  font-weight: 700;
  color: #475569;
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px dashed rgba(0,0,0,0.1);
}
.nv-snippet {
  font-size: 0.84rem;
  font-weight: 500;
  color: #64748b;
  line-height: 1.5;
  font-style: italic;
}
/* QUESTION */
.nv-question {
  font-size: 0.9rem;
  font-weight: 700;
  color: #1e293b;
  text-align: center;
  margin-bottom: 10px;
  padding: 7px 12px;
  background: rgba(2, 132, 199, 0.06);
  border-radius: 8px;
}
/* BUTTONS */
.nv-btn-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 4px;
}
.nv-btn {
  padding: 13px 10px;
  border-radius: 12px;
  border: 2.5px solid transparent;
  font-size: 0.9rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.18s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  text-align: center;
}
.nv-btn-real {
  background: linear-gradient(135deg, #d1fae5, #ecfdf5);
  border-color: rgba(16, 185, 129, 0.3);
  color: #065f46;
}
.nv-btn-real:hover {
  background: linear-gradient(135deg, #a7f3d0, #d1fae5);
  border-color: #10b981;
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.2);
}
.nv-btn-fake {
  background: linear-gradient(135deg, #fee2e2, #fff1f2);
  border-color: rgba(239, 68, 68, 0.3);
  color: #7f1d1d;
}
.nv-btn-fake:hover {
  background: linear-gradient(135deg, #fca5a5, #fee2e2);
  border-color: #ef4444;
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(239, 68, 68, 0.2);
}
/* FEEDBACK */
.nv-feedback {
  border-radius: 14px;
  padding: 14px 16px;
  overflow: hidden;
}
.nv-fb-ok {
  background: linear-gradient(135deg, #d1fae5, #ecfdf5);
  border: 1.5px solid #6ee7b7;
}
.nv-fb-bad {
  background: linear-gradient(135deg, #fee2e2, #fff1f2);
  border: 1.5px solid #fca5a5;
}
.nv-fb-header {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 8px;
}
.nv-fb-emoji { font-size: 1.2rem; flex-shrink: 0; margin-top: 1px; }
.nv-fb-verdict {
  font-size: 0.95rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.4;
}
.nv-verdict-real { color: #065f46; }
.nv-verdict-fake { color: #7f1d1d; }
.nv-fb-explanation {
  font-size: 0.85rem;
  font-weight: 600;
  color: #334155;
  background: rgba(255,255,255,0.6);
  border-radius: 8px;
  padding: 6px 10px;
  margin-bottom: 10px;
  line-height: 1.5;
}
.nv-tips-title {
  font-size: 0.82rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 6px;
}
.nv-tips-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 12px;
}
.nv-tip {
  font-size: 0.83rem;
  font-weight: 600;
  color: #1e293b;
  background: rgba(255,255,255,0.65);
  border-radius: 8px;
  padding: 5px 10px;
  line-height: 1.45;
}
.nv-next-btn {
  display: block;
  width: 100%;
  padding: 10px 16px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, #0284c7, #0ea5e9);
  color: white;
  font-weight: 800;
  font-size: 0.92rem;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(2, 132, 199, 0.28);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.nv-next-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 7px 18px rgba(2, 132, 199, 0.35);
}
/* DONE */
.nv-done {
  background: linear-gradient(160deg, #f0f9ff, #ecfdf5);
  border: 2px solid rgba(2, 132, 199, 0.2);
  border-radius: 18px;
  padding: 28px 20px;
  text-align: center;
  box-shadow: 0 12px 40px rgba(2, 132, 199, 0.1);
  max-width: 680px;
  margin: 0 auto;
}
.nv-done-emoji { font-size: 2.8rem; margin-bottom: 8px; }
.nv-done-title {
  font-size: 1.2rem;
  font-weight: 900;
  color: #0c4a6e;
  margin-bottom: 8px;
}
.nv-done-score {
  font-size: 0.97rem;
  font-weight: 700;
  color: #0369a1;
  background: #e0f2fe;
  display: inline-block;
  padding: 5px 16px;
  border-radius: 999px;
  margin-bottom: 8px;
}
.nv-done-msg {
  font-size: 0.9rem;
  color: #475569;
  margin-bottom: 18px;
  line-height: 1.5;
}
.nv-restart-btn {
  padding: 10px 28px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, #0284c7, #0ea5e9);
  color: white;
  font-weight: 800;
  font-size: 0.95rem;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(2, 132, 199, 0.28);
  transition: transform 0.15s ease;
}
.nv-restart-btn:hover { transform: translateY(-2px); }
`;
