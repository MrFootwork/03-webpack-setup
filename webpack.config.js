const path = require('path')

module.exports = {
	entry: {
		index: './src/index.js',
		print: './src/index.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},

	mode: 'development',
}
