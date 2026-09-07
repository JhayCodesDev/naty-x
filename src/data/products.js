// Demo product catalog for NATY X.

// const  = (seed, w = 900, h = 1125) => `https://picsum.photos/seed/${seed}/${w}/${h}`
// console.log()

export const CATEGORIES = [
  {
    id: "tees",
    name: "NXT Tees",
    image: "/public/product-images/NXT-statements-tee.jpg",
  },
  { id: "t-shirts", name: "T-Shirts", image: "/public/product-images/NXT-coming-soon-banner.jpg" },
  { id: "oversized", name: "Oversized", image: "/public/product-images/NXT-coming-soon-banner.jpg" },
  { id: "hoodies", name: "Hoodies", image: "/public/product-images/NXT-coming-soon-banner.jpg" },
  { id: "joggers", name: "Joggers", image: "/public/product-images/NXT-blessed-joggers-navy.jpg" },
  { id: "sweatshirts", name: "Sweatshirts", image: "/public/product-images/NXT-coming-soon-banner.jpg" },
  { id: "caps", name: "Caps", image: "/public/product-images/NXT-coming-soon-banner.jpg" },
  { id: "accessories", name: "Accessories", image: "/public/product-images/NXT-coming-soon-banner.jpg" },
];

const SIZES_APPAREL = ["S", "M", "L", "XL", "XXL"];
const SIZES_CAP = ["One Size"];

const base = (overrides) => ({
  sizes: SIZES_APPAREL,
  colors: ["Black", "White"],
  stock: 50,
  featured: false,
  newArrival: false,
  ...overrides,
});

