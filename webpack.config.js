const path = require('path');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      // Configure the desired optimization options
      // For example, you can set optimizationLevel for JPEG images
      pngquant: { quality: '65-90' },
      gifsicle: { optimizationLevel: 7 },
      svgo: {},
      plugins: [
        // Add specific plugins for image optimization if needed
      ]
    })
  ]
};