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
    ctx.fillRect(20, 20, 10, 10);
    ctx.fillRect(110, 20, 10, 10);
    ctx.fillRect(10, 30, 10, 60);
    ctx.fillRect(120, 30, 10, 60);
    ctx.fillRect(10, 90, 20, 10);
    ctx.fillRect(110, 90, 20, 10);
    ctx.fillRect(30, 100, 80, 10);
    ctx.fillRect(20, 110, 10, 10);
    ctx.fillRect(110, 110, 10, 10);
    ctx.fillRect(10, 120, 10, 30);
    ctx.fillRect(30, 120, 10, 30);
    ctx.fillRect(100, 120, 10, 30);
    ctx.fillRect(120, 120, 10, 30);
    ctx.fillRect(20, 150, 100, 10);
    ctx.fillRect(30, 160, 10, 20);
    ctx.fillRect(60, 170, 20, 10);
    ctx.fillRect(100, 160, 10, 20);
    ctx.fillRect(30, 180, 30, 10);
    ctx.fillRect(80, 180, 30, 10);
    ctx.fillStyle = "red";
    ctx.fillRect(60, 20, 50, 10);
    ctx.fillRect(50, 30, 30, 20);
    ctx.fillRect(100, 30, 20, 10);
    ctx.fillRect(110, 40, 10, 30);
    ctx.fillRect(100, 70, 20, 20);
    ctx.fillRect(90, 90, 20, 10);
    ctx.fillRect(50, 120, 10, 10);
    ctx.fillRect(70, 120, 10, 10);
    ctx.fillRect(90, 120, 10, 10);
    ctx.fillRect(20, 140, 10, 10);
}