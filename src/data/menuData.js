// Menu category data.
// NOTE: "Tandoor" content below is taken exactly from the Figma design.
// The remaining categories were not individually pulled from Figma (14 near-identical
// template pages would have been very expensive to fetch in full); their dish lists are
// representative placeholder content matching each category's theme and should be
// swapped for the real menu copy.

export const menuCategories = [
  {
    slug: "starters",
    label: "Starters",
    title: "Starters",
    subtitle: "Light bites to begin your Zaikhaa experience.",
    groups: [
      {
        name: "Soups",
        items: [
          { dish: "Tomato Shorba", price: "₹120" },
          { dish: "Sweet Corn Soup", price: "₹130" },
          { dish: "Hot & Sour Soup", price: "₹140" },
          { dish: "Mulligatawny Soup", price: "₹150" },
        ],
      },
      {
        name: "Salads",
        items: [
          { dish: "Kachumber Salad", price: "₹110" },
          { dish: "Green Salad", price: "₹100" },
          { dish: "Boondi Raita", price: "₹120" },
        ],
      },
    ],
  },
  {
    slug: "international",
    label: "International",
    title: "International",
    subtitle: "Global favourites crafted with a Zaikhaa touch.",
    groups: [
      {
        name: "Mains",
        items: [
          { dish: "Margherita Pizza", price: "₹320" },
          { dish: "Alfredo Pasta", price: "₹340" },
          { dish: "Grilled Vegetable Panini", price: "₹280" },
          { dish: "Mexican Burrito Bowl", price: "₹310" },
        ],
      },
      {
        name: "Sides",
        items: [
          { dish: "Garlic Bread", price: "₹150" },
          { dish: "French Fries", price: "₹140" },
          { dish: "Nachos with Salsa", price: "₹220" },
        ],
      },
    ],
  },
  {
    slug: "from-the-north",
    label: "From the North",
    title: "From the North",
    subtitle: "Rich gravies and robust spices from North India.",
    groups: [
      {
        name: "Curries",
        items: [
          { dish: "Butter Chicken", price: "₹360" },
          { dish: "Dal Makhani", price: "₹260" },
          { dish: "Paneer Butter Masala", price: "₹300" },
          { dish: "Rogan Josh", price: "₹390" },
        ],
      },
      {
        name: "Breads",
        items: [
          { dish: "Butter Naan", price: "₹60" },
          { dish: "Laccha Paratha", price: "₹70" },
          { dish: "Garlic Naan", price: "₹75" },
        ],
      },
    ],
  },
  {
    slug: "from-the-south",
    label: "From the South",
    title: "From the South",
    subtitle: "Aromatic classics from South India.",
    groups: [
      {
        name: "Mains",
        items: [
          { dish: "Chettinad Chicken Curry", price: "₹340" },
          { dish: "Mysore Masala Dosa", price: "₹180" },
          { dish: "Sambar Vada", price: "₹120" },
          { dish: "Malabar Fish Curry", price: "₹380" },
        ],
      },
      {
        name: "Rice",
        items: [
          { dish: "Curd Rice", price: "₹150" },
          { dish: "Lemon Rice", price: "₹160" },
        ],
      },
    ],
  },
  {
    slug: "from-the-east",
    label: "From the East",
    title: "From the East",
    subtitle: "Delicate flavours from Eastern India.",
    groups: [
      {
        name: "Mains",
        items: [
          { dish: "Macher Jhol", price: "₹360" },
          { dish: "Kosha Mangsho", price: "₹400" },
          { dish: "Aloo Posto", price: "₹220" },
          { dish: "Shukto", price: "₹210" },
        ],
      },
    ],
  },
  {
    slug: "from-the-west",
    label: "From the West",
    title: "From the West",
    subtitle: "Bold, tangy flavours from Western India.",
    groups: [
      {
        name: "Mains",
        items: [
          { dish: "Dhaba Style Dal Fry", price: "₹230" },
          { dish: "Misal Pav", price: "₹190" },
          { dish: "Goan Fish Curry", price: "₹380" },
          { dish: "Surti Undhiyu", price: "₹260" },
        ],
      },
    ],
  },
  {
    slug: "arabian",
    label: "Arabian",
    title: "Arabian",
    subtitle: "Signature flavours from the Arabian peninsula.",
    groups: [
      {
        name: "Mains",
        items: [
          { dish: "Chicken Shawarma Plate", price: "₹340" },
          { dish: "Arabic Mandi", price: "₹420" },
          { dish: "Mutton Mandi", price: "₹480" },
          { dish: "Falafel Platter", price: "₹260" },
        ],
      },
      {
        name: "Dips",
        items: [
          { dish: "Hummus", price: "₹160" },
          { dish: "Garlic Sauce", price: "₹90" },
        ],
      },
    ],
  },
  {
    slug: "tandoor",
    label: "Tandoor",
    title: "Tandoor",
    subtitle: "Tikkas, kebabs and tandoori chicken, charred in the clay oven and served hot.",
    groups: [
      {
        name: "Mains",
        items: [
          { dish: "Angari Chicken Tikka", price: "₹295" },
          { dish: "Murg Makmali Tikka", price: "₹295" },
          { dish: "Hariyali Chicken Kebab", price: "₹305" },
          { dish: "Tandoori Chicken 1/4", price: "₹295" },
          { dish: "Chicken Tangidi (3 pcs)", price: "₹295" },
          { dish: "Chicken Seekh Kebab", price: "₹350" },
          { dish: "Mutton Seekh Kebab", price: "₹390" },
          { dish: "Ajwain Fish Tikka", price: "₹350" },
          { dish: "Murg Chooski Kebab", price: "₹295" },
          { dish: "Paneer Makmali Kebab", price: "₹305" },
          { dish: "Achari Paneer Tikka", price: "₹305" },
          { dish: "Banjara Kebab", price: "₹410" },
        ],
      },
    ],
  },
  {
    slug: "indian",
    label: "Indian",
    title: "Indian",
    subtitle: "Comforting, homestyle Indian classics.",
    groups: [
      {
        name: "Curries",
        items: [
          { dish: "Kadai Paneer", price: "₹290" },
          { dish: "Chicken Chettinad", price: "₹340" },
          { dish: "Palak Paneer", price: "₹270" },
          { dish: "Egg Curry", price: "₹230" },
        ],
      },
      {
        name: "Rice & Breads",
        items: [
          { dish: "Jeera Rice", price: "₹150" },
          { dish: "Tandoori Roti", price: "₹30" },
        ],
      },
    ],
  },
  {
    slug: "kids-special",
    label: "Kids Special",
    title: "Kids Special",
    subtitle: "Fun, mild and delicious bites made for little ones.",
    groups: [
      {
        name: "Favourites",
        items: [
          { dish: "Cheese Sandwich", price: "₹120" },
          { dish: "Veg Nuggets & Fries", price: "₹180" },
          { dish: "Mini Cheese Pizza", price: "₹200" },
          { dish: "Chicken Popcorn", price: "₹220" },
        ],
      },
    ],
  },
  {
    slug: "seafood-platters",
    label: "Seafood & Platters",
    title: "Seafood & Platters",
    subtitle: "Fresh catch, grilled and plated to share.",
    groups: [
      {
        name: "Seafood",
        items: [
          { dish: "Grilled Prawns", price: "₹420" },
          { dish: "Fish Tikka", price: "₹380" },
          { dish: "Butter Garlic Crab", price: "₹520" },
        ],
      },
      {
        name: "Platters",
        items: [
          { dish: "Zaikhaa Non-Veg Platter", price: "₹650" },
          { dish: "Zaikhaa Veg Platter", price: "₹480" },
        ],
      },
    ],
  },
  {
    slug: "desserts-beverages",
    label: "Desserts & Beverages",
    title: "Desserts & Beverages",
    subtitle: "A sweet, refreshing finish to your meal.",
    groups: [
      {
        name: "Desserts",
        items: [
          { dish: "Gulab Jamun", price: "₹110" },
          { dish: "Rasmalai", price: "₹130" },
          { dish: "Gajar Ka Halwa", price: "₹140" },
        ],
      },
      {
        name: "Beverages",
        items: [
          { dish: "Masala Chai", price: "₹60" },
          { dish: "Fresh Lime Soda", price: "₹80" },
          { dish: "Mango Lassi", price: "₹110" },
        ],
      },
    ],
  },
  {
    slug: "appetizers",
    label: "Appetizers",
    title: "Appetizers",
    subtitle: "Something delicious for every craving.",
    groups: [
      {
        name: "Veg",
        items: [
          { dish: "Paneer 65", price: "₹240" },
          { dish: "Crispy Corn", price: "₹200" },
          { dish: "Veg Spring Rolls", price: "₹210" },
        ],
      },
      {
        name: "Non-Veg",
        items: [
          { dish: "Chicken 65", price: "₹260" },
          { dish: "Chilli Chicken", price: "₹280" },
          { dish: "Fish Fingers", price: "₹290" },
        ],
      },
    ],
  },
  {
    slug: "charu-vagai",
    label: "Charu Vagai",
    title: "Charu Vagai",
    subtitle: "A flavourful assortment of regional specials.",
    groups: [
      {
        name: "Specials",
        items: [
          { dish: "Nandu Pirattal (Crab Fry)", price: "₹480" },
          { dish: "Kola Urundai", price: "₹260" },
          { dish: "Nattu Kozhi Varuval", price: "₹380" },
          { dish: "Meen Kuzhambu", price: "₹320" },
        ],
      },
    ],
  },
];

export const specialBiriyaniLink = { slug: "special-biriyani", label: "Special Biriyani" };

// Grouped links as shown in the footer / header dropdown.
export const ourMenuLinks = [
  "Starters",
  "Indian",
  "Arabian",
  "Appetizers",
  "International",
  "Kids Special",
  "Tandoor",
];

export const feastOfZaikhaaLinks = [
  "From the North",
  "From the South",
  "From the East",
  "From the West",
  "Special Biriyani",
  "Charu Vagai",
  "Beverages",
];

export function getCategoryBySlug(slug) {
  return menuCategories.find((c) => c.slug === slug);
}

export function slugify(label) {
  return label
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
