hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
}

const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () => {
  console.log(window.pageYOffset);
})