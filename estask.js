
/* eslint-env node */
/* jshint node: true */

/**
 * The Flocks library module.
 *
 * @module Flocks
 * @main   Flocks
 */




"use strict";

var gulp  = require('gulp'),
    shell = require('gulp-shell');





module.exports = function(Options) {

    var DefaultConfig = "node_modules/sc-eslint/sc-eslint-config.json";

    Options           = Options          || {};
    Options.target    = Options.target   || "*.js";
    Options.taskname  = Options.taskname || "eslint";
    Options.config    = Options.taskname || DefaultConfig;

    var Task          = "eslint " + Options.target +
                        " -c "    + Options.config;

    return gulp.task(Options.taskname, shell.task(Task));

};
