 $(document).ready(function(){
        
        	var btnMenu = $('#btnMenu');
        	var btnClose = $('#btnClose');
        	var sideGnb = $('#side');
        	
        	btnMenu.click(function(){
        		
        		sideGnb.animate({'right':'0px'},200);
        		btnClose.fadeIn(200);
        	});
        	btnClose.click(function(){
        		sideGnb.animate({'right':'-267px'},200);
        		btnClose.animate({'right':'-324px;'},100);
        		btnClose.fadeOut(200);
        		
        	});
        	
        });