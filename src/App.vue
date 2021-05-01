<template>
  <div id="app">
    <main-nav/>
    <router-view/>
  </div>
</template>

<script>
  import MainNav from "./components/MainNav";

  export default {
    components: {
      MainNav
    }
  }
</script>
<style lang="scss">
  @import 'style/main.scss';
</style>
