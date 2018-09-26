const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  context: path.resolve(__dirname, 'src'),
	entry: {
		app: './main.js'
	},
	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
	devServer: {
    contentBase: './dist',
    stats: 'errors-only'
	},
	module: {
		rules: [
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [{
              loader: 'css-loader',
              options: { minimize: true }
            },
            'less-loader'
          ],
          publicPath: "../"
				})
      },
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader",
        options: {
          presets: ['env']
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
          minimize: true
        }
      },
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader?name=[name].[ext]&outputPath=images/'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
          'file-loader?name=[name].[ext]&outputPath=fonts/',
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: false,
              runtimeCompat: true,
              esModule: false
            }
          },
          'svgo-loader'
        ]
      }
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
      template: './page/index.pug',
      filetype: 'pug'
		}),
		new ExtractTextPlugin(
      'css/styles.css'
    ),
		new webpack.ProvidePlugin({
			jQuery: 'jquery',          // bootstrap 3.x requires
    }),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    }),
    new ImageminPlugin({
      pngquant: {
        quality: '75-80'
      }
    })
	]
};