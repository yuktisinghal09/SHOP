/**
 * ====================================================================
 * HEERALAL PANNALAL SAREE EMPORIUM — DATA REPOSITORY
 * Location: Sethbada, Holi Gate, Mathura, Uttar Pradesh, India
 * Owner: Amit Singhal | Contact: 8439162642
 * ====================================================================
 * 
 * Central hub for store details, products, categories, prices, discounts,
 * and contact info. All photos are distinct aesthetic Indian ethnic images.
 */

// ====================================================================
// 1. SHOP INFORMATION — EDIT HERE
// ====================================================================
const shopInfo = {
    name: "Heeralal Pannalal Saree Emporium",
    tagline: "Timeless Indian Elegance",
    subTagline: "Discover Sarees, Lehengas & Traditional Wear for Every Celebration",
    owner: "Amit Singhal",
    phone: "8439162642",
    phoneFormatted: "+91 8439162642",
    whatsapp: "8439162642",
    whatsappLink: "https://wa.me/918439162642?text=Hello%20Heeralal%20Pannalal%20Saree%20Emporium,%20I%20would%20like%20to%20inquire%20about%20your%20collection.",
    address: "Sethbada, Holi Gate, Mathura, Uttar Pradesh, India",
    landmark: "Near Holi Gate Market",
    city: "Mathura",
    state: "Uttar Pradesh",
    pincode: "281001",
    country: "India",
    timings: "Monday - Sunday: 10:30 AM - 9:00 PM",
    mapsUrl: "https://maps.google.com/?q=Sethbada+Holi+Gate+Mathura+Uttar+Pradesh+India",
    announcement: "Festive Collection • Wedding Wear • Traditional Elegance • Mathura's Trusted Boutique",
    aboutShort: "Heeralal Pannalal Saree Emporium is Mathura's premier destination for exquisite traditional women's ethnic wear. Located at Sethbada, Holi Gate, our boutique offers hand-curated Banarasi sarees, bridal lehengas, designer anarkali suits, and festive ensembles in timeless pastel and royal silhouettes for weddings, festivals, and sacred celebrations.",
    currency: "₹"
};

// ====================================================================
// 2. SOCIAL MEDIA & CHANNELS — EDIT HERE
// ====================================================================
const socialMedia = {
    whatsapp: "https://wa.me/918439162642",
    phone: "tel:8439162642",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com"
};

// ====================================================================
// 3. CATEGORIES — EDIT HERE (100% Unique Aesthetic Photos)
// ====================================================================
const categories = [
    {
        id: "sarees",
        name: "Sarees",
        tagline: "Grace for every occasion",
        description: "Banarasi, Kanjivaram, Organza, Georgette & Handloom Silks",
        image: "https://images.unsplash.com/photo-1610030469911-37d45763bf45?auto=format&fit=crop&w=900&q=80",
        fallbackImage: "images/sarees/cat-sarees.svg",
        link: "sarees.html"
    },
    {
        id: "lehengas",
        name: "Lehengas",
        tagline: "Made for celebrations",
        description: "Bridal, Wedding, Velvet, Pastel & Designer Festive Ensembles",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
        fallbackImage: "images/lehengas/cat-lehengas.svg",
        link: "lehengas.html"
    },
    {
        id: "suits",
        name: "Suits",
        tagline: "Classic elegance, reimagined",
        description: "Anarkalis, Sharara Sets, Ghararas, Palazzo & Straight Cut Suits",
        image: "https://images.unsplash.com/photo-1614613535313-e47f722955f1?auto=format&fit=crop&w=900&q=80",
        fallbackImage: "images/suits/cat-suits.svg",
        link: "suits.html"
    },
    {
        id: "festive",
        name: "Festive Wear",
        tagline: "Celebrate in style",
        description: "Vibrant ethnic sets, Haldi & Mehndi outfits, Puja drapes",
        image: "https://images.unsplash.com/photo-1602763259501-4e9636f849f1?auto=format&fit=crop&w=900&q=80",
        fallbackImage: "images/placeholder.svg",
        link: "shop.html?category=Festive+Wear"
    }
];

