const withOffline = require("next-offline");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

const nextConfig = {
  // Build one level up from ./src
  distDir: "../.next",
  // Workbox
  workboxOpts: {
    clientsClaim: true,
    skipWaiting: true,
    globDirectory: "./public",
    globPatterns: ["**/*.{ico,json}"]
  },
  // Webpack
  webpack: (config, { dev }) => {
    const newConfig = config;

    // Fixes npm packages that depend on `fs` module
    newConfig.node = {
      fs: "empty"
    };

    // Hash static assets
    config.module.rules.push({
      test: /\.(txt|jpg|png|svg)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            context: "",
            outputPath: "static",
            publicPath: "/_next/static",
            name: "[path][name].[hash].[ext]"
          }
        }
      ]
    });

    // Setup eslint on dev
    if (dev) {
      newConfig.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          emitWarning: true
        }
      });
    }

    return newConfig;
  }
};

module.exports = withOffline(withBundleAnalyzer(nextConfig));
