<template>
  <div class="wrapper">
    <headerTop/>
    <Navvy/>
    <!-- <transition> -->
      <router-view/>
    <!-- </transition> -->
    <Footy/>
  </div>
</template>

<script>
  import HeaderTop from './components/HeaderTop'
  import Navvy from './components/Navvy'
  import Social from './components/Social'
  import Footy from './components/Footy'

  export default {
    components: {
      HeaderTop,
      Navvy,
      Social,
      Footy
    }
  }
</script>

<style lang="scss">
  // @import './node_modules/breakpoint-sass/stylesheets/breakpoint';
  @import './assets/css/main.scss'
</style>
