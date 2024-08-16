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


document.querySelector('.img_add_categories').addEventListener('click', function() {
  const serviceOption = document.querySelector('.footer_categories_option');
  if (serviceOption.style.height === '0px' || serviceOption.style.height === '') {
    const fullHeight = serviceOption.scrollHeight + 'px';
    serviceOption.style.height = fullHeight;
} else {
    serviceOption.style.height = '0px';
}
});

document.querySelector('.img_add_service').addEventListener('click', function() {
  const serviceOption = document.querySelector('.footer_service_option');

  if (serviceOption.style.height === '0px' || serviceOption.style.height === '') {
      const fullHeight = serviceOption.scrollHeight + 'px';
      serviceOption.style.height = fullHeight;
  } else {
      serviceOption.style.height = '0px';
  }
});