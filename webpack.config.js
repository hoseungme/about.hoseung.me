const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

dotenv.config();

module.exports = (env) => {
  const { mode } = env;
  const isProduction = mode === "production";

  const devServer = !isProduction ? {
    contentBase: path.resolve("./build"),
    index: "index.html",
    port: 3000,
    open: true,
    historyApiFallback: true,
  } : undefined;

  return {
    entry: "./src/index.tsx",
    output: {
      filename: "bundle.js",
      path: path.resolve("./build"),
      publicPath: "/"
    },
    resolve: {
      fallback: {
        fs: false,
        path: false,
      },
      modules: ["node_modules"],
      extensions: [".ts", ".tsx", ".js"],
    },
    devServer,
    mode,
    module: {
      rules: [
        {
          test: /\.png$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 10000,
                name: 'static/[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(ts|tsx)$/,
          use: ["babel-loader", "ts-loader"],
        },
        {
          test: /\.md$/,
          use: "raw-loader",
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "index.html",
      }),
      new webpack.EnvironmentPlugin({
        NODE_ENV: mode,
        ...process.env,
      }),
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "src/data/markdown/images",
            to: "static",
          },
        ],
      }),
    ],
  };
};
