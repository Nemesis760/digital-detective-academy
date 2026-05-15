// Wired vs Wireless Truth or Troll Activity - Module 3
// Activity for Section 4: Wired vs Wireless Communication

export const WIRED_WIRELESS_TRUTH_OR_TROLL = {
  id: "wired_wireless_truth_troll",
  activity_type: "truth_or_troll",

  title_tr: "Kablolu vs Kablosuz Doğru/Yanlış",
  title_en: "Wired vs Wireless True/False",

  description_tr:
    "Kablolu ve kablosuz iletişim hakkındaki ifadeleri oku ve doğru mu yanlış mı olduğunu belirle.",
  description_en:
    "Read the statements about wired and wireless communication and determine if they are true or false.",

  instructions_tr: [
    "Her ifadeyi dikkatlice oku.",
    "Doğru ise 'Doğru', yanlış ise 'Yanlış' seç.",
    "Her ikisinin de avantaj ve dezavantajları olduğunu unutma."
  ],

  instructions_en: [
    "Read each statement carefully.",
    "Select 'True' if correct, 'False' if incorrect.",
    "Remember that both have advantages and disadvantages."
  ],

  statements: [
    {
      id: 1,
      text_tr: "Kablolu bağlantı genellikle kablosuz bağlantıdan daha hızlıdır.",
      text_en: "Wired connection is generally faster than wireless connection.",
      answer: true,
      explanation_tr: "Kablolu bağlantı genellikle daha hızlı ve daha güvenilirdir çünkü sinyal doğrudan kablo üzerinden iletilir, sinyal kaybı yaşanmaz.",
      explanation_en: "Wired connection is generally faster and more reliable because the signal is transmitted directly through the cable without signal loss."
    },
    {
      id: 2,
      text_tr: "Wi-Fi bağlantısı kablolu bağlantıdan daha güvenlidir.",
      text_en: "Wi-Fi connection is more secure than wired connection.",
      answer: false,
      explanation_tr: "Kablolu bağlantı genellikle daha güvenlidir çünkü sinyal havada yayılmaz; onu yakalamak çok daha zordur. Wi-Fi sinyali ise fiziksel olarak çevredeki cihazlara ulaşabilir.",
      explanation_en: "Wired connection is generally more secure because the signal doesn't travel through the air and is much harder to intercept. Wi-Fi signals can physically reach nearby devices."
    },
    {
      id: 3,
      text_tr: "Kablosuz bağlantı daha esnektir çünkü cihazı istediğin yere taşıyabilirsin.",
      text_en: "Wireless connection is more flexible because you can move the device anywhere you want.",
      answer: true,
      explanation_tr: "Wi-Fi sayesinde cihazını router'a yakın olmak zorunda kalmadan istediğin yere taşıyabilirsin. Kablolu bağlantıda ise kabloyla sabit bir konumda kalmak gerekir.",
      explanation_en: "With Wi-Fi you can move your device anywhere without needing to stay close to the router. With a wired connection, you must stay in a fixed position tied to the cable."
    },
    {
      id: 4,
      text_tr: "Oyun oynarken kablolu bağlantı daha iyi performans sağlar.",
      text_en: "Wired connection provides better performance when playing games.",
      answer: true,
      explanation_tr: "Kablolu bağlantı oyun oynarken daha az gecikme (lag) üretir ve paket kaybını minimize eder. Bu yüzden profesyonel oyuncular ve rekabetçi oyunlarda kablolu bağlantı tercih edilir.",
      explanation_en: "Wired connection produces less lag and minimizes packet loss when gaming. That's why professional players and competitive games prefer wired connections."
    },
    {
      id: 5,
      text_tr: "Wi-Fi sinyali duvarlardan geçemez.",
      text_en: "Wi-Fi signal cannot pass through walls.",
      answer: false,
      explanation_tr: "Wi-Fi sinyali duvarlardan geçebilir ancak her duvar geçişinde sinyal gücü azalır. Router'dan uzaklaştıkça veya arada daha fazla duvar oldukça bağlantı yavaşlayabilir.",
      explanation_en: "Wi-Fi signal can pass through walls but loses strength with each wall it crosses. The further you are from the router, or the more walls in between, the weaker the connection."
    },
    {
      id: 6,
      text_tr: "Telefonlar sadece Wi-Fi kullanabilir, kablolu bağlantı kullanamaz.",
      text_en: "Phones can only use Wi-Fi, they cannot use wired connection.",
      answer: true,
      explanation_tr: "Akıllı telefonlar ve tabletler, Ethernet portu bulunmadığından pratik olarak kablolu bağlantı kullanamaz. Bu cihazlar Wi-Fi veya mobil veri (4G/5G) kullanır.",
      explanation_en: "Smartphones and tablets have no Ethernet port, so they practically cannot use wired connections. These devices rely on Wi-Fi or mobile data (4G/5G)."
    },
    {
      id: 7,
      text_tr: "Her iki bağlantı türü de ev ağında güvenlidir.",
      text_en: "Both connection types are safe on home networks.",
      answer: true,
      explanation_tr: "Ev ağında hem kablolu hem de kablosuz bağlantı güvenlidir. Asıl güvenliği belirleyen faktör ağ türüdür (ev/halka açık), bağlantı türü (kablo/Wi-Fi) değildir.",
      explanation_en: "Both wired and wireless connections are safe on a home network. The key security factor is the network type (home vs public), not the connection type (cable vs Wi-Fi)."
    },
    {
      id: 8,
      text_tr: "Kablosuz bağlantı her zaman kablolu bağlantıdan daha yavaştır.",
      text_en: "Wireless connection is always slower than wired connection.",
      answer: false,
      explanation_tr: "Wi-Fi 6 gibi modern kablosuz teknolojiler çok yüksek hızlara ulaşabilir. Ancak genel olarak kablolu bağlantı daha tutarlı ve stabil hız sunar; \"her zaman\" ifadesi bu nedenle yanlıştır.",
      explanation_en: "Modern wireless technologies like Wi-Fi 6 can reach very high speeds. However, wired connections generally offer more consistent and stable speeds — the word 'always' makes this statement false."
    }
  ],

  feedback: {
    correct_tr: "Doğru! Harika iş!",
    incorrect_tr: "Yanlış! Tekrar düşün.",
    correct_en: "Correct! Great job!",
    incorrect_en: "Wrong! Think again."
  },

  scoring: {
    correct_answer: 10,
    incorrect_answer: 0,
    completion_bonus: 30
  }
};

