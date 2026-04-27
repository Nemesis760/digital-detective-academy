// Module 4: Digital Safety & Smart Tech Habits - English Language File

export const MODULE4_EN = {
  module_4: {
    title: "Module 4: Digital Safety & Smart Tech Habits",
    subtitle: "Protect devices, data, and well-being with smart choices.",
    hero_image: "/images/module4/hero_digital_safety.png",
    sections: [
      {
        id: 1,
        title: "Device Security: Lock, Update, Back Up",
        intro:
          "Your device is like a backpack for your digital life. When it is protected, your photos, notes, and accounts stay safe too.",
        content: [
          "A screen lock is your first shield. A PIN, pattern, or fingerprint keeps strangers out if the device is lost.",
          "Updates are not just new features. They also fix security holes that bad people try to use.",
          "Backups are your safety net. If your phone breaks or gets stolen, your files can still come back.",
          "Use separate accounts when possible. A student account for school and a personal account for games keeps things tidy.",
          "Small habits, done often, create big safety. Lock it, update it, and back it up."
        ],
        images: [
          {
            src: "/images/module4/device_lock_01.png",
            alt_tr: "Ekran kilidi açan bir el",
            alt_en: "A hand unlocking a screen"
          },
          {
            src: "/images/module4/device_update_01.png",
            alt_tr: "Telefon güncelleme bildirimi",
            alt_en: "Phone update notification"
          },
          {
            src: "/images/module4/cloud_backup_01.png",
            alt_tr: "Bulut yedekleme simgesi",
            alt_en: "Cloud backup icon"
          },
          {
            src: "/images/module4/m4_poster_device_security_en.png",
            alt_tr: "Cihaz bakımını simgeleyen görsel",
            alt_en: "Visual showing device care"
          }
        ],
        activity: {
          type: "mini_quiz",
          title: "Mini Quiz: Device Safety Check",
          description: "Answer quickly to see if you remember the basics.",
          questions: [
            {
              type: "tf",
              question: "A screen lock helps even if you never leave your phone alone.",
              answer: true,
              explanation: "Accidents happen, and a lock protects your data in every situation."
            },
            {
              type: "mcq",
              question: "Why are updates important?",
              options: [
                "They only change the colors of apps",
                "They fix security problems and bugs",
                "They delete your photos",
                "They turn off the internet"
              ],
              answerIndex: 1,
              explanation: "Updates close security gaps and keep your device safe."
            },
            {
              type: "tf",
              question: "Backups help you recover files after a loss.",
              answer: true,
              explanation: "A backup is like a copy you can restore later."
            }
          ]
        }
      },
      {
        id: 2,
        title: "Malware & Safe Downloads",
        intro:
          "Not every file on the internet is friendly. Some downloads hide viruses or tricks.",
        content: [
          "Malware is harmful software. It can slow your device, show ads, or steal your data.",
          "The safest downloads come from official stores and trusted websites.",
          "Free game coins or cheat tools are common traps. If it sounds too good, pause and check.",
          "Before you install, read the app name, reviews, and size. Fake apps often look almost real.",
          "If something feels wrong, ask an adult or teacher. A quick question can prevent big problems."
        ],
        images: [
          {
            src: "/images/module4/m4_poster_malware_en.png",
            alt_tr: "Zararlı yazılım uyarısı ekranı",
            alt_en: "Malware warning screen"
          },
          {
            src: "/images/module4/m4_poster_malware_en.png",
            alt_tr: "Güvenli uygulama mağazası simgesi",
            alt_en: "Safe app store icon"
          },
          {
            src: "/images/module4/m4_poster_malware_en.png",
            alt_tr: "Sahte uygulama tuzağı görseli",
            alt_en: "Fake app trap visual"
          },
          {
            src: "/images/module4/m4_poster_malware_en.png",
            alt_tr: "Yorumları ve puanları kontrol etme",
            alt_en: "Checking reviews and ratings"
          }
        ],
        activity: {
          type: "mini_quiz",
          title: "Mini Quiz: Download Detective",
          description: "Choose the safer option in each question.",
          questions: [
            {
              type: "mcq",
              question: "Where is it safest to download an app?",
              options: [
                "A random website",
                "An official app store",
                "A pop-up ad",
                "A link from a stranger"
              ],
              answerIndex: 1,
              explanation: "Official stores check apps for many risks."
            },
            {
              type: "tf",
              question: "A free cheat tool is always safe if your friend used it.",
              answer: false,
              explanation: "Even friends can be tricked by harmful files."
            },
            {
              type: "mcq",
              question: "What should you check before installing?",
              options: [
                "Only the app icon",
                "App name, reviews, and size",
                "How many emojis are used",
                "Nothing, just install"
              ],
              answerIndex: 1,
              explanation: "Details and reviews help spot fake apps."
            }
          ]
        },
        game: {
          type: "word_puzzle",
          title: "Word Puzzle: Safe Download Terms",
          description: "Find the hidden security words.",
          words: ["SAFE", "VIRUS", "CLOUD", "CYBER", "LOCKS", "GUARD", "SMART"]
        }
      },
      {
        id: 3,
        title: "App Permissions & Privacy Settings",
        intro:
          "Apps ask for permissions, but not all requests make sense. You can say yes or no.",
        content: [
          "Permissions are like doors. A camera app needs the camera, but a calculator does not.",
          "If an app asks for too much, it might be collecting data you do not want to share.",
          "Privacy settings help you control who can see your posts, photos, and location.",
          "Turn off location sharing when you do not need it. Your location is personal.",
          "Check permissions regularly. You can change your mind and update them anytime."
        ],
        images: [
          {
            src: "/images/module4/m4_poster_privacy_en.png",
            alt_tr: "Uygulama izinleri ekranı",
            alt_en: "App permissions screen"
          },
          {
            src: "/images/module4/m4_privacy_permissions.png",
            alt_tr: "Konum izni aç/kapat düğmesi",
            alt_en: "Location permission toggle"
          },
          {
            src: "/images/module4/m4_poster_privacy_en.png",
            alt_tr: "Gizlilik ayarları menüsü",
            alt_en: "Privacy settings menu"
          },
          {
            src: "/images/module4/m4_poster_privacy_en.png",
            alt_tr: "Veri paylaşımını azaltma simgesi",
            alt_en: "Data minimization icon"
          }
        ],
        activity: {
          type: "flashcards",
          title: "Flashcards: Permission Sense",
          description: "Tap a card to reveal the smart choice.",
          cards: [
            {
              front: "Camera app wants access to the camera",
              back: "Reasonable. The app needs it to work."
            },
            {
              front: "Flashlight app wants access to contacts",
              back: "Suspicious. It does not need contacts."
            },
            {
              front: "Game app wants location all the time",
              back: "Consider turning it off unless needed."
            },
            {
              front: "Photo editor wants access to photos",
              back: "Makes sense if you are editing pictures."
            }
          ]
        },
        game: {
          type: "password_game",
          title: "Activity: Build a Strong Password",
          description: "Type a password and see how strong it is.",
          tips: [
            "Use 8-12+ characters.",
            "Mix uppercase, lowercase, and numbers.",
            "Avoid common words or personal info."
          ]
        }
      },
      {
        id: 4,
        title: "Shared Networks, Wi-Fi Safety & Logging Out",
        intro:
          "Public Wi-Fi is like a crowded bus. You can ride, but you must guard your bag.",
        content: [
          "Shared networks are used by many people at once. That makes them less private.",
          "Avoid logging into important accounts on public Wi-Fi. Save that for home or school networks.",
          "If you must use public Wi-Fi, avoid entering passwords and payments.",
          "Always log out on shared devices. It is like closing the door behind you.",
          "Use the forget network option when you are done. It prevents auto-connecting later."
        ],
        images: [
          {
            src: "/images/module4/m4_poster_wifi_en.png",
            alt_tr: "Ortak Wi-Fi ağına bağlanan cihazlar",
            alt_en: "Devices connected to public Wi-Fi"
          },
          {
            src: "/images/module4/m4_poster_wifi_en.png",
            alt_tr: "Oturumu kapatmayı gösteren ikon",
            alt_en: "Icon showing sign out"
          },
          {
            src: "/images/module4/m4_poster_wifi_en.png",
            alt_tr: "Güvenli ağ rozeti",
            alt_en: "Secure network badge"
          },
          {
            src: "/images/module4/m4_poster_wifi_en.png",
            alt_tr: "Ağı unut seçeneği",
            alt_en: "Forget network option"
          }
        ],
        activity: {
          type: "sorter",
          title: "Sort It: Safe or Risky?",
          description: "Pick where each action belongs.",
          categories: [
            { id: "safe", label: "Safe Choice" },
            { id: "risky", label: "Risky Choice" }
          ],
          items: [
            { id: "wifi1", text: "Checking homework on public Wi-Fi", correctCategory: "risky" },
            { id: "wifi2", text: "Reading news on public Wi-Fi", correctCategory: "safe" },
            { id: "wifi3", text: "Logging out of a shared computer", correctCategory: "safe" },
            { id: "wifi4", text: "Saving a password on a cafe computer", correctCategory: "risky" }
          ]
        },
        game: {
          type: "card_match",
          title: "Match: Threat and Protection",
          description: "Match each threat with the right protection.",
          pairs: [
            { term: "Open Wi-Fi", def: "Avoid passwords and payments" },
            { term: "Shared Computer", def: "Log out after use" },
            { term: "Saved Password", def: "Remove from browser" },
            { term: "Auto-Connect", def: "Turn it off" },
            { term: "Suspicious Network Name", def: "Do not connect" }
          ]
        }
      },
      {
        id: 5,
        title: "Digital Citizenship & Getting Help",
        intro:
          "Being safe online is not only about devices. It is also about how we treat people.",
        content: [
          "Digital citizens are respectful and kind. They think before they post or share.",
          "Cyberbullying can be messages, jokes, or images that hurt someone. It is never okay.",
          "If you feel unsafe, do not answer the bully. Save evidence and tell a trusted adult.",
          "Use blocking and reporting tools. They are there to protect you.",
          "Helping a friend is powerful. When you speak up, you stop harm from growing."
        ],
        images: [
          {
            src: "/images/module4/m4_poster_citizenship_en.png",
            alt_tr: "Dijital vatandaşlık davranışları",
            alt_en: "Digital citizenship behaviors"
          },
          {
            src: "/images/module4/m4_cyberbullying_awareness.png",
            alt_tr: "Siber zorbalığa dur de posteri",
            alt_en: "Stop cyberbullying poster"
          },
          {
            src: "/images/module4/m4_poster_citizenship_en.png",
            alt_tr: "Bildir ve engelle araçları",
            alt_en: "Report and block tools"
          },
          {
            src: "/images/module4/m4_poster_citizenship_en.png",
            alt_tr: "Yardım istemeyi gösteren görsel",
            alt_en: "Visual of asking for help"
          }
        ],
        activity: {
          type: "mini_quiz",
          title: "Mini Quiz: Kind and Safe Online",
          description: "Choose the most respectful and safe response.",
          questions: [
            {
              type: "tf",
              question: "If a message hurts someone, it can be cyberbullying.",
              answer: true,
              explanation: "Words online can harm just like words face to face."
            },
            {
              type: "mcq",
              question: "What should you do if you see bullying?",
              options: [
                "Join in to fit in",
                "Ignore and save proof, then tell an adult",
                "Reply with a mean joke",
                "Share it with more people"
              ],
              answerIndex: 1,
              explanation: "Do not engage. Save evidence and ask for help."
            },
            {
              type: "tf",
              question: "Blocking and reporting tools are helpful.",
              answer: true,
              explanation: "These tools can reduce harm and keep you safe."
            }
          ]
        }
      }
    ],
    scenario: {
      title: "Scenario Quiz: The Weekend Chat Group",
      description:
        "Follow the story and make safe, respectful choices. Each answer gives feedback."
    }
  }
};

export default MODULE4_EN;
