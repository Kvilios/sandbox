import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import 'normalize.css'
import SvgIcon from 'vue-svgicon'
import './svg'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(SvgIcon)
Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
