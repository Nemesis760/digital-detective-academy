// -*- coding: utf-8 -*-

export const MODULE3_TR = {
  module_3: {
    title: "Modül 3: Bilgisayar Ağları ve Dijital İletişim",
    
    hero_image: "/images/module3/module3_hero_tr.png",

    sections: [
      {
        id: 1,
        title: "Ağ Nedir? İletişimin Tarihsel Gelişimi",
        subtitle: "Ağ kavramını günlük hayattan anlamak",
        intro:
          "Ağ, birbirine bağlı noktaların oluşturduğu yapıdır. Balık ağı ve örümcek ağı gibi. Bilgisayar ağında ise cihazlar kablolu veya kablosuz şekilde bağlanır ve bilgi alışverişi yapar.",
        content: {
          "1.1": {
            title: "Ağ (Network) Nedir?",
            description:
              "Bilgisayar ağı; bilgisayarlar, tabletler, yazıcılar gibi cihazların veri paylaşmak için birbirine bağlanmasıdır.",
            image: "/images/module3/m3_network_definition_tr.png",
            points: [
              "Ağ: Bağlı cihazlar topluluğu",
              "Amaç: Veri paylaşımı ve iletişim",
              "Kablolu veya kablosuz olabilir",
              "Her ağda internet olmak zorunda değildir",
            ],
            examples: [
              "Okulda bilgisayar laboratuvarındaki bilgisayarların aynı yazıcıya bağlanması",
              "Evde telefon, tablet ve laptopun aynı Wi-Fi'ye bağlanması",
            ],
            video_links: [
              {
                title: "Bilgisayar Ağları",
                url: "https://youtu.be/PDixDk-1N70?si=ZLjgeZkA-y7uWpwT",
                thumbnail: "/images/module3/video_tr.png",
              },
            ],
          },

          "1.2": {
            title: "İletişim Nasıl Gelişti?",
            description:
              "İletişim; mektup, telgraf, telefon, radyo/TV, uydu ve internet ile hızlandı.",
            image: "/images/module3/m3_comm_timeline_tr.png",
            points: [
              "İletişim araçları zamanla hızlandı",
              "İnternet: çok hızlı ve yaygın",
              "Hız artarsa güvenlik ihtiyacı artar",
            ],
            video_links: [
              {
                title: "İletişimin Tarihsel Gelişimi",
                url: "https://youtu.be/k6iVvBPFlog?si=mG348fK6MHwf066e",
                thumbnail: "/images/module3/video_tr.png",
              },
            ],
            quiz: [
              {
                type: "true_false",
                question_tr: "Okuldaki bilgisayarların aynı yazıcıya bağlanması bir ağ örneğidir.",
                answer: true,
                explanation_tr: "Birden fazla cihazın veri paylaşmak için birbirine bağlanması bir ağ oluşturur. Sınıftaki bilgisayarlar yazıcıya bağlandığında yerel bir ağ (LAN) kurulmuş olur."
              },
              {
                type: "true_false",
                question_tr: "İnternete bağlı olmayan tek bir bilgisayar bir ağdır.",
                answer: false,
                explanation_tr: "Bir ağ oluşabilmesi için en az iki cihazın birbirine bağlı olması gerekir. Tek başına çalışan bir bilgisayar, başka hiçbir cihaza bağlı değilse ağ sayılmaz."
              },
              {
                type: "multiple_choice",
                question_tr: "Hangisi bir bilgisayar ağı örneğidir?",
                options: [
                  { text_tr: "A) Evdeki telefon, tablet ve laptopun aynı Wi-Fi'ye bağlanması", correct: true },
                  { text_tr: "B) Sadece bir bilgisayarın çalışması", correct: false },
                  { text_tr: "C) Bir kitabın okunması", correct: false },
                  { text_tr: "D) Bir hesap makinesi kullanmak", correct: false }
                ],
                explanation_tr: "Telefon, tablet ve laptopun aynı Wi-Fi'ye bağlanması, cihazların birbirleriyle ve internetle veri paylaşmasına olanak tanır — bu bir ev ağıdır (LAN)."
              }
            ],
          },
        },

        activity_title: "Mini Etkinlik: Ağ Örneklerini Seç",
        activity_desc: "Hangileri bir bilgisayar ağına örnektir?",
        activity_type: "interactive_quiz",
      },

      {
        id: 2,
        title: "İnternet Nedir? Veri Paketleri Nasıl Yolculuk Eder?",
        subtitle: "Dijital dünyanın otoyolları",
        intro:
          "İnternet, dünyadaki milyarlarca cihazın birbirine bağlı olduğu dev bir ağdır.",
        content: {
          "2.1": {
            title: "İnternet Nedir?",
            description:
              "Bir siteye girdiğinde bilgi, farklı bir şehir/ülkedeki sunucudan sana gelir.",
            image: "/images/module3/m3_internet_overview_tr.png",
            points: [
              "İnternet: Ağların ağı",
              "Sunucular bilgiyi saklar ve gönderir",
              "Veri saniyeler içinde taşınır",
            ],
            video_links: [
              {
                title: "İnternet nedir?",
                url: "https://www.youtube.com/watch?v=hjjLnUMcJfs",
                thumbnail: "/images/module3/video_tr.png",
              },
            ],
          },

          "2.2": {
            title: "Paketler Nasıl Gider?",
            description: "Büyük dosyalar küçük parçalara bölünür (paket).",
            image: "/images/module3/m3_packets_travel_tr.png",
            points: [
              "Dosya paketlere bölünür",
              "Her pakette hedef bilgisi bulunur",
              "Hedefte tekrar birleştirilir",
            ],
          },
        },
      },

      {
        id: 3,
        title: "Tarayıcı ve Arama Motoru",
        subtitle: "Siteye girmek mi, aramak mı?",
        intro:
          "Web tarayıcı internette sayfaları açan programdır. Arama motoru ise bilgi bulmaya yardımcı olur.",
        content: {
          "3.1": {
            title: "Web Tarayıcı Nedir?",
            description: "Tarayıcı; internet sayfalarını görüntüleyen programdır.",
            image: "/images/module3/m3_browser_TR.jpg",
            points: [
              "Tarayıcı = sayfayı açan program",
              "Adres çubuğu tarayıcıdadır",
              "Sekmelerle birden çok sayfa açabilirsin",
            ],
            video_links: [
              {
                title: "Tarayıcı ve arama motoru farkı",
                url: "https://www.youtube.com/watch?v=Rn9XcSTQl8A",
                thumbnail: "/images/module3/video_tr.png",
              },
            ],
          },

          "3.2": {
            title: "Arama Motoru Nedir?",
            description:
              "Arama motoru; internetteki sayfalar arasında arama yapar.",
            image: "/images/module3/m3_search_engine_tr.png",
            points: [
              "Arama motoru = bilgi bulmaya yarar",
              "Doğru anahtar kelime önemli",
              "Her gördüğün bilgi doğru olmayabilir",
            ],
          },
        },

        activity_title: "Aktivite: Tarayıcı mı, Arama Motoru mu?",
        activity_desc: "Örnekleri doğru kutuya eşleştir.",
        activity_type: "card_matching",
        activity_key: "browser_search",
      },

      {
        id: 4,
        title: "İnternet Adresi (URL) ve Uzantılar",
        subtitle: "www.meb.gov.tr ne demek?",
        intro: "Bir web sitesine girmek için adres (URL) kullanırız.",
        content: {
          "4.1": {
            title: "URL Parçaları",
            description:
              "Örnek: www.meb.gov.tr -> www (servis), meb (alan adı), gov (kurum türü), tr (ülke).",
            image: "/images/module3/m3_url_parts_tr.png",
            points: [
              "Alan adı: sitenin adı",
              "Site uzantısı: tür (gov, com, org, edu)",
              "Ülke uzantısı: tr",
            ],
            video_links: [
              {
                title: "URL nedir? alan adı ve uzantı",
                url: "https://www.youtube.com/watch?v=ojuCsBIKyDY",
                thumbnail: "/images/module3/video_tr.png",
              },
            ],
          },

          "4.2": {
            title: "Uzantılar Ne Anlatır?",
            description: "Uzantılar sitenin türünü anlatabilir.",
            image: "/images/module3/m3_domain_extensions_tr.png",
            points: [
              ".edu.tr -> eğitim",
              ".gov.tr -> devlet",
              ".com.tr -> ticari",
              ".org.tr -> organizasyon",
            ],
          },
        },

        activity_title: "Aktivite: URL Parçala",
        activity_desc: "Bir adresi parçalarına ayır.",
        activity_type: "interactive_quiz",
        activity_key: "url_parts",
      },

      {
        id: 5,
        title: "Ağ Türleri: Ev, Okul ve Halka Açık Wi-Fi",
        subtitle: "Farklı ağlar, farklı güvenlik",
        intro:
          "Ev, okul ve halka açık ağlar farklı güvenlik seviyelerine sahiptir.",
        content: {
          "5.1": {
            title: "Ev Ağı",
            description: "Ev ağı genelde şifrelidir.",
            image: "/images/module3/m3_home_network_tr.png",
            points: ["Şifreli olmalı", "Özel işlemler için daha güvenli"],
          },
          "5.2": {
            title: "Okul Ağı",
            description: "Okul ağında filtre ve kurallar olabilir.",
            image: "/images/module3/m3_school_network_tr.png",
            points: ["Kurallara uy", "Bazı siteler engelli olabilir"],
          },
          "5.3": {
            title: "Halka Açık Wi-Fi",
            description: "Halka açık Wi-Fi daha risklidir.",
            image: "/images/module3/m3_public_wifi_tr.png",
            points: ["Herkes bağlanabilir", "Şifre girmemek daha güvenli"],
            video_links: [
              {
                title: "Wi-Fi güvenliği (çocuklar için)",
                url: "https://www.youtube.com/watch?v=GgdK2rdJTrE",
                thumbnail: "/images/module3/video_tr.png",
              },
            ],
          },
        },

        activity_title: "Aktivite: Ağ Türleri Eşleştirme",
        activity_desc: "Durumları doğru ağ türü ile eşleştir.",
        activity_type: "card_matching",
        activity_key: "network_types",
      },

      {
        id: 6,
        title: "Veri - İstemci - Sunucu",
        subtitle: "Bilgi kimden kime gider?",
        intro:
          "İstemci istek gönderir, sunucu cevap verir. Veri ise taşınan bilgidir.",
        content: {
          "6.1": {
            title: "Veri (Data)",
            description: "Dosya, mesaj ve video birer veridir.",
            image: "/images/module3/m3_data_tr.png",
            points: ["Veri taşınır", "Paketlere bölünür"],
          },
          "6.2": {
            title: "İstemci (Client)",
            description: "İstek gönderen cihazlara istemci denir.",
            image: "/images/module3/m3_client_tr.png",
            points: ["Tarayıcı ile istek yapar", "Sunucudan cevap alır"],
            video_links: [
              {
                title: "İstemci-sunucu nedir?",
                url: "https://www.youtube.com/watch?v=TSDRE2J8Q70",
                thumbnail: "/images/module3/video_tr.png",
              },
            ],
          },
          "6.3": {
            title: "Sunucu (Server)",
            description: "Sunucu, hizmet veren güçlü bilgisayardır.",
            image: "/images/module3/m3_server_tr.png",
            points: ["Veriyi saklar", "Birçok istemciye cevap verir"],
          },
        },

        activity_title: "Aktivite: İstemci mi Sunucu mu?",
        activity_desc: "Örnekleri sınıflandır.",
        activity_type: "card_matching",
        activity_key: "client_server",
      },

      {
        id: 7,
        title: "Ağ Cihazları: Modem, Router, Switch, Ethernet",
        subtitle: "Bağlantının parçaları",
        intro: "Ağda modem, router, switch ve ethernet gibi parçalar vardır.",
        content: {
          "7.1": {
            title: "Modem",
            description: "Modem internet sinyalini ağa taşır.",
            image: "/images/module3/matching/modem.png",
            points: ["İnternet sinyalini alır", "Ağa aktarır"],
          },
          "7.2": {
            title: "Router",
            description: "Router cihazları bağlar ve trafiği yönetir.",
            image: "/images/module3/matching/router.png",
            points: ["Wi-Fi yayar", "Paketleri yönlendirir"],
          },
          "7.3": {
            title: "Switch",
            description: "Birçok cihazı kabloyla aynı ağa bağlar.",
            image: "/images/module3/matching/switch.png",
            points: ["Kablolu bağlantıyı çoğaltır", "Okul labında kullanılır"],
          },
          "7.4": {
            title: "Ethernet Kartı ve Ağ Kablosu",
            description: "Ethernet kablosu veri taşır.",
            image: "/images/module3/matching/ethernet_cable.png",
            points: ["Kablolu bağlantı", "Daha kararlı olabilir"],
          },
        },

        activity_title: "Aktivite: Ağ Cihazlarını Yerleştir",
        activity_desc: "İpucunu oku, doğru cihazı seç ve ağ diyagramındaki konumuna yerleştir!",
        activity_type: "network_device_placement",
      },

      {
        id: 8,
        title: "Ağ Cihazlarını Eşleştir",
        subtitle: "Görsel ve isimleri bağlayan çizgiler",
        intro:
          "Ağ cihazlarını tanımak için görselleri doğru isim kartlarıyla eşleştir.",
        content: {
          "8.1": {
            title: "Ağ Cihazları",
            description:
              "Modem, router, switch ve bağlantı teknolojilerini ayırt edebilmek ağ kullanımını kolaylaştırır.",
            image: "/images/module3/matching/network_arkaplan.png",
            points: [
              "Her cihazın görevi farklıdır",
              "Doğru isimlendirme, doğru kullanım demektir",
            ],
          },
        },

        activity_title: "Aktivite: Ağ Cihazı Eşleştirme",
        activity_desc: "Görselleri doğru isim kartlarıyla eşleştir.",
        activity_type: "network_device_matching",
        activity_key: "network_device_matching",
      },

      {
        id: 9,
        title: "Kablolu vs Kablosuz Bağlantı",
        subtitle: "Hız mı, özgürlük mü?",
        intro:
          "Kablolu bağlantı genelde hızlı ve kararlıdır. Kablosuz bağlantı daha esnektir.",
        content: {
          "9.1": {
            title: "Kablolu (Ethernet)",
            description: "Kablo ile bağlanırsın.",
            image: "/images/module3/m3_wired_vs_wireless_en_tr.png",
            points: ["Daha hızlı", "Daha az kopma"],
          },
          "9.2": {
            title: "Kablosuz (Wi-Fi)",
            description: "Kablo olmadan bağlanırsın.",
            image: "/images/module3/m3_wireless_en_tr.png",
            points: ["Hareket kolay", "Sinyal etkiler"],
          },
          "9.3": {
            title: "Hangi Durumda Hangisi?",
            description:
              "Oyun için kablolu, günlük mobil kullanım için Wi-Fi daha uygundur.",
            image: "/images/module3/m3_wired_vs_wireless_en_tr.png",
            points: ["Oyun -> kablolu", "Mobil -> Wi-Fi"],
            quiz: [
              {
                type: "true_false",
                question: "Router'dan uzaklaştıkça Wi-Fi sinyali zayıflar.",
                answer: true,
              },
              {
                type: "true_false",
                question: "Kablolu bağlantı her zaman daha güvensizdir.",
                answer: false,
              },
            ],
          },
        },

        activity_title: "Quiz: Doğru mu Yanlış mı?",
        activity_desc: "Kablolu ve kablosuz bağlantı hakkındaki ifadeleri değerlendir, doğru mu yanlış mı olduğunu seç!",
        activity_type: "interactive_quiz",
        activity_key: "wired_wireless",
      },

      {
        id: 10,
        title: "Adam Asmaca",
        intro:
          "Ağ güvenliği ve internet kavramlarını eğlenceli şekilde tekrar edelim. İpucuna bak, doğru harfleri seç ve kelimeyi bul!",
        activity_title: "Aktivite: Adam Asmaca",
        activity_desc: "İpucunu oku, doğru harfleri seç ve kelimeyi bul!",
        activity_type: "hangman",
        activity_key: "network_security_hangman",
      },

      {
        id: 11,
        title: "Ağ Güvenliği ve Ünite Değerlendirme",
        subtitle: "Güvende kal, doğru seç",
        intro: "Güvensiz ağlar kişisel bilgileri riske atabilir.",
        content: {
          "11.1": {
            title: "Ağ Güvenliği Neden Önemli?",
            description:
              "Halka açık Wi-Fi gibi ortamlarda şifre girmek risklidir.",
            image: "/images/module3/m3_network_security_en_tr.png",
            points: [
              "Şifre ve özel bilgi korunmalı",
              "Önemli işlemleri ev ağında yap",
            ],
          },
          "11.2": {
            title: "Ünite Değerlendirme Testi",
            description: "Kısa bir tekrar testi.",
            image: "/images/module3/m3_network_security_en_tr.png",
            quiz: [
              {
                type: "multiple_choice",
                question: "Aşağıdakilerden hangisi web tarayıcıdır?",
                options: [
                  { text: "A) Chrome", correct: true },
                  { text: "B) Google", correct: false },
                  { text: "C) Yahoo", correct: false },
                  { text: "D) Switch", correct: false },
                ],
              },
              {
                type: "true_false",
                question: "Her ağ bağlantısında internet olmak zorunda değildir.",
                answer: true,
              },
            ],
          },
        },

        activity_title: "Quiz: Güvenlik ve Tekrar",
        activity_desc: "Soruları çoğunlukla doğru yapmaya çalış.",
        activity_type: "interactive_quiz",
        activity_key: "network_security",
      },
    ],

    scenario_assessment: {
      activity_key: "lost_packet",
      title: "Senaryo Bazlı Değerlendirme",
      description: "Aşağıdaki senaryoyu oku ve doğru kararı ver.",
      scenarios: [
        {
          id: 1,
          situation:
            "Ali bir kafede halka açık Wi-Fi'ye bağlandı. Arkadaşı video gönderdi. Ali videoyu izlemek istiyor ve okul hesabına da giriş yapması gerekiyor.",
          question: "Ali ne yapmalı?",
          options: [
            {
              text: "A) Hem videoyu izler hem de okul hesabına girer, güvenlidir.",
              correct: false,
              feedback:
                "Halka açık Wi-Fi'de şifre gerektiren işlemler risklidir. Video izlemek genel olabilir, ama hesap girişi yapma.",
            },
            {
              text: "B) Videoyu izleyebilir ama okul hesabına girişi ev ağına bırakmalıdır.",
              correct: true,
              feedback: "Doğru! Şifre isteyen işlemleri güvenli ağda yap.",
            },
            {
              text: "C) Hiçbir şey yapmasın, Wi-Fi tamamen yasak olmalı.",
              correct: false,
              feedback:
                "Genel gezinti yapılabilir; riskli olan şifre/özel bilgidir.",
            },
          ],
        },
      ],
    },
  },
};

export default MODULE3_TR;
