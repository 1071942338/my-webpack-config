const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;

module.exports = merge(baseConfig, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new OptimizeCssAssetsPlugin(),
    //Make sure that the plugin is after any plugins that add images
    new ImageminPlugin({
      pngquant: {
        quality: "95-100",
      },
    }),
  ],
});
