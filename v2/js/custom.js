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

  //글 상세 화면 - 버튼 토글
  $(".delete_btn").click(function () {
    $(this).fadeOut(function () {
      $(".restore_btn").show();
    });
  });

  $(".restore_btn").click(function () {
    $(this).fadeOut(function () {
      $(".delete_btn").show();
    });
  });

  $(".private_btn").click(function () {
    $(this).fadeOut(function () {
      $(".public_btn").show();
    });
  });

  $(".public_btn").click(function () {
    $(this).fadeOut(function () {
      $(".private_btn").show();
    });
  });

  //에디터 화면 - 모달 표시
  $("#upload_btn").click(function () {
    $(".modal").fadeIn();
  });
  $(".cancel_btn").click(function () {
    $(".modal").fadeOut();
  });

  //드롭다운 버튼
  $(".dropdown_btn").click(function () {
    $(".dropdown_content").toggle();
    $(".arrow").toggleClass("rotated");
  });

  $(".dropdown_content a").click(function (event) {
    event.preventDefault();
    var text = $(this).text();
    var color = $(this).css("color");
    $(".dropdown_btn").html(text + '<i class="arrow"></i>');
    $(".dropdown_btn").css("color", "#0C1A39");
    $(".arrow").toggleClass("rotated");
    $(".dropdown_content").hide();
  });
});

function scrollToTop() {
  $(".main_area").animate({ scrollTop: 0 }, "smooth");
}
