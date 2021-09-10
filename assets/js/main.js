$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        rtl: true,
        items: 4,
        loop: true,
        dots:false,
        margin: 10,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            767:{
                items:2,
                nav:false
            },
            992:{
                items:4,
                nav:false
            },
            1000:{
                items:4,
                nav:true

            }
        }
    });
});