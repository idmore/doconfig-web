import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import footer from './components/footer.vue'
import navbar from './components/navbar.vue'

const router = new VueRouter({
  mode: 'history',
  routes,
  // fixed from https://router.vuejs.org/en/advanced/scroll-behavior.html
  // reset scroll to 0, 0 after transition
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

Vue.use(VueRouter)
// register component
Vue.component('footer-nav', footer)
Vue.component('navbar', navbar)

new Vue({
  base: '/',
  el: '#app',
  router,
  template: '<router-view />',
  created: () => {
    console.log('Doconfig is ready to use.')
  }
})
