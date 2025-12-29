// Network Lost Packet Scenario Activity - Module 3
// Scenario-based assessment for Module 3

export const NETWORK_LOST_PACKET_SCENARIO = {
  id: "network_lost_packet_scenario",
  activity_type: "scenario_game",

  title_tr: "Senaryo Bazlı Değerlendirme: Güvenli Ağ Kararları",
  title_en: "Scenario-Based Assessment: Secure Network Decisions",

  description_tr:
    "Aşağıdaki senaryoları oku ve en güvenli kararı seçerek ağ güvenliği bilincini göster.",
  description_en:
    "Read the scenarios below and choose the safest decision to demonstrate your network security awareness.",

  instructions_tr: [
    "Her senaryoyu dikkatlice oku.",
    "En güvenli seçeneği seç.",
    "Neden güvenli olduğunu düşün."
  ],

  instructions_en: [
    "Read each scenario carefully.",
    "Choose the safest option.",
    "Think about why it's safe."
  ],

  scenarios: [
    {
      id: 1,
      situation_tr: "Ali bir kafede oturuyor ve halka açık Wi-Fi'ye bağlanmış. Arkadaşı ona bir video göndermiş ve Ali bu videoyu izlemek istiyor. Ayrıca ödevini kontrol etmek için okul hesabına girmesi gerekiyor.",
      situation_en: "Ali is sitting in a cafe and connected to public Wi-Fi. His friend sent him a video and Ali wants to watch it. He also needs to access his school account to check his homework.",
      question_tr: "Ali ne yapmalı?",
      question_en: "What should Ali do?",
      options: [
        {
          text_tr: "A) Hem videoyu izleyebilir hem de okul hesabına girebilir, halka açık Wi-Fi güvenlidir.",
          text_en: "A) He can both watch the video and access his school account, public Wi-Fi is safe.",
          correct: false,
          feedback_tr: "Halka açık Wi-Fi'de özel bilgilerini (okul hesabı) paylaşmamalısın. Video izlemek genel bir aktivite olduğu için sorun olmayabilir, ancak şifre gerektiren işlemler güvenli değildir.",
          feedback_en: "You should not share private information (school account) on public Wi-Fi. Watching videos may be okay as it's a general activity, but operations requiring passwords are not safe."
        },
        {
          text_tr: "B) Sadece videoyu izleyebilir, okul hesabına girmek için ev ağına bağlanmayı beklemelidir.",
          text_en: "B) He can only watch the video, and should wait to connect to home network to access his school account.",
          correct: true,
          feedback_tr: "Doğru! Halka açık Wi-Fi'de genel aktiviteler (video izleme) yapılabilir, ancak özel bilgiler gerektiren işlemler (okul hesabı) ev ağında yapılmalıdır.",
          feedback_en: "Correct! General activities (watching videos) can be done on public Wi-Fi, but operations requiring private information (school account) should be done on home network."
        },
        {
          text_tr: "C) Hiçbir şey yapmamalı, halka açık Wi-Fi hiç güvenli değildir.",
          text_en: "C) He should not do anything, public Wi-Fi is not safe at all.",
          correct: false,
          feedback_tr: "Halka açık Wi-Fi genel aktiviteler için kullanılabilir, ancak özel bilgiler gerektiren işlemler için güvenli değildir.",
          feedback_en: "Public Wi-Fi can be used for general activities, but it's not safe for operations requiring private information."
        }
      ]
    },
    {
      id: 2,
      situation_tr: "Ayşe'nin evinde Wi-Fi şifresi yok. Komşuları ona şifresiz bir ağ olduğunu söylüyor ve Ayşe bu ağa bağlanmayı düşünüyor.",
      situation_en: "Ayşe doesn't have a Wi-Fi password at home. Her neighbors tell her there's a password-free network and Ayşe is thinking of connecting to it.",
      question_tr: "Ayşe ne yapmalı?",
      question_en: "What should Ayşe do?",
      options: [
        {
          text_tr: "A) Şifresiz ağa bağlanabilir, sorun olmaz.",
          text_en: "A) She can connect to the password-free network, no problem.",
          correct: false,
          feedback_tr: "Şifresiz ağlar güvenli değildir. Başkaları bu ağa bağlanabilir ve verilerinizi görebilir.",
          feedback_en: "Password-free networks are not safe. Others can connect to this network and see your data."
        },
        {
          text_tr: "B) Şifresiz ağa bağlanmamalı, güvenli bir ağ bulmalı veya kendi ağını kurmalıdır.",
          text_en: "B) She should not connect to the password-free network, should find a secure network or set up her own network.",
          correct: true,
          feedback_tr: "Doğru! Şifresiz ağlar güvenli değildir. Ayşe güvenli bir ağ bulmalı veya kendi güvenli ağını kurmalıdır.",
          feedback_en: "Correct! Password-free networks are not safe. Ayşe should find a secure network or set up her own secure network."
        },
        {
          text_tr: "C) Sadece genel sitelere bakarsa sorun olmaz.",
          text_en: "C) It's okay if she only looks at general sites.",
          correct: false,
          feedback_tr: "Şifresiz ağlarda bile genel aktiviteler yaparken dikkatli olmalısın. Mümkünse güvenli bir ağ kullan.",
          feedback_en: "Even when doing general activities on password-free networks, you should be careful. Use a secure network if possible."
        }
      ]
    },
    {
      id: 3,
      situation_tr: "Mehmet okulda ödev yapıyor ve okul ağına bağlı. Ödevini tamamladıktan sonra arkadaşlarıyla oyun oynamak istiyor. Ancak okul ağında oyun sitelerine erişim engellenmiş.",
      situation_en: "Mehmet is doing homework at school and connected to the school network. After completing his homework, he wants to play games with his friends. However, access to game sites is blocked on the school network.",
      question_tr: "Mehmet ne yapmalı?",
      question_en: "What should Mehmet do?",
      options: [
        {
          text_tr: "A) Okul ağını atlatmak için halka açık Wi-Fi'ye bağlanmalı.",
          text_en: "A) He should connect to public Wi-Fi to bypass the school network.",
          correct: false,
          feedback_tr: "Okul ağının filtreleri güvenlik içindir. Halka açık Wi-Fi'ye bağlanmak daha riskli olabilir.",
          feedback_en: "School network filters are for security. Connecting to public Wi-Fi could be riskier."
        },
        {
          text_tr: "B) Okul ağının kurallarına uymalı ve oyun oynamayı evde yapmalıdır.",
          text_en: "B) He should follow the school network rules and play games at home.",
          correct: true,
          feedback_tr: "Doğru! Okul ağının kurallarına uymalı ve oyun gibi aktiviteleri evde yapmalıdır. Okul ağı eğitim amaçlıdır.",
          feedback_en: "Correct! He should follow school network rules and do activities like gaming at home. School network is for educational purposes."
        },
        {
          text_tr: "C) Filtreleri kırmak için farklı yollar denemelidir.",
          text_en: "C) He should try different ways to break the filters.",
          correct: false,
          feedback_tr: "Okul ağının filtrelerini kırmaya çalışmak kurallara aykırıdır ve güvenlik riski oluşturur.",
          feedback_en: "Trying to break school network filters is against the rules and creates security risks."
        }
      ]
    }
  ],

  feedback: {
    correct_tr: "Harika! Doğru kararı verdin.",
    incorrect_tr: "Yanlış seçim. Tekrar düşün ve en güvenli seçeneği bul.",
    correct_en: "Great! You made the right decision.",
    incorrect_en: "Wrong choice. Think again and find the safest option."
  },

  scoring: {
    correct_scenario: 20,
    incorrect_scenario: 0,
    completion_bonus: 40
  }
};

