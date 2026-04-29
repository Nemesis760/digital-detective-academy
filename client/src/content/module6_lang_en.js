// Module 6: Digital Detective - English Language File

export const MODULE6_EN = {
  module_6: {
    title: "Module 6: Digital Detective",
    subtitle: "🔍 Crime Scene Investigation: NIST Detect & Respond",
    sections: [
      {
        id: 1,
        title: "🚨 Malware Symptoms",
        intro: "Learn to recognize the signals your computer gives when it's sick. Slowdowns, pop-ups, overheating, and more.",
        activity_title: "🧩 Activity: Identify Threat Signals",
        activity_desc: "Answer the questions below to test your knowledge about malware!",
        video_links: [
          {
            url: "https://www.youtube.com/watch?v=eNBx9kbgdDY",
            title: "Let's Learn About Malware! — For Kids"
          }
        ],
        content: {
          "1.1": {
            title: "What is Malware?",
            description: "Malware (malicious software) is software designed to harm your computer, steal information, or disrupt operations. It's like a digital virus!",
            image: "/images/module6/threats.jpg",
            points: [
              "Viruses: Spread from file to file, damaging your system",
              "Trojans: Disguise themselves as safe programs but are dangerous",
              "Spyware: Secretly watches what you do online",
              "Ransomware: Locks your files and demands money to unlock them",
              "Adware: Shows unwanted advertisements"
            ],
            examples: [
              "A file you downloaded starts acting strangely",
              "Your computer suddenly becomes very slow",
              "Pop-up windows appear even when you're not browsing"
            ]
          },
          "1.2": {
            title: "Warning Signs of Malware",
            description: "Your computer gives you signals when something is wrong. Learn to recognize them!",
            image: "/images/module6/m6_malware_signs_en.png",
            points: [
              "Computer runs much slower than usual",
              "Pop-up windows appear frequently",
              "Programs crash or freeze",
              "Browser homepage changes without your permission",
              "Files disappear or become corrupted",
              "Computer overheats or fan runs constantly",
              "Strange error messages appear"
            ],
            examples: [
              "✅ Normal: Computer starts in 30 seconds",
              "❌ Warning: Computer takes 5 minutes to start",
              "✅ Normal: Browser opens to your homepage",
              "❌ Warning: Browser opens to unknown website"
            ]
          },
          "1.3": {
            title: "How to Protect Against Malware",
            description: "Prevention is better than cure! Here's how to keep malware away:",
            image: "/images/module6/m6_protection_en.png",
            points: [
              "Install and update antivirus software regularly",
              "Don't click on suspicious links or pop-ups",
              "Don't download files from unknown sources",
              "Keep your operating system updated",
              "Use strong passwords",
              "Back up your important files regularly"
            ],
            quiz: [
              {
                type: "true_false",
                question: "Malware can only infect computers, not phones.",
                answer: false,
                explanation_en: "Wrong! Malware can infect phones, tablets, smartwatches, and any internet-connected device."
              },
              {
                type: "true_false",
                question: "If your computer runs much slower than usual, it could be a sign of malware.",
                answer: true,
                explanation_en: "Correct! Slowdowns are one of the most common signs that malware is consuming your system's resources."
              },
              {
                type: "true_false",
                question: "Once antivirus software is installed, you never need to update it.",
                answer: false,
                explanation_en: "Wrong! Antivirus software must be updated regularly to recognize new threats. Outdated antivirus leaves you vulnerable."
              },
              {
                type: "true_false",
                question: "A program that looks trustworthy can still be a Trojan horse.",
                answer: true,
                explanation_en: "Correct! Trojans disguise themselves as useful software to sneak into your computer."
              },
              {
                type: "true_false",
                question: "Pop-up windows are only for advertising and are never dangerous.",
                answer: false,
                explanation_en: "Wrong! Fake pop-ups can trick you into downloading malware or entering personal information."
              },
              {
                type: "multiple_choice",
                question: "A pop-up says 'You've won a prize!' What should you do?",
                options: ["A) Click to claim your prize", "B) Close it and tell an adult", "C) Enter your information", "D) Share it with friends"],
                answer: "B",
                explanation_en: "These pop-ups are usually phishing attempts. Closing them and telling an adult is the safest choice."
              },
              {
                type: "multiple_choice",
                question: "What does ransomware do?",
                options: ["A) Speeds up your internet", "B) Locks files and demands money", "C) Acts as antivirus", "D) Makes your computer faster"],
                answer: "B",
                explanation_en: "Ransomware locks your files and demands payment (usually cryptocurrency) to restore access."
              },
              {
                type: "true_false",
                question: "Downloading files from unknown sources can put your computer at risk.",
                answer: true,
                explanation_en: "Correct! Files from untrusted sites may contain malware. Always use official, trusted sources."
              }
            ]
          }
        },
        activity_type: "interactive_quiz"
      },
      {
        id: 2,
        title: "🎣 Phishing Detection",
        intro: "Learn how to detect fake emails, messages, and websites to avoid falling for phishing scams.",
        activity_title: "🎯 Scenario Game",
        activity_desc: "Find the dangerous spot in cyber threat scenarios and choose the correct action! Complete all missions.",
        video_links: [
          {
            url: "https://www.youtube.com/watch?v=XBkzBrXlle0",
            title: "Phishing Explained in 6 Minutes — English"
          }
        ],
        content: {
          "2.1": {
            title: "What is Phishing?",
            description: "Phishing is when scammers try to trick you into giving them personal information like passwords or credit card numbers by pretending to be a trusted company.",
            image: "/images/module6/phishing.jpg",
            points: [
              "Fake emails that look like they're from real companies",
              "Messages asking you to click on suspicious links",
              "Websites that look real but are actually fake",
              "Urgent messages trying to make you act quickly",
              "Requests for personal information"
            ],
            examples: [
              "Email claiming your account will be closed unless you verify now",
              "Message saying you won a prize but need to provide information",
              "Link that looks like your bank's website but has a different URL"
            ]
          },
          "2.2": {
            title: "How to Spot Phishing",
            description: "Phishing attempts have telltale signs. Learn to recognize them:",
            image: "/images/module6/m6_phishing_signs_en.png",
            points: [
              "Check the sender's email address carefully",
              "Look for spelling and grammar mistakes",
              "Be suspicious of urgent or threatening messages",
              "Hover over links to see the real URL before clicking",
              "Real companies won't ask for passwords via email",
              "Check if the website URL matches the real company's website"
            ],
            examples: [
              "❌ Suspicious: 'Your acount will be closed!' (spelling error)",
              "✅ Safe: 'Your account will be closed.' (proper spelling)",
              "❌ Suspicious: 'Click here immediately or lose access!'",
              "✅ Safe: 'Please log in to your account to verify.'"
            ]
          },
          "2.3": {
            title: "What to Do If You Suspect Phishing",
            description: "If you think you've received a phishing message, here's what to do:",
            image: "/images/module6/m6_phishing_response_en.png",
            points: [
              "Don't click on any links or download attachments",
              "Don't reply to the message",
              "Report it to the real company (if it's pretending to be one)",
              "Delete the message",
              "If you already clicked, change your passwords immediately",
              "Tell a trusted adult"
            ]
          }
        },
        activity_type: "hotspot_quiz"
      },
      {
        id: 3,
        title: "🛠️ Cyber Crisis Response Plan",
        intro: "The first steps taken during an attack or crisis can save the situation. Disconnect internet, tell parent/teacher, scan your device.",
        activity_title: "🎮 Activity: Crisis Simulation",
        activity_desc: "Apply the correct response steps in a cyber attack scenario. Find the clues, disconnect the internet, and clean the virus to save the system!",
        video_links: [
          {
            url: "https://www.youtube.com/watch?v=9HOpanT0GRs",
            title: "Harvard CS50 — Intro to Cybersecurity (English)"
          }
        ],
        content: {
          "3.1": {
            title: "What is a Cyber Crisis?",
            description: "A cyber crisis is when your computer or accounts are under attack. It could be malware, hacking, or identity theft.",
            image: "/images/module6/crisis_response_hero.jpg",
            points: [
              "Your computer is infected with malware",
              "Someone has hacked into your account",
              "Your personal information has been stolen",
              "Your files are locked by ransomware",
              "You've fallen for a phishing scam"
            ],
            examples: [
              "You can't access your files",
              "Strange messages appear on your screen",
              "Your account shows activity you didn't do"
            ]
          },
          "3.2": {
            title: "The STOP Response Plan",
            description: "When facing a cyber crisis, remember STOP:",
            image: "/images/module6/m6_stop_plan_en.png",
            points: [
              "S - Stop: Stop what you're doing immediately",
              "T - Tell: Tell a trusted adult (parent, teacher) right away",
              "O - Offline: Disconnect from the internet if possible",
              "P - Protect: Protect your other accounts by changing passwords"
            ],
            examples: [
              "If you see a suspicious message, stop and don't click anything",
              "Tell your parent or teacher immediately",
              "Unplug your internet cable or turn off Wi-Fi",
              "Change passwords for all your important accounts"
            ]
          },
          "3.3": {
            title: "Prevention Checklist",
            description: "The best defense is prevention. Follow this checklist:",
            image: "/images/module6/m6_checklist_en.png",
            points: [
              "✅ Keep antivirus software updated",
              "✅ Don't share passwords with anyone",
              "✅ Think before you click",
              "✅ Verify before you trust",
              "✅ Back up important files regularly",
              "✅ Keep software updated",
              "✅ Use strong, unique passwords"
            ]
          }
        },
        activity_type: "crisis_simulation"
      }
    ]
  }
};

export default MODULE6_EN;
