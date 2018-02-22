var canvas;
var ctx;
window.onload = init;

function init(){
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext('2d');
    rectangle();
}

function rectangle(){
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,499,537);
 