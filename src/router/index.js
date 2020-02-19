import Vue from 'vue'
import Router from 'vue-router'
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'
import Main from '@/components/Main'
import Home from '@/components/Home'
import Live from '@/components/Live'
import Config from '@/components/Config'
import firebase from 'firebase'
import store from '@/store';

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: 'signin'
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/',
      name: 'Main',
      component: Main,
      meta: { requiresAuth: false }, //実装時必ずtrueにすること！！！
      children: [
        {
          path: '',
          name: 'Home',
          component: Home,
        },
        {
          path: '/live/:isActive/:bbsId',
          name: 'Live',
          component: Live,
        },
        {
          path: '/config',
          name: 'Config',
          component: Config,
        }
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  let currentUser = firebase.auth().currentUser
  if (requiresAuth) {
    if (!currentUser) {
      next({
        path: '/signin',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router