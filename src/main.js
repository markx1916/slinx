import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createI18n } from 'vue-i18n'
import en from './i18n/en.json'
import zh from './i18n/zh.json'
import 'bootstrap/dist/css/bootstrap.min.css' // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // Import Bootstrap JS

const i18n = createI18n({
  legacy: false, // must set to false for Vue 3 Composition API
  locale: 'zh', // set default locale
  fallbackLocale: 'en', // set fallback locale
  messages: {
    en,
    zh
  }
});

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.use(i18n);

app.mount('#app');

