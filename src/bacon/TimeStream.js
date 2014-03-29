var bacon = require('bacon');

var timeStream = bacon.interval(10).map(function() {
    return new Date().getTime() % 100;
});

module.exports = {
    timeStream: timeStream
};