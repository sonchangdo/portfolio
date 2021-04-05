// JavaScript Document
$(function(){
	var TOTAL_IMAGE = $('.imgView > li').length;
	var THUMNAIL_VIEW = 3;
	var thumWidth = 0;
	var mySwiper = new Swiper('.imgWrap',{
		  	pagination: '.thum',       // 불릿버튼
		  	speed:700,				   // 슬라이더 이동속도
		    //loop:true,			   // 반복
		    autoplay:1500,           // 자동 
		    autoplayDisableOnInteraction:false,//자동유지
		    grabCursor: false,		   // 커서모양 true 손 false 화살표
		    paginationClickable: true,
		    followFinger:true,
		    //createPagination:false,  // 블릿버튼 생성
		    //mousewheelControl:true,
		    autoResize:false,     // auto 리사이즈 정지 onInit 실행안됨 true이면 리사이즈 될때마다 onInit 가 실행됨 //resizeReInit:true,  // 리사이즈 Init
		  	onFirstInit:function(swiper){
		    	//console.log('로드1');
		    	$('.imgView > li').addClass('swiper-slide');
		    	selectBtn(swiper.activeIndex);
		    	currentPage(swiper.activeIndex);
		    	//console.log($(e.params.pagination).children()); //결과없음
		    },

		    onInit:function(swiper){
		    	//console.log('로드3');
		     	//console.log(e);
		    	//console.log(e.params.pagination);
				//console.log($(e.params.pagination).children()); 결과 span
				copyThumNail($(swiper.params.pagination).children());
				eventListener(swiper);
		    },

		    onImagesReady:function(swiper){
				//console.log('로드4');
			},

			onSlideNext:function(swiper){
				swiperNext(swiper);
			},

			onSlidePrev:function(swiper){
				swiperPrev(swiper);
			},

			onSlideChangeStart:function(swiper){
				//console.log('index : ' + swiper.activeIndex)
				selectBtn(swiper.activeIndex);
				currentPage(swiper.activeIndex);
				if(swiper.activeIndex == 0){
					swiperNext(swiper);
				}
			},
		});

				
	function copyThumNail(node){
		var $img = $('.imgView > li > img').clone();
		$(node).each(function(index){
			$url = "url("+ $img.eq(index).attr('src') +") no-repeat";
			$(this).css("background",$url);
			$(this).css("background-size","242px 94px");
		});

		thumWidth = $(node).first().outerWidth(true);
		$('.thum').width(thumWidth * node.length);
	}

	function eventListener(swiper){
		$('button').click(function(e){
			if($(this).hasClass('rightBtn')){
				if(swiper.activeIndex < TOTAL_IMAGE - 1){
					swiper.swipeNext();
				}
			} else {
				if(swiper.activeIndex > 0){
					swiper.swipePrev();
				}
			}
		});
	}

	function swiperNext(swiper){
		var $page = Math.floor(swiper.activeIndex/THUMNAIL_VIEW);
		thumImg(-$page* (THUMNAIL_VIEW * thumWidth));
	}

	function swiperPrev(swiper){
		var $page = Math.floor(swiper.activeIndex/THUMNAIL_VIEW);
		thumImg($page * (THUMNAIL_VIEW * thumWidth));
	}

	// 썸네일(작은)이미지 모션
	function thumImg(value){
		$('.thum').stop().animate({left:value},500);
	}

	// 좌우버튼 선택 표시
	function selectBtn(index){
		$('button').eq(0).addClass('onbtn');
		$('button').eq(1).addClass('onbtn');
		if(index == 0){
			$('button').eq(0).removeClass('onbtn');
			$('button').eq(1).addClass('onbtn');
		} else if(index == TOTAL_IMAGE - 1){
			$('button').eq(0).addClass('onbtn');
			$('button').eq(1).removeClass('onbtn');
		} 
	}

	// 페이지 
	function currentPage(page){
		$('.pageWrap > span.page').text(page+1);
	}	

});