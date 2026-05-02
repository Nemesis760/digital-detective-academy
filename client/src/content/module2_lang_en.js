// Module 2: Digital Footprint & Online Privacy - English Language File

export const MODULE2_EN = {
  module_2: {
    title: "Module 2: Digital Footprint & Online Privacy",
    subtitle: "🔍 Digital Shield and Invisible Footprints",
    sections: [
      {
        id: 1,
        title: "🔍 What Is a Digital Footprint?",
        intro: "You leave a trace in every digital action. Sometimes intentionally, sometimes unintentionally. Understanding and managing these traces is very important!",
        content: {
          "1.1": {
            title: "What Is a Digital Footprint?",
            description: "A digital footprint is the trail of data we leave behind when we use the internet. Posts, comments, likes, search history, and the videos we watch all create this footprint. Just like footprints in snow, online actions may not always be visible immediately, but they can last a long time.",
            image: "/images/digital_footprint_concept_map.png",
            points: [
              "Photos and comments we share on social media",
              "Our search history and websites we visit",
              "Videos we watch and content we like",
              "Messages and emails we send",
              "Activities we do in online games"
            ],
            examples: [
              "A photo you shared on Instagram",
              "A video you watched on YouTube",
              "A topic you searched on Google",
              "A message you sent on WhatsApp"
            ],
            quiz: [
              {
                type: "true_false",
                question: "Digital footprint consists only of social media posts.",
                answer: false,
                explanation_en: "A digital footprint goes far beyond social media. Your search history, videos you watch, games you play, and messages you send are all part of your digital footprint."
              },
              {
                type: "true_false",
                question: "Every action on the internet can leave a trace.",
                answer: true,
                explanation_en: "Yes! Clicking on a site, watching a video, or even just visiting a page can leave a trace on servers. In the digital world, every step can be recorded."
              },
              {
                type: "true_false",
                question: "When you delete a post, it completely disappears from the internet.",
                answer: false,
                explanation_en: "Deleting a post removes it from your view, but someone may have already taken a screenshot or the site may have archived it. The internet truly never forgets!"
              },
              {
                type: "multiple_choice",
                question: "Which is an example of a digital footprint?",
                options: [
                  { text: "A) Writing notes in a notebook", correct: false },
                  { text: "B) Watching a video on the internet", correct: true },
                  { text: "C) Reading a book", correct: false },
                  { text: "D) Playing sports", correct: false }
                ],
                explanation_en: "Watching a video online leaves a trace in your viewing history and on the platform's database. Writing notes, reading books, and playing sports don't create any digital traces."
              }
            ]
          },
          "1.2": {
            title: "Permanence of Digital Footprints",
            description: "The internet never forgets. These traces can be seen, saved, and copied by others. Even if content is deleted, someone may have taken a screenshot. That is why 'thinking before posting' is essential in the digital world.",
            image: "/images/module1/think_en.png",
            points: [
              "Screenshots may have been taken",
              "Archived pages and database backups",
              "Social media archives",
              "Content shared by others",
              "Search engine caches"
            ],
            examples: [
              "A screenshot may have been taken of a tweet you deleted",
              "Old posts may appear on archived web pages",
              "Someone may have saved your photo"
            ]
          }
        },
      },
      {
        id: 2,
        title: "🎯 Active and Passive Digital Footprint",
        intro: "Our digital footprint is formed in two ways: Active and Passive. Understanding both is important!",
        activity_title: "🎮 Activity: Which Footprint? Card Game",
        activity_desc: "Read the given situations and select the correct card (Active/Passive).",
        content: {
          "2.1": {
            title: "Active Digital Footprint",
            description: "An active digital footprint is created when users intentionally share information. Uploading a photo to Instagram, writing a blog post, or commenting on a YouTube video are examples of this. We are in control.",
            image: "/images/module2/video_active_passive.jpg",
            points: [
              "Sharing photos on social media",
              "Writing a blog post",
              "Commenting or liking",
              "Sharing status updates",
              "Uploading videos"
            ],
            examples: [
              "Sharing a photo on Instagram → Active",
              "Commenting on a YouTube video → Active",
              "Liking a post on Facebook → Active"
            ],
            quiz: [
              {
                type: "true_false",
                question: "Commenting by my own choice is an active footprint.",
                answer: true,
                explanation_en: "An active digital footprint is created by actions you intentionally choose to do. Writing a comment is fully your own decision, so it creates an active footprint."
              }
            ]
          },
          "2.2": {
            title: "Passive Digital Footprint",
            description: "A passive digital footprint is created in the background without our direct awareness. Websites tracking us as we browse (cookies), recording our location information, or our IP address fall into this category. Ads appearing based on our recent searches are a result of passive footprints.",
            image: "/images/module2/video_active_passive.jpg",
            points: [
              "Websites tracking us with cookies",
              "Recording our location information",
              "Recording our IP address",
              "Recording our browsing history",
              "Collecting our device information"
            ],
            examples: [
              "You browsed a shopping site, didn't buy anything, but then saw an ad for that product → Passive",
              "A map app uses your location → Passive",
              "A website tracks you with cookies → Passive"
            ],
            quiz: [
              {
                type: "true_false",
                question: "Cookies that track me on websites are an active footprint.",
                answer: false,
                explanation_en: "Cookies work in the background without your awareness. You're not sharing anything; the website is collecting information about you. That's why it's a passive footprint."
              },
              {
                type: "true_false",
                question: "A map app that uses my location leaves a passive footprint.",
                answer: true,
                explanation_en: "A map app automatically collects your location data in the background. You're not consciously 'publishing' it — the app records it on its own. This is a passive footprint."
              }
            ]
          },
          "2.3": {
            title: "Combination of Active and Passive Footprints",
            description: "Both types together form our overall digital profile. This profile can be used by companies and platforms to show ads, recommend content, or conduct behavior analysis.",
            points: [
              "Active and passive footprints together form our digital profile",
              "This profile can be used for ads",
              "Content recommendations are made based on this profile",
              "Can be used for behavior analysis"
            ]
          }
        },
        activity_type: "card_matching"
      },
      {
        id: 3,
        title: "🔐 Personal Information & Privacy",
        intro: "Our personal information is like the keys to our identity in the digital world. Let's learn how to protect these keys!",
        activity_title: "📝 Quiz: Safe/Unsafe Matching",
        activity_desc: "Read the given actions and drag them to the appropriate box (Safe/Unsafe).",
        content: {
          "3.1": {
            title: "What Is Personal Information?",
            description: "Personal information is data that identifies us, such as our full name, home address, phone number, ID number, the school we attend, and birthdate. These details are like the keys to our identity in the digital world and are very valuable.",
            image: "/images/privacy_detective_hero.png",
            points: [
              "Our full name and surname",
              "Our home address",
              "Our phone number",
              "Our ID number",
              "The school we attend",
              "Our birthdate"
            ],
            examples: [
              "❌ Don't share: Home address, phone number, ID number",
              "✅ You can share: Nickname, general interests"
            ],
            quiz: [
              {
                type: "multiple_choice",
                question: "Which of the following is NOT PERSONAL INFORMATION?",
                options: [
                  { text: "A) Your phone number", correct: false },
                  { text: "B) Your birthdate", correct: false },
                  { text: "C) Your favorite color", correct: true },
                  { text: "D) Your home address", correct: false }
                ],
                explanation_en: "Your favorite color doesn't identify you or put your privacy at risk. But your phone number, birthdate, and home address are private details that directly identify you — never share these online!"
              }
            ]
          },
          "3.2": {
            title: "Privacy Settings",
            description: "The apps we use offer 'privacy settings.' These settings are like locking the door to our virtual house. Keeping our profile open only to 'Friends' we know, instead of 'Public,' prevents strangers from accessing our information.",
            image: "/images/game_privacy_settings.png",
            points: [
              "Check profile privacy settings",
              "Use 'Friends Only' option",
              "Hide personal information",
              "Control tagging",
              "Turn off location sharing"
            ],
            examples: [
              "✅ Safe: Setting privacy to 'Friends Only'",
              "❌ Unsafe: Making profile 'Public'",
              "✅ Safe: Using only a nickname",
              "❌ Unsafe: Sharing full name and surname"
            ],
            quiz: [
              {
                type: "true_false",
                question: "There is no harm in sharing my home address on social media.",
                answer: false,
                explanation_en: "Your home address is one of your most private pieces of information. Malicious people could use it to find you. It should absolutely never be shared on social media!"
              },
              {
                type: "true_false",
                question: "Privacy settings allow us to control who can see our information.",
                answer: true,
                explanation_en: "Exactly! Privacy settings let you keep your profile visible only to friends you know, preventing strangers from accessing your information. This is the foundation of digital safety."
              },
              {
                type: "true_false",
                question: "Making my profile 'Public' is the safest method.",
                answer: false,
                explanation_en: "A public profile means millions of strangers can see your information. The safest option is to set your profile to 'Friends Only' so only people you know can view it."
              },
              {
                type: "true_false",
                question: "I should not use a photo showing my school uniform logo as a profile picture.",
                answer: true,
                explanation_en: "A school uniform logo can reveal which school you attend. This information could be used to predict where you are. Profile pictures shouldn't contain identifiable details like logos or landmarks."
              },
              {
                type: "multiple_choice",
                question: "What should you do if a game app unnecessarily wants access to your 'Contacts'?",
                options: [
                  { text: "A) Allow it", correct: false },
                  { text: "B) Deny it", correct: true },
                  { text: "C) Ask your friends", correct: false }
                ],
                explanation_en: "A game has no reason to access your contacts. Unnecessary permission requests are a warning sign that an app may be trying to collect your personal data. Always ask 'why does it need this?' — and deny it!"
              },
              {
                type: "multiple_choice",
                question: "What is the safest information to share on the internet?",
                options: [
                  { text: "A) Your home address", correct: false },
                  { text: "B) Your favorite team's flag", correct: true },
                  { text: "C) Your school's full name", correct: false }
                ],
                explanation_en: "Your favorite team's flag doesn't reveal anything personal about you. Your home address and school name could show where you live and spend time — those are dangerous to share."
              }
            ]
          },
          "3.3": {
            title: "Safe and Unsafe Sharing",
            description: "Our profile picture is usually visible to everyone. Therefore, we should avoid sharing details in profile photos that could reveal our location, like a school uniform logo or the exterior of our home.",
            points: [
              "School logos should not be in profile photos",
              "Home address should not be visible",
              "Phone numbers should not be shared",
              "Passwords should never be shared"
            ],
            examples: [
              "✅ Safe: Using only a nickname",
              "❌ Unsafe: Sharing full name and surname",
              "✅ Safe: Setting privacy to 'Friends Only'",
              "❌ Unsafe: Giving your password to a friend"
            ]
          }
        },
        activity_type: "quiz"
      },
      {
        id: 4,
        title: "⏳ Impact on the Future",
        intro: "A fun or impulsive post we make online today can reappear years later. The internet does not forget!",
        activity_title: "🎮 Activity: Will It Be a Problem in the Future?",
        activity_desc: "Read the given cards and place them in the 'Will Be a Problem' or 'Won't Be a Problem' box.",
        content: {
          "4.1": {
            title: "Digital Reputation",
            description: "When applying to a good university or your dream job in the future, officials may look at your 'digital reputation.' Digital reputation is how you appear online.",
            image: "/images/module2/digital_reputation_en.png",
            points: [
              "Can be checked in university applications",
              "Can be researched in job applications",
              "Can affect future opportunities",
              "Can be positive or negative"
            ],
            examples: [
              "✅ Positive: Photo of a medal you won in school football team",
              "❌ Negative: A video where you make fun of a friend and upset them",
              "❌ Negative: A joke photo that looks like you're doing something illegal or dangerous"
            ]
          },
          "4.2": {
            title: "Impact of Past Posts",
            description: "Rude comments, inappropriate jokes, or offensive posts made in the past can cause you to miss out on great future opportunities. Today's 'funny' post shouldn't become tomorrow's 'big problem.'",
            points: [
              "Rude comments can cause problems in the future",
              "Inappropriate jokes can damage reputation",
              "Offensive posts can miss opportunities",
              "Screenshots can emerge years later"
            ],
            examples: [
              "Murat wrote a very rude comment about a teacher he was angry with on social media. 5 years later, this comment could be found in his university application and Murat could be thought of as disrespectful or problematic."
            ]
          }
        },
        activity_type: "scenario_game"
      },
      {
        id: 5,
        title: "🛡️ Safe Digital Behaviors",
        intro: "There are some rules to stay safe in the digital world and leave a clean footprint. Let's learn these rules!",
        activity_title: "🎮 Activity: Scenario Quiz - Zeynep's Story",
        activity_desc: "Read Zeynep's story and make the right decisions.",
        content: {
          "5.1": {
            title: "T.H.I.N.K. Rule",
            description: "Think Before You Post (T.H.I.N.K.): Is what you're sharing True? Helpful? Inspiring? Necessary? Kind? If not, don't share it.",
            image: "/images/module1/think_en.png",
            points: [
              "T - True: Is the information true?",
              "H - Helpful: Is it helpful to others?",
              "I - Inspiring: Does it inspire?",
              "N - Necessary: Is it necessary to share?",
              "K - Kind: Is it kind and respectful?"
            ],
            examples: [
              "Ask yourself these 5 questions before sharing",
              "If you can't say 'Yes' to all, don't share"
            ]
          },
          "5.2": {
            title: "Check Privacy Settings",
            description: "Regularly check your social media account settings and make sure they are only open to people you know.",
            points: [
              "Do monthly privacy checks",
              "Check profile visibility",
              "Check tagging settings",
              "Turn off location sharing",
              "Review app permissions"
            ]
          },
          "5.3": {
            title: "Trusted Sources",
            description: "Don't immediately believe everything you see on the internet. Verify information from different and trusted sources.",
            points: [
              "Check information from different sources",
              "Use trusted sources",
              "Detect fake news",
              "Don't share without verification"
            ]
          },
          "5.4": {
            title: "Be Careful with Links",
            description: "Never click on links or files in messages from people you don't know.",
            points: [
              "Don't click links from people you don't know",
              "Don't download suspicious files",
              "Check links from trusted sources",
              "Be careful with email links"
            ],
            quiz: [
              {
                type: "multiple_choice",
                question: "What is the MOST IMPORTANT thing you should do before pressing the share button?",
                options: [
                  { text: "A) Share quickly.", correct: false },
                  { text: "B) Stop and think if the post is kind and safe.", correct: true },
                  { text: "C) Guess how many likes you'll get.", correct: false }
                ],
                explanation_en: "According to the T.H.I.N.K. rule, before sharing you should ask: Is it True? Helpful? Inspiring? Necessary? Kind? Speed and likes don't matter — safety and respect do!"
              }
            ]
          }
        },
        activity_type: "scenario_game"
      },
      {
        id: 6,
        title: "🎭 Scenario Quiz - Zeynep's Story",
        intro: "Zeynep (13 years old) secretly takes a very funny but slightly embarrassing photo of her classmate Can falling asleep in class. She wants to share the photo in the class WhatsApp group to make everyone laugh. Just as she is about to send the photo, a notification pops up from a new game app she downloaded to her phone: 'This app wants to access your contacts and photos. Allow?'",
        activity_title: "📝 Scenario Quiz: Zeynep's Decisions",
        activity_desc: "Read Zeynep's story and answer the questions.",
        content: {
          "6.1": {
            title: "Scenario Questions",
            description: "Analyze Zeynep's situation and make the right decisions.",
            quiz: [
              {
                type: "multiple_choice",
                question: "If Zeynep shares the photo, what type of digital footprint will this be?",
                options: [
                  { text: "A) Passive digital footprint", correct: false },
                  { text: "B) Active digital footprint (she is sharing it intentionally)", correct: true },
                  { text: "C) Neither", correct: false }
                ],
                explanation_en: "Zeynep is consciously choosing to share the photo. Because it's an intentional action, it creates an active digital footprint. Passive footprints are created without direct awareness."
              },
              {
                type: "multiple_choice",
                question: "Is it right for Zeynep to take and share Can's photo without his permission?",
                options: [
                  { text: "A) Yes, she can share it because it's funny", correct: false },
                  { text: "B) No, it violates Can's personal privacy and could offend him (it could be considered cyberbullying)", correct: true },
                  { text: "C) It doesn't matter", correct: false }
                ],
                explanation_en: "Taking and sharing someone's photo without permission violates their privacy rights and can be considered cyberbullying. Being funny doesn't justify it — empathy matters!"
              },
              {
                type: "multiple_choice",
                question: "What should Zeynep answer to the game app's request for 'access to contacts and photos'?",
                options: [
                  { text: "A) Yes, she should allow it immediately", correct: false },
                  { text: "B) No, she should deny it. A game does not need contacts.", correct: true },
                  { text: "C) She should ignore it and close it", correct: false }
                ],
                explanation_en: "There's no logical reason for a game to need access to contacts or photos. These unnecessary permission requests are a red flag that the app may be trying to collect personal data — always deny it!"
              },
              {
                type: "multiple_choice",
                question: "What is the MOST CORRECT chain of behavior for Zeynep in this scenario?",
                options: [
                  { text: "A) Share the photo and allow the game", correct: false },
                  { text: "B) She should delete Can's photo and not share it (respect for others). She should also deny the game's unnecessary access request (protecting her own privacy).", correct: true },
                  { text: "C) Just don't share the photo", correct: false }
                ],
                explanation_en: "Two separate ethical decisions are both correct here: respecting others' privacy (deleting Can's photo) and protecting her own privacy (denying the app's unnecessary request). Both are equally important!"
              }
            ]
          }
        },
        activity_type: "scenario_game"
      }
    ]
  }
};

export default MODULE2_EN;
