var canvas;
var ctx;
window.onload = init;

function init(){
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext('2d');
    rectangle();
}

function rectangle(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,499,537);
}

function circle(){
    strokeStyle = "red";
    context.arc(485,254,253,5,5);

}