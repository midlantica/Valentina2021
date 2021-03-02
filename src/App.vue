<template>
  <div class="wrapper">
    <DarkModeToggler class="darkMode" />
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
  import DarkModeToggler from "./components/darkMode/DarkModeToggler"

  export default {
    components: {
      DarkModeToggler,
      HeaderTop,
      Navvy,
      Footy,
    },
  }
</script>

<style lang="scss">
  @import "./assets/css/main.scss";
</style>
