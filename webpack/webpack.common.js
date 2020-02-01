const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: Path.resolve(__dirname, '../src/scripts/index.js'),
    projectPage: Path.resolve(__dirname, '../src/scripts/projectPage.js'),
    homePage: Path.resolve(__dirname, '../src/scripts/homePage.js')
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/[name].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: Path.resolve(__dirname, '../public'), to: 'public' }
    ]),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/index.html'),
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      filename: "karnish.html",
      template: Path.resolve(__dirname, '../src/karnish.html'),
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      filename: "foot.html",
      template: Path.resolve(__dirname, '../src/foot.html'),
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      filename: "deezer.html",
      template: Path.resolve(__dirname, '../src/deezer.html'),
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      filename: "vag.html",
      template: Path.resolve(__dirname, '../src/vag.html'),
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      filename: "sacha.html",
      template: Path.resolve(__dirname, '../src/sacha.html'),
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      filename: "brick.html",
      template: Path.resolve(__dirname, '../src/brick.html'),
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: Path.resolve(__dirname, '../src/about.html'),
      chunks: ['app'],
    })
  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      },
    ]
  }
};
