$(function(){
	//导航城市选择效果
    $('#header .city .text').click(function(){
    	//获取下拉框的高度
    	var oUl=$(this).parent().find('ul');
    	var h=oUl.outerHeight();
    	// alert(h);
    	$(this).parent().find('.info').stop(true).animate({
    		height:h+"px"
    	},400)
    	return false;
    })
    $('body').click(function(){
    	$('#header .city .info').stop(true).animate({
    		height:"0px"
    	},400)

    })

    //点击登录，显示登陆框效果
    $('#header .login').click(function(){
    	$('#header .dialog-login').show();
    	$('.login-mask').addClass('show');
    })

    $('#header .dialog-login .close').click(function(){
    	$('#header .dialog-login').hide();
    	$('.login-mask').removeClass('show');
    })

    //点击登录框input高亮效果
	$('.dialog-login input').focus(function(){
		$(this).css({
			border:'1px solid #18aaf2'
		});
	})

	$('input').blur(function(){
		$(this).css({
			border:'1px solid transparent'
		});
	})


    //选择面积字体颜色变换效果
    // $('#main .size-control li').mouseover(function(){
    // 	var sizeIndex=$(this).index();
    // 	$('#main .size-show a').each(function(){
    // 		var showIndex=$(this).index();
    // 		// alert(sizeIndex);
    // 		if(showIndex==sizeIndex || showIndex==sizeIndex+1){
    // 			$(this).css({
    // 				'color':'#0bbbe0'
    // 			});
    // 		}
    // 	})
    // })

    // $('#main .size-control li').mouseover(function(){
    // 	var sizeIndex=$(this).index();
    // 	$('#main .size-show a').each(function(){
    // 		var showIndex=$(this).index();
    // 		// alert(sizeIndex);
    // 		if(showIndex==sizeIndex || showIndex==sizeIndex+1){
    // 			$(this).css({
    // 				'color':'#666'
    // 			});
    // 		}
    // 	})
    // })

    //不错的办公室效果
    $('.office li').mouseover(function(){
    	$(this).addClass('hover-shadow').siblings('li').removeClass('hover-shadow');
    })

	//主题thems 切换效果
	$('.thems ul li').mouseover(function(){
		var index=$(this).index();
		// alert(index);
		var l=index*110;
		$('.thems .line').stop(true).animate({
			left:l+"px"
		},200)

		var uls=$('.detail ul');
		uls.eq(index).show().siblings('ul').hide();
	})


	//右侧导航栏
	$('.gotop').click(function(){
		$('html,body').animate({
			scrollTop:"0px"
		},500)
	})

	$('.slide-bar .weixin,.slide-bar .phone').hover(function(){
		$(this).find('.info').show();
	},function(){
		$(this).find('.info').hide();
	})

	//固定联系导航
	$(window).scroll(function(){
		var h=$('html,body').scrollTop();
		// alert(h);
		if(h>800){
			$('.contact').fadeIn();
		}
		else{
			$('.contact').fadeOut();
		}
	})

	$('.contact .phone,.contact .weixin').hover(function(){
		$(this).find('p').show();
	},function(){
		$(this).find('p').hide();
	})

	$('.contact .gotop').click(function(){
		$('html,body').animate({
			scrollTop:"0px"
		},500)
	})
})