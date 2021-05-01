<template>
  <div id="carousel-cards" class="mx-5">
    <h4 class="pb-2">{{ title }}</h4>
    <carousel :per-page="9"
              :mouse-drag="true"
              :navigation-enabled="true"
    >
      <slide v-for="(data, index) in list" :key="index">
        <div class="slider-card">
          {{data}}
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