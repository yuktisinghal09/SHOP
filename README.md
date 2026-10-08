# Heeralal Pannalal Saree Emporium — Website Documentation

**Proprietor:** Amit Singhal  
**Location:** Sethbada, Holi Gate, Mathura, Uttar Pradesh, India  
**Contact:** 8439162642  

---

## 📁 Project Structure

```
heeralal-pannalal/
│
├── index.html          # Homepage (Hero, Categories, Featured, New Arrivals, Sale, Lookbook, Testimonials, CTA)
├── shop.html           # Full Catalog with multi-facet filters & sorting
├── sarees.html         # Dedicated Sarees collection (Banarasi, Silk, Organza, Georgette, Chanderi)
├── lehengas.html       # Dedicated Lehengas collection (Bridal, Wedding, Festive, Engagement, Party)
├── suits.html          # Dedicated Suits collection (Anarkali, Sharara, Gharara, Straight, Punjabi)
├── sale.html           # Festive Sale page with automatic discount calculations & price brackets
├── product.html        # Interactive Product Detail page (gallery, zoom, specs, buy now, add to bag)
├── cart.html           # Shopping Bag with quantity steppers, subtotal, and coupons
├── checkout.html       # Customer checkout with Mathura store pickup / delivery & WhatsApp order confirmation
├── about.html          # Store background, Amit Singhal details, Mathura boutique values
├── contact.html        # Contact details, store hours, Google Maps link, and direct inquiry form
│
├── css/
│   └── style.css       # Master stylesheet (Luxury Indian Pastel & Champagne Gold theme, responsive layout, animations)
│
├── js/
│   ├── products.js     # Central data hub: shopInfo, categories, 32 Indian ethnic garments
│   ├── cart.js         # Cart & wishlist state management using localStorage
│   ├── filters.js      # Dynamic multi-facet filtering, price brackets, search & sorting
│   └── script.js       # Sticky nav, mobile drawer, search modal, quick-view modal, back-to-top
│
└── images/
    ├── logo.svg        # Royal HP monogram emblem
    ├── pattern.svg     # Indian jali background pattern
    ├── placeholder.svg # Fallback graphic for offline/missing images
    ├── hero/           # Hero banners
    ├── sarees/         # Saree category graphics
    ├── lehengas/       # Lehenga category graphics
    ├── suits/          # Suit category graphics
    ├── sale/           # Sale banner graphics
    └── lookbook/       # Lookbook gallery assets
```

---

## 🛠️ Quick Customization Guide

### 1. Where to Change Store Details (Name, Phone, Address, Timings)
Open [`js/products.js`](file:///Users/yukti/.gemini/antigravity/scratch/heeralal-pannalal/js/products.js) and edit the `shopInfo` object at lines 15–35:
```javascript
const shopInfo = {
    name: "Heeralal Pannalal Saree Emporium",
    owner: "Amit Singhal",
    phone: "8439162642",
    address: "Sethbada, Holi Gate, Mathura, Uttar Pradesh, India",
    timings: "Monday - Sunday: 10:30 AM - 9:00 PM"
};
```
Because of the automated hydration script in `js/script.js`, changing this updates the text, phone links, and WhatsApp triggers across the website!

### 2. Where to Add, Edit, or Remove Products
Open [`js/products.js`](file:///Users/yukti/.gemini/antigravity/scratch/heeralal-pannalal/js/products.js) under `// 4. PRODUCTS MASTER CATALOGUE`. To add a new product, add a new object to the `products` array:
```javascript
{
    id: 33,
    name: "Pure Katan Silk Banarasi Saree",
    category: "Sarees",
    subCategory: "Banarasi",
    price: 6999,
    originalPrice: 8999,
    image: "images/sarees/my-new-saree.jpg",
    fabric: "Banarasi Silk",
    color: "Maroon",
    occasion: "Wedding",
    description: "Handwoven pure katan silk with royal antique zari borders.",
    isFeatured: true,
    isNew: true,
    isSale: true
}
```

### 3. How to Replace Images
You can replace product, banner, or hero images by either:
1. Adding your image files into `images/sarees/`, `images/lehengas/`, etc. and updating the `image` path in [`js/products.js`](file:///Users/yukti/.gemini/antigravity/scratch/heeralal-pannalal/js/products.js).
2. Or pointing to a web image URL directly in `products.js`.

### 4. How to Change Colors & Fonts
Open [`css/style.css`](file:///Users/yukti/.gemini/antigravity/scratch/heeralal-pannalal/css/style.css) lines 15–45:
```css
:root {
    --rosewood-rich: #8c3f52;   /* Elegant soft rosewood */
    --gold-primary: #c5a165;    /* Soft antique champagne gold */
    --cream-bg: #fcfaf7;        /* Soft alabaster ivory */
    --pastel-blush: #fdf2f4;    /* Pastel blush */
    --pastel-sage: #edf3ec;     /* Pastel sage */
    --text-dark: #2b2320;       /* Velvet charcoal espresso */
}
```

### 5. Running the Website Locally
Open `index.html` in any web browser (Google Chrome, Safari, Edge, Firefox) by double-clicking it, or start a local server:
```bash
cd /Users/yukti/.gemini/antigravity/scratch/heeralal-pannalal
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.
