/*global module:false*/
/*jshint node:true */
'use strict';

module.exports = function(grunt) {

	// Load all grunt tasks
	//require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	grunt.loadNpmTasks('assemble');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');


//--------------------------------------------------------------------------------------------------

	var conf = {

		// Is this really needed?
		pkg: grunt.file.readJSON('package.json'),
		is_live: false,

		//Assemble files from .hbs -contentfiles, based on data, layouts and partials
		assemble:{
			options:{
				assets:'build/',
				data:['src/__assemble/data/**/*.{json,yml}'],
				ext:'',
				helpers:'src/__assemble/helpers/*.js',
				layout:'default.hbs',
				layoutdir:'src/__assemble/layouts/',
				partials:['src/__assemble/partials/**/*.hbs'],
				removeHbsWhitespace: true
			},
			hbs:{
				files:[
					{
						expand:true,
						cwd:'src/',
						src:['**/*.hbs','!_{_assemble,script,style}/**/*'],
						dest:'build/'
					}
				]
			}
		},

		//Check syntax of JavaScript
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			hbshelpers: {
				files: {src:['src/__assemble/helpers/*.js']}
			},
			gruntfile: {
				files: {src:['Gruntfile.js']}
			}
		},

		//Clean the structure, so that everything can be generated from scratch
		clean: {
			build: {
				files:[
					{
						src: ['build/*']
					}
				]
			}
		}

	};

//--------------------------------------------------------------------------------------------------

	// Project configuration.
	grunt.initConfig(conf);


	grunt.registerTask('validate', [
		'jshint'
	]);

	grunt.registerTask('build', [
		'assemble'
	]);

	grunt.registerTask('default', [
		'validate',
		'build'
	]);

	grunt.registerTask('rebuild', [
		'clean:build',
		'default'
	]);

};
