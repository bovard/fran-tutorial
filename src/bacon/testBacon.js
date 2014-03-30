var Functions = require('./Functions');

Functions.waggle.onValue(function(val) {
    console.log(val);
});

var counter = 15;
function run() {
    if (--counter > 0) {
        setTimeout(run, 1000)
    }

}