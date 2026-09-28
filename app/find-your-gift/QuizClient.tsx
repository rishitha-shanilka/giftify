"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import FadeIn from "@/components/FadeIn";

const recipients = ["Partner", "Mom", "Dad", "Friend", "Child"];
const occasionOptions = ["Birthday", "Anniversary", "Graduation", "Thank You"];

export default function FindYourGiftPage() {
    const [step, setStep] = useState(1);
    const [recipient, setRecipient] = useState<string | null>(null);
    const [occasion, setOccasion] = useState<string | null>(null);

    const results = products.filter((p) => {
        if (recipient && !p.recipients.includes(recipient)) return false;
        if (occasion && !p.occasions.includes(occasion)) return false;
        return true;
    });

    function restart() {
        setStep(1);
        setRecipient(null);
        setOccasion(null);
    }

    return (
        <main className="relative min-h-screen overflow-hidden pb-24 pt-28 sm:pt-32">
            {/* Brown gradient background */}
            <div
                aria-hidden="true"
                className="fixed inset-0 -z-10"
                style={{
                    background:
                        "radial-gradient(ellipse at 50% 0%, #FBF3E6 0%, #E8D3BD 30%, #C9A181 60%, #8B5A3C 100%)",
                }}
            />

            {/* Soft decorative glows */}
            <div
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 -z-10"
            >
                <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#FEA38E]/10 blur-3xl" />
                <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-[#F5E8D0]/15 blur-3xl" />
                <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#8B5A3C]/15 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-3xl px-6">
                {/* Progress dots */}
                <div className="mb-10 flex justify-center gap-2">
                    {[1, 2, 3].map((s) => (
                        <span
                            key={s}
                            className={`h-1.5 rounded-full transition-all duration-300 ${s === step
                                    ? "w-8 bg-[#FEA38E]"
                                    : s < step
                                        ? "w-4 bg-[#FEA38E]/60"
                                        : "w-4 bg-white/40"
                                }`}
                        />
                    ))}
                </div>

                {step === 1 && (
                    <FadeIn>
                        <div className="text-center">
                            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/25 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#5C3A26] backdrop-blur-md">
                                <Sparkles size={13} />
                                Step 1 of 3
                            </div>

                            <h1 className="mt-6 font-display text-3xl font-bold text-[#3D2415] sm:text-4xl">
                                Who are you buying for?
                            </h1>

                            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#5C3A26]/70">
                                Let us help you find the perfect gift for the
                                person who matters most.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
                            {recipients.map((r) => (
                                <button
                                    key={r}
                                    onClick={() => {
                                        setRecipient(r);
                                        setStep(2);
                                    }}
                                    className="rounded-2xl border border-white/60 bg-white/70 p-6 text-sm font-semibold text-[#3D2415] shadow-lg shadow-[#5C3A26]/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#FEA38E] hover:bg-white/90 hover:text-[#C85D49] hover:shadow-xl"
                                >
                                    {r}
                                </button>
                            ))}
                        </div>
                    </FadeIn>
                )}

                {step === 2 && (
                    <FadeIn>
                        <div className="text-center">
                            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/25 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#5C3A26] backdrop-blur-md">
                                <Sparkles size={13} />
                                Step 2 of 3
                            </div>

                            <h1 className="mt-6 font-display text-3xl font-bold text-[#3D2415] sm:text-4xl">
                                What&apos;s the occasion?
                            </h1>

                            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#5C3A26]/70">
                                Tell us what you&apos;re celebrating.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
                            {occasionOptions.map((o) => (
                                <button
                                    key={o}
                                    onClick={() => {
                                        setOccasion(o);
                                        setStep(3);
                                    }}
                                    className="rounded-2xl border border-white/60 bg-white/70 p-6 text-sm font-semibold text-[#3D2415] shadow-lg shadow-[#5C3A26]/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#FEA38E] hover:bg-white/90 hover:text-[#C85D49] hover:shadow-xl"
                                >
                                    {o}
                                </button>
                            ))}
                        </div>

                        <div className="mt-8 flex justify-center">
                            <button
                                onClick={() => setStep(1)}
                                className="text-xs font-semibold text-[#5C3A26]/60 hover:text-[#5C3A26]"
                            >
                                ← Back
                            </button>
                        </div>
                    </FadeIn>
                )}

                {step === 3 && (
                    <FadeIn>
                        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
                            <div>
                                <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/25 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#5C3A26] backdrop-blur-md">
                                    <Sparkles size={13} />
                                    Step 3 of 3
                                </div>

                                <h1 className="mt-4 font-display text-2xl font-bold text-[#3D2415] sm:text-3xl">
                                    {results.length} gift
                                    {results.length === 1 ? "" : "s"} for you
                                </h1>

                                <p className="mt-2 text-sm text-[#5C3A26]/70">
                                    Handpicked just for you.
                                </p>
                            </div>

                            <button
                                onClick={restart}
                                className="text-sm font-semibold text-[#8B5A3C] hover:underline"
                            >
                                Start over
                            </button>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3">
                            {results.map((product) => (
                                <ProductCard
                                    key={product.slug}
                                    product={product}
                                />
                            ))}
                        </div>

                        {results.length === 0 && (
                            <div className="mt-10 rounded-2xl border border-white/50 bg-white/40 p-8 text-center backdrop-blur-md">
                                <p className="text-[#3D2415]/70">
                                    No exact matches for those choices.
                                </p>

                                <button
                                    onClick={restart}
                                    className="mt-4 font-semibold text-[#C85D49] hover:underline"
                                >
                                    Try again
                                </button>
                            </div>
                        )}
                    </FadeIn>
                )}
            </div>
        </main>
    );
}