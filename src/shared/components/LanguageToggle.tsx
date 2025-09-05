'use client';
import { useTranslation } from 'react-i18next';
import { useBackgroundStore } from '@/shared/stores';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const { isDarkMode } = useBackgroundStore();

  const changeLanguage = (lng: 'en' | 'ko') => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage('ko')}
        className={`px-3 py-1 text-sm rounded transition-colors ${
          isDarkMode
            ? 'text-white hover:bg-white/20 hover:text-white'
            : 'text-gray-700 hover:bg-gray-100 hover:text-black'
        }`}
      >
        🇰🇷 한국어
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 text-sm rounded transition-colors ${
          isDarkMode
            ? 'text-white hover:bg-white/20 hover:text-white'
            : 'text-gray-700 hover:bg-gray-100 hover:text-black'
        }`}
      >
        🇺🇸 English
      </button>
    </div>
  );
};

export default LanguageToggle;
