'use strict'


var gulp = require('gulp'),
	browserify = require('gulp-browserify'),
	contact = require('gulp-concat'),
	connect = require('gulp-connect'),
	livereload = require('gulp-livereload'),
	del = require('del'),
	reactify = require('reactify'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'), 
	nodemon = require('gulp-nodemon'),
	port = process.env.port || 5500;


gulp.task('clean', function(done) {
	del(['dist'], done);
});

gulp.task('connect', function() {
	connect.server({
		port: port,
		livereload: true
	});
});

gulp.task('js', function() {
	gulp.start('clean');
	gulp.src('./app/js/main.js')
		.pipe(browserify({
			transform: ['reactify']
		}))
		.pipe(rename({
			suffix: '.min'
		}))
		// .pipe(uglify()) 
		.pipe(gulp.dest('./dist/js'))
		.pipe(livereload());
})

gulp.task('html', function() {
	gulp.src('index.html')
		.pipe(livereload());
})

gulp.task('nodemon', function() {
	nodemon({
			script: 'server.js',
			ext: 'js' 
		})
		.on('change', ['lint'])
		.on('restart', function() {
			console.log('Restarted webserver')
		});
});


gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('./app/**/*.js', ['js'])
	gulp.watch('*.html', ['html'])

})


gulp.task('default', ['watch', 'js', 'connect','nodemon']);