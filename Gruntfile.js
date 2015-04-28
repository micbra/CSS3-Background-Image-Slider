module.exports = function (grunt) {

	grunt.initConfig({

		sass: {
			dev: {
				options: {
					precision: 6
				},
				files: {
					'css/style.css': ['css/style.scss']
				}
			},
			live: {
				options: {
					precision: 6,
					style: 'compressed'
				},
				files: {
					'css/style.css': ['css/style.scss']
				}
			}
		}});

	grunt.loadNpmTasks('grunt-contrib-sass');
	
};