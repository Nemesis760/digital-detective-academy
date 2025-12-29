// Network Security Quiz Activity - Module 3
// Activity for Section 5: Why Network Security Matters

export const NETWORK_SECURITY_QUIZ = {
  id: "network_security_quiz",
  activity_type: "interactive_quiz",

  title_tr: "Ağ Güvenliği Quiz",
  title_en: "Network Security Quiz",

  description_tr:
    "Ağ güvenliği hakkındaki soruları cevapla ve bilgini test et.",
  description_en:
    "Answer questions about network security and test your knowledge.",

  instructions_tr: [
    "Her soruyu dikkatlice oku.",
    "Doğru cevabı seç.",
    "Ağ güvenliğinin neden önemli olduğunu öğren."
  ],

  instructions_en: [
    "Read each question carefully.",
    "Select the correct answer.",
    "Learn why network security is important."
  ],

  quiz: [
    {
      type: "true_false",
      question_tr: "Halka açık Wi-Fi'de banka hesabıma girmek güvenlidir.",
      question_en: "It is safe to access my bank account on public Wi-Fi.",
      answer: false,
      explanation_tr: "Yanlış! Halka açık Wi-Fi'de özel bilgilerini (banka hesabı, şifreler) paylaşmamalısın. Başkaları bu bilgileri görebilir.",
      explanation_en: "Wrong! You should not share private information (bank account, passwords) on public Wi-Fi. Others can see this information."
    },
    {
      type: "true_false",
      question_tr: "Ev ağında güçlü bir Wi-Fi şifresi kullanmak önemlidir.",
      question_en: "Using a strong Wi-Fi password on home network is important.",
      answer: true,
      explanation_tr: "Doğru! Güçlü bir Wi-Fi şifresi, başkalarının ağına bağlanmasını engeller ve verilerini korur.",
      explanation_en: "Correct! A strong Wi-Fi password prevents others from connecting to your network and protects your data."
    },
    {
      type: "multiple_choice",
      question_tr: "Hangi durumda özel bilgilerini paylaşabilirsin?",
      question_en: "In which situation can you share your private information?",
      options: [
        {
          text_tr: "A) Halka açık Wi-Fi'de",
          text_en: "A) On public Wi-Fi",
          correct: false
        },
        {
          text_tr: "B) Ev ağında",
          text_en: "B) On home network",
          correct: true
        },
        {
          text_tr: "C) Tanımadığın bir ağda",
          text_en: "C) On an unknown network",
          correct: false
        },
        {
          text_tr: "D) Şifresiz bir ağda",
          text_en: "D) On a password-free network",
          correct: false
        }
      ],
      explanation_tr: "Doğru cevap B! Ev ağı en güvenli ağ türüdür. Sadece sen ve ailen erişebilirsiniz, bu yüzden özel bilgilerini paylaşabilirsin.",
      explanation_en: "Correct answer is B! Home network is the safest network type. Only you and your family can access it, so you can share your private information."
    },
    {
      type: "multiple_choice",
      question_tr: "Ağ güvenliği neden önemlidir?",
      question_en: "Why is network security important?",
      options: [
        {
          text_tr: "A) İnternet daha hızlı olur",
          text_en: "A) Internet becomes faster",
          correct: false
        },
        {
          text_tr: "B) Kişisel bilgilerin çalınmasını önler",
          text_en: "B) Prevents theft of personal information",
          correct: true
        },
        {
          text_tr: "C) Daha fazla oyun oynayabilirsin",
          text_en: "C) You can play more games",
          correct: false
        },
        {
          text_tr: "D) Daha fazla video izleyebilirsin",
          text_en: "D) You can watch more videos",
          correct: false
        }
      ],
      explanation_tr: "Doğru cevap B! Ağ güvenliği, kişisel bilgilerinin (şifreler, banka bilgileri) çalınmasını önler ve seni korur.",
      explanation_en: "Correct answer is B! Network security prevents theft of your personal information (passwords, bank information) and protects you."
    },
    {
      type: "true_false",
      question_tr: "Şifresiz ağlara bağlanmak güvenlidir.",
      question_en: "Connecting to password-free networks is safe.",
      answer: false,
      explanation_tr: "Yanlış! Şifresiz ağlar güvenli değildir. Başkaları bu ağa bağlanabilir ve verilerinizi görebilir.",
      explanation_en: "Wrong! Password-free networks are not safe. Others can connect to this network and see your data."
    },
    {
      type: "multiple_choice",
      question_tr: "Halka açık Wi-Fi'de ne yapmamalısın?",
      question_en: "What should you not do on public Wi-Fi?",
      options: [
        {
          text_tr: "A) Haber okumak",
          text_en: "A) Reading news",
          correct: false
        },
        {
          text_tr: "B) Hava durumuna bakmak",
          text_en: "B) Checking weather",
          correct: false
        },
        {
          text_tr: "C) Banka hesabına girmek",
          text_en: "C) Accessing bank account",
          correct: true
        },
        {
          text_tr: "D) Haritaya bakmak",
          text_en: "D) Looking at maps",
          correct: false
        }
      ],
      explanation_tr: "Doğru cevap C! Halka açık Wi-Fi'de özel bilgiler gerektiren işlemler (banka hesabı, şifre girişi) yapmamalısın.",
      explanation_en: "Correct answer is C! You should not do operations that require private information (bank account, password entry) on public Wi-Fi."
    },
    {
      type: "true_false",
      question_tr: "Güvenli ağlar kullanmak ve güvenlik önlemlerini almak önemlidir.",
      question_en: "Using secure networks and taking security measures is important.",
      answer: true,
      explanation_tr: "Doğru! Güvenli ağlar kullanmak ve güvenlik önlemlerini almak, kişisel bilgilerini korur.",
      explanation_en: "Correct! Using secure networks and taking security measures protects your personal information."
    }
  ],

  feedback: {
    correct_tr: "Harika! Doğru cevap!",
    incorrect_tr: "Yanlış cevap. Tekrar düşün.",
    correct_en: "Great! Correct answer!",
    incorrect_en: "Wrong answer. Think again."
  },

  scoring: {
    correct_answer: 10,
    incorrect_answer: 0,
    completion_bonus: 30
  }
};

