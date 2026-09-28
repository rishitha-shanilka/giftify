"use client";

import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { occasions } from "@/lib/occasions";
import { budgetRanges } from "@/lib/budgets";
import {
    ArrowDownUp,
    ArrowRight,
    Gift,
    Heart,
    Search,
    SlidersHorizontal,
    Sparkles,
    X,
} from "lucide-react";
import {
    Suspense,
    useEffect,
    useMemo,
    useState,
} from "react";
import FadeIn from "@/components/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/Stagger";

const occasionFilters = ["All", ...occasions.map((o) => o.name)];

type SortOption = "featured" | "name-asc" | "name-desc";

function ShopContent() {
    const searchParams = useSearchParams();

    const urlOccasion = searchParams.get("occasion") || "All";
    const urlRecipient = searchParams.get("recipient") || "";
    const urlBudget = searchParams.get("budget") || "";
    const urlSearch = searchParams.get("search") || "";

    const [activeOccasion, setActiveOccasion] = useState(urlOccasion);
    const [searchQuery, setSearchQuery] = useState(urlSearch);
    const [sortBy, setSortBy] = useState<SortOption>("featured");
    const [showFilters, setShowFilters] = useState(false);

    useEffect(() => {
        setActiveOccasion(urlOccasion);
        setSearchQuery(urlSearch);
    }, [urlOccasion, urlSearch]);

    const filtered = useMemo(() => {
        let result =
            activeOccasion === "All"
                ? [...products]
                : products.filter((product) =>
                    product.occasions.includes(activeOccasion)
                );

        if (urlRecipient) {
            result = result.filter((product) =>
                product.recipients.includes(urlRecipient)
            );
        }

        if (urlBudget && budgetRanges[urlBudget]) {
            const { min, max } = budgetRanges[urlBudget];
            result = result.filter(
                (product) => product.price >= min && product.price < max
            );
        }

        const query = searchQuery.trim().toLowerCase();

        if (query) {
            result = result.filter((product) =>
                product.name.toLowerCase().includes(query)
            );
        }

        if (sortBy === "name-asc") {
            result.sort((a, b) => a.name.localeCompare(b.name));
        }

        if (sortBy === "name-desc") {
            result.sort((a, b) => b.name.localeCompare(a.name));
        }

        return result;
    }, [activeOccasion, searchQuery, sortBy, urlRecipient, urlBudget]);

    const clearAll = () => {
        setActiveOccasion("All");
        setSearchQuery("");
        setSortBy("featured");
    };

    return (
        <main className="min-h-screen overflow-hidden bg-[#FFF8F1] text-ink">
            <section className="relative h-[70vh] min-h-[540px] overflow-hidden lg:h-[75vh]">
                <img
                    src="/images/backgrounds/shop-luxe-bg.png"
                    alt="Luxurious wrapped gift boxes with golden satin ribbon and dried florals"
                    className="absolute inset-0 h-full w-full object-cover object-right sm:object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/55 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFF8F1]/80 via-transparent to-transparent" />

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-honey/15 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-sand/10 blur-3xl"
                />

                <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6 pb-16 pt-20 sm:pb-20 sm:pt-24">
                    <FadeIn viewport={{ once: true }}>
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-[#9A654D]" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#83503D]">
                                    Thoughtfully curated gifts
                                </span>
                                <span className="h-px w-8 bg-[#9A654D]" />
                            </div>

                            <h1 className="mt-6 max-w-2xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-[#301E18] sm:text-6xl lg:text-[4.7rem]">
                                Find something
                                <span className="block font-display font-normal italic text-[#86513E]">
                                    worth giving.
                                </span>
                            </h1>

                            <p className="mt-6 max-w-xl text-base leading-7 text-[#4A3830]/70 sm:text-lg">
                                Beautifully chosen gifts for birthdays,
                                milestones, little surprises, and every
                                moment that deserves a little more thought.
                            </p>

                            <div className="mt-7 flex items-center gap-3 text-xs font-semibold text-[#704637]/75">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/65 shadow-sm backdrop-blur-md">
                                    <Gift size={14} />
                                </span>
                                <span>
                                    {products.length} thoughtfully selected gifts
                                </span>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="relative z-20 mx-auto -mt-20 max-w-6xl px-6">
                <FadeIn viewport={{ once: true }}>
                    <div className="rounded-[2rem] border border-[#634136] bg-[#2D1D1A] p-4 shadow-[0_25px_80px_-30px_rgba(45,29,26,0.65)] sm:p-5">
                        <div className="hidden items-center gap-5 lg:flex">
                            <div className="flex shrink-0 items-center gap-3 pr-2">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FEA38E]/10 text-[#FEA38E]">
                                    <SlidersHorizontal size={17} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white">
                                        Browse by
                                    </p>
                                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                                        Occasion
                                    </p>
                                </div>
                            </div>

                            <div className="h-10 w-px bg-white/10" />

                            <div className="flex flex-1 flex-wrap gap-2">
                                {occasionFilters.map((occasion) => {
                                    const isActive = activeOccasion === occasion;

                                    return (
                                        <button
                                            key={occasion}
                                            type="button"
                                            onClick={() => setActiveOccasion(occasion)}
                                            className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 ${isActive
                                                ? "border-[#FEA38E] bg-[#FEA38E] text-[#2D1D1A] shadow-lg shadow-[#FEA38E]/10"
                                                : "border-white/10 bg-white/[0.04] text-white/55 hover:border-[#FEA38E]/40 hover:bg-white/[0.07] hover:text-[#FEA38E]"
                                                }`}
                                        >
                                            {occasion}
                                        </button>
                                    );
                                })}
                            </div>

                            <div className="relative shrink-0">
                                <select
                                    value={sortBy}
                                    onChange={(e) =>
                                        setSortBy(e.target.value as SortOption)
                                    }
                                    className="appearance-none rounded-xl border border-white/10 bg-white/[0.06] py-3 pl-10 pr-10 text-xs font-medium text-white/75 outline-none transition-all hover:border-[#FEA38E]/40 focus:border-[#FEA38E]/50"
                                >
                                    <option value="featured" className="text-ink">
                                        Featured
                                    </option>
                                    <option value="name-asc" className="text-ink">
                                        Name A-Z
                                    </option>
                                    <option value="name-desc" className="text-ink">
                                        Name Z-A
                                    </option>
                                </select>

                                <ArrowDownUp
                                    size={14}
                                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#FEA38E]"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between lg:hidden">
                            <div>
                                <p className="text-sm font-semibold text-white">
                                    {filtered.length} gifts found
                                </p>
                                <p className="mt-0.5 text-[10px] uppercase tracking-[0.16em] text-white/35">
                                    {activeOccasion === "All"
                                        ? "All occasions"
                                        : activeOccasion}
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => setShowFilters((prev) => !prev)}
                                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 text-xs font-semibold text-white"
                            >
                                <SlidersHorizontal size={15} />
                                Filters
                            </button>
                        </div>

                        {showFilters && (
                            <div className="mt-5 border-t border-white/10 pt-5 lg:hidden">
                                <div className="flex flex-wrap gap-2">
                                    {occasionFilters.map((occasion) => {
                                        const isActive = activeOccasion === occasion;

                                        return (
                                            <button
                                                key={occasion}
                                                type="button"
                                                onClick={() => {
                                                    setActiveOccasion(occasion);
                                                    setShowFilters(false);
                                                }}
                                                className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${isActive
                                                    ? "border-[#FEA38E] bg-[#FEA38E] text-[#2D1D1A]"
                                                    : "border-white/10 bg-white/[0.04] text-white/55"
                                                    }`}
                                            >
                                                {occasion}
                                            </button>
                                        );
                                    })}
                                </div>

                                <div className="mt-4">
                                    <label
                                        htmlFor="mobile-sort"
                                        className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/35"
                                    >
                                        Sort products
                                    </label>

                                    <select
                                        id="mobile-sort"
                                        value={sortBy}
                                        onChange={(e) =>
                                            setSortBy(e.target.value as SortOption)
                                        }
                                        className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/75 outline-none"
                                    >
                                        <option value="featured" className="text-ink">
                                            Featured
                                        </option>
                                        <option value="name-asc" className="text-ink">
                                            Name A-Z
                                        </option>
                                        <option value="name-desc" className="text-ink">
                                            Name Z-A
                                        </option>
                                    </select>
                                </div>
                            </div>
                        )}
                    </div>
                </FadeIn>
            </section>

            <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-16">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-[-180px] top-10 h-72 w-72 rounded-full bg-[#E7CDBB]/25 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute right-[-180px] top-48 h-72 w-72 rounded-full bg-[#D99A91]/10 blur-3xl"
                />

                <FadeIn viewport={{ once: true }}>
                    <div className="relative mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="h-px w-7 bg-[#B97964]" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#9A604D]">
                                    {searchQuery
                                        ? "Search results"
                                        : activeOccasion === "All"
                                            ? "The collection"
                                            : activeOccasion}
                                </span>
                            </div>

                            <div className="mt-3 flex items-center gap-3">
                                <h2 className="font-display text-3xl font-bold tracking-tight text-[#34221D] sm:text-4xl">
                                    {searchQuery
                                        ? `"${searchQuery}"`
                                        : activeOccasion === "All"
                                            ? "All Gifts"
                                            : `${activeOccasion} Gifts`}
                                </h2>

                                <span className="rounded-full bg-[#EEDBCF] px-2.5 py-1 text-[10px] font-bold text-[#885546]">
                                    {filtered.length}
                                </span>
                            </div>

                            <p className="mt-2 max-w-xl text-sm leading-6 text-ink/50">
                                {searchQuery
                                    ? `Showing results for "${searchQuery}"`
                                    : "Chosen to make ordinary moments feel a little more special."}
                            </p>
                        </div>

                        {(activeOccasion !== "All" ||
                            sortBy !== "featured" ||
                            searchQuery) && (
                                <button
                                    type="button"
                                    onClick={clearAll}
                                    className="inline-flex w-fit items-center gap-2 rounded-full border border-[#E3D1C5] bg-white px-4 py-2 text-xs font-semibold text-ink/55 transition-colors hover:border-[#B97964] hover:text-[#9A604D]"
                                >
                                    Reset filters
                                    <X size={13} />
                                </button>
                            )}
                    </div>
                </FadeIn>

                {filtered.length > 0 ? (
                    <StaggerContainer
                        key={`${activeOccasion}-${sortBy}-${searchQuery}`}
                        className="relative grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4"
                    >
                        {filtered.map((product) => (
                            <StaggerItem key={product.slug}>
                                <div className="group">
                                    <ProductCard product={product} />
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                ) : (
                    <FadeIn viewport={{ once: true }}>
                        <div className="relative overflow-hidden rounded-[2rem] border border-[#E7D4C8] bg-white px-6 py-20 text-center shadow-sm">
                            <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#FEA38E]/10 blur-3xl" />
                            <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[#C28A76]/10 blur-3xl" />

                            <div className="relative mx-auto max-w-md">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F9ECE5] text-[#A96552]">
                                    <Search size={25} />
                                </div>

                                <h3 className="mt-5 font-display text-2xl font-bold text-ink">
                                    Nothing here yet
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-ink/50">
                                    {searchQuery
                                        ? `We couldn't find any gifts matching "${searchQuery}". Try a different search term.`
                                        : "We don't have gifts for this occasion yet. Explore the full collection to discover something special."}
                                </p>

                                <button
                                    type="button"
                                    onClick={clearAll}
                                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#2D1D1A] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    View all gifts
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </FadeIn>
                )}
            </section>

            <section className="border-t border-[#E6D5CA] bg-[#F5E7DC]">
                <div className="mx-auto max-w-6xl px-6 py-7">
                    <FadeIn viewport={{ once: true }}>
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <div className="flex items-center gap-2">
                                    <Sparkles size={14} className="text-[#A86855]" />
                                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8F5746]">
                                        Giftify
                                    </p>
                                </div>

                                <p className="mt-1 font-display text-base font-bold text-[#33211C]">
                                    Gifting made a little more thoughtful.
                                </p>
                            </div>

                            <a
                                href="/find-your-gift"
                                className="group inline-flex items-center gap-2 text-xs font-bold text-[#8F5746]"
                            >
                                Need help choosing?
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 group-hover:translate-x-1">
                                    <ArrowRight size={14} />
                                </span>
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}

export default function ShopPage() {
    return (
        <Suspense fallback={null}>
            <ShopContent />
        </Suspense>
    );
}