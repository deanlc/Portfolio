$(document).ready(function() {
	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot;';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
});

var web = jQuery("#web");
var photography = jQuery("#photography");
var photography_img = jQuery("#photography img");
var about = jQuery("#about");
var me = jQuery("#me");
var name = jQuery("#name");
var name_link = jQuery("#name_link");

var web_link = $('#web_link');
var photography_link = $('#photography_link');
var about_link = $('#about_link');

$(document).ready(function() {
    $(".name").hide().fadeIn(4000);
    $(".links").hide().fadeIn(4000);
});

name_link.click(function() {
    web.hide();
    photography.hide();
    about.hide();
    
    $("#name_big").slideDown(1000);
    $("#name_small").slideUp();
                 });

web_link.click(function() 
{   
    web.fadeIn(3000);
    photography.hide();  
    about.hide();
    
    $("#name_big").slideUp();
    $("#name_small").slideDown(1000);
});

photography_link.click(function() 
{   
    photography.fadeIn(3000);
    about.hide();
    web.hide();
    
    $("#name_big").slideUp();
    $("#name_small").slideDown(1000);
});

about_link.click(function() 
{   
    about.fadeIn(3000);
    photography.hide();
    web.hide();
    
    $("#name_big").slideUp();
    $("#name_small").slideDown(1000);
});

