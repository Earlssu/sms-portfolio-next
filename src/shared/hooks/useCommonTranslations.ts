import { useTranslation } from "react-i18next";

export function useCommonTranslations() {
  const { t } = useTranslation();

  return {
    hero: t("hero"),
    heroDesc01: t("heroDesc01"),
    heroDesc02: t("heroDesc02"),
    typeText: t("typeText"),
    about: t("about"),
    career: t("career"),
    skills: t("skills"),
    contact: t("contact"),
  };
}
