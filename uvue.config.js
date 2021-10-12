export default {
  plugins: [
    "@uvue/core/plugins/asyncData",
    [
      "@uvue/core/plugins/vuex",
      {
        onHttpRequest: true,
        fetch: true,
      },
    ],
    [
      "@uvue/core/plugins/middlewares",
      {
        middlewares: [
          async ({ req, isServer }) => {
            if (isServer) {
              const cookie = req.headers.cookie && req.headers.cookie.split("; ");
              const token = cookie ? cookie[0] : null;
              if (token) {
                console.log("authed");
              } else {
                console.log("not authed");
              }
            }
          },
        ],
      },
    ],
    "@uvue/core/plugins/errorHandler",
  ],
};
