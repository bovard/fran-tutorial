var bacon = require('baconjs');

var timeStream = bacon.interval(Math.round(1000 / 60)).map(function() {
    return new Date().getTime();
});

module.exports = {
    timeStream: timeStream
};