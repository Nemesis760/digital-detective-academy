export const MODULE1_TR = {
  "module_1": {
    "title": "Modül 1: Bilgisayar Dünyasını Keşfediyorum",
  
    "sections": [
      {
        "id": 1,
        "title": "💻 Bilgisayar nedir ve nasıl düşünür?",
        "subtitle": "Giriş, Mantık, IPOS Döngüsü ve Temel Tanımlar",
        "intro": "Bilgisayar; verileri hammadde olarak alan, onları işlemcisinde inanılmaz bir hızla işleyen, ihtiyaç duyduğumuzda saklayan ve sonuçları bize bilgi olarak sunan akıllı bir elektronik makinedir. Tıpkı durmaksızın çalışan dev ve akıllı bir fabrika gibi!",
        "video_links": [
          {
            "title": "Khan Academy: İkili Sayı Sistemi (Bilgisayarlar ve İnternet)",
            "url": "https://www.youtube.com/watch?v=c-KcEvYJzPQ",
            "thumbnail": "/images/module3/video_tr.png"
          },
          {
            "title": "Khan Academy: İkili Sayı Sistemi ve Veri",
            "url": "https://www.youtube.com/watch?v=uErAI2_g0Ws",
            "thumbnail": "/images/module3/video_tr.png"
          }
        ],
        "content": {
          "1.1": {
            "title": "Bilgisayarın Tanımı (Fabrika Analojisi ve IPOS)",
            "description": "Bilgisayarın çalışma prensibi IPOS (Input-Process-Output-Storage) döngüsüne dayanır. Bu süreç hiç durmaz:",
            "points": [
              "Giriş (Input/Hammadde): Klavye, fare, mikrofon veya dokunmatik ekran ile bilgisayara ham veri girişi.",
              "İşlem (Process/Üretim Bandı): İşlemcinin (CPU) veriyi alıp matematiksel işlemlerle dönüştürmesi.",
              "Çıkış (Output/Ürün): İşlenen verinin ekrandaki görüntü, hoparlörden çıkan ses veya yazıcıdan alınan kağıt olarak bize sunulması.",
              "Depolama (Storage/Depo): Bilgilerin daha sonra kullanılmak üzere sabit disk, USB veya bulut sisteminde saklanması."
            ],
            "image": "/images/module1/bilgisayar\u0131n_tan\u0131m\u0131_tr.png",
            "examples": [
              "Klavyede 'Merhaba' yazdığında GİRİŞ yapıyorsun.",
              "Bilgisayar harfleri tanıyıp ekrana yansıtacak şekle getirir (İŞLEM).",
              "Monitörde yazıyı gördüğünde ÇIKIŞ almış olursun.",
              "Yazdığın dosyayı 'Kaydet' butonuna basarak saklarsan DEPOLAMA yaparsın."
            ]
          },
          "1.2": {
            "title": "Veri ve Bilgi Farkı (Yapboz Analojisi)",
            "description": "Veri (Data): Tek başına bir anlam ifade etmeyen, işlenmemiş ham gerçeklerdir (Örn: '30', 'Kırmızı', 'Ahmet'). Bunlar dağınık yapboz parçalarıdır.\nBilgi (Information): Verilerin işlenip, bir araya getirilerek anlamlı hale gelmiş sonucudur (Örn: 'Ahmet'in kırmızı kazağının fiyatı 30 TL'dir'). Bu, yapbozun tamamlanmış halidir.",
            "image": "/images/concept_data_info.png",
            "examples": [
              "Veri: '10', '00', 'Teneffüs' → Bilgi: 'Saat 10:00'da teneffüs zili çalacak.'",
              "Veri: 'Un', 'Su', 'Maya' → Bilgi (Ürün): 'Ekmek'",
              "Veri: 'kırmızı', 'hızlı', 'araba' → Bilgi: 'Hızlı giden kırmızı bir spor araba'"
            ]
          },
          "1.3": {
            "title": "İkili Sistem (Bilgisayarın Dili - Binary)",
            "description": "Bilgisayarlar insanlar gibi kelimelerle veya onluk sayı sistemiyle (0-9) düşünmezler. Onlar sadece elektrik sinyallerini anlar: Elektrik VAR (1) veya Elektrik YOK (0). Buna Binary (İkili) Kod sistemi denir.",
            "image": "/images/module1/binary_tr.png",
            "examples": [
              "'A' harfi bilgisayar için aslında: 01000001 dizisidir.",
              "'5' sayısı ikili sistemde: 00000101 demektir.",
              "Ekranda gördüğün rengarenk bir fotoğraf veya izlediğin video aslında milyonlarca 0 ve 1'den oluşur!",
              "Bu 0 ve 1'lere 'Bit' adı verilir."
            ]
          }
        },
        "activities": []
      },
      {
        "id": 2,
        "title": "🧩 Donanım (bilgisayarın vücudu)",
        "subtitle": "Fiziksel Parçalar, Çevre Birimleri ve Görevleri",
        "intro": "Bilgisayarın elle tutulabilen, gözle görülebilen, kırılabilen tüm metal, plastik ve elektronik parçalarına donanım denir. İnsan vücuduna benzer; tıpkı bizim iskeletimiz, organlarımız olduğu gibi, bilgisayarın da çalışmasını sağlayan fiziksel bileşenleri vardır.",
        "video_links": [
          {
            "title": "Donanım ve Yazılım Nedir? (Animasyon)",
            "url": "https://www.youtube.com/watch?v=YbvWEd0q5YU",
            "thumbnail": "/images/module3/video_tr.png"
          }
        ],
        "content": {
          "2.1": {
            "title": "Donanım (Hardware) Nedir?",
            "description": "Kısaca bilgisayarın 'sert' kısımlarıdır. Kasayı açtığımızda gördüğümüz devreler, kablolar ve masanın üzerindeki cihazların hepsi donanımdır.",
            "image": "/images/module1/concept_hardware_tr.png",
            "examples": [
              "Monitör - Gözlerimiz gibidir (bize dünyayı/veriyi gösterir).",
              "Klavye - Dilimiz gibidir (düşüncelerimizi aktarmamızı sağlar).",
              "İşlemci - Beynimiz gibidir (problem çözer, hesap yapar).",
              "Sabit Disk - Hafızamız gibidir (anıları saklar)."
            ]
          },
          "2.2": {
            "title": "Çevre Birimleri (Giriş-Çıkış Tablosu)",
            "description": "Kasanın dışında bulunan ve bilgisayarla iletişim kurmamızı sağlayan parçalardır. Verinin yönüne göre üç kategoriye ayrılırlar:",
            "table": {
              "Giriş Birimleri (Input Devices)": {
                "görev": "Dış dünyadaki veriyi (ses, görüntü, tuş vuruşu) bilgisayarın anlayacağı dile çevirip kasaya gönderir.",
                "örnekler": "Klavye, Fare, Mikrofon, Web Kamerası, Tarayıcı (Scanner), Oyun Kolu (Gamepad)",
                "image": "/images/module1_input_devices.png",
                "images": {
                  "klavye": "/images/module1/hardware_keyboard.png",
                  "fare": "/images/module1/hardware_mouse.png"
                }
              },
              "Çıkış Birimleri (Output Devices)": {
                "görev": "Bilgisayarın işlemcide ürettiği sonuçları bizim anlayacağımız şekle (görüntü, ses, kağıt çıktısı) dönüştürür.",
                "örnekler": "Monitör, Yazıcı, Hoparlör, Kulaklık, Projeksiyon Cihazı, 3D Yazıcı",
                "image": "/images/module1_output_devices.png",
                "images": {
                  "monitör": "/images/module1/hardware_monitor.png",
                  "yazıcı": "/images/module1/hardware_printer.png",
                  "kulaklık": "/images/module1/hardware_headphones.png"
                }
              },
              "Giriş/Çıkış Birimleri (I/O Devices)": {
                "görev": "Hem veri gönderme hem de veri alma özelliğine sahiptirler. İki yönlü trafik gibidir.",
                "örnekler": "Dokunmatik Ekran (Hem görürüz hem dokunuruz), USB Bellek (Veri atarız ve alırız), Modem (İnterneti alır ve dağıtır), Akıllı Tahta",
                "image": "/images/module1_io_devices.png"
              }
            }
          },
          "2.3": {
            "title": "Sistem Birimleri (Kasanın İçi - Hayati Organlar)",
            "description": "Bilgisayarın çalışması için zorunlu olan, kasanın içinde korunan ve genellikle görmediğimiz parçalardır.",
            "image": "/images/module1_system_units.png",
            "detailed_parts": [
              {
                "name": "Anakart (Mainboard)",
                "role": "Tüm donanım birimlerinin (işlemci, RAM, ekran kartı) üzerine takıldığı ve birbirleriyle haberleşmesini sağlayan elektronik karttır.",
                "analogy": "Vücudumuzdaki iskelet ve sinir sistemi gibidir. Şehrin altyapısı ve yolları gibidir.",
                "image": "/images/module1/hardware_motherboard.png"
              },
              {
                "name": "İşlemci (CPU)",
                "role": "Bilgisayarın beynidir. Tüm mantıksal ve matematiksel işlemleri yapar. Bilgisayarın hızını belirleyen en önemli parçadır.",
                "analogy": "Çok hızlı soru çözen bir matematik profesörü veya orkestra şefi.",
                "image": "/images/module1/hardware_cpu.png"
              },
              {
                "name": "RAM (Rastgele Erişimli Bellek)",
                "role": "Bilgilerin geçici olarak tutulduğu çalışma alanıdır. Bilgisayar kapatılınca veya elektrik kesilince içindeki bilgiler SİLİNİR (Uçucu Bellek).",
                "analogy": "Çalışma masası. Masa ne kadar genişse o kadar çok kitabı aynı anda açabilirsin, ama işin bitince masayı temizlersin.",
                "image": "/images/module1/hardware_ram.png"
              },
              {
                "name": "Sabit Disk (HDD) / SSD",
                "role": "Bilgilerin kalıcı olarak saklandığı yerdir. Fotoğraflar, oyunlar, Windows burada durur. Elektrik kesilse bile veriler silinmez.",
                "analogy": "Kütüphane rafları veya depo. Dosyalar burada yıllarca güvenle saklanır.",
                "image": "/images/module1/hardware_hdd.png"
              }
            ]
          }
        },
        "activities": [
          {
            "activity_title": "Veri Fabrikas\u0131",
            "activity_desc": "Veriyi girdi-i\u015flem-\u00e7\u0131kt\u0131-depolama ad\u0131mlar\u0131nda e\u015fle\u015ftir; IPOS mant\u0131\u011f\u0131n\u0131 peki\u015ftir.",
            "activity_type": "data_factory"
          },
          {
            "activity_title": "Aktivite: Hotspot G\u00f6rseli",
            "activity_desc": "A\u00e7\u0131k bir bilgisayar kasas\u0131 ekranda g\u00f6r\u00fcnt\u00fclenir. \u00d6\u011frenci par\u00e7alar\u0131n \u00fczerine t\u0131klad\u0131k\u00e7a a\u00e7\u0131klamalar \u00e7\u0131kar.",
            "activity_type": "hardware_hotspot"
          }
        ]
      },
      {
        "id": 3,
        "title": "💾 Yazılım (bilgisayarın ruhu)",
        "subtitle": "Programlar, İşletim Sistemleri, Kodlama ve Lisanslar",
        "intro": "Donanım parçalarına ne yapması gerektiğini söyleyen, bilgisayarı yöneten komutlar dizisidir. Yazılım olmadan en pahalı bilgisayar bile çalışmayan siyah bir ekrandan ibarettir. Yazılım, bilgisayara hayat veren ruhtur!",
        "video_links": [
          {
            "title": "İşletim Sistemi Nedir?",
            "url": "https://www.youtube.com/watch?v=Ox5trKYGXZ0",
            "thumbnail": "/images/module3/video_tr.png"
          },
          {
            "title": "İşletim Sistemi ve Türleri (5. Sınıf Animasyon)",
            "url": "https://www.youtube.com/watch?v=Y1gxRHcWz_o",
            "thumbnail": "/images/module3/video_tr.png"
          }
        ],
        "content": {
          "3.1": {
            "title": "Yazılım (Software) Nedir?",
            "description": "Kullanıcının bilgisayara komut vermesini sağlayan programların tümüdür. Elle tutulamazlar ama monitörde etkilerini görürüz.",
            "image": "/images/module1_software_concept.png",
            "examples": [
              "Windows, bilgisayarı açtığında seni karşılayan sistem yazılımıdır.",
              "Minecraft veya Roblox birer oyun yazılımıdır.",
              "WhatsApp, iletişim kurmanı sağlayan bir uygulama yazılımıdır."
            ]
          },
          "3.2": {
            "title": "Yazılım Türleri (Gemi Kaptanı ve Tayfalar)",
            "description": "Yazılımları görevlerine göre iki ana gruba ayırırız:",
            "image": "/images/module1/software_types_tr.png",
            "system_software": [
              "**İşletim Sistemi (Sistem Yazılımı):** Bilgisayarı yöneten, donanımları tanıyan ana kaptandır.",
              "Windows (En yaygın masaüstü sistemi)",
              "macOS (Apple bilgisayarlar için)",
              "Linux (Pardus gibi açık kaynaklı ve ücretsiz sistemler)",
              "Android ve iOS (Tablet ve telefonların kaptanları)"
            ],
            "application_software": [
              "**Uygulama Yazılımı:** Kullanıcının özel işlerini (resim, müzik, internet, ödev) yapan tayfalardır.",
              "Google Chrome / Edge (İnternet Tarayıcıları)",
              "Microsoft Word / PowerPoint (Ofis Programları)",
              "Adobe Photoshop / Paint (Resim Düzenleme)",
              "Scratch / mBlock (Kodlama Öğrenme)",
              "VLC Player (Film İzleme)"
            ]
          },
          "3.3": {
            "title": "Yazılım Lisans Türleri (Kullanım Hakları)",
            "description": "Yazılımların kullanım kurallarını belirleyen izinlere lisans denir. Bir yazılımı kullanırken bu kurallara uymalıyız.",
            "image": "/images/module1_software_licenses.png",
            "license_types": [
              {
                "type": "Lisanslı (Ücretli) Yazılım",
                "description": "Kullanmak için belirli bir ücret ödeyip ürün anahtarı satın aldığımız yazılımlardır. Tüm hakları üreticiye aittir.",
                "example": "Windows 11, FIFA Oyunları, Office 365, Antivirüs Programları"
              },
              {
                "type": "Ücretsiz (Freeware)",
                "description": "Tanıtım veya hayır amacıyla tamamen bedava dağıtılan, süre kısıtlaması olmayan yazılımlardır.",
                "example": "Google Chrome, Zoom, EBA Uygulaması, VLC Player"
              },
              {
                "type": "Demo (Shareware)",
                "description": "Kullanıcıya denemesi için kısıtlı özelliklerle veya kısıtlı süreyle (örneğin 30 gün) verilen yazılımlardır. Süre bitince satın alma ister.",
                "example": "WinRAR (Deneme sürümü), Netflix (İlk ay ücretsiz deneme)"
              },
              {
                "type": "Beta Sürüm",
                "description": "Geliştirilme aşaması henüz bitmemiş, test edilmesi için kullanıcılara sunulan yazılımlardır. Hata içerebilir.",
                "example": "Oyunların erken erişim (Early Access) sürümleri"
              }
            ]
          }
        },
        "activity_title": "🎮 Aktivite: Kutuyu Aç - İşletim Sistemi Oyunu",
        "activity_desc": "Kutulara tıklayarak işletim sistemi hakkındaki soruları aç. Örn: 'Telefonları yöneten robot simgeli sistem hangisidir?' -> Android.",
        "activity_type": "box_game"
      },
      {
        "id": 4,
        "title": "📁 Hafıza ve dosya yönetimi",
        "subtitle": "Kapasite Birimleri, Dosya Uzantıları ve Klasör Düzeni",
        "intro": "Bilgisayardaki verilerin ne kadar yer kapladığını ölçmek için özel birimler kullanırız. Ayrıca aradığımızı kolayca bulabilmek için dosyalarımızı düzenli klasörlerde saklarız.",
        "video_links": [
          {
            "title": "Dosya ve Klasör Yönetimi – Dosya Uzantıları (5. Sınıf)",
            "url": "https://www.youtube.com/watch?v=mJ2aDEV7zrA",
            "thumbnail": "/images/module3/video_tr.png"
          },
          {
            "title": "Dosya ve Klasör Kavramı (5. Sınıf)",
            "url": "https://www.youtube.com/watch?v=zgeMy2T-tFY",
            "thumbnail": "/images/module3/video_tr.png"
          }
        ],
        "content": {
          "4.1": {
            "title": "Kapasite Birimleri (Büyükten Küçüğe)",
            "description": "Ölçü birimleri nasıl 'gram-kilogram' diye gidiyorsa, bilgisayarda da 'byte-kilobyte' diye gider. 1024 kuralı vardır (1 KB = 1024 Byte).",
            "image": "/images/module1_capacity_units.png",
            "visual_comparison": [
              {
                "unit": "Bit",
                "size": "En küçük yapıtaşı",
                "example": "Tek bir 0 veya 1 rakamı."
              },
              {
                "unit": "Byte (B)",
                "size": "8 Bit'in birleşimi",
                "example": "Klavyeden basılan 1 harf (Örn: 'A')."
              },
              {
                "unit": "Kilobyte (KB)",
                "size": "1024 Byte",
                "example": "Yarım sayfalık bir düz yazı."
              },
              {
                "unit": "Megabyte (MB)",
                "size": "1024 KB",
                "example": "Bir MP3 şarkı (yaklaşık 5MB) veya bir dijital fotoğraf."
              },
              {
                "unit": "Gigabyte (GB)",
                "size": "1024 MB",
                "example": "Bir HD Film (2-3 GB) veya modern bir oyunun kapladığı alan (50GB+)."
              },
              {
                "unit": "Terabyte (TB)",
                "size": "1024 GB",
                "example": "Devasa bir arşiv. Yaklaşık 500.000 fotoğraf veya 250 film saklanabilir."
              }
            ]
          },
          "4.2": {
            "title": "Dosya Uzantıları (Dosyaların Soyadları)",
            "description": "Dosya isminden sonraki nokta ve onu takip eden harfler (uzantı), o dosyanın türünü ve hangi programla açılacağını gösterir. Bilgisayar bu sayede müziği müzik çalarla, yazıyı kelime işlemciyle açar.",
            "image": "/images/module1_file_extensions.png",
            "common_extensions": [
              {
                "ext": ".txt / .docx",
                "type": "Metin ve Belge",
                "icon": "📝",
                "example": "Not Defteri veya Word dosyası"
              },
              {
                "ext": ".jpg / .png / .gif",
                "type": "Resim ve Görsel",
                "icon": "🖼️",
                "example": "Fotoğraf, Logo veya Hareketli Resim"
              },
              {
                "ext": ".mp3 / .wav",
                "type": "Ses ve Müzik",
                "icon": "🎵",
                "example": "Şarkı veya ses kaydı"
              },
              {
                "ext": ".mp4 / .avi / .mov",
                "type": "Video ve Film",
                "icon": "🎬",
                "example": "Telefonla çekilen video veya film"
              },
              {
                "ext": ".pdf",
                "type": "E-Kitap / Belge",
                "icon": "📕",
                "example": "Değiştirilemeyen kitap formatı"
              },
              {
                "ext": ".exe",
                "type": "Uygulama (DİKKAT)",
                "icon": "⚙️",
                "example": "Kurulum dosyaları (Executable - Çalıştırılabilir). Bilmediğiniz .exe dosyalarını açmayın!"
              },
              {
                "ext": ".zip / .rar",
                "type": "Sıkıştırılmış Arşiv",
                "icon": "📦",
                "example": "Paketlenmiş çoklu dosyalar"
              }
            ]
          },
          "4.3": {
            "title": "Klasörleme Mantığı ve Düzen",
            "description": "Binlerce dosya arasında kaybolmamak için 'Dolap-Raf' mantığını kullanırız. Dosyaları türlerine veya konularına göre klasörlere ayırırız.",
            "image": "/images/module1_folder_structure.png",
            "organization_tips": [
              "Hiyerarşi Oluştur: Ana Klasör (Dersler) -> Alt Klasör (Matematik) -> Dosya (Ödev.docx)",
              "Türe Göre Ayır: 'Müziklerim', 'Resimlerim', 'Videolarım' standart klasörlerini kullan.",
              "Anlamlı İsimler Ver: 'adsız1.jpg' yerine 'Ankara_Gezisi_2024.jpg' yaz.",
              "Masaüstü Temizliği: Masaüstünde sadece çok sık kullandığın 3-5 simge olsun, gerisini klasörlere taşı. Bu bilgisayarını hızlandırır."
            ]
          }
        },
        "activities": [
          {
            "activity_title": "Veri Birimleri Bulmacası",
            "activity_desc": "İpucu seç ve harfleri doldur (1024 byte = 1 KB vb.).",
            "activity_type": "data_units_crossword_wordwall"
          },
          {
            "activity_title": "Dosya Uzantıları Uçak Oyunu",
            "activity_desc": "Doğru uzantı bulutlarından geç, yanlış bulutlardan kaçın. Tamamlayınca otomatik ilerler.",
            "activity_type": "file_extensions_airplane"
          }
        ]
      },
      {
        "id": 5,
        "title": "🛡️ Dijital sağlık, etik ve güvenlik",
        "subtitle": "Ergonomi, Vir\u00fcsler ve G\u00fc\u00e7l\u00fc \u015eifreler",
        "intro": "Teknolojiyi kullanırken hem vücut sağlığımızı (ergonomi) korumalı hem de dijital dünyadaki kötü niyetli kişilerden/yazılımlardan korunmayı öğrenmeliyiz.",
        "video_links": [
          {
            "title": "ASELSAN Tekno Macera: Siber Güvenlik (Çocukça Anlatım)",
            "url": "https://www.youtube.com/watch?v=qjQ6mU7NiSc",
            "thumbnail": "/images/module3/video_tr.png"
          },
          {
            "title": "Çocuklar İçin: Güçlü Şifre Nasıl Oluşturulur?",
            "url": "https://www.youtube.com/watch?v=ZRI6pw7hz8Y",
            "thumbnail": "/images/module3/video_tr.png"
          }
        ],
        "content": {
          "5.1": {
            "title": "Ergonomi (Bilgisayar Kullanırken Sağlık)",
            "description": "Bilgisayar başında yanlış oturmak; bel, boyun ve göz rahatsızlıklarına yol açar. Doğru oturuş kurallarına 'Ergonomi' denir.",
            "image": "/images/module1_ergonomics.png",
            "checklist": [
              "✅ Monitörün üst kenarı göz hizasında olmalı (Ne çok yukarıda ne aşağıda).",
              "✅ Sırt destekli bir sandalye kullanılmalı ve dik oturulmalı.",
              "✅ Ayaklar yere tam basmalı (Yetişmiyorsa altına kutu koyulmalı).",
              "✅ Kollar dirsekten 90 derece açıyla bükülmeli, bilekler düz tutulmalı.",
              "✅ 20-20-20 Kuralı: Her 20 dakikada bir, 20 saniye boyunca 20 metre uzağa bakarak gözlerini dinlendir."
            ]
          },
          "5.2": {
            "title": "Dijital Tehditler (Zararlı Yazılımlar)",
            "description": "İnternetteki kötü niyetli yazılımlar bilgisayarımıza sızıp bilgi çalabilir veya dosyaları silebilir.",
            "image": "/images/module1_digital_threats.png",
            "threat_types": [
              {
                "name": "Virüs",
                "description": "Hasta bir insandan diğerine bulaşan grip gibi, disket veya internet yoluyla bulaşıp dosyalara zarar verir.",
                "protection": "Güvenilir bir Antivirüs programı kullan."
              },
              {
                "name": "Truva Atı (Trojan)",
                "description": "Dışarıdan hediye veya oyun gibi görünen ama arka planda kapıları açıp hırsızları içeri alan sinsi yazılımdır.",
                "protection": "Kaynağını bilmediğin dosyaları/oyunları indirme."
              },
              {
                "name": "Phishing (Oltalama)",
                "description": "Sanki bankadan veya oyundan geliyormuş gibi görünen sahte e-postalarla şifreni çalmaya çalışırlar.",
                "protection": "E-postanın gönderen kısmını ve linkleri dikkatlice kontrol et. Asla şifreni yazma."
              }
            ]
          },
          "5.3": {
            "title": "Güçlü Şifre Oluşturma ve Güvenlik",
            "description": "Şifrelerin senin dijital anahtarındır. Kolay tahmin edilen şifreler kullanmak, evinin kapısını açık bırakmak gibidir.",
            "image": "/images/module1_strong_passwords.png",
            "password_rules": [
              "✅ En az 8-10 karakter uzunluğunda olmalı.",
              "✅ Büyük harf (A), küçük harf (a), rakam (1) ve sembol (?, @, !) karışık kullanılmalı.",
              "✅ Şifreni kimseyle (en yakın arkadaşınla bile) paylaşma.",
              "✅ İki Aşamalı Doğrulama (2FA) kullan: Şifreni bilseler bile telefonuna gelen kodu bilemezler.",
              "❌ '123456', '1234', 'password', 'galatasaray' gibi tahmin edilebilir şifreler kullanma.",
              "❌ Adın, soyadın veya doğum tarihin şifrenin tamamı olmamalı."
            ],
            "examples": {
              "bad": [
                "123456",
                "sifre123",
                "qwerty",
                "ali2012"
              ],
              "good": [
                "Mavi.Elma?99",
                "Kare#Prizma!24",
                "Gunes$Batarken7"
              ]
            }
          },
          "5.4": {
            "title": "Bilişim Etiği ve Telif Hakkı",
            "description": "Gerçek hayatta hırsızlık yapmak nasıl suçsa, dijital dünyada da başkasının emeğini izinsiz kullanmak suçtur (Telif Hakkı İhlali). Her yaptığımızın internette bir iz bıraktığını (Dijital Ayak İzi) unutmamalıyız.",
            "image": "/images/module1_copyright.png",
            "scenarios": [
              {
                "situation": "Ücretli bir oyunu 'crack'li (korsan) indirmek.",
                "wrong": "Bu hırsızlıktır (Kul hakkı). Ayrıca bilgisayarına virüs bulaştırma riski çok yüksektir.",
                "right": "Harçlıklarını biriktirip satın almak veya ücretsiz alternatiflerini oynamak."
              },
              {
                "situation": "İnternetten bulduğun bir resmi ödevinde 'ben çizdim' diyerek kullanmak.",
                "wrong": "İntihaldir (Bilgi hırsızlığı).",
                "right": "Resmin altına 'Kaynak: ... sitesinden alınmıştır' yazmak."
              }]
          }
        },
        "activity_title": "Aktivite: Senaryo Bazlı Test",
        "activity_desc": "Örnek Olay: 'Ayşe, e-postasına gelen ve ödül kazandığını söyleyen linke tıkladı.' Soru: Ayşe hangi hatayı yaptı? (Oltalama tuzağına düştü).",
        "activity_type": "scenario_test"
      }
    ]
  }
};
export default MODULE1_TR;




