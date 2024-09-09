// script.js

// Dữ liệu giỏ hàng
const cartItems = [
    { index: '1', id: 'item1', name: 'Square Textured Striped', price: 75, quantity: 1 },
    { index: '2', id: 'item2', name: 'Square Textured Stripe2', price: 75, quantity: 1 }
  ];
  
  
  // Hàm tạo HTML cho giỏ hàng
  function renderCart() {
    const cartElement = document.querySelector('.list-buy');
    cartElement.innerHTML = ''; // Xóa nội dung hiện tại
  
    cartItems.map(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'item-buy';
        itemElement.id = `itembuy-delete${item.index}`;

        itemElement.innerHTML = `
            <div class="item-buy-img">
              <img src="./assets/itembuy1.webp" alt="item-buy-img" loading="lazy">
            </div>
            <div class="buy-content buy-content${item.index}">
              <div class="item-buy-content">
                <div class="item-buy-title">
                  <p class="buy-title-name">${item.name}</p>
                  <p class="buy-title-color">Black / M</p>
                </div>
                <div class="item-buy-price" id="${item.id}-price">$${(item.price).toFixed(2)}</div>
                <div class="item-buy-total item-controls">
                  <button  onclick="changeQuantity('${item.id}', -1)" class="reduce_quantity" aria-label="reduce_quantity"><svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 0.5L9.5 1.5L0.5 1.5L0.5 0.5L9.5 0.5Z" fill="#111111"/>
                    </svg>
                  </button>
                  <input class="total-number" type="text" id="${item.id}-quantity" value="${item.quantity}" readonly>
                  <button onclick="changeQuantity('${item.id}', 1)" class="increase_quantity" aria-label="increase_quantity"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.5H5.5L5.5 5.5H9.5V4.5H5.5L5.5 0.5H4.5L4.5 4.5H0.5V5.5H4.5L4.5 9.5Z" fill="#111111"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-buy-action">
                <svg class="delete1 ${item.index}-delete" onclick="removeItem('${item.id}')" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 4.25H3.5V11.8379C3.5 11.9108 3.51367 11.9837 3.54102 12.0566C3.57747 12.1296 3.62305 12.1934 3.67773 12.248C3.72331 12.3027 3.78255 12.3438 3.85547 12.3711C3.92839 12.3984 4.00586 12.4121 4.08789 12.4121H9.91211C9.99414 12.4121 10.0716 12.3984 10.1445 12.3711C10.2174 12.3438 10.2767 12.3027 10.3223 12.248C10.377 12.1934 10.418 12.1296 10.4453 12.0566C10.4818 11.9837 10.5 11.9108 10.5 11.8379V4.25ZM9.91211 3.08789H12.25C12.4141 3.08789 12.5508 3.14714 12.6602 3.26562C12.7786 3.375 12.8379 3.50716 12.8379 3.66211C12.8379 3.82617 12.7786 3.96745 12.6602 4.08594C12.5508 4.19531 12.4141 4.25 12.25 4.25H11.6621V11.8379C11.6621 12.0749 11.6165 12.3027 11.5254 12.5215C11.4342 12.7311 11.3112 12.9134 11.1562 13.0684C11.0013 13.2324 10.8145 13.36 10.5957 13.4512C10.3861 13.5423 10.1582 13.5879 9.91211 13.5879H4.08789C3.8418 13.5879 3.61393 13.5378 3.4043 13.4375C3.19466 13.3464 3.00781 13.2233 2.84375 13.0684C2.6888 12.9134 2.56576 12.7311 2.47461 12.5215C2.38346 12.3027 2.33789 12.0749 2.33789 11.8379V4.25H1.75C1.58594 4.25 1.44466 4.19531 1.32617 4.08594C1.2168 3.96745 1.16211 3.82617 1.16211 3.66211C1.16211 3.50716 1.2168 3.375 1.32617 3.26562C1.44466 3.14714 1.58594 3.08789 1.75 3.08789H4.08789V2.5C4.08789 2.26302 4.13346 2.03971 4.22461 1.83008C4.31576 1.61133 4.4388 1.42448 4.59375 1.26953C4.7487 1.10547 4.93099 0.977865 5.14062 0.886719C5.35938 0.795573 5.5918 0.75 5.83789 0.75H8.16211C8.4082 0.75 8.63607 0.795573 8.8457 0.886719C9.05534 0.977865 9.24219 1.10547 9.40625 1.26953C9.5612 1.42448 9.68424 1.61133 9.77539 1.83008C9.86654 2.03971 9.91211 2.26302 9.91211 2.5V3.08789ZM5.25 3.08789H8.75V2.5C8.75 2.41797 8.73177 2.34505 8.69531 2.28125C8.66797 2.20833 8.62695 2.14453 8.57227 2.08984C8.52669 2.03516 8.46745 1.99414 8.39453 1.9668C8.32161 1.93034 8.24414 1.91211 8.16211 1.91211H5.83789C5.75586 1.91211 5.67839 1.93034 5.60547 1.9668C5.53255 1.99414 5.47331 2.03516 5.42773 2.08984C5.37305 2.14453 5.32747 2.20833 5.29102 2.28125C5.26367 2.34505 5.25 2.41797 5.25 2.5V3.08789ZM5.25 6.58789C5.25 6.42383 5.30469 6.28711 5.41406 6.17773C5.53255 6.05924 5.67383 6 5.83789 6C5.99284 6 6.125 6.05924 6.23438 6.17773C6.35286 6.28711 6.41211 6.42383 6.41211 6.58789V10.0879C6.41211 10.2428 6.35286 10.3796 6.23438 10.498C6.125 10.6074 5.99284 10.6621 5.83789 10.6621C5.67383 10.6621 5.53255 10.6074 5.41406 10.498C5.30469 10.3796 5.25 10.2428 5.25 10.0879V6.58789ZM7.58789 6.58789C7.58789 6.42383 7.64258 6.28711 7.75195 6.17773C7.87044 6.05924 8.00716 6 8.16211 6C8.32617 6 8.46289 6.05924 8.57227 6.17773C8.69076 6.28711 8.75 6.42383 8.75 6.58789V10.0879C8.75 10.2428 8.69076 10.3796 8.57227 10.498C8.46289 10.6074 8.32617 10.6621 8.16211 10.6621C8.00716 10.6621 7.87044 10.6074 7.75195 10.498C7.64258 10.3796 7.58789 10.2428 7.58789 10.0879V6.58789Z" fill="#999999"/>
                </svg>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.73512 2.10021L2.94595 7.16937C2.76512 7.36187 2.59012 7.74104 2.55512 8.00354L2.33928 9.89354C2.26345 10.576 2.75345 11.0427 3.43012 10.926L5.30845 10.6052C5.57095 10.5585 5.93845 10.366 6.11928 10.1677L10.9085 5.09854C11.7368 4.22354 12.1101 3.22604 10.8209 2.00687C9.53762 0.799375 8.56345 1.22521 7.73512 2.10021Z" stroke="#999999" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6.93604 2.9458C7.18687 4.5558 8.49354 5.78663 10.1152 5.94997" stroke="#999999" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1.75 12.8333H12.25" stroke="#999999" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="confirm-delete${item.index}">
              <div class="confirm-delete${item.index}-left">
                <p>Add to wishlist before remove?</p>
                <div class="btn-delete-order">
                  <button class="btn-yes${item.index}" onclick="removeItem(${item.index})" aria-label="btn-yes1">YES</button>
                  <button class="btn-no${item.index}" aria-label="btn-yes2">NO</button>
                </div>
              </div>
              <div class="confirm-delete${item.index}-right">
                <svg width="16" height="16" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.41406 6.74609C4.24479 6.58984 4.16016 6.40104 4.16016 6.17969C4.16016 5.94531 4.24479 5.74349 4.41406 5.57422C4.57031 5.41797 4.76562 5.33984 5 5.33984C5.23438 5.33984 5.42969 5.41797 5.58594 5.57422L10 9.98828L14.4141 5.57422C14.5703 5.41797 14.7656 5.33984 15 5.33984C15.2344 5.33984 15.4297 5.41797 15.5859 5.57422C15.7552 5.74349 15.8398 5.94531 15.8398 6.17969C15.8398 6.40104 15.7552 6.58984 15.5859 6.74609L11.1719 11.1602L15.5859 15.5742C15.7552 15.7435 15.8398 15.9453 15.8398 16.1797C15.8398 16.401 15.7552 16.5898 15.5859 16.7461C15.4297 16.9154 15.2344 17 15 17C14.7656 17 14.5703 16.9154 14.4141 16.7461L10 12.3516L5.58594 16.7461C5.42969 16.9154 5.23438 17 5 17C4.76562 17 4.57031 16.9154 4.41406 16.7461C4.24479 16.5898 4.16016 16.401 4.16016 16.1797C4.16016 15.9453 4.24479 15.7435 4.41406 15.5742L8.82812 11.1602L4.41406 6.74609Z" fill="#555555"/>
                </svg>
                  
              </div>
          <span class="item-total" id="${item.id}-total">$${(item.price * item.quantity).toFixed(2)} VND</span>
          
        `;
        cartElement.appendChild(itemElement);
    });
  
    updateCartTotal();
  }
  
  // Hàm thay đổi số lượng sản phẩm
  function changeQuantity(itemId, change) {
    const item = cartItems.find(item => item.id === itemId);
    const quantityInput = document.getElementById(`${itemId}-quantity`);
    let quantity = parseInt(quantityInput.value);
    quantity = Math.max(1, quantity + change); // Không cho phép số lượng nhỏ hơn 1
    quantityInput.value = quantity;
    item.quantity = quantity;
  
    const itemTotal = item.price * item.quantity;
    document.getElementById(`${itemId}-total`).innerText = itemTotal + ' VND';
  
    updateCartTotal();
  }
  
  // Hàm cập nhật tổng tiền của giỏ hàng
  function updateCartTotal() {
    const totalAmount = cartItems.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
    document.getElementById('total-amount').innerText = `$${totalAmount.toFixed(2)}`;
    const progressFill = document.querySelector('.progress-fill');
    const progressicon = document.querySelector('.progress-icon');
    if (totalAmount > 100) {
        progressFill.style.width = 100 + '%';
        progressicon.style.left = 100 + '%';
    }else {
        progressFill.style.width = totalAmount + '%';
        progressicon.style.left = totalAmount + '%';
    }
  }
  
  // Khởi tạo giỏ hàng
  renderCart();


  function removeItem(itemId) {
    const element = document.querySelector('.iconcart-quatity-span');
    const itemIndex = cartItems.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
        cartItems.splice(itemIndex, 1); // Xóa sản phẩm khỏi giỏ hàng
        renderCart(); // Render lại giỏ hàng
        updateCartTotal();
    }
}
  // Lấy nút và ảnh từ DOM




// // Lấy nút và ảnh từ DOM
// const removeBtn2 = document.querySelector('.item2-delete');
// const buycontent2 = document.querySelector('.buy-content2');
// const confirmdelete2 = document.querySelector('.confirm-delete2');
// const confirmdelete2right = document.querySelector('.confirm-delete2-right');
// const btnyes2 = document.querySelector('.btn-yes2');
// const btnno2 = document.querySelector('.btn-no2');
// const itembuy2 = document.getElementById('itembuy-delete2');

// // Thêm sự kiện click vào nút
// removeBtn2.addEventListener('click', function() {
//     buycontent2.style.display = 'none';
//     confirmdelete2.style.display = 'flex';
// });

// // btnyes2.addEventListener('click', function() {
// //     itembuy2.style.display = 'none';
// // });
// btnno2.addEventListener('click', function() {
//   buycontent2.style.display = 'flex';
//   confirmdelete2.style.display = 'none';
// });
// confirmdelete2right.addEventListener('click', function() {
//   buycontent2.style.display = 'flex';
//   confirmdelete2.style.display = 'none';
// });

