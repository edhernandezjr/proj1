/* eslint-env node */
module.exports = function ( grunt ) {
	grunt.loadNpmTasks( 'grunt-banana-checker' );
	grunt.loadNpmTasks( 'grunt-stylelint' );
	grunt.loadNpmTasks( 'grunt-eslint' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( '@lodder/grunt-postcss' );

	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),
		uglify: {
			build: {
				src: [
					'node_modules/alpinejs/dist/cdn.js',
					'node_modules/quill/dist/quill.js',
					'resources/js/app.js'
				],
				dest: 'resources/js/app.min.js'
			}
		},
		eslint: {
			options: {
				cache: true
			},
			all: [
				'**/*.{js,json}',
				'!node_modules/**',
				'!vendor/**',
				'!**/*.min.{js,json}',
				'!*.css'
			]
		},
		banana: {
			all: 'i18n/'
		},
		stylelint: {
			options: {
				customSyntax: 'postcss-less'
			},
			all: [
				'*.{less,css}',
				'**/*.{less,css}',
				'!node_modules/**',
				'!resources/libraries/**',
				'!resources/js/**',
				'!resources/css/**',
				'!vendor/**',
				'!*.css'
			]
		},
		postcss: {
			options: {
				map: false,
				processors: [
					require( 'tailwindcss' ),
					require( 'autoprefixer' )( {
						overrideBrowserslist: [ 'last 1 version' ]
					} )
				]
			},
			build: {
				src: [
					'tailwind.css'
				],
				dest: 'resources/css/app.css'
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
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.registerTask( 'compile-tailwindcss', [ 'postcss' ] );
	grunt.registerTask( 'watch-tailwindcss', [ 'watch:postcss' ] );
	grunt.registerTask( 'test', [ 'banana', 'uglify', 'stylelint' ] );
	grunt.registerTask( 'default', 'test' );
};
