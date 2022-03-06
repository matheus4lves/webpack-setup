let mode = process.env.npm_lifecycle_event;

const path = require("path");
const postCSSOptions = [require("postcss-import")];

let config = {
  entry: "./app/assets/scripts/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                postCSSOptions,
              },
            },
          },
        ],
      },
    ],
  },
};

if (mode === "dev") {
  // Add develpment configuration
  config.devServer = {
    host: "local-ip",
    hot: true,
    port: 3000,
    open: {
      app: {
        name: "firefox",
        arguments: ["--private-window"],
      },
    },
    static: {
      directory: path.join(__dirname, "app/public"),
    },
  };
}

if (mode === "build") {
  // Add production configuration
  config.module.rules.push({
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [["@babel/preset-env", { targets: "defaults" }]],
      },
    },
  });
}

module.exports = config;
