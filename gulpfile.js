
var gulp = require('gulp'),
    lint = require('./estask.js'),

    tgts = "gulpfile.js estask.js",
    cfg  = { "targets" : tgts, "config" : "./sc-eslint-config.json" };

lint.gulpreg(gulp, cfg);
gulp.task('default', ['lint']);
