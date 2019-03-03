$(document).ready(function() {
  $(window).scroll(function () {
    var mypos = $(window).scrollTop();
      $(".tech_card").each(function () {
        // alert(mypos + " " + $(this).offset().top )
          if (mypos > $(this).offset().top - 750) {
              $(this).css('opacity', 1);
          } else {
            $(this).css('opacity', 0);
          };
      });
      $(".project_list").each(function () {
        // alert(mypos + " " + $(this).offset().top )
          if (mypos > $(this).offset().top - 750) {
              $(this).css('opacity', 1);
          } else {
            $(this).css('opacity', 0);
          };
      });
  });
});
