const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const path = require('path')
module.exports = {
  mode: 'development',
  devServer: {
    host: 'localhost',
    hot: true,
    port: 3002,
    open: true,
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'shell.bundle.js',
  },
  devtool: 'source-map',
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        example: 'example@http://localhost:3001/remoteEntry.js',
      },
    }),
    new HtmlWebpackPlugin({
      hash: false,
      filename: './index.html',
      template: './src/index.html',
      title: 'Development',
      inject: true,
    }),
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('dev'),
    }),
  ],
}
