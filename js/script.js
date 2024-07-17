let cart = [];
let totalPrice = 0;

function addItem() {
    const itemName = document.getElementById('item-name').value;
    const itemPrice = parseFloat(document.getElementById('item-price').value);

    if (itemName && !isNaN(itemPrice) && itemPrice > 0) {
        const item = { name: itemName, price: itemPrice };
        cart.push(item);
        updateCart();
    } else {
        alert('Please enter valid item name and price.');
    }

    document.getElementById('item-name').value = '';
    document.getElementById('item-price').value = '';
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    totalPrice = 0;
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        const button = document.createElement('button');
        button.textContent = 'Remove';
        button.onclick = () => removeItem(index);
        li.appendChild(button);
        cartItems.appendChild(li);

        totalPrice += item.price;
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}
