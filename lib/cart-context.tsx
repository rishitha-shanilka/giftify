"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

export type CartItem = {
    slug: string;
    quantity: number;
};

type CartContextType = {
    items: CartItem[];
    add: (slug: string, quantity?: number) => void;
    remove: (slug: string) => void;
    updateQuantity: (slug: string, quantity: number) => void;
    increment: (slug: string) => void;
    decrement: (slug: string) => void;
    clear: () => void;
    has: (slug: string) => boolean;
    getQuantity: (slug: string) => number;
    totalItems: number;
    mounted: boolean;
};

const CartContext = createContext<CartContextType | null>(null);

const STORAGE_KEY = "giftify-cart";

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed)) setItems(parsed);
            }
        } catch { }
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        } catch { }
    }, [items, mounted]);

    const add = (slug: string, quantity = 1) => {
        setItems((prev) => {
            const existing = prev.find((i) => i.slug === slug);
            if (existing) {
                return prev.map((i) =>
                    i.slug === slug
                        ? { ...i, quantity: i.quantity + quantity }
                        : i
                );
            }
            return [...prev, { slug, quantity }];
        });
    };

    const remove = (slug: string) => {
        setItems((prev) => prev.filter((i) => i.slug !== slug));
    };

    const updateQuantity = (slug: string, quantity: number) => {
        if (quantity <= 0) {
            remove(slug);
            return;
        }
        setItems((prev) =>
            prev.map((i) => (i.slug === slug ? { ...i, quantity } : i))
        );
    };

    const increment = (slug: string) => {
        setItems((prev) =>
            prev.map((i) =>
                i.slug === slug ? { ...i, quantity: i.quantity + 1 } : i
            )
        );
    };

    const decrement = (slug: string) => {
        setItems((prev) =>
            prev
                .map((i) =>
                    i.slug === slug
                        ? { ...i, quantity: i.quantity - 1 }
                        : i
                )
                .filter((i) => i.quantity > 0)
        );
    };

    const clear = () => setItems([]);

    const has = (slug: string) => items.some((i) => i.slug === slug);

    const getQuantity = (slug: string) =>
        items.find((i) => i.slug === slug)?.quantity || 0;

    const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                items,
                add,
                remove,
                updateQuantity,
                increment,
                decrement,
                clear,
                has,
                getQuantity,
                totalItems,
                mounted,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) {
        throw new Error("useCart must be used within CartProvider");
    }
    return ctx;
}