/**
 * ====================================================================
 * HEERALAL PANNALAL SAREE EMPORIUM — MAIN APPLICATION SCRIPT
 * ====================================================================
 * Handles sticky navigation, mobile drawer, interactive search modal,
 * quick-view modal, dynamic shop-info hydration, and global UI widgets.
 */

document.addEventListener('DOMContentLoaded', () => {
    initDynamicShopInfo();
    initNavbar();
    initMobileNav();
    initSearchModal();
    initQuickViewModal();
    initBackToTop();
    initScrollAnimations();
});

// ====================================================================
// 1. INJECT SHOP INFO DYNAMICALLY ACROSS TEMPLATES
// ====================================================================
function initDynamicShopInfo() {
    if (typeof shopInfo === 'undefined') return;

    // Fill shop text
    document.querySelectorAll('[data-shop-name]').forEach(el => el.textContent = shopInfo.name);
    document.querySelectorAll('[data-shop-owner]').forEach(el => el.textContent = shopInfo.owner);
    document.querySelectorAll('[data-shop-phone]').forEach(el => el.textContent = shopInfo.phoneFormatted || shopInfo.phone);
    document.querySelectorAll('[data-shop-address]').forEach(el => el.textContent = shopInfo.address);
    document.querySelectorAll('[data-shop-city]').forEach(el => el.textContent = shopInfo.city);
    document.querySelectorAll('[data-shop-timings]').forEach(el => el.textContent = shopInfo.timings);

    // Fill phone links
    document.querySelectorAll('[data-shop-phone-link]').forEach(el => {
        el.href = `tel:${shopInfo.phone}`;
    });

    // Fill whatsapp links
    document.querySelectorAll('[data-shop-whatsapp-link]').forEach(el => {
        el.href = shopInfo.whatsappLink;
        el.target = '_blank';
        el.rel = 'noopener noreferrer';
    });

    // Fill maps links
    document.querySelectorAll('[data-shop-maps-link]').forEach(el => {
        el.href = shopInfo.mapsUrl;
        el.target = '_blank';
        el.rel = 'noopener noreferrer';
    });
}

// ====================================================================
// 2. NAVBAR SCROLL & ACTIVE STATE
// ====================================================================
function initNavbar() {
    const navbar = document.querySelector('.header-main');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Highlight current page link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else if (currentPath === '' && linkPath === 'index.html') {
            link.classList.add('active');
        }
    });
}

// ====================================================================
// 3. MOBILE NAVIGATION DRAWER
// ====================================================================
function initMobileNav() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mobileDrawer = document.querySelector('.mobile-drawer');
    const mobileBackdrop = document.querySelector('.mobile-backdrop');
    const closeBtn = document.querySelector('.mobile-drawer-close');

    if (!hamburgerBtn || !mobileDrawer) return;

    function openMobileMenu() {
        mobileDrawer.classList.add('open');
        if (mobileBackdrop) mobileBackdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        mobileDrawer.classList.remove('open');
        if (mobileBackdrop) mobileBackdrop.classList.remove('open');
        document.body.style.overflow = '';
    }

    hamburgerBtn.addEventListener('click', openMobileMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMobileMenu);
    if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileMenu);

    // Close when clicking internal navigation links
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

