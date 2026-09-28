export type Bundle = {
    slug: string;
    name: string;
    emoji: string;
    items: string[];
    price: number;
};

export const bundles: Bundle[] = [
    {
        slug: "birthday-bundle",
        name: "Birthday Bundle",
        emoji: "🎂",
        items: ["Cake", "Balloons", "Chocolates", "Greeting Card"],
        price: 6500,
    },
    {
        slug: "romantic-bundle",
        name: "Romantic Bundle",
        emoji: "❤️",
        items: ["Flowers", "Chocolates", "Teddy Bear", "Personalized Card"],
        price: 7500,
    },
    {
        slug: "graduation-bundle",
        name: "Graduation Bundle",
        emoji: "🎓",
        items: ["Hamper", "Photo Frame", "Congratulations Card"],
        price: 8200,
    },
];