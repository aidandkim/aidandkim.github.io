var canvas;
var ctx;
window.onload = init;

function init(){
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext('2d');
    ctx.fillStyle = "grey";
    ctx.fillRect(0,0,140,200); // background
    ctx.fillStyle = "black";
    ctx.fillRect(30, 10, 80, 10);
}