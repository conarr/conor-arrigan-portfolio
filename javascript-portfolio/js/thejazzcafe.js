//  Slide Shows Start Here
    //  Image Layers (z-index) for Slider
    function cycleImages(){
        var $active = $('#jazzSlides .active');
        var $next = ($active.next().not('.base').length > 0) ? $active.next().not('.base') : $('#jazzSlides img').not('.base').first();
        	$next.css('z-index',2);  //Move the Next Image Up for Viewing
        	$active.fadeOut(1500,function(){   //Fade Out the Top Image
            	$active.css('z-index',1).show().removeClass('active');   //Reset the z-index and Unhide the Image
            	$next.css('z-index',3).addClass('active');   //move the next image up for viewing
        	});
    	}

    //  Clone Original (.base) Image and Replace with Cycle of Other Images
    $(document).ready(function(){
    	$('#jazzSlides img.base').clone().prependTo('#jazzSlides');
    	$('#jazzSlides img.base').last().removeClass('base').addClass('active');
    	$('#jazzSlides img').show();

    //  Change the Images Every 6 Seconds  //
    setInterval('cycleImages()', 6000);
    	})
//  Slide Shows End Here