<template>
  <div class="first-hero">
    <div class="background-image"></div>
    <div class="content">
      <div class="text">
        <div class="left" @click="goToAllevamento">
          <a href="/allevamento#top"><h2>ALLEVAMENTO LABRADOR</h2></a>
        </div>
        <div class="right" @click="goToPensione">
          <a href="/pensione#top"><h2>PENSIONE PER CANI</h2></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstHero',
  methods: {
    goToAllevamento() {
      this.$router.push('/allevamento');
    },
    goToPensione() {
      this.$router.push('/pensione');
    },
  },
};
</script>

<style scoped>
.first-hero {
  position: relative;
  min-height: 150px;
  max-width: 100%;
  margin: 0 auto;
  overflow: hidden; /* Aggiunta per gestire l'overflow dell'immagine */
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(@/assets/cicc2.jpg);
  background-size: cover;
  background-position: center;
}

.content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 1;
  max-width: 100%;
}

.text {
  display: flex;
  flex-direction: column; /* Modificato da row a column per una migliore impilamento su dispositivi mobili */
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 20px;
  font-weight: 800;
  padding: 0 10px;
  width: 100%;
}

.left,
.right {
  cursor: pointer;
  padding: 10px 20px;
  width: 48%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px; /* Aggiunta spaziatura tra i pulsanti */
}

.left {
  /* border-radius: 75px; */
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  background-color: #f0a6a64f;
}

.right {
  /* border-radius: 75px; */
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: #81a4eb6f;
}

.left:hover,
.right:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.left:hover h2,
.right:hover h2 {
  color: #fff;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.699);
}

.left h2,
.right h2 {
  font-size: 24px;
  text-align: center;
  transition: color 0.3s, text-shadow 0.3s;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.983);
}

@media (max-width: 767px) {
  .left,
  .right {
    width: 100%;
    margin-bottom: 10px;
  }

  .left,
  .right {
    margin-top: 10px; /* Aggiunta spaziatura tra i pulsanti su dispositivi mobili */
  }

  .right {
    margin-right: 0;
  }

  .left {
    margin-left: 0;
  }

  .left,
  .right,
  .left h2,
  .right h2 {
    font-size: 1rem;
  }
}

.left a,
.right a {
  color: aliceblue;
}
</style>
