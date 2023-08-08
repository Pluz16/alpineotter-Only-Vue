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




export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
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
