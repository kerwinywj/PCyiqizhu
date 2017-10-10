$(function(){
	//点击input文本框高亮效果
	$('input').focus(function(){
		$(this).css({
			border:'1px solid #18aaf2'
		});
	})

	$('input').blur(function(){
		$(this).css({
			border:'1px solid transparent'
		});
	})

	//移动到房源图片，显示图片信息
	$('.detail .imgs-banner').hover(function(){
		$('.banner-mask').removeClass('hide');
		$('.banner-tip').removeClass('hide');
	},function(){
		$('.banner-mask').addClass('hide');
		$('.banner-tip').addClass('hide');
	})

	//点击房源图片，显示更多图片
	$('.detail .imgs-banner').click(function(){
		$('.photo-window').css({
			visibility:"visible"
		});
	})

	//房源更多图片
	jQuery(".photo-box").slide({
		mainCell:".photo-list",
		// titCell:".nav li",	
		effect:"leftLoop",
		autoPlay:true,
		trigger:"click"
	});

	//房源更多图片关闭效果
	// $('.photo-window .photo-close').click(function(){
	// 	$(this).parent().hide();
	// })
	$('.photo-window .photo-close').click(function(){
		$('.photo-window').css({
			visibility:"hidden"
		});
	})
})