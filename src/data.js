// ─────────────────────────────────────────────
//  NF — Product & Collection Data
// ─────────────────────────────────────────────

export const COLLECTIONS = ["SS26", "FW25", "ARCHIVE"];

export const PRODUCTS = [
  // ── SS26 ──
  { id: 1,  name: "ZERO COAT",        number: "0",    price: "$1,200", tag: "NEW ARRIVAL", collection: "SS26",    color: "#f0ede8", accent: "#1a1a1a", image: "images/pic1.jpg" },
  { id: 2,  name: "PRIME TEE",        number: "7",    price: "$340",   tag: "BESTSELLER",  collection: "SS26",    color: "#1a1a1a", accent: "#e8d9c0", image: "images/pic2.jpg" },
  { id: 3,  name: "BINARY DRESS",     number: "01",   price: "$890",   tag: "LIMITED",     collection: "SS26",    color: "#2d3a2e", accent: "#c8d4b0", image: "images/pic3.jpg" },
  { id: 4,  name: "INFINITE BLAZER",  number: "∞",    price: "$1,650", tag: "SIGNATURE",   collection: "SS26",    color: "#2a1f3d", accent: "#d4b8f0", image: "images/pic4.jpg" },
  { id: 5,  name: "SEQUENCE PANT",    number: "3.14", price: "$520",   tag: "CLASSIC",     collection: "SS26",    color: "#3d2a1f", accent: "#f0c8b0", image: "images/pic5.jpg" },
  { id: 2,  name: "PRIME TEE",        number: "7",    price: "$340",   tag: "BESTSELLER",  collection: "SS26",    color: "#1a1a1a", accent: "#e8d9c0", image: "" },
  { id: 3,  name: "BINARY DRESS",     number: "01",   price: "$890",   tag: "LIMITED",     collection: "SS26",    color: "#2d3a2e", accent: "#c8d4b0", image: "" },
  { id: 4,  name: "INFINITE BLAZER",  number: "∞",    price: "$1,650", tag: "SIGNATURE",   collection: "SS26",    color: "#2a1f3d", accent: "#d4b8f0", image: "" },
  { id: 5,  name: "SEQUENCE PANT",    number: "3.14", price: "$520",   tag: "CLASSIC",     collection: "SS26",    color: "#3d2a1f", accent: "#f0c8b0", image: "" },
  { id: 6,  name: "UNIT SKIRT",       number: "1",    price: "$410",   tag: "ESSENTIAL",   collection: "SS26",    color: "#f5f0e8", accent: "#2a2a2a", image: "" },
  // ── FW25 ──
  { id: 7,  name: "GOLDEN RATIO TOP", number: "φ",    price: "$480",   tag: "NEW ARRIVAL", collection: "FW25",    color: "#2c2c2c", accent: "#c8a96e", image: "" },
  { id: 8,  name: "MODULAR COAT",     number: "9",    price: "$1,400", tag: "BESTSELLER",  collection: "FW25",    color: "#e8e0d5", accent: "#3a3a3a", image: "" },
  { id: 9,  name: "CIPHER JACKET",    number: "∑",    price: "$760",   tag: "LIMITED",     collection: "FW25",    color: "#1c2b1c", accent: "#a8c4a8", image: "" },
  { id: 10, name: "VECTOR TROUSERS",  number: "2",    price: "$590",   tag: "CLASSIC",     collection: "FW25",    color: "#3b2f3b", accent: "#e0c8e0", image: "" },
  // ── ARCHIVE ──
  { id: 11, name: "NULL SET GOWN",    number: "Ø",    price: "$2,100", tag: "ARCHIVE",     collection: "ARCHIVE", color: "#0d0d0d", accent: "#f0ede8", image: "" },
  { id: 12, name: "CONSTANT DRESS",   number: "e",    price: "$970",   tag: "ARCHIVE",     collection: "ARCHIVE", color: "#d4c9bc", accent: "#2a2420", image: "" },
];
export const LOOKBOOK = [
  {
    num: "3", bg: "#e8d9c0", fg: "#3d2a1f", season: "SS26",
    title: "The Fibonacci Collection", link: "View Looks", image: "images/model1.jpg",
    looks: [
      { image: "images/pic.2.jpg", caption: "Look 01 — Zero Coat + Sequence Pant" },
      { image: "images/pic1.jpg", caption: "Look 02 — Binary Dress" },
      { image: "images/pic3.jpg", caption: "Look 03 — Unit Skirt + Prime Tee" },
      { image: "images/pic4.jpg", caption: "Look 04 — Infinite Blazer" },
    ],
  },
  {
    num: "9", bg: "#2a1f3d", fg: "#d4b8f0", season: "FW25",
    title: "Nine Studies in Silk", link: "View Looks", image: "images/model3.jpg",
    looks: [
      { image: "images/black1.jpg", caption: "Look 01 — Golden Ratio Top" },
      { image: "images/black2.jpg", caption: "Look 02 — Modular Coat" },
      { image: "images/black3.jpg", caption: "Look 03 — Cipher Jacket" },
      { image: "images/black4.jpg", caption: "Look 04 — Vector Trousers" },
    ],
  },
  {
    num: "2", bg: "#2d3a2e", fg: "#c8d4b0", season: "ARCHIVE",
    title: "The Duality Series", link: "Explore Archive", image: "images/model2.jpg",
    looks: [
      { image: "", caption: "Look 01 — Null Set Gown" },
      { image: "", caption: "Look 02 — Constant Dress" },
      { image: "", caption: "Look 03 — The Full Archive" },
    ],
  },
];


export const TICKER_ITEMS = [
  "NF SS26", "NUMBERED FASHION", "FORM IS FORMULA", "STYLE IS SEQUENCE",
  "NF SS26", "NUMBERED FASHION", "FORM IS FORMULA", "STYLE IS SEQUENCE",
];

export const MARQUEE_ITEMS = [
  "NUMBER FASHION", "0 1 2 3 4 5", "FORM IS FORMULA", "∞",
  "NUMBER FASHION", "0 1 2 3 4 5", "FORM IS FORMULA", "∞",
];

export const NAV_LINKS = ["Collections", "Lookbook", "About", "Stores", "Contact"];

export const FOOTER_LINKS = {
  SHOP:    ["New Arrivals", "Collections", "Lookbook", "Archive Sale"],
  INFO:    ["About NF", "Sustainability", "Press", "Stockists"],
  SUPPORT: ["Sizing Guide", "Returns", "Contact", "FAQ"],
};

export const SOCIAL_LINKS = [
  {
    name: "INSTAGRAM",
    handle: "@numberfashion",
    url: "https://www.instagram.com/num3ersfashion?igsh=MTFpajNpeWtyMnRoeA==",
    symbol: "◈",
  },
  {
    name: "TIKTOK",
    handle: "@numberfashion",
    url: "https://www.tiktok.com/@num3ers?_t=ZS-8zMin5bCr2e&_r=1",
    symbol: "◉",
  },
  {
    name: "WHATSAPP",
    handle: "+234 (902) 376-0649",
    url: "https://wa.me/+2349023760649",
    symbol: "◎",
  },
];