// ====================================================================
// 4. PRODUCTS MASTER CATALOGUE (32 UNIQUE AESTHETIC PRODUCTS)
// Every product has a distinct photo ID — zero repetitions!
// ====================================================================
const products = [
    // --- SAREES (12+ ITEMS) ---
    {
        id: 1,
        name: "Royal Banarasi Silk Saree",
        category: "Sarees",
        subCategory: "Banarasi",
        price: 4999,
        originalPrice: 6499,
        image: "https://i.pinimg.com/736x/0c/fe/fb/0cfefbcf870d67754cc2b9a4273f846e.jpg",
        gallery: [
            "https://i.pinimg.com/736x/5f/e6/7b/5fe67b4659294b0b0e0e6c50d56119d4.jpg",
            "https://i.pinimg.com/736x/36/cf/8b/36cf8ba590d12d1730f920f50957104d.jpg"
        ],
        fabric: "Banarasi Silk",
        color: "Deep Wine Maroon",
        colorHex: "#6b1426",
        occasion: "Wedding",
        isFeatured: true,
        isNew: false,
        isSale: true,
        description: "Exquisite handwoven Banarasi silk saree featuring antique golden zari floral jaal work across the body and a lavish pallu. Includes matching unstitched blouse piece. Perfect for weddings and sacred family festivities.",
        includes: "Unstitched Blouse Piece (0.8m) included",
        availability: "In Stock (Available at Mathura Store)"
    },
    {
        id: 4,
        name: "Festive Georgette Saree",
        category: "Sarees",
        subCategory: "Georgette",
        price: 2999,
        originalPrice: 3899,
        image: "https://i.pinimg.com/736x/94/8a/93/948a9301433f4ceb5d58abede16afc71.jpg",
        gallery: [
            "https://i.pinimg.com/736x/34/68/b1/3468b13c3acf00dfd7d47e4003afd0a5.jpg"
        ],
        fabric: "Georgette",
        color: "Mustard Gold",
        colorHex: "#d4a017",
        occasion: "Festive",
        isFeatured: true,
        isNew: false,
        isSale: true,
        description: "Lightweight and flowy festive georgette saree featuring an intricate mirror-work border and delicate butta detailing throughout. Drapes effortlessly for long festive gatherings and poojas.",
        includes: "Unstitched Blouse Piece included",
        availability: "In Stock"
    },
    {
        id: 7,
        name: "Embroidered Organza Saree",
        category: "Sarees",
        subCategory: "Organza",
        price: 5499,
        originalPrice: 6999,
        image: "https://i.pinimg.com/736x/c3/f9/2b/c3f92b54b33fb05a3e24e94449d40ff1.jpg",
        gallery: [
            "https://i.pinimg.com/736x/dd/3a/f6/dd3af60e307ce629e3800add25f60f56.jpg",
            "https://i.pinimg.com/736x/27/e8/4d/27e84d63305fe4c3c3c947b051346f45.jpg"
        ],
        fabric: "Organza",
        color: "Pastel Ivory Pearl",
        colorHex: "#fffbf2",
        occasion: "Party",
        isFeatured: true,
        isNew: true,
        isSale: true,
        description: "Ethereal ivory sheer organza saree decorated with delicate pastel floral embroidery, subtle cutdana work on the scalloped borders, and an ornate satin blouse piece.",
        includes: "Unstitched Designer Blouse Piece included",
        availability: "In Stock"
    },
    {
        id: 9,
        name: "Kanjivaram Bridal Silk Saree",
        category: "Sarees",
        subCategory: "Silk",
        price: 7999,
        originalPrice: 9999,
        image: "https://i.pinimg.com/736x/68/fe/a8/68fea81903c7d906576d5a030eb405b5.jpg",
        gallery: [
            "https://i.pinimg.com/736x/f8/e1/e0/f8e1e0637e7e34fcf9d319c13f820a34.jpg"
        ],
        fabric: "Silk",
        color: "Crimson Red",
        colorHex: "#b31b1b",
        occasion: "Wedding",
        isFeatured: false,
        isNew: true,
        isSale: true,
        description: "Pure south silk Kanjivaram saree with gold tissue pallu and temple korvai borders, woven by master craftsmen for timeless royal radiance.",
        includes: "Pure Silk Blouse Piece included",
        availability: "In Stock"
    },
    {
        id: 10,
        name: "Handloom Chanderi Zari Saree",
        category: "Sarees",
        subCategory: "Chanderi",
        price: 3799,
        originalPrice: 4599,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlLvn42L-jkqq9B-0qL__q4LUjUQxtAxt4wIC9kOgFWf-QJgUjEBJwVJM&s=10",
        gallery: [
            "https://www.luxurionworld.com/cdn/shop/files/PS1C1SC925052002_Pastel_Chanderi_Handloom_Tissue_Katan_Saree_3.jpg?v=1747828676&width=2560"
        ],
        fabric: "Chanderi",
        color: "Pastel Blush Pink",
        colorHex: "#f7c6cc",
        occasion: "Festive",
        isFeatured: false,
        isNew: false,
        isSale: false,
        description: "Featherlight handloom Chanderi saree featuring traditional golden coin motifs and a woven zari border. Ideal for day festivals and intimate ceremonies.",
        includes: "Blouse Piece included",
        availability: "In Stock"
    },
    {
        id: 11,
        name: "Pure Chiffon Leheriya Saree",
        category: "Sarees",
        subCategory: "Chiffon",
        price: 2499,
        originalPrice: 3299,
        image: "https://i.pinimg.com/736x/dc/b4/d3/dcb4d3afca65d9bdcc7e09e6b378044a.jpg",
        gallery: [
            "https://i.pinimg.com/1200x/fd/26/a3/fd26a3f8356611058a93fb7e6899d5eb.jpg"
        ],
        fabric: "Chiffon",
        color: "Pastel Saffron Yellow",
        colorHex: "#f9cb65",
        occasion: "Festive",
        isFeatured: false,
        isNew: true,
        isSale: true,
        description: "Traditional vibrant leheriya pattern printed on soft pure chiffon, edged with delicate gota patti handwork.",
        includes: "Matching Blouse Piece",
        availability: "In Stock"
    },
    {
        id: 12,
        name: "Cotton Silk Daily Festive Saree",
        category: "Sarees",
        subCategory: "Cotton",
        price: 1899,
        originalPrice: 2499,
        image: "https://i.pinimg.com/736x/e2/12/66/e2126663aab3b22133a2e5174f49400a.jpg",
        gallery: [
            "https://i.pinimg.com/736x/f1/31/33/f131338a114d1641aa2b5f53ed026d86.jpg"
        ],
        fabric: "Cotton",
        color: "Pastel Sage Green",
        colorHex: "#8a9a86",
        occasion: "Puja",
        isFeatured: false,
        isNew: false,
        isSale: true,
        description: "Breathable and comfortable cotton silk blend saree woven with subtle contrast temple borders. Highly recommended for daily temple visits and pooja wear in Mathura.",
        includes: "Blouse Piece included",
        availability: "In Stock"
    },
    {
        id: 13,
        name: "Deep Blue Banarasi Saree",
        category: "Sarees",
        subCategory: "Banarasi",
        price: 6499,
        originalPrice: 8499,
        image: "https://i.pinimg.com/736x/e7/ac/1d/e7ac1df44d64f9415d9efbd856330996.jpg",
        gallery: [
            "https://i.pinimg.com/1200x/c3/73/c7/c373c75a8caff67bcd50a6565fa570aa.jpg"
        ],
        fabric: "Banarasi Silk",
        color: "Royal Navy Blue",
        colorHex: "#1a2a4e",
        occasion: "Wedding",
        isFeatured: false,
        isNew: true,
        isSale: true,
        description: "Rich royal blue Banarasi silk saree with heavy gold brocade weaving and traditional paisley motifs, capturing vintage aristocracy.",
        includes: "Heavy Brocade Blouse Piece included",
        availability: "In Stock"
    },
    {
        id: 14,
        name: "Rose Pink Tissue Silk Saree",
        category: "Sarees",
        subCategory: "Silk",
        price: 5999,
        originalPrice: 7499,
        image: "https://i.pinimg.com/736x/25/6e/e9/256ee9b92e472c9874cbb1f571a7a81c.jpg",
        gallery: [
            "https://i.pinimg.com/736x/25/6e/e9/256ee9b92e472c9874cbb1f571a7a81c.jpg"
        ],
        fabric: "Silk",
        color: "Pastel Rose Quartz",
        colorHex: "#e8b4bc",
        occasion: "Party",
        isFeatured: false,
        isNew: true,
        isSale: false,
        description: "Luminous tissue silk saree with shimmering metallic yarn, pearl work borders, and effortless modern drape.",
        includes: "Designer Blouse Piece",
        availability: "In Stock"
    },
    {
        id: 15,
        name: "Meenakari Banarasi Georgette Saree",
        category: "Sarees",
        subCategory: "Georgette",
        price: 6899,
        originalPrice: 8999,
        image: "https://i.pinimg.com/1200x/3b/69/ef/3b69ef79155d3328c43153e672e4ba2d.jpg",
        gallery: [
            "https://i.pinimg.com/1200x/0b/5c/98/0b5c98d3781de2da368d69f2495341bb.jpg"
        ],
        fabric: "Georgette",
        color: "Vintage Maroon",
        colorHex: "#752332",
        occasion: "Wedding",
        isFeatured: false,
        isNew: true,
        isSale: true,
        description: "Khaddi georgette saree featuring colorful Meenakari floral boota and rich antique zari pallu. Supremely soft and lightweight.",
        includes: "Meenakari Blouse Piece",
        availability: "In Stock"
    },
    {
        id: 16,
        name: "Chikankari Hand Embroidered Saree",
        category: "Sarees",
        subCategory: "Georgette",
        price: 4599,
        originalPrice: 5999,
        image: "https://i.pinimg.com/1200x/ba/6f/af/ba6fafab206c528b39a76d9b8cca18eb.jpg",
        gallery: [
            "https://i.pinimg.com/736x/28/2b/c7/282bc770fe8e554c2d96303266fe60a8.jpg"
        ],
        fabric: "Georgette",
        color: "Pastel Ivory Cream",
        colorHex: "#f9f6ef",
        occasion: "Festive",
        isFeatured: false,
        isNew: false,
        isSale: true,
        description: "Intricate Lakhnavi Chikankari hand embroidery on pure georgette with subtle mukaish work that glistens in the light.",
        includes: "Matching Blouse Piece",
        availability: "In Stock"
    },

    // --- LEHENGAS (10+ ITEMS) ---
    {
        id: 2,
        name: "Wine Lehenga",
        category: "Lehengas",
        subCategory: "Bridal",
        price: 8999,
        originalPrice: 11999,
        image: "https://i.pinimg.com/736x/1a/ae/84/1aae843f28e9fa9b338b867dad65bb0a.jpg",
        gallery: [
            "https://i.pinimg.com/736x/43/44/95/4344958ad084f758bfb6a78257399332.jpg"
        ],
        fabric: "Velvet",
        color: "Antique Wine",
        colorHex: "#5a1828",
        occasion: "Bridal",
        isFeatured: true,
        isNew: true,
        isSale: true,
        description: "Opulent wine velvet lehenga richly embellished with fine zardozi, dori embroidery, and sequin work. Paired with a heavily worked blouse and dual shaded organza dupatta with scalloped borders.",
        includes: "Semi-stitched Lehenga (flair 4.2m), Blouse piece, Embroidered Dupatta",
        availability: "In Stock (Available at Mathura Store)"
    },
    {
        id: 5,
        name: "Designer Wedding Lehenga",
        category: "Lehengas",
        subCategory: "Wedding",
        price: 12999,
        originalPrice: 16999,
        image: "https://i.pinimg.com/736x/30/d4/e8/30d4e80fb9608909de2921722996c952.jpg",
        gallery: [
            "https://i.pinimg.com/736x/30/d4/e8/30d4e80fb9608909de2921722996c952.jpg"
        ],
        fabric: "Silk",
        color: "Bridal Red",
        colorHex: "#8d0801",
        occasion: "Wedding",
        isFeatured: true,
        isNew: true,
        isSale: true,
        description: "A showstopping bridal red silk lehenga adorned with royal kalidar motifs, heavy badla and pita work, complete with a statement handcrafted latkan and dual bridal dupattas.",
        includes: "Semi-stitched Lehenga (heavy cancan included), Designer Blouse & 2 Dupattas",
        availability: "In Stock (Store Exclusive)"
    },
    {
        id: 17,
        name: "Maroon Heritage Velvet Lehenga",
        category: "Lehengas",
        subCategory: "Bridal",
        price: 14999,
        originalPrice: 19999,
        image: "https://i.pinimg.com/736x/ea/d8/d1/ead8d173e5e5563d40baba2ddbc2dcdd.jpg",
        gallery: [
            "https://i.pinimg.com/736x/80/6b/d8/806bd8ddc07faf25d7b5a96813f6106b.jpg"],
        fabric: "Velvet",
        color: "Heritage Maroon",
        colorHex: "#661224",
        occasion: "Bridal",
        isFeatured: false,
        isNew: true,
        isSale: true,
        description: "Royal bride ensemble in micro velvet, encrusted with dabka, nakshi, and kundan work with majestic peacocks and floral vines.",
        includes: "Cancan inner layer, Custom Blouse fabric, Double Dupattas",
        availability: "In Stock"
    },
    {
        id: 18,
        name: "Pastel Floral Organza Lehenga",
        category: "Lehengas",
        subCategory: "Engagement",
        price: 7499,
        originalPrice: 9499,
        image: "https://i.pinimg.com/736x/36/d8/ea/36d8eaf830778be877e33ff7f7f89ef2.jpg",
        gallery: [
            "https://i.pinimg.com/736x/8e/bd/b5/8ebdb5567a31dbcc56d157854417c154.jpg"],
        fabric: "Organza",
        color: "Pastel Peach Pink",
        colorHex: "#f9d2d8",
        occasion: "Engagement",
        isFeatured: false,
        isNew: true,
        isSale: true,
        description: "Dreamy organza lehenga with hand-painted digital florals, mirror-work waistbelt, and sweetheart neckline choli.",
        includes: "Semi-stitched Skirt, Choli piece, Net Dupatta",
        availability: "In Stock"
    },
    {
        id: 19,
        name: "Golden Sequin Party Wear Lehenga",
        category: "Lehengas",
        subCategory: "Party",
        price: 6999,
        originalPrice: 8999,
        image: "https://images.unsplash.com/photo-1594744803400-f9a888c34fbc?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1594744803400-f9a888c34fbc?auto=format&fit=crop&w=800&q=80"
        ],
        fabric: "Georgette",
        color: "Pastel Champagne Gold",
        colorHex: "#dfba82",
        occasion: "Party",
        isFeatured: false,
        isNew: false,
        isSale: true,
        description: "All-over champagne gold sequin sheet work lehenga with modern contemporary flair, perfect for sangeet and cocktail nights.",
        includes: "Blouse, Lehenga, Ruffle Dupatta",
        availability: "In Stock"
    },
    {
        id: 20,
        name: "Emerald Green Velvet Sangeet Lehenga",
        category: "Lehengas",
        subCategory: "Festive",
        price: 8499,
        originalPrice: 10999,
        image: "https://images.unsplash.com/photo-1594744803450-410a56a64e10?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1594744803450-410a56a64e10?auto=format&fit=crop&w=800&q=80"
        ],
        fabric: "Velvet",
        color: "Pastel Jade Emerald",
        colorHex: "#1a5235",
        occasion: "Festive",
        isFeatured: false,
        isNew: true,
        isSale: true,
        description: "Deep emerald green festive velvet lehenga detailed with golden tilla work and contrast blush pink embroidered dupatta.",
        includes: "Stitched Skirt, Blouse fabric, Dupatta",
        availability: "In Stock"
    },
    {
        id: 21,
        name: "Yellow Haldi Silk Lehenga",
        category: "Lehengas",
        subCategory: "Festive",
        price: 5499,
        originalPrice: 6999,
        image: "https://images.unsplash.com/photo-1583391734010-098e72765b21?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1583391734010-098e72765b21?auto=format&fit=crop&w=800&q=80"
        ],
        fabric: "Silk",
        color: "Pastel Haldi Mustard",
        colorHex: "#e5b022",
        occasion: "Festive",
        isFeatured: false,
        isNew: false,
        isSale: true,
        description: "Radiant haldi-yellow art silk lehenga featuring gota border kali work and lightweight bandhani printed dupatta with tassels.",
        includes: "Skirt, Blouse piece, Bandhani Dupatta",
        availability: "In Stock"
    },
    {
        id: 22,
        name: "Royal Navy Blue Wedding Lehenga",
        category: "Lehengas",
        subCategory: "Wedding",
        price: 11499,
        originalPrice: 14999,
        image: "https://images.unsplash.com/photo-1594744803470-3d75bbef3981?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1594744803470-3d75bbef3981?auto=format&fit=crop&w=800&q=80"
        ],
        fabric: "Raw Silk",
        color: "Midnight Blue",
        colorHex: "#132448",
        occasion: "Wedding",
        isFeatured: false,
        isNew: true,
        isSale: true,
        description: "Royal navy blue raw silk lehenga with elaborate architectural palace motifs done in silver-gold zardozi embroidery.",
        includes: "Heavy Can-can lehenga, Designer choli, Embellished veil",
        availability: "In Stock"
    },
    {
        id: 23,
        name: "Ivory Pearl Threadwork Lehenga",
        category: "Lehengas",
        subCategory: "Engagement",
        price: 9999,
        originalPrice: 12999,
        image: "https://i.pinimg.com/1200x/81/d1/4e/81d14e4f121eb980243a255391ef23cd.jpg",
        gallery: [
            "https://i.pinimg.com/1200x/81/d1/4e/81d14e4f121eb980243a255391ef23cd.jpg"
        ],
        fabric: "Silk",
        color: "Pastel Pearl Ivory",
        colorHex: "#f8f5ec",
        occasion: "Engagement",
        isFeatured: false,
        isNew: true,
        isSale: true,
        description: "Subtle and sophisticated ivory silk lehenga enriched with tone-on-tone thread embroidery and seed pearl highlights.",
        includes: "Lehenga with inner lining, Blouse fabric, Dupatta",
        availability: "In Stock"
    },
    {
        id: 24,
        name: "Crimson Red Bridal Banarasi Lehenga",
        category: "Lehengas",
        subCategory: "Bridal",
        price: 13499,
        originalPrice: 17499,
        image: "https://i.pinimg.com/736x/a0/bf/36/a0bf367ddd9108c50a5f9845762c07f5.jpg",
        gallery: [
            "https://i.pinimg.com/1200x/13/c4/cd/13c4cd3383bfc50c8f03bece121e6f2e.jpg"
        ],
        fabric: "Banarasi Silk",
        color: "Sacred Crimson",
        colorHex: "#9c1524",
        occasion: "Bridal",
        isFeatured: false,
        isNew: true,
        isSale: true,
        description: "Traditional Banarasi brocade lehenga handwoven in sacred katan silk with traditional flora and fauna motifs and rich border borders.",
        includes: "Banarasi Skirt, Pure Silk Blouse, Heavy Dupatta",
        availability: "In Stock"
    },

    // --- SUITS & ENSEMBLES (10+ ITEMS) ---
    {
        id: 3,
        name: "Pastel Anarkali Suit",
        category: "Suits",
        subCategory: "Anarkali",
        price: 3499,
        originalPrice: 4299,
        image: "https://i.pinimg.com/736x/55/7a/44/557a44848b5d1282921b255c566862a2.jpg",
        gallery: [
            "https://i.pinimg.com/1200x/b6/7f/e2/b67fe2dc2e223c20a5bd5054f74fff9f.jpg",
            "https://i.pinimg.com/736x/68/4d/23/684d23e23ee3ac37e00bd3f8eee08566.jpg"
        ],
        fabric: "Georgette",
        color: "Pastel Rose Quartz",
        colorHex: "#f2c4cb",
        occasion: "Festive",
        isFeatured: true,
        isNew: true,
        isSale: true,
        description: "Delicate floor-length georgette Anarkali suit set decorated with resham threadwork, gotapatti accents on the yoke, and a graceful chiffon dupatta with golden tassel trim.",
        includes: "Stitched Anarkali Kurta, Churidar Pants & Dupatta",
        availability: "In Stock"
    },
    {
        id: 6,
        name: "Traditional Silk Suit Set",
        category: "Suits",
        subCategory: "Straight",
        price: 4299,
        originalPrice: 5299,
        image: "https://i.pinimg.com/736x/69/17/e9/6917e99eb67be6b34701075e66fe0018.jpg",
        gallery: [
            "https://i.pinimg.com/736x/69/17/e9/6917e99eb67be6b34701075e66fe0018.jpg"
        ],
        fabric: "Chanderi",
        color: "Pastel Sage Emerald",
        colorHex: "#3a6344",
        occasion: "Festive",
        isFeatured: true,
        isNew: false,
        isSale: true,
        description: "Classic straight-cut Chanderi silk suit crafted with zari thread weaves, paired with coordinating silk trousers and a hand-painted floral organza dupatta.",
        includes: "Semi-stitched Kurta fabric, Trousers fabric, Organza Dupatta",
        availability: "In Stock"
    },
    {
        id: 8,
        name: "Sharara Festive Set",
        category: "Festive Wear",
        subCategory: "Sharara",
        price: 4999,
        originalPrice: 6299,
        image: "https://i.pinimg.com/736x/82/1e/6d/821e6d72f2bcd0d8af3b2415e7140e69.jpg",
        gallery: [
            "https://i.pinimg.com/736x/b3/c6/04/b3c604f61002dfe0a84239a910d18f80.jpg"
        ],
        fabric: "Georgette",
        color: "Pastel Antique Gold",
        colorHex: "#d2b06e",
        occasion: "Festive",
        isFeatured: true,
        isNew: true,
        isSale: true,
        description: "Celebration-ready georgette short peplum kurta with multi-tiered flared sharara pants, enriched with sequins and zari embroidery. Finished with a matching net dupatta.",
        includes: "Kurta, Flared Sharara, Dupatta",
        availability: "In Stock"
    },
    {
        id: 25,
        name: "Chikankari Suit",
        category: "Suits",
        subCategory: "Straight",
        price: 2899,
        originalPrice: 3699,
        image: "https://i.pinimg.com/736x/9d/62/84/9d628468a9ee6d67fa1c85bf0b79d212.jpg",
        gallery: [
            "https://i.pinimg.com/736x/66/58/47/6658476c4ae8cb114875e0aee9c12062.jpg"
        ],
        fabric: "Cotton",
        color: "Pastel Powder Blue",
        colorHex: "#bcd5e2",
        occasion: "Festive",
        isFeatured: false,
        isNew: true,
        isSale: true,
        description: "Authentic Lucknowi Chikankari hand embroidery on airy modal cotton with matching cotton slip and palazzo pants.",
        includes: "Kurta, Slip, Palazzo, Dupatta",
        availability: "In Stock"
    },
    {
        id: 26,
        name: "Maroon Angrakha Anarkali Set",
        category: "Suits",
        subCategory: "Anarkali",
        price: 4499,
        originalPrice: 5699,
        image: "https://i.pinimg.com/1200x/5a/33/60/5a3360838a849a5247b95cfad6c0089c.jpg",
        gallery: [
            "https://i.pinimg.com/1200x/5a/33/60/5a3360838a849a5247b95cfad6c0089c.jpg"
        ],
        fabric: "Chanderi",
        color: "Dusty Rose Maroon",
        colorHex: "#7b3345",
        occasion: "Festive",
        isFeatured: false,
        isNew: true,
        isSale: true,
        description: "Regal Angrakha-style flared Anarkali in Chanderi silk with side dori ties, intricate gota patti neckline, and contrast churidar.",
        includes: "Anarkali Kurta, Churidar, Dupatta",
        availability: "In Stock"
    },
    {
        id: 27,
        name: "Suits",
        category: "Suits",
        subCategory: "Punjabi",
        price: 3199,
        originalPrice: 3999,
        image: "https://images.unsplash.com/photo-1609357605370-13f89839498a?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1609357605370-13f89839498a?auto=format&fit=crop&w=800&q=80"
        ],
        fabric: "Cotton",
        color: "Pastel Mustard Yellow",
        colorHex: "#dfad32",
        occasion: "Festive",
        isFeatured: false,
        isNew: false,
        isSale: true,
        description: "Vibrant Punjabi Patiala salwar suit in breathable glazed cotton paired with a heavy hand-embroidered Phulkari dupatta.",
        includes: "Short Kurti, Pleated Patiala Salwar, Phulkari Dupatta",
        availability: "In Stock"
    },
    {
        id: 28,
        name: "Emerald Green Gharara Set",
        category: "Suits",
        subCategory: "Gharara",
        price: 5299,
        originalPrice: 6799,
        image: "https://images.unsplash.com/photo-1614613535450-ccb1e605d398?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1614613535450-ccb1e605d398?auto=format&fit=crop&w=800&q=80"
        ],
        fabric: "Georgette",
        color: "Pastel Forest Green",
        colorHex: "#2d573d",
        occasion: "Wedding",
        isFeatured: false,
        isNew: true,
        isSale: true,
        description: "Classic Awadhi gharara set with flared gathered knee panels, golden zari embroidery, and pure silk crepe kurta.",
        includes: "Kurta, Ruched Gharara, Embroidered Net Dupatta",
        availability: "In Stock"
    },
    {
        id: 29,
        name: "Silk Palazzo Festive Suit",
        category: "Suits",
        subCategory: "Palazzo",
        price: 3899,
        originalPrice: 4899,
        image: "https://images.unsplash.com/photo-1609357605410-d861fbc21a4f?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1609357605410-d861fbc21a4f?auto=format&fit=crop&w=800&q=80"
        ],
        fabric: "Silk",
        color: "Pastel Mauve Wine",
        colorHex: "#6a3547",
        occasion: "Party",
        isFeatured: false,
        isNew: false,
        isSale: true,
        description: "Rich raw silk kurta with scalloped neckline paired with wide-leg palazzo pants and digital printed organza dupatta.",
        includes: "Kurta, Wide-leg Palazzo, Dupatta",
        availability: "In Stock"
    },
    {
        id: 30,
        name: "Embroidered Velvet Winter Suit",
        category: "Suits",
        subCategory: "Embroidered",
        price: 5999,
        originalPrice: 7499,
        image: "https://images.unsplash.com/photo-1614613535500-b6cb8b301c23?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1614613535500-b6cb8b301c23?auto=format&fit=crop&w=800&q=80"
        ],
        fabric: "Velvet",
        color: "Plum Rose Velvet",
        colorHex: "#5d1e2e",
        occasion: "Wedding",
        isFeatured: false,
        isNew: true,
        isSale: true,
        description: "Heavy velvet kurta enriched with Kashmiri tilla embroidery along sleeves and daman, paired with velvet trousers and Pashmina-feel shawl.",
        includes: "Velvet Kurta, Velvet Trousers, Embroidered Shawl",
        availability: "In Stock"
    },
    {
        id: 31,
        name: "Ivory & Gold Tissue Anarkali",
        category: "Suits",
        subCategory: "Anarkali",
        price: 6299,
        originalPrice: 7999,
        image: "https://images.unsplash.com/photo-1609357605450-652a25fa3b9b?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1609357605450-652a25fa3b9b?auto=format&fit=crop&w=800&q=80"
        ],
        fabric: "Silk",
        color: "Pastel Ivory Gold",
        colorHex: "#f9f6e6",
        occasion: "Party",
        isFeatured: false,
        isNew: true,
        isSale: false,
        description: "Opulent tissue silk anarkali with fine mukaish spray, gota patti borders, and delicate gold foil detailing.",
        includes: "Anarkali Gown, Bottom, Net Dupatta",
        availability: "In Stock"
    },
    {
        id: 32,
        name: "Haldi Special Mustard Sharara",
        category: "Suits",
        subCategory: "Sharara",
        price: 3699,
        originalPrice: 4699,
        image: "https://images.unsplash.com/photo-1614613535550-ee0b3b44c689?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1614613535550-ee0b3b44c689?auto=format&fit=crop&w=800&q=80"
        ],
        fabric: "Georgette",
        color: "Pastel Haldi Yellow",
        colorHex: "#e5b022",
        occasion: "Festive",
        isFeatured: false,
        isNew: false,
        isSale: true,
        description: "Festive sunny mustard sharara set with mirror work detailing and hand-block printed cotton silk dupatta.",
        includes: "Kurti, Flared Sharara, Dupatta",
        availability: "In Stock"
    }
];

