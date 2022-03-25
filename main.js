"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
(0, rxjs_1.range)(1, 200)
    .pipe((0, rxjs_1.filter)(function (x) { return x % 2 === 1; }), (0, rxjs_1.map)(function (x) { return x + x; }))
    .subscribe(function (x) { return console.log(x); });
