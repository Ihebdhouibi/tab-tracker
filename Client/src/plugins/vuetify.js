import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'
Vue.use(Vuetify)

export default new Vuetify(
  {icons: {
    iconfont: 'mdi'
  }
  })
