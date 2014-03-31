var Functions = require('./Functions');
var Motions = require('./Motions');

$(function() {
    var leftRight = $("#leftRight");
    Motions.addXMotionToDiv(Functions.waggle, leftRight);


});