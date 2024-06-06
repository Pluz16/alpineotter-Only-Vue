<template>
  <section class="header-section" id="breed top">
  <div class="container-header">
    <h1 class="title">Benvenuti in Allevamento</h1>
    <p class="subtitle">L'eccellenza delle montagne nella selezione dei nostri cani</p>
  </div>
 
</section>

<section class="carosello">

  <div id="carouselExampleCaptions" class="carousel slide card" data-bs-ride="carousel" data-bs-interval="5000"> <!-- Intervallo di 5 secondi -->
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    </div>
  <div class="carousel-inner">
    <div class="carousel-item active ">
      <img src="@/assets/PUPPY-1.jpg" class="d-block w-100" alt="CUCCIOLI DI LABRADOR PIEMONTE GIALLI">
      <div class="carousel-caption ">
        <h2>SALUTE</h2>
        <p>La salute è fondamentale per la nostra selezione. Tutti i nostri cani sono ufficialmente testati per displasia (FSA/CELEMASCHE) e sottoposti a un ricco pannello di test genetici LABOKLIN. I risultati sono disponibili per i clienti.</p>
      </div>
    </div>
    <div class="carousel-item ">
      <img src="@/assets/PuppyWebby_head.jpg" class="d-block w-100" alt="LABRADOR CUCCIOLO BEIGE GIALLO MIELE">
      <div class="carousel-caption ">
        <h2>CARATTERE</h2>
        <p>Il carattere del Labrador è distintivo. La sua innata volontà di compiacere, socievolezza ed attitudine al gioco lo rendono facilmente addestrabile per attività specifiche.</p>
      </div>
    </div>
    <div class="carousel-item ">
      <img src="@/assets/Ulisse5.jpg" class="d-block w-100" alt="LABRADOR CHOCOLATE MASCHIO CIOCCOLATO">
      <div class="carousel-caption">
        <h2>FUNZIONALITÀ</h2>
        <p>Il Labrador è funzionale, con struttura solida, coda adatta al nuoto e fiuto eccellente.</p>
      </div>
    </div>
    <div class="carousel-item ">
      <img src="@/assets/Expo_Cuba_Head.jpg" class="d-block w-100" alt="ESPOSIZIONE CANINA LABRADOR CHOCOLATE FEMMINA CIOCCOLATO PIEMONTE">
      <div class="carousel-caption ">
        <h2>BELLEZZA</h2>
        <p>La nostra selezione privilegia cani non eccessivamente pesanti, aderenti allo standard e con risultati visibili nelle foto.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Indietro</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Avanti</span>
    </button>
</div>

<div class="center-link">
        <router-link to="chi-siamo" class="card-link"><h2>Scopri la nostra etica</h2></router-link>
      </div>

</section>



<section class="intro-section">
  <div class="container">
    <div class="centered-content">
      <h4 class="sub-heading">Megan, la nostra prima labrador, ci ha insegnato molto su questa fantastica razza e ci ha permesso di conoscere molti esperti ed appassionati.</h4>
    </div>
  </div>
