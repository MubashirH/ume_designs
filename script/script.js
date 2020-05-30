

//window scroll function for header logo
$(window).scroll(function windowScroll() {
    var windowSize = $(window).width();
    if ( $(window).scrollTop() > 50) {
        $('.logo').css('justify-content','flex-start');
        $('.menu').css({'right':'5%', 'padding-top':'5px'});
    }
    else {
        $('.logo').css('justify-content','center');
        $('.menu').css({'right':'10%', 'padding-top':'20px'})
    }
    if ( windowSize > 900) {
        if ( $(window).scrollTop() > 50) {
            $('.logo').children('img').css({'width':'15%', 'margin-left':'50px'});
        }
        else {
            $('.logo').children('img').css({'width':'45%', 'margin-left':'0px'});
        }
    }
    else if ( windowSize > 600 && windowSize <= 900) {
        if ( $(window).scrollTop() > 50) {
            $('.logo').children('img').css({'width':'20%', 'margin-left':'50px'});
        }
        else {
            $('.logo').children('img').css({'width':'45%', 'margin-left':'0px'});
        }
    }
    else if (windowSize > 420 && windowSize <= 600) {
        if ( $(window).scrollTop() > 50) {
            $('.logo').children('img').css({'width':'25%', 'margin-left':'30px'});
        }
        else {
            $('.logo').children('img').css({'width':'45%', 'margin-left':'0px'});
            $('.logo').css('justify-content','flex-start');
        }
    }
    else if (windowSize <= 420) {
        if ( $(window).scrollTop() > 50) {
            $('.logo').children('img').css({'width':'30%', 'margin-left':'20px'});
        }
        else {
            $('.logo').children('img').css({'width':'45%', 'margin-left':'0px'});
            $('.logo').css('justify-content','flex-start');
        }
    }
});




// Document Ready
$(document).ready(function () {

    function grid() {
        var width = $('.grid-inner').width();
        $('.grid-inner').css('height', width);
        $('.brand-include').css('height', width);
    }
    grid();
    

    var headerHeight = $('.header').height();
    $('.initiate').css('margin-top',headerHeight);
    

    $('.brand-include').hide();
    $('.menu ul').hide();
    //gird section height
    var monkey_height = $('.monkey-banner img').height();
    $('.monkey-banner').css('height', monkey_height);
    // grid();
    $(window).resize(function () {
        grid();
        var monkey = $('.monkey-banner img').height();
        $('.monkey-banner').css('height', monkey);
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
            }, 200);
            $('.menu').css('padding-bottom','10px');
            $('.menu ul').addClass('animate__fadeInDown');
            $('.menu ul').removeClass('animate__fadeOutUp');
        }
        else {
            $('.menu ul').hide();
            $('.menu').css('padding-bottom','0px');
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
            // $('.services-grid').css('justify-content','space-evenly');
            $('.grid-display').attr('data-aos','fade-up')
        }
        else {
            gridSection.removeClass('grid-display');
            $(this).addClass('grid-display');
            $(this).attr('data-aos','');
            $('.grid-inner h1').text('-');
            // $('.services-grid').css('justify-content','space-between');
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
                slidesPerView: 2,
                spaceBetween: 5
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
