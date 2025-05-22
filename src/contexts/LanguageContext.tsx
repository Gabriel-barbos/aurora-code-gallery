
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Locale } from '../utils/translations';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale') as Locale;
      if (savedLocale && (savedLocale === 'en' || savedLocale === 'pt')) {
        return savedLocale;
      }
      const browserLang = navigator.language.split('-')[0];
      return browserLang === 'pt' ? 'pt' : 'en';
    }
    return 'en';
  });

  const t = (key: string): string => {
    const keys = key.split('.');
    let translation: any = translations[locale];
    
    for (const k of keys) {
      if (!translation[k]) return key;
      translation = translation[k];
    }
    
    return translation as string;
  };

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
