import {
    ArrowRight,
    Check,
    Gift,
    Heart,
    MessageCircle,
    PackageCheck,
    Sparkles,
    WandSparkles,
} from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata = {
    title: "About Us — Giftify",
    description:
        "Giftify curates and personalizes thoughtful gifts for every occasion, ordered directly through WhatsApp.",
};

const values = [
    {
        icon: Heart,
        title: "Thoughtful by nature",
        text: "We look beyond the occasion and focus on the feeling behind the gift.",
    },
    {
        icon: Sparkles,
        title: "Curated with care",
        text: "Every collection is chosen to feel special, useful, beautiful, and memorable.",
    },
    {
        icon: WandSparkles,
        title: "Personal when it matters",
        text: "From names to little details, we help you turn a gift into something more personal.",
    },
];

const steps = [
    {
        number: "01",
        icon: Gift,
        title: "Choose a gift",
        text: "Browse our thoughtfully curated collections and find something that feels right.",
    },
    {
        number: "02",
        icon: MessageCircle,
        title: "Talk to us on WhatsApp",
        text: "Tell us who the gift is for, your preferences, and any personal touches you want.",
    },
    {
        number: "03",
        icon: PackageCheck,
        title: "We take care of the rest",
        text: "We prepare your order with care and make sure it is ready to reach someone special.",
    },
];

const promises = [
    "Thoughtfully selected products",
    "Personalization available",
    "Simple WhatsApp ordering",
    "Carefully prepared gifts",
];

