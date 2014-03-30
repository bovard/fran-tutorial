
var TimeStream = require('./TimeStream');
var PERIOD = .5;

function add(x, y) {
    return x + y;
}

var wiggle = TimeStream.timeStream.map(function(x) {
    return PERIOD * Math.sin(x);
});

var waggle = TimeStream.timeStream.map(function(x) {
    return PERIOD * Math.cos(x);
});

module.exports = {
    wiggle: wiggle,
    waggle: waggle
};
