module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		express: {
			dev: {
				options: {
					port: 8051,
					host: 'http://localhost',
					bases: 'dist'
				}
			}
		},
		less: {
			dev: {
				files: {
					'dist/styles.css': 'dev/styles.less'
				}
			}
		},
		copy: {
			dev: {
				files: [
					{
						expand: true,
						flatten: true,
						src: ['dev/*.html', 'dev/*.js'],
						dest: 'dist/',
						filter: 'isFile'
					}
				]
			}
		},
		watch: {
			dev: {
				files: ['*.less', 'Gruntfile.js'],
				tasks: ['less:dev'],
				options: {
					livereload: true,
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-express');

	grunt.registerTask('server', [
		'express',
		'copy',
		'less',
		'watch'
	]);

	grunt.registerTask('default', [
		'copy',
		'less'
	]);

	grunt.registerTask('build', function(mode) {
		var tasksToRun = [];

		tasksToRun = tasksToRun.concat([
			'less'
		]);
		if (grunt.option('color')) {
			tasksToRun = tasksToRun.concat([
				'colorguard'
			]);
		}

		grunt.task.run(tasksToRun);
	});

};
