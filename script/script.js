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
});
