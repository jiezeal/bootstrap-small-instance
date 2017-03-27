/*--------------------------------------------------------------------------------
member.js 个人中心JS特效
--------------------------------------------------------------------------------*/

$(function(){
	checkLayout();
	$(window).on('resize', checkLayout);
});

function checkLayout(){
	var width = $(window).width();
	if(width < 992){
		$('.main-container').removeClass('container').addClass('container-fluid');
		$('.main-container').css({
			'padding-left': 0,
			'padding-right': 0
		});
	}else{
		$('.main-container').removeClass('container-fluid').addClass('container');
		$('.main-container').css({
			'padding-left': 15,
			'padding-right': 15
		});
	}
}