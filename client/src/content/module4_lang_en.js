// Module 4: Password Security & Account Protection - English Language File

export const MODULE4_EN = {
  module_4: {
    title: "Module 4: Password Security & Account Protection",
    subtitle: "🔐 The Keys to the Digital Vault",
    hero_image: "/images/module4/locked_door_tablet_metaphor.png",
    sections: [
      {
        id: 1,
        title: "🔐 What is a Password and Why is it So Important?",
        intro: "A password is the first and most important line of defense protecting our digital assets. Just like the key to our home!",
        activity_title: "📝 Quiz: Password Security",
        activity_desc: "Answer questions about password security.",
        content: {
          "1.1": {
            title: "What is a Password?",
            description: "A password is the first and most important line of defense protecting our digital assets. Just like the key to our home, passwords provide access to our private spaces (email, game accounts, school portals, social media). However, in the digital world, thieves are invisible. If someone gets your password, it's called 'account hacking'.",
            image: "/images/password_security_hero.png",
            points: [
              "Password is the key to our digital identity",
              "Provides access to our email, game, and social media accounts",
              "If password is stolen, account hacking occurs",
              "Passwords are like toothbrushes: never share them and change them frequently"
            ],
            examples: [
              "✅ Safe: Only you know your password",
              "❌ Unsafe: You share your password with a friend",
              "✅ Safe: You use different passwords for each account",
              "❌ Unsafe: You use the same password for all accounts"
            ],
            quiz: [
              {
                type: "true_false",
                question: "If my password is stolen, only my game score is lost, nothing else happens.",
                answer: false
              },
              {
                type: "true_false",
                question: "Passwords are the key to our digital identity.",
                answer: true
              },
              {
                type: "true_false",
                question: "We can't say accounts with strong passwords are never hacked, but it's very difficult.",
                answer: true
              }
            ]
          },
          "1.2": {
            title: "What Happens if Your Account is Hacked?",
            description: "If your account is hacked, you may face serious problems:",
            points: [
              "Identity Theft: They can send rude messages to your friends or try to scam them in your name",
              "Data Loss: Your game character you've worked on for years, your photos, or your homework can be deleted",
              "Spying: They can read your private messages",
              "Reputation Loss: They can share bad things in your name"
            ],
            examples: [
              "A hacker can send messages asking for money to your friends in your name",
              "Your game character can be deleted or your items can be stolen",
              "Your private photos or messages can be shared"
            ]
          },
          "1.3": {
            title: "Discussion Question",
            description: "Would you give your house key to a stranger on the street? So why do we sometimes give our passwords to websites we don't know on the internet?",
            points: [
              "In real life, we don't give our keys to people we don't know",
              "We should be careful in the digital world in the same way",
              "We should not give passwords to websites we don't know",
              "Password security is not just a rule, it's a survival skill in the digital world"
            ]
          }
        },
        activity_type: "quiz"
      },
      {
        id: 2,
        title: "🛡️ Unbreakable Passwords: The 'Sentence Method'",
        intro: "In the past, passwords like 'cat123' were used, but now computers can guess these passwords in seconds. Let's learn to create strong passwords!",
        activity_title: "🎮 Activity: Password Workshop",
        activity_desc: "Create a strong password using the given words.",
        content: {
          "2.1": {
            title: "3 Golden Rules for Strong Passwords",
            description: "To create a strong password, you must follow these 3 rules:",
            image: "/images/password_security_hero.png",
            points: [
              "Complexity: Mix uppercase (A), lowercase (a), numbers (9), and symbols (!,?,*)",
              "Length: The longer the password, the harder it is to crack. At least 10-12 characters are recommended",
              "Unpredictability: Your name, birth year, or sequential numbers like '123456' should NEVER be used"
            ],
            examples: [
              "❌ Weak: cat123 (too short and predictable)",
              "❌ Weak: John2024 (name and birth year used)",
              "✅ Strong: BlueElephant!3Pizza (long, complex, unpredictable)"
            ]
          },
          "2.2": {
            title: "New Method: Sentence Passwords (Passphrases)",
            description: "Create a silly sentence that sticks in your mind and turn it into a password. This password is easy to remember but it would take years for a computer to crack!",
            points: [
              "Example Sentence: 'Blue elephant ate 3 pizzas in the garden!'",
              "Password: BlueElephant!3Pizza",
              "Words starting with capital letters",
              "Add numbers and symbols",
              "Easy to remember but hard to crack"
            ],
            examples: [
              "Sentence: 'Red car goes fast 5!'",
              "Password: RedCar!5Fast",
              "Sentence: 'Green apple on tree 7 pieces!'",
              "Password: GreenApple@7Pieces"
            ]
          },
          "2.3": {
            title: "Password Workshop Example",
            description: "Words: Summer, IceCream, 2024",
            points: [
              "Weak Example: summer2024 (too simple, predictable)",
              "Strong Example: Summer!IceCream2024? (complex, long, contains symbols)"
            ],
            examples: [
              "Combine the words",
              "Use capital letters",
              "Add symbols (!, ?, @, #)",
              "Add numbers"
            ]
          }
        },
        activity_type: "password_smith"
      },
      {
        id: 3,
        title: "🎭 Social Engineering and Password Sharing",
        intro: "Sometimes hackers don't use computer programs, they use deception methods (Social Engineering). They try to gain your trust.",
        activity_title: "📝 Quiz: Social Engineering Scenarios",
        activity_desc: "Identify social engineering traps in the given scenarios.",
        content: {
          "3.1": {
            title: "What is Social Engineering?",
            description: "Sometimes hackers don't use computer programs, they use deception methods (Social Engineering). They try to gain your trust.",
            image: "/images/password_security_hero.png",
            points: [
              "Hackers try to deceive you",
              "They try to gain your trust",
              "They use deception methods instead of computer programs",
              "They want you to give them your password"
            ],
            examples: [
              "They can act like a fake friend",
              "They can pretend there's an emergency",
              "They can promise something free"
            ]
          },
          "3.2": {
            title: "Friend Traps",
            description: "Your closest friend Kerem might say, 'Give me your account, I'll pass that hard level for you.' Even if Kerem doesn't have bad intentions;",
            points: [
              "Kerem's computer might have a virus",
              "Kerem might forget to log out and let someone else use your account",
              "You might have a fight with Kerem and he could harm your account out of anger",
              "Password means 'Secret'. Secrets are private information that shouldn't be shared even with closest friends"
            ],
            examples: [
              "❌ Wrong: 'Okay, my password is 123456'",
              "✅ Right: 'No, I can't share my password. It's not safe.'",
              "❌ Wrong: 'Just once, it won't be a problem'",
              "✅ Right: 'Passwords are never shared'"
            ]
          },
          "3.3": {
            title: "Two Paths",
            description: "There are two paths in password sharing:",
            points: [
              "Path A: You gave your password to your friend → Your friend logged in from a virus-infected computer → Account Hacked ❌",
              "Path B: You said 'No' → Your account stayed with you → You're safe ✅"
            ],
            examples: [
              "Always learn to say 'No'",
              "Remember that passwords are private",
              "Don't share passwords even if your friends have good intentions"
            ]
          }
        },
        activity_type: "quiz"
      },
      {
        id: 4,
        title: "🕵️ Advanced Phishing Detection",
        intro: "Phishers try to lure you by creating fake websites. These sites are copies of the original (for example, Instagram or Roblox).",
        activity_title: "🎮 Activity: Cyber Word Game",
        activity_desc: "Find and learn cybersecurity words!",
        content: {
          "4.1": {
            title: "What is Phishing?",
            description: "Phishers try to lure you by creating fake websites. These sites are copies of the original (for example, Instagram or Roblox).",
            image: "/images/password_security_hero.png",
            points: [
              "They create fake websites",
              "They copy original sites",
              "They try to deceive you",
              "They want to steal your password"
            ],
            examples: [
              "Fake Instagram login page",
              "Fake Roblox account page",
              "Fake email sending"
            ]
          },
          "4.2": {
            title: "How Do You Recognize a Fake Message? 4 Clues",
            description: "Pay attention to these 4 clues to detect fake messages:",
            points: [
              "Sense of Urgency: 'Your account will be closed if you don't do it immediately!' (They want to panic you and prevent you from thinking)",
              "Free Promise: 'Click to win free diamonds/skins!' (Offers that are too good to be true are traps)",
              "Spelling Errors: Official institutions don't write misspelled words like 'Hello', 'Click'",
              "Address Bar (URL): lnstagram.com instead of instagram.com (with lowercase L) or strange addresses like instagram-login.net"
            ],
            examples: [
              "❌ Fake: 'Click immediately or your account will be closed!'",
              "✅ Safe: 'Please log in to update your account'",
              "❌ Fake: 'Win 1000 free diamonds!'",
              "✅ Safe: 'You can make in-game purchases'"
            ],
            quiz: [
              {
                type: "multiple_choice",
                question: "Which of the following links is safe?",
                options: [
                  { text: "A) www.faceb00k.com (Written with zero - FAKE)", correct: false },
                  { text: "B) security-warning-google.com (Strange additions - FAKE)", correct: false },
                  { text: "C) www.google.com (Written correctly - SAFE)", correct: true }
                ]
              }
            ]
          }
        },
        activity_type: "wordle_game"
      },
      {
        id: 5,
        title: "🔒 Two-Lock System: 2FA",
        intro: "Let's say you made your password very strong but it was somehow stolen. This is where Two-Factor Authentication (2FA) comes in.",
        activity_title: "🎮 Activity: 2FA Security Adventure",
        activity_desc: "Learn the importance of 2FA through scenarios and discover how to protect your accounts!",
        content: {
          "5.1": {
            title: "What is 2FA?",
            description: "Let's say you made your password very strong but it was somehow stolen. This is where Two-Factor Authentication (2FA) comes in. Think of it like a 'Two-Lock Door'.",
            image: "/images/2fa_hero.png",
            points: [
              "Lock 1: Your password (Something you know)",
              "Lock 2: A 6-digit temporary code sent to your phone (Something you have)",
              "Even if a hacker knows your password, they can't open the second lock because they don't have your phone",
              "You must enable this feature in the 'Settings' section of email, social media, and game accounts"
            ],
            examples: [
              "✅ Safe: Password + Phone code = Double protection",
              "❌ Unsafe: Only password = Single protection",
              "✅ Safe: Account with 2FA enabled",
              "❌ Unsafe: Account with 2FA disabled"
            ]
          },
          "5.2": {
            title: "How Does 2FA Work?",
            description: "The 2FA system provides two-step verification:",
            points: [
              "First step: You enter your password",
              "Second step: You enter the 6-digit code sent to your phone",
              "If both steps are correct, you can log in",
              "Even if a hacker knows your password, they can't log in without your phone"
            ],
            examples: [
              "When logging in, first you enter your password",
              "Then you enter the code sent to your phone",
              "If both codes are correct, login is successful"
            ]
          },
          "5.3": {
            title: "Where Should I Enable 2FA?",
            description: "You should enable 2FA on all your important accounts:",
            points: [
              "Email accounts (Gmail, Outlook)",
              "Social media (Instagram, Facebook, TikTok)",
              "Game accounts (Roblox, Minecraft)",
              "School accounts (E-School)",
              "Enable 'Two-Factor Authentication' or '2FA' option from the Settings section"
            ],
            examples: [
              "Instagram: Settings → Security → Two-Factor Authentication",
              "Gmail: My Account → Security → 2-Step Verification",
              "Roblox: Settings → Security → Two-Factor Authentication"
            ]
          }
        },
        activity_type: "scenario_2fa"
      },
      {
        id: 6,
        title: "🎭 Scenario Quiz: 'The Big Tournament Trap'",
        intro: "Deniz (12 years old) receives a 'Tournament Invitation' message in her favorite online game. The message didn't come from the game's chat, but from an unknown Instagram account.",
        activity_title: "📝 Scenario Quiz: Deniz's Story",
        activity_desc: "Read Deniz's story and answer the questions.",
        content: {
          "6.1": {
            title: "Scenario: The Big Tournament Trap",
            description: "Deniz (12 years old) receives a 'Tournament Invitation' message in her favorite online game. The message didn't come from the game's chat, but from an unknown Instagram account. The message says: 'Hello Deniz! You've been selected for the legendary tournament. Click this link and log in with your game account to participate and win 5000 Diamonds: www.game-tournament-login.com' Deniz gets excited. At that moment, her closest friend Asya says, 'Let's enter right away, I already entered and typed my password!'",
            image: "/images/password_security_hero.png",
            quiz: [
              {
                type: "multiple_choice",
                question: "What is the biggest clue showing this is a 'Phishing' message?",
                options: [
                  { text: "A) The message coming from Instagram", correct: false },
                  { text: "B) The link not being the official game site (game-tournament-login.com) and the message coming from outside the game (from Instagram)", correct: true },
                  { text: "C) The promise of 5000 Diamonds", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Does Asya entering her password show that the link is safe?",
                options: [
                  { text: "A) Yes, if my friend did it, it's safe", correct: false },
                  { text: "B) No. Asya has fallen into the trap. Even if our friend did it, we should question it.", correct: true },
                  { text: "C) Maybe, it depends on the situation", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "What would happen if Deniz clicked the link and entered her password but 2FA (Two-Factor Authentication) was enabled?",
                options: [
                  { text: "A) The hacker could access the account", correct: false },
                  { text: "B) The hacker would get the password but couldn't access the account because they wouldn't know the code sent to Deniz's phone. 2FA would save Deniz.", correct: true },
                  { text: "C) 2FA wouldn't help at all", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "What should Deniz say to Asya?",
                options: [
                  { text: "A) 'Great, let me enter too'", correct: false },
                  { text: "B) 'Asya, change your password immediately! That site is fake, your account can be hacked.'", correct: true },
                  { text: "C) 'Okay, I'll wait'", correct: false }
                ]
              }
            ]
          }
        },
        activity_type: "interactive_quiz"
      }
    ]
  }
};

export default MODULE4_EN;
