module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true
	},
	"extends": "eslint:recommended",
	"parser": "babel-eslint",
	"parserOptions": {
	"ecmaVersion": 6,
	"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true,
			"modules": true,
			"experimentalObjectRestSpread": true
		},
	},
	"plugins": [
		"react"
	],
	"globals": {
		"document": true,
		"localStorage": true,
		"window": true,
		"Notification": true
	},
	"rules": {
		"indent": ["error", 2],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		]
	}
};