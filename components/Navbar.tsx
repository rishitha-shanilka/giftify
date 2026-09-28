"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useWishlist } from "@/lib/wishlist-context";
import { useCart } from "@/lib/cart-context";
import { usePathname, useRouter } from "next/navigation";
import {
    Search,
    Heart,
    ShoppingCart,
    Menu,
    X,
} from "lucide-react";

const links = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/collections", label: "Collections" },
    { href: "/occasions", label: "Occasions" },
    { href: "/about", label: "About" },
];

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const { count, mounted: wishlistMounted } = useWishlist();
    const { totalItems, mounted: cartMounted } = useCart();
    const [mounted, setMounted] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");


    useEffect(() => {
        setMounted(true);
    }, []);

    const isHeroPage =
        mounted &&
        (pathname === "/" ||
            pathname === "/shop" ||
            pathname.startsWith("/shop/") ||
            pathname === "/occasions" ||
            pathname === "/collections" ||
            pathname === "/find-your-gift" ||
            pathname === "/wishlist" ||
            pathname === "/cart" ||
            pathname === "/checkout" ||
            pathname === "/about");

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    const handleSearchSubmit = () => {
        const query = searchQuery.trim();
        if (!query) return;

        router.push(`/shop?search=${encodeURIComponent(query)}`);
        setSearchQuery("");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearchSubmit();
        }
    };

    return (
        <header
            className={
                isHeroPage
                    ? "absolute inset-x-0 top-0 z-50 w-full bg-transparent"
                    : "sticky top-0 z-50 w-full border-b border-ink/10 bg-porcelain/90 backdrop-blur-xl"
            }
        >
            <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-6 lg:px-8">
                <Link
                    href="/"
                    className="relative z-50 flex shrink-0 items-center"
                    aria-label="Giftify home"
                >
                    <img
                        src="/logo.png"
                        alt="Giftify Logo"
                        className={`h-9 w-auto object-contain transition-opacity duration-300 sm:h-10 ${isHeroPage
                            ? "drop-shadow-[0_2px_8px_rgba(0,0,0,0.14)]"
                            : ""
                            }`}
                    />
                </Link>

                <nav
                    className={`hidden items-center gap-7 text-sm font-[590] md:flex lg:gap-8 ${isHeroPage ? "text-white/90" : "text-ink/80"
                        }`}
                >
                    {links.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative py-2 transition-colors duration-300 ${isActive
                                    ? isHeroPage
                                        ? "text-white"
                                        : "text-[#C9832B]"
                                    : isHeroPage
                                        ? "text-white/85 hover:text-white"
                                        : "text-ink/75 hover:text-[#C9832B]"
                                    }`}
                            >
                                {link.label}

                                <span
                                    className={`absolute bottom-0 left-1/2 h-[1.5px] -translate-x-1/2 rounded-full transition-all duration-300 ${isActive
                                        ? isHeroPage
                                            ? "w-full bg-white"
                                            : "w-full bg-[#C9832B]"
                                        : "w-0"
                                        }`}
                                />
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                    <div
                        className={`hidden h-10 items-center gap-2 rounded-full border pl-4 pr-2 backdrop-blur-md transition-all duration-300 sm:flex ${isHeroPage
                            ? "border-white/30 bg-white/10 hover:bg-white/15"
                            : "border-ink/15 bg-white hover:border-[#C9832B]/40"
                            }`}
                    >
                        <Search
                            size={16}
                            className={
                                isHeroPage ? "text-white/75" : "text-ink/50"
                            }
                        />

                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Search for gifts..."
                            autoComplete="off"
                            suppressHydrationWarning
                            className={`w-28 bg-transparent text-xs outline-none transition-all duration-300 focus:w-36 lg:w-32 lg:focus:w-40 ${isHeroPage
                                ? "text-white placeholder:text-white/60"
                                : "text-ink placeholder:text-ink/40"
                                }`}
                        />

                        {searchQuery ? (
                            <button
                                type="button"
                                onClick={() => setSearchQuery("")}
                                aria-label="Clear search"
                                className={`flex h-6 w-6 items-center justify-center rounded-full transition-colors ${isHeroPage
                                    ? "text-white/60 hover:bg-white/10 hover:text-white"
                                    : "text-ink/40 hover:bg-black/5 hover:text-ink"
                                    }`}
                            >
                                <X size={13} />
                            </button>
                        ) : (
                            <span className="w-2" />
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={() => router.push("/shop")}
                        className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors sm:hidden ${isHeroPage
                            ? "text-white/90 hover:bg-white/10"
                            : "text-ink/70 hover:bg-black/5"
                            }`}
                        aria-label="Search"
                    >
                        <Search size={19} />
                    </button>

                    <Link
                        href="/wishlist"
                        className={`relative hidden h-9 w-9 items-center justify-center rounded-full transition-all duration-300 sm:flex ${isHeroPage
                            ? "text-white/90 hover:bg-white/10 hover:text-white"
                            : "text-ink/70 hover:bg-black/5 hover:text-[#C9832B]"
                            }`}
                        aria-label="Wishlist"
                    >
                        <Heart size={19} />
                        {wishlistMounted && count > 0 && (
                            <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#FEA38E] px-1 text-[9px] font-bold text-white shadow-sm">
                                {count > 9 ? "9+" : count}
                            </span>
                        )}
                    </Link>

                    <Link
                        href="/cart"
                        className={`relative flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ${isHeroPage
                            ? "text-white/90 hover:bg-white/10 hover:text-white"
                            : "text-ink/70 hover:bg-black/5 hover:text-[#C9832B]"
                            }`}
                        aria-label="Shopping cart"
                    >
                        <ShoppingCart size={19} />
                        {cartMounted && totalItems > 0 && (
                            <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#FEA38E] px-1 text-[9px] font-bold text-white shadow-sm">
                                {totalItems > 9 ? "9+" : totalItems}
                            </span>
                        )}
                    </Link>

                    <button
                        type="button"
                        onClick={() => setMobileOpen((prev) => !prev)}
                        className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 md:hidden ${isHeroPage
                            ? "text-white/90 hover:bg-white/10"
                            : "text-ink/70 hover:bg-black/5"
                            }`}
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileOpen}
                    >
                        {mobileOpen ? <X size={21} /> : <Menu size={21} />}
                    </button>
                </div>
            </div>

            {mobileOpen && (
                <div
                    className={`absolute left-0 right-0 top-full border-t px-5 pb-6 pt-4 shadow-xl backdrop-blur-2xl md:hidden ${isHeroPage
                        ? "border-white/10 bg-[#2B1608]/85"
                        : "border-ink/10 bg-porcelain/95"
                        }`}
                >
                    <nav className="flex flex-col">
                        {links.map((link) => {
                            const isActive = pathname === link.href;

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`flex items-center justify-between border-b py-4 text-sm font-medium transition-colors ${isHeroPage
                                        ? "border-white/10"
                                        : "border-ink/10"
                                        } ${isActive
                                            ? isHeroPage
                                                ? "text-[#E5A94F]"
                                                : "text-[#C9832B]"
                                            : isHeroPage
                                                ? "text-white/85"
                                                : "text-ink/75"
                                        }`}
                                >
                                    <span>{link.label}</span>

                                    {isActive && (
                                        <span
                                            className={`h-1.5 w-1.5 rounded-full ${isHeroPage
                                                ? "bg-[#E5A94F]"
                                                : "bg-[#C9832B]"
                                                }`}
                                        />
                                    )}
                                </Link>
                            );
                        })}

                        <Link
                            href="/wishlist"
                            className={`flex items-center justify-between border-b py-4 text-sm font-medium ${isHeroPage
                                ? "border-white/10 text-white/85"
                                : "border-ink/10 text-ink/75"
                                }`}
                        >
                            <span>Wishlist</span>
                            <span className="flex items-center gap-2">
                                {wishlistMounted && count > 0 && (
                                    <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#FEA38E] px-1.5 text-[10px] font-bold text-white">
                                        {count}
                                    </span>
                                )}
                                <Heart size={17} />
                            </span>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}