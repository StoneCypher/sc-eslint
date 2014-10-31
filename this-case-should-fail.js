
// it is intended that this test set should fail
// this shows that the custom ruleset is being enforced negatively
// this violates no-comma-dangle, which is off by default

(function() {

    "use strict";

    var bar = [1, 2, ];
    bar.push(3);

}());
