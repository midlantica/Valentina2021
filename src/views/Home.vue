<template>
  <main>
    <section>
      <div class="flexxy">
        <Bio />
        <HomeContent />
      </div>
    </section>

    <aside>
      <Social />
    </aside>
  </main>
</template>

<script>
  import HomeContent from "../components/HomeContent"
  import Bio from "../components/Bio"
  import Social from "../components/Social"

  export default {
    components: {
      HomeContent,
      Bio,
      Social,
    },
  }
</script>
