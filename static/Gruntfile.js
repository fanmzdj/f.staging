module.exports = function(grunt) {

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            // 这里是concat任务的配置信息
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd-hh") %> */\n'
            },
            common: {
                src: [  'static/js/jquery.2.js',
                        'static/js/jquery.cookie.js',
                        'static/js/layzr.min.js',
                        'static/js/bc_ajax.js' ],
                dest: 'dist/js/common.min.js'
            },
            library: {

            }
        },
        uglify: {
            // 这里是uglify任务的配置信息
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd-hh") %> */\n'
            },
            common: {
                src: [  'static/js/jquery.2.js',
                        'static/js/jquery.cookie.js',
                        'static/js/layzr.min.js',
                        'static/js/bc_ajax.js' ],
                dest: 'dist/js/common.min.js'  
            }
        },
        cssmin: {
            // 这里是cssmin任务的配置信息
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd-hh") %> */\n'
            },
            build: {
                src: [  'static/css/bootstrap.min.css',
                        'static/css/font-awesome.css',
                        'static/css/common.css' ],
                dest: 'dist/css/common.min.css'
            },
            index: {
                src: [  'static/css/index.css' ],
                dest: 'dist/css/index.min.css'
            },
            home: {
                src: [  'static/css/home.css' ],
                dest: 'dist/css/home.min.css'
            }
        }
    });

    // 加载包含 "uglify" 任务的插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // 默认被执行的任务列表
    grunt.registerTask('devbcweb', ['concat','cssmin']);
    grunt.registerTask('bcweb', ['uglify','cssmin']);

};