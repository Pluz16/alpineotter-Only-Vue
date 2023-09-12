<template>
  <header class="app-header">
    <div class="logo" @click="goToHomePage">
      <a href="/"><img src="@/assets/logodef.jpg" alt="Allevamento Alpine otter e Pensione per cani Megan & co" /></a>
    </div>
    <div class="brand">
      <h1>Megan &amp; Co.</h1>
    </div>
    <nav class="desktop-navbar">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/allevamento" class="nav-link">Allevamento</router-link>
      <router-link to="/pensione" class="nav-link">Pensione</router-link>
      <router-link to="/chi-siamo" class="nav-link">Chi siamo</router-link>
      <router-link to="/contattaci" class="nav-link">Contattaci</router-link>
    </nav>
    <div>
      <div class="accordion" id="headerAccordion">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" @click="toggleMenu" :class="{ 'collapsed': !isMenuOpen }">
              {{ isMenuOpen ? 'Chiudi il Menù' : 'Apri il Menù' }}
            </button>
          </h2>
          <div
            id="headerCollapse"
            class="accordion-collapse collapse"
            :class="{ 'show': isMenuOpen }"
            data-bs-parent="#headerAccordion"
          >
            <div class="accordion-body">
              <ul class="responsive-list">
                <li><router-link to="/" class="list-link" exact>Home</router-link></li>
                <li><router-link to="/allevamento" class="list-link">Allevamento</router-link></li>
                <li><router-link to="/pensione" class="list-link">Pensione</router-link></li>
                <li><router-link to="/chi-siamo" class="list-link">Chi siamo</router-link></li>
                <li><router-link to="/contattaci" class="list-link">Contattaci</router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    goToHomePage() {
      this.$router.push('/'); // Indirizzamento alla homepage
    },
    scrollToTop() {
      const element = document.getElementById("top");
      if (element) {
        // Utilizza lo scroll senza animazione
        element.scrollIntoView();
      }
    },
  },
  data() {
    return {
      isMenuOpen: false,
      top: "top",
    };
  },
};
</script>

<style scoped>
/* Stili condivisi */
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  cursor: pointer;
}

.logo {
  font-weight: bold;
  font-size: 24px;
  margin-right: 5px;
}

.logo img {
  max-width: 100px;
}

.brand {
  font-size: 20px;
}

.accordion-item {
  background-color: #3FA273;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.accordion-button {
  font-weight: bold;
  background-color: #ffe4c4;
}

.list-link {
  color: #FFF;
  font-weight: bold;
}

.list-link:hover {
  color: #F0A6A6;
}

.desktop-navbar {
  display: flex; /* Mostra la navbar nella vista desktop */
}

.responsive-list {

  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.responsive-list li {
  margin: 5px 0;
}

/* Stili per schermi con larghezza inferiore a 768px */
@media (max-width: 767px) {
  .app-header {
    display: flex;
    flex-direction: column;
  }

  .accordion-body {
    margin-top: 10px;
    padding: 0;
  }

  .brand h1 {
    font-size: medium;
  }

  .accordion-body ul {
    flex-direction: column;
    align-items: center;
  }

  .accordion-body li {
    margin: 5px 0;
  }



  .desktop-navbar {
    display: none; /* Nascondi la navbar nella vista desktop */
  }
}

/* Stili per schermi con larghezza maggiore o uguale a 768px */
@media (min-width: 768px) {
  .accordion {
    display: none; /* Nascondi l'accordion nella vista desktop */
  }

  .desktop-navbar {
    margin-left: auto;
  }

  .desktop-navbar .nav-link {
    margin-left: 15px; /* Aggiungi spazio tra i link nella navbar */
  }
}
</style>
