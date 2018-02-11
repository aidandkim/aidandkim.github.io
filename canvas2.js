var canvas;
var ctx;
window.onload = init;

function init(){
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext('2d');
    background();
    
}
function background() {
    ctx.beginPat
    ctx.fillStyle = "black";
    ctx.moveTo(995,595);
    ctx.lineTo(993,3);
    ctx.lineTo(3,3);
    ctx.lineTo(3,597);

}
