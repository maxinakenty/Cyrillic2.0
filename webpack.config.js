const webpack = require('webpack');
const IS_DEVELOPMENT = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'; // Changing environment

module.exports = {
  context: __dirname + '/_src/pages/index',
  entry: {
    main: './index'
  },
  output: {
    path: __dirname + '/_dist/js',
    filename: '[name].js'
  },

  watch: IS_DEVELOPMENT,
  watchOptions: {
    argregateTimeout: 100
  },

  devtool: IS_DEVELOPMENT ? 'cheap-module-inline-source-map' : false,

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
  ],

  resolve: {
    modules: [
      __dirname + '/_src'
    ],
    alias: {
      'Toggle-button': '_js/Toggle-button',
      'Rhythm-debug': '_js/Rhythm-debug',
      'Grid-debug': '_js/Grid-debug',
      'Breakpoints-debug': '_js/Breakpoints-debug',
    }
  },

  module: {
    rules: [{
      test: /\.js?$/,
      exclude: [/node_modules/],
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  }
};

if (!IS_DEVELOPMENT) {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
        unsafe: true
      }
    }));
}