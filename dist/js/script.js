const readMoreButton = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");
const dots = document.querySelector(".dots");

readMoreButton.addEventListener("click", function (e) {
  text.classList.toggle("hidden");
  dots.classList.toggle("hidden");
  if (readMoreButton.innerHTML === "Read More") {
    readMoreButton.innerHTML = "Read Less";
  } else {
    readMoreButton.innerHTML = "Read More";
  }
});

// Navbar Fixed
window.onscroll = function () {
  const navBar = document.querySelector("nav");
  const fixedNav = navBar.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};
