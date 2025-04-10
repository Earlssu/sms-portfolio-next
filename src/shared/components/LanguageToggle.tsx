"use client";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: "en" | "ko") => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-4">
      <button onClick={() => changeLanguage("ko")}>🇰🇷 한국어</button>
      <button onClick={() => changeLanguage("en")}>🇺🇸 English</button>
    </div>
  );
};

export default LanguageToggle;
