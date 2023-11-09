import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@/global.css';
import { createHead } from '@vueuse/head';
const head = createHead()

window.dataLayer = window.dataLayer || [];

createApp(App)
  .use(head)
  .use(router)
  .mount('#app');