</section>


  <section class="puppy-section">
  <div class="container" id="puppy">
    <h2 class="section-title">I cuccioli</h2>
    <div class="puppy-grid">
      <div class="puppy-item">
        <img src="@/assets/cucciolo.jpg" alt="Vendita cucciolo di labrador chocolate beige nero black allevamento">
        <h3>Raggiungono le nuove famiglie dopo i 60 giorni di vita</h3>
        <p>
          Il periodo esatto viene concordato coi nuovi proprietari e valutato in base alla nostra esperienza.
          I cuccioli vengono consegnati con primo vaccino eseguito (o secondo vaccino in base ad accordi specifici)
          ed hanno già effettuato almeno una visita veterinaria che ne verifica lo stato di salute generale.
          Hanno già completato un ciclo di svermatura completo più eventuali altri trattamenti antiparassitari.
        </p>
      </div>
      <div class="puppy-item">
        <img src="@/assets/cucciolopeluche.jpg" alt="Pedigree cucciolo Labrador ENCI di allevamento">
        <h3>Pedigree e documenti</h3>
        <p>
          La pratica per il pedigree è già stata avviata e il documento ENCI verrà consegnato al nuovo intestatario
          nei mesi successivi con modalità differenti a seconda degli accordi presi.
          Ogni cucciolo è già microchippato e dotato di libretto sanitario.
          Tutti i documenti, compresa la documentazione sanitaria dei genitori che comprende SEMPRE
          certificazione ufficiale anche e gomiti e pacchetti di test genetici, viene consegnata ai nuovi proprietari,
          assieme ad un puppy kit.
        </p>
      </div>
      <div class="puppy-item">
        <img src="@/assets/andre_puppy.jpg" alt="Cucciolo di cane Labrador che gioca con bambino">
        <h3>Prima socializzazione e monitoraggio</h3>
        <p>
          Durante la sua permanenza presso di noi, dalla nascita alla consegna, viene effettuato attento monitoraggio
          delle caratteristiche di ogni cane che, con gradualità, viene esposto a diversi stimoli ambientali e ad una
          prima socializzazione intra ed interspecifica.
          I cuccioli vengono lasciati nella disponibilità della madre per lunghi periodi e sono sempre in contatto fra loro.
          Quello che imparano in queste prime settimane attraverso il gioco rappresenta un patrimonio di esperienze
          che li accompagnerà per tutta la vita e ne consoliderà il carattere.
        </p>
      </div>
      <div class="puppy-item">
        <img src="@/assets/webbina.jpg" alt="Labrador giallo con pedigree no displasia">
        <h3>Supporto a vita</h3>
        <p>
          Siamo a disposizione PER TUTTA LA VITA DEL CANE per consigli e supporto.
          In casi particolari, è possibile accordarsi per pagamenti dilazionati.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="info-section">
    <div class="info-content">
      <h2 class="info-title">Hai bisogno di informazioni o prezzi?</h2>
      <router-link to="/contattaci" class="info-button">Clicca qui!</router-link>
    </div>
  </section>

  <section class="dog-list-section" id="dog-list">
    <div class="container" >
      <h2 class="section-title">I nostri cani</h2>
      <div class="dog-list">
        <div class="dog-item">
          <img src="@/assets/Mira_head.jpg" alt="MIRA femmina Labrador Black nero di razza">
          <h3>MIRA - LO16160431</h3>
          <p>Displasia Anche e Gomiti: A/0
            Testato LABOKLIN per 7 patologie
            DNA depositato
          </p>
        </div>
        <div class="dog-item">
          <img src="@/assets/Megan_young.jpg" alt="MEGAN femmina Labrador Black nero di razza">
          <h3>MEGAN - LO14150633</h3>
          <p>Displasia Anche e Gomiti: A/0
            Testato LABOKLIN per 7 patologie
            DNA depositato
          </p>
        </div>
        <div class="dog-item">
          <img src="@/assets/Expo_Cuba_Head.jpg" alt="KARNISCHE ALPEN NESTELLA femmina Labrador Chocolate Marrone di razza">
          <h3>KARNISCHE ALPEN NESTELLA - LO17147585</h3>
          <p>Displasia Anche e Gomiti: A/0
            Testato LABOKLIN per 7 patologie
            DNA depositato
          </p>
        </div>
        <div class="dog-item">
          <img src="@/assets/Webby_head.jpg" alt="DAENERYS TARGARYEN ALPINE OTTER femmina Labrador Miele con pedigree testato patologie genetiche">
          <h3>DAENERYS TARGARYEN ALPINE OTTER - LO20147494</h3>
          <p>Displasia Anche e Gomiti: A/0
            Testato LABOKLIN per 7 patologie
            DNA depositato
          </p>
        </div>
        <div class="dog-item">
          <img src="@/assets/Magda_head.jpg" alt="MAGDA ALPINE OTTER femmina Labrador Chocolate Marrone di razza ">
          <h3>MAGDA ALPINE OTTER - LO2239349</h3>
          <p>Displasia Anche e Gomiti: A/0
            Testato LABOKLIN per 7 patologie
            DNA depositato
          </p>
        </div>
        <div class="dog-item">
          <img src="@/assets/Marge_breed.jpg" alt="MARGE BOUVIER ALPINE OTTER femmina Labrador Miele con pedigree testato patologie genetiche">
          <h3>MARGE BOUVIER ALPINE OTTER - LO22200609</h3>
          <p>Displasia Anche e Gomiti: A/BL
            Testato LABOKLIN per 7 patologie
            DNA depositato
          </p>
        </div>
        <div class="dog-item">
          <img src="@/assets/Ulisse3.jpg" alt="ULISSE maschio Labrador Chocolate marrone con Pedigree stallone">
          <h3>AHSEH DWAYNE RICARDO ONFROY ALPINE OTTER - LO21186107</h3>
          <p>Displasia Anche e Gomiti: A/0
            Testato LABOKLIN per 7 patologie
            DNA depositato
          </p>
        </div>

      </div>
    </div>
  </section>

<section class="ethical-breeding-section">
    <div class="container-ethical">
      <div class="text-content">
        <h2 class="title">Ci basiamo su di un approccio etico all’allevamento:</h2>
        <p>
          Alleviamo pochi esemplari che condividono con noi tempo e spazi e che fanno parte della nostra famiglia
          SENZA ESSERE UMANIZZATI. Per questo motivo programmiamo un numero ridotto di cucciolate ogni anno, lavorando
          sui cuccioli ed essendo molto selettivi nella scelta delle famiglie a cui li affidiamo.
        </p>
      </div>
      <div class="image-content">
        <img src="@/assets/ethical_breeding.jpg" alt="Allevamento Labrador Alpine Otter Piemonte Valle d'Aosta Lombardia Liguria">
      </div>
    </div>
  </section>

</template>

