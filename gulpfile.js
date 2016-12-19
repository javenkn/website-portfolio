const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');

const reload = browserSync.reload;

gulp.task('compile-sass', function () {
  return gulp.src('sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 15 versions'],
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream());
});

gulp.task('compile-pug', function () {
  return gulp.src('views/index.pug', ['compile-pug'])
    .pipe(plumber())
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
  gulp.watch("sass/**/*.scss", ['compile-sass']);
  gulp.watch('./views/*.pug', ['compile-pug']);
  gulp.watch('public/css/*.css', ['compile-pug']);
  gulp.watch("public/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['watch', 'browser-sync']);