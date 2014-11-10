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
var gulp   = require('gulp'),
    eslint = require('gulp-eslint'),
    lrules = require('./sc-eslint-config.json');

gulp.task('eslint', function() {
  gulp.src('./**/this-case-should-*.js')
      .pipe(eslint({ rules: lrules }))
      .pipe(eslint.format());
});

gulp.task('default', ['eslint']);
```





But I have different preferences
--------------------------------

Great!  Don't we all?  `:)`

1. Fork this repo
1. Copy `sc-eslint-config.json` to your own config file
1. Change the contents - every rule is spelled out in that file
1. Change what `lrules` points to, if using the gulp task
1. Push your own repo and your own NPM module
1. Point back to these instructions, for others' sake





Polemic
=======

`choprify` is MIT licensed, because viral licenses and newspeak language modification are evil. Free is only free when it's free for everyone.