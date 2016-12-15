var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task('watch', function () {
  gulp.watch('./sass/*', ['compile-sass']);
});

gulp.task('compile-sass', function () {
  gulp.src('./sass/styles.scss', ['compile-sass'])
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('default', ['compile-sass','watch']);