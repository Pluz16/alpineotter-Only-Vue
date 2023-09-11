<template>

<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="@/assets/cucciolopeluche.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="@/assets/Ulisse5.jpg" class="d-block w-100" alt="Ulisse">
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="@/assets/Mira_water.jpg" class="d-block w-100" alt="Ulisse">
    </div>
    <div class="carousel-item">
      <img src="@/assets/work23.jpg" class="d-block w-100" alt="Work">
    </div>
    <div class="carousel-item">
      <img src="@/assets/Love.jpg" class="d-block w-100" alt="Work">
    </div>
    <div class="carousel-item">
      <img src="@/assets/Magda.jpg" class="d-block w-100" alt="Work">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</template>

<style scoped>

.carousel {
  position: relative;
  margin: 20px 0;
  overflow: hidden;
  border-radius: 10px;
}

.carousel-inner {
  display: flex;
  transition: transform 0.3s ease-in-out;
}

.carousel-item {
  flex: 0 0 100%;
  height: 300px; /* Imposta l'altezza desiderata del carousel */
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  outline: none;
}

.carousel-control-prev {
  left: 10px;
}

.carousel-control-next {
  right: 10px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 20px;
  height: 20px;
}

.visually-hidden {
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
}

/* Responsive styles */
@media (max-width: 768px) {
  .carousel-item {
    height: 200px;
  }
}

@media (max-width: 576px) {
  .carousel-item {
    height: 150px;
  }
}

</style>