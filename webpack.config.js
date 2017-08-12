module.exports = {

	//define entery point
	entry:'./src/script-1.js',

	//define output point
	output: {
		path: '/home/user/Project Practice/Webpack-Tutorial/dist',
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2016']
				}
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}
		]
	}
};