const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const path = require("path");

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: "public",
    runtimeCaching,
    sw: 'service-worker.js',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
});