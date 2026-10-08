/**
 * ====================================================================
 * HEERALAL PANNALAL SAREE EMPORIUM — FILTER & CATALOG ENGINE
 * ====================================================================
 * Powers dynamic product rendering, multi-facet filtering (Category,
 * Price, Fabric, Occasion, Color), and sorting across catalog pages.
 */

// Global card builder helper for consistency across all pages
function renderProductCard(product) {
    const discount = calculateDiscount(product.originalPrice, product.price);
    const inWishlist = isInWishlist(product.id);

    return `
    <article class="product-card" data-product-id="${product.id}" data-category="${product.category}" data-price="${product.price}">
        <div class="product-card-image-wrap">
            <a href="product.html?id=${product.id}" class="product-img-link" aria-label="View ${product.name}">
                <img 
                    src="${product.image}" 
                    alt="${product.name} - Traditional Indian wear from Heeralal Pannalal Mathura"
                    class="product-image"
                    loading="lazy"
                    onerror="this.onerror=null; this.src='images/placeholder.svg';"
                />
            </a>

            <!-- Badges -->
            <div class="product-badges">
                ${discount > 0 ? `<span class="badge badge-sale">${discount}% OFF</span>` : ''}
                ${product.isNew ? `<span class="badge badge-new">NEW</span>` : ''}
                ${product.isFeatured && !product.isNew && discount === 0 ? `<span class="badge badge-featured">BESTSELLER</span>` : ''}
            </div>

            <!-- Action Floating Buttons -->
            <div class="product-card-actions">
                <button 
                    class="action-btn wishlist-btn ${inWishlist ? 'active' : ''}" 
                    data-wishlist-id="${product.id}"
                    onclick="handleWishlistClick(event, ${product.id})"
                    title="Save to Wishlist"
                    aria-label="Save to Wishlist"
                >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="${inWishlist ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                </button>
                <button 
                    class="action-btn quickview-btn" 
                    onclick="openQuickView(event, ${product.id})"
                    title="Quick View"
                    aria-label="Quick View"
                >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            </div>

            <!-- Quick Add to Cart button on hover -->
            <button class="quick-add-btn" onclick="handleQuickAdd(event, ${product.id})">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
                Add to Bag
            </button>
        </div>

        <div class="product-info">
            <div class="product-meta">
                <span class="product-category">${product.category}</span>
                <span class="product-fabric">• ${product.fabric}</span>
            </div>
            
            <h3 class="product-title">
                <a href="product.html?id=${product.id}">${product.name}</a>
            </h3>

            <div class="product-price-row">
                <span class="product-price">${formatPrice(product.price)}</span>
                ${product.originalPrice && product.originalPrice > product.price ? `
                    <span class="product-original-price">${formatPrice(product.originalPrice)}</span>
                    <span class="product-save">Save ${formatPrice(product.originalPrice - product.price)}</span>
                ` : ''}
            </div>

            <div class="product-details-pills">
                <span class="pill-tag">${product.occasion}</span>
                <span class="pill-tag pill-color" style="border-left: 3px solid ${product.colorHex || '#9b7530'};">${product.color}</span>
            </div>
        </div>
    </article>
    `;
}

function handleWishlistClick(event, id) {
    event.preventDefault();
    event.stopPropagation();
    toggleWishlist(id);
}

function handleQuickAdd(event, id) {
    event.preventDefault();
    event.stopPropagation();
    addToCart(id, 1);
}

// ====================================================================
// CATALOG FILTER CONTROLLER
// ====================================================================

class CatalogManager {
    constructor(config = {}) {
        this.baseCategory = config.baseCategory || null; // e.g. "Sarees", "Lehengas", "Suits", "Sale", or null for All
        this.isSaleOnly = config.isSaleOnly || false;
        this.container = document.getElementById(config.containerId || 'product-grid');
        this.countElement = document.getElementById(config.countId || 'product-count');
        this.searchInput = document.getElementById(config.searchId || 'catalog-search');
        this.sortSelect = document.getElementById(config.sortId || 'catalog-sort');
        this.filterForm = document.getElementById(config.filterFormId || 'filter-form');
        this.clearBtn = document.getElementById(config.clearBtnId || 'clear-filters-btn');

        this.currentItems = [];
        this.init();
    }