// ====================================================================
// 4. INTERACTIVE SEARCH MODAL
// ====================================================================
function initSearchModal() {
    const searchTrigger = document.querySelector('.search-trigger-btn');
    let searchModal = document.getElementById('search-modal');

    // Create modal if not already present in DOM
    if (!searchModal) {
        searchModal = document.createElement('div');
        searchModal.id = 'search-modal';
        searchModal.className = 'search-modal-backdrop';
        searchModal.innerHTML = `
            <div class="search-modal-dialog">
                <div class="search-modal-header">
                    <div class="search-input-wrapper">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="11" cy="11" r="8"/>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        </svg>
                        <input type="text" id="global-search-input" placeholder="Search sarees, lehengas, silk suits, banarasi..." autocomplete="off">
                        <button id="search-modal-clear" class="search-clear-btn" style="display:none;">&times;</button>
                    </div>
                    <button class="search-modal-close" aria-label="Close search">&times;</button>
                </div>

                <div class="search-quick-tags">
                    <span class="tag-label">Popular Searches:</span>
                    <button class="search-tag-chip" data-search="Banarasi Saree">Banarasi Saree</button>
                    <button class="search-tag-chip" data-search="Bridal Lehenga">Bridal Lehenga</button>
                    <button class="search-tag-chip" data-search="Anarkali">Anarkali</button>
                    <button class="search-tag-chip" data-search="Organza">Organza</button>
                    <button class="search-tag-chip" data-search="Festive">Festive Wear</button>
                </div>

                <div id="search-results-container" class="search-results-list">
                    <p class="search-hint">Type above to search across our Mathura store collection.</p>
                </div>
            </div>
        `;
        document.body.appendChild(searchModal);
    }

    const input = searchModal.querySelector('#global-search-input');
    const resultsContainer = searchModal.querySelector('#search-results-container');
    const closeBtn = searchModal.querySelector('.search-modal-close');
    const clearBtn = searchModal.querySelector('#search-modal-clear');

    function openModal() {
        searchModal.classList.add('open');
        document.body.style.overflow = 'hidden';
        setTimeout(() => input.focus(), 150);
    }

    function closeModal() {
        searchModal.classList.remove('open');
        document.body.style.overflow = '';
        input.value = '';
        if (clearBtn) clearBtn.style.display = 'none';
        resultsContainer.innerHTML = '<p class="search-hint">Type above to search across our Mathura store collection.</p>';
    }

    if (searchTrigger) {
        searchTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    }

    closeBtn.addEventListener('click', closeModal);
    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchModal.classList.contains('open')) {
            closeModal();
        }
    });

    // Handle Quick Tag clicks
    searchModal.querySelectorAll('.search-tag-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const val = chip.getAttribute('data-search');
            input.value = val;
            executeSearch(val);
        });
    });

    // Handle Clear button
    clearBtn.addEventListener('click', () => {
        input.value = '';
        clearBtn.style.display = 'none';
        resultsContainer.innerHTML = '<p class="search-hint">Type above to search across our Mathura store collection.</p>';
        input.focus();
    });

    // Live search typing
    input.addEventListener('input', (e) => {
        const val = e.target.value.trim();
        clearBtn.style.display = val.length > 0 ? 'inline-flex' : 'none';
        executeSearch(val);
    });

    // Enter key submits to shop.html
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const query = input.value.trim();
            if (query) {
                window.location.href = `shop.html?search=${encodeURIComponent(query)}`;
            }
        }
    });

    function executeSearch(query) {
        if (!query || query.length < 2) {
            resultsContainer.innerHTML = '<p class="search-hint">Type at least 2 characters to search.</p>';
            return;
        }

        const q = query.toLowerCase();
        const matches = products.filter(p => 
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.fabric.toLowerCase().includes(q) ||
            p.occasion.toLowerCase().includes(q) ||
            p.color.toLowerCase().includes(q) ||
            (p.subCategory && p.subCategory.toLowerCase().includes(q))
        ).slice(0, 8); // Top 8 results

        if (matches.length === 0) {
            resultsContainer.innerHTML = `
                <div class="search-no-results">
                    <p>No outfits found matching "<strong>${query}</strong>"</p>
                    <a href="shop.html" class="btn btn-sm btn-outline">Browse Entire Store</a>
                </div>
            `;
            return;
        }

        let html = `
            <div class="search-results-header">
                <span>Found ${matches.length} matching items</span>
                <a href="shop.html?search=${encodeURIComponent(query)}" class="search-view-all">View All in Shop →</a>
            </div>
            <div class="search-items-grid">
        `;

        matches.forEach(item => {
            html += `
                <a href="product.html?id=${item.id}" class="search-item-card">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='images/placeholder.svg';">
                    <div class="search-item-info">
                        <span class="search-item-cat">${item.category} • ${item.fabric}</span>
                        <h4 class="search-item-title">${item.name}</h4>
                        <div class="search-item-price">
                            <span class="price-now">${formatPrice(item.price)}</span>
                            ${item.originalPrice ? `<span class="price-old">${formatPrice(item.originalPrice)}</span>` : ''}
                        </div>
                    </div>
                </a>
            `;
        });

        html += `</div>`;
        resultsContainer.innerHTML = html;
    }
}

// ====================================================================
// 5. PRODUCT QUICK-VIEW MODAL
// ====================================================================
let quickViewModal = null;

function initQuickViewModal() {
    quickViewModal = document.getElementById('quickview-modal');
    if (!quickViewModal) {
        quickViewModal = document.createElement('div');
        quickViewModal.id = 'quickview-modal';
        quickViewModal.className = 'quickview-modal-backdrop';
        quickViewModal.innerHTML = `
            <div class="quickview-dialog">
                <button class="quickview-close" aria-label="Close modal">&times;</button>
                <div id="quickview-body" class="quickview-body">
                    <!-- Populated dynamically -->
                </div>
            </div>
        `;
        document.body.appendChild(quickViewModal);

        quickViewModal.querySelector('.quickview-close').addEventListener('click', closeQuickView);
        quickViewModal.addEventListener('click', (e) => {
            if (e.target === quickViewModal) closeQuickView();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && quickViewModal.classList.contains('open')) {
                closeQuickView();
            }
        });
    }
}

