import {
    ArrowRight,
    ArrowUpRight,
    Gift,
    Heart,
    Sparkles,
    Star,
    Layers,
} from "lucide-react";
import Link from "next/link";
import { collections } from "@/lib/collections";
import {
    StaggerContainer,
    StaggerItem,
} from "@/components/Stagger";
import FadeIn from "@/components/FadeIn";

export const metadata = {
    title: "Curated Collections — Giftify",
    description:
        "Browse our hand-picked gift collections — luxury, minimal, self-care, and home & living.",
};

export default function CollectionsPage() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-porcelain pb-20 sm:pb-28">
            {/* ── Soft background glows ── */}
            <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-honey/15 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 top-40 h-[420px] w-[420px] rounded-full bg-sand/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-cream/60 blur-3xl" />

            {/* ── HERO — full-bleed, OUTSIDE the max-width container ── */}
            <section className="relative h-[70vh] overflow-hidden lg:h-[75vh]">
                <img
                    src="/images/collections/collections-hero.jpg"
                    alt="Beautifully curated gift collections arranged on a warm wooden surface"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                {/* Warm cream gradient overlay — left-heavy so text is readable */}
                <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/55 to-transparent" />
                {/* Subtle bottom fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-porcelain/60 via-transparent to-transparent" />

                <FadeIn>
                    <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6" style={{ height: '70vh' }}>
                        {/* Eyebrow */}
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-8 bg-caramel" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cocoa">
                                Carefully Selected
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="max-w-xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
                            Curated{" "}
                            <span className="font-accent italic text-honey">
                                collections
                            </span>
                            <br />
                            for every style.
                        </h1>

                        <p className="mt-6 max-w-md text-base leading-7 text-ink/60">
                            Discover beautifully grouped gifts for different
                            personalities, lifestyles, and little stories worth
                            celebrating.
                        </p>

                        {/* Mini stats row */}
                        <div className="mt-8 flex flex-wrap items-center gap-5 text-[9px] font-semibold uppercase tracking-[0.18em] text-ink/35">
                            <span className="flex items-center gap-1.5">
                                <Star
                                    size={11}
                                    className="text-caramel"
                                    fill="currentColor"
                                />
                                Hand-picked
                            </span>
                            <span className="h-1 w-1 rounded-full bg-caramel/30" />
                            <span>Beautifully grouped</span>
                            <span className="h-1 w-1 rounded-full bg-caramel/30" />
                            <span>Made to inspire</span>
                        </div>
                    </div>
                </FadeIn>
            </section>

            {/* ── Constrained content below the hero ── */}
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">

                {/* INFO BAR */}
                <FadeIn>
                    <div className="relative z-20 -mt-8 mb-14 flex justify-center px-4">
                        <div className="inline-flex items-center gap-3 rounded-full bg-gradient-dark px-6 py-3 text-white shadow-xl shadow-espresso/20">
                            <Layers size={16} className="text-sand" />
                            <span className="text-sm font-medium">
                                {collections.length} collections to explore
                            </span>
                        </div>
                    </div>
                </FadeIn>

                {/* SECTION HEADER */}
                <FadeIn>
                    <div className="mb-7 flex items-end justify-between border-b border-cream pb-5 sm:mb-8">
                        <div>
                            <div className="mb-2 flex items-center gap-2">
                                <Sparkles size={14} className="text-honey" />
                                <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-caramel sm:text-[10px]">
                                    Explore the edit
                                </span>
                            </div>
                            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                                Collections for every style.
                            </h2>
                        </div>
                        <p className="hidden max-w-sm text-right text-xs leading-5 text-ink/40 sm:block">
                            From luxury to everyday comfort,
                            <br />
                            there&apos;s a little something here for everyone.
                        </p>
                    </div>
                </FadeIn>

                {/* COLLECTION GRID */}
                <StaggerContainer className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {collections.map((collection, index) => (
                        <StaggerItem
                            key={collection.name}
                            className={
                                index === 0
                                    ? "lg:col-span-2"
                                    : ""
                            }
                        >
                            <Link
                                href="/shop"
                                className="group block h-full"
                                aria-label={`Explore ${collection.name}`}
                            >
                                <article
                                    className={`relative overflow-hidden rounded-[30px] border border-cream/80 shadow-[0_14px_45px_rgba(43,22,8,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_65px_rgba(43,22,8,0.14)] ${
                                        index === 0
                                            ? "min-h-[390px] sm:min-h-[440px]"
                                            : "min-h-[350px] sm:min-h-[380px]"
                                    }`}
                                >
                                    {/* Background gradient */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${collection.color}`}
                                    />

                                    {/* Luminous glow orb */}
                                    <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-white/10 blur-2xl transition-transform duration-700 group-hover:scale-150" />

                                    {/* Collection image */}
                                    {collection.image && (
                                        <img
                                            src={collection.image}
                                            alt=""
                                            aria-hidden="true"
                                            className={`absolute object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.22)] transition-transform duration-700 group-hover:scale-110 ${
                                                index === 0
                                                    ? "-bottom-9 right-[-15px] h-[250px] w-[250px] sm:h-[290px] sm:w-[290px]"
                                                    : "-bottom-5 right-[-10px] h-[190px] w-[190px] sm:h-[220px] sm:w-[220px]"
                                            }`}
                                        />
                                    )}

                                    {/* Decorative glass circle */}
                                    <div className="absolute right-6 top-20 h-24 w-24 rounded-full border border-white/15 bg-white/5 backdrop-blur-[2px]" />

                                    {/* Dark fade from bottom */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/10 to-transparent" />

                                    {/* Top badges */}
                                    <div className="absolute left-5 right-5 top-5 z-10 flex items-center justify-between gap-3">
                                        <span className="rounded-full border border-white/20 bg-black/15 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                                            {collection.itemCount} items
                                        </span>
                                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/15 text-white backdrop-blur-md transition-all duration-500 group-hover:border-honey group-hover:bg-honey group-hover:text-espresso">
                                            <ArrowUpRight
                                                size={15}
                                                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                            />
                                        </span>
                                    </div>

                                    {/* Large ghost number */}
                                    <div className="absolute bottom-5 right-5 z-10 font-display text-5xl font-bold text-white/10 sm:text-6xl">
                                        0{index + 1}
                                    </div>

                                    {/* Content */}
                                    <div className="absolute inset-x-0 bottom-0 z-20 p-6 sm:p-7">
                                        <p className="mb-2 text-[8px] font-bold uppercase tracking-[0.28em] text-white/60 sm:text-[9px]">
                                            Curated for you
                                        </p>
                                        <h3
                                            className={`font-display font-bold leading-[0.98] tracking-tight text-white ${
                                                index === 0
                                                    ? "text-3xl sm:text-4xl"
                                                    : "text-2xl sm:text-3xl"
                                            }`}
                                        >
                                            {collection.name}
                                        </h3>
                                        <p className="mt-3 max-w-[250px] text-xs leading-5 text-white/70">
                                            {collection.tagline}
                                        </p>
                                        <div className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-sand">
                                            Explore collection
                                            <ArrowRight
                                                size={13}
                                                className="transition-transform duration-300 group-hover:translate-x-1"
                                            />
                                        </div>
                                    </div>

                                    {/* Shine sweep on hover */}
                                    <div className="pointer-events-none absolute inset-0 translate-x-[-125%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-[1000ms] group-hover:translate-x-[125%]" />

                                    {/* Inner border highlight */}
                                    <div className="absolute inset-0 rounded-[30px] ring-1 ring-inset ring-white/10 transition-all duration-500 group-hover:ring-white/30" />
                                </article>
                            </Link>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* FEATURE STRIP */}
                <FadeIn>
                    <section className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5">

                        {/* Card 1 — Thoughtful */}
                        <div className="group relative min-h-[195px] overflow-hidden rounded-[30px] border border-cream bg-white/70 p-6 shadow-[0_12px_35px_rgba(43,22,8,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/85 sm:min-h-[215px] sm:p-7">
                            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-honey/15 transition-transform duration-500 group-hover:scale-125" />
                            <div className="relative z-10 flex h-full flex-col justify-between">
                                <div>
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-honey/15 text-caramel">
                                        <Heart size={17} />
                                    </div>
                                    <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-caramel">
                                        01 · Thoughtful
                                    </span>
                                    <h3 className="mt-3 font-display text-2xl font-bold leading-[1.02] tracking-tight text-ink">
                                        Chosen
                                        <br />
                                        with care.
                                    </h3>
                                </div>
                                <div className="mt-5 flex items-center justify-between">
                                    <span className="text-[11px] text-ink/45">
                                        Gift ideas for real people
                                    </span>
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-honey/15 text-caramel transition-all duration-300 group-hover:bg-honey group-hover:text-white">
                                        <ArrowRight size={14} />
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 — Beautiful */}
                        <div className="group relative min-h-[195px] overflow-hidden rounded-[30px] border border-cream bg-cream/60 p-6 shadow-[0_12px_35px_rgba(43,22,8,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:bg-cream/80 sm:min-h-[215px] sm:p-7">
                            <div className="absolute -bottom-10 -right-6 h-36 w-36 rounded-full bg-sand/20 transition-transform duration-500 group-hover:scale-125" />
                            <div className="relative z-10 flex h-full flex-col justify-between">
                                <div>
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sand/20 text-honey">
                                        <Sparkles size={17} />
                                    </div>
                                    <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-caramel">
                                        02 · Beautiful
                                    </span>
                                    <h3 className="mt-3 font-display text-2xl font-bold leading-[1.02] tracking-tight text-ink">
                                        Made to
                                        <br />
                                        inspire.
                                    </h3>
                                </div>
                                <div className="mt-5 flex items-center justify-between">
                                    <span className="text-[11px] text-ink/45">
                                        Collections that delight
                                    </span>
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-cocoa shadow-sm transition-all duration-300 group-hover:bg-honey group-hover:text-white">
                                        <ArrowRight size={14} />
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 — Personal */}
                        <div className="group relative min-h-[195px] overflow-hidden rounded-[30px] border border-cream bg-white/70 p-6 shadow-[0_12px_35px_rgba(43,22,8,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/90 sm:min-h-[215px] sm:p-7">
                            <div className="absolute -right-10 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-caramel/12 transition-transform duration-500 group-hover:scale-125" />
                            <div className="relative z-10 flex h-full flex-col justify-between">
                                <div>
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-caramel/12 text-cocoa">
                                        <Gift size={17} />
                                    </div>
                                    <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-caramel">
                                        03 · Personal
                                    </span>
                                    <h3 className="mt-3 font-display text-2xl font-bold leading-[1.02] tracking-tight text-ink">
                                        Something
                                        <br />
                                        that fits.
                                    </h3>
                                </div>
                                <div className="mt-5 flex items-center justify-between">
                                    <span className="text-[11px] text-ink/45">
                                        Made for you
                                    </span>
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-cocoa shadow-sm transition-all duration-300 group-hover:bg-honey group-hover:text-white">
                                        <ArrowRight size={14} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                {/* FINAL CTA */}
                <FadeIn>
                    <section className="relative mt-12 overflow-hidden rounded-[34px] bg-gradient-dark px-6 py-10 text-white shadow-[0_20px_60px_rgba(43,22,8,0.25)] sm:mt-16 sm:rounded-[38px] sm:px-10 sm:py-12 lg:px-12">
                        {/* Glows */}
                        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-honey/15 blur-3xl" />
                        <div className="absolute -bottom-28 left-[45%] h-72 w-72 rounded-full bg-sand/10 blur-3xl" />

                        {/* Decorative icons */}
                        <Sparkles
                            size={28}
                            className="absolute right-[24%] top-7 rotate-12 text-white/10"
                        />
                        <Heart
                            size={18}
                            fill="currentColor"
                            className="absolute bottom-8 left-[43%] -rotate-12 text-white/10"
                        />

                        <div className="relative z-10 flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
                            <div>
                                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.26em] text-sand sm:text-[10px] sm:tracking-[0.28em]">
                                    Not sure where to start?
                                </p>
                                <h2 className="max-w-2xl font-display text-3xl font-bold leading-[1.05] sm:text-4xl">
                                    Start with a feeling.
                                    <br />
                                    <span className="font-accent italic text-honey">
                                        We&apos;ll find the gift.
                                    </span>
                                </h2>
                                <p className="mt-3 max-w-lg text-sm leading-6 text-white/60">
                                    Browse the full collection and discover
                                    something that feels just right.
                                </p>
                            </div>

                            <Link
                                href="/shop"
                                className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-semibold text-espresso shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                Browse All Gifts
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-honey text-white transition-transform duration-300 group-hover:translate-x-1">
                                    <ArrowRight size={17} />
                                </span>
                            </Link>
                        </div>
                    </section>
                </FadeIn>

                <div className="h-4 sm:h-8" />

            </div>{/* end constrained container */}

        </main>
    );
}