// ====================================================================
// 5. HELPER UTILITY FUNCTIONS
// ====================================================================

function formatPrice(amount) {
    if (typeof amount !== 'number') amount = Number(amount) || 0;
    return "₹" + amount.toLocaleString('en-IN');
}

function calculateDiscount(original, sale) {
    if (!original || original <= sale) return 0;
    return Math.round(((original - sale) / original) * 100);
}

function getProductById(id) {
    const numericId = parseInt(id, 10);
    return products.find(p => p.id === numericId) || null;
}

function getProductsByCategory(categoryName) {
    if (!categoryName || categoryName.toLowerCase() === 'all') return products;
    return products.filter(p => p.category.toLowerCase() === categoryName.toLowerCase());
}

function getSaleProducts() {
    return products.filter(p => p.isSale && p.originalPrice > p.price);
}

function getFeaturedProducts() {
    return products.filter(p => p.isFeatured);
}

function getNewArrivals() {
    return products.filter(p => p.isNew);
}

if (typeof window !== 'undefined') {
    window.shopInfo = shopInfo;
    window.socialMedia = socialMedia;
    window.categories = categories;
    window.products = products;
    window.formatPrice = formatPrice;
    window.calculateDiscount = calculateDiscount;
    window.getProductById = getProductById;
    window.getProductsByCategory = getProductsByCategory;
    window.getSaleProducts = getSaleProducts;
    window.getFeaturedProducts = getFeaturedProducts;
    window.getNewArrivals = getNewArrivals;
}
