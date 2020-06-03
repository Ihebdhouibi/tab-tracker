import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Songs from '@/components/songs'
import ViewSong from '@/components/View song/ViewSong'
import singup from '@/components/LoginRegistration'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/songs',
      name: 'Songs',
      component: Songs
    },
    {
      path: '/songs/:songId',
      name: 'Song',
      component: ViewSong
    },
    {
      path: '/signup',
      name: 'signup',
      component: singup
    }
  ]
})
