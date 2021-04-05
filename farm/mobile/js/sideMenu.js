//var result = $('#sideMenu').hasClass('on');//

$(document).ready(function(){
	// 헤더메뉴버튼을 클릭할때
	/*
	$('button').click(function(){
		if($('#sideMenu').hasClass('on')){
		$('#sideMenu').removeClass().addClass('off');
		}else{
			$('#sideMenu').removeClass().addClass('on');
		}
	});

	2016-06-30
	손창도
	모바일 사이드 메뉴 동작로직


*/
	$('button').click(function(){
		$('#sideMenu').toggleClass('on');
		});
	});