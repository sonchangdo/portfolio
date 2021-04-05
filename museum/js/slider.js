
        	$(document).ready(function(){
        	
        		var btnLeft  =  $('.slider > .left');
        		var btnRight =  $('.slider > .right');
        		var slideImg = 	$('.slider > ul > li');
        		var current = 0;
        		
        		//슬라이더 왼쪽버튼 클릭
        		btnLeft.click(function(){
        			
        			if(current ==-1){
        				current = 2;
        			}
        			
        			moveLeft(current);
        			current--;
        			
        		});
        		//슬라이더 오른쪽버튼 클릭
        		btnRight.click(function(){
        			
        			if(current == 3){
        				current = 0;
        			}
        			
        			moveRight(current);
        			current++;
        		});
        	
        	// 3초마다 자동 슬라이딩
        	setInterval(function(){
        		
        		btnRight.trigger('click');
        		
        	}, 3000);
        	
        	function moveRight(current){
        	
        		var next = current + 1;
        		
				if(next == 3){
					next = 0;
				}        		

        		slideImg.eq(current).animate({left: '-960px'}, 1000);
        		slideImg.eq(next).css('left','960px').animate({left: '0px'}, 1000);
        	
        	}
        	
        	function moveLeft(current){
        	
        		var next = current - 1;
        		
				if(next == -1){
					next = 2;
				}        		

        		slideImg.eq(current).animate({left: '960px'}, 1000);
        		slideImg.eq(next).css('left','-960px').animate({left: '0px'}, 1000);
        	
        	}
        
        });
        