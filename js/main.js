$(function() {
	$(".fade-right").hide();
	$(".fakeloader").fakeLoader({
		timeToHide:1200, //Time in milliseconds for fakeLoader disappear
		zIndex:"999",//Default zIndex
		spinner:"spinner4",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
		bgColor: "#1f1f1f", //Hex, RGB or RGBA colors
	});
	var height = $(window).innerHeight();
	$(".welcome").css("height", height*0.91.toString());
	if (height > 900) {
		$(".bottom").css("top", "55%");
	} 
	if (height > 1000) {
		$(".logo").css("top", "35%");
	}

    scrollPos = $(window).scrollTop();
    $(window).scroll(function() {  
        if (scrollPos > 500) {
            $(".logo").hide();
        } 
        if (scrollPos < 500) {
            $(".logo").show();
        } 
        if (scrollPos > 110) {
            $(".bottom").fadeOut(150);
        } 
        if (scrollPos < 110) {
            $(".bottom").fadeIn(150);
        } 
        if (scrollPos > 600){
        	$(".fade-right").fadeIn('slow');
        	$(".introduction").css("height","auto");
    	}
        scrollPos = $(window).scrollTop();
    });

    // scroll to div
	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	});

	//blockUI -- showing RSVP modal
	$.blockUI.defaults.css = {
	};
	$(document).on('click', '#rsvp-btn', function() {
	   $.blockUI({message: $('.rsvp-modal')});
	});
   
    $('#closing-cross').click(function(){
    	$.unblockUI();
    });

	$('.guests img').hover(function(){
	   $( this ).parent().find( "span" ).fadeIn();
	   $( this ).parent().find( "h5" ).css("border", "none");
	}, function() {
	    $( this ).parent().find( "span" ).hide();	  
		$( this ).parent().find( "h5" ).css("border", "1px $blue");
	});

});