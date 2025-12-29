import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Styles imported in index.css

const hardwareData = {
  internal: [
    {
      id: 'cpu',
      title_tr: 'İşlemci (CPU)',
      title_en: 'Processor (CPU)',
      desc_tr: 'Bilgisayarın beynidir. Tüm işlemleri yapar, hesaplar ve diğer parçaları yönetir.',
      desc_en: 'The brain of the computer. It performs all calculations and manages other components.',
      image: '/images/hardware_cpu.png'
    },
    {
      id: 'ram',
      title_tr: 'RAM Bellek',
      title_en: 'RAM Memory',
      desc_tr: 'Geçici hafızadır. Bilgisayar açıkken bilgileri tutar, kapanınca silinir. Hızlı çalışmayı sağlar.',
      desc_en: 'Temporary memory. Holds data while computer is on, cleared when off. Ensures fast operation.',
      image: '/images/hardware_ram.png'
    },
    {
      id: 'motherboard',
      title_tr: 'Anakart',
      title_en: 'Motherboard',
      desc_tr: 'Tüm parçaların takıldığı ana devredir. Parçalar arası iletişimi sağlar.',
      desc_en: 'The main circuit board where all components connect. Enables communication between parts.',
      image: '/images/hardware_motherboard.png'
    },
    {
      id: 'hdd',
      title_tr: 'Sabit Disk (HDD/SSD)',
      title_en: 'Hard Drive (HDD/SSD)',
      desc_tr: 'Kalıcı hafızadır. Dosyalarınızı, fotoğraflarınızı ve oyunlarınızı burada saklarsınız.',
      desc_en: 'Permanent storage. Where you save your files, photos, and games.',
      image: '/images/hardware_hdd.png'
    },
    {
      id: 'gpu',
      title_tr: 'Ekran Kartı (GPU)',
      title_en: 'Graphics Card (GPU)',
      desc_tr: 'Görüntüleri oluşturur ve ekrana gönderir. Oyunlar için çok önemlidir.',
      desc_en: 'Renders images and sends them to the display. Crucial for gaming.',
      image: '/images/hardware_gpu.png'
    }
  ],
  external: [
    {
      id: 'monitor',
      title_tr: 'Ekran (Monitör)',
      title_en: 'Monitor',
      desc_tr: 'Bilgisayarın ne yaptığını görmemizi sağlar.',
      desc_en: 'Allows us to see what the computer is doing.',
      image: '/images/hardware_monitor.png'
    },
    {
      id: 'keyboard',
      title_tr: 'Klavye',
      title_en: 'Keyboard',
      desc_tr: 'Yazı yazmamızı ve komut vermemizi sağlar.',
      desc_en: 'Allows us to type and give commands.',
      image: '/images/hardware_keyboard.png'
    },
    {
      id: 'mouse',
      title_tr: 'Fare (Mouse)',
      title_en: 'Mouse',
      desc_tr: 'Ekrandaki imleci hareket ettirerek seçim yapmamızı sağlar.',
      desc_en: 'Allows us to move the cursor and make selections.',
      image: '/images/hardware_mouse.png'
    },
    {
      id: 'printer',
      title_tr: 'Yazıcı',
      title_en: 'Printer',
      desc_tr: 'Bilgisayardaki yazı ve resimleri kağıda döker.',
      desc_en: 'Prints text and images from the computer onto paper.',
      image: '/images/hardware_printer.png'
    },
    {
      id: 'headphones',
      title_tr: 'Kulaklık',
      title_en: 'Headphones',
      desc_tr: 'Sesleri sadece bizim duyabileceğimiz şekilde dinlememizi sağlar.',
      desc_en: 'Allows us to listen to audio privately.',
      image: '/images/hardware_headphones.png'
    }
  ]
};

const HardwareGallery = ({ isTurkish }) => {
  const [activeTab, setActiveTab] = useState('internal');

  return (
    <div className="hardware-gallery">
      <div className="gallery-tabs">
        <button 
          className={`tab-btn ${activeTab === 'internal' ? 'active' : ''}`}
          onClick={() => setActiveTab('internal')}
        >
          {isTurkish ? 'İç Donanım' : 'Internal Hardware'}
        </button>
        <button 
          className={`tab-btn ${activeTab === 'external' ? 'active' : ''}`}
          onClick={() => setActiveTab('external')}
        >
          {isTurkish ? 'Dış Donanım' : 'External Hardware'}
        </button>
      </div>

      <motion.div 
        className="gallery-grid"
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {hardwareData[activeTab].map((item) => (
          <motion.div 
            key={item.id} 
            className="hardware-card"
            whileHover={{ scale: 1.03 }}
          >
            <div className="card-image-container">
              <img src={item.image} alt={isTurkish ? item.title_tr : item.title_en} />
            </div>
            <div className="card-content">
              <h3>{isTurkish ? item.title_tr : item.title_en}</h3>
              <p>{isTurkish ? item.desc_tr : item.desc_en}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HardwareGallery;
