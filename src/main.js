import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import 'normalize.css'
import SvgIcon from 'vue-svgicon'
import './svg'

Vue.use(SvgIcon)

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
