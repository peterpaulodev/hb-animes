<template>
  <div id="slider-main-page" class="mx-5">
    <slider animation="fade" height="330px">
      <slider-item
          class="mt-3"
          v-for="(i, index) in list"
          :key="index"
          :style="i"
      >
        <p style="line-height: 280px; font-size: 5rem; text-align: center;">Page{{ index + 1 }}</p>
      </slider-item>
    </slider>
  </div>
</template>

<script>
import {Slider, SliderItem} from 'vue-easy-slider'

export default {
  name: 'SliderMainPage',
  components: {
    Slider,
    SliderItem
  },
  props: {
    list: {}
  }
}
</script>