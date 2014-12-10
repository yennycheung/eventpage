$(function() {
	$(".fade-right").hide();
	$(".fakeloader").fakeLoader({
		timeToHide:1200, //Time in milliseconds for fakeLoader disappear
		zIndex:"999",//Default zIndex
		spinner:"spinner4",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
		bgColor:"#000", //Hex, RGB or RGBA colors
	});
	var height = $(window).innerHeight()*0.9;
	$(".welcome").css("height", height.toString());
    scrollPos = $(window).scrollTop();
    $(window).scroll(function() {  
    	console.log(scrollPos);
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
		// padding:	'3%',
		// margin:		0,
		// width:		'30%',
		// top:		'20%',
		// left:		'35%',
		// textAlign:	'center',
		// color:		'#000',
		// backgroundColor:'#fff',
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



// 	// Form Validation
// 	ezValidation.init();
	
// 	// Homepage banner button click 
// 	var $footeroffset = Math.floor($("footer").offset().top);
	

// 	// Desktop Animation 
// 	if($(window).width() > 1026) {
// 		$(".banner .darkgreengradient").on('click', function(e) {
// 			$("html, body").animate({
// 				scrollTop : $footeroffset
// 			});
// 			e.preventDefault();
// 		});
// 	}

// 	// Tablet Animation 
// 	if($(window).width() > 767) {
// 		$(".banner .darkgreengradient").on('click', function(e) {
// 			$("html, body").animate({
// 				scrollTop : $footeroffset + 640
// 			});
// 			e.preventDefault();
// 		});
// 	}
	
// 	//Mobile Animation
// 	if($(window).width() < 570) {

// 		// homepage banner button click
// 		$(".banner .darkgreengradient").on('click', function(e) {
// 			$("html, body").animate({
// 				scrollTop : $footeroffset + 580
// 			});
// 			e.preventDefault();
// 		});

// 		//Mobiel Nav
// 		var $header = $("header"),
// 			$btn = $header.find(".togglebtn"),
// 			$nav = $header.find("ul.nav"),
// 			$url = window.location.href;

// 		$header.addClass('closed');	
		
// 		// changes URL based on page call back
// 		urlChanges("index", "home"); 
// 		urlChanges("team", "team"); 
// 		urlChanges("careers", "careers"); 
// 		urlChanges("contacts", "contacts");
// 		urlChanges("blog", "blog"); 

// 		// dropdown menu animation and url based changes. 
// 		$("header .togglebtn, .closed .nav li:first-child a").click(function(e) {
// 			e.preventDefault();
// 			var $down = $header.hasClass('closed');

// 			if($down) {
// 				$btn.removeClass('rotatedback')
// 						.addClass('rotated');
// 				$header.animateAuto("height", 200)
// 						.removeClass('closed').addClass('opened');
// 			} else {
// 				$btn.removeClass('rotated')
// 						.addClass('rotatedback');
// 				$header.animate( {"height" : "59px" }, 200)
// 						.removeClass('opened').addClass('closed');
// 			}
// 		});	
// 	}
	
// 	// changes the mobile nav menu based on the URL of the page
// 	function urlChanges(url, text) {
// 		if($url.indexOf(url) > -1) {
//     		$nav.find("li a:contains('"+text.capitalize()+"')").parent().prependTo($nav).addClass('active');
// 		}
// 	}

// 	//Email Form AJAX and Validation
// 	$('#requestform').submit( function() {
// 		$('#requestform #email').removeClass('error');
// 		var email = $('#requestform input#email').val();
// 		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// 		if(re.test(email)) {
// 		  var dataString = '&email=' + email;
	
// 			$.ajax({
// 			type: "POST",
// 			url: "learn-request.php",
// 			data: dataString,
// 			success: function(){
// 			  		$('#requestform').fadeOut('1000', function() {
// 						$(this).siblings('.thanks').fadeIn(1000);
// 					});
// 				}
// 			});
		
// 			return false;
// 		} else {
// 		  // alert('not ok');
// 		  if(re.test(email) == false) $('#requestform #email').addClass('error');
// 		  return false;
// 		}
// 	  });

// 	$('#contactForm').submit(function(){
// 		  $('#contactForm #subject').removeClass('error');
// 		  $('#contactForm #message').removeClass('error');
// 		  var subject = $('#contactForm #subject').val();
// 		  var message = $('#contactForm #message').val();
// 		  if(subject.length > 1 && subject != 'Subject' && message.length > 1 && message != 'Message') {
// 		    var dataString = 'subject='+ subject + '&message=' + message;
// 		    $.ajax({
// 		      type: "POST",
// 		      url: "contact-request.php",
// 		      data: dataString,
// 		      success: function(){
// 		        $('#contactForm').fadeOut('1000', function() {
// 		          $('#contactText').text("Thanks, we have recieved your contact request!")
// 		        });
// 		      }
// 		    });
// 		    return false;
// 		  } else {
// 		    // alert('not ok');
// 		    if(subject.length < 2 || subject == 'Subject') $('#contactForm #subject').addClass('error');
// 		    if(message.length < 2 || message == 'Message') $('#contactForm #message').addClass('error');
// 		    return false;
// 		  }
// 		});

// 	//HIDE SHOW VALUES
// 	 $('form input:text, form textarea').each(function(){
//         $.data(this, 'default', this.value);
//     }).focus(function(){
//         if ($.data(this, 'default') == this.value) {
//             this.value = '';
//         }
//     }).blur(function(){
//         if (this.value == '') {
//             this.value = $.data(this, 'default');
//         }
//     });

// });


// // sets first letter to capital 
// String.prototype.capitalize = function() {
//     return this.charAt(0).toUpperCase() + this.slice(1);
// }

// // Animates height back to auto
// jQuery.fn.animateAuto = function(prop, speed, callback){
//     var elem, height, width;
//     return this.each(function(i, el){
//         el = jQuery(el), elem = el.clone().css({"height":"auto","width":"auto"}).appendTo("body");
//         height = elem.css("height"),
//         width = elem.css("width"),
//         elem.remove();
        
//         if(prop === "height")
//             el.animate({"height":height}, speed, callback);
//         else if(prop === "width")
//             el.animate({"width":width}, speed, callback);  
//         else if(prop === "both")
//             el.animate({"width":width,"height":height}, speed, callback);
//     });  