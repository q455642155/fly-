window.onload=function(){
	//自带js

	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        loop: true,
		onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素 
			swiperAnimate(swiper); //初始化完成开始动画
		},
		onSlideChangeEnd: function(swiper) {
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		}
    });

    //音乐播放器
    var music=document.getElementById("music");
    var play=document.getElementById("play");
    var donghua=document.getElementById("donghua");
    var off=document.getElementById("off");
    var k=0;
    music.onclick=function(){
    	//alert(1111)
    	if(k==0){
    		donghua.style.display="none";
    		off.style.animation="play 0s";
    		play.pause();
    		k=1;	
    	}else{
    		donghua.style.display="block";
    		off.style.animation="play 3s linear infinite";
    		play.play();
    		k=0;
    	}
    	
    };
 }