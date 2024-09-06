
document.addEventListener('DOMContentLoaded', function() {
    displayCartItems();
});

function displayCartItems() {
    let cartItems = JSON.parse(localStorage.getItem('prdInCart')) || [];
    let html = '';
    let totalItems = 0;
    let totalPrice = 0;

    cartItems.forEach(item => {
        html += `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h2>${item.name}</h2>
                <p>Price: ${item.price} Eg</p>
                <p>Quantity: 
                    <div class="quantity">
                        <button onclick="decreaseQuantity(${item.id})">-</button>
                        <input type="text" value="${item.quantity}" readonly>
                        <button onclick="increaseQuantity(${item.id})">+</button>
                    </div>
                </p>
            </div>
            <button class="remove-btn" onclick="removeItem(${item.id})">Remove</button>
        </div>
        `;
        totalItems += item.quantity;
        totalPrice += item.totalPrice;
    });

    document.querySelector('.cartdisp').innerHTML = html;
    document.getElementById('totalItems').textContent = totalItems;
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}

function removeItem(id) {
    let cartItems = JSON.parse(localStorage.getItem('prdInCart')) || [];
    cartItems = cartItems.filter(item => item.id !== id);
    localStorage.setItem('prdInCart', JSON.stringify(cartItems));
    displayCartItems();
}

function increaseQuantity(id) {
    let cartItems = JSON.parse(localStorage.getItem('prdInCart')) || [];
    const item = cartItems.find(item => item.id === id);
    item.quantity += 1;
    item.totalPrice = item.quantity * item.price;  
    localStorage.setItem('prdInCart', JSON.stringify(cartItems));
    displayCartItems();
}

function decreaseQuantity(id) {
    let cartItems = JSON.parse(localStorage.getItem('prdInCart')) || [];
    const item = cartItems.find(item => item.id === id);
    if (item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = item.quantity * item.price;  
        localStorage.setItem('prdInCart', JSON.stringify(cartItems));
        displayCartItems();
    }
}
