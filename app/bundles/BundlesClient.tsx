"use client";

import { ArrowRight, Gift, Sparkles } from "lucide-react";
import { bundles } from "@/lib/bundles";
import { buildOrderMessage, buildWhatsAppLink } from "@/lib/whatsapp";
import FadeIn from "@/components/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/Stagger";

export default function BundlesPage() {
    return (
        <main className="min-h-screen bg-[#FFF9F7] pb-24 pt-20 sm:pt-24">
            <div className="mx-auto max-w-6xl px-6">
                <FadeIn>
                    <div className="mx-auto max-w-2xl text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/75 bg-white/65 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#C85D49] shadow-sm backdrop-blur-md">
                            <Sparkles size={13} />
                            A few things, together
                        </div>
                        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                            Gift Bundles
                        </h1>
                        <p className="mt-4 text-sm leading-7 text-ink/55 sm:text-base">
                            A few things put together, so you don&apos;t have to.
                        </p>
                    </div>
                </FadeIn>

                <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-3">
                    {bundles.map((bundle, index) => {
                        const link = buildWhatsAppLink(
                            buildOrderMessage({ productName: bundle.name, quantity: 1, price: bundle.price })
                        );
                        return (
                            <StaggerItem key={bundle.slug}>
                                <div className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 p-7 shadow-[0_14px_45px_rgba(55,28,26,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_65px_rgba(55,28,26,0.14)]">
                                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#FEA38E]/15 blur-2xl transition-transform duration-500 group-hover:scale-125" />

                                    <div className="relative">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C85D49]">
                                            0{index + 1}
                                        </span>
                                        <div className="mt-3 text-5xl">{bundle.emoji}</div>
                                        <h2 className="mt-4 font-display text-2xl font-bold text-ink">{bundle.name}</h2>

                                        <ul className="mt-4 space-y-2">
                                            {bundle.items.map((item) => (
                                                <li key={item} className="flex items-center gap-2 text-sm text-ink/60">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-[#FEA38E]" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        <p className="mt-6 font-display text-xl font-bold text-ink">
                                            Rs. {bundle.price.toLocaleString("en-LK")}
                                        </p>

                                        <a
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3a2622]"
                                        >
                                            Order Bundle
                                            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>

                <FadeIn>
                    <div className="relative mt-16 overflow-hidden rounded-[2.3rem] bg-ink px-8 py-12 text-center text-white">
                        <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-[#FEA38E]/15 blur-3xl" />
                        <Gift size={28} className="mx-auto text-[#FEA38E]" />
                        <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">Want something more personal?</h2>
                        <p className="mx-auto mt-2 max-w-md text-sm text-white/55">
                            Browse individual gifts and customize one just for them.
                        </p>
                        <a
                            href="/shop"
                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#FEA38E] px-6 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5"
                        >
                            Shop Individual Gifts <ArrowRight size={16} />
                        </a>
                    </div>
                </FadeIn>
            </div>
        </main>
    );
}