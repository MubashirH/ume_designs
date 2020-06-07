$(window).scroll(function windowScroll() {
    var windowScroll = $(window).scrollTop();

var serviceTop = $('#services').offset();
var aboutTop = $('#about').offset();
var count = $('div.grid-display').length;

if (count === 1) {
    if ( windowScroll > serviceTop.top && windowScroll < aboutTop.top-317) {
        console.log(1);
        console.log(windowScroll, aboutTop.top);
        $('.back-btn').css({'display':'block', 'position':'fixed'});
    }
    else  {
        console.log(2);
        $('.back-btn').css({'display':'none', 'position':'relative'});
    }
}
});
