const path = require('path')  // we are using require because this will be run by node and node still doesn't understand es6 modules

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.jsx',
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    // if I do const App = require('./App'), it will look for ./App, then ./App.js, then ./App.jsx 
    // and then ./App.json. Hence resolve is the order in which webback is going to look for module
    extensions: ['.js', '.jsx', '.json'] 
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true  // if your code is divided into multiple chunks, please tell me about that
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,  // anytihng that ends with .jsx or .js runs through babel-loader
        loader: 'babel-loader'
      }
    ]
  }
};