<script>
export default {
  mounted() {
    if (this.$route.hash === '#doglist') {
      const element = document.getElementById('doglist');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
  // ...
}

</script>

<style scoped>

/* HEADER */
.header-section {
  padding: 20px 0;
  /* background-image: url(@/assets/mountains.png); */
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("@/assets/mountains.png");
  background-size: contain; /* Adatta l'immagine allo sfondo coprendo l'intera sezione */
  background-position: center; /* Centra l'immagine nell'area dello sfondo */

}



.container-header{
  display: inline-block;
  max-width: 100%;
  max-width: 100%; /* Imposta il contenitore a 100% della larghezza dello schermo */
  /* margin: 0 auto; */
  overflow: hidden; /* Nasconde il contenuto che supera la larghezza dello schermo */
}

.title {
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 10px;
  background-color: rgba(255, 228, 196, 0.956);
}

.subtitle {
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 20px;
  background-color: rgba(255, 228, 196, 0.905);
}

@media (max-width: 768px) {
  .header-section {
background-image: none;
}
}

/* END- HEADER */

/* CAROUSEL */
.carosello {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card {
  display: flex;
  flex-direction: column; 
  justify-content: center;
  /* max-height: 350px; */
  max-width: 800px;
  border-radius: 10px;
  text-align: center;
  overflow: auto; /* Aggiunta per gestire testo lungo */
  margin: 20px; 
}

.carousel-caption{
  overflow: auto;
background-color: #333333a4;
}

@media (max-width: 768px) {
  /* Per schermi più piccoli, rimpicciolisci il testo */

  .carousel-caption p{
    display: none;
  }

  .carousel-caption h2{
    font-size: medium;
  }
}





.center-link {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.center-link a {
  color: #020406;
  font-weight: 800;
}

.center-link h2 {
  font-size: 18px;
}






/* END-CAROUSEL */

/* CUCCIOLI */

  .puppy-section {
    padding: 40px 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .section-title {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
  }

  .puppy-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }

  .puppy-item {
    text-align: center;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 10px;
  }

  .puppy-item img {
    width: 200px;
    border-radius: 10px;
    margin-bottom: 10px;
    height: 200px;
    object-fit: cover;
  }

  .puppy-item h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .puppy-item p {
    font-size: 14px;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .puppy-item {
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Posiziona gli elementi al centro orizzontalmente */
  justify-content: center; /* Posiziona gli elementi al centro verticalmente */
}

.puppy-item img {
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
  /* Imposta la larghezza e l'altezza delle immagini */
  width: 200px;
  height: 200px;
  object-fit: cover; /* Mantiene le proporzioni dell'immagine e riempie il container */
}

  }

  @media (max-width: 576px) {
    .puppy-grid {
      grid-template-columns: 1fr;
    }

    .puppy-item {
      text-align: left;
    }
  }


/* END-CUCCIOLI */



/* SECTION CIT MEG */

.intro-section {
  background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url("@/assets/logodef.jpg");
  background-size: cover;
  background-position: center;
  padding: 80px 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.centered-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-heading {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.divider {
  width: 100px;
  height: 4px;
  background-color: #F0A6A6;
  margin-bottom: 30px;
}

.sub-heading {
  font-size: 24px;
  font-weight: normal;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  color: #333;
  padding: 0 20px;
}

/* Hover Animation */
.sub-heading {
  transition: transform 0.3s ease-in-out;
}

.sub-heading:hover {
  transform: scale(1.05);
}


/* END SECTION CIT MEG */

/* ethical-breeding-section */

.ethical-breeding-section {
  text-align: center;
  padding: 40px 20px;
}

.container-ethical {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 24px;
  margin-bottom: 10px;
}

.text-content {
  max-width: 800px;
  margin-bottom: 20px;
}

.image-content {
  max-width: 800px;
}

.image-content img {
  max-width: 100%;
  height: 350px;
  border-radius: 5px;
}

/* ethical-breeding-section end */

/* INFO SECTION */

.info-section {
  text-align: center;
  padding: 40px;
}

.info-content {
  max-width: 600px;
  margin: 0 auto;
}

.info-title {
  font-size: 24px;
  margin-bottom: 20px;
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

.info-button:hover {
  background-color: #0056b3;
}

/*  END INFO SECTION */


/* START DOG SECTION */
.dog-list-section {
  max-width: 100%;
  overflow: hidden; /* Aggiungi questa riga */
}

.dog-list {
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* Mostra 1 cane per riga */
  gap: 20px; /* Spazi tra i cani */
}

@media (min-width: 768px) {
  /* Layout per desktop */
  .dog-list {
    grid-template-columns: repeat(2, 1fr); /* Mostra 3 cani per riga in desktop */
  }
}

.dog-item {
  text-align: center;
}

.dog-item img {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
  object-fit: cover;
}

/* Stili aggiuntivi per il layout, puoi personalizzarli a tuo piacimento */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  margin-bottom: 30px;
}

/* END DOG SECTION */


</style>
