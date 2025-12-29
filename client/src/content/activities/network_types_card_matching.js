// Network Types Card Matching Activity - Module 3
// Activity for Section 2: Network Types (Home, School, Public Wi-Fi)

export const NETWORK_TYPES_CARD_MATCHING = {
  id: "network_types_matching",
  activity_type: "card_matching",

  title_tr: "Ağ Türleri Eşleştirme",
  title_en: "Network Types Matching",

  description_tr:
    "Verilen durumları oku ve doğru ağ türü ile eşleştir. Hangi ağ türü daha güvenli?",
  description_en:
    "Read the given situations and match them with the correct network type. Which network type is safer?",

  instructions_tr: [
    "Her durum kartını oku.",
    "Doğru ağ türü kartı ile eşleştir.",
    "Güvenlik seviyesine dikkat et."
  ],

  instructions_en: [
    "Read each situation card.",
    "Match it with the correct network type card.",
    "Pay attention to the security level."
  ],

  situations: [
    {
      id: 1,
      text_tr: "Evdeki Wi-Fi ağına bağlanıyorum. Sadece ailem erişebilir.",
      text_en: "I'm connecting to the Wi-Fi network at home. Only my family can access it.",
      correct_match: "home"
    },
    {
      id: 2,
      text_tr: "Okulda öğretmenlerin görebileceği bir ağa bağlanıyorum.",
      text_en: "I'm connecting to a network at school where teachers can see my activities.",
      correct_match: "school"
    },
    {
      id: 3,
      text_tr: "Kafede herkesin kullanabileceği şifresiz bir ağa bağlanıyorum.",
      text_en: "I'm connecting to a password-free network at a cafe that everyone can use.",
      correct_match: "public"
    },
    {
      id: 4,
      text_tr: "Havaalanında ücretsiz Wi-Fi kullanıyorum.",
      text_en: "I'm using free Wi-Fi at the airport.",
      correct_match: "public"
    },
    {
      id: 5,
      text_tr: "Evdeki güvenli ağda banka işlemi yapıyorum.",
      text_en: "I'm doing banking on the secure network at home.",
      correct_match: "home"
    },
    {
      id: 6,
      text_tr: "Okulda ders için internete bağlanıyorum.",
      text_en: "I'm connecting to the internet at school for class.",
      correct_match: "school"
    }
  ],

  network_types: [
    {
      id: "home",
      label_tr: "Ev Ağı",
      label_en: "Home Network",
      icon: "🏠",
      security_level_tr: "Çok Güvenli",
      security_level_en: "Very Safe",
      description_tr: "Sadece sen ve ailen erişebilir. En güvenli ağ türü.",
      description_en: "Only you and your family can access. The safest network type."
    },
    {
      id: "school",
      label_tr: "Okul Ağı",
      label_en: "School Network",
      icon: "🏫",
      security_level_tr: "Güvenli",
      security_level_en: "Safe",
      description_tr: "Filtreler içerir. Öğretmenler aktivitelerini görebilir.",
      description_en: "Contains filters. Teachers can see your activities."
    },
    {
      id: "public",
      label_tr: "Halka Açık Ağ",
      label_en: "Public Network",
      icon: "☕",
      security_level_tr: "Güvensiz",
      security_level_en: "Unsafe",
      description_tr: "Herkes bağlanabilir. Özel bilgiler paylaşma!",
      description_en: "Anyone can connect. Don't share private information!"
    }
  ],

  feedback: {
    correct_tr: "Doğru! Bu durum için doğru ağ türünü seçtin.",
    incorrect_tr: "Yanlış! Tekrar düşün. Hangi ağ türü bu duruma uygun?",
    correct_en: "Correct! You chose the right network type for this situation.",
    incorrect_en: "Wrong! Think again. Which network type fits this situation?"
  },

  scoring: {
    correct_match: 10,
    incorrect_match: 0,
    completion_bonus: 30
  }
};

