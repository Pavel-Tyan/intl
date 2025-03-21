import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        one: "У вас {{count}} непрочитанное сообщение",
        few: "У вас {{count}} непрочитанных сообщения",
        many: "У вас {{count}} непрочитанных сообщений",
      },
    },
  },
  lng: "ru", // Язык по умолчанию
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
