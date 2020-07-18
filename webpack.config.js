const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  devtool: "inline-source-map",
  mode: "development",
  module: {
	rules: [
		{
			test: /\.ts$/,
			use: 'ts-loader',
			exclude: /node_modules/,
		},
		{
			test: /\.tsx$/,
			"loader": "babel-loader",
			"options": {
				"babelrc": false,
				"presets": [
					[
						"@babel/preset-env",
						{ "targets": { "electron": "9.0.2" } }
					],
					"solid",
					"@babel/preset-typescript",
				],
				"cacheDirectory": true,
				"cacheCompression": false,
				"compact": false
			}
		},
	],
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
};