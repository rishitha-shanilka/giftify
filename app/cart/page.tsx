"use client";

import Link from "next/link";
import {
    ArrowRight,
    ShoppingCart,
    Trash2,
    Plus,
    Minus,
    Sparkles,
} from "lucide-react";
import { products } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import FadeIn from "@/components/FadeIn";
import { useRouter } from "next/navigation";

export default function CartPage() {
    const {
        items,
        mounted,
        increment,
        decrement,
        remove,
        clear,
    } = useCart();

    const router = useRouter();

    const cartProducts = items
        .map((item) => {
            const product = products.find((p) => p.slug === item.slug);
            return product ? { ...item, product } : null;
        })
        .filter(Boolean) as {
            slug: string;
            quantity: number;
            product: (typeof products)[0];
        }[];

    const subtotal = cartProducts.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
    );

    const totalItems = cartProducts.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const handleCheckout = () => {
        router.push("/checkout");
    };

    return (
        <main className="relative min-h-screen overflow-hidden pb-24 pt-28 sm:pt-32">
            <div
                aria-hidden="true"
                className="fixed inset-0 -z-10"
                style={{
                    background:
                        "radial-gradient(ellipse at 50% 0%, #FBF3E6 0%, #E8D3BD 30%, #C9A181 60%, #8B5A3C 100%)",
                }}
            />

            <div className="relative mx-auto max-w-6xl px-6">
                <FadeIn>
                    <div className="mb-10 flex flex-col items-center gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/25 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#5C3A26] backdrop-blur-md">
                                <Sparkles size={13} />
                                Your bag
                            </div>

                            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-[#3D2415] sm:text-5xl">
                                Shopping Cart
                            </h1>

                            <p className="mt-3 text-sm text-[#5C3A26]/70">
                                {mounted && totalItems > 0
                                    ? `${totalItems} item${totalItems === 1 ? "" : "s"
                                    } in your cart.`
                                    : "Your cart is waiting for something special."}
                            </p>
                        </div>

                        {mounted && cartProducts.length > 0 && (
                            <button
                                onClick={clear}
                                className="inline-flex items-center gap-2 rounded-full border border-[#8B5A3C]/25 bg-white/50 px-5 py-2.5 text-xs font-semibold text-[#5C3A26] backdrop-blur-md transition-all duration-300 hover:border-[#8B5A3C]/50 hover:bg-white/80"
                            >
                                <Trash2 size={14} />
                                Clear cart
                            </button>
                        )}
                    </div>
                </FadeIn>

                {!mounted ? (
                    <div className="h-64 animate-pulse rounded-3xl bg-white/30" />
                ) : cartProducts.length > 0 ? (
                    <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
                        {/* Cart items */}
                        <FadeIn>
                            <div className="space-y-4">
                                {cartProducts.map((item) => (
                                    <div
                                        key={item.slug}
                                        className="flex gap-4 rounded-3xl border border-white/50 bg-white/70 p-4 shadow-lg shadow-[#5C3A26]/5 backdrop-blur-xl sm:gap-6 sm:p-5"
                                    >
                                        <Link
                                            href={`/shop/${item.product.slug}`}
                                            className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-[#F5E8D0] sm:h-28 sm:w-28"
                                        >
                                            <img
                                                src={item.product.image}
                                                alt={item.product.name}
                                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                            />
                                        </Link>

                                        <div className="flex flex-1 flex-col justify-between">
                                            <div>
                                                <div className="flex items-start justify-between gap-3">
                                                    <div>
                                                        <Link
                                                            href={`/shop/${item.product.slug}`}
                                                            className="font-display text-base font-bold text-[#3D2415] transition-colors hover:text-[#C85D49] sm:text-lg"
                                                        >
                                                            {item.product.name}
                                                        </Link>
                                                        <p className="mt-0.5 text-[11px] uppercase tracking-wider text-[#5C3A26]/50">
                                                            {item.product.category}
                                                        </p>
                                                    </div>

                                                    <button
                                                        onClick={() =>
                                                            remove(item.slug)
                                                        }
                                                        aria-label={`Remove ${item.product.name}`}
                                                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#5C3A26]/40 transition-all hover:bg-red-50 hover:text-red-500"
                                                    >
                                                        <Trash2 size={15} />
                                                    </button>
                                                </div>

                                                <p className="mt-2 font-display text-sm font-bold text-[#3D2415]">
                                                    Rs.{" "}
                                                    {item.product.price.toLocaleString()}
                                                </p>
                                            </div>

                                            <div className="mt-4 flex items-center justify-between">
                                                <div className="flex items-center gap-1 rounded-full border border-[#8B5A3C]/20 bg-white/80 p-1">
                                                    <button
                                                        onClick={() =>
                                                            decrement(
                                                                item.slug
                                                            )
                                                        }
                                                        aria-label="Decrease quantity"
                                                        className="flex h-7 w-7 items-center justify-center rounded-full text-[#5C3A26] transition-all hover:bg-[#FEA38E]/15 hover:text-[#C85D49]"
                                                    >
                                                        <Minus size={13} />
                                                    </button>

                                                    <span className="min-w-[28px] text-center text-sm font-bold text-[#3D2415]">
                                                        {item.quantity}
                                                    </span>

                                                    <button
                                                        onClick={() =>
                                                            increment(
                                                                item.slug
                                                            )
                                                        }
                                                        aria-label="Increase quantity"
                                                        className="flex h-7 w-7 items-center justify-center rounded-full text-[#5C3A26] transition-all hover:bg-[#FEA38E]/15 hover:text-[#C85D49]"
                                                    >
                                                        <Plus size={13} />
                                                    </button>
                                                </div>

                                                <p className="font-display text-base font-bold text-[#3D2415]">
                                                    Rs.{" "}
                                                    {(
                                                        item.product.price *
                                                        item.quantity
                                                    ).toLocaleString()}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        {/* Order summary */}
                        <FadeIn>
                            <div className="sticky top-32 rounded-3xl border border-white/50 bg-white/75 p-6 shadow-xl shadow-[#5C3A26]/10 backdrop-blur-xl sm:p-7">
                                <h2 className="font-display text-xl font-bold text-[#3D2415]">
                                    Order Summary
                                </h2>

                                <div className="mt-6 space-y-3 border-t border-[#8B5A3C]/15 pt-6 text-sm">
                                    <div className="flex items-center justify-between text-[#5C3A26]/70">
                                        <span>Items</span>
                                        <span className="font-semibold text-[#3D2415]">
                                            {totalItems}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between text-[#5C3A26]/70">
                                        <span>Subtotal</span>
                                        <span className="font-semibold text-[#3D2415]">
                                            Rs. {subtotal.toLocaleString()}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between text-[#5C3A26]/70">
                                        <span>Delivery</span>
                                        <span className="text-xs font-semibold text-[#C85D49]">
                                            Calculated on WhatsApp
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center justify-between border-t border-[#8B5A3C]/15 pt-6">
                                    <span className="font-display text-base font-bold text-[#3D2415]">
                                        Total
                                    </span>
                                    <span className="font-display text-2xl font-bold text-[#3D2415]">
                                        Rs. {subtotal.toLocaleString()}
                                    </span>
                                </div>

                                <button
                                    onClick={handleCheckout}
                                    className="group mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-espresso py-3.5 text-sm font-semibold text-white shadow-lg shadow-espresso/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1A0F09]"
                                >
                                    Proceed to Checkout
                                    <ArrowRight
                                        size={15}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </button>

                                <Link
                                    href="/shop"
                                    className="mt-4 flex items-center justify-center text-xs font-semibold text-[#5C3A26]/60 transition-colors hover:text-[#3D2415]"
                                >
                                    Continue shopping
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                ) : (
                    <FadeIn>
                        <div className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/40 px-6 py-20 text-center backdrop-blur-xl">
                            <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#FEA38E]/20 blur-3xl" />
                            <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[#F5E8D0]/30 blur-3xl" />

                            <div className="relative mx-auto max-w-md">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/70 text-[#C85D49] shadow-sm backdrop-blur-md">
                                    <ShoppingCart size={26} />
                                </div>

                                <h3 className="mt-5 font-display text-2xl font-bold text-[#3D2415]">
                                    Your cart is empty
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-[#5C3A26]/70">
                                    Looks like you haven&apos;t added anything yet.
                                    Browse our collection and find something
                                    special.
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