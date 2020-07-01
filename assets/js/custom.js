$(document).ready(function(){


     //Start Menu js
     $(window).on('scroll', function() {
        if ($(this).scrollTop() > 550) {
            $('.navbar-light').addClass('menu-shrink');
        } else {
            $('.navbar-light').removeClass('menu-shrink');
        }
    });			
    
    $('.navbar-nav li a').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 60
        }, 1000);
        e.preventDefault();
    });
    
    $(document).on('click','.navbar-collapse.show',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    });			






// PROJECTS PORTFOLIO
$('#Container').mixItUp();

//Testimonial slider
$('.testimonial-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 2000,
    navText: [
        "<i class='icofont-swoosh-up'></i>",
        "<i class='icofont-swoosh-down'></i>"
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

//Video popup js
$('.popup').magnificPopup({
    type: 'iframe'
});




});


