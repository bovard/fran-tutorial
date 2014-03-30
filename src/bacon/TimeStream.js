var bacon = require('baconjs');

var timeStream = bacon.interval(100).map(function() {
    return new Date().getTime() % 100;
});

module.exports = {
    timeStream: timeStream
};