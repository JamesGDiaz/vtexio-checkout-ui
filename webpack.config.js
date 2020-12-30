const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const outputDir = './checkout-ui-custom'
const __DEV__ = process.env.NODE_ENV === 'development'
const src = './src'

module.exports = (env) => {
  return [
    {
      entry: {
        'checkout6-custom.js': {
          import: src + '/checkout6-custom.js',
          filename: 'checkout6-custom.js',
        },
        'checkout-confirmation-custom.js': {
          import: src + '/checkout-confirmation-custom.js',
          filename: 'checkout-confirmation-custom.js',
        },
        'checkout-instore-custom.js': {
          import: src + '/checkout-instore-custom.js',
          filename: 'checkout-instore-custom.js',
        },
        'checkout6-custom.scss': {
          import: src + '/checkout6-custom.scss',
        },
        'checkout-confirmation-custom.scss': {
          import: src + '/checkout-confirmation-custom.scss',
        },
        'checkout-instore-custom.scss': {
          import: src + '/checkout-instore-custom.scss',
        },
      },
      output: {
        filename: '[name].js',
        path: path.resolve(__dirname, outputDir),
      },
      plugins: [new CleanWebpackPlugin()],
      module: {
        rules: [
          {
            test:  /\.js$|jsx/,
            use: 'babel-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.(css|sass|scss)$/,
            use: [
              {
                loader: 'file-loader',
                options: { name: '[name].css' },
              },
              'sass-loader',
            ],
          },
          {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          },
        ],
      },
      resolve: {
        extensions: ['.js', '.jsx'],
      },
    },
  ]
}
