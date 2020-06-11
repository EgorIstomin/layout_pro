var gulp = require('gulp'),
sass = require('gulp-sass');

gulp.task('sass_task', function (done) {
gulp.src('app/*.scss')
.pipe( sass({outputStyle: 'compressed'}) )
.pipe(gulp.dest('dist/html/css'));
done();
});

var prettyHtml = require('gulp-pretty-html');

var pug = require('gulp-pug');
gulp.task('pug', function() {
  return gulp.src("app/pug/pages/*.pug")
      .pipe(pug())
      .pipe(prettyHtml())
      .pipe(gulp.dest("dist/html"))
});

var pug2 = require('gulp-pug');
gulp.task('pug2', function() {
  return gulp.src("*.pug")
      .pipe(pug())
      .pipe(prettyHtml())
      .pipe(gulp.dest("./"))
});
