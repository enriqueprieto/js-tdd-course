const webpack = require('webpack')

module.exports = {
	mode: "development",
	entry: {
		filename: './src/main.js',
	},
	output: {
		filename: './dist/main.js'
	},
	module: {
		rules: [
			{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
		]
	},
	optimization: {
		minimize: true
	}
}
