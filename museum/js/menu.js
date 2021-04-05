
/**/
$(document).ready(function(){
        	
	var btnMenu =$('.gnb li');
	var gnb = $('header > .gnb');
	var sub = $('header .sub');
	
	btnMenu.click(function(){
	
		$('header .sub').slideDown(300);
	
	});
	
	gnb.mouseleave(function(){
 		sub.slideUp(300);
 	});
	
});