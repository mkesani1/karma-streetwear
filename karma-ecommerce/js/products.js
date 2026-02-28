// KARMA Products Data — SS26 Collection
// "Spiritual Sarcasm" — Palace uses Skater Sarcasm. We use Spiritual Sarcasm.
// Only showing products with approved images (correct fonts, right vibe)

const PRODUCTS = [
    {
        id: 1,
        name: "Fear No Karma Hoodie",
        slogan: "FEAR NO KARMA",
        category: "hoodies",
        type: "Hoodie",
        price: 195,
        colors: ["Black"],
        description: "For the ones who move through the world like they've already settled their debts. Tonal black-on-black puff print — you'll only see it if you deserve to.",
        details: [
            "450 GSM French terry. Heavyweight because your energy should be too.",
            "Tonal black puff print — visible only when the light hits right. Like karma.",
            "Murdered-out aesthetic. All black everything.",
            "Double-layered hood with matte black metal aglets.",
            "Oversized fit. Because confidence takes up space.",
            "Kangaroo pocket deep enough to hold your secrets."
        ],
        materials: {
            fabric: "450 GSM Heavyweight French Terry",
            composition: "100% Cotton",
            finish: "Piece Dyed Black",
            hardware: "Matte Black Metal Aglets, Tonal Drawcords",
            construction: "Raised puff print (tonal), double-layered hood, kangaroo pocket, ribbed cuffs & hem",
            fit: "Oversized",
            care: "Cold wash inside out. Line dry in shade. The print reveals itself in its own time."
        },
        sizes: ["S", "M", "L", "XL"],
        image: "images/fear-no-karma-hoodie.png",
        featured: true,
        new: true,
        limited: true
    },
    {
        id: 2,
        name: "Bad Karma Hoodie",
        slogan: "BAD KARMA",
        category: "hoodies",
        type: "Hoodie",
        price: 195,
        colors: ["Stealth Camo"],
        description: "Bad karma is just a lesson you haven't learned yet. This hoodie is the uniform for people who learn the hard way — and look good doing it.",
        details: [
            "450 GSM in dark stealth camo — so dark you'd have to look closely to know.",
            "Organic flowing camo in near-black forest green and black.",
            "\"BAD KARMA\" in solid white embroidery. A warning label for your aura.",
            "Double-layered hood. Because even bad karma deserves good construction.",
            "Oversized fit.",
            "The camo says you're hiding. The text says you don't care."
        ],
        materials: {
            fabric: "450 GSM Heavyweight French Terry",
            composition: "100% Cotton",
            finish: "Custom Stealth Camo Print — Near-Black Forest Green / Black",
            hardware: "Matte Black Metal Aglets, Black Cotton Drawcords",
            construction: "Dense fill white embroidery, all-over print, double-layered hood, kangaroo pocket",
            fit: "Oversized",
            care: "Cold wash inside out. Do not tumble dry. The pattern is meant to be subtle. Dryers aren't."
        },
        sizes: ["S", "M", "L", "XL"],
        image: "images/bad-karma-camo-hoodie.png",
        featured: true,
        new: true,
        limited: true
    },
    {
        id: 3,
        name: "What Goes Around Hoodie",
        slogan: "WHAT GOES AROUND COMES AROUND",
        category: "hoodies",
        type: "Hoodie",
        price: 195,
        colors: ["Washed Black"],
        description: "The full mantra on your back. Walk away from anything that doesn't serve you — and let them read the message.",
        details: [
            "450 GSM heavyweight French terry in vintage washed black.",
            "Full back print: \"WHAT GOES AROUND COMES AROUND\".",
            "The text is big enough to read from across the street. On purpose.",
            "Oversized fit with dropped shoulders.",
            "Vintage wash finish — the fabric remembers, even if you don't.",
            "Limited run. When they're gone, they're gone. That's karma."
        ],
        materials: {
            fabric: "450 GSM Heavyweight French Terry",
            composition: "100% Cotton",
            finish: "Vintage Enzyme Wash — Washed Black",
            hardware: "Matte Black Metal Aglets",
            construction: "Large-scale screen print (back), double-layered hood, kangaroo pocket, ribbed cuffs & hem",
            fit: "Oversized / Drop Shoulder",
            care: "Cold wash inside out. Hang dry. The vintage wash evolves with every wear. Trust the process."
        },
        sizes: ["S", "M", "L", "XL"],
        image: "images/what-goes-around-hoodie.png",
        featured: true,
        new: false,
        limited: true
    },
    {
        id: 4,
        name: "Coming For You Tee",
        slogan: "KARMA IS COMING FOR YOU",
        category: "tees",
        type: "T-Shirt",
        price: 85,
        colors: ["Cream"],
        description: "A friendly reminder from the universe. Wear it forwards for the vibes. Let them read it when you walk away.",
        details: [
            "280 GSM premium heavyweight cotton.",
            "Full back print: \"KARMA IS COMING FOR YOU\".",
            "Boxy cropped fit — oversized but intentional.",
            "This tee is a conversation starter and a conversation ender.",
            "100% Cotton. Pre-shrunk because we don't believe in surprises.",
            "Best served with confidence and absolutely no explanation."
        ],
        materials: {
            fabric: "280 GSM Heavyweight Jersey",
            composition: "100% Combed Cotton",
            finish: "Garment Dyed — Cream / Natural",
            hardware: "N/A",
            construction: "Large-scale screen print (back), reinforced collar, side-seamed, pre-shrunk",
            fit: "Boxy / Slightly Cropped",
            care: "Machine wash cold. Tumble dry low. Iron inside out to protect print. Or don't iron. We're not your mum."
        },
        sizes: ["S", "M", "L", "XL"],
        image: "images/coming-for-you-tee.png",
        featured: true,
        new: true,
        limited: false
    }
];

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PRODUCTS;
}
