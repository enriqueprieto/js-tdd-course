module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb-base',
	],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {
		semi: [2, 'never'],
		indent: ['error', 'tab'],
		'no-tabs': 0,
		'no-undef': 'error',
		'arrow-body-style': ['error', 'as-needed'],
	},
}
