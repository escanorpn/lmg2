import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'


// import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'


import VueCookies from 'vue-cookies'
import * as cr from 'vue-nacl-crypter' 
const Dcrypt = cr.VueNaclCrypter
 
Vue.use(Dcrypt)
Vue.use(VueCookies)
Vue.$cookies.config('7d')

Vue.use(VueAxios, axios)
Vue.use(Antd);
Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueLazyload)
// Vue.use(isMobile)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
