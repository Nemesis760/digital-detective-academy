// -*- coding: utf-8 -*-

export const NETWORK_SECURITY_HANGMAN = {
  id: "network_security_hangman",
  title_tr: "Adam Asmaca",
  title_en: "Hangman",
  instruction_tr: "İpucunu oku, harfleri seç ve kelimeyi bul!",
  instruction_en: "Read the clue, pick letters, and guess the word!",

  alphabet_tr: [
    "A","B","C","Ç","D","E","F","G","Ğ","H","I","İ","J","K","L",
    "M","N","O","Ö","P","R","S","Ş","T","U","Ü","V","Y","Z"
  ],
  alphabet_en: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),

  items: [
    {
      answer_tr: "ŞİFRE",
      answer_en: "PASSWORD",
      clue_tr: "Hesabını korumak için gizli tuttuğun kelimedir.",
      clue_en: "A secret word you use to protect your account."
    },
    {
      answer_tr: "GÜVEN",
      answer_en: "SAFE",
      clue_tr: "Tehlikeden uzak olmak, korunmak demektir.",
      clue_en: "It means protected from danger."
    },
    {
      answer_tr: "KABLOSUZ",
      answer_en: "WIRELESS",
      clue_tr: "Kablo olmadan internet bağlantısı sunan teknolojidir.",
      clue_en: "A technology that provides internet without cables."
    },
    {
      answer_tr: "MODEM",
      answer_en: "MODEM",
      clue_tr: "İnternetin eve veya okula gelmesini sağlayan cihazdır.",
      clue_en: "A device that brings internet to your home or school."
    },
    {
      answer_tr: "ROUTER",
      answer_en: "ROUTER",
      clue_tr: "Wi-Fi yayar ve interneti cihazlara dağıtır.",
      clue_en: "It shares the internet and often provides Wi-Fi."
    },
    {
      answer_tr: "LİNK",
      answer_en: "LINK",
      clue_tr: "Bir sayfaya gitmek için tıkladığın bağlantıdır.",
      clue_en: "A clickable connection to open a web page."
    },
    {
      answer_tr: "VİRÜS",
      answer_en: "VIRUS",
      clue_tr: "Cihaza zarar verebilen kötü yazılım türüdür.",
      clue_en: "A harmful type of malicious software."
    },
    {
      answer_tr: "HTTPS",
      answer_en: "HTTPS",
      clue_tr: "Adres çubuğunda görürsen daha güvenli bağlantı demektir.",
      clue_en: "It shows a more secure connection in the address bar."
    },
    {
      answer_tr: "KİLİT",
      answer_en: "LOCK",
      clue_tr: "Tarayıcıda küçük simge olarak görülen güvenlik işaretidir.",
      clue_en: "A security symbol often shown as a small icon."
    },
    {
      answer_tr: "DOLANDIRICILIK",
      answer_en: "SCAM",
      clue_tr: "Seni kandırıp bilgi veya para almaya çalışan tuzaktır.",
      clue_en: "A trick to steal your info or money."
    }
  ],

  settings: {
    maxWrong: 7,
    revealSpaces: true
  }
};

export default NETWORK_SECURITY_HANGMAN;
