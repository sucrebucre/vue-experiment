import Vue from 'vue'
import Router from 'vue-router'
import StartPage from '@/pages/Start'

Vue.use(Router)

// Fix the "#" in the url
// https://stackoverflow.com/questions/34623833/how-to-remove-hashbang-from-url
// https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: StartPage
    },
    {
      path: '/:package',
      name: 'Package',
      component: StartPage
    }
  ]
})
