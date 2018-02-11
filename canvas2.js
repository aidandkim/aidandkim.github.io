var canvas;
var ctx;
window.onload = init;

function init(){
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext("2d");
    background();
    lightning();
    triangle();
}
function background() {
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,997,597);
}
function lightning() {
    ctx.beginPath();
    ctx.fillStyle = "rgb(242,205,69)";
    ctx.moveTo(511,33);
    ctx.lineTo(519,173);
    ctx.lineTo(569,175);
    ctx.lineTo(491,361);
    ctx.lineTo(473,229);
    ctx.lineTo(433,227);
    ctx.fill();
}
function triangle() {
    ctx.beginPath();
    ctx.fillStyle = "rgb(242,205,69)";
    ctx.moveTo(423,153);
    ctx.lineTo(255,99);
    ctx.lineTo(497,531);
    ctx.lineTo(739,95);
    ctx.lineTo(579,151);
    ctx.lineTo(601,183);
    ctx.lineTo(655,165);
    ctx.lineTo(497,447);
    ctx.lineTo(339,163);
    ctx.lineTo(405,187);
    ctx.fill();
}
