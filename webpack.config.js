const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx|json)$/,
        exclude: path.join(__dirname, "node_modules"),
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.ejs"),
    }),
  ],
};
