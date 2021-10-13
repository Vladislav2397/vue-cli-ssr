export default {
    plugins: [
        '@uvue/core/plugins/asyncData',
        [
            '@uvue/core/plugins/vuex',
            {
                onHttpRequest: true,
                fetch: true
            }
        ],
        [
            '@uvue/core/plugins/middlewares',
            {
                middlewares: [
                    async (data) => {
                        console.log('global middleware')
                        if (data.isServer) {
                            console.log('server')
                            const cookie =
                                data.req.headers.cookie && data.req.headers.cookie.split('; ')
                            const token = cookie ? cookie[0] : null
                            if (token) {
                                data.store.state.isAuth = true
                                console.log('store auth')
                            } else {
                                console.log('not authed')
                            }
                        } else {
                            console.log('client')
                        }
                    }
                ]
            }
        ],
        '@uvue/core/plugins/errorHandler'
    ]
}
