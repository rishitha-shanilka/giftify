export type Product = {
    slug: string;
    name: string;
    category: string;
    price: number;
    rating: number;
    reviews: number;
    emoji: string;
    image: string;
    occasions: string[];
    recipients: string[];
};

export const products: Product[] = [
    {
        slug: "luna-gift-box",
        name: "Luna Gift Box",
        category: "Gift Box",
        price: 7490,
        rating: 4.5,
        reviews: 124,
        emoji: "🎁",
        image: "/images/products/luna-gift-box.jpg",
        occasions: ["Birthday", "Thank You"],
        recipients: ["Mom", "Friend"],
    },
    {
        slug: "custom-name-mug",
        name: "Custom Name Mug",
        category: "Personalized",
        price: 2990,
        rating: 4.7,
        reviews: 89,
        emoji: "☕",
        image: "/images/products/custom-name-mug.jpg",
        occasions: ["Birthday", "Thank You"],
        recipients: ["Mom", "Dad", "Friend"],
    },
    {
        slug: "scented-candle-set",
        name: "Scented Candle Set",
        category: "Home & Living",
        price: 4990,
        rating: 4.4,
        reviews: 76,
        emoji: "🕯️",
        image: "/images/products/scented-candle-set.jpg",
        occasions: ["Thank You", "Just Because"],
        recipients: ["Mom", "Friend"],
    },
    {
        slug: "luxury-notebook",
        name: "Luxury Notebook",
        category: "Stationery",
        price: 3490,
        rating: 4.6,
        reviews: 112,
        emoji: "📓",
        image: "/images/products/luxury-notebook.jpg",
        occasions: ["For Him", "Thank You"],
        recipients: ["Dad", "Friend"],
    },
    {
        slug: "heart-pendant",
        name: "Heart Pendant",
        category: "Jewellery",
        price: 6990,
        rating: 4.8,
        reviews: 68,
        emoji: "💎",
        image: "/images/products/heart-pendant.jpg",
        occasions: ["Anniversary", "For Her"],
        recipients: ["Partner", "Mom"],
    },
    {
        slug: "chocolate-hamper",
        name: "Chocolate Hamper",
        category: "Food & Treats",
        price: 5990,
        rating: 4.5,
        reviews: 89,
        emoji: "🍫",
        image: "/images/products/chocolate-hamper.jpg",
        occasions: ["Anniversary", "Thank You"],
        recipients: ["Partner", "Friend"],
    },
    {
        slug: "rose-bouquet",
        name: "Rose Bouquet",
        category: "Flowers",
        price: 3800,
        rating: 4.8,
        reviews: 54,
        emoji: "💐",
        image: "/images/products/rose-bouquet.jpg",
        occasions: ["Anniversary", "For Her"],
        recipients: ["Partner"],
    },
    {
        slug: "classic-watch",
        name: "Classic Watch",
        category: "For Him",
        price: 12990,
        rating: 4.6,
        reviews: 41,
        emoji: "⌚",
        image: "/images/products/classic-watch.jpg",
        occasions: ["For Him", "Birthday"],
        recipients: ["Dad", "Partner"],
    },
    {
        slug: "graduation-hamper",
        name: "Graduation Hamper",
        category: "Gift Box",
        price: 6200,
        rating: 4.6,
        reviews: 37,
        emoji: "🎓",
        image: "/images/products/graduation-hamper.jpg",
        occasions: ["Graduation"],
        recipients: ["Friend", "Child"],
    },
];