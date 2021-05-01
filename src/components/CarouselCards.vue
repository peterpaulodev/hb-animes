<template>
  <div id="carousel-cards" class="mx-5">
    <h4 class="pb-2">{{ title }}</h4>
    <carousel :per-page="9"
              :mouse-drag="true"
              :navigation-enabled="true"
              :paginationActiveColor="'#a239caff'"
              :navigation-next-label="'❯'"
              :navigation-prev-label="'❮'"
    >
      <slide v-for="(data, index) in list" :key="index">
        <div class="slider-card">
          <div class="container-cover">
            <img :src="data.image_url" alt="img-anime" class="slider-cover">
            <div class="cover-overlay">
              <div class="text">{{ data.title }}</div>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>
<script>
export default {
  name: 'CarouselCards',
  props: {
    title: { String },
    list: { Array, Object },
  },
  data(){
    return {
    }
  }
}
</script>