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
    meta : {
      title: 'Megan & Co'
    }
  },

  {
    path: '/allevamento',
    name: 'Allevamento',
    component: Allevamento,
    meta : {
      title: 'Allevamento Labrador Retrievers'
    }
  },

  {
    path: '/pensione',
    exact: true,
    component: Pensione, // Usa il componente "Pensione" per questa rotta
    meta : {
      title: 'Pensione per cani'
    }
  },
  


  {
    path: '/contattaci',
    name: 'Contattaci',
    component: ContattaciPage,
    meta : {
      title: 'Contatti'
    }
  },

  {
    path: '/chi-siamo',
    name: 'Chi siamo',
    component: AboutUs,
    meta : {
      title: 'About us'
    }
  },

  { path: '/chi-siamo#ethics-section', 
  component: AboutUs },

  {
    path: '/cookies',
    name: 'Cookie Policy',
    component: Cookie,
    meta : {
      title: 'Cookie Policy'
    }
  },
  {
    path: '/privacy',
    name: 'Privacy Policy',
    component: Privacy,
    meta : {
      title: 'Privacy Policy'
    }
  },

  


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
