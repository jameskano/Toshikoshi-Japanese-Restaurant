// jshint esversion:9

// Spin animation
$(".social i").each(function() {
  $(this).mouseover(() => {
    $(this).addClass("spinAnim");
    setTimeout(() => {
      $(this).removeClass("spinAnim");
    }, 500);
  });
});
