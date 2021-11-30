import containerMargin from '../additional-js-items/dynamic-container-margin.js';

containerMargin();

// Change container margin on window resize
$(window).resize(() => containerMargin());

// Change container margin on container resize
$('.container').resize(() => containerMargin());


// Check/uncheck checkboxes for shipping and payment method
function clickCheckbox(checkbox) {
    if(checkbox.hasClass('fa-square')) {
        checkbox.removeClass('fa-square').addClass('fa-check-square');
    }
    else {
        checkbox.removeClass('fa-check-square').addClass('fa-square');
    }
}

// Shipping method checkboxes
$('.payment-shipping-method i').each(function() {
    $(this).click(() => {
        $('.payment-shipping-method i').each(function() {
            $(this).removeClass('fa-check-square').addClass('fa-square');
        });

        clickCheckbox($(this));

        paymentTotalPrice();
    });
});

// Payment method checkboxes
$('.payment-method i').each(function() {
    $(this).click(() => {
        $('.payment-method i').each(function() {
            $(this).removeClass('fa-check-square').addClass('fa-square');
        });

        clickCheckbox($(this));
        
        // Show/hide credit card form
        if($('.payment-method > div:nth-child(2) > span').text() === $(this).siblings('span').text()) {
            $('.payment-credit-card').slideDown(300);
        }
        else {
            $('.payment-credit-card').slideUp(300);
        }
    });
});


// Calculate total price
function paymentTotalPrice() {
    let shippingCost = 0;

    $('.payment-shipping-method i').each(function() {
        if($(this).hasClass('fa-check-square')) {
            shippingCost = +$(this).parent().parent().children('span:last-child').children('strong').text().split('€')[0];
        }
    });

    $('.payment-total-price > strong').text((shippingCost + +$('.payment-price > strong').text().split('€')[0]).toFixed(2) + '€');
}

paymentTotalPrice();