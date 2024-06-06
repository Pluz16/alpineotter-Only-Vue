<template>
  <div class="news">
    <br>
    <h2>Foto dell'ultima cucciolata di Labrador Chocolate e Neri</h2>
    <div>
      <p>
        Ricordiamo che il nostro allevamento vuole mantenere il massimo standard
        possibile in ottica di certificazioni e genealogia della razza.
      </p>
    </div>
    <section class="info-section">
      <div class="info-content">
        <router-link to="/contattaci" class="info-button">Riserva i prossimi!</router-link>
      </div>
    </section>
    <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="@/assets/Lilyth.jpg"
            class="d-block w-100"
            alt="Cucciolata Labrador Retrievers Gialli Allevamento Alpine Otter e Allevamento del Re di Pietra"
          />
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/Tex5.jpg"
            class="d-block w-100"
            alt="Cucciolo Labrador Retriever Beige "
          />
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/Lilyth6.jpg"
            class="d-block w-100"
            alt="Cucciolo Labrador Retriever Miele"
          />
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/Tex6.jpg"
            class="d-block w-100"
            alt="Cucciolo Labrador Retriever Giallo"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden"></span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden"></span>
      </button>
    </div>

    <!-- Nuova sezione -->
    <section class="marge-section">
      <h3>Marge è in dolce attesa di fantastici cuccioli di Labrador con le migliori certificazioni</h3>
      <img src="@/assets/marge.jpg" alt="Marge in dolce attesa" class="marge-image"/>
    </section>
  </div>
</template>


<script setup>

</script>

<style scoped>
.news {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.carousel-item img {
  border-radius: 10px;
}

h2 {
  text-decoration: dashed;
  font-size: 22px;
}

.slide {
  max-width: 300px;
  margin-top: 20px;
}

.info-button {
  font-size: 16px;
  padding: 15px 30px;
  background-color: #81a5eb;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

/* Stili per la nuova sezione */
.marge-section {
  margin-top: 40px;
  text-align: center;
}

.marge-section h3 {
  font-size: 24px;
  margin-bottom: 20px;
}

.marge-section img {
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
}
</style>