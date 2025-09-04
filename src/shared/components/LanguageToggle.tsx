'use client';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'en' | 'ko') => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage('ko')}
        className="px-3 py-1 text-sm hover:bg-gray-100 hover:text-black rounded transition-colors"
      >
        🇰🇷 한국어
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className="px-3 py-1 text-sm hover:bg-gray-100 hover:text-black rounded transition-colors"
      >
        🇺🇸 English
      </button>
    </div>
  );
};

export default LanguageToggle;
