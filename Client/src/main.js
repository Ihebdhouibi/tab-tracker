// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import vuetify from '@/plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import {sync} from 'vuex-router-sync'
import store from '@/store/store'
// youtube video
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)
Vue.config.productionTip = false
// Vue.use(Vuetify)
/* eslint-disable no-new */
sync(store, router)
new Vue({
  el: '#app',
  vuetify,
  store,
  router,
  components: { App },
  template: '<App/>'
})
