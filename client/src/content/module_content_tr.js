// Tüm Modüllerin Türkçe İçerikleri
// Bu dosya, 5 modüllü yeni yapıya uygun olarak güncellenmiştir.

export const MODULE_CONTENT_TR = {
  // ============================================================
  // MODÜL 1: BİLGİSAYAR DÜNYASINI KEŞFEDİYORUM
  // ============================================================
  module_1: {
    title: "Modül 1: Bilgisayar Dünyasını Keşfediyorum",
    subtitle: "🟢 Tek Modül - 5 Alt Başlık",
    sections: [
      {
        id: 1,
        title: "🟢 ALT BAŞLIK 1: BİLGİSAYAR NEDİR VE NASIL DÜŞÜNÜR?",
        subtitle: "Giriş, Mantık ve Temel Tanımlar",
        intro: "Bilgisayar; verileri hammadde olarak alan, işleyen, saklayan ve sonuçları bize ürün olarak sunan elektronik bir makinedir. Tıpkı bir fabrika gibi çalışır!",
        content: {
          "1.1": {
            title: "Bilgisayarın Tanımı (Fabrika Analojisi)",
            description: "Bilgisayar bir fabrika gibi çalışır:",
            points: [
              "Giriş (Hammadde): Klavye veya fare ile bilgi girişi",
              "İşlem (Üretim Bandı): İşlemcinin veriyi hesaplaması",
              "Çıkış (Ürün): Ekrandaki görüntü veya yazıcıdan çıkan kağıt"
            ],
            image: "/images/module1_factory_analogy.png",
            examples: [
              "Klavyede yazdığın zaman GİRİŞ yapıyorsun",
              "İşlemci yazdığını işleyip metne dönüştürür (İŞLEM)",
              "Monitör yazdığın metni gösterir (ÇIKIŞ)"
            ]
          },
          "1.2": {
            title: "Veri ve Bilgi Farkı (Yapboz Analojisi)",
            description: "Veri (Data): Tek başına anlamı olmayan parçalar. (Örn: '30', 'Mavi'). Yapboz parçası.\nBilgi (Information): Verilerin birleşip anlam kazanmış hali. (Örn: 'Hava sıcaklığı 30 derecedir'). Yapbozun tamamlanmış hali.",
            image: "/images/concept_data_info.png",
            examples: [
              "Veri: '25', 'kg', 'elma' → Bilgi: 'Elma 25 kg ağırlığında'",
              "Veri: 'kırmızı', 'hızlı', 'araba' → Bilgi: 'Hızlı kırmızı bir araba'"
            ]
          },
          "1.3": {
            title: "İkili Sistem (Bilgisayarın Dili)",
            description: "Bilgisayarlar bizim gibi A, B, C diye konuşmaz. Onlar sadece 0 ve 1 rakamlarını (Elektrik var/yok) bilir. Buna Binary (İkili) Kod denir.",
            image: "/images/module1_binary_system.png",
            examples: [
              "'A' harfi ikili sistemde: 01000001",
              "'5' sayısı ikili sistemde: 00000101",
              "Her tıklama, her resim, her ses 0 ve 1'lerden oluşur!"
            ]
          }
        },
        activity_title: "🎮 Aktivite: Veri Fabrikası",
        activity_desc: "Öğrenci 'Un (Veri)' çuvalını makineye sürükler, makineden 'Ekmek (Bilgi)' çıkar. Verinin bilgiye nasıl dönüştüğünü gösteren etkileşimli animasyon.",
        activity_type: "data_factory"
      },
      {
        id: 2,
        title: "🔵 ALT BAŞLIK 2: DONANIM (BİLGİSAYARIN VÜCUDU)",
        subtitle: "Fiziksel Parçalar ve Görevleri",
        intro: "Bilgisayarın elle tutulabilen, gözle görülebilen tüm metal ve plastik parçalarıdır. İnsan vücuduna benzer - tıpkı bizim kemiklerimiz, kaslarımız ve organlarımız olduğu gibi, bilgisayarın da fiziksel bileşenleri vardır.",
        content: {
          "2.1": {
            title: "Donanım Nedir?",
            description: "Bilgisayarın elle tutulabilen, gözle görülebilen tüm metal ve plastik parçalarıdır. İnsan vücuduna benzer - tıpkı bizim kemiklerimiz, kaslarımız ve organlarımız olduğu gibi, bilgisayarın da fiziksel bileşenleri vardır.",
            image: "/images/concept_hardware_software.png",
            examples: [
              "Monitör - gözlerimiz gibi (bize bilgi gösterir)",
              "Klavye - ağzımız gibi (iletişim kurmamızı sağlar)",
              "İşlemci - beynimiz gibi (her şeyi işler)"
            ]
          },
          "2.2": {
            title: "Çevre Birimleri (Giriş-Çıkış Tablosu)",
            description: "Birimler üç kategoriye ayrılır:",
            table: {
              "Giriş Birimleri (Duyu Organları)": {
                görev: "Bilgisayara dışarıdan veri gönderir",
                örnekler: "Klavye, Fare, Mikrofon, Web Kamerası, Tarayıcı",
                image: "/images/hardware_keyboard.png",
                images: {
                  klavye: "/images/hardware_keyboard.png",
                  fare: "/images/hardware_mouse.png"
                }
              },
              "Çıkış Birimleri (Konuşma/Mimik)": {
                görev: "İşlenen veriyi bize gösterir/duyurur",
                örnekler: "Monitör, Yazıcı, Hoparlör, Kulaklık, Projeksiyon",
                image: "/images/hardware_monitor.png",
                images: {
                  monitör: "/images/hardware_monitor.png",
                  yazıcı: "/images/hardware_printer.png",
                  kulaklık: "/images/hardware_headphones.png"
                }
              },
              "Giriş/Çıkış Birimleri": {
                görev: "Hem veri alır hem veri verir",
                örnekler: "Dokunmatik Ekran, USB Bellek, Modem",
                image: "/images/module1_io_devices.png"
              }
            }
          },
          "2.3": {
            title: "Sistem Birimleri (Kasanın İçi - Hayati Organlar)",
            description: "Anakart (İskelet): Tüm parçaları birbirine bağlayan karttır.\nİşlemci / CPU (Beyin): Tüm işlemleri yapar, bilgisayarın hızını belirler. Isındığı için üzerinde fan vardır.\nRAM Bellek (Tezgah / Geçici Hafıza): Bilgiler burada işlenir. Elektrik gidince silinir.\nSabit Disk / SSD (Kütüphane / Kalıcı Hafıza): Dosyalar burada saklanır. Elektrik gitse de silinmez.",
            image: "/images/module1_system_units.png",
            detailed_parts: [
              {
                name: "Anakart",
                role: "Tüm bileşenleri birbirine bağlar",
                analogy: "İskelet gibi - her şeyi bir arada tutar",
                image: "/images/hardware_motherboard.png"
              },
              {
                name: "İşlemci (CPU)",
                role: "Tüm hesaplamaları yapar",
                analogy: "Beyin - tüm kararları verir",
                image: "/images/hardware_cpu.png"
              },
              {
                name: "RAM",
                role: "Çalışırken geçici depolama",
                analogy: "Tezgah gibi - iş bitince temizlenir",
                image: "/images/hardware_ram.png"
              },
              {
                name: "Sabit Disk/SSD",
                role: "Kalıcı dosya depolama",
                analogy: "Kütüphane gibi - her şeyi güvende tutar",
                image: "/images/hardware_hdd.png"
              }
            ]
          }
        },
        activity_title: "🎮 Aktivite: Hotspot Görseli",
        activity_desc: "Açık bir bilgisayar kasası ekranda görüntülenir. Öğrenci parçaların üzerine tıkladıkça 'Ben İşlemciyim, beynim!' gibi açıklamalar çıkar.",
        activity_type: "hardware_hotspot"
      },
      {
        id: 3,
        title: "🟠 ALT BAŞLIK 3: YAZILIM (BİLGİSAYARIN RUHU)",
        subtitle: "Programlar, İşletim Sistemleri ve Lisanslar",
        intro: "Donanım parçalarına ne yapması gerektiğini söyleyen komutlardır. Yazılım olmadan donanım cansız bir metal yığınıdır. Yazılım bilgisayara hayat veren ruhtur!",
        content: {
          "3.1": {
            title: "Yazılım Nedir?",
            description: "Donanım parçalarına ne yapması gerektiğini söyleyen komutlardır. Yazılım olmadan donanım cansız bir metal yığınıdır. Yazılım bilgisayara hayat veren ruhtur!",
            image: "/images/concept_hardware_software.png",
            examples: [
              "Windows bilgisayarını çalıştıran yazılımdır",
              "Oyunlar eğlence sağlayan yazılımlardır",
              "Word belge yazmana yardımcı olan yazılımdır"
            ]
          },
          "3.2": {
            title: "Yazılım Türleri (Gemi Kaptanı ve Tayfalar)",
            description: "Sistem Yazılımı (Kaptan): Bilgisayarı yöneten ana yazılımdır. (Örn: Windows, macOS, Linux, Android, iOS).\nUygulama Yazılımı (Tayfalar): Özel işleri yapan programlardır. (Örn: Paint, Word, Scratch, Chrome).",
            image: "/images/concept_os.png",
            system_software: [
              "Windows - Her şeyi yönetir",
              "macOS - Apple'ın işletim sistemi",
              "Linux - Açık kaynak sistem",
              "Android - Telefon ve tabletler için",
              "iOS - iPhone ve iPad'ler için"
            ],
            application_software: [
              "Paint - Çizim yapmak için",
              "Word - Yazı yazmak için",
              "Chrome - İnternette gezinmek için",
              "Scratch - Programlama yapmak için",
              "Oyunlar - Eğlenmek için"
            ]
          },
          "3.3": {
            title: "Yazılım Lisans Türleri (Kullanım Hakları)",
            description: "Lisanslı: Parasını ödeyip satın aldığımız yazılım.\nÜcretsiz (Freeware): Tamamen bedava olan yazılım.\nDemo (Shareware): Belirli bir süre (30 gün) ücretsiz, sonra paralı olan yazılım.\nBeta: Henüz test aşamasında olan yazılım.",
            image: "/images/module1_software_licenses.png",
            license_types: [
              {
                type: "Lisanslı",
                description: "Para ödeyerek kullanırsın",
                example: "Microsoft Office, Adobe Photoshop"
              },
              {
                type: "Ücretsiz (Freeware)",
                description: "Tamamen bedava, sonsuza kadar",
                example: "Chrome Tarayıcı, VLC Media Player"
              },
              {
                type: "Demo (Shareware)",
                description: "Ücretsiz deneme, sonra ödersin",
                example: "WinRAR (30 gün ücretsiz)"
              },
              {
                type: "Beta",
                description: "Hala test aşamasında",
                example: "Oyunların erken versiyonları"
              }
            ]
          }
        },
        activity_title: "🎮 Aktivite: Kutuyu Aç - İşletim Sistemi Oyunu",
        activity_desc: "Kutulara tıklayarak işletim sistemi hakkındaki soruları aç ve doğru/yanlış cevaplarını ver!",
        activity_type: "box_game"
      },
      {
        id: 4,
        title: "🟣 ALT BAŞLIK 4: HAFIZA VE DOSYA YÖNETİMİ",
        subtitle: "Kapasite Birimleri ve Düzen",
        intro: "Bilgisayardaki dosyaların ne kadar yer kapladığını ölçeriz ve onları düzenli bir şekilde saklarız.",
        content: {
          "4.1": {
            title: "Kapasite Birimleri (Büyükten Küçüğe)",
            description: "Bit: En küçük birim (0 veya 1).\nByte: 1 Harf.\nKilobyte (KB): Bir sayfa yazı.\nMegabyte (MB): Bir MP3 şarkı veya fotoğraf.\nGigabyte (GB): Bir film veya oyun.\nTerabyte (TB): Binlerce film (Sabit disk boyutu).",
            image: "/images/module1_capacity_units.png",
            visual_comparison: [
              { unit: "Bit", size: "1 pirinç tanesi", example: "0 veya 1" },
              { unit: "Byte", size: "1 harf", example: "A" },
              { unit: "KB", size: "1 sayfa", example: "Bir metin belgesi" },
              { unit: "MB", size: "1 şarkı", example: "MP3 dosyası" },
              { unit: "GB", size: "1 film", example: "HD video" },
              { unit: "TB", size: "Kütüphane", example: "1000+ film" }
            ]
          },
          "4.2": {
            title: "Dosya Uzantıları (Dosyaların Soyadları)",
            description: "Dosya isminden sonraki nokta ve uzantı, o dosyanın türünü gösterir:\n.mp3 (Ses)\n.jpg (Resim)\n.mp4 (Video)\n.pdf (Kitap/Belge)\n.exe (Program - Çalıştırılabilir)",
            image: "/images/concept_file_management.png",
            common_extensions: [
              { ext: ".txt", type: "Metin", icon: "📝", example: "notlar.txt" },
              { ext: ".jpg/.png", type: "Resim", icon: "🖼️", example: "foto.jpg" },
              { ext: ".mp3/.wav", type: "Ses", icon: "🎵", example: "şarkı.mp3" },
              { ext: ".mp4/.avi", type: "Video", icon: "🎬", example: "film.mp4" },
              { ext: ".pdf", type: "Belge", icon: "📕", example: "kitap.pdf" },
              { ext: ".exe", type: "Program", icon: "⚙️", example: "oyun.exe" },
              { ext: ".zip/.rar", type: "Arşiv", icon: "📦", example: "dosyalar.zip" }
            ]
          },
          "4.3": {
            title: "Klasörleme Mantığı",
            description: "Dosyaları türlerine göre klasörlere ayırmak (Müziklerim, Resimlerim, Ödevlerim) aradığımızı bulmayı kolaylaştırır.",
            image: "/images/concept_file_management.png",
            organization_tips: [
              "Konuya göre klasör oluştur: Matematik, Fen, Sanat",
              "Türe göre klasör oluştur: Fotoğraflar, Videolar, Belgeler",
              "Açık isimler kullan: 'Ödev_2024' 'Şeyler' değil",
              "Masaüstünü temiz tut - klasör kullan!"
            ]
          }
        },
        activity_title: "🎮 Aktivite: Kart Çevirme (Flashcards)",
        activity_desc: "Kartın önünde '.jpg' yazar, öğrenci tıklar arkasında 'Resim Dosyası' yazar.",
        activity_type: "file_flashcards"
      },
      {
        id: 5,
        title: "🔴 ALT BAŞLIK 5: DİJİTAL SAĞLIK, ETİK VE GÜVENLİK",
        subtitle: "Kurallar, Tehlikeler ve Korunma",
        intro: "Bilgisayarı güvenli ve sağlıklı kullanmak, hem fiziksel hem de dijital tehlikelerden korunmak için önemlidir.",
        content: {
          "5.1": {
            title: "Ergonomi (Sağlıklı Oturuş)",
            description: "Ekran göz hizasında olmalı.\nDik oturulmalı.\nKollar dirsekten 90 derece kırılmalı.\nHer 20 dakikada bir gözler dinlendirilmeli.",
            image: "/images/module1_ergonomics.png",
            checklist: [
              "✅ Monitör göz hizasında",
              "✅ Sırt dik, ayaklar yerde",
              "✅ Kollar 90 derece",
              "✅ Her 20 dakikada mola ver",
              "✅ Göz kuruluğunu önlemek için sık göz kırp"
            ]
          },
          "5.2": {
            title: "Dijital Tehditler (Virüsler)",
            description: "Virüs: Bilgisayara bulaşıp dosyalara zarar veren yazılım.\nTruva Atı (Trojan): Faydalı gibi görünen ama arkada bilgi çalan yazılım.\nKorunma: Antivirüs programı kullanmak ve tanımadığımız e-postaları açmamak.",
            image: "/images/concept_troubleshooting.png",
            threat_types: [
              {
                name: "Virüs",
                description: "Dosya ve programlara zarar verir",
                protection: "Antivirüs yazılımı"
              },
              {
                name: "Truva Atı",
                description: "Güvenli görünür ama veri çalar",
                protection: "Bilinmeyen dosyaları indirme"
              },
              {
                name: "Phishing",
                description: "Şifre çalmaya çalışan sahte e-postalar",
                protection: "Gönderen e-postasını dikkatlice kontrol et"
              }
            ]
          },
          "5.3": {
            title: "Güçlü Şifre Oluşturma",
            description: "'123456' veya 'password' gibi şifreler kullanma!\nBüyük harf, küçük harf, rakam ve sembol kullan. (Örn: Mavi.Elpa?99)",
            image: "/images/password_security_hero.png",
            password_rules: [
              "✅ En az 8 karakter",
              "✅ Büyük ve küçük harf karışımı",
              "✅ Rakam içermeli",
              "✅ Sembol içermeli (!, @, #, $)",
              "❌ Kişisel bilgi kullanma",
              "❌ Yaygın kelimeler kullanma"
            ],
            examples: {
              bad: ["123456", "password", "qwerty", "admin"],
              good: ["Mavi.Elma?99", "Ben#Köpeğim2024!", "Güneş$Batım@2024"]
            }
          },
          "5.4": {
            title: "Telif Hakkı (Emeğe Saygı)",
            description: "İnternetteki resim, müzik ve oyunlar birilerinin emeğidir. İzinsiz kopyalamak veya korsan kullanmak suçtur ve etik değildir.",
            image: "/images/module1_copyright.png",
            scenarios: [
              {
                situation: "Oyunu ücretsiz indirmek (korsan)",
                wrong: "Telif hakkını ihlal eder, virüs içerebilir",
                right: "Oyunu satın al veya ücretsiz alternatifler kullan"
              },
              {
                situation: "İzinsiz birinin fotoğrafını kullanmak",
                wrong: "Telif hakkı ihlali",
                right: "İzin iste veya ücretsiz stok fotoğraflar kullan"
              }
            ]
          }
        },
        activity_title: "🎮 Aktivite: Senaryo Bazlı Test",
        activity_desc: "Soru: 'Ali internette çok beğendiği bir oyunu 'crack'li (korsan) olarak indirdi. Ali neyi ihlal etti?' Cevap: Telif Hakkı ve Güvenlik (Virüs riski).",
        activity_type: "scenario_test"
      },
    ],
  },

  // ============================================================
  // MODÜL 2: DİJİTAL AYAK İZİ VE ÇEVRİMİÇİ GİZLİLİK
  // ============================================================
  module_2: {
    title: "Modül 2: Dijital Ayak İzi ve Çevrimiçi Gizlilik",
    subtitle: "🔍 Dijital Kalkan ve Görünmez İzler",
    hero_image: "/images/digital_footprint_hero.png",
    sections: [
      {
        id: 1,
        title: "🔍 Dijital Ayak İzi Nedir?",
        intro: "Her dijital harekette bir iz bırakırsın. Bazen bilerek, bazen farkında olmadan. Bu izleri anlamak ve yönetmek çok önemli!",
        activity_title: "📖 Aktivite: Dijital Ayak İzi Hikayesi",
        activity_desc: "Dijital ayak izinin nasıl oluştuğunu ve etkilerini öğrenmek için bu interaktif hikayeyi oku.",
        activity_type: "story_mode",
        content: {
          "1.1": {
            title: "Dijital Ayak İzi Nedir?",
            description: "Dijital ayak izi, internette yaptığımız her hareketin geride bıraktığı izlerin tamamıdır. Sosyal medyada paylaştığımız fotoğraflar, yazdığımız yorumlar, arama geçmişimiz ve izlediğimiz videolar bu izlerin bir parçasıdır. İnternette attığımız her adım, tıpkı karda yürürken oluşan ayak izleri gibi görünmez ama kalıcı olabilir.",
            image: "/images/digital_footprint_concept_map.png",
            story_images: true, // Story mode'u aktif et
            points: [
              "Sosyal medyada paylaştığımız fotoğraflar ve yorumlar",
              "Arama geçmişimiz ve ziyaret ettiğimiz web siteleri",
              "İzlediğimiz videolar ve beğendiğimiz içerikler",
              "Gönderdiğimiz mesajlar ve e-postalar",
              "Çevrimiçi oyunlarda yaptığımız aktiviteler"
            ],
            examples: [
              "Instagram'da paylaştığın bir fotoğraf",
              "YouTube'da izlediğin bir video",
              "Google'da aradığın bir konu",
              "WhatsApp'ta gönderdiğin bir mesaj"
            ],
            quiz: [
              {
                type: "true_false",
                question: "Dijital ayak izi sadece sosyal medya paylaşımlarından oluşur.",
                answer: false
              },
              {
                type: "true_false",
                question: "İnternette yapılan her hareket iz bırakabilir.",
                answer: true
              },
              {
                type: "true_false",
                question: "Bir gönderiyi silince internetten tamamen yok olur.",
                answer: false
              },
              {
                type: "multiple_choice",
                question: "Dijital ayak izine hangisi örnektir?",
                options: [
                  { text: "A) Deftere not almak", correct: false },
                  { text: "B) İnternette video izlemek", correct: true },
                  { text: "C) Kitap okumak", correct: false },
                  { text: "D) Spor yapmak", correct: false }
                ]
              }
            ]
          },
          "1.2": {
            title: "Dijital Ayak İzinin Kalıcılığı",
            description: "İnternet asla unutmaz. Bu izler başkaları tarafından görülebilir, saklanabilir ve kopyalanabilir. Bir gönderi silinse bile ekran görüntüsü alınmış olabilir. Bu yüzden 'paylaşmadan önce düşünmek' dijital dünyada çok önemlidir.",
            image: "/images/digital_footprint_hero.png",
            points: [
              "Ekran görüntüleri alınmış olabilir",
              "Arşivlenmiş sayfalar ve veri tabanı yedekleri",
              "Sosyal medya arşivleri",
              "Başkalarının paylaştığı içerikler",
              "Arama motorlarının önbellekleri"
            ],
            examples: [
              "Sildiğin bir tweet'in ekran görüntüsü alınmış olabilir",
              "Arşivlenmiş web sayfalarında eski paylaşımların görünebilir",
              "Başkası senin fotoğrafını kaydetmiş olabilir"
            ]
          }
        },
        activity_type: "packet_delivery"
      },
      {
        id: 2,
        title: "🎯 Aktif ve Pasif Dijital Ayak İzi",
        intro: "Dijital ayak izimiz iki şekilde oluşur: Aktif ve Pasif. Her ikisini de anlamak önemlidir!",
        activity_title: "🎮 Aktivite: Hangi İz? Kart Oyunu",
        activity_desc: "Verilen durumları oku ve doğru kartı (Aktif/Pasif) seç.",
        content: {
          "2.1": {
            title: "Aktif Dijital Ayak İzi",
            description: "Aktif dijital ayak izi, kullanıcının bilerek ve isteyerek yaptığı paylaşımlardır. Instagram'a fotoğraf yüklemek, bir blog yazısı yazmak veya bir YouTube videosuna yorum yapmak buna örnektir. Kontrol tamamen bizdedir.",
            image: "/images/digital_footprint_concept_map.png",
            points: [
              "Sosyal medyada fotoğraf paylaşmak",
              "Blog yazısı yazmak",
              "Yorum yapmak veya beğeni vermek",
              "Durum güncellemesi paylaşmak",
              "Video yüklemek"
            ],
            examples: [
              "Instagram'da bir fotoğraf paylaşmak → Aktif",
              "YouTube'da bir videoya yorum yazmak → Aktif",
              "Facebook'ta bir gönderiyi beğenmek → Aktif"
            ],
            quiz: [
              {
                type: "true_false",
                question: "Kendi isteğimle yorum yapmak aktif ayak izidir.",
                answer: true
              }
            ]
          },
          "2.2": {
            title: "Pasif Dijital Ayak İzi",
            description: "Pasif dijital ayak izi ise biz farkında olmadan arka planda oluşur. İnternette gezinirken sitelerin bizi takip etmesi (çerezler), konum bilgilerimizin kaydedilmesi veya IP adresimiz buna dahildir. Reklamların son zamanlarda arattığımız konulara göre karşımıza çıkması pasif ayak izinin bir sonucudur.",
            image: "/images/digital_footprint_concept_map.png",
            points: [
              "Web sitelerinin çerezler (cookies) ile bizi takip etmesi",
              "Konum bilgilerimizin kaydedilmesi",
              "IP adresimizin kaydedilmesi",
              "Tarama geçmişimizin kaydedilmesi",
              "Cihaz bilgilerimizin toplanması"
            ],
            examples: [
              "Bir alışveriş sitesinde gezdin, bir şey almadın ama sonra o ürünün reklamını gördün → Pasif",
              "Harita uygulaması konumunu kullanıyor → Pasif",
              "Web sitesi çerezlerle seni takip ediyor → Pasif"
            ],
            quiz: [
              {
                type: "true_false",
                question: "Sitelerin beni takip eden çerezleri (cookies) aktif ayak izidir.",
                answer: false
              },
              {
                type: "true_false",
                question: "Konumumu kullanan bir harita uygulaması pasif iz bırakır.",
                answer: true
              }
            ]
          },
          "2.3": {
            title: "Aktif ve Pasif İzlerin Birleşimi",
            description: "Hem aktif hem pasif izler bir araya gelerek bizim dijital profilimizi oluşturur. Bu profil, şirketler ve platformlar tarafından reklam göstermek, içerik önermek veya davranış analizi yapmak için kullanılabilir.",
            points: [
              "Aktif ve pasif izler birlikte dijital profilimizi oluşturur",
              "Bu profil reklamlar için kullanılabilir",
              "İçerik önerileri bu profile göre yapılır",
              "Davranış analizi için kullanılabilir"
            ]
          }
        },
        activity_type: "card_matching"
      },
      {
        id: 3,
        title: "🔐 Kişisel Bilgiler ve Gizlilik",
        intro: "Kişisel bilgilerimiz dijital dünyada kimliğimizin anahtarları gibidir. Bu anahtarları nasıl koruyacağımızı öğrenelim!",
        activity_title: "📝 Quiz: Güvenli/Güvensiz Eşleştirme",
        activity_desc: "Verilen eylemleri oku ve uygun kutuya (Güvenli/Güvensiz) sürükle.",
        content: {
          "3.1": {
            title: "Kişisel Bilgi Nedir?",
            description: "Kişisel bilgi; tam adımız, ev adresimiz, telefon numaramız, TC kimlik numaramız, gittiğimiz okul ve doğum tarihimiz gibi bizi tanımlayan bilgilerdir. Bu bilgiler, dijital dünyada kimliğimizin anahtarları gibidir ve çok değerlidir.",
            image: "/images/privacy_detective_hero.png",
            points: [
              "Tam adımız ve soyadımız",
              "Ev adresimiz",
              "Telefon numaramız",
              "TC kimlik numaramız",
              "Gittiğimiz okul",
              "Doğum tarihimiz"
            ],
            examples: [
              "❌ Paylaşma: Ev adresi, telefon numarası, TC kimlik no",
              "✅ Paylaşabilirsin: Takma isim (nickname), genel ilgi alanları"
            ],
            quiz: [
              {
                type: "multiple_choice",
                question: "Aşağıdakilerden hangisi KİŞİSEL BİLGİ değildir?",
                options: [
                  { text: "A) Telefon numaran", correct: false },
                  { text: "B) Doğum tarihin", correct: false },
                  { text: "C) En sevdiğin renk", correct: true },
                  { text: "D) Ev adresin", correct: false }
                ]
              }
            ]
          },
          "3.2": {
            title: "Gizlilik Ayarları",
            description: "Kullandığımız uygulamalar bize 'gizlilik ayarları' sunar. Bu ayarlar, sanal evimizin kapısını kilitlemek gibidir. Profilimizi 'Herkese Açık' yapmak yerine, sadece tanıdığımız 'Arkadaşlarımıza' açık tutmak, yabancıların bilgilerimize erişmesini engeller.",
            image: "/images/game_privacy_settings.png",
            points: [
              "Profil gizlilik ayarlarını kontrol et",
              "'Sadece Arkadaşlar' seçeneğini kullan",
              "Kişisel bilgileri gizle",
              "Etiketlenmeleri kontrol et",
              "Konum paylaşımını kapat"
            ],
            examples: [
              "✅ Güvenli: Gizlilik ayarlarını 'Sadece Arkadaşlar' yapmak",
              "❌ Güvensiz: Profili 'Herkese Açık' yapmak",
              "✅ Güvenli: Sadece takma isim (nickname) kullanmak",
              "❌ Güvensiz: Tam adını ve soyadını paylaşmak"
            ],
            quiz: [
              {
                type: "true_false",
                question: "Ev adresimi sosyal medyada paylaşmakta bir sakınca yoktur.",
                answer: false
              },
              {
                type: "true_false",
                question: "Gizlilik ayarları, bilgilerimizi kimlerin göreceğini kontrol etmemizi sağlar.",
                answer: true
              },
              {
                type: "true_false",
                question: "Profilimi 'Herkese Açık' yapmak en güvenli yöntemdir.",
                answer: false
              },
              {
                type: "true_false",
                question: "Okul formamın logosunun göründüğü bir fotoğrafı profil resmi yapmamalıyım.",
                answer: true
              },
              {
                type: "multiple_choice",
                question: "Bir oyun uygulaması gereksiz yere senin 'Rehberine' erişmek isterse ne yapmalısın?",
                options: [
                  { text: "A) İzin vermelisin", correct: false },
                  { text: "B) Reddetmelisin", correct: true },
                  { text: "C) Arkadaşlarına sormalısın", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "İnternette paylaşmak için en güvenli bilgi hangisidir?",
                options: [
                  { text: "A) Ev adresin", correct: false },
                  { text: "B) Tuttuğun takımın bayrağı", correct: true },
                  { text: "C) Okulunun tam adı", correct: false }
                ]
              }
            ]
          },
          "3.3": {
            title: "Güvenli ve Güvensiz Paylaşımlar",
            description: "Profil fotoğrafımız genellikle gizlenemez. Bu nedenle, profil fotoğraflarında okul formamızın logosu veya evimizin dış görünüşü gibi bulunduğumuz yeri belli edecek detayları paylaşmaktan kaçınmalıyız.",
            points: [
              "Profil fotoğraflarında okul logosu olmamalı",
              "Ev adresi görünmemeli",
              "Telefon numarası paylaşılmamalı",
              "Şifreler asla paylaşılmamalı"
            ],
            examples: [
              "✅ Güvenli: Sadece takma isim (nickname) kullanmak",
              "❌ Güvensiz: Tam adını ve soyadını paylaşmak",
              "✅ Güvenli: Gizlilik ayarlarını 'Sadece Arkadaşlar' yapmak",
              "❌ Güvensiz: Şifreni 'kanka'na vermek"
            ]
          }
        },
        activity_type: "quiz"
      },
      {
        id: 4,
        title: "⏳ Dijital Ayak İzinin Geleceğe Etkisi",
        intro: "Bugün internette yaptığımız eğlenceli veya anlık bir paylaşım, yıllar sonra karşımıza çıkabilir. İnternet unutmuyor!",
        activity_title: "🎮 Aktivite: Gelecekte Sorun Olur mu?",
        activity_desc: "Verilen kartları oku ve 'Sorun Olur' veya 'Sorun Olmaz' kutusuna yerleştir.",
        content: {
          "4.1": {
            title: "Dijital İtibar",
            description: "Gelecekte iyi bir üniversiteye veya hayalinizdeki işe başvururken, yetkililer sizin 'dijital itibarınıza' bakabilirler. Dijital itibar, internette nasıl biri olarak göründüğünüzdür.",
            image: "/images/digital_footprint_hero.png",
            points: [
              "Üniversite başvurularında kontrol edilebilir",
              "İş başvurularında araştırılabilir",
              "Gelecekteki fırsatları etkileyebilir",
              "Olumlu veya olumsuz olabilir"
            ],
            examples: [
              "✅ Olumlu: Okul futbol takımında kazandığın madalyanın fotoğrafı",
              "❌ Olumsuz: Bir arkadaşınla dalga geçtiğin ve onu üzdüğün bir video",
              "❌ Olumsuz: Yasadışı veya tehlikeli bir şey yapıyormuş gibi görünen bir şaka fotoğrafı"
            ]
          },
          "4.2": {
            title: "Geçmiş Paylaşımların Etkisi",
            description: "Geçmişte yapılan kaba yorumlar, uygunsuz şakalar veya saldırgan paylaşımlar, gelecekteki büyük fırsatları kaçırmanıza neden olabilir. Bugünün 'komik' paylaşımı, yarının 'büyük sorunu' olmamalıdır.",
            points: [
              "Kaba yorumlar gelecekte sorun yaratabilir",
              "Uygunsuz şakalar itibarı zedeleyebilir",
              "Saldırgan paylaşımlar fırsatları kaçırabilir",
              "Ekran görüntüleri yıllar sonra ortaya çıkabilir"
            ],
            examples: [
              "Murat, sinirlendiği bir öğretmeni hakkında sosyal medyada çok kaba bir yorum yazdı. 5 yıl sonra üniversite başvurusunda bu yorum bulunabilir ve Murat'ın saygısız veya sorunlu biri olduğu düşünülebilir."
            ]
          }
        },
        activity_type: "card_matching"
      },
      {
        id: 5,
        title: "🛡️ Güvenli Dijital Davranışlar",
        intro: "Dijital dünyada güvende kalmak ve temiz bir ayak izi bırakmak için bazı kurallar vardır. Bu kuralları öğrenelim!",
        activity_title: "📝 Quiz: Güvenli Davranışlar",
        activity_desc: "Güvenli dijital davranışlar hakkındaki soruları cevapla.",
        content: {
          "5.1": {
            title: "T.H.I.N.K. Kuralı",
            description: "Paylaşmadan Önce Düşün (T.H.I.N.K.): Paylaşacağın şey Doğru mu (True)? Yararlı mı (Helpful)? İlham verici mi (Inspiring)? Gerekli mi (Necessary)? Nazik mi (Kind)? Değilse paylaşma.",
            image: "/images/digital_footprint_hero.png",
            points: [
              "T - True (Doğru): Bilgi doğru mu?",
              "H - Helpful (Yararlı): Başkalarına yararlı mı?",
              "I - Inspiring (İlham Verici): İlham veriyor mu?",
              "N - Necessary (Gerekli): Paylaşmak gerekli mi?",
              "K - Kind (Nazik): Nazik ve saygılı mı?"
            ],
            examples: [
              "Paylaşmadan önce bu 5 soruyu kendine sor",
              "Hepsine 'Evet' diyemiyorsan paylaşma"
            ]
          },
          "5.2": {
            title: "Gizlilik Ayarlarını Kontrol Et",
            description: "Sosyal medya hesaplarının ayarlarını düzenli olarak kontrol et ve sadece tanıdıklarına açık olduğundan emin ol.",
            points: [
              "Aylık gizlilik kontrolü yap",
              "Profil görünürlüğünü kontrol et",
              "Etiketlenme ayarlarını kontrol et",
              "Konum paylaşımını kapat",
              "Uygulama izinlerini gözden geçir"
            ]
          },
          "5.3": {
            title: "Güvenilir Kaynaklar",
            description: "İnternette gördüğün her bilgiye hemen inanma. Bilgiyi farklı ve güvenilir kaynaklardan doğrula (teyit et).",
            points: [
              "Bilgiyi farklı kaynaklardan kontrol et",
              "Güvenilir kaynakları kullan",
              "Sahte haberleri tespit et",
              "Doğrulamadan paylaşma"
            ]
          },
          "5.4": {
            title: "Bağlantılara Dikkat",
            description: "Tanımadığın kişilerden gelen mesajlardaki bağlantılara veya dosyalara asla tıklama.",
            points: [
              "Tanımadığın kişilerden gelen linklere tıklama",
              "Şüpheli dosyaları indirme",
              "Güvenilir kaynaklardan gelen linkleri kontrol et",
              "E-posta bağlantılarına dikkat et"
            ],
            quiz: [
              {
                type: "multiple_choice",
                question: "Paylaş düğmesine basmadan önce yapman gereken EN ÖNEMLİ şey nedir?",
                options: [
                  { text: "A) Hızlıca paylaşmak.", correct: false },
                  { text: "B) Durup, paylaşımın nazik ve güvenli olup olmadığını düşünmek.", correct: true },
                  { text: "C) Kaç beğeni alacağını tahmin etmek.", correct: false }
                ]
              }
            ]
          }
        },
        activity_type: "interactive_quiz"
      },
      {
        id: 6,
        title: "🎭 Senaryo Quiz - Zeynep'in Hikayesi",
        intro: "Zeynep (13 yaşında), sınıf arkadaşı Can'ın sınıfta uyuyakalmış çok komik ama biraz da utanç verici bir fotoğrafını gizlice çeker. Fotoğrafı sınıfın WhatsApp grubunda paylaşarak herkesi güldürmek ister. Tam fotoğrafı gönderecekken telefonuna indirdiği yeni bir oyun uygulamasından bir bildirim gelir: 'Bu uygulama rehberinize ve fotoğraflarınıza erişmek istiyor. İzin verilsin mi?'",
        activity_title: "📝 Senaryo Quiz: Zeynep'in Kararları",
        activity_desc: "Zeynep'in hikayesini oku ve soruları cevapla.",
        content: {
          "6.1": {
            title: "Senaryo Soruları",
            description: "Zeynep'in durumunu analiz et ve doğru kararları ver.",
            quiz: [
              {
                type: "multiple_choice",
                question: "Zeynep fotoğrafı paylaşırsa, bu nasıl bir dijital ayak izi türü olur?",
                options: [
                  { text: "A) Pasif dijital ayak izi", correct: false },
                  { text: "B) Aktif dijital ayak izi (kendi isteğiyle paylaşıyor)", correct: true },
                  { text: "C) Hiçbiri", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Zeynep'in, Can'ın fotoğrafını ondan izinsiz çekip paylaşması doğru mudur?",
                options: [
                  { text: "A) Evet, komik olduğu için paylaşabilir", correct: false },
                  { text: "B) Hayır, Can'ın kişisel gizliliğini ihlal eder ve onu rencide edebilir (dijital zorbalık sayılabilir)", correct: true },
                  { text: "C) Fark etmez", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Oyun uygulamasının 'rehber ve fotoğraf erişim isteğine' Zeynep ne cevap vermelidir?",
                options: [
                  { text: "A) Evet, hemen izin vermelidir", correct: false },
                  { text: "B) Hayır, reddetmelidir. Bir oyunun rehbere ihtiyacı yoktur.", correct: true },
                  { text: "C) Önemsemeden kapatmalıdır", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Bu senaryoda Zeynep için EN DOĞRU davranış zinciri nedir?",
                options: [
                  { text: "A) Fotoğrafı paylaş ve oyuna izin ver", correct: false },
                  { text: "B) Can'ın fotoğrafını silmeli ve paylaşmamalıdır (başkasına saygı). Ayrıca oyunun gereksiz erişim isteğini reddetmelidir (kendi gizliliğini koruma).", correct: true },
                  { text: "C) Sadece fotoğrafı paylaşma", correct: false }
                ]
              }
            ]
          }
        },
        activity_type: "interactive_quiz"
      }
    ],
  },

  // ============================================================
  // MODÜL 3: BİLGİSAYAR AĞLARI VE DİJİTAL İLETİŞİM
  // ============================================================
  module_3: {
    title: "Modül 3: Bilgisayar Ağları ve Dijital İletişim",
    subtitle: "🌐 Veri Yolculuğu ve Ağ Güvenliği",
    hero_image: "/images/module_networks/hero.png",
    sections: [
      {
        id: 1,
        title: "🌐 İnternet Nedir ve Veri Paketleri Nasıl Yolculuk Eder?",
        subtitle: "Dijital Dünyanın Otoyolları",
        intro: "İnternet, dünyadaki milyarlarca bilgisayarın birbirine bağlı olduğu dev bir ağdır. Tıpkı şehirler arası otoyollar gibi, veriler de bu ağ üzerinden yolculuk eder. Her mesaj, her fotoğraf, her video küçük paketlere bölünür ve hedefine ulaşır.",
        content: {
          "1.1": {
            title: "İnternet Nedir?",
            description: "İnternet, dünyadaki milyarlarca bilgisayarın, telefonun ve diğer cihazların birbirine bağlı olduğu dev bir ağdır. Tıpkı bir şehirdeki yollar gibi, veriler bu ağ üzerinden yolculuk eder. Bir arkadaşına mesaj gönderdiğinde, o mesaj binlerce kilometre uzaktaki bir sunucuya gider ve sonra arkadaşının telefonuna ulaşır.",
            image: "/images/module2/İnternet Nedir.png",
            points: [
              "İnternet, dünyadaki tüm cihazları birbirine bağlayan dev bir ağdır",
              "Milyarlarca bilgisayar, telefon ve tablet birbirine bağlıdır",
              "Veriler bu ağ üzerinden saniyeler içinde dünyanın her yerine ulaşır",
              "İnternet olmadan çevrimiçi oyun oynayamaz, video izleyemez veya mesaj gönderemezsin"
            ],
            examples: [
              "Bir video izlediğinde, o video binlerce kilometre uzaktaki bir sunucudan gelir",
              "Arkadaşına mesaj gönderdiğinde, mesaj önce bir sunucuya gider, sonra arkadaşının telefonuna ulaşır",
              "Bir web sitesine girdiğinde, o sitenin bilgileri dünyanın başka bir yerinden gelir"
            ]
          },
          "1.2": {
            title: "Veri Paketleri Nasıl Yolculuk Eder?",
            description: "Büyük dosyalar (video, fotoğraf, mesaj) küçük parçalara bölünür. Bu parçalara 'paket' denir. Her paket, tıpkı bir mektup gibi, hedef adresini içerir. Paketler farklı yollardan gidebilir ama hepsi aynı hedefe ulaşır. Varış noktasında paketler tekrar birleştirilir ve orijinal dosya oluşturulur.",
            image: "/images/module_networks/packet_travel.png",
            points: [
              "Büyük dosyalar küçük paketlere bölünür (tıpkı bir puzzle gibi)",
              "Her paket hedef adresini içerir",
              "Paketler farklı yollardan gidebilir ama hepsi aynı yere ulaşır",
              "Varış noktasında paketler tekrar birleştirilir",
              "Bu işlem saniyeler içinde gerçekleşir"
            ],
            examples: [
              "Bir fotoğraf gönderdiğinde, fotoğraf 100 küçük pakete bölünür",
              "Her paket farklı bir yoldan gidebilir",
              "Tüm paketler arkadaşının telefonuna ulaşır ve fotoğraf tekrar oluşturulur"
            ]
          },
          "1.3": {
            title: "İnternet Neden Önemlidir?",
            description: "İnternet sayesinde dünyanın her yerindeki insanlarla anında iletişim kurabiliriz. Bilgiye hızlıca ulaşabilir, oyun oynayabilir, video izleyebiliriz. Ancak bu büyük ağ, güvenlik açısından da dikkatli olmamızı gerektirir.",
            points: [
              "İnternet bilgiye hızlı erişim sağlar",
              "Dünyanın her yerindeki insanlarla iletişim kurmamızı sağlar",
              "Eğitim, eğlence ve iş için vazgeçilmezdir",
              "Ancak güvenlik konusunda dikkatli olmalıyız"
            ]
          }
        },
        activity_title: "🎮 Aktivite: Paket Teslim Oyunu",
        activity_desc: "Veri paketlerini doğru hedefe ulaştırmaya çalış. Paketleri yönlendir ve ağ üzerindeki yolculuklarını izle!",
        activity_type: "packet_delivery"
      },
      {
        id: 2,
        title: "🏠 Ağ Türleri: Ev, Okul ve Halka Açık Wi-Fi",
        subtitle: "Farklı Ağlar, Farklı Güvenlik Seviyeleri",
        intro: "İnternete bağlanmak için farklı ağ türleri kullanırız. Her ağ türünün kendine özgü özellikleri ve güvenlik seviyeleri vardır. Bunları anlamak, güvenli bir şekilde çevrimiçi olmamıza yardımcı olur.",
        content: {
          "2.1": {
            title: "Ev Ağı (Home Network)",
            description: "Ev ağı, evindeki tüm cihazları (bilgisayar, telefon, tablet, oyun konsolu) birbirine bağlayan ve onları internete bağlayan ağdır. Genellikle bir modem ve router ile oluşturulur. Ev ağı genellikle en güvenli ağ türüdür çünkü sadece sen ve ailen erişebilirsiniz.",
            image: "/images/module2/Ağ Türleri.png",
            points: [
              "Evindeki tüm cihazları birbirine bağlar",
              "Modem ve router ile oluşturulur",
              "Şifre korumalıdır, sadece sen ve ailen erişebilirsiniz",
              "En güvenli ağ türlerinden biridir"
            ],
            examples: [
              "Evde Wi-Fi şifren sadece ailen tarafından bilinir",
              "Komşular senin ağına bağlanamaz (şifre olmasa bile)",
              "Ev ağında özel bilgilerini paylaşmak daha güvenlidir"
            ]
          },
          "2.2": {
            title: "Okul Ağı (School Network)",
            description: "Okul ağı, okuldaki tüm bilgisayarları ve cihazları birbirine bağlayan ağdır. Öğretmenler ve öğrenciler bu ağa bağlanabilir. Okul ağı genellikle filtreler içerir (zararlı sitelere erişimi engeller) ve kullanıcı aktivitelerini izleyebilir.",
            image: "/images/module2/Ağ Türleri.png",
            points: [
              "Okuldaki tüm cihazları birbirine bağlar",
              "Öğretmenler ve öğrenciler erişebilir",
              "Zararlı sitelere erişimi engelleyen filtreler içerir",
              "Kullanıcı aktiviteleri izlenebilir"
            ],
            examples: [
              "Okulda oyun sitelerine erişim engellenmiş olabilir",
              "Öğretmenler hangi sitelere girdiğini görebilir",
              "Okul ağında dikkatli olmalısın"
            ]
          },
          "2.3": {
            title: "Halka Açık Wi-Fi (Public Wi-Fi)",
            description: "Halka açık Wi-Fi, kafeler, havaalanları, oteller gibi yerlerde bulunan ve herkesin kullanabileceği ağlardır. Bu ağlar genellikle şifresizdir veya herkese açık şifreleri vardır. Halka açık Wi-Fi'ler güvenli değildir çünkü başkaları da aynı ağa bağlıdır ve verilerinizi görebilir.",
            image: "/images/module2/Ağ Türleri.png",
            points: [
              "Kafeler, havaalanları, oteller gibi yerlerde bulunur",
              "Genellikle şifresizdir veya herkese açık şifreleri vardır",
              "Herkes bağlanabilir, bu yüzden güvenli değildir",
              "Özel bilgilerini (şifreler, banka bilgileri) paylaşmamalısın"
            ],
            examples: [
              "❌ Kafede halka açık Wi-Fi'de banka hesabına girmek",
              "❌ Havaalanında şifrelerini girmek",
              "✅ Sadece genel web sitelerine bakmak (haber, hava durumu)",
              "✅ Önemli işlemleri ev ağında yapmak"
            ]
          }
        },
        activity_title: "🎮 Aktivite: Ağ Türleri Eşleştirme",
        activity_desc: "Verilen durumları oku ve doğru ağ türü ile eşleştir. Hangi ağ türü daha güvenli?",
        activity_type: "card_matching"
      },
      {
        id: 3,
        title: "📡 Cihazlar Nasıl İletişim Kurar? (Modem, Router, Cihazlar)",
        subtitle: "Dijital İletişimin Mimarisi",
        intro: "Cihazların birbirleriyle iletişim kurması için özel cihazlar gerekir. Modem, router ve diğer ağ cihazları bu iletişimi sağlar. Her birinin farklı bir görevi vardır.",
        content: {
          "3.1": {
            title: "Modem Nedir?",
            description: "Modem, evindeki ağı internete bağlayan cihazdır. Tıpkı bir kapı gibi, modem dış dünyaya (internete) açılan kapıdır. İnternet sağlayıcısından (Türk Telekom, Superonline gibi) gelen internet sinyalini alır ve evindeki cihazlara dağıtır.",
            image: "/images/module_networks/modem.png",
            points: [
              "Ev ağını internete bağlar",
              "İnternet sağlayıcısından sinyal alır",
              "Dış dünyaya açılan kapı gibidir",
              "Genellikle router ile birleşik olarak gelir"
            ],
            examples: [
              "Modem olmadan internete bağlanamazsın",
              "İnternet sağlayıcısı modemi kurar",
              "Modem, internete açılan kapıdır"
            ]
          },
          "3.2": {
            title: "Router (Yönlendirici) Nedir?",
            description: "Router, evindeki cihazları birbirine bağlayan ve internete erişim sağlayan cihazdır. Wi-Fi sinyali yayar, böylece kablosuz olarak internete bağlanabilirsin. Router, evindeki cihazlar arasında trafiği yönetir - hangi cihazın hangi veriyi alacağını belirler.",
            image: "/images/module_networks/router.png",
            points: [
              "Evindeki cihazları birbirine bağlar",
              "Wi-Fi sinyali yayar",
              "Cihazlar arası trafiği yönetir",
              "Hangi cihazın hangi veriyi alacağını belirler"
            ],
            examples: [
              "Router sayesinde telefonun Wi-Fi ile internete bağlanır",
              "Router, bilgisayarın ve telefonun aynı anda internete bağlanmasını sağlar",
              "Router olmadan kablosuz bağlantı olmaz"
            ]
          },
          "3.3": {
            title: "Cihazlar Nasıl İletişim Kurar?",
            description: "Cihazlar (telefon, bilgisayar, tablet) router'a bağlanır. Router, bu cihazların isteklerini alır ve internete iletir. İnternetten gelen cevapları da ilgili cihaza yönlendirir. Tıpkı bir postacı gibi, router doğru paketleri doğru adreslere ulaştırır.",
            image: "/images/module2/Cihazlar Nasıl Haberleşir.png",
            points: [
              "Cihazlar router'a bağlanır",
              "Router istekleri internete iletir",
              "İnternetten gelen cevapları ilgili cihaza yönlendirir",
              "Her cihaz kendi adresine sahiptir"
            ],
            examples: [
              "Telefonun bir video izlemek istediğinde, router bu isteği internete iletir",
              "Video geldiğinde, router onu telefonuna yönlendirir",
              "Aynı anda bilgisayarın da internete bağlanabilir, router her ikisini de yönetir"
            ]
          }
        },
        activity_title: "🎮 Aktivite: Ağ Cihazları Hotspot",
        activity_desc: "Ağ cihazlarının üzerine tıkla ve her birinin görevini öğren. Modem, router ve diğer cihazlar nasıl çalışır?",
        activity_type: "network_hotspot"
      },
      {
        id: 4,
        title: "🔌 Kablolu vs Kablosuz İletişim",
        subtitle: "İki Farklı Yol, Aynı Hedef",
        intro: "Cihazlar internete iki şekilde bağlanabilir: kablolu (Ethernet) veya kablosuz (Wi-Fi). Her ikisinin de avantaj ve dezavantajları vardır.",
        content: {
          "4.1": {
            title: "Kablolu İletişim (Ethernet)",
            description: "Kablolu bağlantı, cihazın router'a bir kablo ile bağlanmasıdır. Bu bağlantı türü genellikle daha hızlı ve daha güvenilirdir. Oyun oynarken veya video izlerken daha az kesinti olur. Ancak cihazın router'a yakın olması gerekir.",
            image: "/images/module2/Kablolu ve Kablosuz iletişim.png",
            points: [
              "Daha hızlı ve güvenilir bağlantı",
              "Oyun ve video için daha iyi performans",
              "Daha az kesinti",
              "Ancak cihaz router'a yakın olmalı"
            ],
            examples: [
              "✅ Oyun konsolu genellikle kablolu bağlantı kullanır (daha hızlı)",
              "✅ Masaüstü bilgisayarlar kablolu bağlantı kullanabilir",
              "❌ Telefon ve tablet kablolu bağlantı kullanamaz (pratik değil)"
            ]
          },
          "4.2": {
            title: "Kablosuz İletişim (Wi-Fi)",
            description: "Kablosuz bağlantı, cihazın router'dan yayılan Wi-Fi sinyalini kullanarak internete bağlanmasıdır. Bu bağlantı türü daha esnektir çünkü cihazı istediğin yere taşıyabilirsin. Ancak kablolu bağlantıdan biraz daha yavaş olabilir ve sinyal gücüne bağlıdır.",
            image: "/images/module2/Kablolu ve Kablosuz iletişim.png",
            points: [
              "Daha esnek, cihazı istediğin yere taşıyabilirsin",
              "Kablo gerekmez",
              "Ancak kablolu bağlantıdan biraz daha yavaş olabilir",
              "Sinyal gücüne bağlıdır (router'a yakın olmak önemli)"
            ],
            examples: [
              "✅ Telefon ve tablet Wi-Fi kullanır",
              "✅ Laptop'lar genellikle Wi-Fi kullanır",
              "⚠️ Router'dan uzaklaştıkça sinyal zayıflar"
            ]
          },
          "4.3": {
            title: "Hangisini Kullanmalıyım?",
            description: "Her iki bağlantı türünün de kendine özgü kullanım alanları vardır. Oyun oynuyorsan veya hızlı internet istiyorsan kablolu bağlantı daha iyidir. Ancak esneklik istiyorsan Wi-Fi kullanabilirsin.",
            points: [
              "Oyun ve hızlı internet için: Kablolu bağlantı",
              "Esneklik ve hareket için: Wi-Fi",
              "Her ikisi de güvenlidir (ev ağında)",
              "Halka açık Wi-Fi'de dikkatli ol"
            ],
            examples: [
              "Oyun konsolu → Kablolu bağlantı",
              "Telefon → Wi-Fi",
              "Masaüstü bilgisayar → Kablolu bağlantı (mümkünse)",
              "Laptop → Wi-Fi (esneklik için)"
            ]
          }
        },
        activity_title: "🎮 Aktivite: Doğru/Yanlış Quiz",
        activity_desc: "Kablolu ve kablosuz iletişim hakkındaki ifadeleri oku ve doğru mu yanlış mı olduğunu belirle.",
        activity_type: "truth_or_troll"
      },
      {
        id: 5,
        title: "🛡️ Neden Ağ Güvenliği Önemlidir?",
        subtitle: "Dijital Dünyada Kendini Korumak",
        intro: "Ağ güvenliği, dijital dünyada kendimizi korumak için çok önemlidir. Güvensiz ağlara bağlanmak veya güvenlik önlemlerini ihmal etmek, kişisel bilgilerimizin çalınmasına neden olabilir.",
        content: {
          "5.1": {
            title: "Ağ Güvenliği Neden Önemlidir?",
            description: "Güvensiz ağlara bağlanmak, kişisel bilgilerimizin (şifreler, banka bilgileri, özel mesajlar) başkaları tarafından görülmesine neden olabilir. Kötü niyetli kişiler bu bilgileri çalabilir veya kötüye kullanabilir. Bu yüzden güvenli ağlar kullanmalı ve güvenlik önlemlerini almalıyız.",
            image: "/images/module2/Ağlarda güvenlik neden önemli.png",
            points: [
              "Güvensiz ağlarda kişisel bilgilerin çalınabilir",
              "Şifrelerin ve banka bilgilerin görülebilir",
              "Kötü niyetli kişiler bu bilgileri kötüye kullanabilir",
              "Güvenli ağlar kullanmalı ve güvenlik önlemlerini almalıyız"
            ],
            examples: [
              "❌ Halka açık Wi-Fi'de banka hesabına girmek",
              "❌ Şifresiz ağlara bağlanmak",
              "✅ Ev ağında özel bilgileri paylaşmak",
              "✅ Güçlü Wi-Fi şifresi kullanmak"
            ]
          },
          "5.2": {
            title: "Güvenli Ağ Kullanımı İpuçları",
            description: "Güvenli bir şekilde internete bağlanmak için bazı önemli ipuçları:",
            points: [
              "Ev ağında güçlü bir Wi-Fi şifresi kullan",
              "Halka açık Wi-Fi'de özel bilgilerini paylaşma",
              "Tanımadığın ağlara bağlanma",
              "Antivirüs yazılımı kullan",
              "Şüpheli bağlantılardan kaçın"
            ],
            examples: [
              "✅ Wi-Fi şifren en az 12 karakter olsun",
              "✅ Halka açık Wi-Fi'de sadece genel sitelere bak",
              "❌ Tanımadığın 'Ücretsiz Wi-Fi' ağlarına bağlanma",
              "✅ Önemli işlemleri ev ağında yap"
            ]
          },
          "5.3": {
            title: "Ağ Güvenliği Senaryoları",
            description: "Farklı durumlarda nasıl davranmalıyız?",
            points: [
              "Kafede halka açık Wi-Fi kullanırken: Sadece genel sitelere bak, şifre girme",
              "Ev ağında: Güvenli, özel bilgilerini paylaşabilirsin",
              "Okul ağında: Dikkatli ol, aktivitelerin izlenebilir",
              "Tanımadığın ağlar: Asla bağlanma"
            ],
            quiz: [
              {
                type: "true_false",
                question: "Halka açık Wi-Fi'de banka hesabıma girmek güvenlidir.",
                answer: false
              },
              {
                type: "true_false",
                question: "Ev ağında güçlü bir Wi-Fi şifresi kullanmak önemlidir.",
                answer: true
              },
              {
                type: "multiple_choice",
                question: "Hangi durumda özel bilgilerini paylaşabilirsin?",
                options: [
                  { text: "A) Halka açık Wi-Fi'de", correct: false },
                  { text: "B) Ev ağında", correct: true },
                  { text: "C) Tanımadığın bir ağda", correct: false },
                  { text: "D) Şifresiz bir ağda", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Ağ güvenliği neden önemlidir?",
                options: [
                  { text: "A) İnternet daha hızlı olur", correct: false },
                  { text: "B) Kişisel bilgilerin çalınmasını önler", correct: true },
                  { text: "C) Daha fazla oyun oynayabilirsin", correct: false },
                  { text: "D) Daha fazla video izleyebilirsin", correct: false }
                ]
              }
            ]
          }
        },
        activity_title: "📝 Quiz: Ağ Güvenliği",
        activity_desc: "Ağ güvenliği hakkındaki soruları cevapla ve bilgini test et.",
        activity_type: "interactive_quiz"
      }
    ],
    // Senaryo bazlı değerlendirme
    scenario_assessment: {
      title: "🎯 Senaryo Bazlı Değerlendirme",
      description: "Aşağıdaki senaryoyu oku ve doğru kararları ver.",
      scenarios: [
        {
          id: 1,
          situation: "Ali bir kafede oturuyor ve halka açık Wi-Fi'ye bağlanmış. Arkadaşı ona bir video göndermiş ve Ali bu videoyu izlemek istiyor. Ayrıca ödevini kontrol etmek için okul hesabına girmesi gerekiyor.",
          question: "Ali ne yapmalı?",
          options: [
            {
              text: "A) Hem videoyu izleyebilir hem de okul hesabına girebilir, halka açık Wi-Fi güvenlidir.",
              correct: false,
              feedback: "Halka açık Wi-Fi'de özel bilgilerini (okul hesabı) paylaşmamalısın. Video izlemek genel bir aktivite olduğu için sorun olmayabilir, ancak şifre gerektiren işlemler güvenli değildir."
            },
            {
              text: "B) Sadece videoyu izleyebilir, okul hesabına girmek için ev ağına bağlanmayı beklemelidir.",
              correct: true,
              feedback: "Doğru! Halka açık Wi-Fi'de genel aktiviteler (video izleme) yapılabilir, ancak özel bilgiler gerektiren işlemler (okul hesabı) ev ağında yapılmalıdır."
            },
            {
              text: "C) Hiçbir şey yapmamalı, halka açık Wi-Fi hiç güvenli değildir.",
              correct: false,
              feedback: "Halka açık Wi-Fi genel aktiviteler için kullanılabilir, ancak özel bilgiler gerektiren işlemler için güvenli değildir."
            }
          ]
        },
        {
          id: 2,
          situation: "Ayşe'nin evinde Wi-Fi şifresi yok. Komşuları ona şifresiz bir ağ olduğunu söylüyor ve Ayşe bu ağa bağlanmayı düşünüyor.",
          question: "Ayşe ne yapmalı?",
          options: [
            {
              text: "A) Şifresiz ağa bağlanabilir, sorun olmaz.",
              correct: false,
              feedback: "Şifresiz ağlar güvenli değildir. Başkaları bu ağa bağlanabilir ve verilerinizi görebilir."
            },
            {
              text: "B) Şifresiz ağa bağlanmamalı, güvenli bir ağ bulmalı veya kendi ağını kurmalıdır.",
              correct: true,
              feedback: "Doğru! Şifresiz ağlar güvenli değildir. Ayşe güvenli bir ağ bulmalı veya kendi güvenli ağını kurmalıdır."
            },
            {
              text: "C) Sadece genel sitelere bakarsa sorun olmaz.",
              correct: false,
              feedback: "Şifresiz ağlarda bile genel aktiviteler yaparken dikkatli olmalısın. Mümkünse güvenli bir ağ kullan."
            }
          ]
        }
      ]
    }
  },

  // ============================================================
  // MODÜL 4: ŞİFRE GÜVENLİĞİ VE HESAP KORUMA (ESKİ MODÜL 3)
  // ============================================================
  module_4: {
    title: "Modül 4: Şifre Güvenliği ve Hesap Koruma",
    subtitle: "🔐 Dijital Kasanın Anahtarları",
    hero_image: "/images/module4/locked_door_tablet_metaphor.png",
    sections: [
      {
        id: 1,
        title: "🔐 Şifre Nedir ve Neden Çok Önemlidir?",
        intro: "Şifre, dijital dünyadaki varlıklarımızı koruyan ilk ve en önemli savunma hattıdır. Tıpkı evimizin anahtarı gibi!",
        activity_title: "📝 Quiz: Şifre Güvenliği",
        activity_desc: "Şifre güvenliği hakkındaki soruları cevapla.",
        content: {
          "1.1": {
            title: "Şifre Nedir?",
            description: "Şifre, dijital dünyadaki varlıklarımızı koruyan ilk ve en önemli savunma hattıdır. Tıpkı evimizin anahtarı gibi, şifreler de özel alanımıza (e-posta, oyun hesabı, E-Okul, sosyal medya) girişi sağlar. Ancak dijital dünyada hırsızlar görünmezdir. Eğer birisi şifrenizi ele geçirirse buna 'hesap çalınması' (hacking) denir.",
            image: "/images/password_security_hero.png",
            points: [
              "Şifre dijital kimliğimizin anahtarıdır",
              "E-posta, oyun, sosyal medya hesaplarımıza giriş sağlar",
              "Şifre çalınırsa hesap çalınması (hacking) olur",
              "Şifreler diş fırçası gibidir: kimseyle paylaşılmaz ve sık sık değiştirilmelidir"
            ],
            examples: [
              "✅ Güvenli: Şifreni sadece sen bilirsin",
              "❌ Güvensiz: Şifreni arkadaşınla paylaşırsın",
              "✅ Güvenli: Her hesap için farklı şifre kullanırsın",
              "❌ Güvensiz: Tüm hesaplar için aynı şifreyi kullanırsın"
            ],
            quiz: [
              {
                type: "true_false",
                question: "Şifrem çalınırsa sadece oyun puanım gider, başka bir şey olmaz.",
                answer: false
              },
              {
                type: "true_false",
                question: "Şifreler dijital kimliğimizin anahtarıdır.",
                answer: true
              },
              {
                type: "true_false",
                question: "Güçlü şifre kullananların hesabı asla çalınmaz diyemeyiz ama çok zordur.",
                answer: true
              }
            ]
          },
          "1.2": {
            title: "Hesap Çalınırsa Ne Olur?",
            description: "Hesabınız çalınırsa ciddi sorunlar yaşayabilirsiniz:",
            points: [
              "Kimlik Hırsızlığı: Sizin adınıza arkadaşlarınıza kaba mesajlar atabilir veya dolandırmaya çalışabilirler",
              "Veri Kaybı: Yıllarca emek verdiğiniz oyun karakteriniz, fotoğraflarınız veya ödevleriniz silinebilir",
              "Casusluk: Özel mesajlarınızı okuyabilirler",
              "İtibar Kaybı: Sizin adınıza kötü şeyler paylaşabilirler"
            ],
            examples: [
              "Hacker sizin adınıza arkadaşlarınıza para isteyen mesajlar gönderebilir",
              "Oyun karakteriniz silinebilir veya eşyalarınız çalınabilir",
              "Özel fotoğraflarınız veya mesajlarınız paylaşılabilir"
            ]
          },
          "1.3": {
            title: "Tartışma Sorusu",
            description: "Evinin anahtarını sokaktan geçen birine verir misin? Peki, neden bazen internette tanımadığımız sitelere şifremizi veriyoruz?",
            points: [
              "Gerçek hayatta anahtarımızı tanımadığımız insanlara vermeyiz",
              "Dijital dünyada da aynı şekilde dikkatli olmalıyız",
              "Tanımadığımız sitelere şifre vermemeliyiz",
              "Şifre güvenliği sadece bir kural değil, dijital dünyada hayatta kalma becerisidir"
            ]
          }
        },
        activity_type: "quiz"
      },
      {
        id: 2,
        title: "🛡️ Kırılamayan Şifreler: 'Cümle Yöntemi'",
        intro: "Eskiden 'kedi123' gibi şifreler kullanılırdı ama artık bilgisayarlar bu şifreleri saniyeler içinde tahmin edebiliyor. Güçlü şifre oluşturmayı öğrenelim!",
        activity_title: "🎮 Aktivite: Şifre Atölyesi",
        activity_desc: "Verilen kelimeleri kullanarak güçlü şifre oluştur.",
        content: {
          "2.1": {
            title: "Güçlü Şifre İçin 3 Altın Kural",
            description: "Güçlü bir şifre oluşturmak için bu 3 kuralı mutlaka uygulayın:",
            image: "/images/password_security_hero.png",
            points: [
              "Karmaşıklık: Büyük harf (A), küçük harf (a), rakam (9) ve sembol (!,?,*) karıştırılmalıdır",
              "Uzunluk: Şifre ne kadar uzunsa, kırılması o kadar zordur. En az 10-12 karakter önerilir",
              "Tahmin Edilemezlik: Adınız, doğum yılınız veya '123456' gibi sıralı sayılar ASLA kullanılmamalıdır"
            ],
            examples: [
              "❌ Zayıf: kedi123 (çok kısa ve tahmin edilebilir)",
              "❌ Zayıf: Ahmet2024 (ad ve doğum yılı kullanılmış)",
              "✅ Güçlü: MaviFil!3Pizza (uzun, karmaşık, tahmin edilemez)"
            ]
          },
          "2.2": {
            title: "Yeni Yöntem: Cümle Şifreler (Passphrases)",
            description: "Aklınızda kalan saçma bir cümle kurun ve onu şifreye dönüştürün. Bu şifreyi hatırlamak kolaydır ama bir bilgisayarın kırması yıllar sürer!",
            points: [
              "Örnek Cümle: 'Mavi fil bahçede 3 pizza yedi!'",
              "Şifre: MaviFil!3Pizza",
              "Büyük harflerle başlayan kelimeler",
              "Rakamlar ve semboller ekleyin",
              "Hatırlaması kolay ama kırılması zor"
            ],
            examples: [
              "Cümle: 'Kırmızı araba hızlı gidiyor 5!'",
              "Şifre: KirmiziAraba!5Hizli",
              "Cümle: 'Yeşil elma ağaçta 7 tane!'",
              "Şifre: YesilElma@7Tane"
            ]
          },
          "2.3": {
            title: "Şifre Atölyesi Örneği",
            description: "Kelimeler: Yaz, Dondurma, 2024",
            points: [
              "Zayıf Örnek: yaz2024 (çok basit, tahmin edilebilir)",
              "Güçlü Örnek: Yaz!Dondurma2024? (karmaşık, uzun, sembol içeriyor)"
            ],
            examples: [
              "Kelimeleri birleştir",
              "Büyük harf kullan",
              "Sembol ekle (!, ?, @, #)",
              "Rakam ekle"
            ]
          }
        },
        activity_type: "password_smith"
      },
      {
        id: 3,
        title: "🎭 Sosyal Mühendislik ve Şifre Paylaşımı",
        intro: "Bazen hackerlar bilgisayar programı kullanmaz, kandırma yöntemini (Sosyal Mühendislik) kullanırlar. Sizin güveninizi kazanmaya çalışırlar.",
        activity_title: "📝 Quiz: Sosyal Mühendislik Senaryoları",
        activity_desc: "Verilen senaryolarda sosyal mühendislik tuzaklarını tespit et.",
        content: {
          "3.1": {
            title: "Sosyal Mühendislik Nedir?",
            description: "Bazen hackerlar bilgisayar programı kullanmaz, kandırma yöntemini (Sosyal Mühendislik) kullanırlar. Sizin güveninizi kazanmaya çalışırlar.",
            image: "/images/password_security_hero.png",
            points: [
              "Hackerlar sizi kandırmaya çalışır",
              "Güveninizi kazanmaya çalışırlar",
              "Bilgisayar programı yerine kandırma yöntemi kullanırlar",
              "Şifrenizi vermenizi isterler"
            ],
            examples: [
              "Sahte bir arkadaş gibi davranabilirler",
              "Acil bir durum varmış gibi yapabilirler",
              "Bedava bir şey vaat edebilirler"
            ]
          },
          "3.2": {
            title: "Arkadaş Tuzakları",
            description: "En yakın arkadaşınız Kerem, 'Hesabını ver, senin için şu zor bölümü geçeyim' diyebilir. Kerem kötü niyetli olmasa bile;",
            points: [
              "Kerem'in bilgisayarında virüs olabilir",
              "Kerem hesabınızı açık unutup başkasına kullandırabilir",
              "Kerem ile küsebilirsiniz ve o anki kızgınlıkla hesabınıza zarar verebilir",
              "Şifre, 'Sır' demektir. Sırlar, en yakın arkadaşlarla bile paylaşılmayan özel bilgilerdir"
            ],
            examples: [
              "❌ Yanlış: 'Tamam, şifrem 123456'",
              "✅ Doğru: 'Hayır, şifremi paylaşamam. Bu güvenli değil.'",
              "❌ Yanlış: 'Sadece bir kere, sorun olmaz'",
              "✅ Doğru: 'Şifreler asla paylaşılmaz'"
            ]
          },
          "3.3": {
            title: "İki Yol Ayrımı",
            description: "Şifre paylaşımında iki yol var:",
            points: [
              "Yol A: Şifreyi arkadaşına verdin → Arkadaşın virüslü bilgisayardan girdi → Hesap Çalındı ❌",
              "Yol B: 'Hayır' dedin → Hesabın sende kaldı → Güvendesin ✅"
            ],
            examples: [
              "Her zaman 'Hayır' demeyi öğren",
              "Şifrelerin özel olduğunu hatırla",
              "Arkadaşların iyi niyetli olsa bile şifre paylaşma"
            ]
          }
        },
        activity_type: "quiz"
      },
      {
        id: 4,
        title: "🕵️ Gelişmiş Kimlik Avı (Phishing) Dedektifliği",
        intro: "Kimlik avcıları, sahte web siteleri kurarak sizi oraya çekmeye çalışır. Bu siteler, orijinalinin (örneğin Instagram veya Roblox'un) kopyasıdır.",
        activity_title: "🎮 Aktivite: Siber Kelime Oyunu",
        activity_desc: "Siber güvenlik kelimelerini bul ve öğren!",
        content: {
          "4.1": {
            title: "Kimlik Avı (Phishing) Nedir?",
            description: "Kimlik avcıları, sahte web siteleri kurarak sizi oraya çekmeye çalışır. Bu siteler, orijinalinin (örneğin Instagram veya Roblox'un) kopyasıdır.",
            image: "/images/password_security_hero.png",
            points: [
              "Sahte web siteleri oluştururlar",
              "Orijinal sitelerin kopyasını yaparlar",
              "Sizi kandırmaya çalışırlar",
              "Şifrenizi çalmak isterler"
            ],
            examples: [
              "Sahte Instagram giriş sayfası",
              "Sahte Roblox hesap sayfası",
              "Sahte e-posta gönderimi"
            ]
          },
          "4.2": {
            title: "Sahte Bir Mesajı Nasıl Tanırsın? 4 İpucu",
            description: "Sahte mesajları tespit etmek için bu 4 ipucuna dikkat edin:",
            points: [
              "Aciliyet Hissi: 'Hemen yapmazsan hesabın kapanacak!' (Sizi panikletip düşünmenizi engellemek isterler)",
              "Bedava Vaadi: 'Bedava elmas/skin kazanmak için tıkla!' (Gerçek olamayacak kadar iyi teklifler tuzaktır)",
              "Yazım Hataları: Resmi kurumlar 'Meraba', 'Tikla' gibi hatalı yazılar yazmaz",
              "Adres Çubuğu (URL): instagram.com yerine lnstagram.com (küçük L harfi ile) veya instagram-giris.net gibi garip adresler"
            ],
            examples: [
              "❌ Sahte: 'Hemen tıkla yoksa hesabın kapanacak!'",
              "✅ Güvenli: 'Hesabınızı güncellemek için lütfen giriş yapın'",
              "❌ Sahte: 'Bedava 1000 elmas kazan!'",
              "✅ Güvenli: 'Oyun içi satın alma yapabilirsiniz'"
            ],
            quiz: [
              {
                type: "multiple_choice",
                question: "Aşağıdaki linklerden hangisi güvenlidir?",
                options: [
                  { text: "A) www.faceb00k.com (Sıfır ile yazılmış - SAHTE)", correct: false },
                  { text: "B) guvenlik-uyarisi-google.com (Garip ekler var - SAHTE)", correct: false },
                  { text: "C) www.google.com (Doğru yazılmış - GÜVENLİ)", correct: true }
                ]
              }
            ]
          }
        },
        activity_type: "wordle_game"
      },
      {
        id: 5,
        title: "🔒 Çift Kilit Sistemi: 2FA",
        intro: "Diyelim ki şifrenizi çok güçlü yaptınız ama bir şekilde çalındı. İşte burada İki Aşamalı Doğrulama (2FA) devreye girer.",
        activity_title: "🎮 Aktivite: 2FA Güvenlik Macerası",
        activity_desc: "2FA'nın önemini senaryolar üzerinden öğren ve hesaplarını nasıl koruyacağını keşfet!",
        content: {
          "5.1": {
            title: "2FA Nedir?",
            description: "Diyelim ki şifrenizi çok güçlü yaptınız ama bir şekilde çalındı. İşte burada İki Aşamalı Doğrulama (2FA) devreye girer. Bunu 'İki Kilitli Kapı' gibi düşünün.",
            image: "/images/2fa_hero.png",
            points: [
              "1. Kilit: Şifreniz (Bildiğiniz bir şey)",
              "2. Kilit: Telefonunuza gelen 6 haneli geçici kod (Sahip olduğunuz bir şey)",
              "Hacker şifrenizi bilse bile, telefonunuz elinde olmadığı için ikinci kilidi açamaz",
              "E-posta, sosyal medya ve oyun hesaplarında bu özelliği mutlaka 'Ayarlar' kısmından açmalısınız"
            ],
            examples: [
              "✅ Güvenli: Şifre + Telefon kodu = Çift koruma",
              "❌ Güvensiz: Sadece şifre = Tek koruma",
              "✅ Güvenli: 2FA açık olan hesap",
              "❌ Güvensiz: 2FA kapalı olan hesap"
            ]
          },
          "5.2": {
            title: "2FA Nasıl Çalışır?",
            description: "2FA sistemi iki aşamalı doğrulama sağlar:",
            points: [
              "İlk aşama: Şifrenizi girersiniz",
              "İkinci aşama: Telefonunuza gelen 6 haneli kodu girersiniz",
              "Her iki aşama da doğruysa giriş yapabilirsiniz",
              "Hacker şifrenizi bilse bile telefonunuz olmadan giriş yapamaz"
            ],
            examples: [
              "Giriş yaparken önce şifrenizi girersiniz",
              "Sonra telefonunuza gelen kodu girersiniz",
              "Her iki kod da doğruysa giriş başarılı olur"
            ]
          },
          "5.3": {
            title: "2FA'yı Nerede Açmalıyım?",
            description: "2FA'yı tüm önemli hesaplarınızda açmalısınız:",
            points: [
              "E-posta hesapları (Gmail, Outlook)",
              "Sosyal medya (Instagram, Facebook, TikTok)",
              "Oyun hesapları (Roblox, Minecraft)",
              "Okul hesapları (E-Okul)",
              "Ayarlar bölümünden 'İki Aşamalı Doğrulama' veya '2FA' seçeneğini açın"
            ],
            examples: [
              "Instagram: Ayarlar → Güvenlik → İki Faktörlü Kimlik Doğrulama",
              "Gmail: Hesabım → Güvenlik → 2 Adımlı Doğrulama",
              "Roblox: Ayarlar → Güvenlik → İki Faktörlü Doğrulama"
            ]
          }
        },
        activity_type: "scenario_2fa"
      },
      {
        id: 6,
        title: "🎭 Senaryo Quiz: 'Büyük Turnuva Tuzağı'",
        intro: "Deniz (12 yaşında), çok sevdiği çevrimiçi oyunda bir 'Turnuva Daveti' mesajı alır. Mesaj, oyunun içindeki sohbetten değil, tanımadığı bir Instagram hesabından gelmiştir.",
        activity_title: "📝 Senaryo Quiz: Deniz'in Hikayesi",
        activity_desc: "Deniz'in hikayesini oku ve soruları cevapla.",
        content: {
          "6.1": {
            title: "Senaryo: Büyük Turnuva Tuzağı",
            description: "Deniz (12 yaşında), çok sevdiği çevrimiçi oyunda bir 'Turnuva Daveti' mesajı alır. Mesaj, oyunun içindeki sohbetten değil, tanımadığı bir Instagram hesabından gelmiştir. Mesaj şöyledir: 'Merhaba Deniz! Efsanevi turnuvaya seçildin. Katılmak ve 5000 Elmas kazanmak için şu linke tıkla ve oyun hesabınla giriş yap: www.oyun-turnuva-giris.com' Deniz heyecanlanır. O sırada en yakın arkadaşı Asya, 'Hadi hemen girelim, ben girdim bile şifremi yazdım!' der.",
            image: "/images/password_security_hero.png",
            quiz: [
              {
                type: "multiple_choice",
                question: "Bu mesajda 'Kimlik Avı' (Phishing) olduğunu gösteren en büyük ipucu nedir?",
                options: [
                  { text: "A) Mesajın Instagram'dan gelmesi", correct: false },
                  { text: "B) Linkin resmi oyun sitesi olmaması (oyun-turnuva-giris.com) ve mesajın oyun dışından (Instagram'dan) gelmesi", correct: true },
                  { text: "C) 5000 Elmas vaat edilmesi", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Asya'nın şifresini girmiş olması, linkin güvenli olduğunu gösterir mi?",
                options: [
                  { text: "A) Evet, arkadaşım yaptıysa güvenlidir", correct: false },
                  { text: "B) Hayır. Asya tuzağa düşmüştür. Arkadaşımız yapsa bile biz sorgulamalıyız.", correct: true },
                  { text: "C) Belki, duruma göre değişir", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Deniz linke tıklayıp şifresini girseydi ama 2FA (İki Aşamalı Doğrulama) açık olsaydı ne olurdu?",
                options: [
                  { text: "A) Hacker hesaba girebilirdi", correct: false },
                  { text: "B) Hacker şifreyi alırdı ama Deniz'in telefonuna gelen kodu bilemeyeceği için hesaba giremezdi. 2FA Deniz'i kurtarırdı.", correct: true },
                  { text: "C) 2FA hiçbir işe yaramazdı", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Deniz, Asya'ya ne söylemelidir?",
                options: [
                  { text: "A) 'Harika, ben de gireyim'", correct: false },
                  { text: "B) 'Asya, hemen şifreni değiştir! O site sahte, hesabın çalınabilir.'", correct: true },
                  { text: "C) 'Tamam, bekleyeyim'", correct: false }
                ]
              }
            ]
          }
        },
        activity_type: "interactive_quiz"
      }
    ]
  },

  // ============================================================
  // MODÜL 5: DİJİTAL GÜVENLİK VE BİLİNÇLİ TEKNOLOJİ KULLANIMI (ESKİ MODÜL 4)
  // ============================================================
  module_5: {
    title: "Modül 5: Dijital Güvenlik ve Bilinçli Teknoloji Kullanımı",
    subtitle: "🛡️ Dijital Kalkan: Kendini ve Başkalarını Koruma",
    hero_image: "/images/module4/WhatsApp Image 2025-12-28 at 13.44.08.jpeg",
    sections: [
      {
        id: 1,
        title: "🛡️ Dijital Güvenlik Nedir?",
        intro: "Dijital güvenlik, internet ve dijital cihazları kullanırken kendimizi, bilgilerimizi, paramızı ve itibarımızı koruma becerisidir. Bunu evimizin kapısını kilitlemek gibi düşünebiliriz.",
        hero_image: "/images/module4/WhatsApp Image 2025-12-28 at 13.44.08.jpeg",
        activity_title: "📝 Quiz: Dijital Güvenlik Temelleri",
        activity_desc: "Dijital güvenlik hakkındaki soruları cevapla.",
        content: {
          "1.1": {
            title: "Dijital Güvenlik Nedir?",
            description: "Dijital güvenlik, internet ve dijital cihazları kullanırken kendimizi, bilgilerimizi, paramızı ve itibarımızı koruma becerisidir. Bunu evimizin kapısını kilitlemek gibi düşünebiliriz. Nasıl ki evden çıkarken kapıyı kilitliyorsak, dijital dünyada da hesaplarımızı 'kilitlemeli' (şifrelemek) ve tanımadığımız kişilere kapıyı açmamalıyız.",
            image: "/images/module4/WhatsApp Image 2025-12-28 at 13.47.18.jpeg",
            points: [
              "İnternet sayesinde bilgiye ulaşabilir, oyun oynayabilir ve eğlenebiliriz",
              "Ancak bu ortamda siber zorbalık, kimlik hırsızlığı ve dolandırıcılık gibi riskler de vardır",
              "Dijital güvenlik sadece 'virüs programı kurmak' değildir; doğru kararlar verme sanatıdır",
              "Hangi linke tıklayacağını, kime güveneceğini bilmek, en iyi antivirüs programından bile daha etkilidir"
            ],
            examples: [
              "✅ Güvenli: Evin kapısını kilitlemek = Hesapları şifrelemek",
              "✅ Güvenli: Tanımadığımız kişilere kapıyı açmamak = Tanımadığımız kişilere bilgi vermemek",
              "❌ Güvensiz: Kapıyı açık bırakmak = Şifresiz hesap",
              "❌ Güvensiz: Herkese kapıyı açmak = Herkese açık profil"
            ],
            quiz: [
              {
                type: "true_false",
                question: "Dijital güvenlik sadece bilgisayar mühendislerinin işidir.",
                answer: false
              },
              {
                type: "true_false",
                question: "İnternette yaptığım davranışlar gerçek hayatımı etkilemez.",
                answer: false
              },
              {
                type: "true_false",
                question: "Güvenli olmak için güçlü şifreler ve gizlilik ayarları kullanılır.",
                answer: true
              },
              {
                type: "true_false",
                question: "Dijital güvenlik becerileri her yaşta öğrenilebilir.",
                answer: true
              },
              {
                type: "true_false",
                question: "Tanımadığım kişilerden gelen dosyaları açmak güvenlidir.",
                answer: false
              },
              {
                type: "true_false",
                question: "Akıllı telefonlar da bilgisayarlar gibi güvenlik riski taşır.",
                answer: true
              },
              {
                type: "true_false",
                question: "Dijital güvenlik, teknolojiden korkmak değil, onu bilinçli kullanmaktır.",
                answer: true
              },
              {
                type: "true_false",
                question: "Sadece oyun oynarken güvende olmam yeterlidir, ders çalışırken gerekmez.",
                answer: false
              },
              {
                type: "multiple_choice",
                question: "Dijital güvenlik temel olarak neyi amaçlar?",
                options: [
                  { text: "A) İnterneti tamamen yasaklamayı", correct: false },
                  { text: "B) Kendimizi ve bilgilerimizi risklerden korumayı", correct: true },
                  { text: "C) Bilgisayarı daha hızlı yapmayı", correct: false },
                  { text: "D) Daha çok oyun indirmeyi", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Aşağıdakilerden hangisi bir dijital güvenlik önlemidir?",
                options: [
                  { text: "A) Şifreyi monitöre yapıştırmak", correct: false },
                  { text: "B) Herkese açık Wi-Fi ağlarında bankacılık işlemi yapmak", correct: false },
                  { text: "C) Bilgisayarın ekran kilidini kullanmak", correct: true },
                  { text: "D) Tanımadığın kişilerin arkadaşlık isteğini kabul etmek", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "'Dijital vatandaşlık' kavramı ne ile ilgilidir?",
                options: [
                  { text: "A) Sadece kod yazmakla", correct: false },
                  { text: "B) İnternette sorumlu ve etik davranmakla", correct: true },
                  { text: "C) En pahalı tableti almakla", correct: false },
                  { text: "D) Hızlı klavye kullanmakla", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Güvenli olmayan bir davranış sergilersek ne olabilir?",
                options: [
                  { text: "A) İnternetimiz hızlanır", correct: false },
                  { text: "B) Hesaplarımız çalınabilir", correct: true },
                  { text: "C) Bilgisayarın rengi değişir", correct: false },
                  { text: "D) Hiçbir şey olmaz", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Dijital güvenlik kimin sorumluluğundadır?",
                options: [
                  { text: "A) Sadece devletin", correct: false },
                  { text: "B) Sadece öğretmenlerin", correct: false },
                  { text: "C) İnterneti kullanan herkesin", correct: true },
                  { text: "D) Sadece anne-babanın", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Bilinçli bir teknoloji kullanıcısı ne yapar?",
                options: [
                  { text: "A) Gördüğü her linke tıklar", correct: false },
                  { text: "B) Bilgilerin doğruluğunu kontrol eder", correct: true },
                  { text: "C) Şifresini arkadaşlarıyla paylaşır", correct: false },
                  { text: "D) Sürekli oyun oynar", correct: false }
                ]
              }
            ]
          }
        },
        activity_type: "quiz"
      },
      {
        id: 2,
        title: "🦠 Zararlı Yazılımlar (Virüsler ve Tehditler)",
        intro: "Zararlı yazılımlar (Malware), bilgisayar, tablet veya telefonlarımıza gizlice giren ve zarar veren programlardır.",
        activity_title: "📝 Quiz: Zararlı Yazılımları Tanıma",
        activity_desc: "Zararlı yazılımlar hakkındaki soruları cevapla.",
        content: {
          "2.1": {
            title: "Zararlı Yazılımlar (Malware) Nedir?",
            description: "Zararlı yazılımlar (Malware), bilgisayar, tablet veya telefonlarımıza gizlice giren ve zarar veren programlardır.",
            image: "/images/module4/WhatsApp Image 2025-12-28 at 13.48.11.jpeg",
            points: [
              "Virüsler: Dosyalarınıza bulaşır ve onları bozar",
              "Casus Yazılımlar (Spyware): Sizin haberiniz olmadan ne yaptığınızı izler, şifrelerinizi çalar",
              "Reklam Yazılımları (Adware): Sürekli istemediğiniz reklam pencereleri açar",
              "Bu yazılımlar genellikle; 'Hileli oyun indir', 'Bedava film izle' veya 'Ödül kazandın' gibi tuzak butonlara tıklandığında cihaza bulaşır"
            ],
            examples: [
              "❌ Tuzak: 'Hileli oyun indir' butonu",
              "❌ Tuzak: 'Bedava film izle' linki",
              "❌ Tuzak: 'Ödül kazandın, tıkla!' mesajı",
              "✅ Güvenli: Resmi mağazalardan (App Store, Play Store) uygulama indirmek"
            ],
            images: {
              "Sahte Antivirüs Uyarısı": "/images/module4/WhatsApp Image 2025-12-28 at 13.49.15.jpeg",
              "İndirme Uyarısı": "/images/module4/WhatsApp Image 2025-12-28 at 13.50.34.jpeg"
            },
            quiz: [
              {
                type: "true_false",
                question: "İnternetteki her 'İndir' butonu güvenlidir.",
                answer: false
              },
              {
                type: "true_false",
                question: "Cihazın aniden yavaşlaması bir virüs belirtisi olabilir.",
                answer: true
              },
              {
                type: "true_false",
                question: "Antivirüs programları bizi zararlı yazılımlardan korumaya yardımcı olur.",
                answer: true
              },
              {
                type: "true_false",
                question: "Sadece güvenilir ve resmi mağazalardan (App Store, Play Store) uygulama indirmeliyim.",
                answer: true
              },
              {
                type: "true_false",
                question: "Virüsler telefonlara bulaşmaz, sadece bilgisayara bulaşır.",
                answer: false
              },
              {
                type: "true_false",
                question: "'Bedava ödül kazandın' mesajları genellikle tuzaktır.",
                answer: true
              },
              {
                type: "true_false",
                question: "Cihaz güncellemelerini yapmak güvenliği artırır.",
                answer: true
              },
              {
                type: "true_false",
                question: "Casus yazılımlar biz fark etmeden bilgilerimizi çalabilir.",
                answer: true
              },
              {
                type: "multiple_choice",
                question: "Zararlı yazılımlar en sık nasıl bulaşır?",
                options: [
                  { text: "A) Orijinal kutulu oyunlardan", correct: false },
                  { text: "B) Güvenilmeyen sitelerden indirilen dosyalardan", correct: true },
                  { text: "C) Okulun web sitesinden", correct: false },
                  { text: "D) Word dosyasından", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Aşağıdakilerden hangisi bir virüs belirtisidir?",
                options: [
                  { text: "A) Ekranın daha parlak olması", correct: false },
                  { text: "B) Sürekli açılan reklam pencereleri", correct: true },
                  { text: "C) Klavyenin temiz olması", correct: false },
                  { text: "D) Oyunun hızlı açılması", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Bilgisayarımıza virüs girdiğinden şüphelenirsek ne yapmalıyız?",
                options: [
                  { text: "A) Bilgisayarı çöpe atmalıyız", correct: false },
                  { text: "B) Bir büyüğümüze söyleyip virüs taraması yapmalıyız", correct: true },
                  { text: "C) Ekranı silmeliyiz", correct: false },
                  { text: "D) Hiçbir şey yapmadan beklemeliyiz", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "'Truva Atı' (Trojan) ne tür bir zararlı yazılımdır?",
                options: [
                  { text: "A) Yararlı gibi görünen ama arkada zarar veren yazılım", correct: true },
                  { text: "B) Tarih dersi programı", correct: false },
                  { text: "C) Bir at oyunu", correct: false },
                  { text: "D) Antivirüs programı", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Güvenli indirme yapmak için neye dikkat etmeliyiz?",
                options: [
                  { text: "A) Sitenin renkli olmasına", correct: false },
                  { text: "B) Dosyanın boyutuna", correct: false },
                  { text: "C) Resmi ve bilinen bir site olmasına", correct: true },
                  { text: "D) İndirme butonunun büyüklüğüne", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Antivirüs programı ne işe yarar?",
                options: [
                  { text: "A) İnterneti hızlandırır", correct: false },
                  { text: "B) Zararlı yazılımları tespit eder ve temizler", correct: true },
                  { text: "C) Oyunlarda hile yapmayı sağlar", correct: false },
                  { text: "D) Ekran görüntüsü alır", correct: false }
                ]
              }
            ]
          },
          "2.2": {
            title: "Virüs Belirtileri",
            description: "Cihazınız aniden çok yavaşlarsa, çok ısınıyorsa veya kendi kendine uygulamalar açılıyorsa zararlı yazılım bulaşmış olabilir.",
            image: "/images/module4/WhatsApp Image 2025-12-28 at 13.51.34.jpeg",
            points: [
              "Cihaz aniden çok yavaşlar",
              "Cihaz çok ısınır",
              "Kendi kendine uygulamalar açılır",
              "Sürekli reklam pencereleri çıkar",
              "Programlar çöker veya donar",
              "Dosyalar kaybolur veya bozulur"
            ],
            examples: [
              "✅ Normal: Bilgisayar 30 saniyede açılır",
              "❌ Uyarı: Bilgisayar 5 dakikada açılır",
              "✅ Normal: Tarayıcı ana sayfanıza açılır",
              "❌ Uyarı: Tarayıcı bilinmeyen bir web sitesine açılır"
            ]
          }
        },
        activity_type: "quiz"
      },
      {
        id: 3,
        title: "📱 Güvenli Cihaz Kullanımı",
        intro: "Cihaz güvenliği sadece internetle değil, fiziksel güvenlikle de ilgilidir.",
        activity_title: "📝 Quiz: Güvenli Cihaz Kullanımı",
        activity_desc: "Güvenli cihaz kullanımı hakkındaki soruları cevapla.",
        content: {
          "3.1": {
            title: "Ekran Kilidi",
            description: "Tablet veya telefonda mutlaka PIN veya desen kilidi olmalıdır. Cihaz kaybolursa bilgileriniz korunur.",
            image: "/images/module4/WhatsApp Image 2025-12-28 at 13.55.23.jpeg",
            points: [
              "PIN veya desen kilidi kullanın",
              "Cihaz kaybolursa bilgileriniz korunur",
              "Tahmin edilmesi zor bir şifre seçin",
              "1234 veya 0000 gibi basit şifreler kullanmayın"
            ],
            examples: [
              "✅ Güvenli: Karmaşık bir desen veya PIN",
              "❌ Güvensiz: 1234 veya doğum tarihi",
              "✅ Güvenli: Cihazı her zaman kilitlemek",
              "❌ Güvensiz: Cihazı açık bırakmak"
            ],
            quiz: [
              {
                type: "true_false",
                question: "Tabletimi masada bırakıp kantine gidebilirim.",
                answer: false
              },
              {
                type: "true_false",
                question: "Ekran kilidi koymak, cihaz çalınırsa verilerimi korur.",
                answer: true
              },
              {
                type: "true_false",
                question: "Kafedeki şifresiz Wi-Fi ağları her zaman güvenlidir.",
                answer: false
              },
              {
                type: "true_false",
                question: "Ortak bilgisayarda işim bitince 'Çıkış Yap' demeliyim.",
                answer: true
              },
              {
                type: "true_false",
                question: "Güncellemeler gereksizdir, yapmasam da olur.",
                answer: false
              },
              {
                type: "true_false",
                question: "Bluetooth'u kullanmadığım zamanlarda kapalı tutmalıyım.",
                answer: true
              },
              {
                type: "true_false",
                question: "Tanımadığım bir USB belleği hemen bilgisayarıma takmalıyım.",
                answer: false
              },
              {
                type: "true_false",
                question: "Şarj aletimi başkalarıyla paylaşırken dikkatli olmalıyım.",
                answer: true
              },
              {
                type: "true_false",
                question: "Cihazımı çok sıcak veya çok soğuk ortamlarda bırakmamalıyım.",
                answer: true
              },
              {
                type: "true_false",
                question: "'Beni Hatırla' seçeneğini sadece kendi evimdeki cihazda kullanmalıyım.",
                answer: true
              },
              {
                type: "multiple_choice",
                question: "Ortak kullanılan bir bilgisayarda (örn: okulda) işiniz bitince ne yapmalısınız?",
                options: [
                  { text: "A) Ekranı kapatıp gitmek", correct: false },
                  { text: "B) Hesaptan çıkış yapmak (Log out)", correct: true },
                  { text: "C) Bilgisayarı fişten çekmek", correct: false },
                  { text: "D) Sadece tarayıcıyı kapatmak", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Aşağıdakilerden hangisi fiziksel bir güvenlik önlemidir?",
                options: [
                  { text: "A) Antivirüs kurmak", correct: false },
                  { text: "B) Cihaza kılıf takmak ve ekran kilidi koymak", correct: true },
                  { text: "C) Oyun indirmek", correct: false },
                  { text: "D) Yorum yazmak", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Halka açık ücretsiz Wi-Fi ağlarında ne yapmamalıyız?",
                options: [
                  { text: "A) Haber okumak", correct: false },
                  { text: "B) Hava durumuna bakmak", correct: false },
                  { text: "C) Banka hesabına veya özel hesaplara şifre ile girmek", correct: true },
                  { text: "D) Haritaya bakmak", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Cihaz güncellemeleri neden önemlidir?",
                options: [
                  { text: "A) Ekranı renklendirir", correct: false },
                  { text: "B) Güvenlik açıklarını kapatır ve cihazı korur", correct: true },
                  { text: "C) Cihazı ağırlaştırır", correct: false },
                  { text: "D) Yeni oyunlar yükler", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Tabletine koyduğun ekran kilidi (şifresi) nasıl olmalıdır?",
                options: [
                  { text: "A) 1234", correct: false },
                  { text: "B) Doğum tarihin", correct: false },
                  { text: "C) Tahmin edilmesi zor bir desen veya sayı", correct: true },
                  { text: "D) 0000", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Tanımadığın bir USB belleği bilgisayarına takarsan ne olabilir?",
                options: [
                  { text: "A) Bilgisayar hızlanır", correct: false },
                  { text: "B) İçindeki virüsler bilgisayarına bulaşabilir", correct: true },
                  { text: "C) Ekran daha net görünür", correct: false },
                  { text: "D) İnternet kotan artar", correct: false }
                ]
              }
            ]
          },
          "3.2": {
            title: "Ortak Ağlar",
            description: "Kafelerde veya AVM'lerdeki 'Ücretsiz Wi-Fi' ağları güvensiz olabilir. Bu ağlarda şifre girmemeli, bankacılık işlemi yapmamalıyız.",
            image: "/images/module4/WhatsApp Image 2025-12-28 at 13.57.04.jpeg",
            points: [
              "Halka açık Wi-Fi ağları güvensiz olabilir",
              "Bu ağlarda şifre girmemeliyiz",
              "Banka işlemleri yapmamalıyız",
              "Özel bilgiler paylaşmamalıyız"
            ],
            examples: [
              "❌ Güvensiz: Kafede ücretsiz Wi-Fi'de banka hesabına girmek",
              "✅ Güvenli: Evdeki güvenli Wi-Fi'de banka işlemi yapmak"
            ]
          },
          "3.3": {
            title: "Oturum Kapatma",
            description: "Okulda veya kütüphanede ortak bilgisayar kullandıktan sonra 'Çıkış Yap' (Log out) butonuna basmayı asla unutmamalıyız.",
            image: "/images/module4/WhatsApp Image 2025-12-28 at 14.00.24.jpeg",
            points: [
              "Ortak bilgisayarlarda mutlaka çıkış yapmalıyız",
              "'Beni Hatırla' seçeneğini sadece kendi cihazımızda kullanmalıyız",
              "Çıkış yapmadan gitmek, bir sonraki kullanıcının hesabımıza erişmesine izin verir"
            ],
            examples: [
              "✅ Güvenli: Okul bilgisayarında çıkış yapmak",
              "❌ Güvensiz: Çıkış yapmadan bilgisayarı bırakmak"
            ]
          },
          "3.4": {
            title: "Güncellemeler",
            description: "Cihazdan gelen 'Güncelleme var' uyarısını ertelemeyin. Güncellemeler, güvenlik açıklarını kapatan yamalardır.",
            points: [
              "Güncellemeler güvenlik açıklarını kapatır",
              "Cihazı korur",
              "Yeni özellikler ekler",
              "Hataları düzeltir"
            ],
            examples: [
              "✅ Güvenli: Güncellemeleri hemen yapmak",
              "❌ Güvensiz: Güncellemeleri sürekli ertelemek"
            ]
          }
        },
        activity_type: "quiz"
      },
      {
        id: 4,
        title: "🔐 Uygulama İzinleri ve Gizlilik",
        intro: "Bir uygulama yüklerken bizden bazı izinler ister (Kamera, Mikrofon, Konum, Rehber). Bilinçli kullanıcı şunu sorar: 'Bu uygulamanın bu izne gerçekten ihtiyacı var mı?'",
        activity_title: "📝 Quiz: Uygulama İzinleri",
        activity_desc: "Uygulama izinleri hakkındaki soruları cevapla.",
        content: {
          "4.1": {
            title: "Uygulama İzinleri Nedir?",
            description: "Bir uygulama yüklerken bizden bazı izinler ister (Kamera, Mikrofon, Konum, Rehber). Bilinçli kullanıcı şunu sorar: 'Bu uygulamanın bu izne gerçekten ihtiyacı var mı?' Örneğin; bir El Feneri uygulamasının 'Rehberinize' veya 'Konumunuza' erişmek istemesi şüphelidir. Çünkü fener yakmak için arkadaşlarınızın numarasına ihtiyaç yoktur. Gereksiz izinleri vermek, özel bilgilerimizin toplanmasına neden olur.",
            image: "/images/game_privacy_settings.png",
            points: [
              "Uygulamalar bazen gereksiz izinler ister",
              "Her izne 'Evet' dememeliyiz",
              "Uygulamanın gerçekten ihtiyacı olan izinleri vermeliyiz",
              "Gereksiz izinler özel bilgilerimizin toplanmasına neden olur"
            ],
            examples: [
              "❌ Şüpheli: El Feneri uygulaması rehberinize erişmek istiyor",
              "✅ Mantıklı: Kamera uygulaması kameraya erişmek istiyor",
              "❌ Şüpheli: Hesap makinesi konumunuza erişmek istiyor",
              "✅ Mantıklı: Harita uygulaması konumunuza erişmek istiyor"
            ],
            quiz: [
              {
                type: "true_false",
                question: "Her uygulamanın istediği her izne 'Evet' demeliyim.",
                answer: false
              },
              {
                type: "true_false",
                question: "Bir hesap makinesi uygulamasının kameraya ihtiyacı yoktur.",
                answer: true
              },
              {
                type: "true_false",
                question: "Uygulama izinlerini ayarlardan kontrol edebilirim.",
                answer: true
              },
              {
                type: "true_false",
                question: "Konum izni vermek, nerede olduğumu uygulamanın bilmesini sağlar.",
                answer: true
              },
              {
                type: "true_false",
                question: "Oyun uygulamalarının çoğu rehberime (kişilerime) ihtiyaç duyar.",
                answer: false
              },
              {
                type: "true_false",
                question: "Gizlilik politikalarını okumak (veya göz atmak) önemlidir.",
                answer: true
              },
              {
                type: "true_false",
                question: "Kameramın izinsiz açılmaması için izinleri denetlemeliyim.",
                answer: true
              },
              {
                type: "true_false",
                question: "Gereksiz izin isteyen uygulamaları yüklememeliyim.",
                answer: true
              },
              {
                type: "multiple_choice",
                question: "Bir 'El Feneri' uygulaması 'Rehberine Erişmek' istiyorsa ne yapmalısın?",
                options: [
                  { text: "A) İzin vermelisin", correct: false },
                  { text: "B) Reddetmelisin, çünkü gereksizdir", correct: true },
                  { text: "C) Arkadaşlarına sormalısın", correct: false },
                  { text: "D) Telefonu kapatmalısın", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "'Konum' izni ne işe yarar?",
                options: [
                  { text: "A) Telefonun sesini açar", correct: false },
                  { text: "B) Uygulamanın senin coğrafi yerini (nerede olduğunu) bilmesini sağlar", correct: true },
                  { text: "C) Ekran parlaklığını artırır", correct: false },
                  { text: "D) İnterneti hızlandırır", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Hangi uygulama 'Mikrofon' iznine gerçekten ihtiyaç duyar?",
                options: [
                  { text: "A) Ses kaydetme uygulaması", correct: true },
                  { text: "B) Hesap makinesi", correct: false },
                  { text: "C) Not defteri", correct: false },
                  { text: "D) Takvim", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Uygulama izinlerini nereden kontrol ederiz?",
                options: [
                  { text: "A) Fotoğraf galerisinden", correct: false },
                  { text: "B) Ayarlar menüsünden", correct: true },
                  { text: "C) Müzik çalardan", correct: false },
                  { text: "D) Kamera uygulamasından", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Gizlilik neden önemlidir?",
                options: [
                  { text: "A) Bilgilerimizin başkaları tarafından kullanılmasını önlemek için", correct: true },
                  { text: "B) Oyunlarda daha çok puan almak için", correct: false },
                  { text: "C) Telefonun şarjını korumak için", correct: false },
                  { text: "D) Daha güzel fotoğraf çekmek için", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Navigasyon (Harita) uygulaması hangi izne ihtiyaç duyar?",
                options: [
                  { text: "A) Mikrofon", correct: false },
                  { text: "B) Konum", correct: true },
                  { text: "C) Kamera", correct: false },
                  { text: "D) Dosyalar", correct: false }
                ]
              }
            ]
          }
        },
        activity_type: "quiz"
      },
      {
        id: 5,
        title: "🤝 Dijital Sorumluluk",
        intro: "Dijital dünyada sadece kendimizi korumak yetmez; başkalarına karşı da sorumlu olmalıyız.",
        activity_title: "📝 Quiz: Dijital Sorumluluk",
        activity_desc: "Dijital sorumluluk hakkındaki soruları cevapla.",
        content: {
          "5.1": {
            title: "Dijital Sorumluluk Nedir?",
            description: "Dijital dünyada sadece kendimizi korumak yetmez; başkalarına karşı da sorumlu olmalıyız.",
            image: "/images/module4/WhatsApp Image 2025-12-28 at 14.01.08.jpeg",
            points: [
              "Doğruluk: İnternette gördüğümüz bir haberi paylaşmadan önce doğruluğunu araştırmalıyız. Yalan haber yaymak (Fake News) sorumluluktur",
              "Saygı: Başkalarının fotoğraflarını izinsiz paylaşmamalı, kırıcı yorumlar yapmamalıyız",
              "Bildirme: Siber zorbalık veya tehlikeli bir içerik gördüğümüzde, bunu platforma 'Şikayet Et' (Report) butonuyla bildirmeliyiz"
            ],
            examples: [
              "✅ Sorumlu: Haberi paylaşmadan önce doğruluğunu kontrol etmek",
              "❌ Sorumlu değil: Yalan haberi hemen paylaşmak",
              "✅ Sorumlu: Başkalarının fotoğraflarını izin almadan paylaşmamak",
              "❌ Sorumlu değil: İzinsiz fotoğraf paylaşmak"
            ],
            quiz: [
              {
                type: "true_false",
                question: "İnternette gördüğüm her haberi hemen paylaşmalıyım.",
                answer: false
              },
              {
                type: "true_false",
                question: "Başkalarının fotoğrafını izinsiz paylaşmak saygısızlıktır.",
                answer: true
              },
              {
                type: "true_false",
                question: "Kötü niyetli bir yorumu 'Bildir / Şikayet Et' yapabilirim.",
                answer: true
              },
              {
                type: "true_false",
                question: "Dijital dünyada nazik olmak zorunda değilim.",
                answer: false
              },
              {
                type: "true_false",
                question: "Doğrulanmamış bilgileri yaymak kargaşaya sebep olabilir.",
                answer: true
              },
              {
                type: "true_false",
                question: "Arkadaşımın sırrını sosyal medyada paylaşabilirim.",
                answer: false
              },
              {
                type: "true_false",
                question: "Dijital ayak izim geleceğimi etkileyebilir, sorumlu davranmalıyım.",
                answer: true
              },
              {
                type: "true_false",
                question: "Başkalarının emeğine (telif hakkına) saygı duymalıyım.",
                answer: true
              },
              {
                type: "true_false",
                question: "Sadece kendi güvenliğim önemlidir, başkaları beni ilgilendirmez.",
                answer: false
              },
              {
                type: "true_false",
                question: "İnterneti iyilik ve öğrenme için kullanmak bir tercihtir.",
                answer: true
              },
              {
                type: "multiple_choice",
                question: "Arkadaşının utanç verici bir fotoğrafını gördüğünde ne yapmalısın?",
                options: [
                  { text: "A) Herkese göndermelisin", correct: false },
                  { text: "B) Gülüp geçmelisin", correct: false },
                  { text: "C) Paylaşmamalı ve gerekirse kaldırtması için uyarmalısın", correct: true },
                  { text: "D) Yorum yazıp dalga geçmelisin", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "'Fake News' (Yalan Haber) ile mücadele etmek için ne yapmalıyız?",
                options: [
                  { text: "A) Haberi hemen beğenmeliyiz", correct: false },
                  { text: "B) Kaynağını araştırmadan paylaşmamalıyız", correct: true },
                  { text: "C) Herkese göndermeliyiz", correct: false },
                  { text: "D) Hiçbir şey okumamalıyız", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "İnternette birisi sana zorbalık yaparsa ne yapmalısın?",
                options: [
                  { text: "A) Sen de ona küfür etmelisin", correct: false },
                  { text: "B) Cevap vermemeli, engellemeli ve bir büyüğüne söylemelisin", correct: true },
                  { text: "C) Adresini verip kavgaya çağırmalısın", correct: false },
                  { text: "D) Bilgisayarı kapatıp ağlamalısın", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Dijital vatandaşlık ne demektir?",
                options: [
                  { text: "A) Çok iyi bilgisayar oyunu oynamak", correct: false },
                  { text: "B) Teknolojiyi etik, güvenli ve sorumlu kullanmak", correct: true },
                  { text: "C) Sosyal medyada çok takipçisi olmak", correct: false },
                  { text: "D) Hızlı mesaj yazmak", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "İnternette bir eser (resim, müzik) kullanırken neye dikkat etmeliyiz?",
                options: [
                  { text: "A) Hiçbir şeye, her şey bedavadır", correct: false },
                  { text: "B) Telif haklarına ve sahibinin iznine", correct: true },
                  { text: "C) Renginin güzel olmasına", correct: false },
                  { text: "D) Sesinin yüksek olmasına", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Aşağıdakilerden hangisi sorumlu bir davranıştır?",
                options: [
                  { text: "A) Tanımadığın birine şifreni vermek", correct: false },
                  { text: "B) Arkadaşın adına sahte hesap açmak", correct: false },
                  { text: "C) Güçlü şifre kullanmak ve başkalarına saygılı olmak", correct: true },
                  { text: "D) İzinsiz video çekmek", correct: false }
                ]
              }
            ]
          }
        },
        activity_type: "quiz"
      },
      {
        id: 6,
        title: "🎭 Senaryo Quiz: 'Açık Kalan Tablet Vakası'",
        intro: "Can (6. sınıf öğrencisi), teneffüste tabletini sırasında açık ve kilitsiz bırakıp kantine gider. Can'ın arkadaşı Mert, şaka yapmak amacıyla Can'ın tabletini alır.",
        activity_title: "📝 Senaryo Quiz: Can ve Mert'in Hikayesi",
        activity_desc: "Can ve Mert'in hikayesini oku ve soruları cevapla.",
        content: {
          "6.1": {
            title: "Senaryo: Açık Kalan Tablet Vakası",
            description: "Can (6. sınıf öğrencisi), teneffüste tabletini sırasında açık ve kilitsiz bırakıp kantine gider. Can'ın arkadaşı Mert, şaka yapmak amacıyla Can'ın tabletini alır. O sırada Mert'in dikkatini bir reklam çeker: 'Bedava Savaş Oyunu İndir - Sadece APK'. Mert, Can'a sürpriz yapmak için oyunu indirmeye çalışır. İndirme sırasında tablet; 'Bu dosya cihazınıza zarar verebilir, yine de indirilsin mi?' diye sorar. Mert 'Evet' der ve tüm izinleri (Rehber, Galeri, Konum) onaylar. Can geri döndüğünde tabletinin çok ısındığını ve ekranda sürekli reklam çıktığını görür.",
            image: "/images/module4/WhatsApp Image 2025-12-28 at 13.57.04.jpeg",
            quiz: [
              {
                type: "true_false",
                question: "Can tabletini kilitlemeden ve başıboş bırakarak ilk hatayı yaptı.",
                answer: true
              },
              {
                type: "multiple_choice",
                question: "Mert'in davranışı nasıldı?",
                options: [
                  { text: "A) Çok yardımseverdi.", correct: false },
                  { text: "B) Düşüncesizceydi; başkasının cihazına izinsiz müdahale etti ve riskli bir dosya indirdi.", correct: true },
                  { text: "C) Çok komik bir şakaydı.", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Tablet neden uyarı verdi?",
                options: [
                  { text: "A) Çünkü oyun çok büyüktü", correct: false },
                  { text: "B) Çünkü resmi mağaza (Play Store/App Store) dışından, kaynağı belirsiz bir dosya (APK) indiriliyordu. Bu dosyalar genellikle virüs içerir.", correct: true },
                  { text: "C) Çünkü internet yavaştı", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Mert'in verdiği izinlerden hangisi bir 'Savaş Oyunu' için gereksizdir?",
                options: [
                  { text: "A) Depolama alanı", correct: false },
                  { text: "B) Rehber ve Konum (Oyunun arkadaş listesine ve adrese ihtiyacı yoktur)", correct: true },
                  { text: "C) İnternet erişimi", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Can şimdi ne yapmalıdır?",
                options: [
                  { text: "A) Mert'e teşekkür etmelidir.", correct: false },
                  { text: "B) Oyunu hemen oynamalıdır.", correct: false },
                  { text: "C) Bir yetişkine haber vermeli, cihazı internetten koparmalı ve virüs taraması yapmalıdır.", correct: true }
                ]
              },
              {
                type: "multiple_choice",
                question: "Bu olayda 'Dijital Sorumluluk' kimde eksikti?",
                options: [
                  { text: "A) Sadece Can'da", correct: false },
                  { text: "B) Sadece Mert'te", correct: false },
                  { text: "C) Hem Can'da (Güvenlik tedbiri almadı) hem de Mert'te (Başkasına saygı ve güvenli indirme kuralını ihlal etti)", correct: true }
                ]
              }
            ]
          }
        },
        activity_type: "interactive_quiz"
      },
      {
        id: 7,
        title: "🎭 Senaryo Quiz: 'Bedava Elmas Tuzağı'",
        intro: "Elif, en sevdiği oyunda ilerlemek istiyor. Instagram'da 'Buraya tıkla, kullanıcı adını ve şifreni gir, hesabına 10.000 elmas yüklensin!' diyen bir reklam görüyor.",
        activity_title: "📝 Senaryo Quiz: Elif'in Hikayesi",
        activity_desc: "Elif'in hikayesini oku ve soruları cevapla.",
        content: {
          "7.1": {
            title: "Senaryo: Bedava Elmas Tuzağı",
            description: "Elif, en sevdiği oyunda ilerlemek istiyor. Instagram'da 'Buraya tıkla, kullanıcı adını ve şifreni gir, hesabına 10.000 elmas yüklensin!' diyen bir reklam görüyor. Site çok renkli ve gerçek oyunun logosunu kullanıyor.",
            image: "/images/module4/download_warning.png",
            quiz: [
              {
                type: "multiple_choice",
                question: "Elif ne yapmalı?",
                options: [
                  { text: "A) Hemen şifresini girmeli, elmasları kaçırmamalı.", correct: false },
                  { text: "B) Durmalı! Şifre isteyen siteler genellikle tuzaktır (Phishing).", correct: true }
                ]
              },
              {
                type: "multiple_choice",
                question: "Site gerçek oyunun logosunu kullanıyor, bu güvenli olduğunu gösterir mi?",
                options: [
                  { text: "A) Evet, logo varsa gerçektir.", correct: false },
                  { text: "B) Hayır, logolar kopyalanabilir. Adres çubuğunu (URL) kontrol etmelidir.", correct: true }
                ]
              },
              {
                type: "multiple_choice",
                question: "Elif bu reklamı ne yapmalı?",
                options: [
                  { text: "A) Arkadaşlarına göndermeli.", correct: false },
                  { text: "B) 'Şikayet Et / Bildir' diyerek platformu uyarmalıdır.", correct: true }
                ]
              }
            ]
          }
        },
        activity_type: "interactive_quiz"
      }
    ],
  },

  // ============================================================
  // MODÜL 6: DİJİTAL DEDEKTİF (THE ACTION) - (ESKİ MODÜL 5)
  // ============================================================
  module_6: {
    title: "Modül 6: Dijital Dedektif",
    subtitle: "🔍 Olay Yeri İnceleme: NIST Detect & Respond",
    sections: [
      {
        id: 1,
        title: "🚨 Kötü Amaçlı Yazılım Belirtileri (Malware Symptoms)",
        intro: "Bilgisayarın hasta olduğunda verdiği sinyalleri tanımayı öğren. Yavaşlama, pop-up'lar, aşırı ısınma gibi.",
        activity_title: "🎮 Aktivite: Tehdit Sinyallerini Tanı",
        activity_desc: "Verilen senaryolarda hangi tehdit sinyallerinin bulunduğunu belirle.",
        content: {
          "1.1": {
            title: "Kötü Amaçlı Yazılım (Malware) Nedir?",
            description: "Kötü amaçlı yazılım (malware), bilgisayarınıza zarar vermek, bilgi çalmak veya işlemleri bozmak için tasarlanmış yazılımdır. Dijital bir virüs gibidir!",
            image: "/images/module5/threats.jpg",
            points: [
              "Virüsler: Dosyadan dosyaya yayılır, sisteminize zarar verir",
              "Truva Atları: Kendilerini güvenli programlar gibi gösterir ama tehlikelidir",
              "Casus Yazılımlar: Gizlice çevrimiçi yaptıklarınızı izler",
              "Fidye Yazılımları: Dosyalarınızı kilitler ve açmak için para ister",
              "Reklam Yazılımları: İstenmeyen reklamlar gösterir"
            ],
            examples: [
              "İndirdiğiniz bir dosya garip davranmaya başlar",
              "Bilgisayarınız aniden çok yavaşlar",
              "Gezinmediğiniz halde pop-up pencereler görünür"
            ]
          },
          "1.2": {
            title: "Kötü Amaçlı Yazılım Uyarı İşaretleri",
            description: "Bilgisayarınız bir şeylerin yanlış olduğunda size sinyaller verir. Bunları tanımayı öğrenin!",
            points: [
              "Bilgisayar normalden çok daha yavaş çalışır",
              "Pop-up pencereler sık sık görünür",
              "Programlar çöker veya donar",
              "Tarayıcı ana sayfası izniniz olmadan değişir",
              "Dosyalar kaybolur veya bozulur",
              "Bilgisayar aşırı ısınır veya fan sürekli çalışır",
              "Garip hata mesajları görünür"
            ],
            examples: [
              "✅ Normal: Bilgisayar 30 saniyede açılır",
              "❌ Uyarı: Bilgisayar 5 dakikada açılır",
              "✅ Normal: Tarayıcı ana sayfanıza açılır",
              "❌ Uyarı: Tarayıcı bilinmeyen bir web sitesine açılır"
            ]
          },
          "1.3": {
            title: "Kötü Amaçlı Yazılımdan Nasıl Korunulur?",
            description: "Önlemek tedaviden daha iyidir! İşte kötü amaçlı yazılımları uzak tutmanın yolları:",
            points: [
              "Antivirüs yazılımı kurun ve düzenli olarak güncelleyin",
              "Şüpheli linklere veya pop-up'lara tıklamayın",
              "Bilinmeyen kaynaklardan dosya indirmeyin",
              "İşletim sisteminizi güncel tutun",
              "Güçlü şifreler kullanın",
              "Önemli dosyalarınızı düzenli olarak yedekleyin"
            ]
          }
        },
        activity_type: "flappy_bird"
      },
      {
        id: 2,
        title: "🎣 Kimlik Avı (Phishing) Avcılığı",
        intro: "Sahte e-postaları, mesajları ve web sitelerini nasıl tespit edeceğini öğrenerek oltaya gelmekten kaçın.",
        activity_title: "📝 Quiz: Sahte E-posta Dedektifi",
        activity_desc: "Gerçek ve sahte e-posta örneklerini karşılaştırarak ayırt et.",
        content: {
          "2.1": {
            title: "Kimlik Avı (Phishing) Nedir?",
            description: "Kimlik avı, dolandırıcıların güvenilir bir şirket gibi davranarak şifreler veya kredi kartı numaraları gibi kişisel bilgilerinizi almak için sizi kandırmaya çalışmasıdır.",
            image: "/images/module5/phishing.jpg",
            points: [
              "Gerçek şirketlerden geliyormuş gibi görünen sahte e-postalar",
              "Şüpheli linklere tıklamanızı isteyen mesajlar",
              "Gerçek gibi görünen ama aslında sahte olan web siteleri",
              "Hızlı hareket etmenizi sağlamaya çalışan acil mesajlar",
              "Kişisel bilgi istekleri"
            ],
            examples: [
              "Hesabınızın kapatılacağını iddia eden e-posta (şimdi doğrulamazsanız)",
              "Ödül kazandığınızı söyleyen ama bilgi vermenizi isteyen mesaj",
              "Banka web siteniz gibi görünen ama farklı URL'ye sahip link"
            ]
          },
          "2.2": {
            title: "Kimlik Avını Nasıl Tespit Edilir?",
            description: "Kimlik avı girişimlerinin belirgin işaretleri vardır. Bunları tanımayı öğrenin:",
            points: [
              "Gönderenin e-posta adresini dikkatlice kontrol edin",
              "Yazım ve dil bilgisi hatalarını arayın",
              "Acil veya tehditkar mesajlardan şüphelenin",
              "Tıklamadan önce linklerin üzerine gelerek gerçek URL'yi görün",
              "Gerçek şirketler e-posta ile şifre istemez",
              "Web sitesi URL'sinin gerçek şirketin web sitesiyle eşleşip eşleşmediğini kontrol edin"
            ],
            examples: [
              "❌ Şüpheli: 'Hesabınız kapatılacak!' (yazım hatası)",
              "✅ Güvenli: 'Hesabınız kapatılacak.' (doğru yazım)",
              "❌ Şüpheli: 'Hemen tıklayın yoksa erişimi kaybedersiniz!'",
              "✅ Güvenli: 'Lütfen hesabınıza giriş yaparak doğrulayın.'"
            ]
          },
          "2.3": {
            title: "Kimlik Avından Şüphelenirseniz Ne Yapmalısınız?",
            description: "Kimlik avı mesajı aldığınızı düşünüyorsanız, işte yapmanız gerekenler:",
            points: [
              "Hiçbir linke tıklamayın veya ek indirmeyin",
              "Mesaja cevap vermeyin",
              "Gerçek şirkete bildirin (eğer onlar gibi davranıyorsa)",
              "Mesajı silin",
              "Zaten tıkladıysanız, şifrelerinizi hemen değiştirin",
              "Güvendiğiniz bir yetişkine söyleyin"
            ]
          }
        },
        activity_type: "hotspot_quiz"
      },
      {
        id: 3,
        title: "🛠️ Siber Krizlere Müdahale Planı",
        intro: "Bir saldırı veya kriz anında atılacak ilk adımlar hayat kurtarır. (İnterneti kes, ebeveyne/öğretmene haber ver, tarama yap).",
        activity_title: "🎮 Aktivite: Kriz Simülasyonu",
        activity_desc: "Siber saldırı senaryosunda doğru müdahale adımlarını sırala.",
        content: {
          "3.1": {
            title: "Siber Kriz Nedir?",
            description: "Siber kriz, bilgisayarınızın veya hesaplarınızın saldırı altında olduğu zamandır. Kötü amaçlı yazılım, hack veya kimlik hırsızlığı olabilir.",
            image: "/images/module5/crisis_response_hero.jpg",
            points: [
              "Bilgisayarınız kötü amaçlı yazılımla enfekte olmuştur",
              "Birisi hesabınıza girmiştir",
              "Kişisel bilgileriniz çalınmıştır",
              "Dosyalarınız fidye yazılımı tarafından kilitlenmiştir",
              "Bir kimlik avı tuzağına düşmüşsünüzdür"
            ],
            examples: [
              "Dosyalarınıza erişemezsiniz",
              "Ekranınızda garip mesajlar görünür",
              "Hesabınız yapmadığınız aktiviteler gösterir"
            ]
          },
          "3.2": {
            title: "STOP Müdahale Planı",
            description: "Siber krizle karşılaştığınızda STOP'u hatırlayın:",
            points: [
              "S - Stop (Dur): Yaptığınız şeyi hemen durdurun",
              "T - Tell (Söyle): Hemen güvendiğiniz bir yetişkine söyleyin (ebeveyn, öğretmen)",
              "O - Offline (Çevrimdışı): Mümkünse internetten bağlantıyı kesin",
              "P - Protect (Koru): Diğer hesaplarınızı şifrelerinizi değiştirerek koruyun"
            ],
            examples: [
              "Şüpheli bir mesaj görürseniz, durun ve hiçbir şeye tıklamayın",
              "Hemen ebeveyninize veya öğretmeninize söyleyin",
              "İnternet kablosunu çıkarın veya Wi-Fi'yi kapatın",
              "Tüm önemli hesaplarınızın şifrelerini değiştirin"
            ]
          },
          "3.3": {
            title: "Önleme Kontrol Listesi",
            description: "En iyi savunma önlemektir. Bu kontrol listesini takip edin:",
            points: [
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
        activity_type: "crisis_simulation"
      }
    ],
  },
};
