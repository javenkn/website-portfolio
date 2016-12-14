var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compile-sass', function () {
  gulp.src('/sass/**/*.scss', ['compile-sass'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('/public/css'));
});

gulp.task('watch', function () {
  gulp.watch('sass/**/*.scss', ['compile-sass']);
});

gulp.task('default', ['watch', 'compile-sass']);