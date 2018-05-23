import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import VueShowdown from 'vue-showdown'

Vue.use(Router)
Vue.use(VueShowdown)

export default new Router({
  routes: [{
    path: '/',
    name: 'Main',
    component: Main
  }, ]
})