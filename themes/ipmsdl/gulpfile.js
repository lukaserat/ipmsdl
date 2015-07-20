var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
livereload = require('gulp-livereload');

//Compile Less into CSS
gulp.task('less', function() {
    gulp.src('assets/less/*.less')
        .pipe($.less())
        .pipe(gulp.dest('assets/css'))
        .pipe(livereload())
        .pipe($.notify('compiling less'));
});

//Compile Coffee into JS
gulp.task('coffee', function() {
    gulp.src('assets/coffee/*.coffee')
        .pipe($.coffee())
        .pipe(gulp.dest('assets/javascript'))
        .pipe(livereload())
        .pipe($.notify('compiling coffee'));
});

//Lint Javascript
gulp.task('lint', function() {
    return gulp.src('assets/javascript/app.js')
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.notify('linting js'));
});

//Watch for changes
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('assets/less/**', ['less']);
    gulp.watch('assets/coffee/**', ['coffee']);
    gulp.watch('assets/javascript/*.js', ['lint']);
    gulp.watch(['layouts/**','content/**','pages/**','partials/**','images/**']).on('change', livereload.changed);
});

gulp.task('build', ['less','lint']);

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['build','watch']);