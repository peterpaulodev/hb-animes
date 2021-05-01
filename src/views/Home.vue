<template>
  <div class="home">
    <SliderMainPage :list="list"/>
    <CarouselCards title="Lançamentos" :list="seasonalAnimeList" class="mt-5 mb-4"/>
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
      seasonalAnimeList: []
    }
  },
  mounted() {
    this.$store.dispatch('getSeasonAnimes')
      .then(res => {
        this.seasonalAnimeList = res.data.anime
      })
  }
}
</script>