function openQuickView(event, productId) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    if (!quickViewModal) initQuickViewModal();

    const product = getProductById(productId);
    if (!product) return;

    addRecentlyViewed(product.id);

    const discount = calculateDiscount(product.originalPrice, product.price);
    const body = quickViewModal.querySelector('#quickview-body');

    body.innerHTML = `
        <div class="qv-gallery">
            <div class="qv-main-img-wrapper">
                <img id="qv-main-img" src="${product.image}" alt="${product.name}" onerror="this.src='images/placeholder.svg';">
            </div>
            ${product.gallery && product.gallery.length > 1 ? `
                <div class="qv-thumbnails">
                    ${product.gallery.map((img, i) => `
                        <button class="qv-thumb-btn ${i === 0 ? 'active' : ''}" onclick="changeQvImage('${img}', this)">
                            <img src="${img}" alt="Thumbnail ${i + 1}" onerror="this.src='images/placeholder.svg';">
                        </button>
                    `).join('')}
                </div>
            ` : ''}
        </div>

        <div class="qv-details">
            <div class="qv-header">
                <span class="qv-category">${product.category} • ${product.fabric}</span>
                <h2 class="qv-title">${product.name}</h2>
                <div class="qv-price-row">
                    <span class="qv-price">${formatPrice(product.price)}</span>
                    ${product.originalPrice && product.originalPrice > product.price ? `
                        <span class="qv-orig-price">${formatPrice(product.originalPrice)}</span>
                        <span class="badge badge-sale">${discount}% OFF</span>
                    ` : ''}
                </div>
                <div class="qv-tax-note">Inclusive of all taxes • Free store pickup in Mathura</div>
            </div>

            <div class="qv-description">
                <p>${product.description}</p>
            </div>

            <div class="qv-specs-grid">
                <div class="qv-spec-item">
                    <span class="spec-label">Fabric:</span>
                    <span class="spec-val">${product.fabric}</span>
                </div>
                <div class="qv-spec-item">
                    <span class="spec-label">Color:</span>
                    <span class="spec-val"><span class="color-dot" style="background:${product.colorHex || '#9b7530'};"></span> ${product.color}</span>
                </div>
                <div class="qv-spec-item">
                    <span class="spec-label">Occasion:</span>
                    <span class="spec-val">${product.occasion}</span>
                </div>
                <div class="qv-spec-item">
                    <span class="spec-label">Availability:</span>
                    <span class="spec-val in-stock">✓ ${product.availability}</span>
                </div>
            </div>

            <div class="qv-actions-row">
                <div class="qty-selector">
                    <button class="qty-btn" onclick="adjustQvQty(-1)">−</button>
                    <input type="number" id="qv-qty-input" value="1" min="1" max="10" readonly>
                    <button class="qty-btn" onclick="adjustQvQty(1)">+</button>
                </div>
                <button class="btn btn-primary btn-block" onclick="addQvToBag(${product.id})">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                        <line x1="3" y1="6" x2="21" y2="6"/>
                        <path d="M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                    Add to Shopping Bag
                </button>
            </div>

            <div class="qv-footer-links">
                <a href="product.html?id=${product.id}" class="qv-full-link">View Complete Product Page with Reviews & Fabric Care →</a>
            </div>
        </div>
    `;

    quickViewModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeQuickView() {
    if (quickViewModal) {
        quickViewModal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

function changeQvImage(src, btn) {
    const main = document.getElementById('qv-main-img');
    if (main) main.src = src;
    document.querySelectorAll('.qv-thumb-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
}

function adjustQvQty(delta) {
    const input = document.getElementById('qv-qty-input');
    if (!input) return;
    let val = parseInt(input.value, 10) + delta;
    if (val < 1) val = 1;
    if (val > 10) val = 10;
    input.value = val;
}

function addQvToBag(productId) {
    const input = document.getElementById('qv-qty-input');
    const qty = input ? parseInt(input.value, 10) : 1;
    addToCart(productId, qty);
    closeQuickView();
}

// Make accessible to onclick handlers
window.openQuickView = openQuickView;
window.closeQuickView = closeQuickView;
window.changeQvImage = changeQvImage;
window.adjustQvQty = adjustQvQty;
window.addQvToBag = addQvToBag;

// ====================================================================
// 6. BACK TO TOP BUTTON
// ====================================================================
function initBackToTop() {
    let topBtn = document.querySelector('.back-to-top');
    if (!topBtn) {
        topBtn = document.createElement('button');
        topBtn.className = 'back-to-top';
        topBtn.setAttribute('aria-label', 'Back to top');
        topBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
        `;
        document.body.appendChild(topBtn);
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 350) {
            topBtn.classList.add('visible');
        } else {
            topBtn.classList.remove('visible');
        }
    });

    topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ====================================================================
// 7. SCROLL OBSERVER REVEAL ANIMATIONS
// ====================================================================
function initScrollAnimations() {
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    }
}
