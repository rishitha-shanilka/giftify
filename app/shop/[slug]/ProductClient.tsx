"use client";

import { useState } from "react";
import { ShoppingCart, Zap, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import type { Product } from "@/lib/products";
import ProductBackground from "@/components/ProductBackground";
import { useCart } from "@/lib/cart-context";

export default function ProductClient({ product }: { product: Product }) {
    const [quantity, setQuantity] = useState(1);
    const [message, setMessage] = useState("");
    const { add, has, getQuantity } = useCart();
    const inCart = has(product.slug);
    const cartQuantity = getQuantity(product.slug);


    const router = useRouter();

    const handleBuyNow = () => {
        add(product.slug, quantity);
        router.push("/checkout");
    };

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Replaces the flat background box below the navbar with a
                subtle scattered pattern in the site's palette. Scoped to
                this page only — layout.tsx is untouched. */}
            <ProductBackground />

            <div className="relative mx-auto max-w-4xl px-6 py-16">
                <div className="grid gap-10 sm:grid-cols-2">
                    <div className="relative h-72 overflow-hidden rounded-2xl bg-cream shadow-sm">
                        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                    </div>

                    <div>
                        <h1 className="font-display text-3xl text-ink">{product.name}</h1>
                        <p className="mt-1 text-lg text-ink/70">
                            Rs. {product.price.toLocaleString("en-LK")}
                        </p>
                        <p className="mt-1 text-sm text-ink/50">{product.category}</p>

                        <div className="mt-6">
                            <label className="text-xs font-semibold uppercase tracking-wide text-ink/40">
                                Add a personal message (optional)
                            </label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Happy Birthday!"
                                rows={3}
                                className="mt-2 w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-2 text-sm backdrop-blur-sm focus:border-coral focus:outline-none"
                            />
                        </div>

                        <div className="mt-6 flex items-center gap-4">
                            <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">Quantity</p>
                            <div className="flex items-center gap-3 rounded-full border border-ink/15 bg-white/70 px-3 py-1 backdrop-blur-sm">
                                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="text-lg text-ink/60 hover:text-coral">
                                    −
                                </button>
                                <span className="w-4 text-center">{quantity}</span>
                                <button onClick={() => setQuantity((q) => q + 1)} className="text-lg text-ink/60 hover:text-coral">
                                    +
                                </button>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => add(product.slug, quantity || 1)}
                            className={`mt-4 flex w-full items-center justify-center gap-2 rounded-full border-2 py-3 text-sm font-semibold transition-all duration-300 ${inCart
                                ? "border-[#4A2E1A] bg-[#4A2E1A] text-white"
                                : "border-[#3D2415] bg-transparent text-[#3D2415] hover:bg-[#3D2415] hover:text-white"
                                }`}
                        >
                            <ShoppingCart size={17} />
                            {inCart ? `In cart (${cartQuantity})` : "Add to Cart"}
                        </button>

                        <button
                            type="button"
                            onClick={handleBuyNow}
                            className="group mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-espresso px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-espresso/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1A0F09]"
                        >
                            <Zap size={17} className="fill-current" />
                            Buy Now
                            <ArrowRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}