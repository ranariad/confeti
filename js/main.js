
$(document).ready(function(){
	
  $("#owl-carousel-1").owlCarousel({
	  	loop:true,
	  	margin:10,
	    dots:true,
		responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
		
  });
	
	
  $("#our-team-owl").owlCarousel({
	  	loop:false,
	  	margin:10,
	
		
  });
	
  $("#client-saying-owl").owlCarousel({
	  	loop:false,
	  	margin:10,
	  	items:2
	
		
  });
	
	$("#clients-owl").owlCarousel({
	  	loop:true,
	  	margin:10,
	    dots:true,
		responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
		
  });

});