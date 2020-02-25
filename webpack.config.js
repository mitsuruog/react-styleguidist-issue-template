var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },

  // Enable sourcemaps for debugging webpack"s output.
  devtool: "source-map",

  resolve: {
    extensions: [".jsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a ".ts" or ".tsx" extension will be handled by "awesome-typescript-loader".
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      },

      // All output ".js" files will have any sourcemaps re-processed by "source-map-loader".
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html"
    })
  ]
};
