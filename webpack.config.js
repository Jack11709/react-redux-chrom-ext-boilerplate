/* eslint-disable */
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

require('babel-core/register');

const PAGES_PATH = './src/pages';

const generateHtmlPlugins = (items) => {
  return items.map((name) => {
    return new HtmlPlugin({
      filename: `./${name}.html`,
      chunks: [name],
    });
  });
};

module.exports = {
  entry: {
    background: `${PAGES_PATH}/background`,
    index: `${PAGES_PATH}/contentScript`,
    popup: `${PAGES_PATH}/popup`,
  },
  output: {
    path: path.resolve('dist/pages'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        include: path.resolve('./src/styles/index.css'),
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.css$/,
        exclude: path.resolve('./src/styles/index.css'),
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: true,
              minimize: true,
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
      new CopyPlugin([
        {
          from: 'src',
          to: path.resolve('dist'),
          ignore: ['pages/**/*', 'styles/*'],
        }
      ]),
      ...generateHtmlPlugins(['background', 'popup'])
  ]
};
