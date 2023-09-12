<template>
  <section class="header-section" id="breed top">
  <div class="container-header">
    <h1 class="title">Benvenuti in Allevamento</h1>
    <p class="subtitle">L'eccellenza delle montagne nella selezione dei nostri cani</p>
  </div>
 
</section>

<section class="card-section">
  <div class="container">
    <h2 class="section-title">I nostri principi</h2>
    <div class="card-row">
      <div class="card card-1">
        <h4 class="card-text">SALUTE</h4>
        <a class="card-text-description">
          La salute è fondamentale per la nostra selezione. Tutti i nostri cani sono ufficialmente testati per displasia (FSA/CELEMASCHE) e sottoposti a un ricco pannello di test genetici LABOKLIN. I risultati sono disponibili per i clienti.
        </a>
      </div>
      <div class="card card-2">
        <h4 class="card-text">CARATTERE</h4>
        <a class="card-text-description">
          Il carattere del Labrador è distintivo. La sua innata volontà di compiacere, socievolezza ed attitudine al gioco lo rendono facilmente addestrabile per attività specifiche.
      </a>
      </div>
      <div class="card card-3">
        <h4 class="card-text">FUNZIONALITÀ</h4>
        <a class="card-text-description">
          Il Labrador è funzionale, con struttura solida, coda adatta al nuoto e fiuto eccellente.
        </a>
      </div>
      <div class="card card-4">
        <h4 class="card-text">BELLEZZA</h4>
        <a class="card-text-description">
          La nostra selezione privilegia cani non eccessivamente pesanti, aderenti allo standard e con risultati visibili nelle foto.
        </a>
      </div>
    </div>
    <div class="center-link">
        <router-link to="chi-siamo" class="card-link">Scopri di più</router-link>
      </div>
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
          <img src="@/assets/webbina.jpg" alt="MARGE BOUVIER ALPINE OTTER femmina Labrador Miele con pedigree testato patologie genetiche">
          <h3>MARGE BOUVIER ALPINE OTTER - LO22200609</h3>
          <p>Test da effettuare al raggiungimento dell'età necessaria per sottoporsi all'analisi</p>
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



</script>

<style scoped>

/* HEADER */
.header-section {
  padding: 40px 0;
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

.card-section{

  margin-bottom: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Per distribuire le card uniformemente su una riga */
}

.card-text {
  font-size: 1.5rem; /* Imposta una dimensione del font base */
  text-align: center;
  font-weight: bold;
  z-index: 1;
  white-space: nowrap; /* Impedisce al testo di andare a capo */
  overflow: hidden; /* Nasconde eventuali testi che superano la larghezza della card */
  text-overflow: ellipsis; /* Aggiunge puntini di sospensione quando il testo è nascosto */
}

.section-title {
  font-size: 1,5rem; /* Il testo avrà il 4% della larghezza del viewport come dimensione del font */
  text-align: center;
  margin-bottom: 20px;
}

.card-row {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
}

.card-row {
  position: relative; /* Aggiungi questa proprietà per consentire il posizionamento assoluto della descrizione */
}
.card {
  flex: 0 0 24%; /* Ogni card occupa il 24% della larghezza su schermi con larghezza massima di 1200px */
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}







.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.7);
}

.card:hover h4{
  display: none;
}

.card:hover p{
  display: flex;
  background-color: rgba(240, 248, 255, 0.574);
}



.card-text-description:hover{
  display: flex;
}


.card-text-description {
  /* Resto dello stile per la descrizione */
  display: none;
  font-size: 11px;
  text-align: center;
  color: #000000;
  font-weight: 900;
  position: absolute;
  top: 50%; /* Posiziona il paragrafo al centro della card */
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%; /* Imposta la larghezza della descrizione al 100% del container */
  background-color: rgba(240, 248, 255, 0.574);
  padding: 10px;
  border-radius: 5px;
  white-space: normal; /* Permette al testo di andare a capo */
}

.card:hover .card-text {
  display: none; /* Nascondi il testo della card al passaggio del mouse */
}

.card:hover .card-text-description {
  display: flex; /* Mostra il paragrafo al passaggio del mouse */
  position: absolute;
  top: 50%; /* Posiziona il paragrafo al centro della card */
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(240, 248, 255, 0.574);
  padding: 10px;
  border-radius: 5px;
  padding: 10 10 10 10;
}

.card-row {
  position: relative; /* Aggiungi questa proprietà per consentire il posizionamento assoluto della descrizione */
}

.center-link {
  display: flex;
  justify-content: center;
  margin-top: 10px; /* Aggiungi uno spazio tra le card e il link */
}

.center-link a {
  color: #020406;
  font-weight: 800;
}

.card-1 {
  background-image: url('@/assets/cucciolo.jpg');
}

.card-2 {
  background-image: url('@/assets/PuppyWebby_head.jpg');
}

.card-3 {
  background-image: url('@/assets/history.jpg');
}

.card-4 {
  background-image: url('@/assets/Expo_Cuba_Head.jpg');
}

@media (max-width: 950px) {

  .card {
    max-width: 250px; /* Riduci la larghezza massima della card su schermi più piccoli */
    height: 180px; /* Riduci l'altezza della card su schermi più piccoli */
  }


  .card-text-description {
  /* Resto dello stile per la descrizione */
  display: none;
  font-size: 7px;
  text-align: center;
  color: #000000;
  font-weight: 750;
  position: absolute;
  top: 50%; /* Posiziona il paragrafo al centro della card */
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%; /* Imposta la larghezza della descrizione al 100% del container */
  max-height: 100%;
  background-color: rgba(240, 248, 255, 0.574);
  padding: 10px;
  border-radius: 5px;
  white-space: normal; /* Permette al testo di andare a capo */
}


  .card-text {
    font-size: 15px; /* Riduci la dimensione del font su schermi più piccoli */
  }


  .card:hover {
    transform: none; /* Annulla la trasformazione al passaggio del mouse */
    box-shadow: none; /* Annulla l'ombra al passaggio del mouse */
    pointer-events: none; /* Impedisce l'interazione con la card al passaggio del mouse */
  }
  
  .card-text:hover,
  .card-text-description:hover {
    display: none; /* Annulla l'effetto di hover sugli elementi con classe .card-text e .card-text-description */
  }
}

@media (max-width: 576px) {
  .card {
    flex: 0 0 calc(48%); /* Calcola la larghezza per ospitare due elementi per riga con uno spazio tra di essi */
    height: 205px; /* Riduci ulteriormente l'altezza della card su schermi ancora più piccoli */
    writing-mode: vertical-lr;
    text-orientation: upright;
    margin-bottom: 15px;
  }

  .card-row{
    display: flex;
    flex-wrap: wrap;
  }

  .card h4{
    font-size: small;
    display: flex;
    font-weight: 900;
  }

  .card:hover .card-text-description{
    display: none;
  }

  .card:hover {
    transform: none; /* Annulla la trasformazione al passaggio del mouse */
    box-shadow: none; /* Annulla l'ombra al passaggio del mouse */
    pointer-events: none; /* Impedisce l'interazione con la card al passaggio del mouse */
  }
  
  .card-text:hover,
  .card-text-description:hover {
    display: none; /* Annulla l'effetto di hover sugli elementi con classe .card-text e .card-text-description */
  }





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
