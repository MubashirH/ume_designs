function grid() {
    var width = $('.grid-inner').width();
    console.log(width);
    $('.grid-inner').css('height',width);
}

$(document).ready(function (){

    //gird section height
    grid();
    $(window).resize(function(){ grid(); });
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

     //swiper slider initializing
     var client_swiper = new Swiper('.client-swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
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
