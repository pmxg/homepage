var ctx;
var canvas=$("#can");
$(function(){
	canvas.attr("width", $(window).get(0).innerWidth);
	ctx=$("#can").get(0).getContext("2d");
	ctx.fillStyle="#48f";
	ctx.fillRect(0, 0, canvas.width(), 300);
});

$(window).resize(resizeCanvas);
 function resizeCanvas() {
        canvas.attr("width", $(window).get(0).innerWidth);
        ctx.fillStyle="#48f";
		ctx.fillRect(0, 0, canvas.width(), 300);
 };
 