export const PRODUCTS = [
  base({
    id: 1,
    slug: 'NXT "Built Different" Heavyweight Graphic Tee',
    name: 'NXT "Statement" Graphic Heavyweight Tee',
    category: "tees",
    price: 20000,
    sku: "NXT-TEE-001",
    colors: ["Black", "White", "Multi"],
    images: {
      Black: ["/public/product-images/NXT-statement-black.jpg"],
      White: ["/public/product-images/NXT-statement.jpg"],
      Multi: ["/public/product-images/NXT-statements-tee.jpg"],
    },
    featured: true,
    newArrival: true,
    description:
      "A bold, rebellious streetwear staple designed for maximum visual impact. Featuring raw, brush-stroke typography and explicit streetwear iconography, this boxy tee brings an edgy energy to your everyday fit.",
    features: [
      'Front Graphic: High-density "NXT" brush-stroke print, typography ("I STAY WITH THE FIVESS", "F*CK THE COMPETITION", "SHUTEM UP"), and Parental Advisory badge.',
      "Back: Clean, solid color back.",
      "Fit & Cut: Oversized boxy silhouette with dropped shoulders.",
      "Fabric: 100% Combed Cotton (Heavyweight).",
    ],
  }),
  base({
    id: 2,
    slug: 'NATY X "Trend Setters 07" Graphic Collar Polo',
    name: 'NATY X "Trend Setters 07" Performance Polo Shirt',
    category: "polos",
    price: 35000,
    sku: "NXT-POL-002",
    colors: ["White", "Black"],
    images: {
      Black: ["/public/product-images/NXT-trend-setters-black.jpg"],
      White: ["/public/product-images/NXT-trend-setters.jpg"],
    },
    featured: true,
    newArrival: true,
    description:
      "Fusing high-energy motorsport aesthetics with classic polo styling. Built with aggressive tribal graphics, stars, sleeve badging, and a striking global graphic print on the back for a true standout piece.",
    features: [
      'Front & Sleeve Artwork: "NATY X TREND SETTERS" chest text, star/tribal collar print, and "07" athletic sleeve badging.',
      'Back Artwork: Large "07" globe centerpiece, tribal flame accents, and "BUILT DIFFERENT – MADE TO STAND OUT" motto branding.',
      "Fit & Collar: Tailored athletic fit with a structured print collar and classic button placket.",
      "Fabric: Premium breathable cotton-poly blend.",
    ],
  }),
  base({
    id: 3,
    slug: 'NATY X "NXT Tuner" JDM Graphic Streetwear Tee',
    name: 'NATY X "NXT JDM Tuner" Streetwear Tee',
    category: "tees",
    price: 23000,
    sku: "NXT-TEE-003",
    colors: ["White", "Black", "Grey"],
    images: {
      Grey: ["/public/product-images/NXT-JDM-tuner.jpg"],
      Black: ["/public/product-images/NXT-JDM-tuner.jpg"],
      White: ["/public/product-images/NXT-JDM-tuner.jpg"],
    },
    featured: true,
    newArrival: true,
    description:
      "Inspired by Japanese car culture and underground street racing. This tech-pack styled tee pairs minimalist front branding with a heavy-hitting JDM print layout on the back.",
    features: [
      'Front Design: Minimalist "NXT" chest logo with sub-text line detailing and custom inner neck tag branding.',
      'Back Design: 30cm x 20cm high-definition poster graphic featuring a modified drift car, checkered flag banner, and Japanese vertical typography ("走り屋").',
      'Fit & Material: "OS-Shirt" (Oversized Fit), 100% Cotton Combed 30s fabric for soft, comfortable daily wear.',
    ],
  }),
  base({
    id: 4,
    slug: 'BLESSED "Overthinking" Graphic Long-Sleeve Heavyweight Tee',
    name: 'BLESSED "Overthinking Solves Nothing" Long-Sleeve Tee',
    category: "tees",
    price: 30000,
    sku: "NXT-TEE-004",
    colors: ["Black", "White", "Navy"],
    images: {
      Navy: ["/public/product-images/NXT-bleesed-navy.jpg"],
      Black: ["/public/product-images/NXT-blessed-washed-black.jpg"],
      White: ["/public/product-images/NXT-blessed-white.jpg"],
    },
    featured: true,
    newArrival: true,
    description:
      'A heavy-hitting, multi-graphic long-sleeve tee packed with motivational streetwear art. Features a bold arch layout across the chest, doodle-style front graphics, signature script detailing along both sleeves, and subtle "Est. 2021/2025" line accents.',
    features: [
      'Front Graphics: Arch "BLESSED" text with halo iconography ("BLESSED BEYOND MEASURE, GRATEFUL BEYOND WORDS"), paired with a bubble-letter "Overthinking Solves Nothing" design and "MxT" signature print.',
      'Sleeve Artwork: Repeated "Maty X Maty X" handwritten script running down both full-length sleeves.',
      "Fit & Style: Relaxed streetwear fit with drop shoulders and soft ribbed wrist cuffs.",
      "Fabric: 100% Premium Heavyweight Cotton.",
    ],
  }),
  base({
    id: 5,
    slug: "NXT Worldwide Heavyweight Wide-Leg Fleece Sweatpants",
    name: 'BLESSED "Overthinking Solves Nothing" Long-Sleeve TeeNXT WORLDWIDE Wide-Leg Sweatpants',
    category: "joggers",
    price: 15000,
    sku: "NXT-J0G-001",
    colors: ["Black", "White"],
    images: {
      Navy: ["/public/product-images/NXT-blessed-joggers-navy.jpg"],
      Black: ["/public/product-images/NXT-blessed-joggers-black.jpg"],
      White: ["/public/product-images/NXT-blessed-joggers-white.jpg"],
    },
    featured: true,
    newArrival: true,
    description:
      "Clean, minimal, and comfortable. These wide-leg open-bottom sweatpants bring maximum cozy vibes without compromising on streetwear aesthetics. Features crisp brand graphics on the thigh, lower leg, and hem.",
    features: [
      'Branding & Print: "NXT" star logo on the upper left thigh, vertical "NXT WORLDWIDE" brush font running down the right lower leg, and a standalone star graphic near the left ankle.',
      "Waist & Fit: Elasticated waistband with matching adjustable drawstrings and metallic aglets.",
      "Cut: Modern wide-leg / straight-leg relaxed silhouette with side slit pockets.",
      "Fabric: Heavyweight Fleece Cotton Blend for structured drape and comfort.",
    ],
  }),
  base({
    id: 6,
    slug: 'NXT "Shadow Hood" Photo-Graphic Oversized Tee',
    name: 'NXT "Shadow Hood" Crown Graphic Tee',
    category: "tees",
    price: 20000,
    sku: "NXT-TEE-002",
    colors: ["Black", "White"],
    images: {
      Black: ["/public/product-images/NXT-shadow-hood-black.jpg"],
      White: ["/public/product-images/NXT-shadow-hood-white.jpg"],
    },
    featured: true,
    newArrival: true,
    description:
      "Edgy darkwear aesthetic meets vintage halftone art. Designed with a central hooded silhouette photo print, crowned brand logo, and a subtle grunge background texture.",
    features: [
      'Graphic Design: Central dark monochrome hooded figure print with "N×T" brush text topped with a crown icon.',
      "Fit: Oversized boxy fit with dropped shoulder seams.",
      "Fabric: 100% Heavyweight Combed Cotton.",
      "Neckline: Durable ribbed crew collar.",
    ],
  }),
  base({
    id: 7,
    slug: 'NATY X "Skull & Monarch" Heavyweight Graphic Tee',
    name: 'NATY X "Barbed Skull & Butterflies" Graphic Tee',
    category: "tees",
    price: 25000,
    sku: "NXT-TEE-001",
    colors: ["Black", "White"],
    images: {
      White: ["/public/product-images/NXT-skull-head-white.jpg"],
      Black: ["/public/product-images/NXT-skull-head-white.jpg"],
    },
    featured: true,
    newArrival: true,
    description:
    'A dark-romantic streetwear classic blending heavy metal aesthetics with fine illustrative details. Showcases a barbed-wire wrapped skull juxtaposed with delicate monarch butterflies under a jagged "NATY X" logo print.',
    features: [
      'Artwork: High-detail distressed skull surrounded by barbed wire and fluttering monarch butterflies, topped with a heavy-shading "NATY X" distressed logo.',
      'Fit: Oversized boxy silhouette with wide sleeves.',
      'Fabric: Premium Soft-Wash Cotton.',
    ],
  }),
];

export const getProductBySlug = (slug) => PRODUCTS.find((p) => p.slug === slug);
export const getProductById = (id) =>
  PRODUCTS.find((p) => String(p.id) === String(id));
export const getRelatedProducts = (product, count = 4) =>
  PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id,
  ).slice(0, count);
