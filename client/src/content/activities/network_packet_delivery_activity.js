// Network Packet Delivery Activity - Module 3
// Activity for Section 1: Internet and Data Packets

export const PACKET_DELIVERY_ACTIVITY = {
  id: "packet_delivery_networks",
  activity_type: "packet_delivery",

  title_tr: "Veri Paketlerini Hedefe Ulaştır",
  title_en: "Deliver the Data Packets",

  description_tr:
    "İnternette bilgiler tek parça hâlinde gitmez. Veri paketlerini doğru ağlardan geçirerek hedefe ulaştır.",
  description_en:
    "Data on the internet travels in small packets. Deliver them through correct networks.",

  instructions_tr: [
    "Her paket bir bilgi parçasıdır.",
    "Paketi doğru ağ yolundan geçir.",
    "Yanlış ağ paketi geciktirir."
  ],

  instructions_en: [
    "Each packet is a piece of information.",
    "Send the packet through the correct network.",
    "Wrong networks cause delays."
  ],

  packets: [
    { id: 1, type: "message", risk: "low", label_tr: "Mesaj", label_en: "Message" },
    { id: 2, type: "password", risk: "high", label_tr: "Şifre", label_en: "Password" },
    { id: 3, type: "image", risk: "medium", label_tr: "Resim", label_en: "Image" },
    { id: 4, type: "video", risk: "medium", label_tr: "Video", label_en: "Video" }
  ],

  routes: [
    { 
      id: "home", 
      label_tr: "Ev Ağı", 
      label_en: "Home Network",
      safe: true,
      description_tr: "En güvenli ağ türü. Sadece sen ve ailen erişebilirsiniz.",
      description_en: "The safest network type. Only you and your family can access it."
    },
    { 
      id: "school", 
      label_tr: "Okul Ağı", 
      label_en: "School Network",
      safe: true,
      description_tr: "Güvenli ama filtreler içerir. Öğretmenler aktivitelerini görebilir.",
      description_en: "Safe but contains filters. Teachers can see your activities."
    },
    { 
      id: "public", 
      label_tr: "Halka Açık Ağ", 
      label_en: "Public Network",
      safe: false,
      description_tr: "Güvensiz! Başkaları verilerinizi görebilir. Özel bilgiler gönderme!",
      description_en: "Unsafe! Others can see your data. Don't send private information!"
    }
  ],

  feedback: {
    success_tr: "Harika! Paket güvenli şekilde ulaştı.",
    fail_tr: "Bu yol riskliydi, paket gecikti!",
    success_en: "Great! Packet delivered safely.",
    fail_en: "This route was risky, the packet was delayed!"
  },

  scoring: {
    correct_route: 10,
    wrong_route: 0,
    high_risk_correct: 15, // Extra points for correctly routing high-risk packets
    completion_bonus: 20
  }
};

