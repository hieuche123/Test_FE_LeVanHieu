const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});
const list = document.querySelector('.new__arrivals__list');
const prevButton = document.querySelector('.prev2');
const nextButton = document.querySelector('.next2');

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


document.addEventListener('DOMContentLoaded', function() {
  function toggleServiceOption(imgSelector, optionSelector) {
      const imgAdd = document.querySelector(imgSelector);
      const serviceOption = document.querySelector(optionSelector);

      // Đặt max-height mặc định
      const defaultHeight = serviceOption.scrollHeight + 'px';
      serviceOption.style.maxHeight = defaultHeight; // Hiển thị phần tử ngay từ đầu

      imgAdd.addEventListener('click', function() {
          // Toggle max-height for slide down/up effect
          if (serviceOption.style.maxHeight === '0px' || serviceOption.style.maxHeight === '') {
              serviceOption.style.maxHeight = defaultHeight;
              imgAdd.src = './assets/cong.png'; // Đổi src khi mở
          } else {
              serviceOption.style.maxHeight = '0px';
              imgAdd.src = './assets/tru.png'; // Đổi src khi đóng
          }
      });
  }

  // Apply to all sections
  toggleServiceOption('.img_add_categories', '.footer_categories_option');
  toggleServiceOption('.img_add_service', '.footer_service_option');
  toggleServiceOption('.img_add_newsletter', '.footer_newsletter_option');
});

document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.footer__mobile__item');
  const footerScroll = document.querySelector('.footer_scroll');

  // Thiết lập vị trí mặc định cho footer_scroll (vị trí của mục thứ 3)
  const defaultActiveItem = items[2];
  const itemWidth = defaultActiveItem.offsetWidth;
  const defaultScrollPosition = defaultActiveItem.offsetLeft;
  footerScroll.style.transform = `translateX(${defaultScrollPosition}px)`;

  // Sự kiện click cho các mục
  items.forEach((item, index) => {
      item.addEventListener('click', function() {
          // Xóa lớp 'active' khỏi tất cả các mục
          items.forEach(i => i.classList.remove('active'));

          // Thêm lớp 'active' vào mục được click
          this.classList.add('active');

          // Tính toán vị trí của thanh footer_scroll
          const scrollPosition = this.offsetLeft;

          // Di chuyển thanh footer_scroll đến vị trí tính toán
          footerScroll.style.transform = `translateX(${scrollPosition}px)`;
      });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const scrollTopButton = document.querySelector('.croll_top');

  // Hiển thị hoặc ẩn nút cuộn lên dựa trên vị trí cuộn của trang
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollTopButton.style.display = 'flex'; // Hiển thị nút khi cuộn xuống hơn 300px
    } else {
      scrollTopButton.style.display = 'none'; // Ẩn nút khi cuộn lên trên 300px
    }
  });

  // Cuộn mượt mà lên đầu trang khi nhấn vào nút
  scrollTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Cuộn mượt mà
    });
  });
});

//slider banner
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("slide-active"); // Loại bỏ lớp slide-active khỏi tất cả các slide
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Hiển thị slide hiện tại
  slides[slideIndex - 1].style.display = "block";

  // Đảm bảo lớp animation được kích hoạt lại
  const bannerContent = slides[slideIndex - 1].querySelector('.banner__content');
  
  // Reset trạng thái ban đầu của banner__content
  bannerContent.style.opacity = '0';
  bannerContent.style.transform = 'translate(-50%, -50%) translateX(-100px)';

  // Buộc trình duyệt phải tính toán lại layout (force reflow)
  bannerContent.offsetHeight; 

  // Thêm lại lớp slide-active và kích hoạt lại animation
  bannerContent.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
  setTimeout(() => {
    bannerContent.style.opacity = '1';
    bannerContent.style.transform = 'translate(-50%, -50%) translateX(0)';
  }, 50);

  // Cập nhật chấm tròn (dot)
  dots[slideIndex - 1].className += " active";
}


//select color
const listItems = document.querySelectorAll('.list_color_item');

listItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Ẩn tất cả các hình tròn lớn
    listItems.forEach(i => {
      i.querySelector('.color_item_big').style.display = 'none';
    });

    // Hiển thị hình tròn lớn của mục được nhấp vào
    item.querySelector('.color_item_big').style.display = 'block';
  });
});