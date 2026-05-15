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
          "A screen lock is your device's first and strongest line of defense. If you lose your phone or someone picks it up, a PIN, pattern, or fingerprint stops them from reaching your personal data. A phone without a screen lock is like a house with the front door left wide open.",
          "Updates do more than add new features — they patch security holes that attackers actively try to exploit. When a flaw is found in software, the company releases an update to fix it. Saying 'I'll do it later' means leaving that vulnerability open a little longer.",
          "A backup is a saved copy of all your photos, homework files, and messages stored somewhere safe. If your phone is stolen, broken, or lost, a cloud backup means nothing is gone forever. Backing up regularly works like an insurance policy for your digital life.",
          "Keeping your school account separate from gaming or social media accounts limits the damage if one account is compromised. Using different passwords for different purposes is a simple habit that protects you when things go wrong.",
          "Lock it, update it, back it up — these three habits take just a few minutes each day but protect you from serious problems. Digital safety is not complicated; it is built from small, consistent steps that eventually become second nature."
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
          "Malware is a harmful program that secretly enters your device and causes damage. It can slow your device down, flood your screen with ads, or steal sensitive information like passwords and bank details. Attackers usually hide malware inside files or apps that look completely harmless.",
          "The safest downloads come from official stores like Google Play or the App Store, or directly from a trusted manufacturer's website. These stores review apps for harmful content and remove suspicious ones. Files downloaded from random websites carry no such guarantee.",
          "Links promising free game coins, cheat codes, or premium features for nothing are among the most common digital traps. These links often lead to fake sites that install malware or steal your account credentials. A real app will never offer free rewards outside its official channels.",
          "Before installing any app, carefully check its name, number of reviews, and file size. Fake apps closely copy the look of real ones — the difference is often hidden in a suspiciously low review count or an unusually large file size. A few minutes of research can prevent a major security breach.",
          "If a file or app feels suspicious, talk to a trusted adult right away. Choosing to ask instead of feeling embarrassed is the smartest move you can make. In digital safety, one small question can prevent a very big problem."
        ],
        images: [
          {
            src: "/images/module4/m4_malware_1_en.png",
            alt_tr: "Zararlı yazılım cihazı etkiler",
            alt_en: "Malware affecting a device"
          },
          {
            src: "/images/module4/m4_malware_2_en.png",
            alt_tr: "Resmi mağazadan güvenli indirme",
            alt_en: "Safe download from official store"
          },
          {
            src: "/images/module4/m4_malware_3_en.png",
            alt_tr: "Ücretsiz hile tuzağı uyarısı",
            alt_en: "Free cheat trap warning"
          },
          {
            src: "/images/module4/m4_malware_4_en.png",
            alt_tr: "Uygulamayı yüklemeden önce kontrol et",
            alt_en: "Check before installing an app"
          },
          {
            src: "/images/module4/m4_malware_5_en.png",
            alt_tr: "Yetişkine danış",
            alt_en: "Ask a trusted adult"
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
          words: ["PATCH", "VIRUS", "CLOUD", "CYBER", "LOCKS", "GUARD", "SMART"]
        }
      },
      {
        id: 3,
        title: "App Permissions & Privacy Settings",
        intro:
          "Apps ask for permissions, but not all requests make sense. You can say yes or no.",
        content: [
          "When you install an app, it asks for permissions such as access to your camera, microphone, location, or contacts. Think of permissions as doors: only open the ones the app genuinely needs. A camera app needs the camera, but there is no good reason for a flashlight app to access your contacts.",
          "If an app requests too many permissions or ones that seem unrelated to its purpose, it may be collecting data you never intended to share. This data can be sold to advertisers or fall into the wrong hands. Before granting a permission, ask yourself: 'Does this app actually need this?'",
          "Privacy settings are your personal control panel for deciding who can see what you share. Setting social media accounts to 'Friends Only' instead of 'Public' prevents strangers from viewing your profile. Reviewing these settings regularly protects you from default options that may have changed without your knowledge.",
          "Your location is one of the most sensitive pieces of personal data — it reveals where you are and your daily routine. Turn off location sharing for apps that do not need it, and choose 'Only While Using the App' instead of 'Always' when prompted.",
          "Permissions you have already granted can always be taken back — giving access once does not mean giving it forever. Regularly review your app permissions in your device settings and revoke access for apps you no longer use. Managing your data means being the true owner of your digital identity."
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
          "Public Wi-Fi networks are shared by dozens or even hundreds of people at the same time. In this crowded environment, someone could be monitoring the traffic and intercepting your passwords, messages, or payment details. Any data you send over a public network is like a letter in an unsealed envelope.",
          "Avoid logging into important accounts — such as your school email, homework portal, or any payment service — while on public Wi-Fi. Saving those actions for a trusted network like home or school greatly reduces your risk. Waiting a few minutes is a small price to pay to avoid a serious data breach.",
          "If you must use public Wi-Fi, stick to activities that do not require personal data, like reading news or watching videos. Stay away from entering passwords, card details, or private messages. Do not assume that no one would bother attacking you — public network attacks are carried out by automated tools and require very little effort.",
          "Always log out of your accounts when you are done on a shared or public computer. Leaving a session open is like leaving your key in the lock — the next person who sits down can access your account. Decline the browser's 'Save password?' prompt and clear your browsing history before you leave.",
          "After using a public network, select 'Forget this network' so your device does not automatically reconnect to it in the future. This is especially important for open networks in shopping malls, cafes, or airports. Auto-connecting to unknown networks is one of the most common ways people unknowingly put themselves at risk."
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
          "Digital citizenship means using technology not just skillfully, but respectfully and ethically. What you say and share online can be just as impactful and permanent as real-life actions. Before posting, asking yourself 'Could this hurt someone?' is the most important habit of a responsible digital citizen.",
          "Cyberbullying is not limited to obvious insults — it also includes group chats that exclude someone, photos shared without permission, or repeated unwanted messages. The person on the receiving end can experience deep distress, which means that content intended as a 'joke' can cause genuine harm.",
          "If you feel unsafe or uncomfortable in an online situation, do not argue with the person bothering you. Take screenshots to preserve evidence, then tell a trusted adult — a parent, teacher, or school counselor. You do not have to stay silent; asking for help is not weakness, it is the courageous and smart choice.",
          "The 'Block' and 'Report' tools on social media platforms are the official way to stop someone who is harassing you and alert the platform. Using these tools protects not only you, but also future potential victims. If someone or something makes you uncomfortable online, reporting it is part of being a responsible digital citizen.",
          "If you witness a friend being cyberbullied, do not be a bystander. Even sending a private message saying 'I am here for you' can make an enormous difference. Research shows that people who experience bullying alongside a supportive friend are far less negatively affected than those who face it alone."
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
