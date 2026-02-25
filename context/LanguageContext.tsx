import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Set direction on body for RTL support (Arabic)
    document.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Set Font Class
    const body = document.body;
    body.classList.remove('font-sans', 'font-zh', 'font-ar');
    if (language === 'zh') body.classList.add('font-zh');
    else if (language === 'ar') body.classList.add('font-ar');
    else body.classList.add('font-sans');

  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
    dir: language === 'ar' ? 'rtl' : 'ltr' as 'ltr' | 'rtl'
  };

  return (
    <LanguageContext.Provider value={value}>
      <div dir={value.dir} className={language === 'ar' ? 'font-ar' : language === 'zh' ? 'font-zh' : 'font-sans'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};