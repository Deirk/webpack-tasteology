const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/presentation/assets/js/index.ts', // Entry point for TypeScript
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Handle TypeScript files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // Handle CSS files
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('@tailwindcss/postcss'), // Tailwind CSS
                  require('autoprefixer'), // Autoprefixer
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Handle image files
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext][query]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolve TypeScript and JavaScript files
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/presentation/pages/index.html', // HTML template
      filename: 'index.html', // Output HTML file
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve files from the dist folder
    },
    compress: true,
    port: 9000,
  },
  mode: 'development',
};