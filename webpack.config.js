const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    alias: {
      "@emotion/react": path.resolve("./node_modules/@emotion/react"),
      "@emotion/styled-base": path.resolve(
        "./node_modules/@emotion/styled-base"
      ),
      "@emotion/styled": path.resolve("./node_modules/@emotion/styled"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
