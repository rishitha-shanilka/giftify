import {
  ArrowRight,
  ChevronRight,
  Gift,
  Heart,
  Leaf,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { occasions } from "@/lib/occasions";
import { collections } from "@/lib/collections";
import GiftFinder from "@/components/GiftFinder";
import FadeIn from "@/components/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/Stagger";
import Link from "next/link";

const features = [
  { icon: Heart, title: "Thoughtful & Caring", detail: "Curated with care" },
  { icon: ShieldCheck, title: "Premium Quality", detail: "Only the best" },
  { icon: Truck, title: "Fast & Reliable Delivery", detail: "Safe to their hands" },
  { icon: Leaf, title: "A Greener Tomorrow", detail: "Sustainable choices" },
];

export const metadata = {
  title: "Giftify — Thoughtfully Curated Gifts for Every Occasion",
  description:
    "Find something worth remembering. Customize and order gifts for birthdays, anniversaries, and more — delivered with care.",
};

export default function Home() {
  return (
    <main className="overflow-hidden bg-porcelain text-ink">

      {/* HERO — bright sunlit photo, dark serif text instead of white-on-dark */}
      <section className="relative h-[85vh] overflow-hidden bg-espresso">
        <img
          src="/images/home/hero-bg.jpg"
          alt="Sunlit gift boxes with gold ribbon on a warm marble surface"
          className="absolute inset-x-0 -top-px h-[calc(100%+2px)] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/90 via-cream/40 to-transparent" />


        <FadeIn className="h-full">
          <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-caramel" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-caramel">
                Thoughtfully Curated Gifts
              </span>
              <span className="h-px w-8 bg-caramel" />
            </div>

            <h1 className="max-w-xl font-display text-5xl font-bold leading-tight tracking-tight text-espresso sm:text-6xl">
              Find something worth{" "}
              <span className="font-accent italic text-cocoa">remembering.</span>
            </h1>

            <p className="mt-5 max-w-md text-lg text-ink/70">
              Thoughtfully curated gifts for birthdays, milestones, and every little moment in between.
            </p>
          </div>
        </FadeIn>
      </section>


      {/* GIFT FINDER */}
      <GiftFinder />

      {/* SHOP BY OCCASION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream via-cream/40 to-porcelain pt-20 pb-28">
        <div className="relative mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-px w-8 bg-caramel" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cocoa">Find the feeling</span>
                </div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">Shop by Occasion</h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-ink/55">
                  Gifts for the moments that deserve a little more thought.
                </p>
              </div>
              <Link href="/occasions" className="group hidden items-center gap-2 text-sm font-semibold text-cocoa sm:inline-flex">
                View all occasions
                <ChevronRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {occasions.map((occasion) => (
              <StaggerItem key={occasion.name}>
                <Link
                  href={`/shop?occasion=${encodeURIComponent(occasion.name)}`}
                  className="group block cursor-pointer"
                >
                  <div className="relative aspect-[0.9] overflow-hidden rounded-[1.5rem] border border-white bg-white shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-cocoa/10">
                    <img
                      src={occasion.image}
                      alt={occasion.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="rounded-full bg-white/85 px-3 py-1 text-[10px] font-semibold text-ink backdrop-blur-md">Explore</span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                  <div className="px-1 pt-3">
                    <p className="text-sm font-semibold text-ink">{occasion.name}</p>
                    <p className="mt-0.5 text-xs leading-5 text-ink/45">{occasion.tagline}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* TRENDING GIFTS */}
      <section className="relative overflow-hidden bg-porcelain py-24">
        <div className="relative mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <Sparkles size={15} className="text-caramel" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cocoa">Loved right now</span>
                </div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">Trending Gifts</h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-ink/55">
                  A collection of little things people are loving right now.
                </p>
              </div>
              <a href="/shop" className="group hidden items-center gap-2 text-sm font-semibold text-cocoa sm:inline-flex">
                View all
                <ChevronRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {products.slice(0, 6).map((product) => (
              <StaggerItem key={product.name}>
                <ProductCard product={product} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* EDITORIAL BRAND STORY — now token-driven, not a one-off hex */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-dark shadow-[0_30px_80px_-35px_rgba(43,22,8,0.5)]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-coral/10 blur-3xl" />
              <div className="absolute -bottom-40 right-[-80px] h-96 w-96 rounded-full bg-honey/10 blur-3xl" />
            </div>
            <div className="relative grid lg:grid-cols-[1fr_0.95fr]">
              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                <div className="flex items-center gap-3">
                  <span className="h-px w-9 bg-coral" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-coral">More than just a gift</span>
                </div>
                <h2 className="mt-5 max-w-xl font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                  A gift is a small
                  <span className="block text-white/45">way of saying</span>
                  <span className="block">I thought of you.</span>
                </h2>
                <p className="mt-6 max-w-lg text-sm leading-7 text-white/55 sm:text-base">
                  At Giftify, we believe the most memorable gifts are not always the biggest ones. They are the ones that feel chosen, personal, and meant for that person.
                </p>
                <a href="/about" className="group mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5">
                  Explore our story
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coral text-white transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight size={17} />
                  </span>
                </a>
              </div>
              <div className="relative min-h-[360px] overflow-hidden bg-gradient-dark lg:min-h-[500px]">
                <img src="/images/cat.png" alt="Giftify character" className="absolute bottom-0 right-[-10px] z-10 w-72 object-contain sm:w-96 lg:w-[27rem]" />
                <div className="absolute right-7 top-7 z-20 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 backdrop-blur-md">
                  Made with care
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* CURATED COLLECTIONS — unchanged, its gradients already fit the family */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <FadeIn>
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <Gift size={15} className="text-caramel" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cocoa">Carefully selected</span>
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">Curated Collections</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-ink/55">
                Beautifully grouped gifts for different personalities, occasions, and little stories.
              </p>
            </div>
            <a href="/collections" className="group hidden items-center gap-2 text-sm font-semibold text-cocoa sm:inline-flex">
              View all collections
              <ChevronRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection, index) => (
            <StaggerItem key={collection.name}>
              <div className="group relative h-[290px] cursor-pointer overflow-hidden rounded-[1.8rem] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cocoa/15">
                <div className={`absolute inset-0 bg-gradient-to-br ${collection.color}`} />
                <img src={collection.image} alt="" aria-hidden="true" className="pointer-events-none absolute -bottom-5 -right-5 h-44 w-44 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.28)] transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/10 blur-3xl transition-all duration-700 group-hover:scale-125" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-xs font-bold text-white backdrop-blur-md transition-all duration-500 group-hover:border-coral group-hover:bg-coral group-hover:text-white">
                  0{index + 1}
                </div>
                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                  {collection.itemCount} items
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-xl font-bold leading-tight text-white">{collection.name}</h3>
                  <p className="mt-2 max-w-[220px] text-xs leading-5 text-white/70">{collection.tagline}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-white/0 transition-all duration-500 group-hover:text-white">
                    Explore collection
                    <ArrowRight size={13} className="transition-transform duration-500 group-hover:translate-x-1" />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-[1.8rem] ring-1 ring-inset ring-white/10 transition-all duration-500 group-hover:ring-white/30" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* WHY GIFTIFY — recolored to sand/honey, not a one-off tan hex */}
      <section className="relative overflow-hidden border-y border-cream bg-gradient-sand">
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-white/60" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-espresso/70">The Giftify promise</span>
                <span className="h-px w-8 bg-white/60" />
              </div>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-espresso sm:text-4xl">Thoughtful by design.</h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-espresso/60">
                Every detail is chosen to make gifting feel simple, warm, and personal.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="group">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 text-cocoa shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                    <feature.icon size={23} />
                  </div>
                  <p className="mt-4 font-semibold text-espresso">{feature.title}</p>
                  <p className="mt-1 text-xs leading-5 text-espresso/50">{feature.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-gradient-dark">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-28 text-center">
          <FadeIn>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-coral/30 bg-coral/10 text-coral">
              <Heart size={22} />
            </div>
            <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.3em] text-coral">Make their day</p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              There&apos;s always a reason to{" "}
              <span className="font-accent italic text-honey">give.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/50">
              Discover something meaningful for someone special — or simply make an ordinary day a little brighter.
            </p>
            <Link
              href="/shop"
              className="group mx-auto mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-coral py-2 pl-7 pr-2 text-sm font-bold text-white shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-coral-dark"
            >
              Start exploring
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-espresso transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={18} />
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}