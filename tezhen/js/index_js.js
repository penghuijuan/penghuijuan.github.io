//声明图片
var img;
//声明图片数组
var imgs;

var i = 0 ;
var j = 0;
var im = 0;

//控制定时器
var t= null;
var img_stop= null;

var ban;
//轮播图片的id
var img_show;
//轮播图的导航id
var imgs_nav_li;
var imgs_nav = $(".imgs_nav_li"); 
//图片切换定时器
function timers(){
	t=window.setInterval("banners()",3000);
}
//图片轮播定时器
function time_img(){
	//得到实例
	
	img_show = $(".imgs_show_ul");
	img_stop = window.setInterval("mDown()",2000);
	//让第一个导航为选中状态
	$(".imgs_nav_li img").eq(0).addClass("russ");
	//调用鼠标以上移出的方法
	navmove();
}
//图片切换
function banners(a){
 	$("#b_img").stop();
 	//判断是向后点击还是向前点击
 	if(a>0){
 		i--;
 		if(i<0){
 			i = 2;
 		}
 	}else{
 		i++;
 		if(i>2){
 			i = 0;
 		}
 	}
 	//得到img和imgs数据
 	img = document.getElementById("b_img");
 	imgs = ["img/20151031012910511.jpg","img/20151105025257451.jpg","img/20151105025415535.jpg"];
 	
 	//将图片放在img上
 	img.src = imgs[i]; 
	
	//淡入淡出效果
	$("#b_img").hide();
	$("#b_img").fadeIn(400);

 }

 
 //停止定时器
function stop_time(){
	ban = $(".banner");
	//鼠标移上去停止轮播
	ban.mousemove(function(){
 		window.clearInterval(t);
 	});
 	//鼠标移开开始轮播
 	ban.mouseout(function(){
 		timers();
 	});
 	
 	//得到上下页按钮
 	var prev = $(".prev");
 	var next = $(".next");
 	
 	//上一页 
 	prev.click(function(){
 		banners(1);
 	})
 	//下一页
 	next.click(function(){
 		banners(0);
 	})
 	
}

//时间轴鼠标移上去效果
function timetext(){
	var li = $(".time_text_li");
	var span = $(".time_cttext span");
	//显示第一个
	li.eq(0).addClass("shows");
	span.eq(0).show();
	//鼠标移上去方法
	li.hover(function(){
		var a = $(li).index(this);
		//先隐藏其他
		span.hide();
		li.removeClass("shows");
		//在显示当前
		$(this).addClass("shows");
		//显示下面的文字
		span.eq(a).show();
	})
}

//图片向下滚动的方法
function mDown(){
	//图片滚动的动画
	img_show.animate({"top":j + "px"},500);
	//滚动的距离
	j -= 310;
	//小于-2170让其归零
	if(j<-2170){
		j=0;
	}
	
	//清除所有导航的状态
	$(".imgs_nav_li img").removeClass("russ");
	//大于7时归零
	if(im > 7){
		im = 0;
	}
	//显示当前导航状态
	$(".imgs_nav_li img").eq(im).addClass("russ");
	//执行一次让其加1
	im ++;
}

//鼠标移上的方法
function navmove(){
	//导航移上方法
	imgs_nav.hover(function(){
			//停止动画
			img_show.stop();
			//停止轮播 
			window.clearInterval(img_stop);
			//得到当前下标 
			var top = $(this).index();
			//清除所有导航的状态
			$(".imgs_nav_li img").removeClass("russ");
			//显示当前导航状态
			$(".imgs_nav_li img").eq(top).addClass("russ");

			//赋值给im;
			im = top;
				//用switch判断鼠标选中时的图片需要滚动的数值
			switch (top){
				case 0:
					img_show.animate({"top":0 + "px"},400);
					j = 0;
					break;
				case 1:
					img_show.animate({"top":-310 + "px"},400);
					j = -310;
					break;
				case 2:
					img_show.animate({"top":-620 + "px"},400);
					j = -620;
					break;
				case 3:
					img_show.animate({"top":-930 + "px"},400);
					j = -930;
					break;
				case 4:
					img_show.animate({"top":-1240 + "px"},400);
					j = -1240;
					break;
				case 5:
					img_show.animate({"top":-1550 + "px"},400);
					j = -1550;
					break;
				case 6:
					img_show.animate({"top":-1860 + "px"},400);
					j = -1860;
					break;
				case 7:
					img_show.animate({"top":-2170 + "px"},400);
					j = -2170;
					break;
			}
	});
	//导航移出方法
	imgs_nav.mouseout(function(){
		//启动定时器
		img_stop = window.setInterval("mDown()",3000);
	})
	
	//轮播图片移上的方法
	$(".imgs_show").hover(function(){
		//停止定时器
		window.clearInterval(img_stop);
	})
	//轮播图片移出的方法
	$(".imgs_show").mouseout(function(){
		//启动定时器
		img_stop = window.setInterval("mDown()",3000);
	})
}
