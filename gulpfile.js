// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    connect = require("gulp-connect"),
    minifyHTML = require('gulp-minify-html'),
    gulpCopy = require('gulp-copy'),
    open = require('gulp-open'),
    minifyCss = require('gulp-clean-css');
    webserver = require('gulp-webserver');

// gulp scripts tasks
gulp.task('scripts', function() {
  gulp.src(['./js/*.js', '!./js/*.min.js'])
  .pipe(rename({suffix:'.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('./js/dist'));
});

// gulp sass development task
gulp.task('sass:development', function() {
    gulp.src(['./sass/*.sass', './scss/*.scss'])
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(connect.reload());
});

// gulp connect tasks
gulp.task('connect:html', function() {
    gulp.src(['./*.html', './**/*.html'])
        .pipe(connect.reload());
});
gulp.task('connect:js', function() {
    gulp.src('./js/*.js')
        .pipe(connect.reload());
});

// gulp copy tasks
gulp.task('copy:img', function() {
    return gulp.src("./img/**")
        .pipe(gulpCopy("./live/"));
});
gulp.task('copy:fonts', function() {
    return gulp.src("./fonts/**")
        .pipe(gulpCopy("./live/"));
});

// gulp watch tasks
gulp.task('watch:all', function() {
  connect.server({
      root: './',
      livereload: true
  });
  gulp.src(__filename)
    .pipe(open({
        uri: 'http://localhost:8080'
    }));
  gulp.watch(
    ['./*.html', './**/*.html', './sass/*.sass', './scss/*.scss', './js/*.js'],
    ['scripts', 'sass:development', 'connect:html', 'connect:js']
  );
});

// create a default task
gulp.task('watch', ["sass:development", "watch:all"]);
gulp.task('default', ["scripts", "sass:development", "watch:all"]);
gulp.task('copy', ["copy:img", "copy:fonts"]);
