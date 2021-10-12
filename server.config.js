export default {
  plugins: [
    "@uvue/server/plugins/gzip",
    "@uvue/server/plugins/static",
    "@uvue/server/plugins/modernBuild",
    [
      "@uvue/server/plugins/cookie",
      {
        secret: "cakes",
      },
    ],
  ],
};
