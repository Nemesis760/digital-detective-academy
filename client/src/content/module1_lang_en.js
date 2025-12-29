// Module 1: Exploring the Computer World - English Language File

export const MODULE1_EN = {
  module_1: {
    title: "Module 1: Exploring the Computer World",
    subtitle: "🟢 Single Module - 5 Subtopics",
    sections: [
      {
        id: 1,
        title: "🟢 SUBTOPIC 1: WHAT IS A COMPUTER AND HOW DOES IT THINK?",
        subtitle: "Introduction, Logic and Basic Definitions",
        intro: "A computer is an electronic machine that takes data as raw material, processes it, stores it, and presents the results to us as products. It works just like a factory!",
        content: {
          "1.1": {
            title: "Definition of Computer (Factory Analogy)",
            description: "A computer works like a factory:",
            points: [
              "Input (Raw Material): Information entry via keyboard or mouse",
              "Process (Production Line): The processor calculates the data",
              "Output (Product): The image on the screen or paper from the printer"
            ],
            image: "/images/module1_factory_analogy.png",
            examples: [
              "When you type on a keyboard, you're providing INPUT",
              "The CPU processes your typing and converts it to text (PROCESS)",
              "The monitor shows you the text you typed (OUTPUT)"
            ]
          },
          "1.2": {
            title: "Data vs Information (Puzzle Analogy)",
            description: "Data (Raw Pieces): Pieces that have no meaning alone. (E.g., '30', 'Blue'). Puzzle pieces.\nInformation (Complete Picture): Data combined to create meaning. (E.g., 'The temperature is 30 degrees'). The completed puzzle.",
            image: "/images/module1_data_info.png",
            examples: [
              "Data: '25', 'kg', 'apple' → Information: 'The apple weighs 25 kg'",
              "Data: 'red', 'fast', 'car' → Information: 'A fast red car'"
            ]
          },
          "1.3": {
            title: "Binary System (Computer's Language)",
            description: "Computers don't speak like we do with A, B, C. They only know the numbers 0 and 1 (Electricity on/off). This is called Binary Code.",
            image: "/images/module1_binary_system.png",
            examples: [
              "Letter 'A' in binary: 01000001",
              "Number '5' in binary: 00000101",
              "Every click, every image, every sound is made of 0s and 1s!"
            ]
          }
        },
        activity_title: "🎮 Activity: Data Factory",
        activity_desc: "An interactive animation where students drag 'Flour (Data)' bags into a machine, and 'Bread (Information)' comes out, demonstrating how data becomes information.",
        activity_type: "data_factory"
      },
      {
        id: 2,
        title: "🔵 SUBTOPIC 2: HARDWARE (THE COMPUTER'S BODY)",
        subtitle: "Physical Parts and Their Functions",
        intro: "All the metal and plastic parts of a computer that can be touched and seen. Similar to the human body.",
        content: {
          "2.1": {
            title: "What is Hardware?",
            description: "All the metal and plastic parts of a computer that can be touched and seen. Similar to the human body - just like we have bones, muscles, and organs, a computer has its physical components.",
            image: "/images/module1_hardware_overview.png",
            examples: [
              "Monitor - like our eyes (shows us information)",
              "Keyboard - like our mouth (lets us communicate)",
              "CPU - like our brain (processes everything)"
            ]
          },
          "2.2": {
            title: "Peripheral Devices (Input-Output Table)",
            description: "Devices are divided into three categories:",
            table: {
              "Input Devices (Sense Organs)": {
                function: "Send data to the computer from outside",
                examples: "Keyboard, Mouse, Microphone, Web Camera, Scanner",
                image: "/images/module1_input_devices.png"
              },
              "Output Devices (Speech/Expression)": {
                function: "Shows/announces processed data to us",
                examples: "Monitor, Printer, Speaker, Headphones, Projector",
                image: "/images/module1_output_devices.png"
              },
              "Input/Output Devices": {
                function: "Both receives and sends data",
                examples: "Touch Screen, USB Drive, Modem",
                image: "/images/module1_io_devices.png"
              }
            }
          },
          "2.3": {
            title: "System Units (Inside the Case - Vital Organs)",
            description: "Motherboard (Skeleton): The card that connects all parts together.\nProcessor / CPU (Brain): Performs all operations, determines computer speed. Has a fan because it heats up.\nRAM Memory (Workbench / Temporary Memory): Information is processed here. Deleted when power goes out.\nHard Disk / SSD (Library / Permanent Memory): Files are stored here. Not deleted even if power goes out.",
            image: "/images/module1_system_units.png",
            detailed_parts: [
              {
                name: "Motherboard",
                role: "Connects all components",
                analogy: "Like the skeleton that holds everything together"
              },
              {
                name: "CPU",
                role: "Processes all calculations",
                analogy: "The brain - makes all decisions"
              },
              {
                name: "RAM",
                role: "Temporary storage while working",
                analogy: "Like a workbench - cleared when you're done"
              },
              {
                name: "Hard Drive/SSD",
                role: "Permanent file storage",
                analogy: "Like a library - keeps everything safe"
              }
            ]
          }
        },
        activity_title: "🎮 Activity: Hotspot Image",
        activity_desc: "An open computer case is displayed on screen. Students click on parts and explanations like 'I'm the Processor, I'm the brain!' appear.",
        activity_type: "hardware_hotspot"
      },
      {
        id: 3,
        title: "🟠 SUBTOPIC 3: SOFTWARE (THE COMPUTER'S SOUL)",
        subtitle: "Programs, Operating Systems and Licenses",
        intro: "Commands that tell hardware parts what to do. Without software, hardware is just a lifeless pile of metal.",
        content: {
          "3.1": {
            title: "What is Software?",
            description: "Commands that tell hardware parts what to do. Without software, hardware is just a lifeless pile of metal. Software is like the soul that brings the computer to life!",
            image: "/images/module1_software_concept.png",
            examples: [
              "Windows is software that makes your computer work",
              "Games are software that provide entertainment",
              "Word is software that helps you write documents"
            ]
          },
          "3.2": {
            title: "Software Types (Ship Captain and Crew)",
            description: "System Software (Captain): The main software that manages the computer. (E.g., Windows, macOS, Linux, Android, iOS).\nApplication Software (Crew): Programs that do specific tasks. (E.g., Paint, Word, Scratch, Chrome).",
            image: "/images/module1_software_types.png",
            system_software: [
              "Windows - Manages everything",
              "macOS - Apple's operating system",
              "Linux - Open source system",
              "Android - For phones and tablets",
              "iOS - For iPhones and iPads"
            ],
            application_software: [
              "Paint - For drawing",
              "Word - For writing",
              "Chrome - For browsing internet",
              "Scratch - For programming",
              "Games - For entertainment"
            ]
          },
          "3.3": {
            title: "Software License Types (Usage Rights)",
            description: "Licensed: Software we pay for and purchase.\nFree (Freeware): Completely free software.\nDemo (Shareware): Free for a certain period (30 days), then paid software.\nBeta: Software still in testing phase.",
            image: "/images/module1_software_licenses.png",
            license_types: [
              {
                type: "Licensed",
                description: "You pay money to use it",
                example: "Microsoft Office, Adobe Photoshop"
              },
              {
                type: "Freeware",
                description: "Completely free forever",
                example: "Chrome Browser, VLC Media Player"
              },
              {
                type: "Shareware/Demo",
                description: "Free trial, then you pay",
                example: "WinRAR (30 days free)"
              },
              {
                type: "Beta",
                description: "Still being tested",
                example: "Early versions of games"
              }
            ]
          }
        },
        activity_title: "🎮 Activity: Open the Box - Operating System Game",
        activity_desc: "Click on boxes to open questions about operating systems and answer true/false!",
        activity_type: "box_game"
      },
      {
        id: 4,
        title: "🟣 SUBTOPIC 4: MEMORY AND FILE MANAGEMENT",
        subtitle: "Capacity Units and Organization",
        intro: "We measure how much space files take up on the computer and store them in an organized way.",
        content: {
          "4.1": {
            title: "Capacity Units (From Largest to Smallest)",
            description: "Bit: Smallest unit (0 or 1).\nByte: 1 Letter.\nKilobyte (KB): One page of text.\nMegabyte (MB): One MP3 song or photo.\nGigabyte (GB): One movie or game.\nTerabyte (TB): Thousands of movies (Hard disk size).",
            image: "/images/module1_capacity_units.png",
            visual_comparison: [
              { unit: "Bit", size: "1 grain of rice", example: "0 or 1" },
              { unit: "Byte", size: "1 letter", example: "A" },
              { unit: "KB", size: "1 page", example: "A text document" },
              { unit: "MB", size: "1 song", example: "MP3 file" },
              { unit: "GB", size: "1 movie", example: "HD video" },
              { unit: "TB", size: "Library", example: "1000+ movies" }
            ]
          },
          "4.2": {
            title: "File Extensions (Files' Last Names)",
            description: "The dot and extension after the file name shows the type of file:\n.mp3 (Audio)\n.jpg (Image)\n.mp4 (Video)\n.pdf (Book/Document)\n.exe (Program - Executable)",
            image: "/images/module1_file_extensions.png",
            common_extensions: [
              { ext: ".txt", type: "Text", icon: "📝", example: "notes.txt" },
              { ext: ".jpg/.png", type: "Image", icon: "🖼️", example: "photo.jpg" },
              { ext: ".mp3/.wav", type: "Audio", icon: "🎵", example: "song.mp3" },
              { ext: ".mp4/.avi", type: "Video", icon: "🎬", example: "movie.mp4" },
              { ext: ".pdf", type: "Document", icon: "📕", example: "book.pdf" },
              { ext: ".exe", type: "Program", icon: "⚙️", example: "game.exe" },
              { ext: ".zip/.rar", type: "Archive", icon: "📦", example: "files.zip" }
            ]
          },
          "4.3": {
            title: "Folder Organization Logic",
            description: "Organizing files into folders by type (My Music, My Pictures, My Homework) makes it easier to find what we're looking for.",
            image: "/images/module1_folder_structure.png",
            organization_tips: [
              "Create folders by subject: Math, Science, Art",
              "Create folders by type: Photos, Videos, Documents",
              "Use clear names: 'Homework_2024' not 'Stuff'",
              "Keep desktop clean - use folders!"
            ]
          }
        },
        activity_title: "🎮 Activity: Card Flip (Flashcards)",
        activity_desc: "Card shows '.jpg' on front, student clicks and it flips to show 'Image File' on back.",
        activity_type: "file_flashcards"
      },
      {
        id: 5,
        title: "🔴 SUBTOPIC 5: DIGITAL HEALTH, ETHICS AND SECURITY",
        subtitle: "Rules, Dangers and Protection",
        intro: "Using the computer safely and healthily is important to protect yourself from both physical and digital dangers.",
        content: {
          "5.1": {
            title: "Ergonomics (Healthy Posture)",
            description: "Screen should be at eye level.\nSit upright.\nArms should bend at 90 degrees at the elbow.\nRest eyes every 20 minutes.",
            image: "/images/module1_ergonomics.png",
            checklist: [
              "✅ Monitor at eye level",
              "✅ Back straight, feet flat",
              "✅ Arms at 90 degrees",
              "✅ Take breaks every 20 minutes",
              "✅ Blink often to prevent dry eyes"
            ]
          },
          "5.2": {
            title: "Digital Threats (Viruses)",
            description: "Virus: Software that infects computer and damages files.\nTrojan Horse: Software that looks useful but steals information in the background.\nProtection: Use antivirus software and don't open emails from unknown sources.",
            image: "/images/module1_digital_threats.png",
            threat_types: [
              {
                name: "Virus",
                description: "Damages files and programs",
                protection: "Antivirus software"
              },
              {
                name: "Trojan",
                description: "Looks safe but steals data",
                protection: "Don't download unknown files"
              },
              {
                name: "Phishing",
                description: "Fake emails trying to steal passwords",
                protection: "Check sender email carefully"
              }
            ]
          },
          "5.3": {
            title: "Creating Strong Passwords",
            description: "Don't use passwords like '123456' or 'password'!\nUse uppercase, lowercase, numbers and symbols. (E.g., Blue.Apple?99)",
            image: "/images/module1_strong_passwords.png",
            password_rules: [
              "✅ At least 8 characters",
              "✅ Mix of uppercase and lowercase",
              "✅ Include numbers",
              "✅ Include symbols (!, @, #, $)",
              "❌ Don't use personal info",
              "❌ Don't use common words"
            ],
            examples: {
              bad: ["123456", "password", "qwerty", "admin"],
              good: ["Blue.Apple?99", "My#Dog2024!", "Sun$Set@2024"]
            }
          },
          "5.4": {
            title: "Copyright (Respecting Work)",
            description: "Images, music and games on the internet are someone's work. Copying without permission or using pirated versions is a crime and unethical.",
            image: "/images/module1_copyright.png",
            scenarios: [
              {
                situation: "Downloading a game for free (pirated)",
                wrong: "Violates copyright, may contain viruses",
                right: "Buy the game or use free alternatives"
              },
              {
                situation: "Using someone's photo without permission",
                wrong: "Copyright violation",
                right: "Ask permission or use free stock photos"
              }
            ]
          }
        },
        activity_title: "🎮 Activity: Scenario-Based Test",
        activity_desc: "Question: 'Ali downloaded a game he really liked as 'cracked' (pirated) from the internet. What did Ali violate?' Answer: Copyright and Security (Virus risk).",
        activity_type: "scenario_test"
      }
    ]
  }
};

