// jshint esversion:9

// Scroll button
$(window).scroll(() => {
  if ($(window).scrollTop() > 350) {
    $(".top").show();
  } else {
    $(".top").hide();
  }
});

$(".top").click(() => $("html, body").animate({scrollTop: 0}, "400"));


// Fixed menu-navbar
$(window).scroll(() => {
  if ($(window).scrollTop() > 450) {
    $("#menu-navbar").addClass("fixed-menu-navbar");
  } else {
    $("#menu-navbar").removeClass("fixed-menu-navbar");
  }
});


// Product modal
$(".content-sub").each(function() {
  $(this).click(() => {
    $(".backdrop").fadeIn(400);
    $("#product").show(500).css("display", "flex");
    $(".product-img").children("img").attr("src", $(this).children(".menu-img").children("img").attr("src"));
    $(".product-title").text($(this).children(".menu-text").children("h4:first-child").text());
    $(".product-price").text($(this).children(".menu-text").children("h4:nth-child(2)").text());
    $(".product p").text($(this).children(".menu-text").children("p").text());
    $("body").css("overflow", "hidden");
  });
});

// Hide backgrop and modals
$(".backdrop").click(() => {
  $(".backdrop").fadeOut(500);
  $("#product").hide(400);
  $("body").css("overflow-y", "scroll");
});


// Highlight select-menu anchors
$(window).scroll(() => {
  $("#menu-navbar a").each(function() {
    if($($(this).attr("href")).position().top - ($("#menu-navbar").outerHeight() + 1) <= $(window).scrollTop() && $(this).offset().top + $($(this).attr("href")).height() > $(window).scrollTop()) {
      $("#menu-navbar a").removeClass("active");
      $(this).addClass("active");
    }
    else {
      $(this).removeClass("active");
    }
  });
});
