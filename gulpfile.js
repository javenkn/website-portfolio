const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');

const reload = browserSync.reload;

gulp.task('compile-sass', function () {
  return gulp.src('./sass/styles.scss', ['compile-sass'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 15 versions'],
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream());
});

gulp.task('compile-pug', function () {
  return gulp.src('views/index.pug', ['compile-pug'])
    .pipe(pug())
    .pipe(gulp.dest('./public'));
});

gulp.task('browser-sync', ['compile-sass', 'compile-pug'], function () {
  browserSync.init({
    server: {
      baseDir: "./public"
    }
  });
});

gulp.task('watch', ['browser-sync'], function () {
  gulp.watch('./sass/*', ['compile-sass']);
  gulp.watch('./views/*.pug', ['compile-pug']);
  gulp.watch('./public/css/*.css').on('change', reload);
  gulp.watch('./public/*.html').on('change', reload);
});

gulp.task('default', ['watch', 'browser-sync']);