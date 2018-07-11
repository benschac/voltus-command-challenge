require("dotenv").config();
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

/*
* webpack development server
*/

module.exports = {
	output: {
		publicPath: "/dist/",
		filename: "bundle.js"
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			},
			{
				test: /^((?!\.global).)*\.s?[ac]ss$/,
				use: [
					devMode ? "style-loader" : MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options:
					{
						sourceMap: true,
						modules: true,
						localIdentName: "[local]___[hash:base64:5]",
						importLoaders: 1,
					},
					},
					"postcss-loader",
				],
			},
			{
				test: /\.global\.css$/,
				use: [
					devMode ? "style-loader" : MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
					},
				],
			},
		]
	},
	devServer: {
		stats: "minimal"
	},

	devtool: "source-map",

	plugins: [
		new HtmlWebPackPlugin({
			template: "./index.html",
			filename: "./index.html",
		}),
		new MiniCssExtractPlugin({
		// Options similar to the same options in webpackOptions.output
		// both options are optional
			filename: devMode ? "[name].css" : "[name].[hash].css",
			chunkFilename: devMode ? "[id].css" : "[id].[hash].css",
		}),
	],
};
