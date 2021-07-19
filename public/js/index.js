// jshint esversion:9

// Scroll between sections
new fullpage('#fullpage', {
  licenseKey:"BEEC50E8-7FEF4B44-A7C5675B-5359696B",
  slidesNavigation: true,
  anchors: ["section-intro", "section-1", "section-2", "section-3"],
  dragAndMove: "fingersonly",
  animateAnchor: true,
  menu: ".myMenu",
  continuousHorizontal: true,
  normalScrollElements: "#menu, .ui-timepicker-wrapper",
  // Containers slide animation
  afterLoad: (section, origin, destination, direction) => {
    if(origin.index == 0){
      $(".section-container-1").removeClass("slideAnim");
      $(".section-container-2").removeClass("slideAnim");
      $(".section-container-3").removeClass("slideAnim");

      $("#title").addClass("slideAnim");
    }
    if(origin.index == 1){
      $("#title").removeClass("slideAnim");
      $(".section-container-2").removeClass("slideAnim");
      $(".section-container-3").removeClass("slideAnim");

      $(".section-container-1").addClass("slideAnim");
    }
    if(origin.index == 2){
      $("#title").removeClass("slideAnim");
      $(".section-container-1").removeClass("slideAnim");
      $(".section-container-3").removeClass("slideAnim");

      $(".section-container-2").addClass("slideAnim");
    }
    if(origin.index == 3){
      $("#title").removeClass("slideAnim");
      $(".section-container-1").removeClass("slideAnim");
      $(".section-container-2").removeClass("slideAnim");

      $(".section-container-3").addClass("slideAnim");
    }
  }
});

// Horizontal Scroll
// Dishes
$(".dishes").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  scrollOverflow:false
});

// Feedback
$(".feedback-container").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false
});


// Hover dishes animation
$(".dish").each(function() {
  $(this).mouseover(() => $(this).children(".img-container").children("img").css("transform", "scale(1.1)"));
  $(this).mouseleave(() => $(this).children(".img-container").children("img").css("transform", "scale(1)"));
});


// Backdrop and modals
// Menu
$("#menu-button").click(() => {
  $(".backdrop").fadeIn(400);
  $("#menu").show(500);
});

$("#menu-footer").click(() => {
  $(".backdrop").fadeIn(400);
  $("#menu").show(500);
});

// Contact
$("#contact-footer").click(() => {
  $(".backdrop").fadeIn(400);
  $(".contact-form").show(500);
});


// Hide backgrop and modals
$(".backdrop").click(() => {
  $(".backdrop").fadeOut(500);
  $(".contact-form").hide(400);
  $("#menu").hide(400);
});


// Timepicker
$("#timepicker").timepicker({
  "listWidth": 1,
  "timeFormat": 'H:i',
  "minTime": "12:00",
  "maxTime": "22:00",
  "step": 30,
  "disableTextInput": true,
  "disableTouchKeyboard": true,
  "disableTimeRanges": [["15:00", "20:00"]],
});
