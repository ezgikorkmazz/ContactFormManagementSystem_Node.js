import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import trTranslation from "./locales/tr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    tr: {
      translation: trTranslation,
    },
  },
  lng: localStorage.getItem("language") || "en", // Get language from local storage or default to English
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes, so no need to escape again
  },
});

export default i18n;
