const openModalBtn = document.getElementById('openModalBtn');
const openModalBtnhome = document.querySelector('.openModalBtnhome');
const openModalBtnshop = document.querySelector('.openModalBtnshop');
const turnModalBtnhome = document.getElementById('turnModalBtnhome');
const turnModalBtnshop = document.getElementById('turnModalBtnshop');

const modal = document.getElementById('modal');
const modalhome = document.getElementById('modalhome');
const modalshop = document.getElementById('modalshop');

const closeModalBtn = document.getElementById('closeModalBtn');
const closeModalBtnshop = document.getElementById('closeModalBtnshop');
const closeModalBtnhome = document.getElementById('closeModalBtnhome');

// Khi nhấn vào nút mở modal
openModalBtn.addEventListener('click', () => {
    modal.classList.add('show');
});

turnModalBtnhome.addEventListener('click', () => {
  modalhome.classList.remove('showhome');
  modal.classList.add('show');
});
turnModalBtnshop.addEventListener('click', () => {
  modalshop.classList.remove('showshop');
  modal.classList.add('show');

});
// Khi nhấn vào dấu X để đóng modal
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

// Khi nhấn vào bất kỳ đâu ngoài modal-content cũng đóng modal
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('show');
    }
});

// Khi nhấn vào nút mở modal
openModalBtnhome.addEventListener('click', () => {
    modalhome.classList.add('showhome');
    modal.classList.remove('show');

});

// Khi nhấn vào dấu X để đóng modal
closeModalBtnhome.addEventListener('click', () => {
    modalhome.classList.remove('showhome');
});

// Khi nhấn vào bất kỳ đâu ngoài modal-content cũng đóng modal
modalhome.addEventListener('click', (event) => {
    if (event.target === modal) {
        modalhome.classList.remove('showhome');
    }
});


// Khi nhấn vào nút mở modal
openModalBtnshop.addEventListener('click', () => {
  modalshop.classList.add('showshop');
  modal.classList.remove('show');

});

// Khi nhấn vào dấu X để đóng modal
closeModalBtnshop.addEventListener('click', () => {
  modalshop.classList.remove('showshop');
});

// Khi nhấn vào bất kỳ đâu ngoài modal-content cũng đóng modal
modalshop.addEventListener('click', (event) => {
  if (event.target === modal) {
      modalshop.classList.remove('showshop');
  }
});




const openModalBtnbuy = document.getElementById('openModalBtnbuy');
const btnOpenCart = document.getElementById('btnOpenCart');

const modalbuy = document.getElementById('modalbuy');
const overlay = document.getElementById('overlay');
const closeModalBtnbuy = document.getElementById('closeModalBtnbuy');

btnOpenCart.addEventListener('click', () => {
  modalbuy.classList.add('showbuy');
    overlay.classList.add('showbuy');
});

openModalBtnbuy.addEventListener('click', () => {
  modalbuy.classList.add('showbuy');
    overlay.classList.add('showbuy');
});

closeModalBtnbuy.addEventListener('click', () => {
  modalbuy.classList.remove('showbuy');
    overlay.classList.remove('showbuy');
});

overlay.addEventListener('click', () => {
  modalbuy.classList.remove('showbuy');
    overlay.classList.remove('showbuy');
});


const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

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
  // Sử dụng matchMedia để kiểm tra kích thước màn hình (dưới 768px thường là kích thước điện thoại)
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  if (isMobile) {
      console.log('Running on a mobile device'); // Debug

      function toggleServiceOption(imgSelector, optionSelector) {
          const imgAdd = document.querySelector(imgSelector);
          const serviceOption = document.querySelector(optionSelector);

          if (!imgAdd || !serviceOption) {
              console.error(`Could not find elements: ${imgSelector} or ${optionSelector}`); // Debug
              return;
          }

          console.log(`Found elements: ${imgSelector} and ${optionSelector}`); // Debug

          // Đặt max-height mặc định
          const defaultHeight = serviceOption.scrollHeight + 'px';
          serviceOption.style.maxHeight = defaultHeight; // Hiển thị phần tử ngay từ đầu

          imgAdd.addEventListener('click', function() {
              // Toggle max-height for slide down/up effect
              if (serviceOption.style.maxHeight === '0px' || serviceOption.style.maxHeight === '') {
                  serviceOption.style.maxHeight = defaultHeight;
                  imgAdd.src = './assets/tru.png'; // Đổi src khi mở
                  serviceOption.style.marginBottom = '10px';
              } else {
                  serviceOption.style.maxHeight = '0px';
                  imgAdd.src = './assets/cong.png'; // Đổi src khi đóng
                  serviceOption.style.marginBottom = '0px';
              }
          });
      }
     
  } else {
    const footer_categories_option = document.querySelector('.footer_categories_option')
    
    footer_categories_option.style.maxHeight = defaultHeight;
      console.log('Not running on a mobile device'); // Debug
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
const itemss = document.querySelectorAll('.section__customer__item');
const itemCount = itemss.length;
let index = 0;

function updateSlider() {
  if (itemss.length > 0 && itemss[0]) {
    const itemWidth = itemss[0].offsetWidth;
    sliderList.style.transform = `translateX(-${index * itemWidth}px)`;
  } 
}

// Event listeners for the previous and next buttons
// Event listeners for the previous and next buttons
prevBtn.addEventListener('click', () => {
  if (itemss.length > 0) {
    index = (index > 0) ? index - 1 : itemCount - 1;
    updateSlider();
  }
});

nextBtn.addEventListener('click', () => {
  if (itemss.length > 0) {
    index = (index < itemCount - 1) ? index + 1 : 0;
    updateSlider();
  }
});
// Initial call to set up the slider position
updateSlider();

const listcustomer = document.querySelector('.new__customer__list');
const prevButtoncustomer = document.querySelector('.prev-customer');
const nextButtoncustomer = document.querySelector('.next-customer');

let scrollPositioncustomer = 0;

prevButtoncustomer.addEventListener('click', () => {
  if (scrollPositioncustomer > 0) {
    scrollPositioncustomer -= (listcustomer.clientWidth + 10);
    if (scrollPositioncustomer < 0) {
      scrollPositioncustomer = 0;
    }
    listcustomer.scrollTo({
      left: scrollPositioncustomer,
      behavior: 'smooth'
    });
  }
});

nextButtoncustomer.addEventListener('click', () => {
  if (scrollPositioncustomer < listcustomer.scrollWidth - listcustomer.clientWidth) {
    scrollPositioncustomer += (listcustomer.clientWidth + 10);
    if (scrollPositioncustomer > listcustomer.scrollWidth - listcustomer.clientWidth) {
      scrollPositioncustomer = listcustomer.scrollWidth - listcustomer.clientWidth;
    }
    listcustomer.scrollTo({
      left: scrollPositioncustomer,
      behavior: 'smooth'
    });
  }
});



document.addEventListener("DOMContentLoaded", function() {
  const increaseButton = document.querySelector(".increase_quantity");
  const reduceButton = document.querySelector(".reduce_quantity");
  const totalNumberElement = document.querySelector(".total-number");

  reduceButton.addEventListener("click", function() {
    let currentValue = parseInt(totalNumberElement.textContent.trim());
    totalNumberElement.textContent = currentValue + 1;
  });

  increaseButton.addEventListener("click", function() {
    let currentValue = parseInt(totalNumberElement.textContent.trim());
    if (currentValue > 1) {
      totalNumberElement.textContent = currentValue - 1;
    }
  });
});

