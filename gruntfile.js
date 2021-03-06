/**
 * Created by LamDo on 1/3/16.
 */
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: ['build', 'dist', 'tmp'],

        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'build/',
                        src: ['**/*.js'],
                        dest: 'build/'
                    },
                ],
            },
        },

        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['**/*.js'],
                        dest: 'build/'
                    }
                ]
            }
        },

        watch: {
            options: {
                livereload: false
            },
            src: {
                files: ['src/**/*.js'],
                tasks: ['babel', 'ngAnnotate']
            },
            test: {
                files: ['test/**/*.tests.js'],
                tasks: ['jasmine']
            }
        },

        concat: {
            dist: {
                dest: 'dist/main.js',
                src: [  'build/**/*.js']
            }
        },

        copy: {
                assets: {
                    files: [
                        {
                            expand: true,
                            cwd: 'src/',
                            src: ['**/*.css', '**/*.html', '**/*.json', '**/*.png'],
                            dest: 'build/'
                        }
                    ]
                }
            }
        });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-ng-annotate');

    grunt.registerTask('default', ['clean', 'copy:assets', 'babel', 'ngAnnotate', 'watch']);
}