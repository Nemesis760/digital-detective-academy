// Module 3: Computer Networks & Digital Communication - English Language File

export const MODULE3_EN = {
  module_3: {
    title: "Module 3: Computer Networks & Digital Communication",
    subtitle: "🌐 Data Journey & Network Security",
    hero_image: "/images/module_networks/hero.png",
    sections: [
      {
        id: 1,
        title: "🌐 What is the Internet and How Do Data Packets Travel?",
        subtitle: "The Highways of the Digital World",
        intro: "The Internet is a huge network connecting billions of computers around the world. Just like highways between cities, data travels through this network. Every message, every photo, every video is broken into small packets and reaches its destination.",
        content: {
          "1.1": {
            title: "What is the Internet?",
            description: "The Internet is a huge network connecting billions of computers, phones, and other devices around the world. Just like roads in a city, data travels through this network. When you send a message to a friend, that message goes to a server thousands of kilometers away and then reaches your friend's phone.",
            image: "/images/module_networks/internet_overview.png",
            points: [
              "The Internet is a huge network connecting all devices in the world",
              "Billions of computers, phones, and tablets are connected to each other",
              "Data reaches anywhere in the world in seconds through this network",
              "Without the Internet, you cannot play online games, watch videos, or send messages"
            ],
            examples: [
              "When you watch a video, that video comes from a server thousands of kilometers away",
              "When you send a message to a friend, the message first goes to a server, then reaches your friend's phone",
              "When you visit a website, the information from that site comes from another part of the world"
            ]
          },
          "1.2": {
            title: "How Do Data Packets Travel?",
            description: "Large files (video, photo, message) are broken into small pieces. These pieces are called 'packets'. Each packet, like a letter, contains its destination address. Packets can take different routes but they all reach the same destination. At the destination, packets are reassembled and the original file is created.",
            image: "/images/module_networks/packet_travel.png",
            points: [
              "Large files are broken into small packets (like a puzzle)",
              "Each packet contains its destination address",
              "Packets can take different routes but all reach the same place",
              "At the destination, packets are reassembled",
              "This process happens in seconds"
            ],
            examples: [
              "When you send a photo, the photo is broken into 100 small packets",
              "Each packet can take a different route",
              "All packets reach your friend's phone and the photo is recreated"
            ]
          },
          "1.3": {
            title: "Why is the Internet Important?",
            description: "Thanks to the Internet, we can communicate instantly with people all over the world. We can quickly access information, play games, and watch videos. However, this huge network also requires us to be careful about security.",
            points: [
              "The Internet provides fast access to information",
              "It allows us to communicate with people all over the world",
              "It is essential for education, entertainment, and work",
              "However, we must be careful about security"
            ]
          }
        },
        activity_title: "🎮 Activity: Packet Delivery Game",
        activity_desc: "Try to deliver data packets to the correct destination. Route the packets and watch their journey across the network!",
        activity_type: "packet_delivery"
      },
      {
        id: 2,
        title: "🏠 Network Types: Home, School, and Public Wi-Fi",
        subtitle: "Different Networks, Different Security Levels",
        intro: "We use different types of networks to connect to the Internet. Each network type has its own characteristics and security levels. Understanding these helps us stay safe online.",
        content: {
          "2.1": {
            title: "Home Network",
            description: "A home network connects all devices in your home (computer, phone, tablet, game console) to each other and to the Internet. It is usually created with a modem and router. Home networks are usually the safest type of network because only you and your family can access them.",
            image: "/images/module_networks/home_network.png",
            points: [
              "Connects all devices in your home to each other",
              "Created with a modem and router",
              "Password protected, only you and your family can access",
              "One of the safest types of networks"
            ],
            examples: [
              "Your home Wi-Fi password is only known by your family",
              "Neighbors cannot connect to your network (even without a password)",
              "It is safer to share private information on a home network"
            ]
          },
          "2.2": {
            title: "School Network",
            description: "A school network connects all computers and devices in the school to each other. Teachers and students can connect to this network. School networks usually contain filters (blocking access to harmful sites) and can monitor user activities.",
            image: "/images/module_networks/school_network.png",
            points: [
              "Connects all devices in the school to each other",
              "Teachers and students can access",
              "Contains filters that block access to harmful sites",
              "User activities can be monitored"
            ],
            examples: [
              "Access to game sites may be blocked at school",
              "Teachers can see which sites you visit",
              "You should be careful on school networks"
            ]
          },
          "2.3": {
            title: "Public Wi-Fi",
            description: "Public Wi-Fi networks are found in places like cafes, airports, hotels and can be used by anyone. These networks are usually password-free or have public passwords. Public Wi-Fi networks are not safe because others are also connected to the same network and can see your data.",
            image: "/images/module_networks/public_wifi.png",
            points: [
              "Found in cafes, airports, hotels, etc.",
              "Usually password-free or have public passwords",
              "Anyone can connect, so it's not safe",
              "You should not share private information (passwords, bank information)"
            ],
            examples: [
              "❌ Accessing your bank account on public Wi-Fi at a cafe",
              "❌ Entering your passwords at an airport",
              "✅ Just browsing general websites (news, weather)",
              "✅ Doing important transactions on a home network"
            ]
          }
        },
        activity_title: "🎮 Activity: Network Types Matching",
        activity_desc: "Read the given situations and match them with the correct network type. Which network type is safer?",
        activity_type: "card_matching"
      },
      {
        id: 3,
        title: "📡 How Do Devices Communicate? (Modem, Router, Devices)",
        subtitle: "The Architecture of Digital Communication",
        intro: "Special devices are needed for devices to communicate with each other. Modem, router, and other network devices enable this communication. Each has a different task.",
        content: {
          "3.1": {
            title: "What is a Modem?",
            description: "A modem is the device that connects your home network to the Internet. Just like a door, the modem is the door that opens to the outside world (Internet). It receives the Internet signal from your Internet service provider (like Türk Telekom, Superonline) and distributes it to devices in your home.",
            image: "/images/module_networks/modem.png",
            points: [
              "Connects your home network to the Internet",
              "Receives signal from Internet service provider",
              "Like a door that opens to the outside world",
              "Usually comes combined with a router"
            ],
            examples: [
              "You cannot connect to the Internet without a modem",
              "Internet service provider installs the modem",
              "Modem is the door that opens to the Internet"
            ]
          },
          "3.2": {
            title: "What is a Router?",
            description: "A router is a device that connects devices in your home to each other and provides Internet access. It broadcasts Wi-Fi signals, so you can connect to the Internet wirelessly. The router manages traffic between devices in your home - it determines which device will receive which data.",
            image: "/images/module_networks/router.png",
            points: [
              "Connects devices in your home to each other",
              "Broadcasts Wi-Fi signals",
              "Manages traffic between devices",
              "Determines which device will receive which data"
            ],
            examples: [
              "Thanks to the router, your phone connects to the Internet via Wi-Fi",
              "The router allows your computer and phone to connect to the Internet at the same time",
              "Without a router, there is no wireless connection"
            ]
          },
          "3.3": {
            title: "How Do Devices Communicate?",
            description: "Devices (phone, computer, tablet) connect to the router. The router receives requests from these devices and forwards them to the Internet. It also routes responses from the Internet to the relevant device. Just like a postman, the router delivers the right packets to the right addresses.",
            image: "/images/module_networks/device_communication.png",
            points: [
              "Devices connect to the router",
              "Router forwards requests to the Internet",
              "Routes responses from the Internet to the relevant device",
              "Each device has its own address"
            ],
            examples: [
              "When your phone wants to watch a video, the router forwards this request to the Internet",
              "When the video arrives, the router routes it to your phone",
              "Your computer can also connect to the Internet at the same time, the router manages both"
            ]
          }
        },
        activity_title: "🎮 Activity: Network Devices Hotspot",
        activity_desc: "Click on network devices and learn the task of each. How do modem, router, and other devices work?",
        activity_type: "network_hotspot"
      },
      {
        id: 4,
        title: "🔌 Wired vs Wireless Communication",
        subtitle: "Two Different Paths, Same Destination",
        intro: "Devices can connect to the Internet in two ways: wired (Ethernet) or wireless (Wi-Fi). Both have advantages and disadvantages.",
        content: {
          "4.1": {
            title: "Wired Communication (Ethernet)",
            description: "Wired connection is when a device connects to the router with a cable. This type of connection is usually faster and more reliable. There is less interruption when playing games or watching videos. However, the device must be close to the router.",
            image: "/images/module_networks/wired_connection.png",
            points: [
              "Faster and more reliable connection",
              "Better performance for games and videos",
              "Less interruption",
              "However, device must be close to router"
            ],
            examples: [
              "✅ Game consoles usually use wired connection (faster)",
              "✅ Desktop computers can use wired connection",
              "❌ Phones and tablets cannot use wired connection (not practical)"
            ]
          },
          "4.2": {
            title: "Wireless Communication (Wi-Fi)",
            description: "Wireless connection is when a device connects to the Internet using the Wi-Fi signal broadcast from the router. This type of connection is more flexible because you can move the device wherever you want. However, it may be slightly slower than wired connection and depends on signal strength.",
            image: "/images/module_networks/wireless_connection.png",
            points: [
              "More flexible, you can move the device wherever you want",
              "No cable needed",
              "However, may be slightly slower than wired connection",
              "Depends on signal strength (being close to router is important)"
            ],
            examples: [
              "✅ Phones and tablets use Wi-Fi",
              "✅ Laptops usually use Wi-Fi",
              "⚠️ Signal weakens as you move away from router"
            ]
          },
          "4.3": {
            title: "Which Should I Use?",
            description: "Both connection types have their own usage areas. If you're playing games or want fast Internet, wired connection is better. However, if you want flexibility, you can use Wi-Fi.",
            points: [
              "For games and fast Internet: Wired connection",
              "For flexibility and movement: Wi-Fi",
              "Both are safe (on home network)",
              "Be careful on public Wi-Fi"
            ],
            examples: [
              "Game console → Wired connection",
              "Phone → Wi-Fi",
              "Desktop computer → Wired connection (if possible)",
              "Laptop → Wi-Fi (for flexibility)"
            ]
          }
        },
        activity_title: "🎮 Activity: True/False Quiz",
        activity_desc: "Read statements about wired and wireless communication and determine if they are true or false.",
        activity_type: "truth_or_troll"
      },
      {
        id: 5,
        title: "🛡️ Why is Network Security Important?",
        subtitle: "Protecting Yourself in the Digital World",
        intro: "Network security is very important for protecting ourselves in the digital world. Connecting to insecure networks or neglecting security measures can lead to theft of our personal information.",
        content: {
          "5.1": {
            title: "Why is Network Security Important?",
            description: "Connecting to insecure networks can cause our personal information (passwords, bank information, private messages) to be seen by others. Malicious people can steal or misuse this information. That's why we should use secure networks and take security measures.",
            image: "/images/module_networks/network_security.png",
            points: [
              "Personal information can be stolen on insecure networks",
              "Your passwords and bank information can be seen",
              "Malicious people can misuse this information",
              "We should use secure networks and take security measures"
            ],
            examples: [
              "❌ Accessing bank account on public Wi-Fi",
              "❌ Connecting to password-free networks",
              "✅ Sharing private information on home network",
              "✅ Using a strong Wi-Fi password"
            ]
          },
          "5.2": {
            title: "Safe Network Usage Tips",
            description: "Some important tips for connecting to the Internet safely:",
            points: [
              "Use a strong Wi-Fi password on home network",
              "Don't share private information on public Wi-Fi",
              "Don't connect to networks you don't know",
              "Use antivirus software",
              "Avoid suspicious connections"
            ],
            examples: [
              "✅ Your Wi-Fi password should be at least 12 characters",
              "✅ On public Wi-Fi, only browse general sites",
              "❌ Don't connect to 'Free Wi-Fi' networks you don't know",
              "✅ Do important transactions on home network"
            ]
          },
          "5.3": {
            title: "Network Security Scenarios",
            description: "How should we behave in different situations?",
            points: [
              "On public Wi-Fi at a cafe: Only browse general sites, don't enter passwords",
              "On home network: Safe, you can share private information",
              "On school network: Be careful, your activities can be monitored",
              "Unknown networks: Never connect"
            ],
            quiz: [
              {
                type: "true_false",
                question: "It is safe to access my bank account on public Wi-Fi.",
                answer: false
              },
              {
                type: "true_false",
                question: "It is important to use a strong Wi-Fi password on home network.",
                answer: true
              },
              {
                type: "multiple_choice",
                question: "In which situation can you share private information?",
                options: [
                  { text: "A) On public Wi-Fi", correct: false },
                  { text: "B) On home network", correct: true },
                  { text: "C) On a network you don't know", correct: false },
                  { text: "D) On a password-free network", correct: false }
                ]
              },
              {
                type: "multiple_choice",
                question: "Why is network security important?",
                options: [
                  { text: "A) Internet becomes faster", correct: false },
                  { text: "B) Prevents theft of personal information", correct: true },
                  { text: "C) You can play more games", correct: false },
                  { text: "D) You can watch more videos", correct: false }
                ]
              }
            ]
          }
        },
        activity_title: "📝 Quiz: Network Security",
        activity_desc: "Answer questions about network security and test your knowledge.",
        activity_type: "interactive_quiz"
      }
    ],
    // Scenario-based assessment
    scenario_assessment: {
      title: "🎯 Scenario-Based Assessment",
      description: "Read the following scenario and make the right decisions.",
      scenarios: [
        {
          id: 1,
          situation: "Ali is sitting in a cafe and connected to public Wi-Fi. His friend sent him a video and Ali wants to watch it. He also needs to log into his school account to check his homework.",
          question: "What should Ali do?",
          options: [
            {
              text: "A) He can both watch the video and log into his school account, public Wi-Fi is safe.",
              correct: false,
              feedback: "You should not share private information (school account) on public Wi-Fi. Watching videos is a general activity so it may not be a problem, but operations requiring passwords are not safe."
            },
            {
              text: "B) He can only watch the video, he should wait to connect to home network to log into his school account.",
              correct: true,
              feedback: "Correct! General activities (watching videos) can be done on public Wi-Fi, but operations requiring private information (school account) should be done on home network."
            },
            {
              text: "C) He should not do anything, public Wi-Fi is not safe at all.",
              correct: false,
              feedback: "Public Wi-Fi can be used for general activities, but it is not safe for operations requiring private information."
            }
          ]
        },
        {
          id: 2,
          situation: "Ayşe doesn't have a Wi-Fi password at home. Her neighbors tell her there is a password-free network and Ayşe is thinking of connecting to this network.",
          question: "What should Ayşe do?",
          options: [
            {
              text: "A) She can connect to the password-free network, no problem.",
              correct: false,
              feedback: "Password-free networks are not safe. Others can connect to this network and see your data."
            },
            {
              text: "B) She should not connect to the password-free network, she should find a secure network or set up her own network.",
              correct: true,
              feedback: "Correct! Password-free networks are not safe. Ayşe should find a secure network or set up her own secure network."
            },
            {
              text: "C) It's okay if she only browses general sites.",
              correct: false,
              feedback: "Even on password-free networks, you should be careful when doing general activities. Use a secure network if possible."
            }
          ]
        }
      ]
    }
  }
};

export default MODULE3_EN;
