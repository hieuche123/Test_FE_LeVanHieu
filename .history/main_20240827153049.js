const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {

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
// Lấy tất cả các phần tử .list_color_item
const listColorItems = document.querySelectorAll('.list_color_item');

// Thiết lập mặc định: .color_item_big của item đầu tiên sẽ có border màu #111111
listColorItems[0].querySelector('.color_item_big').style.borderColor = '#111111';

// Thêm sự kiện click cho từng item
listColorItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Đặt lại tất cả .color_item_big có border màu #DDDDDD
    listColorItems.forEach(item => {
      item.querySelector('.color_item_big').style.borderColor = '#DDDDDD';
    });

    // Đổi màu border của item được click sang #111111
    item.querySelector('.color_item_big').style.borderColor = '#111111';
  });
});

// Hàm để định dạng số với 2 chữ số
function formatNumber(number) {
  return number < 10 ? '0' + number : number;
}

// Thiết lập thời gian kết thúc (ví dụ: 1 ngày sau)
const endDate = new Date(Date.now() + 652 * 24 * 60 * 60 * 1000); // 652 ngày sau

function updateCountdown() {
  const now = new Date();
  const timeLeft = endDate - now;

  if (timeLeft <= 0) {
    document.getElementById('countdown').innerText = '00 days : 00 hours : 00 mins : 00 secs';
    clearInterval(countdownInterval); // Dừng đếm ngược khi thời gian kết thúc
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerText = 
    `${formatNumber(days)} days : ${formatNumber(hours)} hours : ${formatNumber(minutes)} mins : ${formatNumber(seconds)} secs`;
}

// Cập nhật đồng hồ mỗi giây
const countdownInterval = setInterval(updateCountdown, 1000);

// Cập nhật ngay lập tức khi tải trang
updateCountdown();



const prevBtn = document.getElementById('prevBtn-customer');
const nextBtn = document.getElementById('nextBtn-customer');
const sliderList = document.querySelector('.section__customer__list');
const items = document.querySelectorAll('.section__customer__item');
const itemCount = items.length;
let index = 0;

function updateSlider() {
  const itemWidth = items[0].offsetWidth;
  sliderList.style.transform = `translateX(-${index * itemWidth}px)`;
}

// Event listeners for the previous and next buttons
prevBtn.addEventListener('click', () => {
  index = (index > 0) ? index - 1 : itemCount - Math.floor(3); // Adjust to visible items count on desktop
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  index = (index < itemCount - Math.floor(3)) ? index + 1 : 0; // Adjust to visible items count on desktop
  updateSlider();
});

document.addEventListener('DOMContentLoaded', function () {
  const prevBtn = document.getElementById('prevBtn-customer');
  const nextBtn = document.getElementById('nextBtn-customer');
  const slider = document.querySelector('.section__customer__list');
  
  let currentIndex = 0;
  const items = document.querySelectorAll('.section__customer__item');
  const totalItems = items.length;

  function updateSliderPosition() {
    const itemWidth = items[0].offsetWidth;
    slider.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
  }

  prevBtn.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderPosition();
    }
  });

  nextBtn.addEventListener('click', function () {
    if (currentIndex < totalItems - 1) {
      currentIndex++;
      updateSliderPosition();
    }
  });

  // Optional: Adjust the slider width on window resize
  window.addEventListener('resize', updateSliderPosition);
});



const listcustomer = document.querySelector('.new__customer__list');
const prevButtoncustomer = document.querySelector('.prev-customer');
const nextButtoncustomer = document.querySelector('.next-customer');

let scrollPositioncustomer = 0;

prevButtoncustomer.addEventListener('click', () => {
  if (scrollPositioncustomer > 0) {
    scrollPositioncustomer -= listcustomer.clientWidth;
    listcustomer.scrollTo({
      left: scrollPositioncustomer,
      behavior: 'smooth'
    });
  }
});

nextButtoncustomer.addEventListener('click', () => {
  if (scrollPositioncustomer < listcustomer.scrollWidth - listcustomer.clientWidth) {
    scrollPositioncustomer += listcustomer.clientWidth;
    listcustomer.scrollTo({
      left: scrollPositioncustomer,
      behavior: 'smooth'
    });
  }
});


document.getElementById('openModal').addEventListener('click', function() {
  document.getElementById('modal').style.left = '0';
});

document.getElementById('closeModal').addEventListener('click', function() {
  document.getElementById('modal').style.left = '-100%';
});

// Optional: Close modal when clicking outside the modal content
window.addEventListener('click', function(event) {
  if (event.target === document.getElementById('modal')) {
      document.getElementById('modal').style.left = '-100%';
  }
});