$(document).ready(function () {
  //gototop 버튼 표시
  $(".main_area").on("scroll", function () {
    var gotopElement = $(".gotop");

    if ($(this).scrollTop() > 80) {
      gotopElement.addClass("active");
    } else {
      gotopElement.removeClass("active");
    }
  });

  //login 화면 - 회원가입 버튼 클릭 시 ui 변경
  $(".signup_btn").click(function () {
    $(".login_box").fadeOut(400, function () {
      $(".signup_box").removeClass("hidden").fadeIn(10000);
    });
  });
});

function scrollToTop() {
  $(".main_area").animate({ scrollTop: 0 }, "smooth");
}
