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

  $(window)
    .resize(function () {
      if ($(window).width() < 1350) {
        $(".side-info ").insertBefore(".anime-synopsis");
      } else {
        $(".side-info").insertAfter(".anime-info h1");
      }
    })
    .trigger("resize");

  $("#home").click(function () {
    window.location.href = "/";
  });

  const $prevBtn = $('.prev');
  const $nextBtn = $('.next');  

  const currentPage = Number($prevBtn.data("page_num"));
  const has_next_page= $nextBtn.data("has_next_page");  

  if (currentPage <= 1) {
    $prevBtn.addClass("disabled");
  }

  if(has_next_page) {
    $nextBtn.removeClass("disabled");
  }

});
