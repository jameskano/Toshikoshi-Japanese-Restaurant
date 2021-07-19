// jshint esversion:9

// Input requirement
function inputRequirement(input) {
  let isRequired = false;

  if($(input).val().trim() === "") {
    $(input).addClass("incorrect");
    $(input).siblings("span").text("This field is required").fadeIn(100);
  }
  else {
    $(input).removeClass("incorrect");
    $(input).siblings("span").fadeOut(100).text("");
    isRequired = true;
  }

  return isRequired;
}

// Email verification
function emailValidation(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test($(input).val().toLowerCase())) {
    $(input).siblings("span").fadeOut(100).text("");
    $(input).removeClass("incorrect");
  } else {
    $(input).siblings("span").text("Email is invalid").fadeIn(100);
    $(input).addClass("incorrect");
  }
}

// Max/min characters verification
function inputLength(input, min, max) {
  let isRequired = false;

  if($(input).val().trim().length < min) {
    $(input).addClass("incorrect");
    $(input).siblings("span").fadeIn(100).text("This field must be at least " + min + " characters");
  }
  else if($(input).val().trim().length > max) {
    $(input).addClass("incorrect");
    $(input).siblings("span").fadeIn(100).text("This field must be less than " + max + " characters");
  }
  else {
    $(input).removeClass("incorrect");
    $(input).siblings("span").fadeOut(100).text("");
    isRequired = true;
  }

  return isRequired;
}

// Email validation chain
function emailVerificationChain(input) {
  if(inputRequirement($(input))) {
    emailValidation($(input));
  }
}


// Reservation verification
$(".booking-button button").click((e) => {
  inputRequirement($(".reserve-name"));
  inputRequirement($(".reserve-phone"));
  emailVerificationChain($(".reserve-email"));
  inputRequirement($(".reserve-people"));
  inputRequirement($(".reserve-date"));
  inputRequirement($(".reserve-time"));

  if($(".reserve-name").hasClass("incorrect") || $(".reserve-phone").hasClass("incorrect") || $(".reserve-email").hasClass("incorrect") || $(".reserve-people").hasClass("incorrect") ||$(".reserve-").hasClass("incorrect") ||$(".reserve-time").hasClass("incorrect")) {
    e.preventDefault();
  }
});


// Contact verification
$(".contact-form button").click((e) => {
  e.preventDefault();

  inputRequirement($("#contact-name"));
  emailVerificationChain($("#contact-email"));
  inputRequirement($("#contact-phone"));
  inputRequirement($("#contact-message"));

  if($("#contact-name").hasClass("incorrect") || $("#contact-email").hasClass("incorrect") || $("#contact-phone").hasClass("incorrect") || $("#contact-message").hasClass("incorrect")) {
    e.preventDefault();
  }
  else {
    $('.message-sent').show(400).css("display", "flex").delay(2000).hide(400);
    $(".contact-form").delay(2400).hide(400);
    $(".backdrop").delay(2400).fadeOut(500);
    $("#contact-name").val("");
    $("#contact-email").val("");
    $("#contact-phone").val("");
    $("#contact-message").val("");
  }
});
