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
  const imgAdd = document.querySelector('.img_add_categories');

  // Toggle height for slide down/up effect
  if (serviceOption.style.height === '0px' || serviceOption.style.height === '') {
      const fullHeight = serviceOption.scrollHeight + 'px';
      serviceOption.style.height = fullHeight;
      imgAdd.src = './assets/cong.png'; // Đổi src khi mở
  } else {
      serviceOption.style.height = '0px';
      imgAdd.src = './assets/tru.png'; // Đổi src khi đóng
  }
});

document.querySelector('.img_add_service').addEventListener('click', function() {
  const serviceOption = document.querySelector('.footer_service_option');
  const imgAdd = document.querySelector('.img_add_service');

  // Toggle height for slide down/up effect
  if (serviceOption.style.height === '0px' || serviceOption.style.height === '') {
      const fullHeight = serviceOption.scrollHeight + 'px';
      serviceOption.style.height = fullHeight;
      imgAdd.src = './assets/cong.png'; // Đổi src khi mở
  } else {
      serviceOption.style.height = '0px';
      imgAdd.src = './assets/tru.png'; // Đổi src khi đóng
  }
});

document.querySelector('.img_add_newsletter').addEventListener('click', function() {
  const serviceOption = document.querySelector('.footer_newsletter_option');
  const imgAdd = document.querySelector('.img_add_newsletter');

  // Toggle height for slide down/up effect
  if (serviceOption.style.height === '0px' || serviceOption.style.height === '') {
      const fullHeight = serviceOption.scrollHeight + 'px';
      serviceOption.style.height = fullHeight;
      imgAdd.src = './assets/cong.png'; // Đổi src khi mở
  } else {
      serviceOption.style.height = '0px';
      imgAdd.src = './assets/tru.png'; // Đổi src khi đóng
  }
});

document.querySelectorAll('.footer__mobile__item').forEach((item) => {
  item.addEventListener('click', function() {
      // Xóa lớp 'active' khỏi tất cả các mục
      document.querySelectorAll('.footer__mobile__item').forEach(i => i.classList.remove('active'));

      // Thêm lớp 'active' vào mục được click
      this.classList.add('active');

      // Tính toán vị trí của thanh footer_scroll
      const footerScroll = document.querySelector('.footer_scroll');
      const itemRect = this.getBoundingClientRect();  // Vị trí của mục được click
      const parentRect = this.parentElement.getBoundingClientRect();  // Vị trí của khung chứa các mục

      // Tính khoảng cách từ mục được click đến lề trái của khung chứa
      const scrollPosition = itemRect.left - parentRect.left + (itemRect.width / 2) - (footerScroll.clientWidth / 2);

      // Di chuyển thanh footer_scroll đến vị trí tính toán
      footerScroll.style.transform = `translateX(${scrollPosition}px)`;
  });
});
});