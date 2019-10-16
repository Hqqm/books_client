const path = require("path");
const { isDev } = require("./env");

const getOutput = env => ({
  path: path.join(__dirname, "..", "dist", "ui"),
  publicPath: "/",
  filename: isDev(env) ? "app.js" : "js/[name]".concat(".[chunkhash:8].js")
});

module.exports.getOutput = getOutput;
