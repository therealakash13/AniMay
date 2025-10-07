$(function () {
  $("#menu-btn").on("click", function () {
    $("#nav-links").addClass("show");
  });

  $("#close-btn").on("click", function () {
    $("#nav-links").removeClass("show");
  });

  $(".flip").click(function () {
    $(this).parents(".wrap").addClass("flipped");
  });

  $(".flipback").click(function () {
    $(this).parents(".wrap").removeClass("flipped");
  });

$(document).on("click", ".va-toggle", function () {
  $(this).closest(".voice-actors").find(".va-content").slideToggle(200);
});
});
