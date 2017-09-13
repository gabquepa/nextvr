//npm install -g gulp
var gulp = require('gulp');
//npm install gulp-sass
var sass = require('gulp-sass');
//npm install del
var del = require('del');
//npm install gulp-concat
var concat = require('gulp-concat');

var scss_file_path = 'styles/**/*.scss';
var scss_path = 'styles/**/*.scss';
var css_dest_file_name = 'styles.min.css';
var css_dest_path = 'styles/css/';

gulp.task('clean', function() {
    del([css_dest_path + css_dest_file_name]);
});

gulp.task('sass', ['clean'], function(){
    gulp.src(scss_file_path)
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(concat(css_dest_file_name))
        .pipe(gulp.dest(css_dest_path));
});

gulp.task('default', ['clean', 'sass'],function() {
    gulp.watch(scss_path, ['sass']);
});
