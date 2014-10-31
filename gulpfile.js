
global.errorMessage = '';

var gulp   = require('gulp'),
    eslint = require('gulp-eslint'),
    lrules = require('./sc-eslint-config.json');

gulp.task('eslint', function() {
  gulp.src('./**/this-case-should-*.js')
      .pipe(eslint({ rules: lrules }))
      .pipe(eslint.format());
});

gulp.task('default', ['eslint']);
