const path = require("path");

const getDevServer = () => ({
  proxy: {
    "/": "http://localhost:8001"
  },
  contentBase: path.join(__dirname, "..", "src/public"),
  compress: true,
  port: 9000,
  hot: true,
  overlay: {
    warnings: true,
    errors: true
  }
});

module.exports.getDevServer = getDevServer;
