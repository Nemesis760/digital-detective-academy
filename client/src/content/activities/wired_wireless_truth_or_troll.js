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
      explanation_tr: "Doğru! Kablolu bağlantı genellikle daha hızlı ve daha güvenilirdir çünkü sinyal doğrudan kablo üzerinden iletilir.",
      explanation_en: "Correct! Wired connection is generally faster and more reliable because the signal is transmitted directly through the cable."
    },
    {
      id: 2,
      text_tr: "Wi-Fi bağlantısı kablolu bağlantıdan daha güvenlidir.",
      text_en: "Wi-Fi connection is more secure than wired connection.",
      answer: false,
      explanation_tr: "Yanlış! Kablolu bağlantı genellikle daha güvenlidir çünkü sinyal havada yayılmaz. Ancak her ikisi de ev ağında güvenlidir.",
      explanation_en: "Wrong! Wired connection is generally more secure because the signal doesn't travel through the air. However, both are safe on home networks."
    },
    {
      id: 3,
      text_tr: "Kablosuz bağlantı daha esnektir çünkü cihazı istediğin yere taşıyabilirsin.",
      text_en: "Wireless connection is more flexible because you can move the device anywhere you want.",
      answer: true,
      explanation_tr: "Doğru! Wi-Fi sayesinde cihazı router'a yakın olmak zorunda değilsin, istediğin yere taşıyabilirsin.",
      explanation_en: "Correct! With Wi-Fi, you don't have to be close to the router, you can move the device anywhere you want."
    },
    {
      id: 4,
      text_tr: "Oyun oynarken kablolu bağlantı daha iyi performans sağlar.",
      text_en: "Wired connection provides better performance when playing games.",
      answer: true,
      explanation_tr: "Doğru! Kablolu bağlantı oyun oynarken daha az gecikme (lag) sağlar ve daha stabil bir bağlantı sunar.",
      explanation_en: "Correct! Wired connection provides less lag when playing games and offers a more stable connection."
    },
    {
      id: 5,
      text_tr: "Wi-Fi sinyali duvarlardan geçemez.",
      text_en: "Wi-Fi signal cannot pass through walls.",
      answer: false,
      explanation_tr: "Yanlış! Wi-Fi sinyali duvarlardan geçebilir ancak sinyal gücü azalır. Router'dan uzaklaştıkça sinyal zayıflar.",
      explanation_en: "Wrong! Wi-Fi signal can pass through walls but the signal strength decreases. The signal weakens as you move away from the router."
    },
    {
      id: 6,
      text_tr: "Telefonlar sadece Wi-Fi kullanabilir, kablolu bağlantı kullanamaz.",
      text_en: "Phones can only use Wi-Fi, they cannot use wired connection.",
      answer: true,
      explanation_tr: "Doğru! Telefonlar ve tabletler pratik olarak kablolu bağlantı kullanamaz. Wi-Fi veya mobil veri kullanırlar.",
      explanation_en: "Correct! Phones and tablets practically cannot use wired connection. They use Wi-Fi or mobile data."
    },
    {
      id: 7,
      text_tr: "Her iki bağlantı türü de ev ağında güvenlidir.",
      text_en: "Both connection types are safe on home networks.",
      answer: true,
      explanation_tr: "Doğru! Ev ağında hem kablolu hem de kablosuz bağlantı güvenlidir. Güvenlik ağ türüne bağlıdır, bağlantı türüne değil.",
      explanation_en: "Correct! Both wired and wireless connections are safe on home networks. Security depends on the network type, not the connection type."
    },
    {
      id: 8,
      text_tr: "Kablosuz bağlantı her zaman kablolu bağlantıdan daha yavaştır.",
      text_en: "Wireless connection is always slower than wired connection.",
      answer: false,
      explanation_tr: "Yanlış! Modern Wi-Fi teknolojileri çok hızlı olabilir. Ancak genellikle kablolu bağlantı daha hızlı ve stabil olur.",
      explanation_en: "Wrong! Modern Wi-Fi technologies can be very fast. However, wired connection is generally faster and more stable."
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

