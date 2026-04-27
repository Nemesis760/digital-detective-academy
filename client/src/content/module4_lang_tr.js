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
          "Ekran kilidi, cihazının ilk ve en güçlü savunma hattıdır. Telefonunu kaybetsen ya da biri eline geçirse, PIN, desen veya parmak izi sayesinde kişisel bilgilerine ulaşamazlar. Ekran kilidi olmayan bir telefon, kapısı açık bırakılmış bir ev gibidir.",
          "Güncellemeler yalnızca yeni özellikler getirmez; kötü kişilerin istismar ettiği güvenlik açıklarını da kapatır. Bir yazılımda hata bulunduğunda üretici firma bunu gideren bir güncelleme yayınlar. 'Sonra yapayım' demek, o açığı bir süre daha açık bırakmak demektir.",
          "Yedekleme, tüm fotoğraf ve dosyalarının güvenli bir kopyasını saklamaktır. Telefonun çalınsa ya da bozulsa bile bulut yedeklemesi sayesinde hiçbir şey kalıcı olarak kaybolmaz. Düzenli yedekleme yapmak, dijital hayatın için bir güvenlik sigortası işlevi görür.",
          "Okul hesabını oyun veya sosyal medya hesabından ayırmak, olası bir ihlalden etkilenecek alanı küçültür. Bir hesabın ele geçirilse bile diğer hesapların güvende kalması için farklı şifreler kullanmak çok önemlidir.",
          "Kilitle, güncelle, yedekle — bu üç basit alışkanlık günde sadece birkaç dakika alır. Dijital güvenlik büyük ve karmaşık değildir; küçük ama tutarlı adımlardan oluşur ve zamanla ikinci doğan hâline gelir."
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
          "Zararlı yazılım (malware), cihazına gizlice sızan ve zarar veren bir programdır. Cihazını yavaşlatabilir, sürekli reklam gösterebilir ya da şifre ve banka bilgilerini çalabilir. Saldırgan bu yazılımı çoğunlukla masum görünen bir dosya veya uygulama içine gizler.",
          "En güvenli indirmeler, uygulamaları denetleyen resmi mağazalardan (Google Play, App Store) veya üreticinin kendi sitesinden yapılanlardır. Bu mağazalar uygulamaları zararlı yazılımlara karşı kontrol eder ve şüpheli olanları kaldırır. Rastgele bir web sitesinden indirilen dosyalarda bu güvence yoktur.",
          "Ücretsiz oyun parası, hile kodu ya da premium özellik vaadiyle sunulan bağlantılar, en yaygın dijital tuzaklardandır. Bu bağlantılar seni sahte bir siteye yönlendirerek zararlı yazılım indirtebilir ya da hesap bilgilerini çalabilir. Gerçek bir uygulama hiçbir zaman resmi kanallar dışında ücretsiz ödül vaat etmez.",
          "Uygulama yüklemeden önce adını, yorum sayısını ve dosya boyutunu dikkatlice kontrol et. Sahte uygulamalar gerçek uygulamaların logosuna ve ismine çok benzer; fark genellikle yorum eksikliğinde ya da şişirilmiş dosya boyutunda gizlidir. Birkaç dakikalık araştırma, büyük bir güvenlik ihlalini önleyebilir.",
          "Bir dosya veya uygulama sana şüpheli geldiyse, hemen bir yetişkine danış. Utanmak ya da 'abartıyorum' diye düşünmek yerine sormak, en akıllıca seçimdir. Dijital güvenlikte küçük bir soru, büyük bir felaketi önleyebilir."
        ],
        images: [
          {
            src: "/images/module4/m4_malware_1_tr.png",
            alt_tr: "Zararlı yazılım cihazı etkiler",
            alt_en: "Malware affecting a device"
          },
          {
            src: "/images/module4/m4_malware_2_tr.png",
            alt_tr: "Resmi mağazadan güvenli indirme",
            alt_en: "Safe download from official store"
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
          "Bir uygulama yüklendiğinde kamera, mikrofon, konum veya kişiler gibi izinler ister. Bu izinler birer kapı gibidir: yalnızca uygulamanın gerçekten ihtiyaç duyduğu kapıları açman gerekir. Kamera uygulaması kameraya erişmek ister, ama el feneri uygulamasının kişilerine erişmesi mantıklı değildir.",
          "Bir uygulama fazla sayıda veya alakasız izin istiyorsa, ihtiyacın olmayan verileri topluyor olabilir. Bu veriler reklam şirketlerine satılabilir ya da kötü niyetli kişilerin eline geçebilir. İzin vermeden önce kendinize şunu sor: 'Bu uygulamanın bu bilgiye gerçekten ihtiyacı var mı?'",
          "Gizlilik ayarları, paylaşımlarını kimlerin görebileceğini belirlediğin bir kontrol panelidir. Sosyal medya hesaplarını 'Herkese Açık' yerine 'Yalnızca Arkadaşlar' olarak ayarlamak, yabancıların profilini görmesini engeller. Bu ayarları düzenli olarak kontrol etmek, zamanla değişebilen varsayılan ayarlara karşı seni korur.",
          "Konum bilgisi en hassas kişisel verilerden biridir; nerede olduğunu ve günlük rutinini ele verir. İhtiyaç duymadığın uygulamalarda konum paylaşımını kapat ve 'Her Zaman' yerine 'Yalnızca Uygulamayı Kullanırken' seçeneğini tercih et.",
          "Bir kez verilen izinleri sonradan geri alabilirsin; bu haklardan vazgeçmişsin anlamına gelmez. Ayarlar menüsünden uygulamaların izinlerini düzenli olarak gözden geçir ve artık kullanmadığın uygulamaların erişimlerini kapat. Verilerini yönetmek, dijital kimliğinin sahibi olmaktır."
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
          "Ortak Wi-Fi ağları aynı anda onlarca, hatta yüzlerce kişi tarafından kullanılır. Bu kalabalık ortamda iletişimini izleyen biri çıkabilir ve şifrelerini, mesajlarını ya da ödeme bilgilerini ele geçirebilir. Ortak ağda göndereceğin her veri, mühürsüz bir zarfa benzer.",
          "Okul e-postası, ödev portalı veya ödeme gerektiren siteler gibi önemli hesaplara ortak ağda girmekten kaçın. Bu işlemleri ev ya da okul ağı gibi güvendiğin ortamlara ertelemek riski büyük ölçüde azaltır. Birkaç dakika beklemek, ciddi bir veri ihlalinden seni koruyabilir.",
          "Ortak ağ kullanmak zorundaysan yalnızca haber okumak veya video izlemek gibi kişisel veri gerektirmeyen işlemler yap. Şifre, kart bilgisi veya özel mesaj gibi hassas içeriklerden uzak dur. 'Kimse bana saldırmaz ki' diye düşünme; ortak ağ saldırıları otomatik araçlarla kolayca gerçekleştirilir.",
          "Paylaşılan ya da kütüphane bilgisayarlarında işin bittiğinde mutlaka oturumu kapat. Oturumu açık bırakmak, anahtarı kilitte bırakmak gibidir; arkandan gelen biri hesabına erişebilir. Tarayıcının 'Şifreyi Kaydet' sorusuna hayır de ve geçmişi temizle.",
          "Bir ağa bağlandıktan sonra 'Ağı Unut' seçeneğini kullanmak, cihazının ileride o ağa otomatik bağlanmasını önler. Özellikle alışveriş merkezi veya kafe gibi yerlerdeki açık ağlar için bu adım kritiktir. Otomatik bağlantı, farkında olmadan risk altına girmenin en yaygın yollarından biridir."
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
          "Dijital vatandaşlık, teknolojiyi yalnızca iyi kullanmak değil, başkalarına saygılı ve etik davranmak demektir. Çevrimiçi ortamda söylediklerin ve paylaşımların gerçek hayattaki kadar etkili ve kalıcı olabilir. Paylaşmadan önce 'Bu gönderi birini incitir mi?' diye sormak, iyi bir dijital vatandaşın en önemli alışkanlığıdır.",
          "Siber zorbalık yalnızca açık hakaretlerle sınırlı değildir; birini dışlayan grup sohbetleri, izinsiz paylaşılan fotoğraflar ya da tekrarlayan rahatsız edici mesajlar da siber zorbalık kapsamına girer. Mağdur olan kişi bundan derin bir üzüntü duyabilir; bu nedenle 'sadece şaka' gibi görünen içerikler bile ciddi zarar verebilir.",
          "Çevrimiçi bir durumdan rahatsız ya da güvensiz hissedersen, saldırganla tartışmaya girme. Ekran görüntüsü alarak kanıt sakla ve ardından güvendiğin bir yetişkine — ebeveyn, öğretmen veya okul rehber öğretmeni — anlat. Sessiz kalmak zorunda değilsin; yardım istemek güçsüzlük değil, aksine cesaret işaretidir.",
          "Sosyal medya platformlarının 'Engelle' ve 'Bildir' araçları, seni rahatsız eden kişiyi durdurmanın ve platforma bildirmenin resmi yoludur. Bu araçları kullanmak hem kendini hem de sonraki olası mağdurları korur. Bir içerik veya kişi seni rahatsız ediyorsa bildirmek, sorumlu dijital vatandaşlığın bir parçasıdır.",
          "Bir arkadaşının siber zorbalığa uğradığını görürsen seyirci kalma. Ona doğrudan mesaj atarak 'Yanındayım' demek bile büyük bir fark yaratabilir. Araştırmalar, zorbalık olaylarında yanında biri olan kişilerin çok daha az olumsuz etkilendiğini göstermektedir."
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
