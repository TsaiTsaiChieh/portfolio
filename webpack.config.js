const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.tsx',
  devtool: 'inline-source-map',
  stats: {
    // Configure the console output
    errorDetails: true, // this does show errors
    colors: false,
    modules: true,
    reasons: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /.s?css$/,
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== 'production' ?
            'style-loader' :
            MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
        exclude: '/node_modules/',
      },
      {
        test: /\.(woff2|woff|ttf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
        exclude: '/node_modules/',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  plugins: [
    new ProgressBarPlugin(),
    new BundleAnalyzerPlugin(),
  ],
}
