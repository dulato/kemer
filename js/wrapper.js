$( document ).ready(function() {
    $('.main_5_slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        easing: 'linear',
        infinite: false,
        initialSlide: 0,
        autoplay: false,
        centerMode: false,
        rows: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
