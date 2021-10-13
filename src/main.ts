import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import createRouter from './router'
import createStore from './store'

import './globals'

Vue.config.productionTip = false

export default (): Vue => {
    const store = createStore()
    const router = createRouter()

    return new Vue({
        router,
        store,
        render: (h) => h(App)
    })
}
