<template>
  <div class="app-owns">
    <h2 class="title">I NOSTRI CANI</h2>
    <div class="slider-container">
      <div class="row">
        <div v-for="dog in dogs" :key="dog.id" class="col-md-2 col-sm-4">
          <a href="/allevamento#dog-list" class="dog-card">
            <div class="dog-image">
              <div class="circle-container">
                <img :src="require(`@/assets/${dog.photo}`)" alt="Foto del cane" class="rounded-circle" />
              </div>
              <div class="overlay">
                <span class="overlay-text">Scopri di più</span>
              </div>
            </div>
            <h3 class="dog-name">{{ dog.name }}</h3>
          </a>
        </div>
      </div>
    </div>

    <!-- Accordion per vista mobile -->
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            Clicca per l'elenco
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <div class="row">
              <div v-for="dog in dogs" :key="dog.id" class="col-6">
                <router-link to="/allevamento#dog-list" class="dog-card">
                  <div class="dog-image">
                    <div class="circle-container">
                      <img :src="require(`@/assets/${dog.photo}`)" alt="Foto del cane" class="rounded-circle" />
                    </div>
                    <div class="overlay">
                      <span class="overlay-text">Scopri di più</span>
                    </div>
                  </div>
                  <h3 class="dog-name">{{ dog.name }}</h3>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dogs: [
        { id: 1, name: 'Mira', photo: 'Mira_head.jpg' },
        { id: 2, name: 'Magda', photo: 'Magda_head.jpg' },
        { id: 3, name: 'Cuba', photo: 'Cuba_head.jpg' },
        { id: 4, name: 'Webby', photo: 'Webby_head.jpg' },
        { id: 5, name: 'Megan', photo: 'Meg_head.jpg' },
      ],
    };
  },
};
</script>

<style scoped>
.app-owns {
  text-align: center;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
  margin-top: 16px;
}

.slider-container {
  background-color: #F0A6A6;
  padding: 20px;
}

.dog-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
}

.dog-image {
  position: relative;
}

.circle-container {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.dog-card:hover .overlay {
  opacity: 1;
}

.overlay-text {
  color: white;
  font-weight: bold;
  font-size: 16px;
}

.dog-name {
  font-size: 18px;
}

/* Nascondi l'accordion in vista desktop */
@media (min-width: 768px) {
  .accordion {
    display: none;
  }
  
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .col-md-2 {
    flex: 0 0 calc(20% - 10px);
    margin: 5px;
  }

  .circle-container {
    width: 100px;
    height: 100px;
  }
}

/* Modifiche per vista mobile nell'accordion */
@media (max-width: 767px) {
  .row {
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000;
  }

  .slider-container {
    display: none;
  }
  
  .dog-card {
    flex: 0 0 100%;
    color: #000;
  }

  
  .accordion {
    display: block;
    margin-top: 20px;
  }
  
  .accordion-item {
    margin-bottom: 20px;
  }
  
  .accordion-body {
    display: none;
    background-color: #F0A6A6;
  }
  
  .accordion-button {
    background-color: #F0A6A6;
    color: #000;
    border: none;
    border-radius: 0;
    padding: 10px 15px;
    font-size: 18px;
    text-align: left;
    width: 100%;
  }
  
  .accordion-button::after {
    float: right;
    margin-top: 6px;
  }
  
  .accordion-collapse.show .accordion-body {
    display: block;
  }

  .col-6 {
    flex: 0 0 calc(50% - 10px);
    margin: 5px;
  }

  .circle-container {
    width: 100px;
    height: 100px;
  }
}
</style>
