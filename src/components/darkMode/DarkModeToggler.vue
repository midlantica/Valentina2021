<template>
  <button
    :title="theme == 'dark' ? 'Dark Theme' : 'Light Theme'"
    @click="toggleTheme()"
    class="theme"
  >
    <component :is="theme == 'dark' ? 'Moon' : 'Sun'" height="20px" />
  </button>
</template>

<script>
  import Moon from "@/components/darkMode/Moon.vue"
  import Sun from "@/components/darkMode/Sun.vue"

  export default {
    components: {
      Moon,
      Sun,
    },
    data() {
      return {
        theme: localStorage.getItem("theme"),
      }
    },
    methods: {
      toggleTheme() {
        if (this.theme == "dark") {
          this.theme = "light"
          document.body.setAttribute("data-theme", "light")
          document.body.setAttribute("data-icon", "sun")
          localStorage.setItem("theme", "light")
        } else {
          this.theme = "dark"
          document.body.setAttribute("data-theme", "dark")
          document.body.setAttribute("data-icon", "moon")
          localStorage.setItem("theme", "dark")
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  button {
    cursor: pointer;
    z-index: 100;

    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  [data-theme="dark"] button {
    color: $black;
    fill: black;
  }
</style>
