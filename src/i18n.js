import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import Languagedetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next'


i18n.use(Backend).use(Languagedetector).use(initReactI18next).init({
    backend: {
        loadPath: "assets/i18n/{{ns}}/{{lng}}.json",

    },
    fallbackLng: "Englis",
    debug: false,
    ns: ["home"],

    interpolation: {
        escapeValue: false,
        formatSeparator: ','
    },

    react: {
        wait: true
    },

});

export default i18n

