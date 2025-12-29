// Siber Güvenlik Kelimeleri ve Bilgileri
export const WORDS = {
  tr: [
    'SIFRE', 'KALKAN', 'GUVEN', 'DIJIT', 'BILGI', 
    'VIRUS', 'HACKER', 'PHISH', 'SPAM', 'TROJAN',
    'MALWARE', 'FIREWALL', 'ENCRYPT', 'BACKUP', 'UPDATE',
    'PASSWORD', 'ANTIVIRUS', 'SECURE', 'PRIVACY', 'COOKIE'
  ],
  en: [
    'SHIELD', 'GUARD', 'TRUST', 'CYBER', 'DATA',
    'VIRUS', 'HACKER', 'PHISH', 'SPAM', 'TROJAN',
    'MALWARE', 'FIREWALL', 'ENCRYPT', 'BACKUP', 'UPDATE',
    'PASSWORD', 'ANTIVIRUS', 'SECURE', 'PRIVACY', 'COOKIE'
  ]
};

export const WORD_INFO = {
  'SIFRE': {
    tr: {
      title: 'Şifre (Password)',
      text: 'Şifre, dijital hesaplarınızı koruyan gizli anahtardır. Güçlü şifreler büyük harf, küçük harf, rakam ve sembol içermelidir.',
      example: 'Güçlü şifre: "Kedi123!Kopek"',
      tip: 'Şifrenizi kimseyle paylaşmayın ve her hesap için farklı şifre kullanın!'
    },
    en: {
      title: 'Password',
      text: 'A password is a secret key that protects your digital accounts. Strong passwords should contain uppercase, lowercase, numbers, and symbols.',
      example: 'Strong password: "Cat123!Dog"',
      tip: 'Never share your password and use different passwords for each account!'
    }
  },
  'KALKAN': {
    tr: {
      title: 'Dijital Kalkan',
      text: 'Dijital kalkan, bilgisayarınızı zararlı yazılımlardan koruyan güvenlik sistemidir. Antivirüs ve firewall gibi araçlar dijital kalkan görevi görür.',
      example: 'Antivirüs programı bir dijital kalkandır.',
      tip: 'Dijital kalkanınızı (antivirüs) her zaman güncel tutun!'
    },
    en: {
      title: 'Digital Shield',
      text: 'A digital shield is a security system that protects your computer from malicious software. Tools like antivirus and firewall act as digital shields.',
      example: 'An antivirus program is a digital shield.',
      tip: 'Always keep your digital shield (antivirus) updated!'
    }
  },
  'GUVEN': {
    tr: {
      title: 'Güven',
      text: 'Dijital dünyada güven, doğru kaynaklara inanmak ve şüpheli içeriklerden uzak durmak anlamına gelir.',
      example: 'Güvenilir web sitelerinde "https://" ve kilit simgesi görürsünüz.',
      tip: 'Tanımadığınız kaynaklara güvenmeyin!'
    },
    en: {
      title: 'Trust',
      text: 'In the digital world, trust means believing in reliable sources and staying away from suspicious content.',
      example: 'You see "https://" and a lock icon on trusted websites.',
      tip: 'Don\'t trust unknown sources!'
    }
  },
  'DIJIT': {
    tr: {
      title: 'Dijital',
      text: 'Dijital, bilgisayar ve internet teknolojileriyle ilgili her şeyi ifade eder. Dijital dünya, gerçek dünyanın sanal versiyonudur.',
      example: 'Dijital fotoğraf, dijital oyun, dijital vatandaşlık',
      tip: 'Dijital dünyada da gerçek dünyadaki gibi sorumlu davranmalıyız!'
    },
    en: {
      title: 'Digital',
      text: 'Digital refers to everything related to computer and internet technologies. The digital world is the virtual version of the real world.',
      example: 'Digital photo, digital game, digital citizenship',
      tip: 'We should behave responsibly in the digital world just like in the real world!'
    }
  },
  'BILGI': {
    tr: {
      title: 'Bilgi',
      text: 'Bilgi, işlenmiş ve anlamlı veridir. Dijital dünyada bilgilerimizi korumak çok önemlidir.',
      example: 'Kişisel bilgilerimiz (ad, adres, telefon) değerlidir ve korunmalıdır.',
      tip: 'Kişisel bilgilerinizi internette paylaşırken dikkatli olun!'
    },
    en: {
      title: 'Information',
      text: 'Information is processed and meaningful data. Protecting our information in the digital world is very important.',
      example: 'Our personal information (name, address, phone) is valuable and should be protected.',
      tip: 'Be careful when sharing your personal information online!'
    }
  },
  'VIRUS': {
    tr: {
      title: 'Virüs',
      text: 'Bilgisayar virüsü, zararlı yazılım türüdür. Dosyalarınıza zarar verir ve bilgisayarınızı yavaşlatır.',
      example: 'Virüsler genellikle e-posta ekleri veya indirilen dosyalarla bulaşır.',
      tip: 'Şüpheli dosyaları açmayın ve antivirüs programı kullanın!'
    },
    en: {
      title: 'Virus',
      text: 'A computer virus is a type of malicious software. It damages your files and slows down your computer.',
      example: 'Viruses usually spread through email attachments or downloaded files.',
      tip: 'Don\'t open suspicious files and use antivirus software!'
    }
  },
  'HACKER': {
    tr: {
      title: 'Hacker',
      text: 'Hacker, bilgisayar sistemlerine yetkisiz erişim sağlayan kişidir. Kötü niyetli hackerlar bilgilerinizi çalabilir.',
      example: 'Güçlü şifreler kullanarak hacker saldırılarına karşı korunabilirsiniz.',
      tip: 'Şifrelerinizi güçlü tutun ve 2FA (iki faktörlü doğrulama) kullanın!'
    },
    en: {
      title: 'Hacker',
      text: 'A hacker is a person who gains unauthorized access to computer systems. Malicious hackers can steal your information.',
      example: 'You can protect against hacker attacks by using strong passwords.',
      tip: 'Keep your passwords strong and use 2FA (two-factor authentication)!'
    }
  },
  'PHISH': {
    tr: {
      title: 'Phishing (Kimlik Avı)',
      text: 'Phishing, sahte web siteleri veya e-postalarla kişisel bilgilerinizi çalmaya çalışan bir dolandırıcılık yöntemidir.',
      example: 'Sahte banka e-postası göndererek şifrenizi isteyen mesajlar phishing örneğidir.',
      tip: 'Şüpheli linklere tıklamayın ve resmi sitelerden gelen mesajları kontrol edin!'
    },
    en: {
      title: 'Phishing',
      text: 'Phishing is a fraud method that tries to steal your personal information through fake websites or emails.',
      example: 'Fake bank emails asking for your password are examples of phishing.',
      tip: 'Don\'t click suspicious links and verify messages from official sites!'
    }
  },
  'MALWARE': {
    tr: {
      title: 'Zararlı Yazılım (Malware)',
      text: 'Malware, bilgisayarınıza zarar veren tüm kötü amaçlı yazılımların genel adıdır. Virüs, trojan, spyware gibi.',
      example: 'Malware, bilgisayarınızı yavaşlatır, dosyalarınızı siler veya bilgilerinizi çalar.',
      tip: 'Güvenilir kaynaklardan dosya indirin ve antivirüs kullanın!'
    },
    en: {
      title: 'Malware',
      text: 'Malware is the general name for all malicious software that harms your computer. Like viruses, trojans, spyware.',
      example: 'Malware slows down your computer, deletes your files, or steals your information.',
      tip: 'Download files from trusted sources and use antivirus!'
    }
  },
  'FIREWALL': {
    tr: {
      title: 'Güvenlik Duvarı (Firewall)',
      text: 'Firewall, bilgisayarınızı dışarıdan gelen zararlı bağlantılara karşı koruyan güvenlik sistemidir.',
      example: 'Firewall, yetkisiz erişimleri engeller ve bilgisayarınızı korur.',
      tip: 'Firewall\'unuzu her zaman açık tutun!'
    },
    en: {
      title: 'Firewall',
      text: 'A firewall is a security system that protects your computer from harmful external connections.',
      example: 'Firewall blocks unauthorized access and protects your computer.',
      tip: 'Always keep your firewall enabled!'
    }
  }
};

