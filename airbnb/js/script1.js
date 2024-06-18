//에어비앤비//

$(function(){
		
	//메인 이미지 메뉴 클릭시 이미지 변경//
	$('.search_box>.tabs>#sbox1>a').click(function(){
		$('.header_img>img').attr({src:'images/main.jpg'});
		return false;
	});
	$('.search_box>.tabs>#sbox2>a').click(function(){
		$('.header_img>img').attr({src:'images/main8.jpg'});
		return false;
	});
	$('.search_box>.tabs>.sbox3>a').click(function(){
		$('.header_img>img').attr({src:'images/main1.jpg'});
		return false;
	});
	$('.search_box>.tabs>.sbox4>a').click(function(){
		$('.header_img>img').attr({src:'images/main4copy.jpg'});
		return false;
	});
	
	/* 
	$('.logo').on({mouseover:function(){
		$('.menu').show();
	},mouseout:function(){
		$('.menu').hide();
	}
	}); */
	
	//로고 클릭하면 메뉴 나오기//
	
	$('.logo').on({mouseover:function(){
		$('.menu').show();
	},mouseout:function(){
		$('.x').click(function(){
		$('.menu').hide();	
		});		
	}
	});
	

	//텍스트 클릭하면 사진 바꾸기//
	$('#main1>.txt_box>.txt1').hover(function(){
		$('#main1>.img_box>img').attr({src:'images/london.jpg'});
		return false;
	});
	
	$('#main1>.txt_box>.txt2').hover(function(){
		$('#main1>.img_box>img').attr({src:'images/paris1.png'});
		return false;
	});
	
	$('#main1>.txt_box>.txt3').hover(function(){
		$('#main1>.img_box>img').attr({src:'images/bc.png'});
		return false;
	});
	
	$('#main1>.txt_box>.txt4').hover(function(){
		$('#main1>.img_box>img').attr({src:'images/la1.png'});
		return false;
	});
	
	$('#main1>.txt_box>.txt5').hover(function(){
		$('#main1>.img_box>img').attr({src:'images/tk1.png'});
		return false;
	});
	
	$('#main1>.txt_box>.txt6').hover(function(){
		$('#main1>.img_box>img').attr({src:'images/nyc.png'});
		return false;
	});
	
	$('#main1>.txt_box>.txt7').hover(function(){
		$('#main1>.img_box>img').attr({src:'images/sd.png'});
		return false;
	});
	
	$('#main1>.txt_box>.txt8').hover(function(){
		$('#main1>.img_box>img').attr({src:'images/ct1.png'});
		return false;
	});
	
	
	$('.text_box>.home_box2>a').hover(function(){
		$('.main3_trip>span').attr({src:'images/home5.jpg'});
		return false;
	});
	

	var moving=$('.area');
	
	function left(){
		moving.find('ul').animate({left:200*-1}, 500, function(){
			$(this).children('li:first').insertAfter($(this).children('li:last'));
			$(this).css({left:0});
		});
	}
	function right(){
		moving.find('ul li:last').insertBefore(moving.find('ul li:first'));
		moving.find('ul').css({left: 200*-1});
		moving.find('ul').animate({left:0},300);
	}
	
	$('.prev').click(function(){
		right();
	});
	$('.next').click(function(){
		left();
	});
/* 
	var onTab=$('#main3 dt a:first');
	$('#tabmenu dt a').on('mouseover click',function(){
		$('#tabmenu dd:visible').hide();
		$('img', onTab).attr('src',$('img',onTab).attr('src').replace('over.jpg','out.jpg'));
		$(this).parent().next().show();
		$('img', this).attr('src', $('img', this).attr('src').replace
		('out.jpg', 'over.jpg'));
		onTab=$(this);
		return false;
	}); */
	
	$('.tabSet').each(function(){
		var topDiv=$(this);
		var anchors=topDiv.find('ul.tabs a');
		var panelDivs=topDiv.find('div.panel');
		var lastAnchor;
		var lastPanel;
		
		anchors.show();
		lastAnchor=anchors.filter('.on');
		lastPanel=$(lastAnchor.attr('href'));
		
		panelDivs.hide();
		lastPanel.show();
		anchors.click(function(event){
			event.preventDefault();
			var currentAnchor=$(this);
			var currentPanel=$(currentAnchor.attr('href'));
			lastAnchor.removeClass('on');
			currentAnchor.addClass('on');
			
			lastPanel.hide();
			currentPanel.show();
			
			lastAnchor=currentAnchor;
			lastPanel=currentPanel;
			
		});	
	});
	
	
	//스토리 회전
	var box=$('#stories .selectedStories .container .storiesBody .contents');
	var col1=0;
	var col2=1;
	var col3=2;
	var col4=3;
	var timer;
	timer=setInterval(event,2500);
	function event(){
		box.eq(col1).stop().css({transform:'scale('+.9+')','z-index':0}).animate({left:'10%',top:50,opacity:.5,'margin-left':0},1000);
		box.eq(col2).stop().css({transform:'scale('+.8+')','z-index':0}).animate({left:'50%',top:0,opacity:.1,'margin-left':'-11%'},1000);
		box.eq(col3).stop().css({transform:'scale('+.9+')','z-index':0}).animate({left:'68%',top:50,opacity:.5,'margin-left':0},1000);
		box.eq(col4).stop().css({transform:'scale('+1+')','z-index':1}).animate({left:'50%',top:100,opacity:1,'margin-left':'-11%'},1000);
		col1--; col2--; col3--; col4--;
		if(col1<0)col1=3;
		if(col2<0)col2=3;
		if(col3<0)col3=3;
		if(col4<0)col4=3;
	}
	box.hover(function(){
		clearInterval(timer);
		$(this).css('background','#d9ede0');
		$(this).find('.conT').addClass('conH');
		$(this).find('.conImg>a').show();
	},function(){
		timer=setInterval(event,2500);
		$(this).css('background','#ffffff');
		$(this).find('.conT').removeClass('conH');
		$(this).find('.conImg>a').hide();
	});
	var prev=$('#stories .selectedStories .container .storiesBody .contentsBtn .prev');
	var next=$('#stories .selectedStories .container .storiesBody .contentsBtn .next');
	next.hover(function(){clearInterval(timer);},function(){timer=setInterval(event,2500);});
	prev.hover(function(){clearInterval(timer);},function(){timer=setInterval(event,2500);});
	next.click(function(){
		box.eq(col1).stop().css({transform:'scale('+.9+')','z-index':0}).animate({left:'10%',top:50,opacity:.5,'margin-left':0},1000);
		box.eq(col2).stop().css({transform:'scale('+.8+')','z-index':0}).animate({left:'50%',top:0,opacity:.1,'margin-left':'-11%'},1000);
		box.eq(col3).stop().css({transform:'scale('+.9+')','z-index':0}).animate({left:'68%',top:50,opacity:.5,'margin-left':0},1000);
		box.eq(col4).stop().css({transform:'scale('+1+')','z-index':1}).animate({left:'50%',top:100,opacity:1,'margin-left':'-11%'},1000);
		col1--; col2--; col3--; col4--;
		if(col1<0)col1=3;
		if(col2<0)col2=3;
		if(col3<0)col3=3;
		if(col4<0)col4=3;
		return false;
	});
	prev.click(function(){
		box.eq(col3).stop().css({transform:'scale('+.9+')','z-index':0}).animate({left:'10%',top:50,opacity:.5,'margin-left':0},1000);
		box.eq(col4).stop().css({transform:'scale('+.8+')','z-index':0}).animate({left:'50%',top:0,opacity:.1,'margin-left':'-11%'},1000);
		box.eq(col1).stop().css({transform:'scale('+.9+')','z-index':0}).animate({left:'68%',top:50,opacity:.5,'margin-left':0},1000);
		box.eq(col2).stop().css({transform:'scale('+1+')','z-index':1}).animate({left:'50%',top:100,opacity:1,'margin-left':'-11%'},1000);
		col1++; col2++; col3++; col4++;
		if(col1>3)col1=0;
		if(col2>3)col2=0;
		if(col3>3)col3=0;
		if(col4>3)col4=0;
		return false;
	});
	
	/* 메인 글씨 밑줄  */
	
		$('.tabs>li').hover(function(){
		var th=$(this);
		var i=th.index();
		var bd=$('.bd').eq(i);
		bd.stop().animate({left:0, width:'100%'},0)
	}, function(){
		var th=$(this);
		var i=th.index();
		var bd=$('.bd').eq(i);
		bd.stop().animate({left:'50%', width:0},0)
	})
	
});


	
