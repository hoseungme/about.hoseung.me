const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const tsconfig = require("./tsconfig.json");

function convertPathsToAlias() {
  const { baseUrl, paths } = tsconfig.compilerOptions;
  const alias = {};

  for (const pathsKey in paths) {
    const aliasKey = pathsKey.substring(0, pathsKey.length - 2); // remove '/*'
    const pathsValue = paths[pathsKey][0];
    const resolvedTo = `${baseUrl}/${pathsValue.substring(
      0,
      pathsValue.length - 2
    )}`; // remove '/*'

    alias[aliasKey] = path.resolve(__dirname, resolvedTo);
  }
  return alias;
}

const aliasFromTsconfig = convertPathsToAlias();

module.exports = (env) => {
  const { mode } = env;
  const isProduction = mode === "production";

  const devServer = !isProduction
    ? {
        contentBase: path.resolve("./build"),
        index: "index.html",
        port: 3000,
        open: true,
        historyApiFallback: true,
      }
    : undefined;

  return {
    entry: "./src/index.tsx",
    output: {
      filename: "bundle.js",
      path: path.resolve("./build"),
      publicPath: "/",
    },
    resolve: {
      fallback: {
        fs: false,
        path: false,
      },
      alias: aliasFromTsconfig,
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
                name: "static/[name].[ext]",
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
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "public/images",
            to: "images",
          },
        ],
      }),
    ],
  };
};
