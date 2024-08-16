const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

const list = document.querySelector('.new__arrivals__list');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

const items = Array.from(list.querySelectorAll('.new__arrivals__item'));
const itemWidth = items[0].offsetWidth + parseFloat(getComputedStyle(items[0]).marginRight);
const scrollAmount = itemWidth; // Chiều rộng của một mục

let scrollPosition = 0;

function scrollNext() {
  if (scrollPosition + scrollAmount >= list.scrollWidth - list.clientWidth) {
    scrollPosition = 0; // Quay lại đầu danh sách
  } else {
    scrollPosition += scrollAmount; // Cuộn đến mục tiếp theo
  }
  list.scrollTo({
    left: scrollPosition,
    behavior: 'smooth'
  });
}

function scrollPrev() {
  if (scrollPosition <= 0) {
    scrollPosition = list.scrollWidth - list.clientWidth; // Cuộn đến cuối danh sách
  } else {
    scrollPosition -= scrollAmount; // Cuộn đến mục trước đó
  }
  list.scrollTo({
    left: scrollPosition,
    behavior: 'smooth'
  });
}

nextButton.addEventListener('click', scrollNext);
prevButton.addEventListener('click', scrollPrev);
