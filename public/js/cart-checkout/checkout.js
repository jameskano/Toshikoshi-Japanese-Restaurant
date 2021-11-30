import containerMargin from '../additional-js-items/dynamic-container-margin.js';

containerMargin();

// Change container margin on window resize
$(window).resize(() => containerMargin());

// Change container margin on container resize
$('.container').resize(() => containerMargin());


// Country picker
$("#country").countrySelect();


// Show password container
function clickCheckbox(checkbox) {
    if(checkbox.hasClass('fa-square')) {
        checkbox.removeClass('fa-square').addClass('fa-check-square');
    }
    else {
        checkbox.removeClass('fa-check-square').addClass('fa-square');
    }
}

$('.checkout-account > i').click(() => {
    if($('.checkout-account > i').hasClass('fa-square')) {
        $('.checkout-pass-container').show(200).delay(200).css('display', 'grid');
    }
    else {
        $('.checkout-pass-container').hide(200);
    }

    clickCheckbox($('.checkout-account > i'))
});

$('.checkout-account > span').click(() => {
    if($('.checkout-account > i').hasClass('fa-square')) {
        $('.checkout-pass-container').show(200).delay(200).css('display', 'grid');
    }
    else {
        $('.checkout-pass-container').hide(200);
    }

    clickCheckbox($('.checkout-account > i'))
});


// Code to change content if authenticated


// Check/uncheck address checkbox
$('.checkout-address-checkbox > i').click(() => clickCheckbox($('.checkout-address-checkbox > i')));

// Uncheck shipping address if another address is selected


// Code to send checkout info through ajax