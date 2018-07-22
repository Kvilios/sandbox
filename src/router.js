import Vue from 'vue'
import VueRouter from 'vue-router'
import vHome from '@/js/components/pages/home'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: vHome
        }
    ]
})