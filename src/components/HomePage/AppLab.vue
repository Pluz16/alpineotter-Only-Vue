
<template>
  <div class="container labrador-info">
    <h2 class="section-title text-center">IL LABRADOR</h2>
    <p class="description">
        Razza originaria della penisola di Terranova (Canada) con origini comuni al più grosso CANE DI TERRANOVA,
        relativamente recente perchè selezionata in Inghilterra a partire dal diciannovesimo secolo.
        Si deve ad alcuni nobili inglesi con la passione della caccia, in particolare del riporto in ambienti acquatici e climi rigidi,
        la principale connotazione delle caratteristiche di questo ausiliario.
        Ma a me piace pensare alla leggenda che vede il labrador, figlio di un incontro fra UN CANE E UNA LONTRA...
      </p>
      <p class="description">
        Sul web troverete molto materiale a riguardo, ma se potete e siete interessati all’approfondimento,
        vi consiglio i testi della scomparsa Mary Roslin Williams, colei che è universalmente riconosciuta come la più
        importante allevatrice della storia.
        Attualmente questa razza è riconosciuta come fra le più versatili: riporto, salvataggio, ricerca persone,
        ricerca stupefacenti ed esplosivi, guida per ciechi, ausilio per disabili, pet therapy... persino agility con cani di working line!
      </p>
      <p class="description">
        Ottima compagnia in casa e nelle nostre passeggiate ma pessimo guardiano!
        Il suo carattere affabile e la sua volontà di compiacere non lo rendono adatto a compiti di guardia e difesa.
      </p>

    <!-- Immagini -->
    <!-- Utilizza "d-flex justify-content-center" per centrare le immagini -->
    <div class="d-flex justify-content-center container-img">
      <!-- Aggiungi la classe "img-fluid" per rendere le immagini responsive -->
      <!-- Aggiungi la classe "rounded-circle" per applicare un border radius circolare -->
      <img src="@/assets/history.jpg" alt="Labrador Immagine 1" class="labrador-image img-fluid  mx-2" />
      <img src="@/assets/terranovamap.jpg" alt="Labrador Immagine 2" class="labrador-image img-fluid  mx-2" />
    </div>
  </div>
</template>



<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 5px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-title {
  font-size: 32px;
  text-align: center;
  margin-bottom: 30px;
}

.description {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.container-img {
  /* Utilizza "d-flex" e "justify-content-center" per centrare le immagini */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* Per far scendere le immagini su più righe quando lo schermo si riduce */
  max-width: 800px;
  padding: 10px;
}



.labrador-image {
  /* Aggiungi "max-width: 100%" per far sì che le immagini non superino la larghezza del loro contenitore */
  max-width: 100%;
  /* Aggiungi "my-2" per uno spazio verticale tra le immagini */
  margin: 0 auto;
  /* Aggiungi "border-radius: 10px" o qualsiasi altro valore per rendere il bordo meno arrotondato */
  border-radius: 10px;
  /* Aggiungi uno spazio tra le immagini */
  margin-bottom: 20px;
}
/* Stili aggiuntivi per il layout, puoi personalizzarli a tuo piacimento */
/* ... Aggiungi qui ulteriori stili personalizzati ... */
</style>