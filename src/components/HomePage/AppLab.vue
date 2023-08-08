<template>
  <div class="container labrador-info">
    <h2 class="section-title">Il Labrador</h2>
    <p class="description">
      Il Labrador è una razza originaria della penisola di Terranova (Canada). Le sue origini sono comuni al cane di Terranova,
      ma è stato selezionato in Inghilterra a partire dal diciannovesimo secolo. Si deve ad alcuni nobili inglesi con la passione
      della caccia, in particolare del riporto in ambienti acquatici e climi rigidi, la principale connotazione delle sue caratteristiche.
      Una leggenda vuole il Labrador come figlio di un incontro fra un cane e una lontra...
    </p>
    <p class="description">
      Nel mondo online troverete molto materiale a riguardo. Se siete interessati all’approfondimento, vi consiglio i testi della
      scomparsa Mary Roslin Williams, riconosciuta universalmente come la più importante allevatrice della storia.
      Attualmente questa razza è considerata una delle più versatili: riporto, salvataggio, ricerca di persone, ricerca di stupefacenti ed esplosivi,
      guida per ciechi, ausilio per disabili, pet therapy... persino agility con cani di working line!
    </p>
    <p class="description">
      È un'ottima compagnia in casa e nelle passeggiate, ma non è adatto a compiti di guardia e difesa. Il suo carattere affabile
      e la volontà di compiacere non lo rendono un buon guardiano.
    </p>
    <div class="container-img">
      <img src="@/assets/history.jpg" alt="Labrador Immagine 1" class="labrador-image" />
      <img src="@/assets/terranovamap.jpg" alt="Labrador Immagine 2" class="terranova-image" />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.section-title {
  font-size: 28px;
  text-align: center;
  margin-bottom: 30px;
}

.description {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: center;
}

.container-img {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 0 auto;
  padding: 10px;
}

.labrador-image {
  max-width: 300px;
  border-radius: 10px;
  margin: 10px;
}

.terranova-image{
  max-width: 300px;
  border-radius: 10px;
  margin: 10px;
}
</style>
