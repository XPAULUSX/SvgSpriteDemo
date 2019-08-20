const webpack = require('webpack')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

//get-process chrome | stop-process; start-process chrome --allow-file-access-from-files

module.exports = {
  entry: {
    main: './src/js/main.js',
  },
  output: {
    filename: './dist/js/[name].js'
  },
  module: {
    rules: [{
      test: /\.(svg)$/i,
      loaders: 'svg-sprite-loader',
      options: {
        extract: true,
        spriteFilename: './public/dist/img/icons.svg',
        runtimeCompat: true
      }
    }]
  },
  plugins: [
    new SpriteLoaderPlugin({
      plainSprite: true
    })
  ]
};