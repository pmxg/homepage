var r,g,b;
$("#lis1").click(changeLis1);
$("#lis2").click(changeLis2);
$("#lis3").click(changeLis3);
function changeColor(v){
	r+=v;g-=v;b-=v;
	clearTimeout()
	setTimeout(chaC,30);
	function chaC(){
		if(r>0&&r<92){
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
			width:document.body.clientWidth,
			top:0,
			left:0,
			"z-index":10
		});
		$("#body").css({
			"margin-top":"70px"
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
// 变换
function changeLis2(){
	if (r==0||r==undefined) {
		r=0;g=153;b=255;
		changeColor(1);
	};
	$("#foot").css({
			background:"rgba(13, 6, 107, 0.85)"
		});
	$("#ul1").css({
			background:"rgba(13, 6, 107, 0.85)"
		});
	$("#content2").hide();
	$("#content1").show();
	$("html,body").stop(true);
	$("html,body").animate({scrollTop:300}, 1000);
}
function changeLis1(){
	if (r==92) {
		r=92;g=61;b=163;
		changeColor(-1);
	};
	$("#foot").css({
			background:"rgba(46, 52, 130, 0.85)"
		});
	$("#ul1").css({
			background:"rgba(46, 52, 130, 0.85)"
		});
	$("#content1").hide();
	$("#content2").show();
	$("html,body").stop(true);
	$("html,body").animate({scrollTop:300}, 1000);
}
function changeLis3(){
	changeLis2();
	$("html,body").stop(true);
	$("html,body").animate({scrollTop: $("#aboutThisPage").offset().top-70}, 1000);
	// $(document).scrollTop($("#aboutThisPage").offset().top-70);
}