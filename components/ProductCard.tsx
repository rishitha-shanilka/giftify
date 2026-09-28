"use client";

import Link from "next/link";
import { Heart, Star, ShoppingCart, Check } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/lib/products";
import { useWishlist } from "@/lib/wishlist-context";
import { useCart } from "@/lib/cart-context";

export default function ProductCard({ product }: { product: Product }) {
    const { toggle, has, mounted } = useWishlist();
    const { add, has: inCart } = useCart();

    const [justAdded, setJustAdded] = useState(false);

    const isWishlisted = mounted && has(product.slug);
    const isInCart = mounted && inCart(product.slug);

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        add(product.slug, 1);
        setJustAdded(true);
        setTimeout(() => setJustAdded(false), 1500);
    };

    return (
        <Link
            href={`/shop/${product.slug}`}
            className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm shadow-ink/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FEA38E]/20"
        >
            <div className="relative aspect-square overflow-hidden bg-[#F5E8D0]">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <button
                    type="button"
                    aria-label={
                        isWishlisted ? "Remove from wishlist" : "Add to wishlist"
                    }
                    onClick={(e) => {
                        e.preventDefault();
                        toggle(product.slug);
                    }}
                    className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 ${isWishlisted
                            ? "border-[#FEA38E] bg-[#FEA38E] text-white shadow-lg shadow-[#FEA38E]/30"
                            : "border-white/60 bg-white/80 text-ink/70 hover:border-[#FEA38E] hover:bg-[#FEA38E] hover:text-white"
                        }`}
                >
                    <Heart
                        size={16}
                        className={isWishlisted ? "fill-white" : ""}
                    />
                </button>

                <div className="absolute left-3 top-3 rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink/70 backdrop-blur-md">
                    {product.category}
                </div>
            </div>

            <div className="flex flex-1 flex-col p-4">
                <h3 className="font-display text-sm font-bold leading-tight text-ink">
                    {product.name}
                </h3>

                <div className="mt-1.5 flex items-center gap-1">
                    <Star size={12} className="fill-[#FEA38E] text-[#FEA38E]" />
                    <span className="text-xs font-semibold text-ink/80">
                        {product.rating}
                    </span>
                    <span className="text-xs text-ink/40">
                        ({product.reviews})
                    </span>
                </div>

                <div className="mt-3 flex items-end justify-between">
                    <p className="font-display text-base font-bold text-ink">
                        Rs. {product.price.toLocaleString()}
                    </p>

                    <button
                        type="button"
                        aria-label={`Add ${product.name} to cart`}
                        onClick={handleAddToCart}
                        className={`flex h-8 w-8 items-center justify-center rounded-full text-white shadow-lg transition-all duration-500 ${justAdded
                                ? "bg-[#4A2E1A] shadow-[#4A2E1A]/30 opacity-100"
                                : isInCart
                                    ? "bg-[#4A2E1A] shadow-[#4A2E1A]/30 opacity-100 hover:scale-110"
                                    : "bg-[#FEA38E] shadow-[#FEA38E]/30 opacity-0 group-hover:opacity-100 hover:bg-[#D9634C] hover:scale-110"
                            }`}
                    >
                        {justAdded ? (
                            <Check size={15} />
                        ) : (
                            <ShoppingCart size={15} />
                        )}
                    </button>
                </div>
            </div>
        </Link>
    );
}