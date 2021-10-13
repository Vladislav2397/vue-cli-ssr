import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
            middlewares: [
                async (data: any) => {
                    console.log('route middleware')
                    console.log('store isAuth', data.store.state.isAuth)
                    if (!data.store.state.isAuth) {
                        console.log('data', data)
                        data.redirect('/not-found')
                    }
                }
            ]
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import(/* webpackChunkName: "login" */ '../views/Login.vue')
    }
]

export default () => new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
