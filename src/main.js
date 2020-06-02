import Vue from "vue";
import App from "./App.vue";
import {i18n} from './plugins/i18n';
import FlagIcon from 'vue-flag-icon';
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Vuelidate from 'vuelidate'
import './assets/scss/style.scss'
import './assets/scss/media.scss'
import VImageInput from 'vuetify-image-input';

Vue.component('VImageInput', VImageInput);

Vue.use(Vuelidate)
Vue.use(FlagIcon)
Vue.config.productionTip = false;
new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
