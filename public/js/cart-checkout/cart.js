import containerMargin from '../additional-js-items/dynamic-container-margin.js';

containerMargin();

// Change container margin on window resize
$(window).resize(() => containerMargin());

// Change container margin on container resize
$('.container').resize(() => containerMargin());


// Calculate total price of product
function totalProductPrice() {
    $('.cart-product-info > strong').each(function() {
        if($(this).siblings('.cart-product-quantity').children('input').val() <= 100 && $(this).siblings('.cart-product-quantity').children('input').val() >= 0) {
            $(this).text((+$(this).siblings('p').text().split('€')[0] * +$(this).siblings('.cart-product-quantity').children('input').val()).toFixed(2) + '€');
        }
    });

    totalPrice();
}

totalProductPrice();

// Update total price of product
$('.cart-product-quantity .fa-chevron-left').each(function() {
    $(this).click(() => {
        if($(this).siblings('input').val() > 0) {
            $(this).siblings('input').val(+$(this).siblings('input').val() - 1);

            totalProductPrice();
            totalPrice();
        }
    });
});

$('.cart-product-quantity .fa-chevron-right').each(function() {
    $(this).click(() => {
        if($(this).siblings('input').val() < 100) {
            $(this).siblings('input').val(+$(this).siblings('input').val() + 1);

            totalProductPrice();
            totalPrice();
        }
    });
});

$('.cart-product-quantity > input').each(function() {
    $(this).on('input', () => totalProductPrice(), totalPrice());
});

// Total price
function totalPrice() {
    $('.cart-total > strong').text(0);
    
    $('.cart-product-info > strong').each(function() {
        $('.cart-total > strong').text((+$('.cart-total > strong').text().split('€')[0] + +$(this).text().split('€')[0]).toFixed(2) + '€');
    });
}


// Show product modal and backdrop
$(".cart-product-info > a").each(function() {
    $(this).click(() => {
      $(".backdrop").fadeIn(400);
      $("#product").show(500).css("display", "flex");
      $(".product-img").children("img").attr("src", $(this).parent().siblings(".cart-product-img").children("img").attr("src"));
      $(".product-title").text($(this).text());
      $(".product-price").text($(this).siblings("p:first-of-type").text());
      $(".product p").text($(this).siblings("p:last-of-type").text());
      $("body").css("overflow", "hidden");
    });
  });
  
// Hide backgrop and product modal
$(".backdrop").click(() => {
    $(".backdrop").fadeOut(500);
    $("#product").hide(400);
    $("body").css("overflow-y", "scroll");
});


// Code to send coupon info through ajax

// Code to send cart info through ajax
