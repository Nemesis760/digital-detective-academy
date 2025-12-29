import { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Dosya Uzantıları Bölümü
 * Ortaokul öğrencileri için dosya türlerinin detaylı açıklaması
 */
const FileExtensionsSection = ({ isTurkish }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const fileCategories = [
    {
      id: 1,
      category_tr: '📄 Metin ve Belge Dosyaları',
      category_en: '📄 Text and Document Files',
      description_tr: 'Yazı, metinler ve belgeler içeren dosyalar',
      description_en: 'Files containing text, documents and writings',
      files: [
        {
          ext: '.txt',
          name_tr: 'Düz Metin',
          name_en: 'Plain Text',
          desc_tr: 'En basit metin dosyası. Hiçbir biçimlendirme yok. Tüm programlar açabilir.',
          desc_en: 'The simplest text file. No formatting. All programs can open it.',
          example: 'not.txt, liste.txt',
          icon: '📝'
        },
        {
          ext: '.doc / .docx',
          name_tr: 'Word Belgesi',
          name_en: 'Word Document',
          desc_tr: 'Microsoft Word\'de oluşturulan belgeler. Biçimlendirme, resim ve tablo içerebilir.',
          desc_en: 'Documents created in Microsoft Word. Can contain formatting, images and tables.',
          example: 'ödev.docx, rapor.doc',
          icon: '📋'
        },
        {
          ext: '.pdf',
          name_tr: 'PDF (Taşınabilir Belge Formatı)',
          name_en: 'PDF (Portable Document Format)',
          desc_tr: 'Herhangi bir cihazda aynı görünüm sağlayan dosya. Çoğu zaman düzenlenemez.',
          desc_en: 'File that looks the same on any device. Usually cannot be edited.',
          example: 'kitap.pdf, sertifika.pdf',
          icon: '📕'
        },
        {
          ext: '.odt',
          name_tr: 'OpenDocument Metin',
          name_en: 'OpenDocument Text',
          desc_tr: 'Açık kaynak ofis uygulamalarında kullanılan belge formatı.',
          desc_en: 'Document format used in open source office applications.',
          example: 'proje.odt',
          icon: '📗'
        },
        {
          ext: '.rtf',
          name_tr: 'Zengin Metin Formatı',
          name_en: 'Rich Text Format',
          desc_tr: 'Basit biçimlendirme (kalın, italik) destekleyen metin dosyası.',
          desc_en: 'Text file supporting basic formatting (bold, italic).',
          example: 'mektup.rtf',
          icon: '📙'
        }
      ]
    },
    {
      id: 2,
      category_tr: '🖼️ Görsel ve Resim Dosyaları',
      category_en: '🖼️ Image and Picture Files',
      description_tr: 'Fotoğraf, resim ve grafik dosyaları',
      description_en: 'Photo, image and graphic files',
      files: [
        {
          ext: '.jpg / .jpeg',
          name_tr: 'JPEG Resim',
          name_en: 'JPEG Image',
          desc_tr: 'En yaygın resim formatı. Fotoğraflar için idealdir. Dosya boyutu küçüktür ama kalite kaybı olabilir.',
          desc_en: 'Most common image format. Ideal for photos. Small file size but may lose quality.',
          example: 'tatil_fotosu.jpg, portre.jpeg',
          icon: '📷'
        },
        {
          ext: '.png',
          name_tr: 'PNG Resim',
          name_en: 'PNG Image',
          desc_tr: 'Yüksek kaliteli resim formatı. Şeffaflığı (transparan arka plan) destekler. Web için ideal.',
          desc_en: 'High quality image format. Supports transparency. Ideal for web.',
          example: 'logo.png, ikon.png',
          icon: '🖼️'
        },
        {
          ext: '.gif',
          name_tr: 'GIF (Hareketli Resim)',
          name_en: 'GIF (Animated Image)',
          desc_tr: 'Hareketli resimler için kullanılır. Sosyal medyada çok popüler.',
          desc_en: 'Used for animated images. Very popular on social media.',
          example: 'dans.gif, tepki.gif',
          icon: '🎬'
        },
        {
          ext: '.bmp',
          name_tr: 'Bitmap Resim',
          name_en: 'Bitmap Image',
          desc_tr: 'Basit resim formatı. Dosya boyutu büyüktür. Eski bilgisayarlarda kullanılır.',
          desc_en: 'Simple image format. Large file size. Used on older computers.',
          example: 'duvar_kagidi.bmp',
          icon: '🎨'
        },
        {
          ext: '.svg',
          name_tr: 'Vektör Grafik',
          name_en: 'Vector Graphic',
          desc_tr: 'Matematiksel şekiller kullanarak oluşturulan resimler. Herhangi boyuta büyütülebilir.',
          desc_en: 'Images created using mathematical shapes. Can be enlarged to any size.',
          example: 'simge.svg, desen.svg',
          icon: '✨'
        }
      ]
    },
    {
      id: 3,
      category_tr: '🎵 Ses Dosyaları',
      category_en: '🎵 Audio Files',
      description_tr: 'Müzik, ses kaydı ve podcast dosyaları',
      description_en: 'Music, voice recording and podcast files',
      files: [
        {
          ext: '.mp3',
          name_tr: 'MP3 Ses',
          name_en: 'MP3 Audio',
          desc_tr: 'En yaygın ses formatı. Müzik ve podcast\'ler için idealdir. Dosya boyutu küçüktür.',
          desc_en: 'Most common audio format. Ideal for music and podcasts. Small file size.',
          example: 'şarkı.mp3, podcast.mp3',
          icon: '🎵'
        },
        {
          ext: '.wav',
          name_tr: 'WAV Ses',
          name_en: 'WAV Audio',
          desc_tr: 'Yüksek kaliteli ses formatı. Profesyonel müzik yapımında kullanılır. Dosya boyutu büyüktür.',
          desc_en: 'High quality audio format. Used in professional music production. Large file size.',
          example: 'kayıt.wav',
          icon: '🎙️'
        },
        {
          ext: '.flac',
          name_tr: 'FLAC Ses',
          name_en: 'FLAC Audio',
          desc_tr: 'Sıkıştırılmış ama kalite kaybı olmayan ses formatı. Müzik tutkunları tarafından tercih edilir.',
          desc_en: 'Compressed but lossless audio format. Preferred by music enthusiasts.',
          example: 'albüm.flac',
          icon: '🎼'
        },
        {
          ext: '.aac',
          name_tr: 'AAC Ses',
          name_en: 'AAC Audio',
          desc_tr: 'Modern ses formatı. Apple cihazlarında ve YouTube\'da kullanılır.',
          desc_en: 'Modern audio format. Used on Apple devices and YouTube.',
          example: 'müzik.aac',
          icon: '🎧'
        },
        {
          ext: '.m4a',
          name_tr: 'M4A Ses',
          name_en: 'M4A Audio',
          desc_tr: 'Apple iTunes ve iPod\'da kullanılan ses formatı.',
          desc_en: 'Audio format used in Apple iTunes and iPod.',
          example: 'itunes_şarkı.m4a',
          icon: '🎺'
        }
      ]
    },
    {
      id: 4,
      category_tr: '🎬 Video Dosyaları',
      category_en: '🎬 Video Files',
      description_tr: 'Film, video ve animasyon dosyaları',
      description_en: 'Movie, video and animation files',
      files: [
        {
          ext: '.mp4',
          name_tr: 'MP4 Video',
          name_en: 'MP4 Video',
          desc_tr: 'En yaygın video formatı. YouTube, TikTok ve çoğu platform\'da kullanılır.',
          desc_en: 'Most common video format. Used on YouTube, TikTok and most platforms.',
          example: 'video.mp4, film.mp4',
          icon: '🎥'
        },
        {
          ext: '.avi',
          name_tr: 'AVI Video',
          name_en: 'AVI Video',
          desc_tr: 'Eski video formatı. Dosya boyutu çok büyüktür ama kalite iyidir.',
          desc_en: 'Old video format. Very large file size but good quality.',
          example: 'eski_video.avi',
          icon: '📹'
        },
        {
          ext: '.mkv',
          name_tr: 'Matroska Video',
          name_en: 'Matroska Video',
          desc_tr: 'Esnek video formatı. Birden fazla ses ve altyazı içerebilir.',
          desc_en: 'Flexible video format. Can contain multiple audio and subtitles.',
          example: 'dizi.mkv',
          icon: '🎞️'
        },
        {
          ext: '.mov',
          name_tr: 'QuickTime Video',
          name_en: 'QuickTime Video',
          desc_tr: 'Apple cihazlarında kullanılan video formatı.',
          desc_en: 'Video format used on Apple devices.',
          example: 'iphone_video.mov',
          icon: '🍎'
        },
        {
          ext: '.webm',
          name_tr: 'WebM Video',
          name_en: 'WebM Video',
          desc_tr: 'Web için optimize edilmiş video formatı. İnternet üzerinde hızlı yüklenir.',
          desc_en: 'Video format optimized for web. Loads quickly over the internet.',
          example: 'web_video.webm',
          icon: '🌐'
        }
      ]
    },
    {
      id: 5,
      category_tr: '📊 Tablo ve Veri Dosyaları',
      category_en: '📊 Spreadsheet and Data Files',
      description_tr: 'Hesap tabloları, veriler ve istatistikler',
      description_en: 'Spreadsheets, data and statistics',
      files: [
        {
          ext: '.xls / .xlsx',
          name_tr: 'Excel Tablosu',
          name_en: 'Excel Spreadsheet',
          desc_tr: 'Microsoft Excel\'de oluşturulan hesap tabloları. Formüller, grafikler ve hesaplamalar yapabilir.',
          desc_en: 'Spreadsheets created in Microsoft Excel. Can do formulas, charts and calculations.',
          example: 'bütçe.xlsx, notlar.xls',
          icon: '📈'
        },
        {
          ext: '.ods',
          name_tr: 'OpenDocument Tablosu',
          name_en: 'OpenDocument Spreadsheet',
          desc_tr: 'Açık kaynak ofis uygulamalarında kullanılan tablo formatı.',
          desc_en: 'Spreadsheet format used in open source office applications.',
          example: 'veri.ods',
          icon: '📊'
        },
        {
          ext: '.csv',
          name_tr: 'Virgülle Ayrılmış Değerler',
          name_en: 'Comma-Separated Values',
          desc_tr: 'Basit veri formatı. Tüm programlar tarafından okunabilir. Veritabanı aktarımında kullanılır.',
          desc_en: 'Simple data format. Readable by all programs. Used for database transfer.',
          example: 'öğrenciler.csv',
          icon: '📋'
        },
        {
          ext: '.json',
          name_tr: 'JSON Veri',
          name_en: 'JSON Data',
          desc_tr: 'Web uygulamalarında veri taşımak için kullanılan format. Yapılandırılmış veriler içerir.',
          desc_en: 'Format used to transport data in web applications. Contains structured data.',
          example: 'ayarlar.json',
          icon: '🔧'
        }
      ]
    },
    {
      id: 6,
      category_tr: '🎨 Tasarım ve Grafik Dosyaları',
      category_en: '🎨 Design and Graphic Files',
      description_tr: 'Tasarım, grafik ve sanat dosyaları',
      description_en: 'Design, graphic and art files',
      files: [
        {
          ext: '.psd',
          name_tr: 'Photoshop Dosyası',
          name_en: 'Photoshop File',
          desc_tr: 'Adobe Photoshop\'ta oluşturulan dosya. Katmanlar ve efektler içerebilir.',
          desc_en: 'File created in Adobe Photoshop. Can contain layers and effects.',
          example: 'poster.psd',
          icon: '🎨'
        },
        {
          ext: '.ai',
          name_tr: 'Illustrator Dosyası',
          name_en: 'Illustrator File',
          desc_tr: 'Adobe Illustrator\'da oluşturulan vektör grafik dosyası.',
          desc_en: 'Vector graphic file created in Adobe Illustrator.',
          example: 'logo.ai',
          icon: '✏️'
        },
        {
          ext: '.figma',
          name_tr: 'Figma Tasarımı',
          name_en: 'Figma Design',
          desc_tr: 'Web tabanlı tasarım aracında oluşturulan dosya. İşbirliği için idealdir.',
          desc_en: 'File created in web-based design tool. Ideal for collaboration.',
          example: 'uygulama_tasarımı.figma',
          icon: '🖌️'
        }
      ]
    },
    {
      id: 7,
      category_tr: '📦 Sıkıştırılmış Dosyalar',
      category_en: '📦 Compressed Files',
      description_tr: 'Dosyaları sıkıştıran ve paketleyen dosyalar',
      description_en: 'Files that compress and package files',
      files: [
        {
          ext: '.zip',
          name_tr: 'ZIP Arşivi',
          name_en: 'ZIP Archive',
          desc_tr: 'Birden fazla dosyayı bir dosya haline getiren sıkıştırma formatı. Tüm bilgisayarlarda açılabilir.',
          desc_en: 'Compression format that combines multiple files. Can be opened on all computers.',
          example: 'projeler.zip',
          icon: '📦'
        },
        {
          ext: '.rar',
          name_tr: 'RAR Arşivi',
          name_en: 'RAR Archive',
          desc_tr: 'Güçlü sıkıştırma formatı. ZIP\'ten daha iyi sıkıştırır ama özel program gerekir.',
          desc_en: 'Powerful compression format. Compresses better than ZIP but requires special program.',
          example: 'dosyalar.rar',
          icon: '📫'
        },
        {
          ext: '.7z',
          name_tr: '7-Zip Arşivi',
          name_en: '7-Zip Archive',
          desc_tr: 'Çok iyi sıkıştırma oranı. Açık kaynak ve ücretsizdir.',
          desc_en: 'Very good compression ratio. Open source and free.',
          example: 'yedek.7z',
          icon: '📪'
        },
        {
          ext: '.tar / .gz',
          name_tr: 'TAR/GZIP Arşivi',
          name_en: 'TAR/GZIP Archive',
          desc_tr: 'Linux ve Unix sistemlerinde kullanılan sıkıştırma formatı.',
          desc_en: 'Compression format used on Linux and Unix systems.',
          example: 'yazılım.tar.gz',
          icon: '🐧'
        }
      ]
    },
    {
      id: 8,
      category_tr: '🌐 Web ve Kod Dosyaları',
      category_en: '🌐 Web and Code Files',
      description_tr: 'Web sayfaları ve programlama dosyaları',
      description_en: 'Web pages and programming files',
      files: [
        {
          ext: '.html',
          name_tr: 'HTML Web Sayfası',
          name_en: 'HTML Web Page',
          desc_tr: 'Web sayfalarının temelini oluşturan dosya. Tarayıcıda açılabilir.',
          desc_en: 'File that forms the basis of web pages. Can be opened in a browser.',
          example: 'index.html',
          icon: '🌐'
        },
        {
          ext: '.css',
          name_tr: 'CSS Stil Dosyası',
          name_en: 'CSS Style Sheet',
          desc_tr: 'Web sayfalarının görünümünü düzenleyen dosya. Renkler, yazı tipleri vb. ayarlar.',
          desc_en: 'File that controls the appearance of web pages. Sets colors, fonts, etc.',
          example: 'stil.css',
          icon: '🎨'
        },
        {
          ext: '.js',
          name_tr: 'JavaScript Kodu',
          name_en: 'JavaScript Code',
          desc_tr: 'Web sayfalarına etkileşim ekleyen programlama dili.',
          desc_en: 'Programming language that adds interactivity to web pages.',
          example: 'script.js',
          icon: '⚙️'
        },
        {
          ext: '.py',
          name_tr: 'Python Kodu',
          name_en: 'Python Code',
          desc_tr: 'Öğrenilmesi kolay, güçlü programlama dili. Yapay zeka ve veri analizi için kullanılır.',
          desc_en: 'Easy to learn, powerful programming language. Used for AI and data analysis.',
          example: 'program.py',
          icon: '🐍'
        },
        {
          ext: '.java',
          name_tr: 'Java Kodu',
          name_en: 'Java Code',
          desc_tr: 'Büyük uygulamalar için kullanılan programlama dili. Android uygulamaları yapılır.',
          desc_en: 'Programming language used for large applications. Android apps are made.',
          example: 'Uygulama.java',
          icon: '☕'
        }
      ]
    },
    {
      id: 9,
      category_tr: '🎓 Sunum ve Eğitim Dosyaları',
      category_en: '🎓 Presentation and Education Files',
      description_tr: 'Sunumlar, slaytlar ve eğitim materyalleri',
      description_en: 'Presentations, slides and educational materials',
      files: [
        {
          ext: '.ppt / .pptx',
          name_tr: 'PowerPoint Sunumu',
          name_en: 'PowerPoint Presentation',
          desc_tr: 'Microsoft PowerPoint\'te oluşturulan sunum dosyası. Slaytlar, resimler ve animasyonlar içerebilir.',
          desc_en: 'Presentation file created in Microsoft PowerPoint. Can contain slides, images and animations.',
          example: 'proje_sunumu.pptx',
          icon: '🎤'
        },
        {
          ext: '.odp',
          name_tr: 'OpenDocument Sunumu',
          name_en: 'OpenDocument Presentation',
          desc_tr: 'Açık kaynak ofis uygulamalarında kullanılan sunum formatı.',
          desc_en: 'Presentation format used in open source office applications.',
          example: 'sunum.odp',
          icon: '📽️'
        }
      ]
    },
    {
      id: 10,
      category_tr: '🔐 Yürütülebilir ve Sistem Dosyaları',
      category_en: '🔐 Executable and System Files',
      description_tr: 'Programlar ve sistem dosyaları (uyarı: dikkatli kullan)',
      description_en: 'Programs and system files (warning: use carefully)',
      files: [
        {
          ext: '.exe',
          name_tr: 'Windows Programı',
          name_en: 'Windows Program',
          desc_tr: 'Windows bilgisayarında çalışan program dosyası. Bilinmeyen .exe dosyaları açma!',
          desc_en: 'Program file that runs on Windows computers. Do not open unknown .exe files!',
          example: 'oyun.exe',
          icon: '⚠️'
        },
        {
          ext: '.msi',
          name_tr: 'Windows Yükleyici',
          name_en: 'Windows Installer',
          desc_tr: 'Windows programlarını yüklemek için kullanılan dosya.',
          desc_en: 'File used to install Windows programs.',
          example: 'yazılım_kurulum.msi',
          icon: '📥'
        },
        {
          ext: '.dmg',
          name_tr: 'Mac Yükleyici',
          name_en: 'Mac Installer',
          desc_tr: 'Apple bilgisayarlarında program yüklemek için kullanılan dosya.',
          desc_en: 'File used to install programs on Apple computers.',
          example: 'uygulama.dmg',
          icon: '🍎'
        },
        {
          ext: '.apk',
          name_tr: 'Android Uygulaması',
          name_en: 'Android Application',
          desc_tr: 'Android telefonlarda çalışan uygulama dosyası.',
          desc_en: 'Application file that runs on Android phones.',
          example: 'oyun.apk',
          icon: '📱'
        }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="section-content"
    >
      <h2>
        {isTurkish 
          ? '📁 Dosya Uzantıları ve Türleri - Kapsamlı Rehber' 
          : '📁 File Extensions and Types - Complete Guide'}
      </h2>

      <div className="section-intro">
        <p>
          {isTurkish
            ? 'Bilgisayarında gördüğün dosyaların sonunda noktadan sonra gelen kısım "dosya uzantısı" denir. Bu uzantı, dosyanın ne tür bilgi içerdiğini gösterir. Örneğin, "fotoğraf.jpg" dosyasında ".jpg" uzantısı bu dosyanın bir resim olduğunu söyler. Aşağıda en yaygın dosya türlerini ve bunların ne işe yaradığını öğreneceksin!'
            : 'The part that comes after the dot at the end of files you see on your computer is called a "file extension". This extension shows what type of information the file contains. For example, in the file "photo.jpg", the ".jpg" extension tells us that this file is a picture. Below you will learn about the most common file types and what they are used for!'}
        </p>
      </div>

      <div className="file-extensions-container">
        {fileCategories.map((category) => (
          <div key={category.id} className="file-category-card">
            <button
              className={`category-header ${expandedCategory === category.id ? 'expanded' : ''}`}
              onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
            >
              <span className="category-title">
                {isTurkish ? category.category_tr : category.category_en}
              </span>
              <span className="expand-icon">
                {expandedCategory === category.id ? '▼' : '▶'}
              </span>
            </button>

            <p className="category-description">
              {isTurkish ? category.description_tr : category.description_en}
            </p>

            {expandedCategory === category.id && (
              <div className="file-list">
                {category.files.map((file, idx) => (
                  <div key={idx} className="file-item">
                    <div className="file-header">
                      <span className="file-icon">{file.icon}</span>
                      <div className="file-info">
                        <span className="file-extension">{file.ext}</span>
                        <span className="file-name">
                          {isTurkish ? file.name_tr : file.name_en}
                        </span>
                      </div>
                    </div>
                    <p className="file-description">
                      {isTurkish ? file.desc_tr : file.desc_en}
                    </p>
                    <p className="file-example">
                      <strong>{isTurkish ? 'Örnek:' : 'Example:'}</strong> {file.example}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="important-box">
        <h3>⚠️ {isTurkish ? 'Önemli Uyarılar' : 'Important Warnings'}</h3>
        <ul>
          <li>
            {isTurkish
              ? '❌ Bilinmeyen .exe, .msi veya .apk dosyalarını açma! Virüs olabilir.'
              : '❌ Do not open unknown .exe, .msi or .apk files! They may be viruses.'}
          </li>
          <li>
            {isTurkish
              ? '❌ İnternet\'ten indirdiğin dosyaları açmadan önce virüs taraması yap.'
              : '❌ Scan files downloaded from the internet for viruses before opening them.'}
          </li>
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
        </ul>
      </div>

      <style jsx>{`
        .file-extensions-container {
          display: grid;
          gap: 1.5rem;
          margin: 2rem 0;
        }

        .file-category-card {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .file-category-card:hover {
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px);
        }

        .category-header {
          width: 100%;
          padding: 1.2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.1rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .category-header:hover {
          background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
        }

        .category-header.expanded {
          background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
        }

        .category-title {
          flex: 1;
          text-align: left;
        }

        .expand-icon {
          font-size: 0.8rem;
          transition: transform 0.3s ease;
        }

        .category-description {
          padding: 0.8rem 1.2rem;
          color: #333;
          margin: 0;
          font-size: 0.95rem;
          background: rgba(255, 255, 255, 0.7);
        }

        .file-list {
          padding: 1rem;
          background: white;
          display: grid;
          gap: 1rem;
        }

        .file-item {
          padding: 1rem;
          background: linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%);
          border-left: 4px solid #667eea;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .file-item:hover {
          background: linear-gradient(135deg, #e9ecef 0%, #f5f7fa 100%);
          transform: translateX(4px);
        }

        .file-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.8rem;
        }

        .file-icon {
          font-size: 2rem;
        }

        .file-info {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .file-extension {
          font-weight: 700;
          color: #667eea;
          font-size: 1.1rem;
          font-family: 'Courier New', monospace;
        }

        .file-name {
          color: #555;
          font-size: 0.95rem;
        }

        .file-description {
          margin: 0.5rem 0;
          color: #333;
          line-height: 1.5;
          font-size: 0.95rem;
        }

        .file-example {
          margin: 0.5rem 0 0 0;
          color: #666;
          font-size: 0.9rem;
          font-style: italic;
        }

        .important-box {
          background: linear-gradient(135deg, #fff5e6 0%, #ffe6cc 100%);
          border-left: 5px solid #ff9800;
          padding: 1.5rem;
          border-radius: 8px;
          margin-top: 2rem;
        }

        .important-box h3 {
          margin-top: 0;
          color: #e65100;
        }

        .important-box ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .important-box li {
          padding: 0.8rem 0;
          color: #333;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .category-header {
            font-size: 1rem;
          }

          .file-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .file-icon {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default FileExtensionsSection;
