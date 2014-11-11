
global.errorMessage = '';

var gulp = require('gulp'),
    lint = require('./estask.js'),
    tgts = "gulpfile.js estask.js";

lint.gulpreg(gulp, { "targets" : tgts, "config" : './sc-eslint-config.json' });
gulp.task('default', ['lint']);
