module.exports = function (grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        /**
         * https://github.com/timmywil/grunt-bowercopy
         */
        bowercopy: {
            options: {
                srcPrefix: 'bower'
            },
            css: {
                options: {
                    destPrefix: 'css/packages'
                },
                files: {
                    'font-awesome.css': 'font-awesome/css/font-awesome.css'
                }
            },
            js: {
                options: {
                    destPrefix: 'js/pacakges'
                },
                files: {
                    'jquery.js': 'jquery/dist/jquery.js'
                }
            },
            fonts: {
                files: {
                    'css/fonts': 'font-awesome/fonts'
                }
            }
        },
        /**
         *  http://jonsuh.com/blog/get-started-with-grunt/
         */
        sass: {
            jasimmk: {
                files: {
                    'css/style.css': [
                        'sass/style.scss'
                    ],
                    'css/style-wide.css': [
                        'sass/style-wide.scss'
                    ],
                    'css/style-normal.css': [
                        'sass/style-normal.scss'
                    ],
                    'css/style-mobile.css': [
                        'sass/style-mobile.scss'
                    ],
                    'css/style-mobilep.css': [
                        'sass/style-mobilep.scss'
                    ],
                    'css/style-noscript.css': [
                        'sass/style-noscript.scss'
                    ]

                }
            }
        },
        /**
         * https://github.com/gruntjs/grunt-contrib-cssmin
         */
        cssmin: {
            options: {
                keepSpecialComments: 0
            },

            jasimmk: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */\n',
                    expand: true
                },
                files: {
                    'css/all.min.css': [
                        'css/packages/font-awesome.css',
                        'css/skel.css',
                        'css/style.css',
                        'css/style-wide.css',
                        'css/style-noscript.css'
                    ],
                    'css/skel.min.css': [
                        'css/skel.css'
                    ],
                    'css/style.min.css': [
                        'css/packages/font-awesome.css',
                        'css/style.css',

                    ],
                    'css/style-wide.min.css': [
                        'css/style-wide.css'
                    ],
                    'css/style-normal.min.css': [
                        'css/style-normal.css'
                    ],
                    'css/style-mobile.min.css': [
                        'css/style-mobile.css'
                    ],
                    'css/style-mobilep.min.css': [
                        'css/style-mobilep.css'
                    ],
                    'css/style-noscript.min.css': [
                        'css/style-noscript.css'
                    ]
                }
            }
        },

        /**
         * https://github.com/gruntjs/grunt-contrib-jshint
         */
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                }
            },
            jasimmk: {
                files: {
                    src: ['Grunfile.js', 'js/init.js']
                }
            },
            gruntfile: {
                files: {
                    src: ['Gruntfile.js']
                }
            }
        },

        /**
         * https://github.com/gruntjs/grunt-contrib-uglify
         */
        uglify: {
            options: {
                preserveComments: false
            },
            jasimmk: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */\n',
                },
                files: {
                    'js/all.min.js': [
                        'js/packages/jquery.js',
                        //'js/packages/bootstrap.js',
                        'js/skel.min.js',
                        'js/init.js'
                    ]
                }
            }
        },

        /**
         * https://github.com/gruntjs/grunt-contrib-watch
         */
        watch: {
            bower: {
                files: ['bower/**/*.css', 'bower/**/*.js'],
                tasks: ['bowercopy']
            },
            sass: {
                files: ['sass/*.scss', 'sass/**/*.scss'],
                tasks: ['sass:jasimmk']
            },
            css: {
                files: ['css/*.css', '!css/*.min.css', 'css/**/*.css', '!css/**/*.min.css'],
                tasks: ['cssmin']
            },
            js: {
                files: ['js/packages/*.js', 'js/init.js', '!js/skel.min.js'],
                tasks: ['jshint:jasimmk', 'uglify:jasimmk']
            },
            gruntfile: {
                files: ['Gruntfile.js'],
                tasks: ['default']
            }
        }
    });

    /**
     * Load all dependency plugins via load-grunt-tasks module
     * https://github.com/sindresorhus/load-grunt-tasks
     */
    require('load-grunt-tasks')(grunt);

    // Register default tasks - all will run simply by typing "grunt" at cli
    grunt.registerTask('default', ['bowercopy', 'sass', 'cssmin', 'jshint', 'uglify']);
};