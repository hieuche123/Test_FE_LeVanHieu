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



.section__banner {
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 100%;
  box-sizing: border-box;
  position: relative;
}

.banner__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  background-color: rgba(0, 0, 0, 0.5);
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover, .next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.dots {
  text-align: center;
  position: absolute;
  bottom: 15px;
  width: 100%;
}

.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: rgba(255, 255, 255, 0.7);
}
