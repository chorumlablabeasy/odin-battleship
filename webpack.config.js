// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    open: true, // Sunucuyu başlattığınızda tarayıcıyı otomatik açar
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Web Template',
      template: './src/index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/, // JS dosyaları için
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Babel'ı kullan
          options: {
            presets: ['@babel/preset-env'], // Modern JS'i dönüştür
          },
        },
      },
      {
        test: /\.css$/i, // CSS dosyaları için
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Görsel varlıklar için
        type: 'asset/resource',
      },
    ],
  },
}
