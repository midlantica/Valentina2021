<template>
  <div class="wrapper">
    <headerTop />
    <Navvy />
    <router-view v-slot="{ Component }">
      <!-- <transition name="fade"> -->
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
      <!-- </transition> -->
    </router-view>
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
  // @import './node_modules/breakpoint-sass/stylesheets/breakpoint';
  @import "./assets/css/main.scss";
</style>
