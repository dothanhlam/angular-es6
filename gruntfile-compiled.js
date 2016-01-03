/**
 * Created by LamDo on 1/3/16.
 */
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: ['build', 'dist', 'tmp'],

        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.js'],
                    dest: 'build/'
                }]
            }
        },

        watch: {
            options: {
                livereload: false
            },
            src: {
                files: ['src/**/*.js'],
                tasks: ['babel']
            },
            test: {
                files: ['test/**/*.tests.js'],
                tasks: ['jasmine']
            }
        },

        concat: {
            dist: {
                dest: 'dist/main.js',
                src: ['build/**/*.js']
            }
        },

        copy: {
            css: {
                files: [{
                    expand: true,
                    flatten: false,
                    cwd: 'app/profiles/web',
                    src: ['**/*.css'],
                    dest: 'build'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['clean', 'babel', 'watch']);
    grunt.registerTask('dist', ['clean', 'babel', 'concat', 'copy:css']);
};

//# sourceMappingURL=gruntfile-compiled.js.map