import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import VueLazyLoad from 'vue-lazyload'
// import VueTouch from 'vue-touch'
import 'vue-image-lightbox/dist/vue-image-lightbox.min.css'

createApp(App)
  // .use(VueLazyLoad)
  // .use(VueTouch, { name: 'v-touch' })
  .use(router)
  .mount('#app')
