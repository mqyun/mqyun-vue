import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/Login'
import Sentence from '@/page/Sentence'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/sentence',
      name: 'Sentence',
      component: Sentence
    }
  ]
})
