/*--------------------------------------------------------------------------------
index.js 首页JS特效
--------------------------------------------------------------------------------*/

$(function(){
	// 轮播自动播放
	$('#banner').carousel({
		// 自动3秒播放
		interval: 4000
	});
	
	// 设置垂直居中
	$('.carousel-control').css('line-height', $('.carousel-inner img').height() + 50 + 'px');
	$(window).resize(function(){
		var height = $('.carousel-inner img').eq(0).height() || $('.carousel-inner img').eq(1).height() || $('.carousel-inner img').eq(2).height();
		$('.carousel-control').css('line-height', height + 50 + 'px');
	});
});