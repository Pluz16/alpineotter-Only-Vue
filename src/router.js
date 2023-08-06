import { createRouter, createWebHistory } from 'vue-router';

import Allevamento from '@/views/Allevamento-Page.vue';
import HomePage from '@/components/HomePage/HomePage.vue'
import Pensione from '@/views/Pensione-Page.vue';
import ContattaciPage from '@/views/Contattaci-Page.vue'
import AboutUs from '@/views/AboutUs-Page.vue'
import Cookie from '@/views/Cookie-Policy.vue'
import Privacy from '@/views/Privacy-Policy.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },

  {
    path: '/allevamento',
    name: 'Allevamento',
    component: Allevamento,
  },

  {
    path: '/pensione',
    exact: true,
    component: Pensione, // Usa il componente "Pensione" per questa rotta
  },
  


  {
    path: '/contattaci',
    name: 'Contattaci',
    component: ContattaciPage,
  },

  {
    path: '/chi-siamo',
    name: 'Chi siamo',
    component: AboutUs,
  },

  { path: '/chi-siamo#ethics-section', 
  component: AboutUs },

  {
    path: '/cookies',
    name: 'Cookie Policy',
    component: Cookie,
  },
  {
    path: '/privacy',
    name: 'Privacy Policy',
    component: Privacy,
  },

  


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
