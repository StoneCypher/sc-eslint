
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





module.exports = function(Options) {

    var DefaultConfig = "node_modules/sc-eslint/sc-eslint-config.json";

    Options           = Options          || {};
    Options.targets   = (Options.targets || "*.js lib/*.js") + " --no-ignore";
    Options.config    = Options.taskname || DefaultConfig;

    var Task          = "eslint" +
                        " -c "   + Options.config +
                        " "      + Options.targets;
    console.log(Task);

    return shell.task(Task);

};
