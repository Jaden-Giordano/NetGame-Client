const path = require('path');
const { DefinePlugin } = require('webpack');

const phaser = path.join(__dirname, '/node_modules/phaser/', 'src/phaser.js');

module.exports = {
  entry: ['@babel/polyfill', path.join(__dirname, 'app', 'index.js')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /phaser-split\.js$/,
        use: ['expose-loader?Phaser'],
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: 'raw-loader',
      },
    ],
  },
  resolve: {
    alias: {
      phaser,
    },
  },
  plugins: [
    new DefinePlugin({
      WEBGL_RENDERER: true,
      CANVAS_RENDERER: true,
    }),
  ],
};
