<template>
    <div class="pensione-container" id="top">
      <h1 >Pensione e asilo diurno per cani</h1>
  <h2 class="pensione-title">Un Paradiso per i Vostri Amici a Quattro Zampe</h2>
  <div class="pensione-info">
    <div class="pensione-text">
      <h3>La Nostra Filosofia</h3>
      <p>
        Noi crediamo nell'eccellenza e nella qualità del servizio che offriamo.
        Per questo motivo, abbiamo scelto di mantenere un numero ridotto di ospiti,
        in modo da poterci dedicare completamente al loro benessere e garantire un'attenzione personalizzata a ognuno di loro.
      </p>
      <p>
        Ogni cane che arriva nella nostra pensione viene accolto e valutato con cura,
        affinché possiamo comprendere le sue esigenze e garantirgli un soggiorno felice e sereno.
      </p>
    </div>
    <div class="pensione-image">
      <!-- Inserisci qui l'immagine della pensione -->
      <img src="@/assets/struttura.jpg" alt="Pensione per cani" />
    </div>
  </div>

  <div class="btn-out">
    <router-link to="/contattaci" class="btn-come"><h3>Prenota un appuntamento</h3></router-link>
  </div>


  <div class="pensione-location">
    <h3>Una Location Unica</h3>  
    <p>
      La nostra pensione si trova in una posizione privilegiata, circondata da rigogliosi paesaggi verdi.
      Questa cornice idilliaca è perfetta per lunghe passeggiate e giochi all'aperto,
      offrendo ai nostri ospiti la possibilità di vivere esperienze uniche a stretto contatto con la natura.
    </p>
    <img src="@/assets/Maps.png"  alt="Pensione per cani" />
    <p>
      Inoltre, pur essendo immersi nella tranquillità della campagna,
      siamo comodamente vicini ai centri abitati, per garantire una facile accessibilità.
    </p>
  </div>
  <div class="pensione-health">
    <h3>La Salute dei Nostri Ospiti è una Priorità</h3>
    <p>
      Per garantire la salute e il benessere di tutti i nostri ospiti,
      ospitiamo esclusivamente cani in regola col percorso vaccinale e trattati con antiparassitari.
      La sicurezza e il comfort dei nostri amici a quattro zampe sono la nostra massima priorità.
    </p>
    <img src="@/assets/SanBernardo.jpg" alt="Amici">
  </div>

  <div class="accordion accordion-flush" id="accordionFlushExample">
    <!-- Servizio di Dog-sitting a domicilio -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          Servizio di Dog-sitting a domicilio
        </button>
      </h2>
      <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">Il nostro servizio di Dog-sitting a domicilio offre al tuo cane un ambiente familiare e confortevole mentre sei fuori casa. Abbiamo a cuore il benessere del tuo amico a quattro zampe e garantiamo cure amorevoli e professionali. Affidati a noi per tenere il tuo cane felice e coccolato durante la tua assenza!</div>
      </div>
    </div>

    <!-- Asilo diurno per cani -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
          Asilo diurno per cani
        </button>
      </h2>
      <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">Il nostro asilo diurno per cani è il luogo perfetto per far socializzare il tuo amico peloso e garantirgli una giornata piena di divertimento e attività. I nostri professionisti qualificati si prenderanno cura del tuo cane mentre sei impegnato, offrendogli momenti di gioco, attività e tanto affetto. Il divertimento e la sicurezza del tuo cane sono la nostra priorità!</div>
      </div>
    </div>

    <!-- Transfer per cani -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
          Transfer per cani
        </button>
      </h2>
      <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">Il nostro servizio di Transfer per cani ti permette di viaggiare serenamente sapendo che il tuo cane è in buone mani. Forniamo un trasporto sicuro e confortevole per il tuo amico peloso, garantendogli un viaggio senza stress. Affidati a noi per il transfer del tuo cane e goditi la tranquillità di viaggiare con la certezza che il tuo fedele compagno è al sicuro!</div>
      </div>
    </div>
  </div>

  <div class="pensione-contact" id="contact">
    <h3>Vieni a Trovarci!</h3>
    <p>
      Siamo situati in Via Montiglie, 18 a Settimo Vittone (TO) 10010.
      Se desideri scoprire di più sulla nostra pensione e prenotare un soggiorno per il tuo cane, contattaci o vieni a trovarci!
      Saremo felici di mostrarti il nostro ambiente e di conoscere il tuo amico peloso.
    </p>
    <router-link to="/contattaci" class="btn-come"><h3>Prenota un appuntamento</h3></router-link>
  </div>
</div>




</template>


<style>

.pensione-container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 5px;
}

.pensione-container h1{
  background-color: rgba(255, 228, 196, 0.634);
  text-align: center;
  margin-bottom: 10px;
  font-weight: 600;
}

.pensione-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.pensione-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}

.pensione-location p {
  margin-top: 20px;
}

.pensione-text {
  display: flex;
  flex-direction: column;
}

.pensione-image {
  margin-left: 20px;
}

.pensione-image img {
  max-width: 100%;
  border-radius: 8px;
}

.pensione-location img {
  max-width: 100%;
  border-radius: 8px;
}

.pensione-location,
.pensione-health,
.pensione-contact {
  margin-bottom: 40px;
}

h3 {
  font-size: 20px;
  margin-bottom: 10px;
}
.pensione-contact,
.pensione-health,
.btn-out {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.btn-come{
  margin-bottom: 16px;
}

.pensione-health img{
  max-width: 70%;
  max-height: 400px;
  max-width: fit-content;
}

.btn-come {
  padding: 12px 24px !important;
  background-color: #81a5eb!important;
  color: #fff !important;
  border: none !important;
  border-radius: 5px !important;
  cursor: pointer !important;
  transition: background-color 0.3s ease !important;
}

.btn-come:hover {
  background-color: #0056b3 !important;
}

.btn-come h3 {
  margin: 0 !important;
  font-size: 18px !important;
  font-weight: bold !important;
}

.accordion, accordion-header{
  margin-bottom: 16px;
  background-color: #81a5eb;
  color: black;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  width: 100%;
}




@media (max-width: 768px) {

  .pensione-info{
    display: flex;
    text-align: justify;
    flex-direction: column;
    justify-content: center;
  }

  .pensione-info img{
    height: 280px;
    max-width: 100%;
  }

  .pensione-container{
    margin: 5px;
  }

}



</style>