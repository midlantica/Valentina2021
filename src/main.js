import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

// import VueTouch from 'vue-touch'

createApp(App)
  // .use(VueTouch, { name: 'v-touch' })
  .use(router)
  .mount("#app")
