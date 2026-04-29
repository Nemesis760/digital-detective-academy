export const MODULE6_TR = {
  "module_6": {
    "title": "Modül 6: Dijital Dedektif",
    "subtitle": "🔍 Olay Yeri İnceleme: NIST Detect & Respond",
    "sections": [
      {
        "id": 1,
        "title": "🚨 Kötü Amaçlı Yazılım Belirtileri",
        "intro": "Bilgisayarın hasta olduğunda verdiği sinyalleri tanımayı öğren. Yavaşlama, pop-up'lar, aşırı ısınma gibi.",
        "activity_title": "🧩 Aktivite: Tehdit Sinyallerini Tanı",
        "activity_desc": "Aşağıdaki soruları yanıtlayarak kötü amaçlı yazılımlar hakkındaki bilgini test et!",
        "video_links": [
          {
            "url": "https://www.youtube.com/watch?v=9dp7QsSDAN4",
            "title": "Malware (Zararlı Yazılım) Nedir? — Türkçe"
          }
        ],
        "content": {
          "1.1": {
            "title": "Kötü Amaçlı Yazılım (Malware) Nedir?",
            "description": "Kötü amaçlı yazılım (malware), bilgisayarınıza zarar vermek, bilgi çalmak veya işlemleri bozmak için tasarlanmış yazılımdır. Dijital bir virüs gibidir!",
            "image": "/images/module6/threats.jpg",
            "points": [
              "Virüsler: Dosyadan dosyaya yayılır, sisteminize zarar verir",
              "Truva Atları: Kendilerini güvenli programlar gibi gösterir ama tehlikelidir",
              "Casus Yazılımlar: Gizlice çevrimiçi yaptıklarınızı izler",
              "Fidye Yazılımları: Dosyalarınızı kilitler ve açmak için para ister",
              "Reklam Yazılımları: İstenmeyen reklamlar gösterir"
            ],
            "examples": [
              "İndirdiğiniz bir dosya garip davranmaya başlar",
              "Bilgisayarınız aniden çok yavaşlar",
              "Gezinmediğiniz halde pop-up pencereler görünür"
            ]
          },
          "1.2": {
            "title": "Kötü Amaçlı Yazılım Uyarı İşaretleri",
            "description": "Bilgisayarınız bir şeylerin yanlış olduğunda size sinyaller verir. Bunları tanımayı öğrenin!",
            "image": "/images/module6/m6_malware_signs_tr.png",
            "points": [
              "Bilgisayar normalden çok daha yavaş çalışır",
              "Pop-up pencereler sık sık görünür",
              "Programlar çöker veya donar",
              "Tarayıcı ana sayfası izniniz olmadan değişir",
              "Dosyalar kaybolur veya bozulur",
              "Bilgisayar aşırı ısınır veya fan sürekli çalışır",
              "Garip hata mesajları görünür"
            ],
            "examples": [
              "✅ Normal: Bilgisayar 30 saniyede açılır",
              "❌ Uyarı: Bilgisayar 5 dakikada açılır",
              "✅ Normal: Tarayıcı ana sayfanıza açılır",
              "❌ Uyarı: Tarayıcı bilinmeyen bir web sitesine açılır"
            ]
          },
          "1.3": {
            "title": "Kötü Amaçlı Yazılımdan Nasıl Korunulur?",
            "description": "Önlemek tedaviden daha iyidir! İşte kötü amaçlı yazılımları uzak tutmanın yolları:",
            "image": "/images/module6/m6_protection_tr.png",
            "points": [
              "Antivirüs yazılımı kurun ve düzenli olarak güncelleyin",
              "Şüpheli linklere veya pop-up'lara tıklamayın",
              "Bilinmeyen kaynaklardan dosya indirmeyin",
              "İşletim sisteminizi güncel tutun",
              "Güçlü şifreler kullanın",
              "Önemli dosyalarınızı düzenli olarak yedekleyin"
            ],
            "quiz": [
              {
                "type": "true_false",
                "question": "Malware sadece bilgisayarlara bulaşabilir, telefonlara bulaşamaz.",
                "answer": false,
                "explanation_tr": "Yanlış! Malware; telefonlara, tabletlere, akıllı saatlere ve internete bağlı her cihaza bulaşabilir."
              },
              {
                "type": "true_false",
                "question": "Bilgisayar normalden çok daha yavaş çalışıyorsa bu bir malware belirtisi olabilir.",
                "answer": true,
                "explanation_tr": "Doğru! Yavaşlama, malware'in sistem kaynaklarını tükettiğinin en yaygın belirtilerinden biridir."
              },
              {
                "type": "true_false",
                "question": "Antivirüs yazılımı bir kere kurulunca güncellemek gerekmez.",
                "answer": false,
                "explanation_tr": "Yanlış! Antivirüs yazılımı her gün yeni tehditlerle güncellenmek zorundadır. Güncellenmeyen antivirüs yeni tehditlere karşı savunmasız kalır."
              },
              {
                "type": "true_false",
                "question": "Güvenilir görünen bir program da aslında truva atı (trojan) olabilir.",
                "answer": true,
                "explanation_tr": "Doğru! Truva atları kendilerini faydalı programlar gibi göstererek bilgisayara sızmayı hedefler."
              },
              {
                "type": "true_false",
                "question": "Pop-up pencereler yalnızca reklamcılık amaçlıdır, tehlikeli değildir.",
                "answer": false,
                "explanation_tr": "Yanlış! Sahte pop-up'lar; zararlı yazılım indirmenizi sağlayabilir veya kişisel bilgilerinizi çalmak için tasarlanmış olabilir."
              },
              {
                "type": "multiple_choice",
                "question": "Bilgisayarına 'Ödül kazandınız!' yazan bir pop-up geldi. Ne yapmalısın?",
                "options": ["A) Tıklayıp ödülünü al", "B) Pop-up'ı kapat ve bir yetişkine söyle", "C) Bilgilerini gir", "D) Arkadaşlarınla paylaş"],
                "answer": "B",
                "explanation_tr": "Bu tür pop-up'lar genellikle phishing (oltalama) girişimidir. Kapatıp bir yetişkine söylemek en güvenli seçenektir."
              },
              {
                "type": "multiple_choice",
                "question": "Fidye yazılımı (ransomware) ne yapar?",
                "options": ["A) İnternet hızını artırır", "B) Dosyaları kilitleyip para ister", "C) Antivirüs görevi görür", "D) Bilgisayarı hızlandırır"],
                "answer": "B",
                "explanation_tr": "Fidye yazılımları dosyalarını kilitler ve erişimi yeniden açmak için para (genellikle kripto para) talep eder."
              },
              {
                "type": "true_false",
                "question": "Bilinmeyen kaynaklardan dosya indirmek bilgisayarını tehlikeye atabilir.",
                "answer": true,
                "explanation_tr": "Doğru! Güvenilmeyen sitelerden indirilen dosyalar malware içerebilir. Her zaman resmi kaynakları tercih edin."
              }
            ]
          }
        },
        "activity_type": "interactive_quiz"
      },
      {
        "id": 2,
        "title": "🎣 Kimlik Avı (Phishing) Avcılığı",
        "intro": "Sahte e-postaları, mesajları ve web sitelerini nasıl tespit edeceğini öğrenerek oltaya gelmekten kaçın.",
        "activity_title": "🎯 Senaryo Oyunu",
        "activity_desc": "Siber tehlike senaryolarında tehlikeli noktaları bul ve doğru eylemi seç! Görevleri tamamla.",
        "video_links": [
          {
            "url": "https://www.youtube.com/watch?v=XqOxnM5P2Uc",
            "title": "Kimlik Avı (Phishing) Nedir? — Türkçe"
          }
        ],
        "content": {
          "2.1": {
            "title": "Kimlik Avı (Phishing) Nedir?",
            "description": "Kimlik avı, dolandırıcıların güvenilir bir şirket gibi davranarak şifreler veya kredi kartı numaraları gibi kişisel bilgilerinizi almak için sizi kandırmaya çalışmasıdır.",
            "image": "/images/module6/phishing.jpg",
            "points": [
              "Gerçek şirketlerden geliyormuş gibi görünen sahte e-postalar",
              "Şüpheli linklere tıklamanızı isteyen mesajlar",
              "Gerçek gibi görünen ama aslında sahte olan web siteleri",
              "Hızlı hareket etmenizi sağlamaya çalışan acil mesajlar",
              "Kişisel bilgi istekleri"
            ],
            "examples": [
              "Hesabınızın kapatılacağını iddia eden e-posta (şimdi doğrulamazsanız)",
              "Ödül kazandığınızı söyleyen ama bilgi vermenizi isteyen mesaj",
              "Banka web siteniz gibi görünen ama farklı URL'ye sahip link"
            ]
          },
          "2.2": {
            "title": "Kimlik Avını Nasıl Tespit Edilir?",
            "description": "Kimlik avı girişimlerinin belirgin işaretleri vardır. Bunları tanımayı öğrenin:",
            "image": "/images/module6/m6_phishing_signs_tr.png",
            "points": [
              "Gönderenin e-posta adresini dikkatlice kontrol edin",
              "Yazım ve dil bilgisi hatalarını arayın",
              "Acil veya tehditkar mesajlardan şüphelenin",
              "Tıklamadan önce linklerin üzerine gelerek gerçek URL'yi görün",
              "Gerçek şirketler e-posta ile şifre istemez",
              "Web sitesi URL'sinin gerçek şirketin web sitesiyle eşleşip eşleşmediğini kontrol edin"
            ],
            "examples": [
              "❌ Şüpheli: 'Hesabınız kapatılacak!' (yazım hatası)",
              "✅ Güvenli: 'Hesabınız kapatılacak.' (doğru yazım)",
              "❌ Şüpheli: 'Hemen tıklayın yoksa erişimi kaybedersiniz!'",
              "✅ Güvenli: 'Lütfen hesabınıza giriş yaparak doğrulayın.'"
            ]
          },
          "2.3": {
            "title": "Kimlik Avından Şüphelenirseniz Ne Yapmalısınız?",
            "description": "Kimlik avı mesajı aldığınızı düşünüyorsanız, işte yapmanız gerekenler:",
            "image": "/images/module6/m6_phishing_response_tr.png",
            "points": [
              "Hiçbir linke tıklamayın veya ek indirmeyin",
              "Mesaja cevap vermeyin",
              "Gerçek şirkete bildirin (eğer onlar gibi davranıyorsa)",
              "Mesajı silin",
              "Zaten tıkladıysanız, şifrelerinizi hemen değiştirin",
              "Güvendiğiniz bir yetişkine söyleyin"
            ]
          }
        },
        "activity_type": "hotspot_quiz"
      },
      {
        "id": 3,
        "title": "🛠️ Siber Krizlere Müdahale Planı",
        "intro": "Bir saldırı veya kriz anında atılacak ilk adımlar hayat kurtarır. İnterneti kes, ebeveyne/öğretmene haber ver, tarama yap.",
        "activity_title": "🎮 Aktivite: Kriz Simülasyonu",
        "activity_desc": "Siber saldırı senaryosunda doğru müdahale adımlarını uygula. Sistemi kurtarmak için ipuçlarını bul, interneti kes ve virüsü temizle!",
        "video_links": [
          {
            "url": "https://www.youtube.com/watch?v=8XH0VKz0upk",
            "title": "Çocuklar İçin İnternet Güvenliği — Türkçe"
          },
          {
            "url": "https://www.youtube.com/watch?v=5JSMRbEW5_c",
            "title": "Kimlik Avı Saldırılarına Karşı Tedbirler — Türkçe"
          }
        ],
        "content": {
          "3.1": {
            "title": "Siber Kriz Nedir?",
            "description": "Siber kriz, bilgisayarınızın veya hesaplarınızın saldırı altında olduğu zamandır. Kötü amaçlı yazılım, hack veya kimlik hırsızlığı olabilir.",
            "image": "/images/module6/crisis_response_hero.jpg",
            "points": [
              "Bilgisayarınız kötü amaçlı yazılımla enfekte olmuştur",
              "Birisi hesabınıza girmiştir",
              "Kişisel bilgileriniz çalınmıştır",
              "Dosyalarınız fidye yazılımı tarafından kilitlenmiştir",
              "Bir kimlik avı tuzağına düşmüşsünüzdür"
            ],
            "examples": [
              "Dosyalarınıza erişemezsiniz",
              "Ekranınızda garip mesajlar görünür",
              "Hesabınız yapmadığınız aktiviteler gösterir"
            ]
          },
          "3.2": {
            "title": "STOP Müdahale Planı",
            "description": "Siber krizle karşılaştığınızda STOP'u hatırlayın:",
            "image": "/images/module6/m6_stop_plan_tr.png",
            "points": [
              "S - Stop (Dur): Yaptığınız şeyi hemen durdurun",
              "T - Tell (Söyle): Hemen güvendiğiniz bir yetişkine söyleyin (ebeveyn, öğretmen)",
              "O - Offline (Çevrimdışı): Mümkünse internetten bağlantıyı kesin",
              "P - Protect (Koru): Diğer hesaplarınızı şifrelerinizi değiştirerek koruyun"
            ],
            "examples": [
              "Şüpheli bir mesaj görürseniz, durun ve hiçbir şeye tıklamayın",
              "Hemen ebeveyninize veya öğretmeninize söyleyin",
              "İnternet kablosunu çıkarın veya Wi-Fi'yi kapatın",
              "Tüm önemli hesaplarınızın şifrelerini değiştirin"
            ]
          },
          "3.3": {
            "title": "Önleme Kontrol Listesi",
            "description": "En iyi savunma önlemektir. Bu kontrol listesini takip edin:",
            "image": "/images/module6/m6_checklist_tr.png",
            "points": [
              "✅ Antivirüs yazılımını güncel tutun",
              "✅ Şifrelerinizi kimseyle paylaşmayın",
              "✅ Tıklamadan önce düşünün",
              "✅ Güvenmeden önce doğrulayın",
              "✅ Önemli dosyaları düzenli olarak yedekleyin",
              "✅ Yazılımları güncel tutun",
              "✅ Güçlü, benzersiz şifreler kullanın"
            ]
          }
        },
        "activity_type": "crisis_simulation"
      }
    ]
  }
};
export default MODULE6_TR;
