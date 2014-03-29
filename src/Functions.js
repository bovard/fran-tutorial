
var TimeStream = require('./TimeStream');

function add(x, y) {
    return x + y;
}

var wiggle = TimeStream.timeStream.map(function(x) {
    return Math.sin(x);
});

var waggle = TimeStream.timeStream.map(function(x) {
    return Math.cos(x);
});

module.exports = {
    wiggle: wiggle,
    waggle: waggle
};
