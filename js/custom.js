document.addEventListener("scroll", function () {
  var gotopElement = document.querySelector(".gotop");

  if (window.scrollY > 80) {
    gotopElement.classList.add("active");
  } else {
    gotopElement.classList.remove("active");
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
