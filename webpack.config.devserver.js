require("dotenv").config();
const path = require("path");

/*
* webpack development server
*/

module.exports = {
	entry: ["./src/index.js"],

	output: {
		path: path.join(__dirname, "dist"),
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
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},

	resolve: {
		modules: [path.resolve("./node_modules"), path.resolve("./src")],
		extensions: [".json", ".js"]
	},

	devServer: {
		stats: "minimal"
	},

	devtool: "source-map"
};
