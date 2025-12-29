import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * LanguageSwitcher - Dil Değiştirme Butonu
 * Sağ üst köşede Türkçe/İngilizce geçişi sağlar
 */

const LanguageSwitcher = () => {
  const { isTurkish, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className="language-switcher"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={isTurkish ? 'İngilizceye Geç' : 'Türkçeye Geç'}
    >
      <span className="flag">{isTurkish ? '🇹🇷' : '🇬🇧'}</span>
    </motion.button>
  );
};

export default LanguageSwitcher;

const styles = `
  .language-switcher {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 10px 16px;
    border-radius: 50px;
    cursor: pointer;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    transition: all 0.3s ease;
    font-size: 1rem;
  }

  .language-switcher:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
  }

  .language-switcher:active {
    transform: translateY(0);
  }

  .language-switcher .flag {
    font-size: 1.3rem;
  }

  .language-switcher .text {
    font-size: 0.9rem;
    letter-spacing: 1px;
  }

  @media (max-width: 768px) {
    .language-switcher {
      padding: 8px 12px;
      font-size: 0.85rem;
      top: 10px;
      right: 10px;
    }

    .language-switcher .flag {
      font-size: 1.1rem;
    }

    .language-switcher .text {
      font-size: 0.8rem;
    }
  }
`;
