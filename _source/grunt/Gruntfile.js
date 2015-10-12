module.exports = function(grunt) { // Обязательная функция-обертка
    // Конфигурация проекта
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //------------------------------------------------------------
        less: { // Task less
            options: {
                expand: true
            },
            dev: { // Target
                options: {
                    strictMath: true
                },
                files: {
                    'D://Projects/Barbershop/css/bootstrap.css': ['D://Projects/Barbershop/less/custom/custom-bootstrap.less']
                    
                }
            },
            release: { // Target
                options: {
                    strictMath: true,
                    yuicompress: true
                },
                files: {
					'D://Projects/Barbershop/css/bootstrap.css': ['D://Projects/Barbershop/css/less/custom/custom-bootstrap.less']
                }
            }
        },
		cssmin: {
			  target: {
				files: [{
				  expand: true,
				  cwd: 'D://Projects/Barbershop/css/',
				  src: ['*.css', '!*.min.css'],
				  dest: 'D://Projects/Barbershop/css/',
				  ext: '.min.css'
				}]
			  }
			}
        //------------------------------------------------------------
    });
    // Инициализация плагинов, таски которых мы вызываем
    grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
};