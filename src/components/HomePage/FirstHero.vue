<template>
  <div class="first-hero">
    <div class="background-image"></div>
    <div class="content">
      <div class="text">
        <div class="left" @click="goToAllevamento">
          <a href="/allevamento#top"><h2>ALLEVAMENTO LABRADOR</h2></a>
        </div>
        <div class="right" @click="goToPensione">
          <a href="/pensione#top"><h2>PENSIONE + SERVIZI</h2></a>
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
  height: 400px;
  max-width: 100%;
  margin: 0 auto; /* Aggiunto per centrare il contenuto */
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
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 20px;
  padding: 0 10px; /* Aggiungi questa riga */
}

.left,
.right {
  cursor: pointer;
  padding: 10px 20px;
  /* max-width: 360px; */
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left {
  border-radius: 75px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  background-color: #f0a6a6;
}

.right {
  border-radius: 75px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: #81a5eb;
}

.left:hover,
.right:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.left h2,
.right h2 {
  font-size: 24px;
  text-align: center;
}

@media (max-width: 767px) {
  .left,
  .right {
    max-width: 100%;
  }


  .right{
    margin-right: 10px;
  }

  .left{
    margin-left: 10px;
  }

  .left,
  .right,
  .left h2,
  .right h2 {
    font-size: 1rem;
  }
}

.left a,
.right a{
  color: aliceblue;
}
</style>
