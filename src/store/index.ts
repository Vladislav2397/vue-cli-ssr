import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default () => {
    return new Vuex.Store({
        state: () => ({
            isAuth: false
        }),
        mutations: {},
        actions: {},
        modules: {}
    })
}
