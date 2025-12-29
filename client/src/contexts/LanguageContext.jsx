import React, { createContext, useState, useContext } from 'react';
import module2_tr from '../content/module2_lang_tr';
import module2_en from '../content/module2_lang_en';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('tr');

  const translations = {
    tr: {
      module2: module2_tr
    },
    en: {
      module2: module2_en
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'tr' ? 'en' : 'tr');
  };

  const isTurkish = language === 'tr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, isTurkish, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
