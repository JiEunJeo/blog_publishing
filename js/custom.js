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

  //login 화면 - 회원가입 버튼 클릭 시 ui/ux 변경
  $(".signup_btn").click(function () {
    $(".login_box").fadeOut(400, function () {
      $(".signup_box").removeClass("hidden").fadeIn(10000);
    });
  });

  //에디터 화면 - 모달 표시
  $("#upload_btn").click(function () {
    $(".modal").fadeIn();
  });
  $(".close_btn").click(function () {
    $(".modal").fadeOut();
  });

  //모바일 사이즈 시 메뉴 상호작용
  $(".menu_btn").click(function () {
    $(".menu_box").css("display", "flex").hide().slideDown(800);
    $(this).fadeOut(function () {
      $(".close_btn").show();
    });
  });

  $(".close_btn").click(function () {
    $(".menu_box").slideUp(800);
    $(this).fadeOut(function () {
      $(".menu_btn").show();
    });
  });
});

function scrollToTop() {
  $(".main_area").animate({ scrollTop: 0 }, "smooth");
}
