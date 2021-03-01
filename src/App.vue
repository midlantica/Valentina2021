<template>
  <div class="wrapper">
    <headerTop />
    <DarkMode width="50" height="50" class="darkMode" />
    <Navvy />
    <router-view />
    <Footy />
  </div>
</template>

<script>
  import HeaderTop from "./components/HeaderTop"
  import Navvy from "./components/Navvy"
  import Footy from "./components/Footy"
  import DarkMode from "./components/darkMode/DarkMode"

  export default {
    components: {
      HeaderTop,
      Navvy,
      Footy,
      DarkMode,
    },
  }
</script>

<style lang="scss">
  @import "./assets/css/main.scss";
</style>
