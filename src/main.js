import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import BookShelf from './components/BookShelf.vue'
import MaleBooks from "./components/MaleBooks.vue";
import FemaleBooks from "./components/FemaleBooks.vue"
import BookItem from "./components/BookItem"
import BookInfo from "./components/BookInfo"
import reader from "./components/Reader"
import SearchResult from "./components/SearchResult"
import "./assets/reset.css"
import store from './store/store'

Vue.use(VueRouter)
Vue.use(vueResource)
Vue.prototype.$axios = axios

const router = new VueRouter({
  base: __dirname,
  routes: [
    {
      path: '/male/cats/:catname',
      name: 'cat',
      component: BookItem
    },
    {
      path: '/',
      component: BookShelf
    },
    {
      path: '/femalebooks',
      component: FemaleBooks
    },
    {
      path: '/malebooks',
      component: MaleBooks
    },
    {
      path: '/bookinfo/:bookid',
      name: 'bookinfo',
      component: BookInfo
    },
    {
      path: 'reader/:bookid',
      name: 'reader',
      component: reader
    },
    {
      path: 'search/:keyword',
      name: 'search',
      component: SearchResult
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')
