const path = require('path')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  bail: true,
  entry: {
    'blizzparser': './index.js'
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].min.js',
    library: '[name]',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
    publicPath: '/'
  },
  target: 'node'
}
