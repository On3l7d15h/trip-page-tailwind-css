module.exports = {
	purge: [
		"./**/*.html"
	],
	darkMode: false,
	theme: {
		extend: {
			backgroundImage: theme => ({
				"main-img": "linear-gradient(to right, rgba(134, 239, 172, 0.3), rgba(74, 222, 128, 0.6)), url('../img/mainBackground.jpg')"
			}),
			screens: {
				"xsm": "320px"
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: []
}