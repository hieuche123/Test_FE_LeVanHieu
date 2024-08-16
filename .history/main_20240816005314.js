const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});
document.addEventListener('DOMContentLoaded', function() {
    const list = document.getElementById('arrivalsList');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
  
    const itemWidth = list.querySelector('.new__arrivals__item').offsetWidth;
    const gap = parseFloat(getComputedStyle(list).gap);
    const totalItems = list.children.length;
    const scrollAmount = itemWidth + gap;
    let scrollPosition = 0;
  
    function scrollNext() {
      scrollPosition += scrollAmount;
      if (scrollPosition >= list.scrollWidth - list.clientWidth) {
        scrollPosition = 0; // Quay lại đầu danh sách
      }
      list.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  
    function scrollPrev() {
      scrollPosition -= scrollAmount;
      if (scrollPosition < 0) {
        scrollPosition = list.scrollWidth - list.clientWidth; // Cuộn đến cuối danh sách
      }
      list.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  
    nextBtn.addEventListener('click', scrollNext);
    prevBtn.addEventListener('click', scrollPrev);
  });


