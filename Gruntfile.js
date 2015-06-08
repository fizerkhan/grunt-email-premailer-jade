module.exports = function(grunt) {


    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // Re-usable filesystem paths (these shouldn't be modified)
        paths: {
            src: 'src',
            dist: 'inlined',
        },

        // Takes your scss files and compiles them to css
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    '<%= paths.src %>/scss/css/main.css': '<%= paths.src %>/scss/main.scss',
                    '<%= paths.src %>/scss/css/responsive.css': '<%= paths.src %>/scss/responsive.scss'
                }
            }
        },

        jade: {
            dist: {
                options: {
                    client: false,
                    pretty: true
                },
                files: [{
                    cwd: "<%= paths.src %>",
                    src: "*.jade",
                    dest: "<%= paths.dist %>",
                    expand: true,
                    ext: ".html"
                }]
            }
        },

        // Inlines your css
        premailer: {
            html: {
                options: {
                    removeComments: true
                },
                files: [{
                    expand: true,
                    src: ['<%= paths.dist %>/*.html'],
                    dest: ''
                }]
            }
        },

        // Watches for changes to css or email templates then runs grunt tasks
        watch: {
            files: ['<%= paths.src %>/**/*.jade', '<%= paths.src %>/scss/*.scss'],
            tasks: ['default']
        },

    });


    // Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-premailer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['sass', 'jade', 'premailer']);

};
