// Module 5: Digital Security & Responsible Technology Use - English Language File

export const MODULE5_EN = {
  module_5: {
    title: "Module 5: Digital Security & Responsible Technology Use",
    subtitle: "🛡️ Digital Shield: Protecting Yourself & Others",
    hero_image: "/images/module5/m5_hero.jpeg",
    sections: [
      {
        id: 1,
        title: "🛡️ What is Digital Security?",
        intro: "Digital security is the ability to protect ourselves, our information, our money, and our reputation when using the internet and digital devices. We can think of it like locking our home's door.",
        hero_image: "/images/module5/m5_hero.jpeg",
        activity_title: "📝 Quiz: Digital Security Basics",
        activity_desc: "Answer questions about digital security.",
        step_by_step: true,
        content: {
          "1.1": {
            title: "What is Digital Security?",
            description: "Digital security is the ability to protect ourselves, our information, our money, and our reputation when using the internet and digital devices. We can think of it like locking our home's door. Just as we lock the door when leaving home, we should also 'lock' (secure) our accounts in the digital world and not open the door to people we don't know.",
            image: "/images/module5/m5_digital_security.jpeg",
            points: [
              "Thanks to the internet, we can access information, play games, and have fun",
              "However, this environment also has risks such as cyberbullying, identity theft, and fraud",
              "Digital security is not just 'installing antivirus software'; it's the art of making good decisions",
              "Knowing which link to click and who to trust is more effective than even the best antivirus program"
            ],
            examples: [
              "✅ Safe: Locking the home door = Securing accounts",
              "✅ Safe: Not opening the door to strangers = Not giving information to strangers",
              "❌ Unsafe: Leaving the door open = Unsecured account",
              "❌ Unsafe: Opening the door to everyone = Public profile"
            ],
            quiz: [
              {
                type: "true_false",
                question: "Digital security is only the job of computer engineers.",
                answer: false,
                explanation_en: "Digital security is everyone's responsibility. Anyone who uses the internet — students, adults, everyone — needs to protect themselves online."
              },
              {
                type: "true_false",
                question: "My behavior on the internet does not affect my real life.",
                answer: false,
                explanation_en: "What you post, share, or say online can affect your friendships, reputation, and even future opportunities. Your digital life and real life are deeply connected."
              },
              {
                type: "true_false",
                question: "Strong passwords and privacy settings are used to be safe.",
                answer: true,
                explanation_en: "Strong passwords block unauthorized access to your accounts, and privacy settings control who can see your personal information."
              },
              {
                type: "true_false",
                question: "Digital security skills can be learned at any age.",
                answer: true,
                explanation_en: "Digital security habits — like using strong passwords and checking links before clicking — can be learned and practiced at any age."
              },
              {
                type: "true_false",
                question: "Opening files from people I don't know is safe.",
                answer: false,
                explanation_en: "Files from unknown people may contain viruses or malware that can damage your device or steal your information. Never open them!"
              },
              {
                type: "true_false",
                question: "Smartphones also carry security risks like computers.",
                answer: true,
                explanation_en: "Smartphones store photos, passwords, and personal data — they face the same threats as computers, including viruses and account theft."
              },
              {
                type: "true_false",
                question: "Digital security is not about being afraid of technology, but using it consciously.",
                answer: true,
                explanation_en: "The goal is not to avoid technology, but to use it wisely. Making informed decisions online is more powerful than any antivirus."
              },
              {
                type: "true_false",
                question: "It's enough to be safe only when playing games, it's not necessary when studying.",
                answer: false,
                explanation_en: "Risks exist in all online activities — gaming, studying, chatting, browsing. You need to stay alert at all times."
              },
              {
                type: "multiple_choice",
                question: "What does digital security primarily aim for?",
                options: [
                  { text: "A) Completely banning the internet", correct: false },
                  { text: "B) Protecting ourselves and our information from risks", correct: true },
                  { text: "C) Making computers faster", correct: false },
                  { text: "D) Downloading more games", correct: false }
                ],
                explanation_en: "Digital security protects you, your information, and your devices from online threats like hackers, viruses, and scams."
              },
              {
                type: "multiple_choice",
                question: "Which of the following is a digital security measure?",
                options: [
                  { text: "A) Sticking the password on the monitor", correct: false },
                  { text: "B) Doing banking on public Wi-Fi networks", correct: false },
                  { text: "C) Using the computer's screen lock", correct: true },
                  { text: "D) Accepting friend requests from people you don't know", correct: false }
                ],
                explanation_en: "A screen lock prevents anyone from accessing your device and data if it is lost or stolen. It is one of the simplest and most effective security measures."
              }
            ]
          }
        },
        activity_type: "quiz",
        second_activity_type: "cyber_hangman",
        second_activity_title: "🔤 Cybersecurity Word Puzzle",
        second_activity_desc: "Read the clue, pick the right letters, and find the cybersecurity term!"
      },
      {
        id: 2,
        title: "🦠 Malicious Software (Viruses and Threats)",
        intro: "Malicious software (Malware) are programs that secretly enter our computers, tablets, or phones and cause harm.",
        activity_title: "📝 Quiz: Recognizing Malicious Software",
        activity_desc: "Answer questions about malicious software.",
        content: {
          "2.1": {
            title: "What is Malicious Software (Malware)?",
            description: "Malicious software (Malware) are programs that secretly enter our computers, tablets, or phones and cause harm.",
            image: "/images/module5/m5_malware_types.jpeg",
            points: [
              "Viruses: Infect your files and corrupt them",
              "Spyware: Monitors what you do without your knowledge, steals your passwords",
              "Adware: Constantly opens unwanted advertisement windows",
              "These software usually infect devices when you click on trap buttons like 'Download hacked game', 'Watch free movie', or 'You won a prize'"
            ],
            examples: [
              "❌ Trap: 'Download hacked game' button",
              "❌ Trap: 'Watch free movie' link",
              "❌ Trap: 'You won a prize, click!' message",
              "✅ Safe: Downloading apps from official stores (App Store, Play Store)"
            ],
            images: {
              "Fake Antivirus Warning": "/images/module5/m5_fake_antivirus.jpeg",
              "Download Warning": "/images/module5/m5_download_warning.jpeg"
            },
            video_links: [
              { title: "How Malware Works for Kids", url: "https://youtu.be/PM9O7rk69Cw?si=nPwjFed8vJXvcdV3" }
            ],
            quiz: [
              {
                type: "true_false",
                question: "Every 'Download' button on the internet is safe.",
                answer: false,
                explanation_en: "Many download buttons on the internet are traps that install malware. Always download only from official and trusted sources."
              },
              {
                type: "true_false",
                question: "A device suddenly slowing down can be a sign of a virus.",
                answer: true,
                explanation_en: "Malware runs hidden processes in the background, using up your device's resources and causing it to slow down significantly."
              },
              {
                type: "true_false",
                question: "Antivirus programs help protect us from malicious software.",
                answer: true,
                explanation_en: "Antivirus programs scan your device, detect threats, and remove them before they can cause damage."
              },
              {
                type: "true_false",
                question: "I should only download apps from trusted and official stores (App Store, Play Store).",
                answer: true,
                explanation_en: "Official app stores review apps for safety. Downloading from unofficial sources puts your device at serious risk."
              },
              {
                type: "true_false",
                question: "Viruses don't infect phones, only computers.",
                answer: false,
                explanation_en: "Phones can be infected with viruses just as easily as computers. Any device connected to the internet is at risk."
              },
              {
                type: "true_false",
                question: "'You won a free prize' messages are usually traps.",
                answer: true,
                explanation_en: "These messages are classic social engineering traps designed to trick you into clicking a dangerous link or giving away personal information."
              },
              {
                type: "true_false",
                question: "Updating devices increases security.",
                answer: true,
                explanation_en: "Updates patch security vulnerabilities in software. Without updates, your device is exposed to known attacks."
              },
              {
                type: "true_false",
                question: "Spyware can steal our information without us noticing.",
                answer: true,
                explanation_en: "Spyware secretly monitors your activity — recording passwords, messages, and browsing history — without any visible signs."
              },
              {
                type: "multiple_choice",
                question: "How do malicious software most commonly infect devices?",
                options: [
                  { text: "A) From original boxed games", correct: false },
                  { text: "B) From files downloaded from untrusted sites", correct: true },
                  { text: "C) From the school's website", correct: false },
                  { text: "D) From Word documents", correct: false }
                ],
                explanation_en: "Untrusted websites host files that appear safe but contain hidden malware. Always download from official, known sources."
              },
              {
                type: "multiple_choice",
                question: "Which of the following is a sign of a virus?",
                options: [
                  { text: "A) The screen being brighter", correct: false },
                  { text: "B) Constantly opening advertisement windows", correct: true },
                  { text: "C) The keyboard being clean", correct: false },
                  { text: "D) The game opening quickly", correct: false }
                ],
                explanation_en: "Pop-up advertisement windows that appear constantly are a classic sign of adware — a type of malware — infecting your device."
              }
            ]
          },
          "2.2": {
            title: "Virus Symptoms",
            description: "If your device suddenly slows down very much, gets very hot, or apps open by themselves, it may have been infected with malicious software.",
            image: "/images/module5/m5_virus_symptoms.jpeg",
            points: [
              "Device suddenly slows down very much",
              "Device gets very hot",
              "Apps open by themselves",
              "Advertisement windows constantly appear",
              "Programs crash or freeze",
              "Files disappear or get corrupted"
            ],
            examples: [
              "✅ Normal: Computer opens in 30 seconds",
              "❌ Warning: Computer opens in 5 minutes",
              "✅ Normal: Browser opens to your homepage",
              "❌ Warning: Browser opens to an unknown website"
            ]
          }
        },
        activity_type: "quiz",
        second_activity_type: "virus_match",
        second_activity_title: "🃏 Malware Matching Game",
        second_activity_desc: "Match each type of malware with its correct description!"
      },
      {
        id: 3,
        title: "📱 Safe Device Use",
        intro: "Device security is not only about the internet, but also about physical security.",
        activity_title: "📝 Quiz: Safe Device Use",
        activity_desc: "Answer questions about safe device use.",
        content: {
          "3.1": {
            title: "Screen Lock",
            description: "Tablets or phones must have a PIN or pattern lock. If the device is lost, your information is protected.",
            image: "/images/module5/m5_screen_lock.jpeg",
            points: [
              "Use PIN or pattern lock",
              "If the device is lost, your information is protected",
              "Choose a password that's hard to guess",
              "Don't use simple passwords like 1234 or 0000"
            ],
            examples: [
              "✅ Safe: Complex pattern or PIN",
              "❌ Unsafe: 1234 or birth date",
              "✅ Safe: Always locking the device",
              "❌ Unsafe: Leaving the device unlocked"
            ],
            quiz: [
              {
                type: "true_false",
                question: "I can leave my tablet on the desk and go to the cafeteria.",
                answer: false,
                explanation_en: "Leaving your device unattended — even for a moment — risks theft or unauthorized use. Always take it with you or lock it."
              },
              {
                type: "true_false",
                question: "Setting a screen lock protects my data if the device is stolen.",
                answer: true,
                explanation_en: "A screen lock prevents anyone from accessing your apps, photos, and passwords if your device is lost or stolen."
              },
              {
                type: "true_false",
                question: "Password-free Wi-Fi networks in cafes are always safe.",
                answer: false,
                explanation_en: "Open Wi-Fi networks can be monitored by anyone nearby. Attackers can intercept your passwords and messages on these networks."
              },
              {
                type: "true_false",
                question: "I should log out when I'm done on a shared computer.",
                answer: true,
                explanation_en: "Logging out prevents the next person who uses that computer from accessing your accounts and personal information."
              },
              {
                type: "true_false",
                question: "Updates are unnecessary, I don't need to do them.",
                answer: false,
                explanation_en: "Updates patch security holes that hackers and malware can exploit. Skipping updates leaves your device vulnerable."
              },
              {
                type: "true_false",
                question: "I should keep Bluetooth off when I'm not using it.",
                answer: true,
                explanation_en: "An active Bluetooth connection can be exploited by nearby attackers to access your device without your knowledge."
              },
              {
                type: "true_false",
                question: "I should immediately plug an unknown USB drive into my computer.",
                answer: false,
                explanation_en: "Unknown USB drives may contain malware designed to infect your device the moment they are plugged in. Never use unverified USB drives."
              },
              {
                type: "true_false",
                question: "I should only use the 'Remember Me' option on my own device at home.",
                answer: true,
                explanation_en: "'Remember Me' saves your login session on that device. Using it on a shared or public device lets others access your account."
              },
              {
                type: "multiple_choice",
                question: "What should you do when you're done on a shared computer (e.g., at school)?",
                options: [
                  { text: "A) Close the screen and leave", correct: false },
                  { text: "B) Log out of the account", correct: true },
                  { text: "C) Unplug the computer", correct: false },
                  { text: "D) Just close the browser", correct: false }
                ],
                explanation_en: "Closing the browser is not enough — you must log out so the next user cannot reopen your session and access your account."
              },
              {
                type: "multiple_choice",
                question: "What should we not do on public free Wi-Fi networks?",
                options: [
                  { text: "A) Read news", correct: false },
                  { text: "B) Check the weather", correct: false },
                  { text: "C) Access bank accounts or private accounts with passwords", correct: true },
                  { text: "D) Look at maps", correct: false }
                ],
                explanation_en: "On public Wi-Fi, your data can be intercepted. Never enter passwords or access sensitive accounts on these networks."
              }
            ]
          },
          "3.2": {
            title: "Public Networks",
            description: "'Free Wi-Fi' networks in cafes or shopping malls may be unsafe. We should not enter passwords or do banking on these networks.",
            image: "/images/module5/m5_public_wifi.jpeg",
            points: [
              "Public Wi-Fi networks may be unsafe",
              "We should not enter passwords on these networks",
              "We should not do banking",
              "We should not share private information"
            ],
            examples: [
              "❌ Unsafe: Accessing bank account on free Wi-Fi at a cafe",
              "✅ Safe: Doing banking on secure Wi-Fi at home"
            ]
          },
          "3.3": {
            title: "Logging Out",
            description: "We should never forget to press the 'Log Out' button after using a shared computer at school or the library.",
            image: "/images/module5/m5_logout.jpeg",
            points: [
              "We must always log out on shared computers",
              "We should only use the 'Remember Me' option on our own device",
              "Leaving without logging out allows the next user to access our account"
            ],
            examples: [
              "✅ Safe: Logging out on school computer",
              "❌ Unsafe: Leaving the computer without logging out"
            ]
          },
          "3.4": {
            title: "Updates",
            description: "Don't postpone the 'Update available' warning from your device. Updates are patches that close security vulnerabilities.",
            points: [
              "Updates close security vulnerabilities",
              "They protect the device",
              "They add new features",
              "They fix errors"
            ],
            examples: [
              "✅ Safe: Doing updates immediately",
              "❌ Unsafe: Constantly postponing updates"
            ]
          }
        },
        activity_type: "quiz"
      },
      {
        id: 4,
        title: "🔐 App Permissions and Privacy",
        intro: "When installing an app, it asks us for some permissions (Camera, Microphone, Location, Contacts). A conscious user asks: 'Does this app really need this permission?'",
        activity_title: "📝 Quiz: App Permissions",
        activity_desc: "Answer questions about app permissions.",
        content: {
          "4.1": {
            title: "What are App Permissions?",
            description: "When installing an app, it asks us for some permissions (Camera, Microphone, Location, Contacts). A conscious user asks: 'Does this app really need this permission?' For example, a Flashlight app wanting to access your 'Contacts' or 'Location' is suspicious. Because you don't need your friends' numbers to turn on a flashlight. Giving unnecessary permissions causes our private information to be collected.",
            image: "/images/module5/game_privacy_settings.png",
            points: [
              "Apps sometimes ask for unnecessary permissions",
              "We should not say 'Yes' to every permission",
              "We should give permissions that the app really needs",
              "Unnecessary permissions cause our private information to be collected"
            ],
            examples: [
              "❌ Suspicious: Flashlight app wants to access your contacts",
              "✅ Logical: Camera app wants to access the camera",
              "❌ Suspicious: Calculator wants to access your location",
              "✅ Logical: Map app wants to access your location"
            ],
            video_links: [
              { title: "How to Check App Permissions on Your Phone", url: "https://youtu.be/YgvuRLl77xk?si=bypNgz7rQ5M2s3yz" },
              { title: "App Permissions Explained for Teens", url: "https://youtu.be/o92z8s3Bfqw?si=HkZguWJDWcJaVXtP" }
            ],
            quiz: [
              {
                type: "true_false",
                question: "I should say 'Yes' to every permission every app asks for.",
                answer: false,
                explanation_en: "Apps should only receive permissions they genuinely need. Unnecessary permissions allow apps to collect your private data."
              },
              {
                type: "true_false",
                question: "A calculator app does not need a camera.",
                answer: true,
                explanation_en: "A calculator only needs to perform math operations. Camera access would be unnecessary and suspicious."
              },
              {
                type: "true_false",
                question: "I can check app permissions from settings.",
                answer: true,
                explanation_en: "You can view and revoke any app's permissions at any time through your device's settings menu."
              },
              {
                type: "true_false",
                question: "Giving location permission allows the app to know where I am.",
                answer: true,
                explanation_en: "Location permission reveals your physical coordinates — where you are and your daily routine. Only grant it to apps that truly need it."
              },
              {
                type: "true_false",
                question: "Most game apps need my contacts.",
                answer: false,
                explanation_en: "Games typically have no need for your contact list. If a game requests contacts, that is a suspicious sign."
              },
              {
                type: "true_false",
                question: "Reading (or browsing) privacy policies is important.",
                answer: true,
                explanation_en: "Privacy policies explain what data an app collects and how it uses it. Knowing this helps you make informed decisions."
              },
              {
                type: "true_false",
                question: "I should monitor permissions so my camera doesn't open without permission.",
                answer: true,
                explanation_en: "Without monitoring, some apps may secretly activate your camera or microphone. Regularly reviewing permissions keeps you in control."
              },
              {
                type: "true_false",
                question: "I should not install apps that ask for unnecessary permissions.",
                answer: true,
                explanation_en: "An app requesting permissions unrelated to its purpose may be trying to harvest your personal data. Avoid installing such apps."
              },
              {
                type: "multiple_choice",
                question: "What should you do if a 'Flashlight' app wants to 'Access Your Contacts'?",
                options: [
                  { text: "A) You should give permission", correct: false },
                  { text: "B) You should deny it, because it's unnecessary", correct: true },
                  { text: "C) You should ask your friends", correct: false },
                  { text: "D) You should turn off your phone", correct: false }
                ],
                explanation_en: "A flashlight only needs the torch light — it has no reason to access your contacts. Unnecessary permissions are a privacy red flag."
              },
              {
                type: "multiple_choice",
                question: "What does 'Location' permission do?",
                options: [
                  { text: "A) Turns on the phone's sound", correct: false },
                  { text: "B) Allows the app to know your geographical location (where you are)", correct: true },
                  { text: "C) Increases screen brightness", correct: false },
                  { text: "D) Speeds up the internet", correct: false }
                ],
                explanation_en: "Location permission tells the app your exact physical location. Only grant this to apps like maps or navigation that genuinely need it."
              }
            ]
          }
        },
        activity_type: "quiz",
        second_activity_type: "app_permission",
        second_activity_title: "📱 App Permission Detective",
        second_activity_desc: "Classify each app permission as 'Makes Sense' or 'Suspicious'!"
      },
      {
        id: 5,
        title: "🤝 Digital Responsibility",
        intro: "In the digital world, it's not enough to just protect ourselves; we must also be responsible towards others.",
        activity_title: "📝 Quiz: Digital Responsibility",
        activity_desc: "Answer questions about digital responsibility.",
        content: {
          "5.1": {
            title: "What is Digital Responsibility?",
            description: "In the digital world, it's not enough to just protect ourselves; we must also be responsible towards others.",
            image: "/images/module5/m5_digital_responsibility.jpeg",
            points: [
              "Accuracy: We should research the accuracy of a news story we see on the internet before sharing it. Spreading fake news is irresponsible",
              "Respect: We should not share others' photos without permission, and we should not make hurtful comments",
              "Reporting: When we see cyberbullying or dangerous content, we should report it to the platform using the 'Report' button"
            ],
            examples: [
              "✅ Responsible: Checking the accuracy of news before sharing",
              "❌ Not responsible: Sharing fake news immediately",
              "✅ Responsible: Not sharing others' photos without permission",
              "❌ Not responsible: Sharing photos without permission"
            ],
            video_links: [
              { title: "Digital Citizenship Animation", url: "https://youtu.be/D_tqwqgGGOc?si=kmJMeSxaM5e3mWoN" },
              { title: "How to Spot Fake News", url: "https://youtu.be/g2AdkNH-kWA?si=-FbHg7y_8OXvSGYl" },
              { title: "Fake News & Media Literacy", url: "https://youtu.be/AkwWcHekMdo?si=kSU1YW-ybAinrpKY" }
            ],
            quiz: [
              {
                type: "true_false",
                question: "I should share every news story I see on the internet immediately.",
                answer: false,
                explanation_en: "Always verify news before sharing. Spreading unverified information — even accidentally — can harm real people and cause panic."
              },
              {
                type: "true_false",
                question: "Sharing others' photos without permission is disrespectful.",
                answer: true,
                explanation_en: "Sharing someone's photo without their consent violates their privacy and can cause them real distress. Always ask first."
              },
              {
                type: "true_false",
                question: "I can 'Report' a malicious comment.",
                answer: true,
                explanation_en: "Reporting harmful content protects both yourself and others in the community. It is an important part of being a responsible digital citizen."
              },
              {
                type: "true_false",
                question: "I don't have to be kind in the digital world.",
                answer: false,
                explanation_en: "Online words hurt just as much as face-to-face words. Being kind and respectful is just as important in the digital world."
              },
              {
                type: "true_false",
                question: "Spreading unverified information can cause chaos.",
                answer: true,
                explanation_en: "Fake news and rumors spread fast online. Unverified information can panic communities and damage people's reputations."
              },
              {
                type: "true_false",
                question: "I can share my friend's secret on social media.",
                answer: false,
                explanation_en: "Sharing someone's secret without permission betrays their trust and can seriously damage your friendship and their reputation."
              },
              {
                type: "true_false",
                question: "My digital footprint can affect my future, I should behave responsibly.",
                answer: true,
                explanation_en: "Everything you post online creates a permanent digital footprint. Future employers, schools, and others may see it."
              },
              {
                type: "true_false",
                question: "I should respect others' work (copyright).",
                answer: true,
                explanation_en: "Copyright protects creators' work. Using images, music, or text without permission is unfair and often illegal."
              },
              {
                type: "multiple_choice",
                question: "What should you do when you see an embarrassing photo of your friend?",
                options: [
                  { text: "A) Send it to everyone", correct: false },
                  { text: "B) Laugh and move on", correct: false },
                  { text: "C) Not share it and warn them to remove it if necessary", correct: true },
                  { text: "D) Comment and make fun of it", correct: false }
                ],
                explanation_en: "Protecting your friend's dignity — not sharing the photo and alerting them — is the responsible and caring choice."
              },
              {
                type: "multiple_choice",
                question: "What should you do if someone bullies you on the internet?",
                options: [
                  { text: "A) Swear back at them", correct: false },
                  { text: "B) Don't respond, block them, and tell an adult", correct: true },
                  { text: "C) Give them your address and challenge them to a fight", correct: false },
                  { text: "D) Turn off the computer and cry", correct: false }
                ],
                explanation_en: "Responding to a bully escalates the situation. Blocking, saving evidence, and telling a trusted adult is the safest and smartest response."
              }
            ]
          }
        },
        activity_type: "quiz",
        second_activity_type: "news_verifier",
        second_activity_title: "📰 News Verification Game",
        second_activity_desc: "Examine each headline and decide: Reliable source or fake news?"
      },
      {
        id: 6,
        title: "🎭 Scenario Quiz: 'The Unlocked Tablet Case'",
        intro: "Can (6th grade student) leaves his tablet open and unlocked on his desk during recess and goes to the cafeteria. Can's friend Mert takes Can's tablet to play a joke.",
        activity_title: "📝 Scenario Quiz: Can and Mert's Story",
        activity_desc: "Read Can and Mert's story and answer the questions.",
        content: {
          "6.1": {
            title: "Scenario: The Unlocked Tablet Case",
            description: "Can (6th grade student) leaves his tablet open and unlocked on his desk during recess and goes to the cafeteria. Can's friend Mert takes Can's tablet to play a joke. At that moment, an advertisement catches Mert's attention: 'Download Free War Game - APK Only'. Mert tries to download the game to surprise Can. During the download, the tablet asks: 'This file may harm your device, do you still want to download it?' Mert says 'Yes' and approves all permissions (Contacts, Gallery, Location). When Can returns, he sees that his tablet is very hot and constant advertisements are appearing on the screen.",
            image: "/images/module5/m5_public_wifi.jpeg",
            video_links: [
              { title: "How to Spot a Phishing Email", url: "https://youtu.be/iHetr8xTWIU?si=bv3hl6xFafLE6hs3" }
            ],
            quiz: [
              {
                type: "true_false",
                question: "Can made the first mistake by leaving his tablet unlocked and unattended.",
                answer: true,
                reason_en: {
                  correct: "Correct! Always lock your device when leaving it unattended. An unlocked device is an open door to unauthorized access.",
                  wrong: "Actually, this is true. By leaving his tablet unlocked, Can created a security vulnerability. He should always lock his device."
                }
              },
              {
                type: "multiple_choice",
                question: "How was Mert's behavior?",
                options: [
                  { text: "A) Very helpful.", correct: false },
                  { text: "B) Thoughtless; he interfered with someone else's device without permission and downloaded a risky file.", correct: true },
                  { text: "C) It was a very funny joke.", correct: false }
                ],
                reason_en: {
                  correct: "Correct! Touching someone else's device without permission is both disrespectful and a serious security risk.",
                  wrong: "No. Accessing someone else's device without permission and downloading unknown files is dangerous and irresponsible."
                }
              },
              {
                type: "multiple_choice",
                question: "Why did the tablet give a warning?",
                options: [
                  { text: "A) Because the game was very large", correct: false },
                  { text: "B) Because a file with an unclear source (APK) was being downloaded from outside the official store (Play Store/App Store). These files usually contain viruses.", correct: true },
                  { text: "C) Because the internet was slow", correct: false }
                ],
                reason_en: {
                  correct: "Correct! APK files downloaded outside official stores can contain viruses and malware. Always take these warnings seriously.",
                  wrong: "No. The warning was because the file was being downloaded from outside the official store (as an APK). File size or internet speed had nothing to do with it."
                }
              },
              {
                type: "multiple_choice",
                question: "Which of the permissions Mert gave is unnecessary for a 'War Game'?",
                options: [
                  { text: "A) Storage space", correct: false },
                  { text: "B) Contacts and Location (The game doesn't need a friends list or address)", correct: true },
                  { text: "C) Internet access", correct: false }
                ],
                reason_en: {
                  correct: "Correct! Unnecessary permissions are a privacy threat. If a game asks for your contacts or location, that's a suspicious sign.",
                  wrong: "A war game has no need for your phone contacts or location. These permissions could be used to steal personal data."
                }
              },
              {
                type: "multiple_choice",
                question: "What should Can do now?",
                options: [
                  { text: "A) Thank Mert.", correct: false },
                  { text: "B) Play the game immediately.", correct: false },
                  { text: "C) Tell an adult, disconnect the device from the internet, and run a virus scan.", correct: true }
                ],
                reason_en: {
                  correct: "Correct! When malware is suspected: tell an adult, disconnect from the internet, and run a virus scan immediately.",
                  wrong: "No. Continuing to use a malware-infected device can cause more damage. You must consult an adult right away."
                }
              },
              {
                type: "multiple_choice",
                question: "Who was missing 'Digital Responsibility' in this incident?",
                options: [
                  { text: "A) Only Can", correct: false },
                  { text: "B) Only Mert", correct: false },
                  { text: "C) Both Can (didn't take security measures) and Mert (violated respect for others and the safe download rule)", correct: true }
                ],
                reason_en: {
                  correct: "Correct! Digital responsibility belongs to everyone. Can left his device unlocked; Mert accessed it without permission and downloaded a dangerous file.",
                  wrong: "Both made mistakes. Can left his tablet unlocked, while Mert interfered without permission and downloaded a harmful file."
                }
              }
            ]
          }
        },
        activity_type: "interactive_quiz"
      },
      {
        id: 7,
        title: "🎭 Scenario Quiz: 'The Free Diamonds Trap'",
        intro: "Elif wants to progress in her favorite game. On Instagram, she sees an advertisement saying 'Click here, enter your username and password, have 10,000 diamonds loaded to your account!'",
        activity_title: "📝 Scenario Quiz: Elif's Story",
        activity_desc: "Read Elif's story and answer the questions.",
        content: {
          "7.1": {
            title: "Scenario: The Free Diamonds Trap",
            description: "Elif wants to progress in her favorite game. On Instagram, she sees an advertisement saying 'Click here, enter your username and password, have 10,000 diamonds loaded to your account!' The site is very colorful and uses the real game's logo.",
            image: "/images/module5/m5_download_warning.jpeg",
            quiz: [
              {
                type: "multiple_choice",
                question: "What should Elif do?",
                options: [
                  { text: "A) Enter her password immediately, not miss the diamonds.", correct: false },
                  { text: "B) Stop! Sites asking for passwords are usually traps (Phishing).", correct: true }
                ],
                reason_en: {
                  correct: "Correct! Unknown sites asking for your password are usually phishing traps. Never enter your password!",
                  wrong: "No! This is a phishing trap. Entering your password could mean losing your account or being scammed."
                }
              },
              {
                type: "multiple_choice",
                question: "The site uses the real game's logo, does this show it's safe?",
                options: [
                  { text: "A) Yes, if there's a logo it's real.", correct: false },
                  { text: "B) No, logos can be copied. She should check the address bar (URL).", correct: true }
                ],
                reason_en: {
                  correct: "Correct! Logos can be easily copied. Always check the URL in the address bar to verify a site's authenticity.",
                  wrong: "No! Logos can be copied. Fake sites can use real logos too. Checking the address bar (URL) is essential."
                }
              },
              {
                type: "multiple_choice",
                question: "What should Elif do with this advertisement?",
                options: [
                  { text: "A) Send it to her friends.", correct: false },
                  { text: "B) Warn the platform by clicking 'Report'.", correct: true }
                ],
                reason_en: {
                  correct: "Correct! Reporting suspicious ads protects both yourself and others. That's digital responsibility.",
                  wrong: "No! Sending it to friends would spread the trap. Instead, use the 'Report' button to warn the platform."
                }
              }
            ]
          }
        },
        activity_type: "interactive_quiz"
      },
      {
        id: 8,
        title: "🕵️ Phishing Detective: Spot the Fake!",
        intro: "Real or fake? Examine each message and decide if it's 'Safe' or 'Suspicious'. Learn the red flags hidden in every phishing attempt!",
        activity_title: "🎮 Phishing Detective Game",
        activity_desc: "10 different messages will appear. Decide whether each one is real or a phishing (fake) attempt!",
        activity_type: "phishing_detective"
      },
      {
        id: 9,
        title: "🗺️ Safe Decision Map: An Online Day",
        intro: "You're spending a day online from morning to night. At every step, will you play it safe or take a risk? Make the right choice at 8 decision points and protect your digital security score!",
        activity_title: "🎮 Safe Decision Map",
        activity_desc: "Make decisions at 8 different situations. Every wrong choice costs you points. Get the highest score possible!",
        activity_type: "safe_decision_map"
      }
    ],
  },
};

