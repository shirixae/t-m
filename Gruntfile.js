module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-modernizr');

  grunt.initConfig({
    modernizr: {
      crawl: false,
      dest: '/scripts/main.js',
      tests: [
        'flexbox',
        'csspositionsticky'
      ],
      options: [
        'setClasses'
      ],
      uglify: true
    },

    pug: {
      compile: {
        options: {
          client: false,
          pretty: true
        },
        files: {
          'index.html': 'templates/index.pug',
          'inner.html': 'templates/inner.pug'
        }
      }
    },

    sass: {
      style: {
        files: {
          'css/style.css': 'sass/style.scss'
        }
      }
    },

    postcss: {
      style: {
        options: {
          processors: [
            require('autoprefixer')({browsers: [
              'last 2 versions'
            ]})
          ]
        },
        src: 'css/*.css'
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: [
            '*.html',
            'css/*.css'
          ]
        },
        options: {
          server: '.',
          watchTask: true,
          notify: false,
          open: true,
          cors: true,
          ui: false
        }
      }
    },

    watch: {
      assets: {
        files: ['templates/**/*.pug', 'sass/**/*.scss'],
        tasks:  ['pug', 'sass', 'postcss']
      }
    }
  });

  grunt.registerTask('serve', ['browserSync', 'watch']);
}

// https://github.com/Modernizr/grunt-modernizr
// https://github.com/gruntjs/grunt-contrib-pug