const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'public', 'src', 'index.js'),
  output: {
    filename: path.join('public', 'dist', 'bundle.js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
    ],
  },
};
