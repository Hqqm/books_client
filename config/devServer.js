const path = require("path");

const getDevServer = () => ({
  proxy: {
    "/api/": {
      target: "http://localhost:8001",
      pathRewrite: { "^/api": "" }
    }
  },
  contentBase: path.join(__dirname, "..", "src/public"),
  compress: true,
  port: 9000,
  historyApiFallback: true,
  hot: true,
  overlay: {
    warnings: true,
    errors: true
  }
});

module.exports.getDevServer = getDevServer;
