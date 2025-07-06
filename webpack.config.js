const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { format } = require("date-fns");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = (env) => {
  console.log(env);
  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "build/"),
      filename: "[name].[chunkhash].js",
    },
    devServer: {
      port: 8081,
      historyApiFallback: true,
      open: true,
      compress: true,
    },
    module: {
      rules: [
        {
          include: [path.resolve(__dirname, "public")],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            // options: {
            //   presets: ["@babel/preset-env", "@babel/preset-react"],
            // },
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.html$/,
          use: ["html-loader"],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: "Clone App",
        template: path.resolve(__dirname, "public/index.ejs"),
        templateParameters: {
          today: format(new Date(), "dd MMMM"),
          base: process.env.BASE_URL,
        },
        filename: "index.html",
      }),
      new ReactRefreshWebpackPlugin(),
    ],
  };
};
