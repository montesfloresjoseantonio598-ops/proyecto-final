// === Selecciones globales ===
const verMasButtons = document.querySelectorAll('.verMas');
const beverageModal = document.getElementById('beverageModal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeButton = document.querySelector('.close');
const addToCartButton = document.getElementById('add-to-cart');
const sizeSelect = document.getElementById('size-select');

const navbarButtons = document.querySelectorAll('.navbar button');
const favoriteBtn = navbarButtons[0];  // ❤️ favoritos
const historyBtn = navbarButtons[1];   // 📜 historial

const cartBtn = document.getElementById('cartBtn'); // Botón carrito rojo (en header)

// Modales carrito, favoritos, historial creados dinámicamente si no existen
let cartModal = document.getElementById('cartModal');
if (!cartModal) {
    cartModal = document.createElement('div');
    cartModal.id = 'cartModal';
    cartModal.classList.add('modal');
    cartModal.innerHTML = 
        `<div class="modal-content">
            <span class="cart-close">&times;</span>
            <h2>Carrito</h2>
            <div id="cart-items"></div>
        </div>`;
    document.body.appendChild(cartModal);
}
const cartClose = cartModal.querySelector('.cart-close');
const cartItems = cartModal.querySelector('#cart-items');

let favoritesModal = document.getElementById('favoritesModal');
if (!favoritesModal) {
    favoritesModal = document.createElement('div');
    favoritesModal.id = 'favoritesModal';
    favoritesModal.classList.add('modal');
    favoritesModal.innerHTML = 
        `<div class="modal-content">
            <span class="favorites-close">&times;</span>
            <h2>Favoritos</h2>
            <div id="favorites-list"></div>
        </div>`;
    document.body.appendChild(favoritesModal);
}
const favoritesClose = favoritesModal.querySelector('.favorites-close');
const favoritesList = favoritesModal.querySelector('#favorites-list');

let historyModal = document.getElementById('historyModal');
if (!historyModal) {
    historyModal = document.createElement('div');
    historyModal.id = 'historyModal';
    historyModal.classList.add('modal');
    historyModal.innerHTML = 
        `<div class="modal-content">
            <span class="history-close">&times;</span>
            <h2>Historial</h2>
            <div id="history-list"></div>
        </div>`;
    document.body.appendChild(historyModal);
}
const historyClose = historyModal.querySelector('.history-close');
const historyList = historyModal.querySelector('#history-list');

// Datos
let cart = [];
let favorites = [];
let history = [];

// === FUNCIONES MODALES ===
function closeAllModals() {
    beverageModal.style.display = 'none';
    cartModal.style.display = 'none';
    favoritesModal.style.display = 'none';
    historyModal.style.display = 'none';
}

// === EVENTOS BOTONES ===

// Ver más: abrir modal bebida
verMasButtons.forEach(button => {
    button.addEventListener('click', () => {
        const title = button.getAttribute('data-title');
        const description = button.getAttribute('data-descripcion');
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        beverageModal.style.display = 'flex';
    });
});

// Añadir a favoritos
const favoriteButtons = document.querySelectorAll('.add-to-favorites');
favoriteButtons.forEach(button => {
    button.addEventListener('click', () => {
        const title = button.getAttribute('data-title');
        if (!favorites.includes(title)) {
            favorites.push(title);
            alert(`${title} agregado a favoritos ❤️`);
        } else {
            alert(`${title} ya está en favoritos.`);
        }
    });
});

// Cerrar modal bebida
closeButton.addEventListener('click', () => {
    beverageModal.style.display = 'none';
});

// Cerrar modales si clic fuera modal
window.addEventListener('click', (e) => {
    if (e.target === beverageModal) beverageModal.style.display = 'none';
    if (e.target === cartModal) cartModal.style.display = 'none';
    if (e.target === favoritesModal) favoritesModal.style.display = 'none';
    if (e.target === historyModal) historyModal.style.display = 'none';
});

// Añadir al carrito y al historial
addToCartButton.addEventListener('click', () => {
    const beverageName = modalTitle.textContent;
    const selectedSize = sizeSelect.value;

    cart.push({ name: beverageName, size: selectedSize });
    history.push({ name: beverageName, size: selectedSize, date: new Date().toLocaleString() });

    alert(`${beverageName} - ${selectedSize} añadido al carrito 🛒`);
    beverageModal.style.display = 'none';
});

// Botón carrito rojo en header abre modal carrito
cartBtn.addEventListener('click', () => {
    closeAllModals();
    cartModal.style.display = 'flex';
    cartItems.innerHTML = cart.length === 0
        ? "<p>El carrito está vacío</p>"
        : cart.map(item => `<p>${item.name} - ${item.size}</p>`).join('');
});
cartClose.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Botón favoritos abre modal favoritos
favoriteBtn.addEventListener('click', () => {
    closeAllModals();
    favoritesModal.style.display = 'flex';
    favoritesList.innerHTML = favorites.length === 0
        ? "<p>No tienes favoritos todavía</p>"
        : favorites.map(f => `<p>❤️ ${f}</p>`).join('');
});
favoritesClose.addEventListener('click', () => {
    favoritesModal.style.display = 'none';
});

// Botón historial abre modal historial
historyBtn.addEventListener('click', () => {
    closeAllModals();
    historyModal.style.display = 'flex';
    historyList.innerHTML = history.length === 0
        ? "<p>No hay historial todavía</p>"
        : history.map(h => `<p>📜 ${h.name} - ${h.size} <br><small>${h.date}</small></p>`).join('');
});
historyClose.addEventListener('click', () => {
    historyModal.style.display = 'none';
});
