<template>
  <div id="app" class="app-container">
    <AppHeader  class="app-header"/>
    <div class="app-content">
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import { useHead } from '@vueuse/head';
import { computed, reactive } from 'vue';

// Definisci dataLayer come variabile globale
window.dataLayer = window.dataLayer || [];

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
  setup() {
    const siteData = reactive({
      title: 'Pensione Megan & Co e Allevamento Labrador Alpine otter',
      description: 'Allevamento di Labrador Retrievers, vendita cuccioli Labrador e pensione canina. Situato in Piemonte al confine con la Valle &#39 Aosta, vicino a Lombardia e Liguria',
    });
    useHead({
      title: computed(() => siteData.title),
      meta: [
        {
          name: 'description',
          content: computed(() => siteData.description),
        },
      ],
    });

    // Aggiungi il markup schema JSON-LD per il logo
    const logoSchema = {
      "@context": "http://schema.org",
      "@type": "Website",
      "name": "Allevamento Labrador Alpine otter e Pensione per cani",
      "url": "https://www.alpineotter.com",
      "logo": "https://www.alpineotter.com/img/logodef.ad62acbc.jpg"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(logoSchema);
    document.head.appendChild(script);

    
  },
};
</script>

<style scoped>
.app-container {
  font-family: 'Headland One', sans-serif;
  background: linear-gradient(180deg, #75B96A 8.85%, rgba(178, 248, 214, 0.00) 100%);
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}

.app-content{
  flex-grow: 1;
  height: 100%;
}

.app-header {
  top: 0;
  background-color: #75B96A; /* Colore di sfondo dell'header */
  z-index: 9999;
}


@media (max-width: 768px) {
  .content {
    padding: 10px;
  }
}
</style>