export default function AboutPage() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-porcelain text-ink">

            {/* ── Soft background glows ── */}
            <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-honey/15 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 top-60 h-[420px] w-[420px] rounded-full bg-sand/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-cream/60 blur-3xl" />

            {/* ==========================================================
                HERO — full-bleed, no FadeIn on the background image
            ========================================================== */}
            <section className="relative h-[70vh] overflow-hidden lg:h-[75vh]">
                {/* Background image — no animation wrapper as requested */}
                <img
                    src="/images/home/about-hero.jpg"
                    alt="Hands carefully wrapping a gift in a warm studio"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                {/* Warm cream gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/55 to-transparent" />
                {/* Bottom porcelain fade into page */}
                <div className="absolute inset-0 bg-gradient-to-t from-porcelain/60 via-transparent to-transparent" />

                {/* Hero text — FadeIn is fine on the text, not the image */}
                <FadeIn>
                    <div className="relative z-10 mx-auto flex h-[70vh] max-w-6xl flex-col justify-center px-6 lg:h-[75vh]">
                        {/* Eyebrow */}
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-8 bg-caramel" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cocoa">
                                Our Story
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="max-w-xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
                            Gifting is more
                            <br />
                            than{" "}
                            <span className="font-accent italic text-honey">
                                giving.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-md text-base leading-7 text-ink/60">
                            It is the little moment that says,{" "}
                            <span className="font-semibold text-ink/75">
                                "I thought of you."
                            </span>
                        </p>

                        {/* CTA buttons */}
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="/shop"
                                className="group inline-flex items-center gap-3 rounded-full bg-espresso py-2 pl-6 pr-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                            >
                                Explore gifts
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-honey text-white transition-transform duration-300 group-hover:translate-x-1">
                                    <ArrowRight size={16} />
                                </span>
                            </Link>

                            <a
                                href="#our-story"
                                className="inline-flex items-center rounded-full border border-ink/10 bg-white/55 px-5 py-3 text-sm font-semibold text-ink/70 backdrop-blur-md transition-all duration-300 hover:bg-white"
                            >
                                Our story
                            </a>
                        </div>
                    </div>
                </FadeIn>
            </section>

            {/* ── All sections below the hero ── */}
            <div className="relative z-10">

                {/* ==========================================================
                    OUR STORY
                ========================================================== */}
                <FadeIn>
                    <section
                        id="our-story"
                        className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24"
                    >
                        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-caramel" />
                                    <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-caramel">
                                        Why Giftify
                                    </span>
                                </div>

                                <h2 className="mt-4 max-w-md font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                                    We believe the best gifts feel personal.
                                </h2>
                            </div>

                            <div className="space-y-5 text-[15px] leading-7 text-ink/60">
                                <p>
                                    Giftify started with a simple idea — that a gift should feel like
                                    it was actually chosen for someone, not simply picked from a
                                    shelf.
                                </p>

                                <p>
                                    That is why we focus on thoughtful collections, meaningful
                                    personalization, and a simple way to order. Instead of making
                                    gifting feel complicated, we keep the experience warm,
                                    conversational, and human.
                                </p>

                                <p>
                                    Every order begins with a real conversation. You choose what you
                                    love, tell us who it is for, and we help bring the little details
                                    together.
                                </p>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                {/* ==========================================================
                    VALUES
                ========================================================== */}
                <FadeIn>
                    <section className="bg-cream/40 py-20 sm:py-24">
                        <div className="mx-auto max-w-6xl px-4 sm:px-6">
                            <div className="mx-auto max-w-2xl text-center">
                                <div className="flex items-center justify-center gap-3">
                                    <span className="h-px w-8 bg-caramel" />
                                    <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-caramel">
                                        What we care about
                                    </span>
                                    <span className="h-px w-8 bg-caramel" />
                                </div>

                                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                                    The feeling behind every gift.
                                </h2>

                                <p className="mt-3 text-sm leading-6 text-ink/50">
                                    Three simple ideas shape everything we do at Giftify.
                                </p>
                            </div>

                            <div className="mt-12 grid gap-5 md:grid-cols-3">
                                {values.map((value) => {
                                    const Icon = value.icon;
                                    return (
                                        <div
                                            key={value.title}
                                            className="group rounded-[1.8rem] border border-cream bg-white/75 p-7 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-honey/10"
                                        >
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-honey/15 text-caramel transition-all duration-300 group-hover:scale-105">
                                                <Icon size={22} />
                                            </div>

                                            <h3 className="mt-5 font-display text-xl font-bold text-ink">
                                                {value.title}
                                            </h3>

                                            <p className="mt-2 text-sm leading-6 text-ink/50">
                                                {value.text}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                </FadeIn>

                {/* ==========================================================
                    HOW IT WORKS
                ========================================================== */}
                <FadeIn>
                    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-3">
                                <span className="h-px w-8 bg-caramel" />
                                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-caramel">
                                    Simple by design
                                </span>
                                <span className="h-px w-8 bg-caramel" />
                            </div>

                            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                                From idea to thoughtful gift.
                            </h2>

                            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-ink/50">
                                We keep the process simple so you can focus on the person you are
                                gifting.
                            </p>
                        </div>

                        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
                            {/* Connector line */}
                            <div
                                aria-hidden="true"
                                className="absolute left-[16%] right-[16%] top-14 hidden h-px bg-gradient-to-r from-transparent via-cream to-transparent md:block"
                            />

                            {steps.map((step) => {
                                const Icon = step.icon;
                                return (
                                    <div key={step.number} className="relative z-10 text-center">
                                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cream bg-white text-caramel shadow-sm">
                                            <Icon size={24} />
                                        </div>

                                        <p className="mt-5 text-[10px] font-bold tracking-[0.25em] text-caramel">
                                            {step.number}
                                        </p>

                                        <h3 className="mt-2 font-display text-xl font-bold text-ink">
                                            {step.title}
                                        </h3>

                                        <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-ink/50">
                                            {step.text}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </FadeIn>

                {/* ==========================================================
                    PROMISE BAND
                ========================================================== */}
                <FadeIn>
                    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-24">
                        <div className="relative overflow-hidden rounded-[2.3rem] bg-gradient-dark px-7 py-10 sm:px-12 sm:py-12">
                            {/* Glows */}
                            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-honey/15 blur-3xl" />
                            <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-sand/10 blur-3xl" />

                            <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-sand">
                                        The Giftify promise
                                    </p>

                                    <h2 className="mt-3 max-w-lg font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                                        A little more thought
                                        <br />
                                        <span className="font-accent italic text-honey">
                                            in every detail.
                                        </span>
                                    </h2>

                                    <p className="mt-4 max-w-md text-sm leading-6 text-white/50">
                                        We want every part of your gifting experience to feel simple,
                                        warm, and worth remembering.
                                    </p>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    {promises.map((promise) => (
                                        <div
                                            key={promise}
                                            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4"
                                        >
                                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-honey/15 text-sand">
                                                <Check size={15} />
                                            </span>
                                            <span className="text-sm text-white/70">
                                                {promise}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                {/* ==========================================================
                    FINAL CTA
                ========================================================== */}
                <FadeIn>
                    <section className="bg-cream/50">
                        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-24">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-honey/15 text-caramel shadow-sm">
                                <Gift size={23} />
                            </div>

                            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.3em] text-caramel">
                                Ready to make someone smile?
                            </p>

                            <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
                                Find something{" "}
                                <span className="font-accent italic text-honey">
                                    worth remembering.
                                </span>
                            </h2>

                            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-ink/55">
                                Explore our gifts and discover something that feels just right for
                                someone special.
                            </p>

                            <div className="mt-8 flex flex-wrap justify-center gap-3">
                                <Link
                                    href="/shop"
                                    className="group inline-flex items-center gap-3 rounded-full bg-espresso py-2 pl-7 pr-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    Shop gifts
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-honey text-white transition-transform duration-300 group-hover:translate-x-1">
                                        <ArrowRight size={17} />
                                    </span>
                                </Link>

                                <a
                                    href="https://wa.me/94785590689?text=Hi%20Giftify!%20I%27d%20like%20to%20talk%20about%20a%20gift%20order."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-6 py-3 text-sm font-semibold text-ink/70 transition-all duration-300 hover:bg-white"
                                >
                                    Talk to us on WhatsApp
                                    <MessageCircle size={16} />
                                </a>
                            </div>
                        </div>
                    </section>
                </FadeIn>

            </div>
        </main>
    );
}