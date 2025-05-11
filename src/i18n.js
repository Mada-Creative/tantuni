import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // لكشف اللغة المفضلة للمتصفح
  .use(initReactI18next) // تكامل مع React
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to our website!",
          back: "Back",
          changeLanguage: "Change Language",
        },
      },
      ar: {
        translation: {
          welcome: "مرحبًا بك في موقعنا!",
          back: "العودة",
          changeLanguage: "تغيير اللغة",
        },
      },
      he: {
        translation: {
          welcome: "ברוך הבא לאתר שלנו!",
          back: "חזור",
          changeLanguage: "שנה שפה",
        },
      },
    },
    fallbackLng: "en", // اللغة الافتراضية عند عدم توفر ترجمة
    interpolation: {
      escapeValue: false, // مطلوب لـ React
    },
  });

export default i18n;
