export const MODULE2_TR = {
  module_2: {
    title: "Modül 2: Dijital Ayak İzi ve Çevrimiçi Gizlilik",
    subtitle: "🔍 Dijital Kalkan ve Görünmez İzler",
    hero_image: "/images/module2/digital_footprint_hero.png",
    sections: [
      {
        id: 1,
        title: "🔍 Dijital Ayak İzi Nedir?",
        intro:
          "Her dijital harekette bir iz bırakırsın. Bazen bilerek, bazen farkında olmadan. Bu izleri anlamak ve yönetmek çok önemli!",
        activity_title: "📖 Aktivite: Dijital Ayak İzi Hikayesi",
        activity_desc:
          "Dijital ayak izinin nasıl oluştuğunu ve etkilerini öğrenmek için bu interaktif hikayeyi oku.",
        activity_type: "packet_delivery",
        content: {
          "1.1": {
            title: "Dijital Ayak İzi Nedir?",
            description:
              "Dijital ayak izi, internette yaptığımız her hareketin geride bıraktığı izlerin tamamıdır. Sosyal medyada paylaştığımız fotoğraflar, yazdığımız yorumlar, arama geçmişimiz ve izlediğimiz videolar bu izlerin bir parçasıdır. İnternette attığımız her adım, tıpkı karda yürürken oluşan ayak izleri gibi görünmez ama kalıcı olabilir.",
            image: "/images/module2/digital_footprint_hero.png",
            story_images: true,
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
                question:
                  "Dijital ayak izi sadece sosyal medya paylaşımlarından oluşur.",
                answer: false,
                explanation_tr: "Dijital ayak izi sosyal medyanın çok ötesine geçer. Arama geçmişin, izlediğin videolar, oynadığın oyunlar ve gönderdiğin mesajlar da dijital ayak izinin parçasıdır."
              },
              {
                type: "true_false",
                question: "İnternette yapılan her hareket iz bırakabilir.",
                answer: true,
                explanation_tr: "Evet! Bir siteye tıklamak, video izlemek, hatta sadece bir sayfayı ziyaret etmek bile sunucularda iz bırakabilir. Dijital dünyada her adım kaydedilebilir."
              },
              {
                type: "true_false",
                question: "Bir gönderiyi silince internetten tamamen yok olur.",
                answer: false,
                explanation_tr: "Silmek içeriği kaldırsa da, birisi daha önce ekran görüntüsü almış ya da site arşivlemiş olabilir. İnternet gerçekten asla unutmaz!"
              },
              {
                type: "multiple_choice",
                question: "Dijital ayak izine hangisi örnektir?",
                options: [
                  { text: "A) Deftere not almak", correct: false },
                  { text: "B) İnternette video izlemek", correct: true },
                  { text: "C) Kitap okumak", correct: false },
                  { text: "D) Spor yapmak", correct: false }
                ],
                explanation_tr: "İnternette video izlemek, izleme geçmişinde ve platformun veri tabanında iz bırakır. Deftere not almak, kitap okumak ve spor yapmak internette hiç iz bırakmaz."
              }
            ]
          },
          "1.2": {
            title: "Dijital Ayak İzinin Kalıcılığı",
            description:
              "İnternet asla unutmaz. Bu izler başkaları tarafından görülebilir, saklanabilir ve kopyalanabilir. Bir gönderi silinse bile ekran görüntüsü alınmış olabilir. Bu yüzden 'paylaşmadan önce düşünmek' dijital dünyada çok önemlidir.",
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
        }
      },
      {
        id: 2,
        title: "🎯 Aktif ve Pasif Dijital Ayak İzi",
        intro:
          "Dijital ayak izimiz iki şekilde oluşur: Aktif ve Pasif. Her ikisini de anlamak önemlidir!",
        activity_title: "🎮 Aktivite: Hangi İz? Kart Oyunu",
        activity_desc:
          "Verilen durumları oku ve doğru kartı (Aktif/Pasif) seç.",
        content: {
          "2.1": {
            title: "Aktif Dijital Ayak İzi",
            description:
              "Aktif dijital ayak izi, kullanıcının bilerek ve isteyerek yaptığı paylaşımlardır. Instagram'a fotoğraf yüklemek, bir blog yazısı yazmak veya bir YouTube videosuna yorum yapmak buna örnektir. Kontrol tamamen bizdedir.",
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
                answer: true,
                explanation_tr: "Aktif dijital ayak izi, bilerek ve isteyerek yaptığımız paylaşımlardır. Bir yorum yazmak tamamen senin kararın olduğu için aktif bir iz bırakırsın."
              }
            ]
          },
          "2.2": {
            title: "Pasif Dijital Ayak İzi",
            description:
              "Pasif dijital ayak izi ise biz farkında olmadan arka planda oluşur. İnternette gezinirken sitelerin bizi takip etmesi (çerezler), konum bilgilerimizin kaydedilmesi veya IP adresimiz buna dahildir. Reklamların son zamanlarda arattığımız konulara göre karşımıza çıkması pasif ayak izinin bir sonucudur.",
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
                question:
                  "Sitelerin beni takip eden çerezleri (cookies) aktif ayak izidir.",
                answer: false,
                explanation_tr: "Çerezler arka planda ve farkında olmadan çalışır. Bir şey paylaşmıyorsun; site senin hakkında bilgi topluyor. Bu yüzden pasif ayak izidir."
              },
              {
                type: "true_false",
                question:
                  "Konumumu kullanan bir harita uygulaması pasif iz bırakır.",
                answer: true,
                explanation_tr: "Harita uygulaması arka planda konum verini otomatik toplar. Sen bunu 'yayınlamıyorsun', uygulama kendisi kaydediyor. Bu pasif bir iz bırakmaktır."
              }
            ]
          },
          "2.3": {
            title: "Aktif ve Pasif İzlerin Birleşimi",
            description:
              "Hem aktif hem pasif izler bir araya gelerek bizim dijital profilimizi oluşturur. Bu profil, şirketler ve platformlar tarafından reklam göstermek, içerik önermek veya davranış analizi yapmak için kullanılabilir.",
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
        intro:
          "Kişisel bilgilerimiz dijital dünyada kimliğimizin anahtarları gibidir. Bu anahtarları nasıl koruyacağımızı öğrenelim!",
        activity_title: "📝 Quiz: Güvenli/Güvensiz Eşleştirme",
        activity_desc:
          "Verilen eylemleri oku ve uygun kutuya (Güvenli/Güvensiz) sürükle.",
        content: {
          "3.1": {
            title: "Kişisel Bilgi Nedir?",
            description:
              "Kişisel bilgi; tam adımız, ev adresimiz, telefon numaramız, TC kimlik numaramız, gittiğimiz okul ve doğum tarihimiz gibi bizi tanımlayan bilgilerdir. Bu bilgiler, dijital dünyada kimliğimizin anahtarları gibidir ve çok değerlidir.",
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
                ],
                explanation_tr: "En sevdiğin renk seni tanımlamaz ve gizliliğini tehlikeye atmaz. Ama telefon numaran, doğum tarihin ve ev adresin seni doğrudan tanımlayan özel bilgilerdir — bunları internette paylaşma!"
              }
            ]
          },
          "3.2": {
            title: "Gizlilik Ayarları",
            description:
              "Kullandığımız uygulamalar bize 'gizlilik ayarları' sunar. Bu ayarlar, sanal evimizin kapısını kilitlemek gibidir. Profilimizi 'Herkese Açık' yapmak yerine, sadece tanıdığımız 'Arkadaşlarımıza' açık tutmak, yabancıların bilgilerimize erişmesini engeller.",
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
                answer: false,
                explanation_tr: "Ev adresin en özel bilgilerinden biridir. Kötü niyetli kişiler bu bilgiyi seni bulmak için kullanabilir. Sosyal medyada kesinlikle paylaşılmamalıdır!"
              },
              {
                type: "true_false",
                question:
                  "Gizlilik ayarları, bilgilerimizi kimlerin göreceğini kontrol etmemizi sağlar.",
                answer: true,
                explanation_tr: "Evet! Gizlilik ayarları sayesinde profilini sadece arkadaşlarına açık tutabilir, yabancıların seni görmesini engelleyebilirsin. Bu dijital güvenliğin temelidir."
              },
              {
                type: "true_false",
                question: "Profilimi 'Herkese Açık' yapmak en güvenli yöntemdir.",
                answer: false,
                explanation_tr: "Herkese açık profil, milyonlarca yabancının bilgilerini görebileceği anlamına gelir. En güvenli yöntem profili 'Sadece Arkadaşlar' olarak ayarlamaktır."
              },
              {
                type: "true_false",
                question:
                  "Okul formamın logosunun göründüğü bir fotoğrafı profil resmi yapmamalıyım.",
                answer: true,
                explanation_tr: "Okul forması logosundan birisi hangi okula gittiğini öğrenebilir. Bu bilgi, nerede olduğunu tahmin etmek için kullanılabilir. Profil fotoğrafında tanımlanabilir detaylar olmamalı."
              },
              {
                type: "multiple_choice",
                question:
                  "Bir oyun uygulaması gereksiz yere senin 'Rehberine' erişmek isterse ne yapmalısın?",
                options: [
                  { text: "A) İzin vermelisin", correct: false },
                  { text: "B) Reddetmelisin", correct: true },
                  { text: "C) Arkadaşlarına sormalısın", correct: false }
                ],
                explanation_tr: "Bir oyunun rehberine ihtiyacı yoktur. Gereksiz izin istekleri, uygulamanın senin kişisel verilerini toplayabileceğinin işaretidir. Her zaman 'neden bu izni istiyor?' diye sor!"
              },
              {
                type: "multiple_choice",
                question: "İnternette paylaşmak için en güvenli bilgi hangisidir?",
                options: [
                  { text: "A) Ev adresin", correct: false },
                  { text: "B) Tuttuğun takımın bayrağı", correct: true },
                  { text: "C) Okulunun tam adı", correct: false }
                ],
                explanation_tr: "Tuttuğun takımın bayrağı hakkında kişisel bir şey açıklamaz ve seni tanımlamaz. Ev adresi ve okul adı ise nerede olduğunu gösterebilir — bunlar tehlikeli bilgilerdir."
              }
            ]
          },
          "3.3": {
            title: "Güvenli ve Güvensiz Paylaşımlar",
            description:
              "Profil fotoğrafımız genellikle gizlenemez. Bu nedenle, profil fotoğraflarında okul formamızın logosu veya evimizin dış görünüşü gibi bulunduğumuz yeri belli edecek detayları paylaşmaktan kaçınmalıyız.",
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
        intro:
          "Bugün internette yaptığımız eğlenceli veya anlık bir paylaşım, yıllar sonra karşımıza çıkabilir. İnternet unutmuyor!",
        activity_title: "🎮 Aktivite: Gelecekte Sorun Olur mu?",
        activity_desc:
          "Verilen kartları oku ve 'Sorun Olur' veya 'Sorun Olmaz' kutusuna yerleştir.",
        content: {
          "4.1": {
            title: "Dijital İtibar",
            description:
              "Gelecekte iyi bir üniversiteye veya hayalinizdeki işe başvururken, yetkililer sizin 'dijital itibarınıza' bakabilirler. Dijital itibar, internette nasıl biri olarak göründüğünüzdür.",
            image: "/images/module2/digital_reputation_tr.png",
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
            description:
              "Geçmişte yapılan kaba yorumlar, uygunsuz şakalar veya saldırgan paylaşımlar, gelecekteki büyük fırsatları kaçırmanıza neden olabilir. Bugünün 'komik' paylaşımı, yarının 'büyük sorunu' olmamalıdır.",
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
        intro:
          "Dijital dünyada güvende kalmak ve temiz bir ayak izi bırakmak için bazı kurallar vardır. Bu kuralları öğrenelim!",
        activity_title: "📝 Quiz: Güvenli Davranışlar",
        activity_desc: "Güvenli dijital davranışlar hakkındaki soruları cevapla.",
        content: {
          "5.1": {
            title: "T.H.I.N.K. Kuralı",
            description:
              "Paylaşmadan Önce Düşün (T.H.I.N.K.): Paylaşacağın şey Doğru mu (True)? Yararlı mı (Helpful)? İlham verici mi (Inspiring)? Gerekli mi (Necessary)? Nazik mi (Kind)? Değilse paylaşma.",
            image: "/images/module2/think_rule.png",
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
            description:
              "Sosyal medya hesaplarının ayarlarını düzenli olarak kontrol et ve sadece tanıdıklarına açık olduğundan emin ol.",
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
            description:
              "İnternette gördüğün her bilgiye hemen inanma. Bilgiyi farklı ve güvenilir kaynaklardan doğrula (teyit et).",
            points: [
              "Bilgiyi farklı kaynaklardan kontrol et",
              "Güvenilir kaynakları kullan",
              "Sahte haberleri tespit et",
              "Doğrulamadan paylaşma"
            ]
          },
          "5.4": {
            title: "Bağlantılara Dikkat",
            description:
              "Tanımadığın kişilerden gelen mesajlardaki bağlantılara veya dosyalara asla tıklama.",
            points: [
              "Tanımadığın kişilerden gelen linklere tıklama",
              "Şüpheli dosyaları indirme",
              "Güvenilir kaynaklardan gelen linkleri kontrol et",
              "E-posta bağlantılarına dikkat et"
            ],
            quiz: [
              {
                type: "multiple_choice",
                question:
                  "Paylaş düğmesine basmadan önce yapman gereken EN ÖNEMLİ şey nedir?",
                options: [
                  { text: "A) Hızlıca paylaşmak.", correct: false },
                  {
                    text: "B) Durup, paylaşımın nazik ve güvenli olup olmadığını düşünmek.",
                    correct: true
                  },
                  { text: "C) Kaç beğeni alacağını tahmin etmek.", correct: false }
                ],
                explanation_tr: "T.H.I.N.K. kuralına göre: paylaşmadan önce 'Bu doğru mu? Yararlı mı? İlham verici mi? Gerekli mi? Nazik mi?' diye sorman gerekir. Hız veya beğeni sayısı değil, güvenlik ve saygı önemlidir!"
              }
            ]
          }
        },
        activity_type: "interactive_quiz"
      },
      {
        id: 6,
        title: "🎭 Senaryo Quiz - Zeynep'in Hikayesi",
        intro:
          "Zeynep (13 yaşında), sınıf arkadaşı Can'ın sınıfta uyuyakalmış çok komik ama biraz da utanç verici bir fotoğrafını gizlice çeker. Fotoğrafı sınıfın WhatsApp grubunda paylaşarak herkesi güldürmek ister. Tam fotoğrafı gönderecekken telefonuna indirdiği yeni bir oyun uygulamasından bir bildirim gelir: 'Bu uygulama rehberinize ve fotoğraflarınıza erişmek istiyor. İzin verilsin mi?'",
        activity_title: "📝 Senaryo Quiz: Zeynep'in Kararları",
        activity_desc: "Zeynep'in hikayesini oku ve soruları cevapla.",
        content: {
          "6.1": {
            title: "Senaryo Soruları",
            description: "Zeynep'in durumunu analiz et ve doğru kararları ver.",
            quiz: [
              {
                type: "multiple_choice",
                question:
                  "Zeynep fotoğrafı paylaşırsa, bu nasıl bir dijital ayak izi türü olur?",
                options: [
                  { text: "A) Pasif dijital ayak izi", correct: false },
                  {
                    text: "B) Aktif dijital ayak izi (kendi isteğiyle paylaşıyor)",
                    correct: true
                  },
                  { text: "C) Hiçbiri", correct: false }
                ],
                explanation_tr: "Zeynep fotoğrafı kendisi, bilerek ve isteyerek paylaşıyor. Bu bilinçli bir eylem olduğundan aktif dijital ayak izidir. Pasif ayak izi ise farkında olmadan oluşur."
              },
              {
                type: "multiple_choice",
                question:
                  "Zeynep'in, Can'ın fotoğrafını ondan izinsiz çekip paylaşması doğru mudur?",
                options: [
                  { text: "A) Evet, komik olduğu için paylaşabilir", correct: false },
                  {
                    text: "B) Hayır, Can'ın kişisel gizliliğini ihlal eder ve onu rencide edebilir (dijital zorbalık sayılabilir)",
                    correct: true
                  },
                  { text: "C) Fark etmez", correct: false }
                ],
                explanation_tr: "Bir kişinin izni olmadan fotoğrafını çekmek ve paylaşmak hem gizlilik hakkını ihlal eder hem de dijital zorbalık sayılabilir. Komik olması bunu haklı kılmaz — empati kurmak önemlidir!"
              },
              {
                type: "multiple_choice",
                question:
                  "Oyun uygulamasının 'rehber ve fotoğraf erişim isteğine' Zeynep ne cevap vermelidir?",
                options: [
                  { text: "A) Evet, hemen izin vermelidir", correct: false },
                  {
                    text: "B) Hayır, reddetmelidir. Bir oyunun rehbere ihtiyacı yoktur.",
                    correct: true
                  },
                  { text: "C) Önemsemeden kapatmalıdır", correct: false }
                ],
                explanation_tr: "Bir oyunun rehbere veya fotoğraflara erişmesi için hiçbir mantıklı sebep yoktur. Bu gereksiz izin istekleri, veri toplamaya çalışan şüpheli uygulamaların belirtisidir — her zaman reddet!"
              },
              {
                type: "multiple_choice",
                question:
                  "Bu senaryoda Zeynep için EN DOĞRU davranış zinciri nedir?",
                options: [
                  { text: "A) Fotoğrafı paylaş ve oyuna izin ver", correct: false },
                  {
                    text: "B) Can'ın fotoğrafını silmeli ve paylaşmamalıdır (başkasına saygı). Ayrıca oyunun gereksiz erişim isteğini reddetmelidir (kendi gizliliğini koruma).",
                    correct: true
                  },
                  { text: "C) Sadece fotoğrafı paylaşma", correct: false }
                ],
                explanation_tr: "İki farklı etik karar birden doğru: Başkasının gizliliğini korumak (Can'ın fotoğrafını silmek) ve kendi gizliliğini korumak (gereksiz uygulama iznini reddetmek). İkisi de eşit önemde!"
              }
            ]
          }
        },
        activity_type: "interactive_quiz"
      }
    ]
  }
};

export default MODULE2_TR;
