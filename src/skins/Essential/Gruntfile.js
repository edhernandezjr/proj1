/* eslint-env node */
module.exports = function ( grunt ) {
	grunt.loadNpmTasks( 'grunt-banana-checker' );
	grunt.loadNpmTasks( 'grunt-stylelint' );
	grunt.loadNpmTasks( 'grunt-eslint' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( '@lodder/grunt-postcss' );

	grunt.initConfig( {
		eslint: {
			options: {
				cache: true
			},
			all: [
				'**/*.{js,json}',
				'!node_modules/**',
				'!vendor/**'
			]
		},
		banana: {
			all: 'i18n/'
		},
		stylelint: {
			options: {
				syntax: 'less'
			},
			all: [
				'*.{less,css}',
				'**/*.{less,css}',
				'!node_modules/**',
				'!resources/libraries/**',
				'!vendor/**',
				'!tailwind.css'
			]
		},
		postcss: {
			options: {
				map: true,
				processors: [
					require( 'tailwindcss' ),
					require( 'autoprefixer' )( {
						overrideBrowserslist: [ 'last 1 version' ]
					} )
				]
			},
			dist: {
				src: 'resources/css/app.css'
			}
		},
		watch: {
			postcss: {
				files: 'resources/css/*.css',
				tasks: [ 'compile-tailwindcss' ],
				options: {
					interrupt: true
				}
			}
		}
	} );

	// Register Tasks
	grunt.registerTask( 'compile-tailwindcss', [ 'postcss' ] );
	grunt.registerTask( 'watch-tailwindcss', [ 'watch:postcss' ] );
	grunt.registerTask( 'test', [ 'eslint', 'banana', 'stylelint' ] );
	grunt.registerTask( 'default', 'test' );
};
