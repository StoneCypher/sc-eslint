sc-eslint
=========

A small wrapper of eslint, pre-configured to StoneCypher's preferences

![Language](http://img.shields.io/badge/Language-Javascript/JSX-000000.svg) &nbsp;
![Platform](http://img.shields.io/badge/Platform-Node-000000.svg) &nbsp;
![License](http://img.shields.io/badge/License-MIT-000055.svg) &nbsp;
![Status](http://img.shields.io/travis/StoneCypher/sc-eslint.svg)

[![NPM Downloads](http://img.shields.io/npm/dm/sc-eslint.svg)](https://npmjs.org/package/sc-eslint)

![](https://nodei.co/npm/sc-eslint.png?stars=true&downloads=true)





What?
-----

This is two things:

1. drop and run `eslint -c node_modules/sc-eslint/sc-eslint-config.json *.js`
1. Trivially simple gulp task

```javascript
var gulp     = require("gulp"),
    linttask = require("sc-eslint/estask.js");

global.errorMessage = "";

gulp.task("lint", linttask({
  "targets" : "gulpfile.js lib/flocks.js test/enforce-tests.js"
}));

gulp.task("default", ["lint"]);
```





Why?
----

Because this way, as [eslint](http://eslint.org/) gets stronger, as my preferences evolve, etc, all I need to do is to
keep one module up to date, then all dependents will be brought into line.

Which is pretty sweet, if you think about it.





But I have different preferences
--------------------------------

Great!  Don't we all?  `:)`  Make one for yourself!  Here's how:

1. [Fork this repo](https://github.com/StoneCypher/sc-eslint/fork)
1. Copy `sc-eslint-config.json` to your own config file
1. Change the contents - every rule is spelled out in that file
1. Change what `lrules` points to, if using the gulp task
1. Push your own repo and your own NPM module
1. Point back to these instructions, for others' sake





Polemic
=======

`sc-eslint` is MIT licensed, because viral licenses and newspeak language modification are evil. Free is only free when it's free for everyone.