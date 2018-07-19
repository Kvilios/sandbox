import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        pages: {
            home: {
                title: 'Главная'
            }
        },
        layouts: {
            header: {

            },
            footer: {

            }
        }
    },
    mutations: { },
    actions: { },
    getters: {
        pages(state) {
            return state.pages;
        },
        layouts(state) {
            return state.layouts;
        }
    }
})