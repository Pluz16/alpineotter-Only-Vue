<template>
  <header class="app-header">
    <div class="logo" @click="goToHomePage">
      <a href="/"><img src="@/assets/logodef.jpg" alt="Logo" /></a>
    </div>
    <div class="brand">
      <h1>Megan &amp; Co.</h1>
    </div>
    <nav class="desktop-navbar">
      <a href="/" class="nav-link">Home</a>
      <a href="/allevamento#top" class="nav-link">Allevamento</a>
      <a href="/pensione#top" class="nav-link">Pensione</a>
      <a href="/chi-siamo#top" class="nav-link">Chi siamo</a>
      <a href="/contattaci#top" class="nav-link">Contattaci</a>
    </nav>
    <div>
      <div class="accordion" id="headerAccordion">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#headerCollapse" :aria-expanded="isMenuOpen" aria-controls="headerCollapse" @click="toggleMenu" :class="{ 'collapsed': !isMenuOpen }">
              {{ isMenuOpen ? 'Chiudi il Menù' : 'Apri il Menù' }}
            </button>
          </h2>
          <div id="headerCollapse" class="accordion-collapse collapse" :class="{ 'show': isMenuOpen }" data-bs-parent="#headerAccordion">
            <div class="accordion-body">
              <ul class="responsive-list">
                <li><a href="/" class="list-link" :hash="top">Home</a></li>
                <li> <a href="/allevamento#top" class="list-link">Allevamento</a></li>
                <li><a href="/pensione#top" class="list-link" :hash="top">Pensione</a></li>
                <li><a href="/chi-siamo#top" class="list-link" :hash="top">Chi siamo</a></li>
                <li><a href="/contattaci#top" class="list-link" :hash="top">Contattaci</a></li>
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
  name: 'AppHeader',
  data() {
    return {
      isMenuOpen: false,
      top: "top",
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    goToHomePage() {
      this.$router.push('/'); // Indirizzamento alla homepage
    },
  },
};
</script>

<style scoped>
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
  display: none; /* Nascondi la navbar nella vista desktop */
}

@media (max-width: 767px) {
  .app-header {
    align-items: center;
    justify-content: space-between;
  }



  .accordion-body {
    margin-top: 10px;
  }
  .brand h1{
    font-size: medium;
  }

  .accordion-body ul {
    flex-direction: column;
    align-items: center;
  }

  .accordion-body li {
    margin: 5px 0;
  }
}

@media (min-width: 768px) {
  .accordion {
    display: none; /* Nascondi l'accordion nella vista desktop */
  }

  .desktop-navbar {
    display: flex; /* Mostra la navbar nella vista desktop */
    margin-left: auto;
  }


  .desktop-navbar .nav-link {
    margin-left: 15px; /* Aggiungi spazio tra i link nella navbar */
  }
}
</style>
