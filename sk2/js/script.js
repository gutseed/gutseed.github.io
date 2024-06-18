/* sk2 에스케이투*/

jQuery(document).ready(function(){
	
	//메인 이미지 슬라이더//
	var visual=$('#brandVisual>ul>li');
	var button=$('#buttonList>li');
	var leftBtn=$('.btnImg .prev');
	var rightBtn=$('.btnImg .next');
	var current=0; 
	var setIntervalId;

	function move(tg, start, end){
		tg.css('left',start).stop().animate({left:end},500);
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
			
		},2000);
	}
	timer();
	$('#wrap1').on({mouseover:function(){
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
		currentEl.css({left:0}).stop().animate({left:'-100%'},500);
		nextEl.css({left:'100%'}).stop().animate({left:0},500);
		
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
	
	// top 이벤트배너 x누르면 닫히기 //
	$('#top_event').find('.close_btn').on('click', function(){
		$('.event').slideUp(1000);
	});
	
	/* 검색 창 안내 가이드 '검색어를 입력하세요' 없애기*/
	$('#keyword').on('focus',function(){
		$(this).css('background-position', '0 -500px');
	}).on('blur',function(){
		if($(this).val()==''){
		$(this).css('background-position', '0 0')
		}
	});
	
	/* 전체메뉴 토글 클릭하면 내려오고 올라오기*/
		$('#total_btn').toggle(function(){
			$('#menu_wr').slideDown('fast');
			return false;
		}, function(){
			$('#menu_wr').slideUp('fast');
			return false;
		});
	/* 전체 메뉴 닫기 버튼 */
		$('.close_btn1').click(function(){
			$('#menu_wr').slideUp('fast');
			return false;
		});
	
	/* 로그인버튼 클릭하면 내려오고 올라가기*/
	$('.login1>a').on('click',function(){
		$('#login_f').animate({top:'-90px'},500);
		return false;
	});
	$('.login_wrap .login_close_btn, input[alt="login"]').click(function(){
		$('#login_f').animate({top:'-900px'},500);
		return false;
	});
	
	//검색 창 내려오고 올라가고//
	
		$('.login11>a').on('click',function(){
		$('#login_f1').animate({top:'-90px'},500);
		return false;
	});
	$('.login_wrap1 .login_close_btn1, input[alt="login"]').click(function(){
		$('#login_f1').animate({top:'-900px'},500);
		return false;
	});
	
	
	
	/* 베스트 상품 슬라이더 */
		var mySlider=$('#best_bg ul').bxSlider({
			mode:'horizontal', //수평 방향으로 이동
			speed:300, //이동 속동
			pager:false, //페이지 표시를 없앰
			moveSlides:1, //이동 슬라이드 갯수 한 개씩
			slideWidth:240, //한개의 슬라이드 폭 
			minSlides:4, //최소 노출 슬라이더 수 
			maxSlides:4, //최대 노출 슬라이더 수
			slideMargin:0, //슬라이드 간의 간격 
			auto:true, //자동 슬라이드 여부 
			autoHover: true, //마우스 오버시 자동 정지
			controls:false //마지막은 , 찍으면 안된다. 이전 다음 버튼 숨김 (함수를 따로 코딩할 것임)
		});
		$('.prev_btn').on('click', function(){
			mySlider.goToPrevSlide();
			return false;
		});
		$('.next_btn').on('click', function(){
			mySlider.goToNextSlide();
			return false;
		}); 
		
		/* 아코디언 */
		
	$('.accordion').each(function(){
		var dl=$(this);
		var allDt=dl.find('dt');
		var allDd=dl.find('dd');
		
		allDd.hide();
		allDt.css('cursor','pointer');
		allDt.click(function(){
			var dt=$(this);
			var dd=dt.next();
			allDd.hide();
			dd.show();
			addDt.css('cursor','pointer')
			dt.css('cursor','default')
		});	

		allDd.click(function(){
			var dt=$(this);
			var dd=dt.next();
			allDd.hide();
			dd.show();
			addDt.css('cursor','pointer')
			dt.css('cursor','default')
		});	
	});
	
	/* 아코디언 +- */
	
	$('.ani_box').toggle(function(){
			$('.ani_box').addClass('act');
		}, function(){
			$('.ani_box').removeClass('act');
		});
	
	/*  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  }); */

		
});
	