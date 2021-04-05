$(function(){
        	
        	var btnTop = $('#btnTop');
        
    		$('#btnTop').click(function(){
    		
    			$('body').animate({scrollTop:0},400);
    			
    		});
				$(window).scroll(function(){
				
					var top = $(this).scrollTop();
					//console.log("top : "+top);
					if(top >= 100){
						btnTop.stop().animate({'opacity':'0.8'},600);
					}else{
						btnTop.stop().animate({'opacity':'0'},600);
					}
				});        	
        });
        