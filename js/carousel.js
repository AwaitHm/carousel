(function($){
	var defaults = {
		container : ".container",
		animation : ".animation",
		animations : "animation",
		page : ".page",
		leftbox : ".leftbox",
		rightbox : ".rightbox",
		icon : ".icon",
		biao :".biao"
	}
	$.fn.carousel = function(options){
		options = $.extend(defaults,options);
		<!--定时轮播-->
		var container = $(options.container),
			animation = options.animation,
			animations = options.animations,
			page = options.page
		var roll = function(){
	    	var num = container.find(animation).index();
			if(num >= 4){
				num = -1;
			};
			container.find(page).eq(num+1).addClass(animations).siblings().removeClass(animations);
				num++;	
	    }
	    setInterval(roll,3000);
	    <!--左右箭头-->
		$(options.leftbox).click(function(){	
			var num = container.find(animation).index();
			container.find(page).eq(num-1).addClass(animations).siblings().removeClass(animations);
				num--;
		});
		$(options.rightbox).on('click',roll);
		<!--数字选项-->
		$(options.icon).find(options.biao).on('click',function(){
			container.find(page).eq($(this).index()).addClass(animations).siblings().removeClass(animations);
		});
	}
})(jQuery)













    

	




	