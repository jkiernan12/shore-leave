module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{ico,html,svg,png,json,txt}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};