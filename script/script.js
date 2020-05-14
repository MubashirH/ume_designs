function grid() {
    var width = $('.grid-inner').width();
    $('.grid-inner').css('height', width);
}

$(document).ready(function () {
    $('.brand-include').hide();
    //gird section height
    var monkey_height = $('.monkey-banner img').height();
    $('.monkey-banner').css('height', monkey_height);
    grid();
    $(window).resize(function () {
        grid();
        $('.monkey-banner').css('height', monkey_height);
    });
    //menu intialization
    var hamburger = $('#hamburger-icon');
    hamburger.click(function () {
        hamburger.toggleClass('active');
        var hamburgerClass = hamburger.attr('class');
        if (hamburgerClass === 'active') {
            $(".menu-content").css('display', 'block');
            $(".menu-content").removeClass('fadeOutUp');
            $(".menu-content").addClass('fadeInDown');
        }
        else {
            $(".menu-content").removeClass('fadeInDown');
            $(".menu-content").addClass('fadeOutUp');
            setTimeout(function () {
                $(".menu-content").css('display', 'none');
            }, 1000);
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
        }
        else {
            gridSection.removeClass('grid-display');
            $(this).addClass('grid-display');
            $('.grid-inner h1').text('-');
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
        centeredSlides:true,
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
