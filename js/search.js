$(function(){
	//点击input文本框高亮效果
	$('input').focus(function(){
		$(this).parent().css({
			border:'1px solid #18aaf2'
		});
	})

	$('input.search-box').focus(function(){
		$(this).parent().css({
			border:'1px solid transparent'
		});
	})

	$('input.min,input.max').blur(function(){
		$(this).parent().css({
			border:'1px solid #ccc'
		});
	})

	//类型选择切换效果
	$('.buildingType li').click(function(){
		//选中的a选项背景添加active，改变背景色
		var index=$(this).index();
		$(this).siblings('li').find('a').removeClass('active')
		$(this).find('a').addClass('active');
		$('.search-box .list').eq(index).show().siblings('.list').hide();
	})

})