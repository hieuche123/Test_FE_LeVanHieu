const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});
const list = document.querySelector('.new__arrivals__list');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let scrollPosition = 0;

prevButton.addEventListener('click', () => {
  if (scrollPosition > 0) {
    scrollPosition -= list.clientWidth / 2;
    list.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }else {
    scrollPosition -= scrollAmount; // Cuộn đến mục trước đó
  }
});

nextButton.addEventListener('click', () => {
  if (scrollPosition < list.scrollWidth - list.clientWidth) {
    scrollPosition += list.clientWidth / 2;
    list.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }
});


