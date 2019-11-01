exports.config = {
  namespace: "blink-blink",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "www",
      serviceWorker: false
    }
  ]
};
