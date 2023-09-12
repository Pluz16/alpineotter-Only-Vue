<template >
    <div class="news">
        <br>
    <h3>Ultimi 2 cuccioli disponibili!</h3>
    <div>
        <p>Sono disponibili gli ultimi cuccioli di Labrador Retriever di altissima genealogia! Sono nati il 18 Luglio 2023 ed è una cucciolata di 6 labrador beige.</p>
    </div>
    <section class="info-section">
    <div class="info-content">
      <router-link to="/contattaci" class="info-button">Contattaci!</router-link>
    </div>
  </section>
    <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="@/assets/copertina-cucciolata.jpg" class="d-block w-100" alt="Cucciolata Labrador Retrievers Gialli Allevamento Alpine Otter e Allevamento del Re di Pietra">
    </div>
    <div class="carousel-item">
      <img src="@/assets/PUPPY-1.jpg" class="d-block w-100" alt="Cucciolo Labrador Beige ">
    </div>
    <div class="carousel-item">
      <img src="@/assets/PUPPY-3.jpg" class="d-block w-100" alt="Cucciolo Labrador Miele">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden"></span>
  </button>
</div>
</div>
</template>

<script setup>

</script>

<style scoped>
.news{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

h3{
    background-color: antiquewhite;
}
.slide{
    max-width: 300px;
    margin-top: 20px;
}


    .info-button {
  font-size: 20px;
  padding: 15px 40px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
</style>