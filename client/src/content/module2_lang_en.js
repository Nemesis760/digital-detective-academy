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
        activity_title: "🎮 Activity: Packet Delivery",
        activity_desc: "Play this interactive game to learn how digital footprints are created.",
        content: {
          "1.1": {
            title: "What Is a Digital Footprint?",
            description: "A digital footprint is the trail of data we leave behind when we use the internet. Posts, comments, likes, search history, and the videos we watch all create this footprint. Just like footprints in snow, online actions may not always be visible immediately, but they can last a long time.",
            image: "/images/module2/digital_footprint_concept.png",
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
                answer: false
              },
              {
                type: "true_false",
                question: "Every action on the internet can leave a trace.",
                answer: true
              },
              {
                type: "true_false",
                question: "When you delete a post, it completely disappears from the internet.",
                answer: false
              },
              {
                type: "multiple_choice",
                question: "Which is an example of a digital footprint?",
                options: [
                  { text: "A) Writing notes in a notebook", correct: false },
                  { text: "B) Watching a video on the internet", correct: true },
                  { text: "C) Reading a book", correct: false },
                  { text: "D) Playing sports", correct: false }
                ]
              }
            ]
          },
          "1.2": {
            title: "Permanence of Digital Footprints",
            description: "The internet never forgets. These traces can be seen, saved, and copied by others. Even if content is deleted, someone may have taken a screenshot. That is why 'thinking before posting' is essential in the digital world.",
            image: "/images/module2/footprint_permanence.png",
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
        activity_type: "packet_delivery"
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
            image: "/images/module2/active_footprint.png",
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
                answer: true
              }
            ]
          },
          "2.2": {
            title: "Passive Digital Footprint",
            description: "A passive digital footprint is created in the background without our direct awareness. Websites tracking us as we browse (cookies), recording our location information, or our IP address fall into this category. Ads appearing based on our recent searches are a result of passive footprints.",
            image: "/images/module2/passive_footprint.png",
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
                answer: false
              },
              {
                type: "true_false",
                question: "A map app that uses my location leaves a passive footprint.",
                answer: true
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
            image: "/images/module2/personal_info.png",
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
                ]
              }
            ]
          },
          "3.2": {
            title: "Privacy Settings",
            description: "The apps we use offer 'privacy settings.' These settings are like locking the door to our virtual house. Keeping our profile open only to 'Friends' we know, instead of 'Public,' prevents strangers from accessing our information.",
            image: "/images/module2/privacy_settings.png",
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
                answer: false
              },
              {
                type: "true_false",
                question: "Privacy settings allow us to control who can see our information.",
                answer: true
              },
              {
                type: "true_false",
                question: "Making my profile 'Public' is the safest method.",
                answer: false
              },
              {
                type: "true_false",
                question: "I should not use a photo showing my school uniform logo as a profile picture.",
                answer: true
              },
              {
                type: "multiple_choice",
                question: "What should you do if a game app unnecessarily wants access to your 'Contacts'?",
                options: [
                  { text: "A) Allow it", correct: false },
                  { text: "B) Deny it", correct: true },
                  { text: "C) Ask your friends", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "What is the safest information to share on the internet?",
                options: [
                  { text: "A) Your home address", correct: false },
                  { text: "B) Your favorite team's flag", correct: true },
                  { text: "C) Your school's full name", correct: false }
                ]
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
            image: "/images/module2/digital_reputation.png",
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
            image: "/images/module2/think_rule.png",
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
                ]
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
                ]
              },
              {
                type: "multiple_choice",
                question: "Is it right for Zeynep to take and share Can's photo without his permission?",
                options: [
                  { text: "A) Yes, she can share it because it's funny", correct: false },
                  { text: "B) No, it violates Can's personal privacy and could offend him (it could be considered cyberbullying)", correct: true },
                  { text: "C) It doesn't matter", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "What should Zeynep answer to the game app's request for 'access to contacts and photos'?",
                options: [
                  { text: "A) Yes, she should allow it immediately", correct: false },
                  { text: "B) No, she should deny it. A game does not need contacts.", correct: true },
                  { text: "C) She should ignore it and close it", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "What is the MOST CORRECT chain of behavior for Zeynep in this scenario?",
                options: [
                  { text: "A) Share the photo and allow the game", correct: false },
                  { text: "B) She should delete Can's photo and not share it (respect for others). She should also deny the game's unnecessary access request (protecting her own privacy).", correct: true },
                  { text: "C) Just don't share the photo", correct: false }
                ]
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
