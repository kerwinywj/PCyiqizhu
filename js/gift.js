$(function(){
	//gift页面 切换效果
	$('#main .nav li').click(function(){
		var index=$(this).index();
		$(this).find('a').addClass('active').parent().siblings('li').find('a').removeClass('active');
		$('#main .gift-box ul').eq(index).show().siblings('ul').hide();
	})

})