// jshint esversion:9

// Display account sections
$(".overview-form").css("display", localStorage.getItem("displayAccountOverview"));
$(".orders").css("display", localStorage.getItem("displayAccountOrders"));
$(".addresses").css("display", localStorage.getItem("displayAccountAddresses"));

// toggle checkbox
$(".checkbox").each(function() {
  $(this).click(() => {
    if($(this).hasClass("fa-square")) {
      $(this).removeClass("fa-square");
      $(this).addClass("fa-check-square");
    }
    else {
      $(this).removeClass("fa-check-square");
      $(this).addClass("fa-square");
    }
  });
});


// Edit password verification
function passCharacters(min, max) {
  if($("#pass").val().trim().length < min && $("#pass").val().trim().length !== 0) {
    $("#pass").addClass("incorrect");
    $(".pass-span").fadeIn(100);
    $(".pass-span").text("Password must be at least " + min + " characters");
  }
  else if($("#pass").val().trim().length > max) {
    $("#pass").addClass("incorrect");
    $(".pass-span").fadeIn(100);
    $(".pass-span").text("Password must be less than " + max + " characters");
  }
  else {
    $("#pass").removeClass("incorrect");
    $(".pass-span").fadeOut(100);
    $(".pass-span").text("");
  }
}

function passRepeat() {
  if($("#pass").val() !== $("#pass-repeat").val()) {
    $("#pass-repeat").addClass("incorrect");
    $(".pass-repeat-span").fadeIn(100);
    $(".pass-repeat-span").text("Passwords do not match");
  }
  else {
    $("#pass-repeat").removeClass("incorrect");
    $(".pass-repeat-span").fadeOut(100);
    $(".pass-repeat-span").text("");
  }
}

$(".overview-button button").click((e) => {
  passCharacters(8, 20);
  passRepeat();
  if($("#pass").hasClass("incorrect") || $("#pass-repeat").hasClass("incorrect")) {
    e.preventDefault();
  }
});


// Dynamic container margin
function containerMargin() {
  $(".container").css("margin-top", (parseFloat(window.innerHeight) - (parseFloat($(".container").css("height")) + 385)) / 2);
  $(".container").css("margin-bottom", (parseFloat(window.innerHeight) - (parseFloat($(".container").css("height")) + 385)) / 2);
  if(parseFloat($(".container").css("margin-top")) < 50) {
    $(".container").css("margin", "50px 0");
  }
}

// Account sections ans anchors functions
// Highlight account-menu anchors
function highlightAnchor() {
  if($(".overview-form").css("display") !== "none") {
    $(".overview-anchor").addClass("active");
    $(".orders-anchor, .addresses-anchor").removeClass("active");
  }
  else if($(".orders").css("display") !== "none") {
    $(".orders-anchor").addClass("active");
    $(".overview-anchor, .addresses-anchor").removeClass("active");
  }
  else if($(".addresses").css("display") !== "none") {
    $(".addresses-anchor").addClass("active");
    $(".orders-anchor, .overview-anchor").removeClass("active");
  }
}

// Change account section
function changeSection() {
  $(".overview-anchor").click(() => {
    $(".orders, .addresses, .order-modal, .edit-address-form").hide();
    $(".overview-form").show();
  });
  $(".orders-anchor").click(() => {
    $(".overview-form, .addresses, .order-modal, .edit-address-form").hide();
    $(".orders").show();
  });
  $(".addresses-anchor").click(() => {
    $(".orders, .overview-form, .order-modal, .edit-address-form").hide();
    $(".addresses").show().css("display", "grid");
  });

  localStorage.setItem("displayAccountOverview", $(".overview-form").css("display"));
  localStorage.setItem("displayAccountOrders", $(".orders").css("display"));
  localStorage.setItem("displayAccountAddresses", $(".addresses").css("display"));

  containerMargin();
}

changeSection();
highlightAnchor();

$(".account-menu a").each(function() {
  $(this).click(() => {
    changeSection();
    highlightAnchor();
  });
});


// Order status color
$(".order-extra-info p").each(function() {
  if($(this).text() == "Completed") {
    $(this).css("color", "#49CB26");
  }
  else if($(this).text() == "Payment Failed") {
    $(this).css("color", "#FF2D2D");
  }
});


// Show order modal
$(".order-extra-info a").each(function() {
  $(this).click(() => {
    $(".orders").hide();
    $(".order-modal").show().css("display", "flex");
    containerMargin();
  });
});


// Show product modal
$(".order-modal-products-info p a").each(function() {
  $(this).click(() => {
    $(".backdrop").fadeIn(400);
    $("#product").show(500).css("display", "flex");
    // $("#product").children(".product-img").children("img").attr("src", $(this).parent().parent().parent().children(".order-modal-product-img").children("img").attr("src"));
    $(".product-img").children("img").attr("src", $(this).parent().parent().parent().children(".order-modal-product-img").children("img").attr("src"));
    $(".product-title").text($(this).text());
    $(".product-price").text($(this).parent().parent().children("p:nth-child(2)").text());
    $(".product p").text($(this).parent().parent().children("p:nth-child(3)").text());
    $("body").css("overflow", "hidden");
  });
});

// Hide backgrop and modals
$(".backdrop").click(() => {
  $(".backdrop").fadeOut(500);
  $("#product").hide(400);
  $("body").css("overflow-y", "scroll");
});


// Add address
$(".add-address i").click(() => {
  $(".addresses").hide();
  $(".edit-address-form").show();
  containerMargin();
});

// Edit address
$("#edit-button").click(() => {
  $(".addresses").hide();
  $(".edit-address-form").show();
  containerMargin();
});

// Change container margin on window resize
$(window).resize(() => containerMargin());
