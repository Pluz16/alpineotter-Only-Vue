
<template>
  <div class="container mb-5">
    <h4 class="text-center">Articoli sull'Allevamento di Labrador Alpine Otter sul sito DogsPortal</h4>
    <div class="row justify-content-center">
      <div class="col-md-4 mt-3" v-for="article in articles" :key="article.id">
        <div class="card">
          <img class="card-img-top" :src="getImageUrl(article.imageUrl)" alt="Immagine articolo">
          <div class="card-body">
            <h5 class="card-title">{{ article.title }}</h5>
            <a :href="article.url" class="btn btn-primary bg-success">Leggi di più</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppTalks',
  data() {
    return {
      articles: [
        {
          id: 4,
          title: "La tutela delle razze canine ai tempi del covid-2019",
          url: "https://www.dogsportal.it/la-tutela-delle-razze-cinofile-ai-tempi-del-covid-2019/",
          imageUrl: "cropped-logo-new-dogsportal.png"
        },
        {
          id: 3,
          title: "Voglio comprare un cane di razza. Come scegliere l’allevatore?",
          url: "https://www.dogsportal.it/voglio-comprare-un-cane-di-razza-come-scegliere-lallevatore/",
          imageUrl: "cropped-logo-new-dogsportal.png"
        },
        {
          id: 2,
          title: "Il Labrador Retriever nell’immaginario collettivo tra cinema e tv",
          url: "https://www.dogsportal.it/il-labrador-retriever-nellimmaginario-collettivo-tra-cinema-e-tv/",
          imageUrl: "cropped-logo-new-dogsportal.png"
        },
        {
          id: 1,
          title: "Leggenda narra che il Labrador nasca dall’incontro tra un cane ed una lontra",
          url: "https://dogsportal.it/leggenda-narra-che-il-labrador-nasca-dallincontro-tra-un-cane-ed-una-lontra/",
          imageUrl: "cropped-logo-new-dogsportal.png"
        }
        // ... altri articoli
      ]
    };
  },
  methods: {
    getImageUrl(path) {
      return require(`@/assets/${path}`);
    }
  }
};
</script>


