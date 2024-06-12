// const webpack = require("webpack");

// module.exports = function override(config, env) {
//   // Add the plugin
//   config.plugins.push(
//     new webpack.ProvidePlugin({
//       process: "process/browser",
//     })
//   );

//   // Add a fallback for the 'crypto' module
//   config.resolve = {
//     ...config.resolve,
//     crypto: require.resolve("crypto-browserify"),
//     stream: require.resolve("stream-browserify"),
//     buffer: require.resolve("buffer/"),
//     vm: require.resolve("vm-browserify"),
//   };

//   return config;
// };

const path = require("path");
const { override, addWebpackAlias } = require("customize-cra");

module.exports = override(
  addWebpackAlias({
    "@components": path.resolve(__dirname, "src/components/"),
    "@utils": path.resolve(__dirname, "src/utils/"),
  })
);
