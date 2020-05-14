var grid = $('.grid-section');

grid.click(function(){
    var count = $('div.grid-display').length;
    if (count === 1) {
        $('.brand-include').remove();
    }
    else {
        if ($(this).attr('id') === 'brandId') {
            $(this).after('<div class="brand-include animate__animated animate__fadeIn"><img class="" src="images/product logos/CM_Logo-1.jpg"></div><div class="brand-include animate__animated animate__fadeIn"><img class="" src="images/product logos/GE_Logo-2.jpg"></div><div class="brand-include animate__animated animate__fadeIn"><img class="" src="images/product logos/DT_Logo-2.jpg"></div><div class="brand-include animate__animated animate__fadeIn"><img class="" src="images/product logos/Alt_Logo-2.jpg"></div><div class="brand-include animate__animated animate__fadeIn"><img class="" src="images/product logos/SL_Logo-2.jpg"></div>');
        }
    }
});