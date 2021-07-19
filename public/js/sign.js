// jshint esversion:9

// Login modal
$("#login").click(() => {
  $(".backdrop").fadeIn(400);
  $(".login").show(500).css("display", "flex");
  $("body").css("overflow", "hidden");
});


// Register modal
$("#register").click(() => {
  $(".backdrop").fadeIn(400);
  $(".register").show(500).css("display", "flex");
  $("body").css("overflow", "hidden");
});

// Register modal from login
$("#register-from-login").click(() => {
  $(".login").hide(400);
  $(".register").show(500).css("display", "flex");
});


// Reset password modal
$("#recover-pass").click(() => {
  $(".login").hide(400);
  $(".recover-pass").show(500).css("display", "flex");
});


// Hide modals and backdrop
$(".backdrop").click(() => {
  $(".backdrop").fadeOut(500);
  $(".login").hide(400);
  $(".register").hide(400);
  $(".recover-pass").hide(400);
  $("body").css("overflow-y", "scroll");
});


// toggle checkbox
$("#checkbox").click(() => {
  if($("#checkbox").hasClass("fa-square")) {
    $("#checkbox").removeClass("fa-square");
    $("#checkbox").addClass("fa-check-square");
  }
  else {
    $("#checkbox").removeClass("fa-check-square");
    $("#checkbox").addClass("fa-square");
  }
});


// Register verification
// Input requirement
function inputRequirement(input) {
  let isRequired = false;

  if($(input).val().trim() === "") {
    if($(input).attr("id") === $("#password-repeat").attr("id")) {
      $(input).addClass("incorrect");
      $(input).siblings("span").text("This field is required").fadeIn(100);
    }
    else {
      $(input).addClass("incorrect");
      $(input).siblings("span").text(input.attr("id").charAt(0).toUpperCase() + input.attr("id").slice(1) + " is required").fadeIn(100);
    }
  }
  else {
    $(input).removeClass("incorrect");
    $(input).siblings("span").fadeOut(100).text("");
    isRequired = true;
  }

  return isRequired;
}

// Max/min characters verification
function inputLength(input, min, max) {
  let isRequired = false;

  if($(input).val().trim().length < min) {
    $(input).addClass("incorrect");
    $(input).siblings("span").fadeIn(100).text(input.attr("id").charAt(0).toUpperCase() + input.attr("id").slice(1) + " must be at least " + min + " characters");
  }
  else if($(input).val().trim().length > max) {
    $(input).addClass("incorrect");
    $(input).siblings("span").fadeIn(100).text(input.attr("id").charAt(0).toUpperCase() + input.attr("id").slice(1) + " must be less than " + max + " characters");
  }
  else {
    $(input).removeClass("incorrect");
    $(input).siblings("span").fadeOut(100).text("");
    isRequired = true;
  }

  return isRequired;
}

// Name alphabetical characters validation
function alphaCharsName() {
  let isRequired = false;
  const nameRegex = new RegExp("^[A-Za-z0-9_-]*$");

  if(nameRegex.test($("#name").val())) {
    $("#name").removeClass("incorrect");
    $("#name").siblings("span").fadeOut(100).text("");
    isRequired = true;
  } else {
    $("#name").addClass("incorrect");
    $("#name").siblings("span").text("Enter only letters, numbers, '-' and '_'").fadeIn(100);
  }
  return isRequired;
}

// Passwords match verification
function passMatch() {
  if($("#password").val() !== $("#password-repeat").val()) {
    $("#password-repeat").addClass("incorrect");
    $("#password-repeat").siblings("span").text("Passwords do not match").fadeIn(100);
  }
  else {
    $("#password-repeat").removeClass("incorrect");
    $("#password-repeat").siblings("span").fadeOut(100).text("");
  }
}

// Password number requirement
function numPass() {
  let isRequired = false;
  const numRegex = new RegExp("^(?=.*[0-9])");

  if(numRegex.test($("#password").val())) {
    $("#password").removeClass("incorrect");
    $("#password").siblings("span").fadeOut(100).text("");
    isRequired = true;
  } else {
    $("#password").addClass("incorrect");
    $("#password").siblings("span").text("Password must have at least 1 number").fadeIn(100);
  }
  return isRequired;
}

// Password uppercase requirement
function uppercasePass() {
  let isRequired = false;
  const upRegex = new RegExp("^(?=.*[A-Z])");

  if(upRegex.test($("#password").val())) {
    $("#password").removeClass("incorrect");
    $("#password").siblings("span").fadeOut(100).text("");
    isRequired = true;
  } else {
    $("#password").addClass("incorrect");
    $("#password").siblings("span").text("Password must have at least 1 uppercase character").fadeIn(100);
  }
  return isRequired;
}

