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
	// ctx.fillStyle="#48f";
	// ctx.fillRect(0, 0, canvas.width(), 300);
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
 };
 // 动画
 function loop(){
 	ctx.clearRect(0,0,canvas.width(),300);
 	// 画星星
 	star.draw();
 	now=Date.now();
	deltTime=now-lastTime;
	lastTime=now;
 	star.update();

 	window.requestAnimationFrame(loop)
 }
// 星星类
var starObj=function(){
	this.alive=[];
	this.X=[];
	this.Y=[];
	this.scale=[];
	this.deleX=[];
};
starObj.prototype.num=5;
// 初始化
starObj.prototype.init = function() {
	for (var i = 0; i < this.num; i++) {
		this.alive[i]=false;
		this.X[i]=0;
		this.Y[i]=0;
		this.scale[i]=1;
		this.deleX[i]=0;
	}
};
// 生成星星
starObj.prototype.draw=function(){
	ctx.save();
	ctx.globalAlpha=0.7;
	for (var i = 0; i < this.num; i++) {
		if(this.alive[i]){
			ctx.beginPath();
			for(var j=0;j<5;j++){
			ctx.lineTo(Math.cos((18+72*j-this.scale[i]*120)*Math.PI/180)*outR*this.scale[i]+this.X[i],
					-Math.sin((18+72*j-this.scale[i]*120)*Math.PI/180)*outR*this.scale[i]+this.Y[i]);
			ctx.lineTo(Math.cos((54+72*j-this.scale[i]*120)*Math.PI/180)*inR*this.scale[i]+this.X[i],
					-Math.sin((54+72*j-this.scale[i]*120)*Math.PI/180)*inR*this.scale[i]+this.Y[i]);
		
			}
			ctx.closePath();
			ctx.fillStyle="#fff";
			ctx.shadowBlur=20;
			ctx.shadowColor="#fff";
			ctx.fill();
			this.X[i]+=this.deleX[i];
			if(this.Y[i]<309){
				this.Y[i]+=2;
			}else{
				this.alive[i]=false;
				this.Y[i]=-15;
			}
			this.scale[i]-=0.002;
			
		}
	};
	
	ctx.restore();	
}
// 产生一个星星
starObj.prototype.born=function(i){
	this.alive[i]=true;
	this.X[i]=Math.random()*(canvas.width()+50)-100;
	this.scale[i]=Math.random()*0.3+0.3;
	this.deleX[i]=Math.random()*4-2;

}

starObj.prototype.update=function(){
	var du=Math.random()*900+450
	starBornTimer+=deltTime
	if(starBornTimer>=du){
		starBornTimer%=du;

		for (var i = 0; i < this.num; i++) {
			if(!this.alive[i]){
				this.born(i);
				return;
			}
		}
	}
}