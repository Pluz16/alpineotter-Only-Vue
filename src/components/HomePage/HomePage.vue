<template id="top">
    <div class="home-page">
      <FirstHero />
      <AppParadise />
      <AppNews/>
      <AppOwns />
      <AppReception />
      <AppEtica />
      <AppSlider />
      <AppLab/>
      <!-- Aggiungi altri componenti della homepage -->
    </div>
  </template>
  
  <script>
  import FirstHero from '@/components/HomePage/FirstHero.vue';
  import AppParadise from '@/components/HomePage/AppParadise';
  import AppNews from '@/components/HomePage/AppNews.vue';
  import AppOwns from '@/components/HomePage/AppOwns.vue';
  import AppReception from '@/components/HomePage/AppReception.vue';
  import AppEtica from '@/components/HomePage/AppEtica.vue';
  import AppSlider from '@/components/HomePage/AppSlider.vue';
  import AppLab from '@/components/HomePage/AppLab.vue';
  
  
  export default {
    name: 'HomePage',
    components: {
      FirstHero,
      AppNews,
      AppParadise,
      AppOwns,
      AppReception,
      AppSlider,
      AppEtica,
      AppLab,
      // Aggiungi altri componenti della homepage
    },
  };
  </script>
  
  <style scoped>
  /* .home-page {
    /* Stili per la homepage */
  /* } */
  </style>
  