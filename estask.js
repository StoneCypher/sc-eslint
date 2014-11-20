
/* eslint-env node */
/* jshint node: true */

/**
 * The Flocks library module.
 *
 * @module Flocks
 * @main   Flocks
 */




"use strict";

var shell = require('gulp-shell');





function task(Options) {

    var DefaultConfig = "node_modules/sc-eslint/sc-eslint-config.json";

    Options           = Options          || {};
    Options.targets   = (Options.targets || "gulpfile.js") + " --no-ignore";
    Options.config    = Options.config   || DefaultConfig;

    var Task          = "eslint" +
                        " -c "   + Options.config +
                        " "      + Options.targets;

    return shell.task(Task, {quiet: false});

}





function gulpreg(Gulp, Options) {

    var Taskname = Options.taskname || "lint",
        Targets  = Options.targets  || "gulpfile.js",
        Config   = Options.config;

    Gulp.task(Taskname, task({
        "targets" : Targets,
        "config"  : Config
    }));

}





module.exports = {

    "gulpreg" : gulpreg,
    "task"    : task

};
