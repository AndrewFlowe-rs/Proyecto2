const decrementBtn = document.querySelector('.decrement-quantity');
const incrementBtn = document.querySelector('.increment-quantity');
const quantityDisplay = document.querySelector('.quantity');
const totalDisplay = document.querySelector('.total');
const price = '<%= p.price %>';
console.log(price)

let quantity = 1; // Cantidad inicial

// Función para decrementar la cantidad
decrementBtn.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        updateQuantityAndTotal();
    }
});

// Función para incrementar la cantidad
incrementBtn.addEventListener('click', () => {
    quantity++;
    updateQuantityAndTotal();
});

// Función para actualizar la cantidad y el total
function updateQuantityAndTotal() {
    quantityDisplay.textContent = quantity;
    totalDisplay.textContent = toThousand(quantity * price);
}

// Función para formatear el precio con separadores de miles
function toThousand(price) {
    return price.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
}