    init() {
        if (!this.container) return;

        // Parse query params for search or category
        const urlParams = new URLSearchParams(window.location.search);
        const urlCategory = urlParams.get('category');
        const urlSearch = urlParams.get('search');
        const urlFabric = urlParams.get('fabric');
        const urlOccasion = urlParams.get('occasion');

        if (urlCategory && !this.baseCategory) {
            this.baseCategory = urlCategory;
        }

        if (urlSearch && this.searchInput) {
            this.searchInput.value = urlSearch;
        }

        // Attach listeners
        if (this.searchInput) {
            this.searchInput.addEventListener('input', () => this.applyFilters());
        }

        if (this.sortSelect) {
            this.sortSelect.addEventListener('change', () => this.applyFilters());
        }

        if (this.filterForm) {
            this.filterForm.addEventListener('change', () => this.applyFilters());
        }

        if (this.clearBtn) {
            this.clearBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.resetFilters();
            });
        }

        // Pre-select filters from URL
        if (urlFabric && this.filterForm) {
            const fabricBox = this.filterForm.querySelector(`input[name="fabric"][value="${urlFabric}"]`);
            if (fabricBox) fabricBox.checked = true;
        }
        if (urlOccasion && this.filterForm) {
            const occBox = this.filterForm.querySelector(`input[name="occasion"][value="${urlOccasion}"]`);
            if (occBox) occBox.checked = true;
        }

        // Initial filter run
        this.applyFilters();
    }

    resetFilters() {
        if (this.filterForm) this.filterForm.reset();
        if (this.searchInput) this.searchInput.value = '';
        if (this.sortSelect) this.sortSelect.value = 'featured';
        this.applyFilters();
    }

    applyFilters() {
        let list = [...products];

        // 1. Base category constrain
        if (this.baseCategory && this.baseCategory !== 'All') {
            list = list.filter(p => p.category.toLowerCase() === this.baseCategory.toLowerCase());
        }

        // 2. Sale-only constrain
        if (this.isSaleOnly) {
            list = list.filter(p => p.isSale && p.originalPrice > p.price);
        }

        // 3. Category Filter Checkboxes/Radios (if in shop.html)
        if (this.filterForm) {
            const checkedCategories = Array.from(this.filterForm.querySelectorAll('input[name="category"]:checked')).map(el => el.value);
            if (checkedCategories.length > 0 && !checkedCategories.includes('all')) {
                list = list.filter(p => checkedCategories.some(cat => cat.toLowerCase() === p.category.toLowerCase()));
            }

            // Price Filters
            const selectedPrice = this.filterForm.querySelector('input[name="price-bracket"]:checked');
            if (selectedPrice && selectedPrice.value !== 'all') {
                const val = selectedPrice.value;
                if (val === 'under-2000') list = list.filter(p => p.price < 2000);
                else if (val === '2000-5000') list = list.filter(p => p.price >= 2000 && p.price <= 5000);
                else if (val === '5000-10000') list = list.filter(p => p.price > 5000 && p.price <= 10000);
                else if (val === 'above-10000') list = list.filter(p => p.price > 10000);
            }

            // Fabric Filters
            const checkedFabrics = Array.from(this.filterForm.querySelectorAll('input[name="fabric"]:checked')).map(el => el.value.toLowerCase());
            if (checkedFabrics.length > 0) {
                list = list.filter(p => checkedFabrics.some(fab => p.fabric.toLowerCase().includes(fab)));
            }

            // Occasion Filters
            const checkedOccasions = Array.from(this.filterForm.querySelectorAll('input[name="occasion"]:checked')).map(el => el.value.toLowerCase());
            if (checkedOccasions.length > 0) {
                list = list.filter(p => checkedOccasions.some(occ => p.occasion.toLowerCase() === occ));
            }

            // Color Filters
            const checkedColors = Array.from(this.filterForm.querySelectorAll('input[name="color"]:checked')).map(el => el.value.toLowerCase());
            if (checkedColors.length > 0) {
                list = list.filter(p => checkedColors.some(c => p.color.toLowerCase() === c));
            }
        }

        // 4. Search Filter
        const query = this.searchInput ? this.searchInput.value.trim().toLowerCase() : '';
        if (query) {
            list = list.filter(p => 
                p.name.toLowerCase().includes(query) ||
                p.category.toLowerCase().includes(query) ||
                p.fabric.toLowerCase().includes(query) ||
                p.occasion.toLowerCase().includes(query) ||
                p.color.toLowerCase().includes(query) ||
                (p.subCategory && p.subCategory.toLowerCase().includes(query)) ||
                (p.description && p.description.toLowerCase().includes(query))
            );
        }

        // 5. Sorting
        const sortMode = this.sortSelect ? this.sortSelect.value : 'featured';
        if (sortMode === 'price-low') {
            list.sort((a, b) => a.price - b.price);
        } else if (sortMode === 'price-high') {
            list.sort((a, b) => b.price - a.price);
        } else if (sortMode === 'newest') {
            list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        } else if (sortMode === 'discount') {
            list.sort((a, b) => calculateDiscount(b.originalPrice, b.price) - calculateDiscount(a.originalPrice, a.price));
        } else {
            // Featured default
            list.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        }

        this.currentItems = list;
        this.render();
    }

    render() {
        if (!this.container) return;

        if (this.countElement) {
            this.countElement.textContent = `${this.currentItems.length} styles found`;
        }

        if (this.currentItems.length === 0) {
            this.container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">
                        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#aa7c11" stroke-width="1.5">
                            <circle cx="11" cy="11" r="8"/>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                            <line x1="8" y1="11" x2="14" y2="11"/>
                        </svg>
                    </div>
                    <h3>No Outfits Found</h3>
                    <p>We couldn't find any traditional outfits matching your active filters. Try clearing your selected filters or searching with a different term.</p>
                    <button class="btn btn-outline" onclick="window.catalogInstance && window.catalogInstance.resetFilters()">Clear All Filters</button>
                </div>
            `;
            return;
        }

        this.container.innerHTML = this.currentItems.map(p => renderProductCard(p)).join('');
        updateHeaderBadges();
    }
}

// Global expose
window.renderProductCard = renderProductCard;
window.CatalogManager = CatalogManager;
