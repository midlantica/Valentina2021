import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Index"
import ArtistStatement from "../views/ArtistStatement"
import Portfolio from "../views/Portfolio"
import Shop from "../views/Shop"
import Licensing from "../views/Licensing"
import Wholesale from "../views/Wholesale"
import Contact from "../views/Contact"
import EmailConfirm from "../views/EmailConfirm"
import NotFound from "../views/NotFound"
import VueBodyClass from "vue-body-class"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { bodyClass: "index" },
    // children: [
    //   {
    //     path: '',
    //     component: Statement
    //   },
    //   {
    //     path: '',
    //     component: HomeContent
    //   }
    // ]
  },
  // {
  //   path: '*',
  //   redirect: '/NotFound'
  // },
  {
    path: "/ArtistStatement",
    name: "ArtistStatement",
    component: ArtistStatement,
    meta: { bodyClass: "artists-statement" },
  },
  {
    path: "/Portfolio",
    name: "Portfolio",
    component: Portfolio,
    meta: { bodyClass: "portfolio" },
  },
  {
    path: "/Shop",
    name: "Shop",
    component: Shop,
    meta: { bodyClass: "shop" },
  },
  {
    path: "/Licensing",
    name: "Licensing",
    component: Licensing,
    meta: { bodyClass: "licensing" },
  },
  {
    path: "/Wholesale",
    name: "Wholesale",
    component: Wholesale,
    meta: { bodyClass: "wholesale" },
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
    meta: { bodyClass: "contact" },
  },
  {
    path: "/EmailConfirm",
    name: "EmailConfirm",
    component: EmailConfirm,
  },
  // will match everything and put it under `$route.params.pathMatch`
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
  // will match anything starting with `/user-` and put it under `$route.params.afterUser`
  // { path: '/user-:afterUser(.*)', component: UserGeneric },
]

const vueBodyClass = new VueBodyClass(routes)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  vueBodyClass.guard(to, next)
})
export default router
