import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/Index'
import ArtistStatement from '../views/ArtistStatement'
import Portfolio from '../views/Portfolio'
import Shop from '../views/Shop'
import Licensing from '../views/Licensing'
import Wholesale from '../views/Wholesale'
import Contact from '../views/Contact'
import EmailConfirm from '../views/EmailConfirm'
import NotFound from '../views/NotFound'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  {
    path: '/NotFound',
    component: NotFound
  },
  // {
  //   path: '*',
  //   redirect: '/NotFound'
  // },
  {
    path: '/ArtistStatement',
    name: 'ArtistStatement',
    component: ArtistStatement
  },
  {
    path: '/Portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/Shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/Licensing',
    name: 'Licensing',
    component: Licensing
  },
  {
    path: '/Wholesale',
    name: 'Wholesale',
    component: Wholesale
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/EmailConfirm',
    name: 'EmailConfirm',
    component: EmailConfirm
  },
  {
    path: '/404',
    redirect: '/NotFound'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
