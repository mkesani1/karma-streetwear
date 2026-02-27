// KARMA Products Data — SS26 Collection
// "Spiritual Sarcasm" — Palace uses Skater Sarcasm. We use Spiritual Sarcasm.

const PRODUCTS = [
    {
        id: 1,
        name: "The \"Samsara\" Heavyweight Hoodie",
        slogan: "KARMA",
        category: "hoodies",
        type: "Hoodie",
        price: 195,
        colors: ["Washed Onyx"],
        description: "Samsara (n): The cycle of death and rebirth. Also, the cycle of you putting this item in your cart and then chickening out. Don't break the cycle, just buy it.",
        details: [
            "450 GSM because the universe is cold but your heart shouldn't be.",
            "100% Organic Cotton (Good for your skin, better for your soul).",
            "\"KARMA\" chest embroidery is centered, because balance isn't optional.",
            "Vintage wash finish — pre-aged so you don't have to.",
            "Drop-shoulder fit for when the weight of the world feels a bit much.",
            "If you lose this at a party, it just means someone else needed the energy more."
        ],
        materials: {
            fabric: "450 GSM Heavyweight French Terry",
            composition: "100% Organic Cotton",
            finish: "Enzyme Washed / Garment Dyed",
            hardware: "Matte Black Metal Aglets, YKK Zipper Pocket",
            construction: "Double-layered hood, reinforced seams, ribbed cuffs & hem",
            fit: "Oversized / Drop Shoulder",
            care: "Cold wash inside out. Hang dry. Do not bleach. The universe rewards patience."
        },
        sizes: ["S", "M", "L", "XL", "XXL"],
        image: "images/samsara-hoodie.png",
        featured: true,
        new: true,
        limited: false
    },
    {
        id: 2,
        name: "The \"Dharma\" Sun-Faded Crewneck",
        slogan: "KARMA",
        category: "crewnecks",
        type: "Crewneck",
        price: 165,
        colors: ["Sandstone"],
        description: "Dharma (n): Your sacred duty. Right now, your sacred duty is to own this crewneck. The universe has spoken.",
        details: [
            "450 GSM heavyweight cotton. This isn't a crewneck, it's a commitment.",
            "Sun-faded garment dye in Sandstone — looks like it's been meditating in the desert.",
            "Chain-stitch \"KARMA\" embroidery. Each stitch is an intention.",
            "Ribbed cuffs & hem because structure matters, even in chaos.",
            "Breathable enough for meditation, durable enough for the commute.",
            "100% Cotton. 0% Bad vibes."
        ],
        materials: {
            fabric: "450 GSM Heavyweight Loopback Cotton",
            composition: "100% Cotton",
            finish: "Sun-Faded Garment Dye — Sandstone / Desiccated Earth",
            hardware: "N/A",
            construction: "Chain-stitch embroidery, reinforced shoulder seams, ribbed collar/cuffs/hem",
            fit: "Relaxed / Oversized",
            care: "Cold wash inside out. Tumble dry low. Each wash deepens the fade. That's the point."
        },
        sizes: ["S", "M", "L", "XL", "XXL"],
        image: "images/dharma-crewneck.png",
        featured: true,
        new: true,
        limited: false
    },
    {
        id: 3,
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
        new: false,
        limited: true
    },
    {
        id: 4,
        name: "Flex Karma Hoodie",
        slogan: "FLEX KARMA",
        category: "hoodies",
        type: "Hoodie",
        price: 185,
        colors: ["Cream"],
        description: "Some people flex chains. Some flex watches. You flex karma. Because what you put into the world is the only flex that matters.",
        details: [
            "450 GSM premium French terry in Cream.",
            "Bold embroidered \"FLEX KARMA\" — straight, centred, no apologies.",
            "Double-layered hood. Cream drawstrings.",
            "Oversized fit that drapes like it was meant for you.",
            "100% Cotton. Ethically sourced because karma starts at the supply chain.",
            "Pair with black cargos and an unbothered expression."
        ],
        materials: {
            fabric: "450 GSM Heavyweight French Terry",
            composition: "100% Cotton",
            finish: "Garment Dyed — Cream / Off-White",
            hardware: "Cream Cotton Drawcords, Brushed Metal Aglets",
            construction: "Dense fill embroidery, double-layered hood, kangaroo pocket, reinforced seams",
            fit: "Oversized / Drop Shoulder",
            care: "Cold wash with like colours. Hang dry. Do not bleach unless you want a different hoodie."
        },
        sizes: ["S", "M", "L", "XL", "XXL"],
        image: "images/flex-karma-hoodie.png",
        featured: true,
        new: true,
        limited: false
    },
    {
        id: 5,
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
        id: 6,
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
        featured: false,
        new: false,
        limited: true
    },
    {
        id: 7,
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
        featured: false,
        new: true,
        limited: false
    },
    {
        id: 8,
        name: "Fear Karma Hoodie",
        slogan: "FEAR KARMA",
        category: "hoodies",
        type: "Hoodie",
        price: 185,
        colors: ["Black"],
        description: "Two words. That's all you need. Fear Karma — because the universe keeps receipts and it never forgets.",
        details: [
            "450 GSM French terry in solid black.",
            "\"FEAR KARMA\" stacked in bold tonal embroidery.",
            "Black on black — the text reveals itself in the right light.",
            "Double-layered hood, matte metal aglets.",
            "Oversized silhouette.",
            "For the ones who know that what they put out comes back. Every time."
        ],
        materials: {
            fabric: "450 GSM Heavyweight French Terry",
            composition: "100% Cotton",
            finish: "Piece Dyed Black",
            hardware: "Matte Black Metal Aglets, Black Cotton Drawcords",
            construction: "Tonal dense fill embroidery, double-layered hood, kangaroo pocket, ribbed cuffs & hem",
            fit: "Oversized",
            care: "Cold wash inside out. Hang dry. The embroidery is tonal — it's meant to be discovered, not announced."
        },
        sizes: ["S", "M", "L", "XL", "XXL"],
        image: "images/fear-karma-hoodie.png",
        featured: false,
        new: true,
        limited: false
    }
];

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PRODUCTS;
}
