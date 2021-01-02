const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");
const outDir = resolve(__dirname, "build", "dist");
const srcDir = resolve(__dirname, "src");

module.exports = {
  entry: resolve(srcDir, "index.jsx"),
  output: {
    path: outDir,
    filename: "app.bundel.js",
  },
  resolve: {
    extensions: [".json", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devtool: "source-map",
  devServer: {
    contentBase: outDir,
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "index.html"),
      filename: "index.html",
    }),
  ],
};
