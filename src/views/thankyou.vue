<template>
  <main>
    <section>
      <h2>Thanks!</h2>
      <p>Your information was submitted successfully.</p>
    </section>
    <aside>
      <Social />
    </aside>
  </main>
</template>

<script>
  import Social from "../components/Social"
  export default {
    components: {
      Social,
    },
  }
</script>

<style lang="scss" scoped>
  main {
    margin: 2rem auto;
    // @include span-columns(12);

    h2,
    p {
      text-align: center;
      font-size: 150%;
    }
  }
</style>
