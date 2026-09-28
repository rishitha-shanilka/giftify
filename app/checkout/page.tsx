"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";
import {
    ArrowLeft,
    ArrowRight,
    Check,
    Gift,
    MapPin,
    MessageCircle,
    Sparkles,
    User,
    Calendar,
    FileText,
    ShieldCheck,
    CreditCard,
    Banknote,
} from "lucide-react";
import { products } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import FadeIn from "@/components/FadeIn";

type PaymentMethod = "cod" | "bank";

export default function CheckoutPage() {
    const router = useRouter();
    const { items, mounted } = useCart();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [altPhone, setAltPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [deliveryDate, setDeliveryDate] = useState("");
    const [giftNote, setGiftNote] = useState("");
    const [payment, setPayment] = useState<PaymentMethod>("cod");
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitting, setSubmitting] = useState(false);
    const [showCopyModal, setShowCopyModal] = useState(false);
    const [pendingMessage, setPendingMessage] = useState("");

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

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!name.trim()) newErrors.name = "Please enter your name";
        if (!phone.trim()) newErrors.phone = "Please enter your phone number";
        else if (phone.trim().length < 9)
            newErrors.phone = "Please enter a valid phone number";
        if (!address.trim()) newErrors.address = "Please enter your address";
        if (!city.trim()) newErrors.city = "Please enter your city";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handlePlaceOrder = async () => {
        if (!validate()) return;
        if (cartProducts.length === 0) return;

        setSubmitting(true);

        const itemLines = cartProducts
            .map(
                (item) =>
                    `  • ${item.product.name} x${item.quantity} - Rs. ${(
                        item.product.price * item.quantity
                    ).toLocaleString()}`
            )
            .join("\n");

        const paymentLabel =
            payment === "cod" ? "Cash on Delivery" : "Bank Transfer";

        const messageLines = [
            "🎁 *New Giftify Order*",
            "",
            "👤 *CUSTOMER DETAILS*",
            `Name: ${name}`,
            `Phone: ${phone}${altPhone ? `\nAlt: ${altPhone}` : ""}`,
            "",
            "📍 *DELIVERY ADDRESS*",
            address,
            city,
            "",
            "📦 *ORDER ITEMS*",
            itemLines,
            "",
            "💰 *ORDER SUMMARY*",
            `Items: ${totalItems}`,
            `Subtotal: Rs. ${subtotal.toLocaleString()}`,
            "Delivery: To be confirmed",
            "",
            "💳 *PAYMENT*",
            paymentLabel,
        ];

        if (deliveryDate) {
            messageLines.push(
                "",
                "📅 *Preferred Delivery Date*",
                deliveryDate
            );
        }

        if (giftNote) {
            messageLines.push("", "💌 *Gift Message*", `"${giftNote}"`);
        }

        messageLines.push("", "Please confirm my order. Thank you!");

        const finalMessage = messageLines.join("\n");

        try {
            await navigator.clipboard.writeText(finalMessage);
        } catch {
            const textarea = document.createElement("textarea");
            textarea.value = finalMessage;
            textarea.style.position = "fixed";
            textarea.style.opacity = "0";
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
        }

        setPendingMessage(finalMessage);
        setShowCopyModal(true);
        setSubmitting(false);
    };

    const handleOpenWhatsApp = () => {
        const url = `https://wa.me/${WHATSAPP_NUMBER}`;
        window.open(url, "_blank");
        setShowCopyModal(false);
    };

    if (!mounted) {
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
                    <div className="h-96 animate-pulse rounded-3xl bg-white/30" />
                </div>
            </main>
        );
    }

    if (cartProducts.length === 0) {
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
                <div className="relative mx-auto max-w-2xl px-6">
                    <FadeIn>
                        <div className="rounded-[2rem] border border-white/40 bg-white/50 px-6 py-20 text-center backdrop-blur-xl">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/70 text-[#C85D49] shadow-sm">
                                <Gift size={26} />
                            </div>

                            <h3 className="mt-5 font-display text-2xl font-bold text-[#3D2415]">
                                Nothing to checkout
                            </h3>

                            <p className="mt-2 text-sm text-[#5C3A26]/70">
                                Your cart is empty. Add some gifts first, then
                                come back here.
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
                    </FadeIn>
                </div>
            </main>
        );
    }

    const inputClass = (field: string) =>
        `w-full rounded-2xl border bg-white/70 px-4 py-3 text-sm text-[#3D2415] outline-none backdrop-blur-md transition-all duration-300 placeholder:text-[#5C3A26]/35 focus:bg-white/90 ${errors[field]
            ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-400/20"
            : "border-white/60 focus:border-[#FEA38E] focus:ring-2 focus:ring-[#FEA38E]/20"
        }`;

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
                    <div className="mb-10 text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/25 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#5C3A26] backdrop-blur-md">
                            <Sparkles size={13} />
                            Almost there
                        </div>

                        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-[#3D2415] sm:text-5xl">
                            Checkout
                        </h1>

                        <p className="mx-auto mt-3 max-w-md text-sm text-[#5C3A26]/70">
                            Just a few details and we&apos;ll confirm your order
                            on WhatsApp.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
                    <FadeIn>
                        <div className="space-y-6">
                            {/* Contact details */}
                            <div className="rounded-3xl border border-white/50 bg-white/60 p-6 backdrop-blur-xl sm:p-7">
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FEA38E]/15 text-[#C85D49]">
                                        <User size={16} />
                                    </span>
                                    <div>
                                        <h2 className="font-display text-lg font-bold text-[#3D2415]">
                                            Your details
                                        </h2>
                                        <p className="text-[11px] text-[#5C3A26]/55">
                                            We&apos;ll use this to contact you
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="sm:col-span-2">
                                        <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-[#5C3A26]/70">
                                            Full name *
                                        </label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            placeholder="e.g. Nimal Perera"
                                            autoComplete="off"
                                            className={inputClass("name")}
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-[11px] text-red-500">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-[#5C3A26]/70">
                                            Phone number *
                                        </label>
                                        <input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) =>
                                                setPhone(e.target.value)
                                            }
                                            placeholder="07X XXX XXXX"
                                            autoComplete="off"
                                            className={inputClass("phone")}
                                        />
                                        {errors.phone && (
                                            <p className="mt-1 text-[11px] text-red-500">
                                                {errors.phone}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-[#5C3A26]/70">
                                            Alt. phone (optional)
                                        </label>
                                        <input
                                            type="tel"
                                            value={altPhone}
                                            onChange={(e) =>
                                                setAltPhone(e.target.value)
                                            }
                                            placeholder="Landline or other"
                                            autoComplete="off"
                                            className={inputClass("altPhone")}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Delivery address */}
                            <div className="rounded-3xl border border-white/50 bg-white/60 p-6 backdrop-blur-xl sm:p-7">
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FEA38E]/15 text-[#C85D49]">
                                        <MapPin size={16} />
                                    </span>
                                    <div>
                                        <h2 className="font-display text-lg font-bold text-[#3D2415]">
                                            Delivery address
                                        </h2>
                                        <p className="text-[11px] text-[#5C3A26]/55">
                                            Where should we send the gift?
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-4">
                                    <div>
                                        <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-[#5C3A26]/70">
                                            Address *
                                        </label>
                                        <textarea
                                            value={address}
                                            onChange={(e) =>
                                                setAddress(e.target.value)
                                            }
                                            placeholder="House / street / landmark"
                                            rows={3}
                                            className={`${inputClass(
                                                "address"
                                            )} resize-none`}
                                        />
                                        {errors.address && (
                                            <p className="mt-1 text-[11px] text-red-500">
                                                {errors.address}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-[#5C3A26]/70">
                                            City *
                                        </label>
                                        <input
                                            type="text"
                                            value={city}
                                            onChange={(e) =>
                                                setCity(e.target.value)
                                            }
                                            placeholder="e.g. Colombo, Kandy"
                                            autoComplete="off"
                                            className={inputClass("city")}
                                        />
                                        {errors.city && (
                                            <p className="mt-1 text-[11px] text-red-500">
                                                {errors.city}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Optional details */}
                            <div className="rounded-3xl border border-white/50 bg-white/60 p-6 backdrop-blur-xl sm:p-7">
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FEA38E]/15 text-[#C85D49]">
                                        <Gift size={16} />
                                    </span>
                                    <div>
                                        <h2 className="font-display text-lg font-bold text-[#3D2415]">
                                            Gift extras
                                        </h2>
                                        <p className="text-[11px] text-[#5C3A26]/55">
                                            Optional — make it special
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-4">
                                    <div>
                                        <label className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#5C3A26]/70">
                                            <Calendar size={11} />
                                            Preferred delivery date
                                        </label>
                                        <input
                                            type="date"
                                            value={deliveryDate}
                                            onChange={(e) =>
                                                setDeliveryDate(e.target.value)
                                            }
                                            className={inputClass("date")}
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#5C3A26]/70">
                                            <FileText size={11} />
                                            Gift message
                                        </label>
                                        <textarea
                                            value={giftNote}
                                            onChange={(e) =>
                                                setGiftNote(e.target.value)
                                            }
                                            placeholder="A short note for the recipient..."
                                            rows={3}
                                            className={`${inputClass(
                                                "note"
                                            )} resize-none`}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Payment method */}
                            <div className="rounded-3xl border border-white/50 bg-white/60 p-6 backdrop-blur-xl sm:p-7">
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FEA38E]/15 text-[#C85D49]">
                                        <CreditCard size={16} />
                                    </span>
                                    <div>
                                        <h2 className="font-display text-lg font-bold text-[#3D2415]">
                                            Payment method
                                        </h2>
                                        <p className="text-[11px] text-[#5C3A26]/55">
                                            How would you like to pay?
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <button
                                        type="button"
                                        onClick={() => setPayment("cod")}
                                        className={`flex items-center gap-3 rounded-2xl border-2 p-4 text-left transition-all duration-300 ${payment === "cod"
                                            ? "border-[#FEA38E] bg-[#FEA38E]/10"
                                            : "border-white/60 bg-white/50 hover:border-[#FEA38E]/40"
                                            }`}
                                    >
                                        <span
                                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${payment === "cod"
                                                ? "bg-[#FEA38E] text-white"
                                                : "bg-[#FEA38E]/15 text-[#C85D49]"
                                                }`}
                                        >
                                            <Banknote size={16} />
                                        </span>
                                        <div>
                                            <p className="text-sm font-semibold text-[#3D2415]">
                                                Cash on Delivery
                                            </p>
                                            <p className="text-[11px] text-[#5C3A26]/55">
                                                Pay when it arrives
                                            </p>
                                        </div>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setPayment("bank")}
                                        className={`flex items-center gap-3 rounded-2xl border-2 p-4 text-left transition-all duration-300 ${payment === "bank"
                                            ? "border-[#FEA38E] bg-[#FEA38E]/10"
                                            : "border-white/60 bg-white/50 hover:border-[#FEA38E]/40"
                                            }`}
                                    >
                                        <span
                                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${payment === "bank"
                                                ? "bg-[#FEA38E] text-white"
                                                : "bg-[#FEA38E]/15 text-[#C85D49]"
                                                }`}
                                        >
                                            <ShieldCheck size={16} />
                                        </span>
                                        <div>
                                            <p className="text-sm font-semibold text-[#3D2415]">
                                                Bank Transfer
                                            </p>
                                            <p className="text-[11px] text-[#5C3A26]/55">
                                                Details on WhatsApp
                                            </p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn>
                        <div className="sticky top-32 space-y-5">
                            <div className="rounded-3xl border border-white/50 bg-white/75 p-6 shadow-xl shadow-[#5C3A26]/10 backdrop-blur-xl sm:p-7">
                                <h2 className="font-display text-xl font-bold text-[#3D2415]">
                                    Order Summary
                                </h2>

                                <div className="mt-5 max-h-72 space-y-3 overflow-y-auto pr-1">
                                    {cartProducts.map((item) => (
                                        <div
                                            key={item.slug}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-[#F5E8D0]">
                                                <img
                                                    src={item.product.image}
                                                    alt={item.product.name}
                                                    className="h-full w-full object-cover"
                                                />
                                                <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#3D2415] px-1 text-[10px] font-bold text-white">
                                                    {item.quantity}
                                                </span>
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <p className="truncate text-xs font-semibold text-[#3D2415]">
                                                    {item.product.name}
                                                </p>
                                                <p className="text-[11px] text-[#5C3A26]/55">
                                                    Rs.{" "}
                                                    {item.product.price.toLocaleString()}
                                                </p>
                                            </div>

                                            <p className="text-xs font-bold text-[#3D2415]">
                                                Rs.{" "}
                                                {(
                                                    item.product.price *
                                                    item.quantity
                                                ).toLocaleString()}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-5 space-y-2 border-t border-[#8B5A3C]/15 pt-5 text-sm">
                                    <div className="flex items-center justify-between text-[#5C3A26]/70">
                                        <span>Subtotal ({totalItems} items)</span>
                                        <span className="font-semibold text-[#3D2415]">
                                            Rs. {subtotal.toLocaleString()}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between text-[#5C3A26]/70">
                                        <span>Delivery</span>
                                        <span className="text-[11px] font-semibold text-[#C85D49]">
                                            To be confirmed
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-5 flex items-center justify-between border-t border-[#8B5A3C]/15 pt-5">
                                    <span className="font-display text-base font-bold text-[#3D2415]">
                                        Total
                                    </span>
                                    <span className="font-display text-2xl font-bold text-[#3D2415]">
                                        Rs. {subtotal.toLocaleString()}
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    onClick={handlePlaceOrder}
                                    disabled={submitting}
                                    className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-espresso py-3.5 text-sm font-semibold text-white shadow-lg shadow-espresso/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1A0F09] disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    <MessageCircle size={16} />
                                    Place Order via WhatsApp
                                    <ArrowRight
                                        size={15}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </button>

                                <div className="mt-4 flex items-start gap-2 rounded-xl bg-[#F5E8D0]/50 p-3 text-[11px] leading-5 text-[#5C3A26]/70">
                                    <ShieldCheck
                                        size={13}
                                        className="mt-0.5 shrink-0 text-[#C85D49]"
                                    />
                                    <span>
                                        Your details are only shared with us on
                                        WhatsApp. We&apos;ll confirm your order
                                        within a few minutes.
                                    </span>
                                </div>

                                <Link
                                    href="/cart"
                                    className="mt-4 flex items-center justify-center gap-1.5 text-xs font-semibold text-[#5C3A26]/60 transition-colors hover:text-[#3D2415]"
                                >
                                    <ArrowLeft size={12} />
                                    Back to cart
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Copy Modal */}
            {showCopyModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
                    <div className="w-full max-w-md rounded-3xl border border-white/20 bg-[#FBF3E6] p-6 shadow-2xl sm:p-8">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FEA38E]/15 text-[#C85D49]">
                            <Check size={26} />
                        </div>

                        <h3 className="mt-4 text-center font-display text-2xl font-bold text-[#3D2415]">
                            Order details copied!
                        </h3>

                        <p className="mt-2 text-center text-sm leading-6 text-[#5C3A26]/70">
                            Your order details are copied to the clipboard.
                            Click the button below to open WhatsApp, then{" "}
                            <span className="font-semibold text-[#C85D49]">
                                paste
                            </span>{" "}
                            the message in our chat.
                        </p>

                        <div className="mt-5 max-h-32 overflow-y-auto rounded-2xl border border-[#8B5A3C]/15 bg-white/70 p-3 text-[11px] leading-5 text-[#5C3A26]/70">
                            <pre className="whitespace-pre-wrap font-sans">
                                {pendingMessage}
                            </pre>
                        </div>

                        <div className="mt-5 flex flex-col gap-2">
                            <button
                                type="button"
                                onClick={handleOpenWhatsApp}
                                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20BD5A]"
                            >
                                <MessageCircle size={16} />
                                Open WhatsApp
                            </button>

                            <button
                                type="button"
                                onClick={() => setShowCopyModal(false)}
                                className="text-xs font-semibold text-[#5C3A26]/60 transition-colors hover:text-[#3D2415]"
                            >
                                Cancel
                            </button>
                        </div>

                        <div className="mt-4 rounded-xl bg-[#F5E8D0]/70 p-3 text-[11px] leading-5 text-[#5C3A26]/70">
                            💡 <span className="font-semibold">Tip:</span> In
                            WhatsApp, long-press the message box and tap Paste
                            (mobile) or press Ctrl+V (desktop).
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}