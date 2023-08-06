<template>
  <footer class="app-footer">
    <div class="footer-left">
      <div class="useful-section">
        <div class="section-title">Sezioni utili</div>
          <div class="useful-links router-link">
    <!-- Aggiungi il metodo @click per gestire l'evento di click -->
    <router-link @click="scrollToBreed" to="/allevamento#breed" class="router-link">Allevamento Labrador Retriever</router-link>
    <router-link @click="scrollToPuppy" to="/allevamento#puppy" class="router-link">Cuccioli Labrador Retriever</router-link>
    <router-link to="/pensione" class="router-link">Pensione e Villaggio Vacanze</router-link>
        </div>
      </div>
      <div class="horizontal-links ">
        <router-link to="/blog" class="router-link">BLOG</router-link>
        <router-link to="/pensione" class="router-link">Servizi</router-link>
        <router-link to="/chi-siamo" class="router-link">Etica</router-link>
      </div>
    </div>
    <div class="footer-center">
      <h3 class="company-title">Megan & Co</h3>
      <p class="owner-name">di Manuel Punta</p>
      <p class="footer-info">
        Indirizzo: Settimo Vittone (TO) Via Montiglie 18<br />
        IVA: 12427530014<br />
        Tel: +39 3421032437<br />
        <a href="https://www.facebook.com/alpineotter">https://www.facebook.com/alpineotter</a>
      </p>
      <router-link to="/cookies" class="router-link">Cookies</router-link><router-link to="/privacy" class="router-link">Privacy</router-link>
    </div>
    <div class="footer-right">
      <img src="../assets/enci.png" alt="ENCI" class="sponsor-image" />
      <img src="../assets/fci.png" alt="FCI" class="sponsor-image" />
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    // Metodo per scrollare alla sezione #breed
    scrollToBreed() {
      const element = document.getElementById("breed");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    // Metodo per scrollare alla sezione #puppy
    scrollToPuppy() {
      const element = document.getElementById("puppy");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>
In questo modo, quando clicchi sui link "Allevamento Labrador Retriever" e "Cuccioli Labrador Retriever", verrà eseguito il metodo corrispondente (scrollToBreed e scrollToPuppy) e la pagina scrollerà automaticamente alla sezione desiderata con un effetto di scorrimento fluido (behavior: "smooth"). Assicurati che gli ID breed e puppy siano correttamente definiti nelle sezioni corrispondenti nella pagina allevamento.







<style scoped>
.app-footer {
  color: #000;
  font-family: HeadlandOne;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  flex-direction: column;
  background: #3FA273;
  padding: 40px;
  text-align: center;
}

.footer-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

}

.useful-section {
  width: 75%;
  display: flex;
  flex-direction: column;
}

.section-title {
  color: #000;
  font-size: 32px;
  /* margin-bottom: 20px; */
}

.useful-links {
  color: #000; 
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.horizontal-links {
  display: flex;
  color: #000;
  font-size: 24px;
  justify-content: space-between;
  margin-top: 40px;
  gap: 10px;
}


.footer-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
}

.company-title {
  color: #000;
  font-size: 32px;
  margin-bottom: 10px;
}

.owner-name {
  color: #000;
  font-size: 20px;
  margin-bottom: 10px;
}

.footer-info {
  color: #000;
  font-size: 20px;
  margin-bottom: 10px;
}

.footer-info a {
  color: #000 !important; 
}

.footer-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.sponsor-image {
  width: 150px;
  height: auto;
  border-radius: 25px;
  margin-bottom: 10px;

}

.router-link {
  color: rgb(0, 0, 0);
}




@media (min-width: 768px) {
  .app-footer {
    flex-direction: row;
    height: auto;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px;
  }

  .footer-left {
    align-items: flex-start;
    margin-bottom: 0;
  }

  .useful-section {
    width: auto;
  }

  .section-title {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .useful-links {
    font-size: 16px;
    /* flex-direction: row; */
    align-items: flex-start;
  }

  .horizontal-links {
    margin-bottom: 0;
  }

  .footer-center {
    align-items: flex-start;
    margin-bottom: 0;
  }

  .company-title {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .owner-name {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .footer-info {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .footer-right {
    justify-content: center;
    gap: 10px;
  }

  .sponsor-image {
    width: 100px;
    height: auto;
    margin: 5px;
  }
}

@media (max-width: 768px) {

  .app-footer{
    display: flex;
    flex-direction: row;
    max-width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .section-title {
    font-size: 24px;
  }

  .useful-links {
    font-size: 16px;
  }

  .horizontal-links {
    font-size: 20px;
  }

  .company-title {
    font-size: 24px;
  }

  .owner-name {
    font-size: 16px;
  }

  .footer-info {
    font-size: 16px;
  }

  .sponsor-image {
    display: none;
  }
}

/* Stili per schermi di dimensioni superiori a 768px */
@media (min-width: 768px) {
  .section-title {
    font-size: 32px;
  }

  .useful-links {
    font-size: 20px;
  }

  .horizontal-links {
    font-size: 24px;
  }

  .company-title {
    font-size: 32px;
  }

  .owner-name {
    font-size: 20px;
  }

  .footer-info {
    font-size: 20px;
  }

  
}
</style>
