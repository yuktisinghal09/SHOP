/**
 * ====================================================================
 * HEERALAL PANNALAL SAREE EMPORIUM — CART & WISHLIST MODULE
 * ====================================================================
 * Manages shopping cart and customer wishlist state using localStorage.
 * Handles item additions, updates, totals, badge counters, and toast notices.
 */

const CART_STORAGE_KEY = 'heeralal_pannalal_cart';
const WISHLIST_STORAGE_KEY = 'heeralal_pannalal_wishlist';
const RECENTLY_VIEWED_KEY = 'heeralal_pannalal_recent';

// ====================================================================
// 1. CART MANAGEMENT
// ====================================================================

function getCart() {
    try {
        const stored = localStorage.getItem(CART_STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (e) {
        console.error("Error reading cart from localStorage", e);
        return [];
    }
}

function saveCart(cart) {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
        updateHeaderBadges();
        window.dispatchEvent(new CustomEvent('cartUpdated', { detail: cart }));
    } catch (e) {
        console.error("Error saving cart to localStorage", e);
    }
}

function addToCart(productId, quantity = 1, options = {}) {
    const product = getProductById(productId);
    if (!product) {
        showToast("Product not found", "error");
        return;
    }

    const cart = getCart();
    const existingIndex = cart.findIndex(item => item.id === product.id);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            originalPrice: product.originalPrice,
            image: product.image,
            category: product.category,
            fabric: product.fabric,
            quantity: quantity,
            color: options.color || product.color,
            size: options.size || 'Free Size (Semi-Stitched / Saree Unstitched)'
        });
    }

    saveCart(cart);
    showToast(`"${product.name}" added to your shopping bag!`, "success", true);
}

function updateCartQuantity(productId, newQty) {
    let cart = getCart();
    const id = parseInt(productId, 10);
    newQty = parseInt(newQty, 10);

    if (newQty <= 0) {
        removeFromCart(id);
        return;
    }

    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity = newQty;
        saveCart(cart);
    }
}

function removeFromCart(productId) {
    const id = parseInt(productId, 10);
    let cart = getCart();
    const item = cart.find(i => i.id === id);
    cart = cart.filter(i => i.id !== id);
    saveCart(cart);
    if (item) {
        showToast(`Removed "${item.name}" from bag.`, "info");
    }
}

function clearCart() {
    localStorage.removeItem(CART_STORAGE_KEY);
    updateHeaderBadges();
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: [] }));
}

function getCartCount() {
    const cart = getCart();
    return cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartSubtotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// ====================================================================
// 2. WISHLIST MANAGEMENT
// ====================================================================

function getWishlist() {
    try {
        const stored = localStorage.getItem(WISHLIST_STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (e) {
        return [];
    }
}

function saveWishlist(list) {
    try {
        localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(list));
        updateHeaderBadges();
        window.dispatchEvent(new CustomEvent('wishlistUpdated', { detail: list }));
    } catch (e) {
        console.error("Error saving wishlist", e);
    }
}

function toggleWishlist(productId) {
    const id = parseInt(productId, 10);
    const product = getProductById(id);
    if (!product) return;

    let wishlist = getWishlist();
    const index = wishlist.indexOf(id);

    if (index > -1) {
        wishlist.splice(index, 1);
        saveWishlist(wishlist);
        showToast(`Removed "${product.name}" from your wishlist.`, "info");
        return false;
    } else {
        wishlist.push(id);
        saveWishlist(wishlist);
        showToast(`Saved "${product.name}" to your wishlist!`, "success");
        return true;
    }
}

function isInWishlist(productId) {
    const id = parseInt(productId, 10);
    const wishlist = getWishlist();
    return wishlist.includes(id);
}

function getWishlistCount() {
    return getWishlist().length;
}

// ====================================================================
// 3. RECENTLY VIEWED PRODUCTS
// ====================================================================

function addRecentlyViewed(productId) {
    const id = parseInt(productId, 10);
    try {
        let recent = JSON.parse(localStorage.getItem(RECENTLY_VIEWED_KEY) || '[]');
        recent = recent.filter(item => item !== id);
        recent.unshift(id);
        if (recent.length > 6) recent.pop();
        localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(recent));
    } catch (e) {}
}

function getRecentlyViewed() {
    try {
        const ids = JSON.parse(localStorage.getItem(RECENTLY_VIEWED_KEY) || '[]');
        return ids.map(id => getProductById(id)).filter(p => p !== null);
    } catch (e) {
        return [];
    }
}

// ====================================================================
// 4. HEADER BADGE COUNTERS
// ====================================================================

function updateHeaderBadges() {
    const cartCount = getCartCount();
    const wishlistCount = getWishlistCount();

    document.querySelectorAll('.cart-count-badge').forEach(el => {
        el.textContent = cartCount;
        el.style.display = cartCount > 0 ? 'inline-flex' : 'none';
    });

    document.querySelectorAll('.wishlist-count-badge').forEach(el => {
        el.textContent = wishlistCount;
        el.style.display = wishlistCount > 0 ? 'inline-flex' : 'none';
    });

    // Update heart icons on cards on the current page
    document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
        const id = parseInt(btn.getAttribute('data-wishlist-id'), 10);
        if (isInWishlist(id)) {
            btn.classList.add('active');
            btn.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
        } else {
            btn.classList.remove('active');
            btn.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
        }
    });
}

// ====================================================================
// 5. TOAST NOTIFICATIONS
// ====================================================================

function showToast(message, type = "success", showCartLink = false) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let html = `
        <div class="toast-content">
            <span class="toast-icon">
                ${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}
            </span>
            <span class="toast-message">${message}</span>
        </div>
    `;

    if (showCartLink) {
        html += `<a href="cart.html" class="toast-action">View Bag →</a>`;
    }

    toast.innerHTML = html;
    container.appendChild(toast);

    // Trigger enter animation
    setTimeout(() => toast.classList.add('show'), 10);

    // Auto dismiss after 3.8 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3800);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateHeaderBadges();
});