// Password lowercase requirement
function lowercasePass() {
  let isRequired = false;
  const lowRegex = new RegExp("^(?=.*[a-z])");

  if(lowRegex.test($("#password").val())) {
    $("#password").removeClass("incorrect");
    $("#password").siblings("span").fadeOut(100).text("");
    isRequired = true;
  } else {
    $("#password").addClass("incorrect");
    $("#password").siblings("span").text("Password must have at least 1 lowercase character").fadeIn(100);
  }
  return isRequired;
}

// Email verification
function emailValidation() {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test($("#email").val().toLowerCase())) {
    $("#email").siblings("span").fadeOut(100).text("");
    $("#email").removeClass("incorrect");
  } else {
    $("#email").siblings("span").text("Email is invalid").fadeIn(100);
    $("#email").addClass("incorrect");
  }
}

// Name verification chain
function nameVerificationChain() {
  if(inputRequirement($("#name"))) {
    if(inputLength($("#name"), 3, 16)) {
      alphaCharsName();
    }
  }
}

// Email verification chain
function emailVerificationChain() {
  if(inputRequirement($("#email"))) {
    emailValidation();
  }
}

// Password verification chain
function passVerificationChain() {
  if(inputRequirement($("#password"))) {
    if(inputLength($("#password"), 8, 20)) {
      if(lowercasePass()) {
        if(uppercasePass()) {
          numPass();
        }
      }
    }
  }
}

// Password-repeat verification chain
function passMatchVerificationChain() {
  if(inputRequirement($("#password-repeat"))) {
    passMatch();
  }
}

// Verification events listener
$(".register button").click((e) => {
  nameVerificationChain();
  emailVerificationChain();
  passVerificationChain();
  passMatchVerificationChain();
  if($("#password").hasClass("incorrect") || $("#password-repeat").hasClass("incorrect") || $("#name").hasClass("incorrect") || $("#email").hasClass("incorrect")) {
    e.preventDefault();
  }
});


// Login verification
// Input requirement
function inputRequirementLogin(input) {
  let isRequired = false;

  if($(input).val().trim() === "") {
    $(input).addClass("incorrect");
    $(input).siblings("span").text(input.attr("type").charAt(0).toUpperCase() + input.attr("type").slice(1) + " is required").fadeIn(100);
  }
  else {
    $(input).removeClass("incorrect");
    $(input).siblings("span").fadeOut(100).text("");
    isRequired = true;
  }

  return isRequired;
}

// Email verification
function emailValidationLogin() {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test($("#login-email").val().toLowerCase())) {
    $("#login-email").siblings("span").fadeOut(100).text("");
    $("#login-email").removeClass("incorrect");
  } else {
    $("#login-email").siblings("span").text("Email is invalid").fadeIn(100);
    $("#login-email").addClass("incorrect");
  }
}

// Email verification chain
function emailVerificationChainLogin() {
  if(inputRequirementLogin($("#login-email"))) {
    emailValidationLogin();
  }
}

// Login events listener
$(".login button").click((e) => {
  emailVerificationChainLogin();
  inputRequirementLogin($("#login-password"));
  if($("#login-email").hasClass("incorrect") || $("#login-password").hasClass("incorrect")) {
    e.preventDefault();
  }
});


// Recover pass verification
// Input requirement
function inputRequirementRecover() {
  let isRequired = false;

  if($("#recover-email").val().trim() === "") {
    $("#recover-email").addClass("incorrect");
    $("#recover-email").siblings("span").text("Email is required").fadeIn(100);
  }
  else {
    $("#recover-email").removeClass("incorrect");
    $("#recover-email").siblings("span").fadeOut(100).text("");
    isRequired = true;
  }

  return isRequired;
}

// Email verification
function emailValidationRecover() {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test($("#recover-email").val().toLowerCase())) {
    $("#recover-email").siblings("span").fadeOut(100).text("");
    $("#recover-email").removeClass("incorrect");
  } else {
    $("#recover-email").siblings("span").text("Email is invalid").fadeIn(100);
    $("#recover-email").addClass("incorrect");
  }
}

// Email verification chain
function emailVerificationChainRecover() {
  if(inputRequirementRecover()) {
    emailValidationRecover();
  }
}

// Login events listener
$(".recover-pass button").click((e) => {
  emailVerificationChainRecover();
  if($("#recover-email").hasClass("incorrect")) {
    e.preventDefault();
  }
});
