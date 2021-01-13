$(document).ready(function(){
    // slick slider
    $('.slider-active').slick({
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        dots:false,
        arrows: false,
        slidesToScroll: 1
    });
    // testimonial slider
    $('.testimonial-active').slick({
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        dots:true,
        arrows: false,
        slidesToScroll: 1
    });
    // brand start
    $('.brand-active').slick({
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        dots:false,
        arrows: false,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });
    // counter js
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
        // menu js
        $('#mobile-menu-active').meanmenu({
            meanScreenWidth: "991.98",
            meanMenuContainer: '.mobile-menu'
        });
})