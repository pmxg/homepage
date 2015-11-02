var ctx;
var canvas=$("#can");
var	inR=10;
var outR=26;
var scale=1;
var starBornTimer=0;
var rot;
var star;
var deltTime;
var lastTime;
// 主函数
$(function(){
	canvas.attr("width", $(window).get(0).innerWidth);
	ctx=$("#can").get(0).getContext("2d");
	ctx.fillStyle="#48f";
	ctx.fillRect(0, 0, canvas.width(), 300);
	star=new starObj();
	star.init();
	lastTime=Date.now();
	// console.log(lastTime);
	loop();

});
// 自适应宽度
$(window).resize(resizeCanvas);
 function resizeCanvas() {
        canvas.attr("width", $(window).get(0).innerWidth);
        ctx.fillStyle="#48f";
		ctx.fillRect(0, 0, canvas.width(), 300);
 };
 // 动画
 function loop(){
 	// console.log("a");
 	// ctx.clearRect(0,0,canvas.width(),300);
 // 	ctx.fillStyle="#48f";
	// ctx.fillRect(0, 0, canvas.width(), 300);
 	// 画星星
 	star.draw();
 	now=Date.now();
	deltTime=now-lastTime;
	// console.log(deltTime);
	lastTime=now;
 	star.update();

 	window.requestAnimationFrame(loop)
 }
// 星星类
var starObj=function(){
	// this.num=20;
	this.alive=[];
	this.X=[];
	this.Y=[];
	this.scale=[];
};
starObj.prototype.num=10;
// 初始化
starObj.prototype.init = function() {
	for (var i = 0; i < this.num; i++) {
		this.alive[i]=false;
		this.X[i]=0;
		this.Y[i]=0;
		this.scale[i]=1;
	}
};
// 生成星星
starObj.prototype.draw=function(){
	ctx.save();
	rot=72;
	ctx.globalAlpha=0.9;
	for (var i = 0; i < this.num; i++) {
		// console.log(this.alive[i]);
		if(this.alive[i]){
// console.log(this.alive[i]);
			outR*=this.scale[i];
			inR*=this.scale[i];
			while(this.scale[i]>0){
				this.scale[i]-=0.03;
			};
			ctx.beginPath();
			for(var j=0;j<5;j++){
			ctx.lineTo(Math.cos((18+72*j-rot)*Math.PI/180)*outR+this.X[i],
					-Math.sin((18+72*j-rot)*Math.PI/180)*outR+this.Y[i]);
			ctx.lineTo(Math.cos((54+72*j-rot)*Math.PI/180)*inR+this.X[i],
					-Math.sin((54+72*j-rot)*Math.PI/180)*inR+this.Y[i]);
		
			}
			ctx.closePath();
			ctx.fillStyle="#f00";
			ctx.fill();
			console.log("a");
			this.X[i]+=0.01;
			if(this.Y[i]<300){
				this.Y[i]+=0.1;
			}else{
				this.alive[i]=false;
			}
			
		}
	};
	
	ctx.restore();	
}
// 产生一个星星
starObj.prototype.born=function(i){
	this.alive[i]=true;
	this.X[i]=Math.random()*canvas.width();
	this.scale[i]=Math.random()*0.5+0.5;
}

starObj.prototype.update=function(){
// console.log(starBornTimer);

	starBornTimer+=deltTime
	if(starBornTimer>=900){
		starBornTimer%=900;

		for (var i = 0; i < this.num; i++) {
			if(!this.alive[i]){
				this.born(i);
				// console.log("a");
				return
				
			}
		}
	
	}
	
}