import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * Module1 Enhanced - Geliştirilmiş Modül 1
 * Dosya Uzantıları, Klasör Yapısı, Bilgisayar Bileşenleri
 * Bol resim, animasyon, tam görünen içerik
 */

const Module1Enhanced = () => {
  const { isTurkish } = useLanguage();
  const [expandedSection, setExpandedSection] = useState(null);

  const fileExtensionCategories = [
    {
      id: 'documents',
      icon: '📄',
      title_tr: 'Metin & Belge Dosyaları',
      title_en: 'Text & Document Files',
      color: '#3498db',
      extensions: [
        {
          ext: '.txt',
          name_tr: 'Düz Metin',
          name_en: 'Plain Text',
          desc_tr: 'En basit metin dosyası. Hiçbir biçimlendirme yok.',
          desc_en: 'Simplest text file. No formatting.',
          icon: '📝',
          example: 'not.txt, liste.txt'
        },
        {
          ext: '.pdf',
          name_tr: 'PDF Belgesi',
          name_en: 'PDF Document',
          desc_tr: 'Herhangi bir cihazda aynı görünüm sağlar.',
          desc_en: 'Looks the same on any device.',
          icon: '📕',
          example: 'kitap.pdf, rapor.pdf'
        },
        {
          ext: '.docx',
          name_tr: 'Word Belgesi',
          name_en: 'Word Document',
          desc_tr: 'Biçimlendirme, resim ve tablo içerebilir.',
          desc_en: 'Can contain formatting, images and tables.',
          icon: '📋',
          example: 'ödev.docx, proje.docx'
        }
      ]
    },
    {
      id: 'images',
      icon: '🖼️',
      title_tr: 'Görsel & Resim Dosyaları',
      title_en: 'Image & Picture Files',
      color: '#e74c3c',
      extensions: [
        {
          ext: '.jpg/.jpeg',
          name_tr: 'JPEG Resim',
          name_en: 'JPEG Image',
          desc_tr: 'En yaygın resim formatı. Fotoğraflar için idealdir.',
          desc_en: 'Most common image format. Ideal for photos.',
          icon: '📷',
          example: 'fotoğraf.jpg, portre.jpeg'
        },
        {
          ext: '.png',
          name_tr: 'PNG Resim',
          name_en: 'PNG Image',
          desc_tr: 'Yüksek kaliteli, şeffaflığı destekler.',
          desc_en: 'High quality, supports transparency.',
          icon: '🎨',
          example: 'logo.png, ikon.png'
        },
        {
          ext: '.gif',
          name_tr: 'GIF (Hareketli)',
          name_en: 'GIF (Animated)',
          desc_tr: 'Hareketli resimler için kullanılır.',
          desc_en: 'Used for animated images.',
          icon: '🎬',
          example: 'dans.gif, tepki.gif'
        }
      ]
    },
    {
      id: 'audio',
      icon: '🎵',
      title_tr: 'Ses Dosyaları',
      title_en: 'Audio Files',
      color: '#9b59b6',
      extensions: [
        {
          ext: '.mp3',
          name_tr: 'MP3 Ses',
          name_en: 'MP3 Audio',
          desc_tr: 'En yaygın ses formatı. Müzik ve podcast\'ler.',
          desc_en: 'Most common audio format. Music and podcasts.',
          icon: '🎧',
          example: 'şarkı.mp3, podcast.mp3'
        },
        {
          ext: '.wav',
          name_tr: 'WAV Ses',
          name_en: 'WAV Audio',
          desc_tr: 'Yüksek kaliteli ses formatı.',
          desc_en: 'High quality audio format.',
          icon: '🎙️',
          example: 'kayıt.wav'
        }
      ]
    },
    {
      id: 'video',
      icon: '🎬',
      title_tr: 'Video Dosyaları',
      title_en: 'Video Files',
      color: '#f39c12',
      extensions: [
        {
          ext: '.mp4',
          name_tr: 'MP4 Video',
          name_en: 'MP4 Video',
          desc_tr: 'En yaygın video formatı. YouTube, TikTok.',
          desc_en: 'Most common format. YouTube, TikTok.',
          icon: '🎥',
          example: 'video.mp4, film.mp4'
        },
        {
          ext: '.mkv',
          name_tr: 'Matroska Video',
          name_en: 'Matroska Video',
          desc_tr: 'Esnek format. Birden fazla ses ve altyazı.',
          desc_en: 'Flexible format. Multiple audio & subtitles.',
          icon: '📹',
          example: 'dizi.mkv'
        }
      ]
    },
    {
      id: 'compressed',
      icon: '📦',
      title_tr: 'Sıkıştırılmış Dosyalar',
      title_en: 'Compressed Files',
      color: '#27ae60',
      extensions: [
        {
          ext: '.zip',
          name_tr: 'ZIP Arşivi',
          name_en: 'ZIP Archive',
          desc_tr: 'Birden fazla dosyayı bir dosya haline getirir.',
          desc_en: 'Combines multiple files into one.',
          icon: '📦',
          example: 'projeler.zip'
        },
        {
          ext: '.rar',
          name_tr: 'RAR Arşivi',
          name_en: 'RAR Archive',
          desc_tr: 'Güçlü sıkıştırma formatı.',
          desc_en: 'Powerful compression format.',
          icon: '📫',
          example: 'dosyalar.rar'
        }
      ]
    },
    {
      id: 'code',
      icon: '💻',
      title_tr: 'Kod & Web Dosyaları',
      title_en: 'Code & Web Files',
      color: '#16a085',
      extensions: [
        {
          ext: '.html',
          name_tr: 'Web Sayfası',
          name_en: 'Web Page',
          desc_tr: 'Web sayfalarının temelini oluşturan dosya.',
          desc_en: 'Forms the basis of web pages.',
          icon: '🌐',
          example: 'index.html'
        },
        {
          ext: '.py',
          name_tr: 'Python Kodu',
          name_en: 'Python Code',
          desc_tr: 'Öğrenilmesi kolay, güçlü programlama dili.',
          desc_en: 'Easy to learn, powerful language.',
          icon: '🐍',
          example: 'program.py'
        }
      ]
    }
  ];

  const folderStructure = {
    tr: {
      title: '📁 Bilgisayar Klasör Yapısı',
      description: 'Bilgisayarında dosyaları organize etmek için klasörler kullanırız. Tıpkı bir dosya dolabı gibi!',
      items: [
        {
          name: 'C: Sürücü (Windows)',
          icon: '💾',
          subItems: [
            'Program Files - Yüklü programlar',
            'Users - Kullanıcı dosyaları',
            'Windows - İşletim sistemi dosyaları'
          ]
        },
        {
          name: 'Masaüstü',
          icon: '🖥️',
          subItems: [
            'Kısa yollar',
            'Önemli dosyalar',
            'Klasörler'
          ]
        },
        {
          name: 'Belgelerim',
          icon: '📚',
          subItems: [
            'Yazı dosyaları',
            'Resimler',
            'Videolar'
          ]
        }
      ]
    },
    en: {
      title: '📁 Computer Folder Structure',
      description: 'We use folders to organize files on computers. Just like a filing cabinet!',
      items: [
        {
          name: 'C: Drive (Windows)',
          icon: '💾',
          subItems: [
            'Program Files - Installed programs',
            'Users - User files',
            'Windows - Operating system files'
          ]
        },
        {
          name: 'Desktop',
          icon: '🖥️',
          subItems: [
            'Shortcuts',
            'Important files',
            'Folders'
          ]
        },
        {
          name: 'Documents',
          icon: '📚',
          subItems: [
            'Text files',
            'Pictures',
            'Videos'
          ]
        }
      ]
    }
  };

  const computerParts = {
    tr: {
      title: '🖥️ Bilgisayar Donanım Bileşenleri',
      parts: [
        {
          name: 'CPU (İşlemci)',
          icon: '⚙️',
          desc: 'Bilgisayarın "beyin"i. Tüm hesaplamaları yapar.',
          color: '#e74c3c'
        },
        {
          name: 'RAM (Bellek)',
          icon: '📊',
          desc: 'Geçici bellek. Açık programları saklayan yer.',
          color: '#3498db'
        },
        {
          name: 'SSD/HDD (Depolama)',
          icon: '💾',
          desc: 'Dosyaları kalıcı olarak saklayan yer.',
          color: '#f39c12'
        },
        {
          name: 'Anakart',
          icon: '🔌',
          desc: 'Tüm parçaları birbirine bağlayan devre.',
          color: '#27ae60'
        },
        {
          name: 'Güç Kaynağı',
          icon: '⚡',
          desc: 'Bilgisayara elektrik sağlayan cihaz.',
          color: '#9b59b6'
        },
        {
          name: 'Soğutma Sistemi',
          icon: '❄️',
          desc: 'Bilgisayarın ısınmasını önler.',
          color: '#1abc9c'
        }
      ]
    },
    en: {
      title: '🖥️ Computer Hardware Components',
      parts: [
        {
          name: 'CPU (Processor)',
          icon: '⚙️',
          desc: 'The "brain" of the computer. Performs all calculations.',
          color: '#e74c3c'
        },
        {
          name: 'RAM (Memory)',
          icon: '📊',
          desc: 'Temporary memory. Stores open programs.',
          color: '#3498db'
        },
        {
          name: 'SSD/HDD (Storage)',
          icon: '💾',
          desc: 'Permanently stores files.',
          color: '#f39c12'
        },
        {
          name: 'Motherboard',
          icon: '🔌',
          desc: 'Circuit that connects all parts together.',
          color: '#27ae60'
        },
        {
          name: 'Power Supply',
          icon: '⚡',
          desc: 'Provides electricity to the computer.',
          color: '#9b59b6'
        },
        {
          name: 'Cooling System',
          icon: '❄️',
          desc: 'Prevents the computer from overheating.',
          color: '#1abc9c'
        }
      ]
    }
  };

  const content = isTurkish ? { ...folderStructure.tr, ...computerParts.tr } : { ...folderStructure.en, ...computerParts.en };

  return (
    <div className="module1-enhanced">
      {/* BAŞLIK */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="module-header"
      >
        <h1>{isTurkish ? '📚 Modül 1: Bilgisayar Temelleri' : '📚 Module 1: Computer Basics'}</h1>
        <p>{isTurkish ? 'Dosya türleri, klasör yapısı ve bilgisayar bileşenlerini öğren' : 'Learn about file types, folder structure and computer components'}</p>
      </motion.div>

      {/* DOSYA UZANTILARI SEKSİYONU */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="section-files"
      >
        <h2>{isTurkish ? '📄 Dosya Uzantıları' : '📄 File Extensions'}</h2>
        <p className="section-description">
          {isTurkish
            ? 'Dosya uzantıları (.txt, .pdf, .jpg vb.) dosyanın türünü gösterir. Aşağıdaki kategorileri keşfet!'
            : 'File extensions (.txt, .pdf, .jpg, etc.) show the type of file. Explore the categories below!'}
        </p>

        <div className="extensions-grid">
          {fileExtensionCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="extension-category"
              onClick={() => setExpandedSection(expandedSection === category.id ? null : category.id)}
            >
              <div className="category-header" style={{ borderColor: category.color }}>
                <span className="category-icon">{category.icon}</span>
                <h3>{isTurkish ? category.title_tr : category.title_en}</h3>
                <span className="expand-arrow">
                  {expandedSection === category.id ? '▼' : '▶'}
                </span>
              </div>

              {expandedSection === category.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="category-content"
                >
                  {category.extensions.map((ext, extIdx) => (
                    <motion.div
                      key={ext.ext}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: extIdx * 0.05 }}
                      className="extension-item"
                    >
                      <div className="ext-icon">{ext.icon}</div>
                      <div className="ext-info">
                        <div className="ext-code">{ext.ext}</div>
                        <div className="ext-name">{isTurkish ? ext.name_tr : ext.name_en}</div>
                        <div className="ext-desc">{isTurkish ? ext.desc_tr : ext.desc_en}</div>
                        <div className="ext-example">
                          <strong>{isTurkish ? 'Örnek:' : 'Example:'}</strong> {ext.example}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* KLASÖR YAPISI SEKSİYONU */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="section-folders"
      >
        <h2>{isTurkish ? '📁 Klasör Yapısı' : '📁 Folder Structure'}</h2>
        <p className="section-description">
          {isTurkish
            ? 'Bilgisayarında dosyaları organize etmek için klasörler kullanırız. Tıpkı bir dosya dolabı gibi!'
            : 'We use folders to organize files on computers. Just like a filing cabinet!'}
        </p>

        <div className="folder-structure">
          {(isTurkish ? folderStructure.tr.items : folderStructure.en.items).map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              className="folder-item"
            >
              <div className="folder-name">
                <span className="folder-icon">{item.icon}</span>
                <span>{item.name}</span>
              </div>
              <div className="folder-contents">
                {item.subItems.map((subItem, subIdx) => (
                  <motion.div
                    key={subIdx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + idx * 0.1 + subIdx * 0.05 }}
                    className="sub-item"
                  >
                    <span className="bullet">▸</span>
                    <span>{subItem}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* BİLGİSAYAR BILEŞENLERI SEKSİYONU */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="section-hardware"
      >
        <h2>{isTurkish ? computerParts.tr.title : computerParts.en.title}</h2>
        <p className="section-description">
          {isTurkish
            ? 'Bilgisayar birçok farklı parçadan oluşur. Her birinin özel bir görevı vardır.'
            : 'A computer consists of many different parts. Each has a special task.'}
        </p>

        <div className="hardware-grid">
          {(isTurkish ? computerParts.tr.parts : computerParts.en.parts).map((part, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + idx * 0.08 }}
              className="hardware-card"
              style={{ borderColor: part.color }}
            >
              <div className="hardware-icon" style={{ backgroundColor: part.color }}>
                {part.icon}
              </div>
              <h3>{part.name}</h3>
              <p>{part.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* UYARI KUTUSU */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="warning-box"
      >
        <h3>⚠️ {isTurkish ? 'Önemli Bilgiler' : 'Important Information'}</h3>
        <ul>
          <li>
            {isTurkish
              ? '✅ Dosya uzantılarını gizleme ayarını kapat, böylece her dosyanın türünü görebilirsin.'
              : '✅ Turn off the hide file extensions setting so you can see the type of each file.'}
          </li>
          <li>
            {isTurkish
              ? '✅ Önemli dosyaları düzenli olarak yedekle (USB belleğe veya buluta).'
              : '✅ Regularly backup important files (to USB drive or cloud).'}
          </li>
          <li>
            {isTurkish
              ? '❌ Bilinmeyen .exe dosyalarını açma! Virüs olabilir.'
              : '❌ Do not open unknown .exe files! They may be viruses.'}
          </li>
        </ul>
      </motion.div>

      <style jsx>{`
        .module1-enhanced {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          min-height: 100vh;
        }

        .module-header {
          text-align: center;
          margin-bottom: 50px;
          padding: 30px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 15px;
          color: white;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .module-header h1 {
          font-size: 2.5rem;
          margin: 0 0 10px 0;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .module-header p {
          font-size: 1.1rem;
          margin: 0;
          opacity: 0.95;
        }

        section {
          margin-bottom: 50px;
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }

        section h2 {
          color: #667eea;
          font-size: 2rem;
          margin-top: 0;
          margin-bottom: 15px;
        }

        .section-description {
          color: #555;
          font-size: 1.05rem;
          line-height: 1.6;
          margin-bottom: 25px;
        }

        /* DOSYA UZANTILARI */
        .extensions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .extension-category {
          border: 2px solid #ddd;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .extension-category:hover {
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          transform: translateY(-5px);
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 20px;
          border-left: 5px solid;
          background: linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%);
          cursor: pointer;
        }

        .category-icon {
          font-size: 2rem;
        }

        .category-header h3 {
          flex: 1;
          margin: 0;
          color: #333;
        }

        .expand-arrow {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }

        .category-content {
          padding: 20px;
          background: #fafafa;
        }

        .extension-item {
          display: flex;
          gap: 15px;
          padding: 15px;
          margin-bottom: 15px;
          background: white;
          border-radius: 8px;
          border-left: 3px solid #667eea;
        }

        .extension-item:last-child {
          margin-bottom: 0;
        }

        .ext-icon {
          font-size: 2rem;
          min-width: 50px;
          text-align: center;
        }

        .ext-info {
          flex: 1;
        }

        .ext-code {
          font-family: 'Courier New', monospace;
          font-weight: bold;
          color: #667eea;
          font-size: 1.1rem;
        }

        .ext-name {
          color: #333;
          font-weight: 600;
          margin: 5px 0;
        }

        .ext-desc {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 8px 0;
        }

        .ext-example {
          color: #888;
          font-size: 0.9rem;
          font-style: italic;
        }

        /* KLASÖR YAPISI */
        .folder-structure {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .folder-item {
          background: linear-gradient(135deg, #fff9e6 0%, #ffe6cc 100%);
          border: 2px solid #f39c12;
          border-radius: 12px;
          padding: 20px;
          transition: all 0.3s ease;
        }

        .folder-item:hover {
          box-shadow: 0 8px 25px rgba(243, 156, 18, 0.2);
          transform: translateY(-5px);
        }

        .folder-name {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.2rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 15px;
        }

        .folder-icon {
          font-size: 1.8rem;
        }

        .folder-contents {
          padding-left: 10px;
          border-left: 3px solid #f39c12;
        }

        .sub-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #555;
          margin: 10px 0;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .bullet {
          color: #f39c12;
          font-weight: bold;
        }

        /* BİLGİSAYAR BILEŞENLERI */
        .hardware-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .hardware-card {
          border: 3px solid;
          border-radius: 15px;
          padding: 25px;
          text-align: center;
          background: white;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .hardware-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .hardware-icon {
          width: 80px;
          height: 80px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          margin: 0 auto 15px;
          color: white;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .hardware-card h3 {
          color: #333;
          margin: 15px 0 10px 0;
          font-size: 1.2rem;
        }

        .hardware-card p {
          color: #666;
          line-height: 1.6;
          margin: 0;
          font-size: 0.95rem;
        }

        /* UYARI KUTUSU */
        .warning-box {
          background: linear-gradient(135deg, #fff5e6 0%, #ffe6cc 100%);
          border-left: 5px solid #ff9800;
          padding: 25px;
          border-radius: 12px;
          margin-top: 40px;
        }

        .warning-box h3 {
          color: #e65100;
          margin-top: 0;
          font-size: 1.3rem;
        }

        .warning-box ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .warning-box li {
          padding: 12px 0;
          color: #333;
          line-height: 1.6;
          border-bottom: 1px solid rgba(255, 152, 0, 0.2);
        }

        .warning-box li:last-child {
          border-bottom: none;
        }

        @media (max-width: 768px) {
          .module-header h1 {
            font-size: 1.8rem;
          }

          section h2 {
            font-size: 1.5rem;
          }

          .extensions-grid,
          .folder-structure,
          .hardware-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Module1Enhanced;
