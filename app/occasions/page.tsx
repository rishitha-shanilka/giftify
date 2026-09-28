import {
    Sparkles,
    ArrowRight,
    Heart,
    Gift,
    Wand2,
    Star,
} from "lucide-react";
import Link from "next/link";
import { occasions } from "@/lib/occasions";
import { StaggerContainer, StaggerItem } from "@/components/Stagger";
import FadeIn from "@/components/FadeIn";

export const metadata = {
    title: "Shop by Occasion — Giftify",
    description:
        "Find the perfect gift for birthdays, anniversaries, graduations, and every special moment.",
};

export default function OccasionsPage() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-porcelain pb-20 sm:pb-28">
            {/* Soft color glows */}
            <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-honey/15 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 top-40 h-[420px] w-[420px] rounded-full bg-coral/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-cream/60 blur-3xl" />


            {/* HERO — full-bleed, OUTSIDE the max-width container */}
            <section className="relative h-[70vh] overflow-hidden lg:h-[75vh]">
                <img
                    src="/images/home/occasions-hero.jpg"
                    alt="Assorted wrapped gifts for every occasion"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/50 to-transparent" />
                <FadeIn>
                    <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6" style={{ height: '70vh' }}>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-8 bg-caramel" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cocoa">Find the Feeling</span>
                        </div>
                        <h1 className="max-w-xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
                            Gifts for{" "}
                            <span className="font-accent italic text-coral">every</span>
                            <br />
                            kind of moment.
                        </h1>
                        <p className="mt-6 max-w-md text-base leading-7 text-ink/60">
                            From tiny surprises to unforgettable celebrations, discover thoughtful gifts for every occasion worth celebrating.
                        </p>
                    </div>
                </FadeIn>
            </section>

            {/* ── Constrained content below the hero ── */}
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">

            {/* INFO BAR */}
            <FadeIn>
                <div className="relative z-20 -mt-8 mb-14 flex justify-center px-4">
                    <div className="inline-flex items-center gap-3 rounded-full bg-gradient-dark px-6 py-3 text-white shadow-xl shadow-espresso/20">
                        <Gift size={16} className="text-coral" />
                        <span className="text-sm font-medium">{occasions.length} occasions to explore</span>
                    </div>
                </div>
            </FadeIn>

            {/* SECTION HEADER */}
            <FadeIn>
                <div className="mb-6 flex items-end justify-between border-b border-cream pb-5 sm:mb-7">
                    <div>
                        <div className="mb-2 flex items-center gap-2">
                            <Wand2 size={14} className="text-coral" />
                            <span className="text-[9px] font-bold uppercase tracking-[0.23em] text-cocoa sm:text-[10px] sm:tracking-[0.25em]">
                                Browse by mood
                            </span>
                        </div>
                        <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                            Find the moment.
                        </h2>
                    </div>
                    <p className="hidden max-w-xs text-right text-xs leading-5 text-ink/45 sm:block">
                        Every occasion tells a story.
                        <br />
                        Find a gift that fits yours.
                    </p>
                </div>
            </FadeIn>

            {/* OCCASION GRID */}
            <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                {occasions.map((occasion, index) => {
                    const featured = index === 0;
                    const tall = index === 3;
                    return (
                        <StaggerItem
                            key={occasion.name}
                            className={featured ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""}
                        >
                            <Link
                                href={`/shop?occasion=${encodeURIComponent(occasion.name)}`}
                                className="group block h-full"
                                aria-label={`Shop gifts for ${occasion.name}`}
                            >
                                <article
                                    className={`relative overflow-hidden rounded-[30px] border border-cream bg-cream shadow-[0_12px_40px_rgba(43,22,8,0.08)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_60px_rgba(43,22,8,0.15)] sm:rounded-[32px] ${featured
                                        ? "min-h-[460px] sm:min-h-[520px] lg:min-h-[650px]"
                                        : tall
                                            ? "min-h-[400px] sm:min-h-[430px]"
                                            : "min-h-[330px] sm:min-h-[370px]"
                                        }`}
                                >
                                    <img
                                        src={occasion.image}
                                        alt={occasion.name}
                                        loading={index < 4 ? "eager" : "lazy"}
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[850ms] ease-out group-hover:scale-[1.07]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/20 to-transparent" />
                                    <div className="absolute inset-0 bg-gradient-to-br from-coral/0 via-transparent to-honey/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                    <div className="absolute left-4 top-4 z-10 sm:left-5 sm:top-5">
                                        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/15 px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md sm:text-[9px] sm:tracking-[0.2em]">
                                            0{index + 1}
                                            <span className="h-1 w-1 rounded-full bg-white/70" />
                                            Occasion
                                        </span>
                                    </div>

                                    <div className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur-md transition-all duration-500 group-hover:border-coral group-hover:bg-coral sm:right-5 sm:top-5 sm:h-11 sm:w-11">
                                        <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                                    </div>

                                    <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7">
                                        <p className="mb-2 text-[8px] font-semibold uppercase tracking-[0.24em] text-white/60 sm:text-[9px] sm:tracking-[0.28em]">
                                            Discover the feeling
                                        </p>
                                        <h3
                                            className={`font-display font-bold leading-[0.98] tracking-tight text-white ${featured ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl"
                                                }`}
                                        >
                                            {occasion.name}
                                        </h3>
                                        <div className="mt-3 flex items-end justify-between gap-4 sm:mt-4">
                                            <p className="max-w-[230px] text-[11px] leading-5 text-white/75 sm:text-xs">
                                                {occasion.tagline}
                                            </p>
                                            <span className="hidden text-[10px] font-bold uppercase tracking-[0.15em] text-coral transition-all duration-300 group-hover:translate-x-1 sm:block">
                                                Explore →
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </StaggerItem>
                    );
                })}
            </StaggerContainer>

            {/* FEATURE CARDS */}
            <FadeIn>
                <section className="mt-7 grid gap-4 sm:mt-8 sm:grid-cols-3 sm:gap-5">
                    <div className="group relative min-h-[195px] overflow-hidden rounded-[30px] border border-cream bg-white/70 p-6 shadow-[0_12px_35px_rgba(43,22,8,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/85 sm:min-h-[215px] sm:p-7">
                        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-coral/15 transition-transform duration-500 group-hover:scale-125" />
                        <div className="relative z-10 flex h-full flex-col justify-between">
                            <div>
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-coral/10 text-coral">
                                    <Heart size={17} />
                                </div>
                                <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-cocoa">01 · Thoughtful</span>
                                <h3 className="mt-3 font-display text-2xl font-bold leading-[1.02] tracking-tight text-ink">
                                    Gifts picked
                                    <br />
                                    with meaning.
                                </h3>
                            </div>
                            <div className="mt-5 flex items-center justify-between">
                                <span className="text-[11px] text-ink/45">Chosen with care</span>
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-coral/10 text-coral transition-all duration-300 group-hover:bg-coral group-hover:text-white">
                                    <ArrowRight size={14} />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="group relative min-h-[195px] overflow-hidden rounded-[30px] border border-cream bg-cream/60 p-6 shadow-[0_12px_35px_rgba(43,22,8,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:bg-cream/80 sm:min-h-[215px] sm:p-7">
                        <div className="absolute -bottom-10 -right-6 h-36 w-36 rounded-full bg-honey/15 transition-transform duration-500 group-hover:scale-125" />
                        <div className="relative z-10 flex h-full flex-col justify-between">
                            <div>
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-honey/15 text-caramel">
                                    <Sparkles size={17} />
                                </div>
                                <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-cocoa">02 · Beautiful</span>
                                <h3 className="mt-3 font-display text-2xl font-bold leading-[1.02] tracking-tight text-ink">
                                    Moments worth
                                    <br />
                                    remembering.
                                </h3>
                            </div>
                            <div className="mt-5 flex items-center justify-between">
                                <span className="text-[11px] text-ink/45">Made to be remembered</span>
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-cocoa shadow-sm transition-all duration-300 group-hover:bg-coral group-hover:text-white">
                                    <ArrowRight size={14} />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="group relative min-h-[195px] overflow-hidden rounded-[30px] border border-cream bg-white/70 p-6 shadow-[0_12px_35px_rgba(43,22,8,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/90 sm:min-h-[215px] sm:p-7">
                        <div className="absolute -right-10 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-caramel/15 transition-transform duration-500 group-hover:scale-125" />
                        <div className="relative z-10 flex h-full flex-col justify-between">
                            <div>
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-caramel/10 text-cocoa">
                                    <Gift size={17} />
                                </div>
                                <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-cocoa">03 · Personal</span>
                                <h3 className="mt-3 font-display text-2xl font-bold leading-[1.02] tracking-tight text-ink">
                                    Something
                                    <br />
                                    for everyone.
                                </h3>
                            </div>
                            <div className="mt-5 flex items-center justify-between">
                                <span className="text-[11px] text-ink/45">Made for you</span>
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-cocoa shadow-sm transition-all duration-300 group-hover:bg-coral group-hover:text-white">
                                    <ArrowRight size={14} />
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </FadeIn>

            {/* FINAL CTA — dark espresso, matching Home's rhythm */}
            <FadeIn>
                <section className="relative mt-12 overflow-hidden rounded-[34px] bg-gradient-dark px-6 py-10 text-white shadow-[0_20px_60px_rgba(43,22,8,0.25)] sm:mt-16 sm:rounded-[38px] sm:px-10 sm:py-12 lg:px-12">
                    <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-coral/15 blur-3xl" />
                    <div className="absolute -bottom-28 left-[45%] h-72 w-72 rounded-full bg-honey/10 blur-3xl" />
                    <Heart size={30} fill="currentColor" className="absolute right-[28%] top-7 rotate-12 text-white/10" />
                    <Heart size={18} fill="currentColor" className="absolute bottom-8 left-[43%] -rotate-12 text-white/10" />

                    <div className="relative z-10 flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
                        <div>
                            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.26em] text-coral sm:text-[10px] sm:tracking-[0.28em]">
                                Still deciding?
                            </p>
                            <h2 className="max-w-2xl font-display text-3xl font-bold leading-[1.05] sm:text-4xl">
                                Sometimes the perfect gift
                                <br className="hidden sm:block" />
                                <span className="font-accent italic text-honey"> finds you.</span>
                            </h2>
                            <p className="mt-3 max-w-lg text-sm leading-6 text-white/60">
                                Browse our full collection and discover something that feels just right.
                            </p>
                        </div>

                        <Link
                            href="/shop"
                            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-semibold text-espresso shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            Browse All Gifts
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coral text-white transition-transform duration-300 group-hover:translate-x-1">
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