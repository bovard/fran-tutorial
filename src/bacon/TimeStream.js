var bacon = require('baconjs');

var timeStream = bacon.interval(10).map(function() {
    return new Date().getTime();
});

module.exports = {
    timeStream: timeStream
};