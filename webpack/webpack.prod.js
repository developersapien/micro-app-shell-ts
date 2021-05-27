const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        example: 'example@https://doctor-x-prod-login.web.app/remoteEntry.js',
      },
    }),
    new HtmlWebpackPlugin({
      hash: true,
      filename: './index.html',
      template: './src/index.html',
      title: 'Login Page',
      inject: false,
    }),
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('prod'),
    }),
  ],
}
