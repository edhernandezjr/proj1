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
		},
		zIndex: {
			'-1': '-1',
			0: '0',
			10: '10',
			20: '20',
			30: '30',
			40: '40',
			50: '50',
			auto: 'auto'
		}
	},
	variants: {
		aspectRatio: [ 'responsive' ],
		extend: {}
	},
	plugins: [
		require( '@tailwindcss/typography' ),
		require( '@tailwindcss/forms' ),
		require( '@tailwindcss/aspect-ratio' )
	]
};
