<template>
    <div class="app-etica">
      <h2 class="title">Come lavoriamo?</h2>
      <div class="image-container">
        <div class="text-container">
          <p class="text">Alleviamo con cura e dedizione pochi esemplari di Labrador Retriever, condividendo tempo e spazi insieme a loro come parte della nostra famiglia. Per garantire un'attenzione individuale, programmiamo con cura un numero limitato di cucciolate ogni anno, lavorando attentamente sui cuccioli e selezionando con cura le famiglie adottive.</p>
          <p class="text">La nostra passione per gli animali affonda negli insegnamenti di nonni e genitori, che ci hanno consentito di vivere a contatto con la natura ed in particolare con cani di ogni tipo.</p>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .app-etica {
    text-align: center;
    margin-top: 20px;
  }
  
  .title {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .image-container {
    display: flex;
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
  }
  
  .image {
    width: 50%;
    max-height: 250px;
    
    object-fit: contain;
    margin: 10px;
  }
  
  .text-container {
    width: 100%;
    margin: 10px;
  }
  
  .text {
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  @media (max-width: 767px) {
    .image img{
      /* width: 100%; */
      height: 100px;
      object-fit: cover;
    }
  
    .text {
      font-size: 14px;
    }
  }
  </style>
  