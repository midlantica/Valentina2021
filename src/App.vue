<template>
  <div class="wrapper">
    <headerTop />
    <Navvy />
    <router-view />
    <Footy />
  </div>
</template>

<script>
  import HeaderTop from "./components/HeaderTop"
  import Navvy from "./components/Navvy"
  import Footy from "./components/Footy"

  export default {
    components: {
      HeaderTop,
      Navvy,
      Footy,
    },
  }
</script>

<style lang="scss">
  @import "./assets/css/main.scss";
</style>
