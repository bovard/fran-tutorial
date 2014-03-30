
var LEFT = "left";
var TOP = "top";

function addXYMotionToDiv(x, y, $div) {
    if (x) {
        _addMotionToDiv(x, $div, LEFT);
    }
    if (y) {
        _addMotionToDiv(y, $div, TOP);
    }
}


function _addMotionToDiv(stream, $div, axis) {
    stream.onValue(function(val) {
        $div.css("left", parseInt($div.css("left")) + val + "px");
    });
}

function addXMotionToDiv(x, $div) {
    _addMotionToDiv(x, $div, LEFT);
}


function addYMotionToDiv(y, $div) {
    _addMotionToDiv(y, $div, LEFT);
}

module.exports = {
    addXYMotionToDiv: addXYMotionToDiv,
    addXMotionToDiv: addXMotionToDiv,
    addYMotionToDiv: addYMotionToDiv
};
