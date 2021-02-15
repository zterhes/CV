import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../i18n/en.json";
import hu from "../i18n/hu.json";

const resources = { en, hu};

Object.keys(resources)
  .forEach(key => resources[key] = { translation: resources[key] })

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  keySeparator: ".",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;