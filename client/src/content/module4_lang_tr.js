// Modül 4: Dijital Güvenlik ve Bilinçli Teknoloji Kullanımı - Türkçe Dil Dosyası

export const MODULE4_TR = {
  module_4: {
    title: "Modül 4: Dijital Güvenlik ve Bilinçli Teknoloji Kullanımı",
    subtitle: "Cihazını, verini ve dijital davranışlarını akıllıca koru.",
    hero_image: "/images/module4/hero_digital_safety.png",
    sections: [
      {
        id: 1,
        title: "Cihaz Güvenliği: Kilit, Güncelleme, Yedekleme",
        intro:
          "Cihazın dijital çantan gibidir. Onu korursan fotoğrafların, notların ve hesapların da güvende kalır.",
        content: [
          "Ekran kilidi ilk kalkanındır. PIN, desen ya da parmak izi, cihaz kaybolsa bile başkalarını durdurur.",
          "Güncellemeler sadece yeni özellik değildir. Güvenlik açıklarını kapatır ve cihazını güçlendirir.",
          "Yedekleme bir güvenlik ağdır. Telefon bozulsa bile dosyaların geri gelebilir.",
          "Mümkünse ayrı hesap kullan. Okul için farklı, oyun ve kişisel kullanım için farklı hesap temiz olur.",
          "Küçük alışkanlıklar büyük güvenlik sağlar: kilitle, güncelle, yedekle."
        ],
        images: [
          {
            src: "/images/module4/device_lock_01.png",
            alt_tr: "Ekran kilidi açan bir el",
            alt_en: "A hand unlocking a screen"
          },
          {
            src: "/images/module4/device_update_01.png",
            alt_tr: "Telefon güncelleme bildirimi",
            alt_en: "Phone update notification"
          },
          {
            src: "/images/module4/cloud_backup_01.png",
            alt_tr: "Bulut yedekleme simgesi",
            alt_en: "Cloud backup icon"
          },
          {
            src: "/images/module4/m4_poster_device_security_tr.png",
            alt_tr: "Cihaz bakımını simgeleyen görsel",
            alt_en: "Visual showing device care"
          }
        ],
        activity: {
          type: "mini_quiz",
          title: "Mini Quiz: Cihaz Güvenliği Kontrolü",
          description: "Hızlıca cevap ver, temel bilgileri hatırla.",
          questions: [
            {
              type: "tf",
              question: "Ekran kilidi, telefonunu hiç yalnız bırakmasan da işe yarar.",
              answer: true,
              explanation: "Kaza her zaman olabilir ve kilit her durumda korur."
            },
            {
              type: "mcq",
              question: "Güncellemeler neden önemlidir?",
              options: [
                "Sadece renkleri değiştirir",
                "Güvenlik açıklarını kapatır ve hataları düzeltir",
                "Fotoğrafları siler",
                "İnterneti kapatır"
              ],
              answerIndex: 1,
              explanation: "Güncellemeler güvenlik sorunlarını düzeltir."
            },
            {
              type: "tf",
              question: "Yedekleme, kayıp yaşarsan dosyaları geri getirir.",
              answer: true,
              explanation: "Yedek, geri dönmek için bir kopyadır."
            }
          ]
        }
      },
      {
        id: 2,
        title: "Zararlı Yazılımlar ve Güvenli İndirme",
        intro:
          "İnternetteki her dosya dost değildir. Bazı indirmeler virüs ya da tuzak saklar.",
        content: [
          "Zararlı yazılım cihazı yavaşlatır, reklâm gösterir ya da verini çalabilir.",
          "En güvenli indirmeler resmi mağaza ve güvenilir sitelerden gelir.",
          "Ücretsiz oyun parası ya da hile vaatleri sık görülen tuzaklardır.",
          "Yüklemeden önce ad, yorum ve boyut kontrolü yap. Sahte uygulamalar gerçeğe çok benzer.",
          "Şüphe duyarsan bir yetişkine sor. Küçük bir soru büyük sorunları önler."
        ],
        images: [
          {
            src: "/images/module4/m4_poster_malware_tr.png",
            alt_tr: "Zararlı yazılım uyarısı ekranı",
            alt_en: "Malware warning screen"
          },
          {
            src: "/images/module4/m4_poster_malware_tr.png",
            alt_tr: "Güvenli uygulama mağazası simgesi",
            alt_en: "Safe app store icon"
          },
          {
            src: "/images/module4/m4_poster_malware_tr.png",
            alt_tr: "Sahte uygulama tuzağı görseli",
            alt_en: "Fake app trap visual"
          },
          {
            src: "/images/module4/m4_poster_malware_tr.png",
            alt_tr: "Yorumları ve puanları kontrol etme",
            alt_en: "Checking reviews and ratings"
          }
        ],
        activity: {
          type: "mini_quiz",
          title: "Mini Quiz: İndirme Dedektifi",
          description: "Her soruda daha güvenli seçeneği bul.",
          questions: [
            {
              type: "mcq",
              question: "Bir uygulamayı nereden indirmek daha güvenlidir?",
              options: [
                "Rastgele bir site",
                "Resmi uygulama mağazası",
                "Açılır reklam penceresi",
                "Tanımadığın birinin linki"
              ],
              answerIndex: 1,
              explanation: "Resmi mağazalar uygulamaları daha sık kontrol eder."
            },
            {
              type: "tf",
              question: "Arkadaşım kullandıysa ücretsiz hile aracı her zaman güvenlidir.",
              answer: false,
              explanation: "Arkadaşlar da zararlı dosyalarla kandırılabilir."
            },
            {
              type: "mcq",
              question: "Yüklemeden önce neye bakmalısın?",
              options: [
                "Sadece ikon rengine",
                "Uygulama adına, yorumlara ve boyuta",
                "Emojilerin sayısına",
                "Hiçbir şeye bakmadan yüklemeye"
              ],
              answerIndex: 1,
              explanation: "Detaylar sahte uygulamayı yakalamaya yardım eder."
            }
          ]
        },
        game: {
          type: "word_puzzle",
          title: "Kelime Oyunu: Güvenli İndirme Terimleri",
          description: "Aşağıdaki güvenlik kelimelerini bularak bulmacayı çöz.",
          words: ["GUVEN", "VIRUS", "YEDEK", "SIFRE", "BULUT", "SIBER", "TUZLA"]
        }
      },
      {
        id: 3,
        title: "Uygulama İzinleri ve Gizlilik Ayarları",
        intro:
          "Uygulamalar izin ister ama her istek mantıklı değildir. Onay vermek senin kararındır.",
        content: [
          "İzinler birer kapıdır. Kamera uygulaması kamera ister, hesap makinesi istememelidir.",
          "Bir uygulama fazla izin istiyorsa, istemediğin verileri toplayabilir.",
          "Gizlilik ayarları, paylaşımlarını kimlerin görebileceğini belirler.",
          "Konum paylaşımını ihtiyaç yoksa kapat. Konumun özel bir bilgidir.",
          "İzinleri düzenli kontrol et. Fikrini değiştirip her zaman güncelleyebilirsin."
        ],
        images: [
          {
            src: "/images/module4/m4_poster_privacy_tr.png",
            alt_tr: "Uygulama izinleri ekranı",
            alt_en: "App permissions screen"
          },
          {
            src: "/images/module4/m4_privacy_permissions.png",
            alt_tr: "Konum izni aç/kapat düğmesi",
            alt_en: "Location permission toggle"
          },
          {
            src: "/images/module4/m4_poster_privacy_tr.png",
            alt_tr: "Gizlilik ayarları menüsü",
            alt_en: "Privacy settings menu"
          },
          {
            src: "/images/module4/m4_poster_privacy_tr.png",
            alt_tr: "Veri paylaşımını azaltma simgesi",
            alt_en: "Data minimization icon"
          }
        ],
        activity: {
          type: "flashcards",
          title: "Flashcard: İzin Mantığı",
          description: "Kartı çevir, doğru yaklaşımı gör.",
          cards: [
            {
              front: "Kamera uygulaması kamera erişimi istiyor",
              back: "Mantıklı. Uygulama bununla çalışır."
            },
            {
              front: "El feneri uygulaması kişilere erişim istiyor",
              back: "Şüpheli. Kişilere ihtiyacı yok."
            },
            {
              front: "Oyun uygulaması konumu sürekli istiyor",
              back: "Gerekmedikçe kapatmayı düşün."
            },
            {
              front: "Fotoğraf düzenleyici galeriye erişim istiyor",
              back: "Düzenleme için mantıklıdır."
            }
          ]
        },
        game: {
          type: "password_game",
          title: "Etkinlik: Güçlü Parola Oluştur",
          description: "Parolanı yaz ve ne kadar güçlü olduğunu gör.",
          tips: [
            "En az 8-12 karakter kullan.",
            "Büyük/küçük harf ve rakam karıştır.",
            "Tahmin edilebilir kelimelerden kaçın."
          ]
        }
      },
      {
        id: 4,
        title: "Ortak Ağlar, Wi-Fi Güvenliği ve Oturum Kapatma",
        intro:
          "Halka açık Wi-Fi kalabalık bir otobüs gibidir. Kullanabilirsin ama eşyana dikkat etmelisin.",
        content: [
          "Ortak ağlar aynı anda birçok kişiyi taşır. Bu yüzden daha az gizlidir.",
          "Önemli hesaplara ortak ağda girmekten kaçın. Ev ya da okul ağını bekle.",
          "Zorundaysan, parola ve ödeme girişi yapma. Sadece genel sitelere bak.",
          "Ortak cihazlarda mutlaka çıkış yap. Bu, kapıyı kilitlemek gibidir.",
          "İşin bitince ağı unut seçeneğini kullan. Böylece cihazın otomatik bağlanmaz."
        ],
        images: [
          {
            src: "/images/module4/m4_poster_wifi_tr.png",
            alt_tr: "Ortak Wi-Fi ağına bağlanan cihazlar",
            alt_en: "Devices connected to public Wi-Fi"
          },
          {
            src: "/images/module4/m4_poster_wifi_tr.png",
            alt_tr: "Oturumu kapatmayı gösteren ikon",
            alt_en: "Icon showing sign out"
          },
          {
            src: "/images/module4/m4_poster_wifi_tr.png",
            alt_tr: "Güvenli ağ rozeti",
            alt_en: "Secure network badge"
          },
          {
            src: "/images/module4/m4_poster_wifi_tr.png",
            alt_tr: "Ağı unut seçeneği",
            alt_en: "Forget network option"
          }
        ],
        activity: {
          type: "sorter",
          title: "Sırala: Güvenli mi Riskli mi?",
          description: "Her davranışı uygun kutuya yerleştir.",
          categories: [
            { id: "safe", label: "Güvenli Seçim" },
            { id: "risky", label: "Riskli Seçim" }
          ],
          items: [
            { id: "wifi1", text: "Ortak Wi-Fi ile ödev hesabına girmek", correctCategory: "risky" },
            { id: "wifi2", text: "Ortak Wi-Fi ile haber okumak", correctCategory: "safe" },
            { id: "wifi3", text: "Paylaşılan bilgisayarda çıkış yapmak", correctCategory: "safe" },
            { id: "wifi4", text: "Kafe bilgisayarına şifre kaydetmek", correctCategory: "risky" }
          ]
        },
        game: {
          type: "card_match",
          title: "Eşleştir: Tehdit ve Korunma",
          description: "Tehditleri doğru korunma yöntemiyle eşleştir.",
          pairs: [
            { term: "Açık Wi-Fi", def: "Şifre ve ödeme girişi yapmamak" },
            { term: "Paylaşılan Bilgisayar", def: "Oturumu kapatmak" },
            { term: "Kaydedilmiş Şifre", def: "Tarayıcıdan kaldırmak" },
            { term: "Otomatik Bağlan", def: "Kapatmak" },
            { term: "Şüpheli Ağ Adı", def: "Bağlanmamak" }
          ]
        }
      },
      {
        id: 5,
        title: "Dijital Vatandaşlık ve Yardım Alma",
        intro:
          "Güvende olmak sadece cihazla ilgili değildir. Nasıl davrandığımız da önemlidir.",
        content: [
          "Dijital vatandaş saygılı ve naziktir. Paylaşmadan önce düşünür.",
          "Siber zorbalık, birini üzen mesajlar, şakalar ya da görseller olabilir.",
          "Kendini güvensiz hissedersen cevap verme. Kanıt sakla ve güvendiğin bir yetişkine söyle.",
          "Engelle ve bildir araçlarını kullan. Bu araçlar seni korumak için vardır.",
          "Bir arkadaşına destek olmak çok değerlidir. Sessiz kalmamak, zararı azaltır."
        ],
        images: [
          {
            src: "/images/module4/m4_poster_citizenship_tr.png",
            alt_tr: "Dijital vatandaşlık davranışları",
            alt_en: "Digital citizenship behaviors"
          },
          {
            src: "/images/module4/m4_cyberbullying_awareness.png",
            alt_tr: "Siber zorbalığa dur de posteri",
            alt_en: "Stop cyberbullying poster"
          },
          {
            src: "/images/module4/m4_poster_citizenship_tr.png",
            alt_tr: "Bildir ve engelle araçları",
            alt_en: "Report and block tools"
          },
          {
            src: "/images/module4/m4_poster_citizenship_tr.png",
            alt_tr: "Yardım istemeyi gösteren görsel",
            alt_en: "Visual of asking for help"
          }
        ],
        activity: {
          type: "mini_quiz",
          title: "Mini Quiz: Nazik ve Güvenli Ol",
          description: "En saygılı ve güvenli cevabı seç.",
          questions: [
            {
              type: "tf",
              question: "Bir mesaj birini üzüyorsa siber zorbalık olabilir.",
              answer: true,
              explanation: "İnternetteki sözler de gerçek hayatta olduğu gibi etkiler."
            },
            {
              type: "mcq",
              question: "Zorbalık görürsen ne yapmalısın?",
              options: [
                "Uyum sağlamak için katılmak",
                "Kanıtı saklayıp bir yetişkine söylemek",
                "Kötü bir şakayla cevap vermek",
                "Daha çok kişiye yaymak"
              ],
              answerIndex: 1,
              explanation: "Cevap verme, kanıt sakla ve yardım iste."
            },
            {
              type: "tf",
              question: "Engelle ve bildir araçları işe yarar.",
              answer: true,
              explanation: "Bu araçlar zararı azaltır ve seni korur."
            }
          ]
        }
      }
    ],
    scenario: {
      title: "Senaryolu Quiz: Hafta Sonu Sohbet Grubu",
      description:
        "Hikayeyi takip et, güvenli ve saygılı seçimler yap. Her cevap geri bildirim verir."
    }
  }
};

export default MODULE4_TR;
