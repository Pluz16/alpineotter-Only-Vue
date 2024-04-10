<template>
    <div class="app-reception">
      <h2 class="title">La Struttura</h2>
      <p class="description">Benvenuti nel nostro rifugio immerso nel verde del Canavese, ai confini della suggestiva Valle d'Aosta. 
La nostra posizione privilegiata, vicina ai centri abitati, vi offre un'esperienza unica e rilassante per il vostro cane.
</p>
    <router-link to="/pensione#contact" class="btn"><h3>Vienici a Trovare</h3></router-link>
      <img src="@/assets/struttura.jpg" alt="Pensione per cani e asilo diurno piemonte Valle d'Aosta" class="reception-image" />
    </div>
  </template>
  
  <style scoped>
  .app-reception {
    text-align: center;
    margin-top: 20px;
  }
  
  .title {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .description {
    font-size: 16px;
    margin-bottom: 20px;
  }
  
  .btn {
    background-color: #1c5513;
    color: white;
    padding: 10px 20px;
    border: 1px solid #333;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .reception-image {
    margin-top: 10px;
    width: 100%;
    height: 250px;
    max-width: 100%;
    object-fit: cover;
  }
  </style>