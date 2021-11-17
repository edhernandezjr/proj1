module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'pink-leni': '#ce1069',
				'blue-leni': '#031684',
				'black-leni': '#1b1b1e'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [
		require( '@tailwindcss/typography' )( {
			className: 'mw-parser-output'
		} ),
		require( '@tailwindcss/forms' )
	]
};
