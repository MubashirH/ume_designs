var grid = $('.grid-section');
var windowSize = $(window).width()


$('.back-btn').click( function() {
    grid.click();
})
grid.click(function(){
    var count = $('div.grid-display').length;
    var height = $('.grid-inner').width();
    $('.back-btn').css({'position':'fixed','display':'block'});
    if (count === 1) {
        $('.brand-logos').remove();
        $('.back-btn').css({'display':'none'});
    }
    else {
        if ($(this).attr('id') === 'identityId') {
            $(this).after('<section class="brand-logos identity-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/brand_identity/CM_Logo-1.jpg"></section><section class="brand-logos identity-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/brand_identity/YG_Logo-2.jpg"></section><section class="brand-logos identity-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/brand_identity/GE_Logo-2.jpg"></section><section class="brand-logos identity-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/brand_identity/DT_Logo-2.jpg"></section> <section class="brand-logos identity-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/brand_identity/Alt_Logo-2.jpg"></section> <section class="brand-logos identity-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/brand_identity/SL_Logo-2.jpg"></section><section class="brand-logos identity-section animate__animated animate__fadeIn"><div class="left"><img src="images/product_logos/brand_identity/INR_Logo-2.jpg"><img src="images/product_logos/brand_identity/SS_Logo-2.jpg"></div><div class="right"><img src="images/product_logos/brand_identity/DR_Logo-2.jpg"></div></section>');
        } 
        else if ($(this).attr('id') === 'mobileId') {
            $(this).before('<section class="brand-logos mobile-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/mobile/360 X360_MoApp_4.jpg"></section>');
            if (windowSize > 768) {
                $(this).after('<section class="brand-logos mobile-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/mobile/360 X360_MoApp_3.jpg"></section><section class="brand-logos mobile-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/mobile/360 X 720_MoAPP.jpg"></section><section class="brand-logos mobile-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/mobile/360 X360_MoApp_2.jpg"></section><section class="brand-logos mobile-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/mobile/720 X 360 Ver_MOAPP_3.jpg"></section><section class="brand-logos mobile-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/mobile/720 X 360 Ver_MOAPP_2.jpg"></section><section class="brand-logos mobile-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/mobile/720 X 360 Ver_MOAPP_9.jpg"></section>');
            }
            else {
                $(this).after('<section class="brand-logos mobile-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/mobile/360 X360_MoApp_3.jpg"></section><section class="brand-logos mobile-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/mobile/360 X360_MoApp_2.jpg"></section><section class="brand-logos mobile-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/mobile/360 X 720_MoAPP.jpg"></section><section class="brand-logos mobile-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/mobile/720 X 360 Ver_MOAPP_3.jpg"></section><section class="brand-logos mobile-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/mobile/720 X 360 Ver_MOAPP_2.jpg"></section><section class="brand-logos mobile-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/mobile/720 X 360 Ver_MOAPP_9.jpg"></section><section class="brand-logos mobile-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/mobile/720 X 360 Ver_MOAPP_2A.jpg"></section>');
            }
        }
        else if ($(this).attr('id') === 'webId') {
            if (windowSize > 768) {
                $(this).before('<section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/730X730_WebD_2.jpg"><a href="http://sanjeevauto.com/" target="blank"></a></section>');
                $(this).after('<section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/360 X360_WEb3.jpg"><a href="http://glacialadventures.net/" target="blank"></a></section><section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/360 X 720_WebD.jpg"><a href="http://stellant.in/" target="blank"></a></section><section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/360 X360_WEb_4.jpg"><a href="http://glacialadventures.net/" target="blank"></a></section><section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/360 X360_WEb_1.jpg"><a href="http://mauj.com" target="blank"></a></section><section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/360 X360_WEb_A1.jpg"><a href="http://mauj.com/" target="blank"></a></section><section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/720 X 360 Ver_WebD.jpg"><a href="http://glacialadventures.net/" target="blank"></a></section><section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/730X730_WebD.jpg"><a href="http://glacialadventures.net/" target="blank"></a></section>');
            }
            else {
                $(this).before('<section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/360 X360_WEb3.jpg"><a href="http://glacialadventures.net/" target="blank"></a></section>');
                $(this).after('<section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/730X730_WebD_2.jpg"><a href="http://sanjeevauto.com/" target="blank"></a></section><section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/360 X 720_WebD.jpg"><a href="http://stellant.in/" target="blank"></a></section><section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/360 X360_WEb_1.jpg"><a href="http://mauj.com" target="blank"></a></section><section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/360 X360_WEb_A1.jpg"><a href="http://mauj.com" target="blank"></a></section><section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/720 X 360 Ver_WebD.jpg"><a href="http://glacialadventures.net/" target="blank"></a></section><section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/730X730_WebD.jpg"><a href="http://glacialadventures.net/" target="blank"></a></section><section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/360 X360_WEb_4.jpg"><a href="http://glacialadventures.net/" target="blank"></a></section>');
            }
        }
        else if ($(this).attr('id') === 'brandId') {
            if (windowSize > 768) {
                $(this).after('<section class="brand-logos brand-section animate__animated animate__fadeIn"><img class=""src="images/product_logos/campain/360 X 720_BC5.jpg"></section><section class="brand-logos brand-section animate__animated animate__fadeIn"><div class="left"><img class="" src="images/product_logos/campain/360 X360_BC1.jpg"><img class="" src="images/product_logos/campain/360 X360_BC2.jpg"><img class="" src="images/product_logos/campain/360 X360_BC3.jpg"><img class="" src="images/product_logos/campain/360 X360_BC4.jpg"></div><div class="right"><img class="" src="images/product_logos/campain/720 X 360 Ver_BC6.jpg"></div></section>');
            }
            else {
                $(this).after('<section class="brand-logos brand-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/campain/360 X360_BC1.jpg"></section><section class="brand-logos brand-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/campain/360 X 720_BC5.jpg"><div class="d-flex"><div class="left"><img class="" src="images/product_logos/campain/360 X360_BC2.jpg"><img class="" src="images/product_logos/campain/360 X360_BC3.jpg"><img class="" src="images/product_logos/campain/360 X360_BC4.jpg"></div><div class="right"><img class="" src="images/product_logos/campain/720 X 360 Ver_BC6.jpg"></div></div></section>')
            }
        }
        else if ($(this).attr('id') === 'spaceId') {
            if ( windowSize> 768) {
                $(this).before('<section class="brand-logos space-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/space/360 X360SRD_3.jpg"></section>');
                $(this).after('<section class="brand-logos space-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/space/360 X360SRD_1.jpg"></section><section class="brand-logos space-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/space/360 X 720_SRD.jpg"></section><section class="brand-logos space-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/space/360 X360SRD_2.jpg"></section><section class="brand-logos space-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/space/360 X360_SRD.jpg"></section><section class="brand-logos space-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/space/360 X 720_SRD_2.jpg"></section><section class="brand-logos space-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/space/720 X 360 Ver_SRD1.jpg"></section><section class="brand-logos space-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/space/730X730_SRD2.jpg"></section>');
            }
            else {
                $(this).before('<section class="brand-logos space-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/space/360 X360SRD_3.jpg"></section>');
                $(this).after('<section class="brand-logos space-section animate__animated animate__fadeIn"><div class="left"><img class="" src="images/product_logos/space/360 X360_SRD.jpg"><img class="" src="images/product_logos/space/720 X 360 Ver_SRD1.jpg"></div><div class="right"><img class="" src="images/product_logos/space/360 X360SRD_1.jpg"><img class="" src="images/product_logos/space/360 X360SRD_2.jpg"></div></section><section class="brand-logos space-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/space/360 X 720_SRD.jpg"></section><section class="brand-logos space-section animate__animated animate__fadeIn"><img class=""src="images/product_logos/space/360 X 720_SRD_2.jpg"></section><section class="brand-logos space-section animate__animated animate__fadeIn"><img class=""src="images/product_logos/space/730X730_SRD2.jpg"></section>');
            }
        }
        else if ($(this).attr('id') === 'productId') {
            if (windowSize > 768) {
                $(this).before('<section class="brand-logos product-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/product/360 X360_PD_1.jpg"></section><section class="brand-logos product-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/product/360 X360_PD_2.jpg"></section>');
                $(this).after('<Section class="brand-logos product-section animate__animated animate__fadeIn"><div class="left"><img class="" src="images/product_logos/product/720 X 360 VerPD_1.jpg"></div><div class="right"><div class="d-flex"><img class="" src="images/product_logos/product/360 X360_PD_3.jpg"><img class="" src="images/product_logos/product/360 X360_PD_4.jpg"></div><img class="" src="images/product_logos/product/360 X 720_PD.jpg"></div></Section>');
            }
            else {
                $(this).before('<section class="brand-logos product-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/product/360 X360_PD_4.jpg"></section>');
                $(this).after('<section class="brand-logos product-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/product/360 X 720_PD.jpg"></section><Section class="brand-logos product-section animate__animated animate__fadeIn"><div class="left"><img class="" src="images/product_logos/product/720 X 360 VerPD_1.jpg"></div><div class="right"><img class="" src="images/product_logos/product/360 X360_PD_1.jpg"><img class="" src="images/product_logos/product/360 X360_PD_2.jpg"><img class="" src="images/product_logos/product/360 X360_PD_3.jpg"></div></Section>');
            }
        }
        else if ($(this).attr('id') === 'movieId') {
            if (windowSize > 768) {
                $(this).after('<section class="brand-logos movie-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/animations/360 X 720_M&A_a.png"></section><section class="brand-logos movie-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/animations/360 X360_M&A3.png"></section><section class="brand-logos movie-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/animations/360 X360_M&A4.png"></section><section class="brand-logos movie-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/animations/360 X360_M&A_3.png"></section><section class="brand-logos movie-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/animations/360 X 720_M&A_b.png"></section><section class="brand-logos movie-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/animations/360 X360_M&A.png"></section>');
            }
            else {
                $(this).before('')
                $(this).after('<section class="brand-logos movie-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/animations/360 X360_M&A3.png"></section><section class="brand-logos movie-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/animations/360 X 720_M&A_a.png"></section><section class="brand-logos movie-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/animations/360 X360_M&A4.png"></section><section class="brand-logos movie-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/animations/360 X360_M&A_3.png"></section><section class="brand-logos movie-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/animations/360 X 720_M&A_b.png"></section><section class="brand-logos movie-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/animations/360 X360_M&A.png"></section>');
            }

        }
        else if ($(this).attr('id') === 'eventId') {
            if ( windowSize > 768) {
                $(this).after('<section class="brand-logos content-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/events/360 X360_E&E_3.jpg"></section><section class="brand-logos content-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/events/360 X 720_E&E_1.jpg"></section><section class="brand-logos content-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/events/360 X360_E&E_1.jpg"></section><section class="brand-logos content-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/events/360 X360_E&E_2.jpg"></section><section class="brand-logos content-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/events/360 X 720_E&E_2.jpg"></section>');
                $(this).before('<section class="brand-logos event-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/events/360 X360_E&E_4 .jpg"></section>');
            } 
            else {
                $(this).before('<section class="brand-logos event-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/events/360 X360_E&E_4 .jpg"></section>');
                $(this).after('<section class="brand-logos event-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/events/360 X 720_E&E_1.jpg"></section><section class="brand-logos event-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/events/360 X360_E&E_1.jpg"></section><section class="brand-logos event-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/events/360 X360_E&E_2.jpg"></section><section class="brand-logos event-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/events/360 X 720_E&E_2.jpg"></section><section class="brand-logos event-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/events/360 X360_E&E_3.jpg"></section>');
            }
        }
        else if ($(this).attr('id') === 'contentId') {
            if ( windowSize > 768) {
                $(this).before('<section class="brand-logos content-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/content/360 X360_CS_3.jpg"></section><section class="brand-logos content-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/content/360 X360_CS_4.jpg"></section>');
                $(this).after('<section class="brand-logos content-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/content/360 X 720_CS_1.jpg"></section><section class="brand-logos content-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/content/360 X360_CS_5.jpg"></section><section class="brand-logos content-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/content/360 X360_CS_6.jpg"></section><section class="brand-logos content-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/content/360 X 720_CS_2.jpg"></section>');
            } 
            else {
                $(this).before('<section class="brand-logos content-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/content/360 X360_CS_3.jpg"></section>');
                $(this).after('<section class="brand-logos content-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/content/360 X 720_CS_1.jpg"></section><section class="brand-logos content-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/content/360 X360_CS_4.jpg"></section><section class="brand-logos content-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/content/360 X360_CS_5.jpg"></section><section class="brand-logos content-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/content/360 X 720_CS_2.jpg"></section><section class="brand-logos content-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/content/360 X360_CS_6.jpg"></section>');
            }
        }
    }
    $('.brand-logos').css('height',height);
});


$(document).on('mouseenter','.brand-logos', function() {
    var img = $(this).find('img').attr('src');
    $('.container-full').addClass('grayscale');
    $('.productsPop').css('display','block');
    $('.productsPop img').attr('src',img);
});
$(document).on('mouseleave','.brand-logos', function() {
    $('.container-full').removeClass('grayscale');
    $('.productsPop').css('display','none');
});
