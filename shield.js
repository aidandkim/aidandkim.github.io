var canvas;
var ctx;
window.onload = init;

function init() {
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext("2d");
    rectangle();
    circle();
}

function rectangle() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 499, 537);
}

function circle() {
    fiilStyle = "red";
    var canvas = document.getElemenTById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beganPath();
    ctx.arc(100, 75, 50, 0, 2*Math.PI);
    ctx.stroke();
}