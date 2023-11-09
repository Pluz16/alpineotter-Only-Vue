<template id="top">
    <div class="about-us-page" >
      <div class="professionalita">
        <h2>FOUNDER</h2>
        <p>
          Manuel Punta, diploma di maturità scientifica e laurea in scienze politiche.
          Allevatore iscritto al registro allevatori ENCI.
          Socio ENCI e RCI (Retriever Club Italiano)
          Segretario A.N.VV.F.C. ODV – delegazione CINOFILI CANAVESE
          Master allevatore cinofilo ENCI.
          Modulo master avanzato: le patologie oculari
          Iscritto albo fornitori cinofili della polizia di stato
          Titolare suffisso ALPINE OTTER, registrato presso FCI/ENCI.
          Svolgo attività informativa presso centri cinofili, associazioni o enti locali
          sui seguenti temi:
          L’allevamento etico,
          La razza labrador retriever,
          Il mondo degli show cinofili...
          Segnalo la mia partecipazione come docente al corso di formazione dei
          nuovi binomi per il soccorso alpino valdostano nel 2019.
          Da anni frequento il mondo delle expo e condivido coi miei cani attività di
          retrieving e di acquaticità, col fine di coltivare le attitudini della razza.
          Essendo per noi l’allevatore “il custode della razza”, evitiamo
          accuratamente accoppiamenti che producano anomalie di
          pigmentazione (DUDLEY).
        </p>
      </div>

      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/expo.jpg" class="d-block w-100" alt="Expo canine di bellezza esposizioni cinofile ENCI, Allevamento Alpine otter di labrador retrievers in Piemonte">
        </div>
        <div class="carousel-item">
          <img src="@/assets/logodef.jpg" class="d-block w-100" alt="Allevamento Labrador Retrievers alta genealogia con pedigree">
        </div>
        <div class="carousel-item">
          <img src="@/assets/CARAMBA.jpg" class="d-block w-100" alt="Arma dei carabinieri cinofilia unità cinofila, Addestramento cani">
        </div>
      </div>
    </div>


      <div class="da-dove-veniamo" id="salute">
        <h2>DA DOVE VENIAMO</h2>
        <p>
          La nostra passione per gli animali affonda negli insegnamenti di nonni e
          Genitori, che ci hanno consentito di vivere a contatto con la natura ed in
          particolare con cani di ogni tipo.
          Abbiamo vissuto con cani da caccia, intelligentissimi meticci, fieri cani
          primitivi, per arrivare ad appassionarci di LABRADOR RETRIEVER, la
          razza che attualmente riempie le nostre giornate e che alleviamo.
        </p>
      </div>
    </div>

     <!-- Sezione "Etica dell'allevamento" - Salute -->
     <div class="ethics-section" id="salute">
      <h2 id="ethics">Salute</h2>
      <p>
        La salute è un aspetto fondamentale sul quale basiamo la nostra selezione.
        Tutti i nostri cani sono testati ufficialmente per displasia (FSA/CELEMASCHE),
        hanno il DNA depositato ed un ricco pannello di test genetici LABOKLIN.
        Tutti i risultati sono a disposizione dei clienti.
      </p>
    </div>

    <!-- Sezione "Etica dell'allevamento" - Carattere -->
    <div class="ethics-section" id="carattere">
      <h2>Carattere</h2>
      <p>
        Un labrador non sarebbe tale senza una innata volontà di compiacere e spiccati tratti di socievolezza ed attitudine al gioco.
        Questi punti ne rendono facile l'addestramento per attività specifiche.
      </p>
    </div>

    <!-- Sezione "Etica dell'allevamento" - Funzionalità -->
    <div class="ethics-section" id="funzionalita">
      <h2>Funzionalità</h2>
      <p>
        Prima di essere "bello" un labrador deve essere "funzionale".
        Struttura ossea di sostanza ma non eccessivamente pesante, i giusti angoli ed appiombi, un collo adatto a sorreggere prede.
        Coda grossa e di lunghezza media, che deve fungere da timone nella sua attività, preferita: IL NUOTO!
        Per non parlare di una andatura fluida e di un fiuto eccellente che lo devono aiutare a ritrovare e riportare al conduttore.
      </p>
    </div>

    <!-- Sezione "Etica dell'allevamento" - Bellezza -->
    <div class="ethics-section">
      <h2>Bellezza</h2>
      <p>
        Non ultima la bellezza, che per noi è strettamente funzionale.
        Nella nostra selezione privilegiamo cani non eccessivamente pesanti con l'obbiettivo di aderire perfettamente allo standard.
        Se qualche risultato lo abbiamo raggiunto, potete verificarlo noi curiosando fra le nostre foto.
      </p>
    </div>

  </template>
  
  <script>
  export default {
    name: 'AboutUs_Page',
  };
  </script>
  
  <style scoped>
.about-us-page,
.ethics-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.professionalita,
.da-dove-veniamo,
.ethics-section {
  margin-bottom: 40px;
  text-align: center;
}

.professionalita h2,
.da-dove-veniamo h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 16px;
}

.carousel-inner img {
  object-fit: contain;
  width: 100%;
  height: 400px;
  margin-bottom: 10px;
}

#carouselExampleSlidesOnly {
  margin: 0 auto;
  display: block;
}

.professionalita p,
.da-dove-veniamo p {
  font-size: 16px;
  line-height: 1.6;
}

/* Stili delle sezioni dell'etica dell'allevamento */
.ethics-section{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ethics-section h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.ethics-section p {
  font-size: 16px;
  line-height: 1.6;
  text-align: center;
}
</style>
  