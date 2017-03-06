var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: 'build.js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
		        test: /\.css$/,
		        loader: ['style-loader', 'css-loader']
		        // 这里有一个大坑：加载顺序不能乱，先style然后css，原因是版本迭代问题
		    },
		    {
		        test: /\.less$/,
		        loader: ['less-loader'],
		        exclude: /node_modules/
		    },
		    {
		        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
		        loader: 'file-loader'
		    },
		    {
		        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
		        loader: 'file-loader',
		        query: {
		          	name: '[name].[ext]?[hash]'
		        }
		    }
		]
	},
	plugins: [
	    new webpack.HotModuleReplacementPlugin(),
	    // https://github.com/ampedandwired/html-webpack-plugin
	    new HtmlWebpackPlugin({
	      filename: 'index.html',
	      template: 'index.html',
	      inject: true
	    })
	],
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	devtool: '#eval-source-map'
}

if(process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map'
	module.exports.plugins = (module.exports.plugins || []).concat([
	    new webpack.DefinePlugin({
	      'process.env': {
	        NODE_ENV: '"production"'
	      }
	    }),
	    new webpack.optimize.UglifyJsPlugin({
	      compress: {
	        warnings: false
	      }
	    })
	])
}