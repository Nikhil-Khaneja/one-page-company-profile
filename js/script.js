$(function(){
    /*=====================================================================================
                GENERAL SECTION
    ====================================================================================*/
    new WOW().init();
    /*===================================================================================
                WORK SECTION
    ===================================================================================*/
    $('#work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{ enabled:true },
        mainClass: 'mfp-with-zoom',
        
        zoom:{
            enabled: true,
            
            duration: 300,
            easing: 'ease-in-out',
            
            opener: function(openerElement){
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
        
    });
     $(".team-members").owlCarousel({
         items: 3,
         autoplay: true,
         smartSpeed: 200,
         loop: true,
         autoplayHoverPause: true,
         responsive: {
            0:{
                items: 1,
                autoplayHoverPause: false,
            },
            480:{
                items:2,                        
            },
            768:{
                items:3,
            },
        },
     });
    
      $(".owl-two").owlCarousel({
         items:1,    
        autoplay: true,
        smartSpeed: 200,
        loop: true,
         autoplayHoverPause: true,
         responsive: {
            0:{
                items: 1,
                autoplayHoverPause: false,
            },
            480:{
                items:1,                        
            },
            768:{
                items:1,
            },
        },
    });
    
     $(".clients-list").owlCarousel({
         items: 6,
         autoplay: true,
         smartSpeed: 200,
         loop: true,
         autoplayHoverPause: true,
         responsive: {
            0:{
                items: 1,
                autoplayHoverPause: false,
            },
            480:{
                items:2,                        
            },
            768:{
                items:6,
            },
        },
     });
        
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });
    
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            $("nav").addClass("wg-top-nav");
            $(".btn-back-to-top").fadeIn();
        }
        else{
            $("nav").removeClass("wg-top-nav");
            $(".btn-back-to-top").fadeOut();
        }
    });
    
    $("a.smooth-scroll").click(function(event){
        //prevents to perform the default operation
        event.preventDefault();
        
        var section = $(this).attr("href");
        $("html,body").animate({
            scrollTop: $(section).offset().top - 69,
        },1250, "easeInOutExpo");
    });
});