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
                        <div class="search-item-tag">
                            <span class="search-item-status" style="font-size:0.75rem; color:var(--maroon-rich); font-weight:600;">Boutique Collection</span>
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
                <div class="qv-tax-note" style="color:var(--gold-dark); font-weight:600; font-size:0.85rem; margin-top:6px;">Boutique Specialty • Sethbada, Holi Gate, Mathura</div>
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

            <div class="qv-actions-row" style="display:flex; flex-direction:column; gap:10px;">
                <a href="https://wa.me/918439162642?text=${encodeURIComponent(`Hello Amit ji, I would like to inquire about "${product.name}" from your boutique collection in Mathura.`)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-block" style="gap:8px;">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.14 8.14 0 0 1-1.25-4.38c0-4.5 3.66-8.16 8.17-8.16 2.18 0 4.23.85 5.77 2.39a8.115 8.115 0 0 1 2.4 5.77c-.01 4.51-3.67 8.24-8.4 8.24zm4.49-6.13c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.78 2.71 4.3 3.8.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z"/></svg>
                    Inquire on WhatsApp
                </a>
                <a href="product.html?id=${product.id}" class="btn btn-outline btn-block">
                    View Complete Outfit Details →
                </a>
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

// ====================================================================
// 8. CUSTOMER REVIEWS MANAGEMENT (LOCAL STORAGE PERSISTENCE)
// ====================================================================

function selectStarRating(rating) {
    const hiddenInput = document.getElementById('review-rating-input');
    const label = document.getElementById('star-rating-label');
    const buttons = document.querySelectorAll('.star-rating-btn');

    if (hiddenInput) hiddenInput.value = rating;

    const ratingDescriptions = {
        1: '1 Star (Poor)',
        2: '2 Stars (Fair)',
        3: '3 Stars (Good)',
        4: '4 Stars (Very Good)',
        5: '5 Stars (Excellent)'
    };

    if (label) {
        label.textContent = ratingDescriptions[rating] || `${rating} Stars`;
    }

    buttons.forEach(btn => {
        const val = parseInt(btn.getAttribute('data-value'), 10);
        if (val <= rating) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function loadCustomerReviews() {
    const grid = document.getElementById('testimonials-grid');
    if (!grid) return;

    try {
        const storedReviews = JSON.parse(localStorage.getItem('hp_customer_reviews') || '[]');
        if (storedReviews && storedReviews.length > 0) {
            storedReviews.forEach(rev => {
                const card = createReviewCardElement(rev);
                grid.insertBefore(card, grid.firstChild);
            });
        }
    } catch (e) {
        console.warn('Could not load stored reviews:', e);
    }
}

function createReviewCardElement(rev) {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    card.style.animation = 'fadeIn 0.4s ease';

    const stars = '★'.repeat(rev.rating || 5);
    const initial = (rev.name && rev.name.trim().length > 0) ? rev.name.trim().charAt(0).toUpperCase() : 'C';

    card.innerHTML = `
        <div class="quote-icon">“</div>
        <p class="testimonial-text">"${escapeHtml(rev.text)}"</p>
        <div class="testimonial-author-block">
            <div class="author-avatar">${initial}</div>
            <div>
                <div class="author-name">
                    ${escapeHtml(rev.name)}
                    <span class="user-badge-tag">Customer Review</span>
                </div>
                <div class="author-city">${escapeHtml(rev.city)} • ${escapeHtml(rev.category || 'Boutique Visit')}</div>
                <div class="rating-stars">${stars}</div>
            </div>
        </div>
    `;
    return card;
}

function handleReviewSubmit(e) {
    e.preventDefault();

    const nameInput = document.getElementById('review-author-name');
    const cityInput = document.getElementById('review-author-city');
    const catInput = document.getElementById('review-category');
    const ratingInput = document.getElementById('review-rating-input');
    const textInput = document.getElementById('review-text');
    const alertBox = document.getElementById('review-success-alert');
    const grid = document.getElementById('testimonials-grid');

    if (!nameInput || !cityInput || !textInput) return;

    const newReview = {
        id: Date.now(),
        name: nameInput.value.trim(),
        city: cityInput.value.trim(),
        category: catInput ? catInput.value : 'Boutique Visit',
        rating: parseInt(ratingInput ? ratingInput.value : '5', 10),
        text: textInput.value.trim(),
        date: new Date().toLocaleDateString('en-IN')
    };

    // Save to localStorage
    try {
        const storedReviews = JSON.parse(localStorage.getItem('hp_customer_reviews') || '[]');
        storedReviews.unshift(newReview);
        localStorage.setItem('hp_customer_reviews', JSON.stringify(storedReviews));
    } catch (err) {
        console.warn('Could not save review locally:', err);
    }

    // Prepend to grid if on page
    if (grid) {
        const newCard = createReviewCardElement(newReview);
        grid.insertBefore(newCard, grid.firstChild);
    }

    // Show success alert
    if (alertBox) {
        alertBox.style.display = 'inline-block';
        setTimeout(() => {
            alertBox.style.display = 'none';
        }, 5000);
    }

    // Reset form
    const form = document.getElementById('customer-review-form');
    if (form) form.reset();
    selectStarRating(5);
}

function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

// Auto-load reviews on page load
document.addEventListener('DOMContentLoaded', () => {
    loadCustomerReviews();
});
