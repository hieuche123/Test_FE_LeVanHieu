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
  
    const items = Array.from(list.children);
    const itemWidth = items[0].offsetWidth + parseFloat(getComputedStyle(items[0]).marginRight);
    let scrollAmount = 0;
  
    function updateScrollAmount() {
      // Cập nhật kích thước cuộn
      scrollAmount = itemWidth * items.length;
    }
  
    function scrollNext() {
      const maxScroll = list.scrollWidth - list.clientWidth;
      if (scrollAmount >= maxScroll) {
        list.scrollTo({ left: 0, behavior: 'smooth' });
        scrollAmount = itemWidth;
      } else {
        list.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        scrollAmount += itemWidth;
      }
    }
  
    function scrollPrev() {
      if (scrollAmount <= itemWidth) {
        list.scrollTo({ left: list.scrollWidth - list.clientWidth, behavior: 'smooth' });
        scrollAmount = list.scrollWidth - list.clientWidth;
      } else {
        scrollAmount -= itemWidth;
        list.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  
    nextBtn.addEventListener('click', scrollNext);
    prevBtn.addEventListener('click', scrollPrev);
  
    // Cập nhật kích thước cuộn khi tài liệu đã tải xong
    updateScrollAmount();
  });

