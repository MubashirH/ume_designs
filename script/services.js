var grid = $('.grid-section');

grid.click(function(){
    var count = $('div.grid-display').length;
    var height = $('.grid-inner').width();
    if (count === 1) {
        $('.brand-include').remove();
    }
    else {
        if ($(this).attr('id') === 'brandId') {
            $(this).after('<div class="brand-include animate__animated animate__fadeIn"><img class="" src="images/product_logos/CM_Logo-1.jpg"></div><div class="brand-include animate__animated animate__fadeIn"><img class="" src="images/product_logos/CM_Logo-1.jpg"></div><div class="brand-include animate__animated animate__fadeIn"><img class="" src="images/product_logos/GE_Logo-2.jpg"></div><div class="brand-include animate__animated animate__fadeIn"><img class="" src="images/product_logos/DT_Logo-2.jpg"></div><div class="brand-include animate__animated animate__fadeIn"><img class="" src="images/product_logos/Alt_Logo-2.jpg"></div><div class="brand-include animate__animated animate__fadeIn"><img class="" src="images/product_logos/SL_Logo-2.jpg"></div><div class="brand-include animate__animated animate__fadeIn"><img class="" src="images/product_logos/DR_Logo-2.jpg"></div>');
        }
    }
    $('.brand-include').css('height',height);
});