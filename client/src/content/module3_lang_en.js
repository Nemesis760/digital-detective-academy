export const MODULE3_EN = {
  module_3: {
    title: "Module 3: Computer Networks and Digital Communication",
    
    hero_image: "/images/module3/module3_hero_en.png",
    sections: [
      {
        id: 1,
        title: "What is a Network? Communication Timeline",
        subtitle: "Understanding networks from daily life",
        intro:
          "A network is a structure made of connected points. In computer networks, devices connect with cables or Wi-Fi to share information.",
        content: {
          "1.1": {
            title: "What is a Network?",
            description:
              "A computer network is a group of connected devices that share data.",
            image: "/images/module3/m3_network_definition_en.png",
            points: [
              "Network = connected devices",
              "Goal: data sharing and communication",
              "Wired or wireless",
              "A network can exist without the Internet (LAN)"
            ],
            examples: [
              "School lab computers connected to the same printer",
              "Phone, tablet, and laptop connected to the same Wi-Fi at home"
            ],
            video_links: [
              {
                title: "Computer networks for kids",
                url: "https://www.youtube.com/watch?v=FD3BJUbvlF0",
                thumbnail: "/images/module3/video_en.png"
              }
            ]
          },
          "1.2": {
            title: "How Communication Evolved",
            description:
              "Communication became faster with mail, telegraph, phone, radio/TV, satellites, and the Internet.",
            image: "/images/module3/m3_comm_timeline_en.png",
            points: [
              "Tools evolved and got faster",
              "The Internet is very fast and widespread",
              "More speed means more security needs"
            ],
            quiz: [
              {
                type: "true_false",
                question_en: "School computers connected to the same printer is an example of a network.",
                answer: true,
                explanation_en: "When multiple devices share data or resources (like a printer), they form a network. A school lab connected to one printer is a local area network (LAN)."
              },
              {
                type: "true_false",
                question_en: "A single computer with no connection to any other device is a network.",
                answer: false,
                explanation_en: "A network requires at least two devices connected to each other. A standalone computer with no connections to other devices is not a network."
              },
              {
                type: "multiple_choice",
                question_en: "Which of the following is an example of a computer network?",
                options: [
                  { text_en: "A) Phone, tablet, and laptop connected to the same home Wi-Fi", correct: true },
                  { text_en: "B) A single computer running offline", correct: false },
                  { text_en: "C) Reading a book", correct: false },
                  { text_en: "D) Using a standalone calculator", correct: false }
                ],
                explanation_en: "Phone, tablet, and laptop connected to the same Wi-Fi share data and internet access with each other — that is a home network (LAN)."
              }
            ]
          }
        },
        activity_title: "Mini Activity: Pick Network Examples",
        activity_desc: "Which ones are examples of a computer network?",
        activity_type: "interactive_quiz",
      },
      {
        id: 2,
        title: "What is the Internet? How Do Packets Travel?",
        subtitle: "The highways of the digital world",
        intro:
          "The Internet is a huge network connecting billions of devices.",
        content: {
          "2.1": {
            title: "What is the Internet?",
            description:
              "When you open a website, information comes from a server in another city or country.",
            image: "/images/module3/m3_internet_overview_en.png",
            points: [
              "Internet = network of networks",
              "Servers store and send data",
              "Data moves in seconds"
            ],
            video_links: [
              {
                title: "What is the Internet? (for kids)",
                url: "https://www.youtube.com/watch?v=hjjLnUMcJfs",
                thumbnail: "/images/module3/video_en.png"
              }
            ]
          },
          "2.2": {
            title: "How Packets Travel",
            description:
              "Large files are split into small parts (packets).",
            image: "/images/module3/m3_packets_travel_en.png",
            points: [
              "A file is split into packets",
              "Each packet carries destination info",
              "Packets are reassembled at the destination"
            ]
          }
        }
      },
      {
        id: 3,
        title: "Browser and Search Engine",
        subtitle: "Opening a site vs searching the web",
        intro:
          "A web browser opens web pages. A search engine helps you find information on the Internet.",
        content: {
          "3.1": {
            title: "What is a Web Browser?",
            description:
              "A browser displays web pages.",
            image: "/images/module3/m3_browser_en.jpg",
            points: [
              "Browser opens pages",
              "The address bar is in the browser",
              "Tabs let you open multiple pages"
            ],
            video_links: [
              {
                title: "Browser vs Search Engine",
                url: "https://www.youtube.com/watch?v=Rn9XcSTQl8A",
                thumbnail: "/images/module3/video_en.png"
              }
            ]
          },
          "3.2": {
            title: "What is a Search Engine?",
            description:
              "A search engine searches web pages.",
            image: "/images/module3/m3_search_engine_en.jpg",
            points: [
              "Search engines help you find information",
              "Choosing good keywords is important",
              "Not everything you see online is true"
            ]
          }
        },
        activity_title: "Activity: Browser or Search Engine?",
        activity_desc: "Match the examples to the correct group.",
        activity_type: "card_matching",
        activity_key: "browser_search",
      },
      {
        id: 4,
        title: "Internet Address (URL) and Extensions",
        subtitle: "What does www.meb.gov.tr mean?",
        intro:
          "You use an address (URL) to enter a website.",
        content: {
          "4.1": {
            title: "URL Parts",
            description:
              "Example: www.meb.gov.tr -> www (service), meb (domain), gov (type), tr (country).",
            image: "/images/module3/m3_url_parts_en.png",
            points: [
              "Domain name: the site name",
              "Extension: type (gov, com, org, edu)",
              "Country code: tr"
            ],
            video_links: [
              {
                title: "What is a URL? Domain and extension",
                url: "https://www.youtube.com/watch?v=ojuCsBIKyDY",
                thumbnail: "/images/module3/video_en.png"
              }
            ]
          },
          "4.2": {
            title: "What Do Extensions Tell Us?",
            description:
              "Extensions can describe the type of the site.",
            image: "/images/module3/m3_domain_extensions_en.png",
            points: [
              ".edu.tr -> education",
              ".gov.tr -> government",
              ".com.tr -> commercial",
              ".org.tr -> organization"
            ]
          }
        },
        activity_title: "Activity: Break Down a URL",
        activity_desc: "Split a website address into its parts.",
        activity_type: "interactive_quiz",
        activity_key: "url_parts",
      },
      {
        id: 5,
        title: "Network Types: Home, School, and Public Wi-Fi",
        subtitle: "Different networks, different safety",
        intro:
          "Home, school, and public networks have different security levels.",
        content: {
          "5.1": {
            title: "Home Network",
            description: "Home networks are usually password protected.",
            image: "/images/module3/m3_home_network_en.png",
            points: ["Use a password", "Safer for private actions"]
          },
          "5.2": {
            title: "School Network",
            description: "School networks can have filters and rules.",
            image: "/images/module3/m3_school_network_en.png",
            points: ["Follow the rules", "Some sites may be blocked"]
          },
          "5.3": {
            title: "Public Wi-Fi",
            description: "Public Wi-Fi is riskier.",
            image: "/images/module3/m3_public_wifi_en.png",
            points: ["Anyone can connect", "Avoid entering passwords"],
            video_links: [
              {
                title: "Wi-Fi safety (for kids)",
                url: "https://www.youtube.com/watch?v=GgdK2rdJTrE",
                thumbnail: "/images/module3/video_en.png"
              }
            ]
          }
        },
        activity_title: "Activity: Match Network Types",
        activity_desc: "Match situations with the correct network type.",
        activity_type: "card_matching",
        activity_key: "network_types",
      },
      {
        id: 6,
        title: "Data - Client - Server",
        subtitle: "Who sends information to whom?",
        intro:
          "The client sends a request and the server replies. Data is the information that moves.",
        content: {
          "6.1": {
            title: "Data",
            description: "Files, messages, and videos are data.",
            image: "/images/module3/m3_data_en.png",
            points: ["Data moves", "It can be split into packets"]
          },
          "6.2": {
            title: "Client",
            description: "Devices that send requests are called clients.",
            image: "/images/module3/m3_client_en.png",
            points: ["Makes requests via a browser", "Receives responses from the server"],
            video_links: [
              {
                title: "What is client-server?",
                url: "https://www.youtube.com/watch?v=TSDRE2J8Q70",
                thumbnail: "/images/module3/video_en.png"
              }
            ]
          },
          "6.3": {
            title: "Server",
            description: "A server is a powerful computer that provides services.",
            image: "/images/module3/m3_server_en.png",
            points: ["Stores data", "Responds to many clients"]
          }
        },
        activity_title: "Activity: Client or Server?",
        activity_desc: "Classify the examples.",
        activity_type: "card_matching",
        activity_key: "client_server",
      },
      {
        id: 7,
        title: "Network Devices: Modem, Router, Switch, Ethernet",
        subtitle: "Parts of a connection",
        intro: "A network uses devices like a modem, router, switch, and ethernet.",
        content: {
          "7.1": {
            title: "Modem",
            description: "A modem brings the internet signal into the network.",
            image: "/images/module3/matching/modem.png",
            points: ["Receives the internet signal", "Transfers it to the network"]
          },
          "7.2": {
            title: "Router",
            description: "A router connects devices and manages traffic.",
            image: "/images/module3/matching/router.png",
            points: ["Broadcasts Wi-Fi", "Routes data packets"]
          },
          "7.3": {
            title: "Switch",
            description: "A switch connects many devices in the same wired network.",
            image: "/images/module3/matching/switch.png",
            points: ["Expands wired connections", "Used in school labs"]
          },
          "7.4": {
            title: "Ethernet Card and Cable",
            description: "Ethernet cables carry data.",
            image: "/images/module3/matching/ethernet_cable.png",
            points: ["Wired connection", "More stable in many cases"]
          }
        },

        activity_title: "Activity: Place the Network Devices",
        activity_desc: "Read the hint, select a device, then click the correct slot in the network diagram!",
        activity_type: "network_device_placement",
      },
      {
        id: 8,
        title: "Match Network Devices",
        subtitle: "Connect pictures to their names",
        intro:
          "Match each device picture with the correct name card.",
        content: {
          "8.1": {
            title: "Network Devices",
            description:
              "Being able to tell devices and connection technologies apart makes network use easier.",
            image: "/images/module3/matching/network_arkaplan.png",
            points: [
              "Each device has a different job",
              "Correct names mean correct use"
            ]
          }
        },
        activity_title: "Activity: Network Device Matching",
        activity_desc: "Match the pictures with the correct name cards.",
        activity_type: "network_device_matching",
        activity_key: "network_device_matching",
      },
      {
        id: 9,
        title: "Wired vs Wireless Connection",
        subtitle: "Speed or freedom?",
        intro: "Wired connections are usually fast and stable. Wireless connections are more flexible.",
        content: {
          "9.1": {
            title: "Wired (Ethernet)",
            description: "You connect with a cable.",
            image: "/images/module3/m3_wired_vs_wireless_en_tr.png",
            points: ["Faster", "Less interruption"]
          },
          "9.2": {
            title: "Wireless (Wi-Fi)",
            description: "You connect without a cable.",
            image: "/images/module3/m3_wireless_en_tr.png",
            points: ["Easy movement", "Signal can be affected"]
          },
          "9.3": {
            title: "Which One When?",
            description: "For games, wired is better; for daily mobile use, Wi-Fi is better.",
            image: "/images/module3/m3_wired_vs_wireless_en_tr.png",
            points: ["Games -> wired", "Mobile -> Wi-Fi"],
            quiz: [
              {
                type: "true_false",
                question: "Wi-Fi signal gets weaker as you move away from the router.",
                answer: true
              },
              {
                type: "true_false",
                question: "A wired connection is always less secure.",
                answer: false
              }
            ]
          }
        },
        activity_title: "Quiz: True or False?",
        activity_desc: "Evaluate statements about wired and wireless connections — true or false?",
        activity_type: "interactive_quiz",
        activity_key: "wired_wireless",
      },
      {
        id: 10,
        title: "Hangman",
        intro: "Let's review network security and internet concepts in a fun way. Read the clue, pick the right letters, and find the word!",
        activity_title: "Activity: Hangman",
        activity_desc: "Read the clue, pick the right letters, and find the word!",
        activity_type: "hangman",
        activity_key: "network_security_hangman",
      },
      {
        id: 11,
        title: "Network Security and Unit Review",
        subtitle: "Stay safe, choose right",
        intro: "Unsafe networks can put personal information at risk.",
        content: {
          "11.1": {
            title: "Why Is Network Security Important?",
            description: "Entering passwords on public Wi-Fi can be risky.",
            image: "/images/module3/m3_network_security_en_tr.png",
            points: ["Protect passwords and private info", "Do important tasks on a home network"]
          },
          "11.2": {
            title: "Unit Review Quiz",
            description: "A short review test.",
            image: "/images/module3/m3_network_security_en_tr.png",
            quiz: [
              {
                type: "multiple_choice",
                question: "Which of the following is a web browser?",
                options: [
                  { text: "A) Chrome", correct: true },
                  { text: "B) Google", correct: false },
                  { text: "C) Yahoo", correct: false },
                  { text: "D) Switch", correct: false }
                ]
              },
              {
                type: "true_false",
                question: "A network connection does not always require the Internet.",
                answer: true
              }
            ]
          }
        },
        activity_title: "Quiz: Security and Review",
        activity_desc: "Try to answer most questions correctly.",
        activity_type: "interactive_quiz",
        activity_key: "network_security",
      }
    ],
    scenario_assessment: {
      activity_key: "lost_packet",
      title: "Scenario-Based Assessment",
      description: "Read the scenario and choose the correct decision.",
      scenarios: [
        {
          id: 1,
          situation:
            "Ali connects to public Wi-Fi at a cafe. A friend sends a video. Ali wants to watch it and also log into his school account.",
          question: "What should Ali do?",
          options: [
            {
              text: "A) Watch the video and log into the school account; it is safe.",
              correct: false,
              feedback:
                "Password-required actions are risky on public Wi-Fi. Watching a video is OK, but avoid logging in."
            },
            {
              text: "B) Watch the video, but save the school login for home network.",
              correct: true,
              feedback:
                "Correct. Do password-required actions on a secure network."
            },
            {
              text: "C) Do nothing at all; Wi-Fi should always be forbidden.",
              correct: false,
              feedback:
                "General browsing is okay; the risky part is passwords and private data."
            }
          ]
        }
      ]
    }
  }
};

export default MODULE3_EN;
