function grid() {
    var width = $('.grid-inner').width();
    $('.grid-inner').css('height', width);
    $('.brand-include').css('height', width);
}

$(document).ready(function () {
    $('.brand-include').hide();
    $('.menu ul').hide();
    //gird section height
    var monkey_height = $('.monkey-banner img').height();
    $('.monkey-banner').css('height', monkey_height);
    grid();
    $(window).resize(function () {
        grid();
        var monkey_height = $('.monkey-banner img').height();
        $('.monkey-banner').css('height', monkey_height);
    });
    //menu intialization
    var hamburger = $('#hamburger-icon');
    hamburger.click(function () {
        hamburger.toggleClass('active');
        var hamburgerClass = hamburger.attr('class');
        if (hamburgerClass === 'active') {
            $('.menu ul').show();
            setTimeout(function() {
                $('.menu').addClass('shadow')
            }, 200)
            $('.menu ul').addClass('animate__fadeInDown');
            $('.menu ul').removeClass('animate__fadeOutUp');
        }
        else {
            $('.menu ul').hide();
            $('.menu').removeClass('shadow');
            $(".menu ul").removeClass('animate__fadeInDown');
            $(".menu ul").addClass('animate__fadeOutUp');
        }
        return false;
    });

    //brand grid loading
    $('.grid-section').click(function () {
        var count = $('div.grid-display').length;
        var gridSection = $('.grid-display');
        if (count === 1) {
            $('.brand-include').hide();
            $('div.grid-section').addClass('grid-display');
            $('.grid-inner h1').text('+');
            $('.services-grid').css('justify-content','space-evenly');
        }
        else {
            gridSection.removeClass('grid-display');
            $(this).addClass('grid-display');
            $('.grid-inner h1').text('-');
            $('.services-grid').css('justify-content','space-between');
            if ($(this).attr('id') === 'brandId') {
                console.log(1);
                $('.brand-include').show();
            }
        }
    });

    //Client Slider
    var client_swiper = new Swiper('.client-swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        grabCursor: true,
        autoPlay: {
            delay: 1000,
            disableOnInteraction: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {

            1020: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2
            },
            600: {
                spaceBetween: 10
            },
            480: {
                slidesPerView: 1
            },
            320: {
                slidesPerView: 1
            }
        }
    });

    // Client Views Slider
    var client_view_slider = new Swiper('.client-view-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        grabCursor: true,
        autoPlay: {
            delay: 1000,
            disableOnInteraction: true
        }
    })

    // Social CRS Activites slider
    var social_swiper = new Swiper('.social-swiper', {
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    })

});
