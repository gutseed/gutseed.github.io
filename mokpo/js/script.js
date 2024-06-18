$(function(){
	
	/* 배너이미지변경 */
	
	$('#btnGroup li a').click(function(){
		var strName=$(this).parent().attr('class');
		slideTarget(strName.substr(6,1));
		$(this).addClass('atc'); 
		return false;
	});
	function slideTarget(n){
		var pos=Number(n)*-1200;
		$('.viewer').animate({left:pos},0);
	}
	
	$("#btnGroup>.number0>a").click(function() {
		$(".bg_top_wrap").css("background-color","#f7ead9");
	});
	$("#btnGroup>.number1>a").click(function() {
		$(".bg_top_wrap").css("background-color","#d0edf3");
	});
	
	$("#btnGroup>.number2>a").click(function() {
		$(".bg_top_wrap").css("background-color","#474e2f");
	});
	$("#btnGroup>.number3>a").click(function() {
		$(".bg_top_wrap").css("background-color","#fff");
	});
	
	
	/* 토글 회전 */
	
	
	$('.icon_b1').hover(function(){
		$('.icon_b1').css('transform', 'rotateY('+360+'deg)');
	}, function(){
		$('.icon_b1').css('transform', 'rotateY('+0+'deg)');
	});
	
	/* 검색 창 안내 가이드 '검색어를 입력하세요' 없애기*/
		$('#text').on('focus',function(){
			$(this).css();
		}).on('blur',function(){
			if($(this).val()==''){
			$(this).css('background-position', '0 0')
			}
		});
	
	/* 네모상자 라인 긋기  */
	
	jQuery(document).ready(function(){
		var topLine=$('.top_line');
		var bottomLine=$('.bottom_line');
		var rightLine=$('.right_line');
		var leftLine=$('.left_line');
		
		setInterval(function(){
			topLine.css('left', '-100%').animate({left:0},700);
			bottomLine.css('left', '100%').animate({left:0},700);
			rightLine.css('top', '-100%').animate({top:0},700);
			leftLine.css('top', '100%').animate({top:0},700);
			
		},1500);
    });
	
	/* 목포에서 놀다가련다 슬라이드 */	
	var visual=$('#brandVisual>ul>li');
	var button=$('#buttonList>li');
	var leftBtn=$('.btnImg .prev');
	var rightBtn=$('.btnImg .next');
	var current=0; 
	var setIntervalId;

	function move(tg, start, end){
		tg.css('left',start).stop().animate({left:end},0);
	}
	
	function timer(){
		setIntervalId=setInterval(function(){
			var prev=visual.eq(current);
			var pn=button.eq(current);
			move(prev, 0, '-100%');
			pn.removeClass('on');
			current++;
			if(current==visual.size()){current=0;}
			var next=visual.eq(current);
			var pnn=button.eq(current);
			move(next,'100%',0);
			pnn.addClass('on');
			
		},3000);
	}
	timer();
	$('#wrap_m').on({mouseover:function(){
		clearInterval(setIntervalId);
	},mouseout:function(){
		timer();
	}
	});

	
	button.click(function(){
		var tg=$(this);
		var i=tg.index();
		
		button.removeClass('on');
		tg.addClass('on');
		move1(i);
	});
	
	function move1(i){
		if(current==i){return}
		var currentEl=visual.eq(current);
		var nextEl=visual.eq(i);
		currentEl.css({left:0}).stop().animate({left:'-100%'},0);
		nextEl.css({left:'100%'}).stop().animate({left:0},0);
		
		current=i; 		
		}

	rightBtn.click(function(){
			var prev=visual.eq(current);
			var pn=button.eq(current);
			move(prev, 0, '-100%');
			pn.removeClass('on');
			current++;
			if(current==visual.size()){current=0;}
			var next=visual.eq(current);
			var pnn=button.eq(current);
			move(next,'100%',0);
			pnn.addClass('on');
		
	});
	
	leftBtn.click(function(){
			var prev=visual.eq(current);
			var pn=button.eq(current);
			move(prev, 0, '100%');
			pn.removeClass('on');
			current--;
			if(current==-visual.size()){current=0;}
			var next=visual.eq(current);
			var pnn=button.eq(current);
			move(next,'-100%',0);
			pnn.addClass('on');		
	});	

	
});

