const webpack = require("webpack");

module.exports = function override(config, env) {
  // Add the plugin
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: "process/browser",
    })
  );

  // Add a fallback for the 'crypto' module
  config.resolve.fallback = {
    ...config.resolve.fallback,
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    buffer: require.resolve("buffer/"),
    vm: require.resolve("vm-browserify"),
  };

  return config;
};
