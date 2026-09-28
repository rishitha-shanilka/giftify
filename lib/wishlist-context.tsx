"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

type WishlistContextType = {
    items: string[];
    toggle: (slug: string) => void;
    remove: (slug: string) => void;
    clear: () => void;
    has: (slug: string) => boolean;
    count: number;
    mounted: boolean;
};

const WishlistContext = createContext<WishlistContextType | null>(null);

const STORAGE_KEY = "giftify-wishlist";

export function WishlistProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<string[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) setItems(JSON.parse(stored));
        } catch { }
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        } catch { }
    }, [items, mounted]);

    const toggle = (slug: string) => {
        setItems((prev) =>
            prev.includes(slug)
                ? prev.filter((s) => s !== slug)
                : [...prev, slug]
        );
    };

    const remove = (slug: string) => {
        setItems((prev) => prev.filter((s) => s !== slug));
    };

    const clear = () => setItems([]);

    const has = (slug: string) => items.includes(slug);

    return (
        <WishlistContext.Provider
            value={{
                items,
                toggle,
                remove,
                clear,
                has,
                count: items.length,
                mounted,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    const ctx = useContext(WishlistContext);
    if (!ctx) {
        throw new Error("useWishlist must be used within WishlistProvider");
    }
    return ctx;
}