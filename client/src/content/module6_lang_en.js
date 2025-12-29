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
        activity_title: "🎮 Activity: Identify Threat Signals",
        activity_desc: "Identify which threat signals are present in the given scenarios.",
        content: {
          "1.1": {
            title: "What is Malware?",
            description: "Malware (malicious software) is software designed to harm your computer, steal information, or disrupt operations. It's like a digital virus!",
            image: "/images/module5/threats.jpg",
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
            points: [
              "Install and update antivirus software regularly",
              "Don't click on suspicious links or pop-ups",
              "Don't download files from unknown sources",
              "Keep your operating system updated",
              "Use strong passwords",
              "Back up your important files regularly"
            ]
          }
        },
        activity_type: "flappy_bird"
      },
      {
        id: 2,
        title: "🎣 Phishing Detection",
        intro: "Learn how to detect fake emails, messages, and websites to avoid falling for phishing scams.",
        activity_title: "📝 Quiz: Fake Email Detective",
        activity_desc: "Compare real and fake email examples to distinguish them.",
        content: {
          "2.1": {
            title: "What is Phishing?",
            description: "Phishing is when scammers try to trick you into giving them personal information like passwords or credit card numbers by pretending to be a trusted company.",
            image: "/images/module5/phishing.jpg",
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
        intro: "The first steps taken during an attack or crisis can save lives. (Disconnect internet, tell parent/teacher, scan).",
        activity_title: "🎮 Activity: Crisis Simulation",
        activity_desc: "Order the correct response steps in a cyber attack scenario.",
        content: {
          "3.1": {
            title: "What is a Cyber Crisis?",
            description: "A cyber crisis is when your computer or accounts are under attack. It could be malware, hacking, or identity theft.",
            image: "/images/module5/crisis_response_hero.jpg",
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

