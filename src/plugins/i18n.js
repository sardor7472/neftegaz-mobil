import Vue from "vue";
import VueI18n from "vue-i18n";
import Eng from "../langs/en";
import Рус from "../langs/ru";
import Uzb from "../langs/uz";
Vue.use(VueI18n);

export const i18n = new VueI18n({
    locale: "uz",
    fallbackLocale: "uz",
    messages: {
        uz: Uzb,
        en: Eng,
        ru: Рус
    }
});
