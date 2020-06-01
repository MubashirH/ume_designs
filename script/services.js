var grid = $('.grid-section');
var windowSize = $(window).width()

grid.click(function(){
    var count = $('div.grid-display').length;
    var height = $('.grid-inner').width();
    if (count === 1) {
        $('.brand-logos').remove();
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
                $(this).before('<section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/730X730_WebD_2.jpg"></section>');
                $(this).after('<section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/360 X360_WEb3.jpg"></section><section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/360 X 720_WebD.jpg"></section><section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/360 X360_WEb_4.jpg"></section><section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/360 X360_WEb_1.jpg"></section><section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/360 X360_WEb_A1.jpg"></section><section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/720 X 360 Ver_WebD.jpg"></section><section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/730X730_WebD.jpg"></section>');
            }
            else {
                $(this).before('<section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/360 X360_WEb3.jpg"></section>');
                $(this).after('<section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/730X730_WebD_2.jpg"></section><section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/360 X 720_WebD.jpg"></section><section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/360 X360_WEb_1.jpg"></section><section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/360 X360_WEb_A1.jpg"></section><section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/720 X 360 Ver_WebD.jpg"></section><section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/730X730_WebD.jpg"></section><section class="brand-logos web-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/web/360 X360_WEb_4.jpg"></section>');
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
            $(this).before('<section class="brand-logos space-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/CM_Logo-1.jpg"></section>');
            $(this).after('<section class="brand-logos space-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/CM_Logo-1.jpg"></section><section class="brand-logos space-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/GE_Logo-2.jpg"></section><section class="brand-logos space-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/DT_Logo-2.jpg"></section><section class="brand-logos space-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/Alt_Logo-2.jpg"></section><section class="brand-logos space-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/SL_Logo-2.jpg"></section><section class="brand-logos space-section animate__animated animate__fadeIn"><img class="" src="images/product_logos/DR_Logo-2.jpg"></section>');
        }
        else if ($(this).attr('id') === 'productId') {
            $(this).before('<section class="brand-logos right-brand animate__animated animate__fadeIn"><img class="" src="images/product_logos/CM_Logo-1.jpg"></section>');
            $(this).after('<section class="brand-logos right-brand animate__animated animate__fadeIn"><img class="" src="images/product_logos/CM_Logo-1.jpg"></section><section class="brand-logos right-brand animate__animated animate__fadeIn"><img class="" src="images/product_logos/GE_Logo-2.jpg"></section><section class="brand-logos right-brand animate__animated animate__fadeIn"><img class="" src="images/product_logos/DT_Logo-2.jpg"></section><section class="brand-logos right-brand animate__animated animate__fadeIn"><img class="" src="images/product_logos/Alt_Logo-2.jpg"></section><section class="brand-logos right-brand animate__animated animate__fadeIn"><img class="" src="images/product_logos/SL_Logo-2.jpg"></section><section class="brand-logos right-brand animate__animated animate__fadeIn"><img class="" src="images/product_logos/DR_Logo-2.jpg"></section>');
        }
        else if ($(this).attr('id') === 'movieId') {
            $(this).after('<section class="brand-logos left-brand animate__animated animate__fadeIn"><img class="" src="images/product_logos/CM_Logo-1.jpg"></section><section class="brand-logos left-brand animate__animated animate__fadeIn"><img class="" src="images/product_logos/CM_Logo-1.jpg"></section><section class="brand-logos left-brand animate__animated animate__fadeIn"><img class="" src="images/product_logos/GE_Logo-2.jpg"></section><section class="brand-logos left-brand animate__animated animate__fadeIn"><img class="" src="images/product_logos/DT_Logo-2.jpg"></section><section class="brand-logos left-brand animate__animated animate__fadeIn"><img class="" src="images/product_logos/Alt_Logo-2.jpg"></section><section class="brand-logos left-brand animate__animated animate__fadeIn"><img class="" src="images/product_logos/SL_Logo-2.jpg"></section><section class="brand-logos left-brand animate__animated animate__fadeIn"><img class="" src="images/product_logos/DR_Logo-2.jpg"></section>');
        }
        else if ($(this).attr('id') === 'eventId') {
            $(this).before('<section class="brand-logos center-brand animate__animated animate__fadeIn"><img class="" src="images/product_logos/CM_Logo-1.jpg"></section>');
            $(this).after('<section class="brand-logos center-brand animate__animated animate__fadeIn"><img class="" src="images/product_logos/CM_Logo-1.jpg"></section><section class="brand-logos center-brand animate__animated animate__fadeIn"><img class="" src="images/product_logos/GE_Logo-2.jpg"></section><section class="brand-logos center-brand animate__animated animate__fadeIn"><img class="" src="images/product_logos/DT_Logo-2.jpg"></section><section class="brand-logos center-brand animate__animated animate__fadeIn"><img class="" src="images/product_logos/Alt_Logo-2.jpg"></section><section class="brand-logos center-brand animate__animated animate__fadeIn"><img class="" src="images/product_logos/SL_Logo-2.jpg"></section><section class="brand-logos center-brand animate__animated animate__fadeIn"><img class="" src="images/product_logos/DR_Logo-2.jpg"></section>');
        }
        else if ($(this).attr('id') === 'contentId') {
            $(this).before('<section class="brand-logos right-brand animate__animated animate__fadeIn"><img class="" src="images/product_logos/CM_Logo-1.jpg"></section>');
            $(this).after('<section class="brand-logos right-brand animate__animated animate__fadeIn"><img class="" src="images/product_logos/CM_Logo-1.jpg"></section><section class="brand-logos right-brand animate__animated animate__fadeIn"><img class="" src="images/product_logos/GE_Logo-2.jpg"></section><section class="brand-logos right-brand animate__animated animate__fadeIn"><img class="" src="images/product_logos/DT_Logo-2.jpg"></section><section class="brand-logos right-brand animate__animated animate__fadeIn"><img class="" src="images/product_logos/Alt_Logo-2.jpg"></section><section class="brand-logos right-brand animate__animated animate__fadeIn"><img class="" src="images/product_logos/SL_Logo-2.jpg"></section><section class="brand-logos right-brand animate__animated animate__fadeIn"><img class="" src="images/product_logos/DR_Logo-2.jpg"></section>');
        }
    }
    $('.brand-logos').css('height',height);
});