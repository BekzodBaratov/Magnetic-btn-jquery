$(document).ready(function () {
  $(".header-btn").mouseenter(function () {
    $("#cursor").css({
      mixBlendMode: "difference",
      transform: "scale(1.5)",
      cursor: "none",
      background: "#fff",
      borderColor: " #fff",
    });
  });

  $(".btn-container").mousemove(function (event) {
    move(this, event);
  });

  $(".btn-container").mouseleave(function () {
    $(this).children().css({ transform: "translate3d(0px, 0px, 0px)", transform: "rotate3d(0, 0, 0, 0deg)" });
  });

  $("body").mousemove(function (e) {
    $("#cursor").css({ left: e.clientX - 25, top: e.clientY - 25 });
  });

  function move(el, e) {
    const w = $(el).innerWidth();
    const h = $(el).innerHeight();
    const offsetLeft = $(el).offset().left;
    const offsetTop = $(el).offset().top;
    const x = e.clientX;
    const y = e.clientY;
    let posX = -offsetLeft + x - w / 2;
    let posY = -offsetTop + y - h / 2;
    $(el)
      .children()
      .css(
        "transform",
        "translate(" +
          posX * 0.7 +
          "px," +
          posY * 0.7 +
          "px)" +
          "rotate3d(" +
          posX * -0.1 +
          ", " +
          posY * -0.3 +
          ", 0, 24deg)"
      );
  }
});
