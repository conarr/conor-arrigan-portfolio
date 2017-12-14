// HOME PAGE SLIDER STARTS HERE
// Image Layers (z-index) for Slider
    function cycleImages(){
        var $active = $('#jsSlides .active');
        var $next = ($active.next().not('.base').length > 0) ? $active.next().not('.base') : $('#jsSlides img').not('.base').first();
        	$next.css('z-index',2);  //Move the Next Image Up for Viewing
        	$active.fadeOut(1500,function(){   //Fade Out the Top Image
            	$active.css('z-index',1).show().removeClass('active');   //Reset the z-index and Unhide the Image
            	$next.css('z-index',3).addClass('active');   //move the next image up for viewing
        	});
    	}

//  Clone Original (.base) Image and Replace with Cycle of Other Images
    $(document).ready(function(){
    	$('#jsSlides img.base').clone().prependTo('#jsSlides');
    	$('#jsSlides img.base').last().removeClass('base').addClass('active');
    	$('#jsSlides img').show();

//  Change the Images Every 6 Seconds
    setInterval('cycleImages()', 6000);
    	})
// HOME PAGE SLIDER STARTS HERE