// Device Communication Hotspot Activity - Module 3
// Activity for Section 3: How Devices Communicate (Modem, Router, Devices)

export const DEVICE_COMMUNICATION_HOTSPOT = {
  id: "device_communication_hotspot",
  activity_type: "network_hotspot",

  title_tr: "Ağ Cihazları Hotspot",
  title_en: "Network Devices Hotspot",

  description_tr:
    "Ağ cihazlarının üzerine tıkla ve her birinin görevini öğren. Modem, router ve diğer cihazlar nasıl çalışır?",
  description_en:
    "Click on the network devices and learn about each of their functions. How do modems, routers, and other devices work?",

  instructions_tr: [
    "Cihazların üzerine tıkla.",
    "Her cihazın görevini öğren.",
    "Cihazların nasıl birlikte çalıştığını anla."
  ],

  instructions_en: [
    "Click on the devices.",
    "Learn about each device's function.",
    "Understand how devices work together."
  ],

  devices: [
    {
      id: "modem",
      label_tr: "Modem",
      label_en: "Modem",
      position: { x: 20, y: 30 },
      icon: "📡",
      description_tr: "Modem, evindeki ağı internete bağlayan cihazdır. Tıpkı bir kapı gibi, modem dış dünyaya (internete) açılan kapıdır. İnternet sağlayıcısından gelen sinyali alır ve evindeki cihazlara dağıtır.",
      description_en: "A modem is the device that connects your home network to the Internet. Just like a door, the modem is the door that opens to the outside world (Internet). It receives the signal from your Internet service provider and distributes it to devices in your home.",
      points_tr: [
        "Ev ağını internete bağlar",
        "İnternet sağlayıcısından sinyal alır",
        "Dış dünyaya açılan kapı gibidir"
      ],
      points_en: [
        "Connects your home network to the Internet",
        "Receives signal from Internet service provider",
        "Like a door that opens to the outside world"
      ]
    },
    {
      id: "router",
      label_tr: "Router",
      label_en: "Router",
      position: { x: 50, y: 30 },
      icon: "📶",
      description_tr: "Router, evindeki cihazları birbirine bağlayan ve internete erişim sağlayan cihazdır. Wi-Fi sinyali yayar, böylece kablosuz olarak internete bağlanabilirsin. Router, evindeki cihazlar arasında trafiği yönetir.",
      description_en: "A router is a device that connects your devices at home to each other and provides Internet access. It broadcasts a Wi-Fi signal, allowing you to connect to the Internet wirelessly. The router manages traffic between your devices at home.",
      points_tr: [
        "Evindeki cihazları birbirine bağlar",
        "Wi-Fi sinyali yayar",
        "Cihazlar arası trafiği yönetir"
      ],
      points_en: [
        "Connects your devices at home to each other",
        "Broadcasts Wi-Fi signal",
        "Manages traffic between devices"
      ]
    },
    {
      id: "phone",
      label_tr: "Telefon",
      label_en: "Phone",
      position: { x: 20, y: 60 },
      icon: "📱",
      description_tr: "Telefon, router'a Wi-Fi ile bağlanır. Router, telefonun isteklerini internete iletir ve internetten gelen cevapları telefonuna yönlendirir.",
      description_en: "A phone connects to the router via Wi-Fi. The router transmits the phone's requests to the Internet and directs responses from the Internet to the phone.",
      points_tr: [
        "Router'a Wi-Fi ile bağlanır",
        "İstekleri router üzerinden internete gönderir",
        "Cevapları router üzerinden alır"
      ],
      points_en: [
        "Connects to router via Wi-Fi",
        "Sends requests to Internet through router",
        "Receives responses through router"
      ]
    },
    {
      id: "computer",
      label_tr: "Bilgisayar",
      label_en: "Computer",
      position: { x: 50, y: 60 },
      icon: "💻",
      description_tr: "Bilgisayar, router'a kablolu veya kablosuz olarak bağlanabilir. Router, bilgisayarın isteklerini internete iletir ve internetten gelen cevapları bilgisayara yönlendirir.",
      description_en: "A computer can connect to the router via cable or wirelessly. The router transmits the computer's requests to the Internet and directs responses from the Internet to the computer.",
      points_tr: [
        "Router'a kablolu veya kablosuz bağlanır",
        "İstekleri router üzerinden internete gönderir",
        "Cevapları router üzerinden alır"
      ],
      points_en: [
        "Connects to router via cable or wirelessly",
        "Sends requests to Internet through router",
        "Receives responses through router"
      ]
    },
    {
      id: "tablet",
      label_tr: "Tablet",
      label_en: "Tablet",
      position: { x: 80, y: 60 },
      icon: "📱",
      description_tr: "Tablet, router'a Wi-Fi ile bağlanır. Router, tabletin isteklerini internete iletir ve internetten gelen cevapları tablete yönlendirir.",
      description_en: "A tablet connects to the router via Wi-Fi. The router transmits the tablet's requests to the Internet and directs responses from the Internet to the tablet.",
      points_tr: [
        "Router'a Wi-Fi ile bağlanır",
        "İstekleri router üzerinden internete gönderir",
        "Cevapları router üzerinden alır"
      ],
      points_en: [
        "Connects to router via Wi-Fi",
        "Sends requests to Internet through router",
        "Receives responses through router"
      ]
    }
  ],

  feedback: {
    discovered_tr: "Harika! Bu cihazın görevini öğrendin.",
    discovered_en: "Great! You learned about this device's function.",
    all_discovered_tr: "Tebrikler! Tüm cihazları keşfettin!",
    all_discovered_en: "Congratulations! You discovered all devices!"
  },

  scoring: {
    device_discovered: 5,
    all_devices_bonus: 25
  }
};

