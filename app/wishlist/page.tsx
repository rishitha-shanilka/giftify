"use client";

import Link from "next/link";
import { Heart, ArrowRight, Trash2, Sparkles } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { useWishlist } from "@/lib/wishlist-context";
import FadeIn from "@/components/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/Stagger";

export default function WishlistPage() {
    const { items, mounted, clear } = useWishlist();

    const wishlistedProducts = products.filter((p) =>
        items.includes(p.slug)
    );

    return (
        <main className="relative min-h-screen overflow-hidden pb-24 pt-28 sm:pt-32">
            {/* Background */}
            <div
                aria-hidden="true"
                className="fixed inset-0 -z-10"
                style={{
                    background:
                        "radial-gradient(ellipse at 50% 0%, #FBF3E6 0%, #E8D3BD 30%, #C9A181 60%, #8B5A3C 100%)",
                }}
            />

            <div className="relative mx-auto max-w-6xl px-6">
                {/* Header */}
                <FadeIn>
                    <div className="mb-10 flex flex-col items-center gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/25 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#5C3A26] backdrop-blur-md">
                                <Sparkles size={13} />
                                Your saved gifts
                            </div>

                            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-[#3D2415] sm:text-5xl">
                                My Wishlist
                            </h1>

                            <p className="mt-3 text-sm text-[#5C3A26]/70">
                                {mounted && wishlistedProducts.length > 0
                                    ? `${wishlistedProducts.length} gift${wishlistedProducts.length === 1
                                        ? ""
                                        : "s"
                                    } saved for later.`
                                    : "Save your favourite gifts and find them here."}
                            </p>
                        </div>

                        {mounted && wishlistedProducts.length > 0 && (
                            <button
                                onClick={clear}
                                className="inline-flex items-center gap-2 rounded-full border border-[#8B5A3C]/25 bg-white/50 px-5 py-2.5 text-xs font-semibold text-[#5C3A26] backdrop-blur-md transition-all duration-300 hover:border-[#8B5A3C]/50 hover:bg-white/80"
                            >
                                <Trash2 size={14} />
                                Clear all
                            </button>
                        )}
                    </div>
                </FadeIn>

                {/* Content */}
                {!mounted ? (
                    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="h-80 animate-pulse rounded-2xl bg-white/30"
                            />
                        ))}
                    </div>
                ) : wishlistedProducts.length > 0 ? (
                    <StaggerContainer className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                        {wishlistedProducts.map((product) => (
                            <StaggerItem key={product.slug}>
                                <ProductCard product={product} />
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                ) : (
                    <FadeIn>
                        <div className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/40 px-6 py-20 text-center backdrop-blur-xl">
                            <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#FEA38E]/20 blur-3xl" />
                            <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[#F5E8D0]/30 blur-3xl" />

                            <div className="relative mx-auto max-w-md">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/70 text-[#C85D49] shadow-sm backdrop-blur-md">
                                    <Heart size={26} />
                                </div>

                                <h3 className="mt-5 font-display text-2xl font-bold text-[#3D2415]">
                                    Your wishlist is empty
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-[#5C3A26]/70">
                                    Tap the heart on any gift to save it here for
                                    later. Your favourites stay saved on this
                                    device.
                                </p>

                                <Link
                                    href="/shop"
                                    className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#3D2415] py-2 pl-6 pr-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    Browse gifts
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FEA38E] text-white transition-transform duration-300 group-hover:translate-x-1">
                                        <ArrowRight size={16} />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                )}
            </div>
        </main>
    );
}