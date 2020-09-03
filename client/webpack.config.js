const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "../backend/public/dist"),
    filename: "app.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          "cache-loader",
          "babel-loader?cacheDirectory"
        ],
        exclude: [
          /node_modules/
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  devtool: false,
  resolve: {
    extensions: [
      ".js",
      ".jsx"
    ]
  }
};
