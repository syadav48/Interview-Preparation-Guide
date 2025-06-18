(function() {
    var x = 5;
    (function() {
        var x = 10;
        console.log(x);
    })();
})();

let result = (function(a, b) {
    return a * b;
})(4, 5);
console.log(result);

(function() {
    "use strict";
    var x = 10;
    delete x;
    console.log(x);
})();
// delete can't be called in strict mode















//10
//20

