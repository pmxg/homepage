var r,g,b;
$("#lis1").click(function(){
	if (r==0) {
		r=0;g=153;b=255;
		changeColor(1);
	};
	$("#foot").css({
			background:"rgb(0,153,255)"
		});
	$("#content2").hide();
	$("#content1").show();
});
$("#lis2").click(function(){
	if (r==102||r==undefined) {
		r=102;g=51;b=153;
		changeColor(-1);
	};
	$("#foot").css({
			background:"rgb(102,51,153)"
		});
	$("#content1").hide();
	$("#content2").show();
});
function changeColor(v){
	r+=v;g-=v;b-=v;
	clearTimeout()
	setTimeout(chaC,30);
	function chaC(){
		if(r>0&&r<102){
			$("body").css({
			background:"rgb("+r+","+g+","+b+")"
		});
		changeColor(v);
		}
	}
}
$(document).scroll(
fixTop);
function fixTop(){
	if($(document).scrollTop()>=300){
		$("#top").css({
			position:"fixed",
			width:$(window).get(0).innerWidth-17,
			top:0,
			left:0,
			"z-index":10
		});
		$("#body").css({
			"margin-top":"60px"
		});
	}else{
		$("#top").css({
			position:"relative",
			width:"auto"
		});
		$("#body").css({
			"margin-top":"30px"
		});
		
	}
}