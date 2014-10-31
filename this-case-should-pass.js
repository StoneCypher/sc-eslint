
// it is intended that this test set should pass
// this shows that the custom ruleset is being enforced positively
// line 12 fails under the default ruleset
// it will pass under the custom ruleset

(function() {

    "use strict";

    var foo = 1;
    ++foo;  // infix operators must be spaced; disabled in custom ruleset

}());
