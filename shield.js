var canvas;
var ctx;
window.onload = init;

function init() {
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext("2d");
    circle();
}

function rectangle() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 499, 537);
}

function circle() {
    strokeStyle = "red";
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
}   