function addToCart(productId) {
    const product = document.getElementById(productId);
    const productName = product.querySelector('h2').textContent;
    const productPrice = product.querySelector('p').textContent;

    const cartItems = document.getElementById('cartItems');
    const newItem = document.createElement('li');
    newItem.textContent = `${productName} - ${productPrice}`;
    cartItems.appendChild(newItem);

    document.getElementById('cart').classList.remove('hidden');
}

function checkout() {
    alert('Thank you for your purchase!');
}