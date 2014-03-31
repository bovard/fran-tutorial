var Functions = require('./Functions');
var Motions = require('./Motions');

$(function() {
    Motions.addXMotionToDiv(Functions.waggle, $(".leftRightWiggle"));
    Motions.addYMotionToDiv(Functions.wiggle, $(".upDownWaggle"));
});