<template>
  <div class="home">
    <SliderMainPage :list="list"/>
    <CarouselCards :title="carouselTitle" :list="seasonalAnimeList" class="mt-5 mb-4"/>
  </div>
</template>

<script>
import SliderMainPage from "../components/SliderMainPage";
import CarouselCards from "../components/CarouselCards";

export default {
  name: 'Home',
  components: {
    CarouselCards,
    SliderMainPage
  },
  data() {
    return {
      list: [
        {backgroundColor: '#3f51b5', width: '100%'},
        {backgroundColor: '#eee', width: '100%'},
        {backgroundColor: '#f44336', width: '100%'},
      ],
      seasonalAnimeList: [],
      carouselTitle: ''
    }
  },
  methods: {
    translateSeason(season) {
      let value = ''
      switch (season) {
        case 'Spring':
          value = 'Primavera'
          break;
        case 'Winter':
          value = 'Inverno'
          break;
        case 'Summer':
          value = 'Verão'
          break;
        case 'Fall':
          value = 'Outono'
          break;
      }
      return value
    }
  },
  mounted() {
    this.$store.dispatch('getSeasonAnimes')
        .then(res => {
          this.carouselTitle = `Lançamentos (${this.translateSeason(res.data.season_name)})`
          this.seasonalAnimeList = res.data.anime
        })
  }
}
</script>
