const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'production',
  // mode: 'development',
  devtool: false,
  entry: './src/main.tsx',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve('src'),
        use: [
          {
            loader: 'thread-loader',
            options: {
              workers: require('os').cpus().length - 1,
            },
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              happyPackMode: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  target: ['web', 'es5'],
  plugins: [
    new CopyPlugin({
      patterns: [{ from: './asset', to: './manifest.json' }],
    }),
  ],
}
