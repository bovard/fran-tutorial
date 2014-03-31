
var TimeStream = require('./TimeStream');
var AMPLITUDE = 100;
var PERIOD = 1000;

function add(x, y) {
    return x + y;
}

var wiggle = TimeStream.timeStream.map(function(x) {
    return AMPLITUDE * Math.sin(x / PERIOD) + AMPLITUDE;
});

var waggle = TimeStream.timeStream.map(function(x) {
    return AMPLITUDE * Math.cos(x / PERIOD) + AMPLITUDE;
});

module.exports = {
    wiggle: wiggle,
    waggle: waggle
};
