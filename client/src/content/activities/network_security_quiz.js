// Network Security Quiz Activity - Module 3 Section 10

export const NETWORK_SECURITY_QUIZ = {
  id: "network_security_quiz",
  activity_type: "interactive_quiz",

  title_tr: "Ağ Güvenliği Quiz",
  title_en: "Network Security Quiz",

  description_tr: "Ağ güvenliği hakkındaki soruları cevapla ve bilgini test et.",
  description_en: "Answer questions about network security and test your knowledge.",

  quiz: [
    {
      type: "true_false",
      question_tr: "Halka açık Wi-Fi'de banka hesabıma girmek güvenlidir.",
      question_en: "It is safe to access my bank account on public Wi-Fi.",
      answer: false,
      explanation_tr: "Halka açık Wi-Fi'de özel bilgilerini (banka hesabı, şifreler) paylaşmamalısın. Ağdaki başkaları bu bilgileri görebilir.",
      explanation_en: "You should not share private information (bank account, passwords) on public Wi-Fi. Others on the network can see this information."
    },
    {
      type: "true_false",
      question_tr: "Ev ağında güçlü bir Wi-Fi şifresi kullanmak önemlidir.",
      question_en: "Using a strong Wi-Fi password on your home network is important.",
      answer: true,
      explanation_tr: "Güçlü bir Wi-Fi şifresi, başkalarının ağına izinsiz bağlanmasını engeller ve kişisel verilerini korur.",
      explanation_en: "A strong Wi-Fi password prevents others from connecting to your network without permission and protects your personal data."
    },
    {
      type: "multiple_choice",
      question_tr: "Hangi durumda özel bilgilerini paylaşabilirsin?",
      question_en: "In which situation can you share your private information?",
      options: [
        { text_tr: "A) Halka açık Wi-Fi'de", text_en: "A) On public Wi-Fi", correct: false },
        { text_tr: "B) Ev ağında", text_en: "B) On home network", correct: true },
        { text_tr: "C) Tanımadığın bir ağda", text_en: "C) On an unknown network", correct: false },
        { text_tr: "D) Şifresiz bir ağda", text_en: "D) On a password-free network", correct: false }
      ],
      explanation_tr: "Ev ağı en güvenli ağ türüdür. Sadece sen ve ailen erişebildiğinden özel bilgilerini paylaşabilirsin. Halka açık veya şifresiz ağlarda bu bilgileri paylaşma!",
      explanation_en: "Home network is the safest network type. Only you and your family can access it, so you can share private information there. Avoid sharing on public or password-free networks!"
    },
    {
      type: "multiple_choice",
      question_tr: "Ağ güvenliği neden önemlidir?",
      question_en: "Why is network security important?",
      options: [
        { text_tr: "A) İnternet daha hızlı olur", text_en: "A) Internet becomes faster", correct: false },
        { text_tr: "B) Kişisel bilgilerin çalınmasını önler", text_en: "B) Prevents theft of personal information", correct: true },
        { text_tr: "C) Daha fazla oyun oynayabilirsin", text_en: "C) You can play more games", correct: false },
        { text_tr: "D) Daha fazla video izleyebilirsin", text_en: "D) You can watch more videos", correct: false }
      ],
      explanation_tr: "Ağ güvenliği, şifreler ve banka bilgileri gibi kişisel verilerinin kötü niyetli kişilerin eline geçmesini engeller ve seni korur.",
      explanation_en: "Network security prevents your personal data — such as passwords and bank information — from falling into the hands of malicious people."
    },
    {
      type: "true_false",
      question_tr: "Şifresiz ağlara bağlanmak güvenlidir.",
      question_en: "Connecting to password-free networks is safe.",
      answer: false,
      explanation_tr: "Şifresiz ağlar güvenli değildir. Herkes bu ağa bağlanabilir ve ağ trafiğindeki verilerini görebilir.",
      explanation_en: "Password-free networks are not safe. Anyone can connect and potentially see your data in the network traffic."
    },
    {
      type: "multiple_choice",
      question_tr: "Halka açık Wi-Fi'de ne yapmamalısın?",
      question_en: "What should you NOT do on public Wi-Fi?",
      options: [
        { text_tr: "A) Haber okumak", text_en: "A) Reading news", correct: false },
        { text_tr: "B) Hava durumuna bakmak", text_en: "B) Checking weather", correct: false },
        { text_tr: "C) Banka hesabına girmek", text_en: "C) Accessing bank account", correct: true },
        { text_tr: "D) Haritaya bakmak", text_en: "D) Looking at maps", correct: false }
      ],
      explanation_tr: "Halka açık Wi-Fi'de şifre veya özel bilgi gerektiren işlemler (banka hesabı, e-posta girişi) yapmamalısın. Haber okumak veya hava durumuna bakmak gibi genel işlemler daha az risklidir.",
      explanation_en: "You should not perform operations requiring passwords or private info (bank account, email login) on public Wi-Fi. General activities like reading news are less risky."
    },
    {
      type: "true_false",
      question_tr: "Güvenli ağlar kullanmak ve güvenlik önlemleri almak önemlidir.",
      question_en: "Using secure networks and taking security measures is important.",
      answer: true,
      explanation_tr: "Güvenli ağlar kullanmak ve güncel güvenlik önlemlerini almak, kişisel bilgilerini korur ve çevrimiçi güvenliğini artırır.",
      explanation_en: "Using secure networks and keeping up with security measures protects your personal information and improves your online safety."
    }
  ]
};
