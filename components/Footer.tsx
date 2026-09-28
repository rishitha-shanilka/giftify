import Link from "next/link";
import { Gift, Mail, ArrowRight, Sparkles } from "lucide-react";
import {
    InstagramIcon,
    FacebookIcon,
    XIcon,
} from "./SocialIcons";

const shopLinks = [
    { label: "Shop", href: "/shop" },
    { label: "Collections", href: "/collections" },
    { label: "Occasions", href: "/occasions" },
];

const companyLinks = [
    { label: "About", href: "/about" },

];

function SocialButton({
    children,
    label,
    href = "#",
}: {
    children: React.ReactNode;
    label: string;
    href?: string;
}) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto");

    if (isExternal) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full
                    border border-white/15
                    text-white/60
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-[#FEA38E]/60
                    hover:bg-[#FEA38E]/10
                    hover:text-[#FEA38E]
                "
            >
                {children}
            </a>
        );
    }

    return (
        <Link
            href={href}
            aria-label={label}
            className="
                flex h-10 w-10 items-center justify-center
                rounded-full
                border border-white/15
                text-white/60
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-[#FEA38E]/60
                hover:bg-[#FEA38E]/10
                hover:text-[#FEA38E]
            "
        >
            {children}
        </Link>
    );
}

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#2D1D1A] text-white">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#FEA38E]/[0.06] blur-3xl" />
                <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-[#FEA38E]/[0.05] blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-6xl px-6 pt-12 pb-6 sm:pt-14">
                <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_0.7fr_1.5fr]">
                    {/* BRAND */}
                    <div>
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-2"
                        >
                            <span
                                className="
                                    flex h-9 w-9 items-center justify-center
                                    rounded-full
                                    bg-[#FEA38E]/15
                                    text-[#FEA38E]
                                    transition-all duration-300
                                    group-hover:bg-[#FEA38E]/25
                                "
                            >
                                <Gift size={18} />
                            </span>

                            <span className="font-display text-xl font-semibold text-white">
                                Giftify
                            </span>
                        </Link>

                        <p className="mt-4 max-w-[220px] text-sm leading-6 text-white/50">
                            For every moment, a perfect gift.
                        </p>

                        <div className="mt-6 flex gap-3">
                            <SocialButton
                                label="Instagram"
                                href="https://instagram.com/"
                            >
                                <InstagramIcon size={15} />
                            </SocialButton>

                            <SocialButton
                                label="Facebook"
                                href="https://facebook.com/"
                            >
                                <FacebookIcon size={15} />
                            </SocialButton>

                            <SocialButton
                                label="X"
                                href="https://twitter.com/"
                            >
                                <XIcon size={15} />
                            </SocialButton>

                            <SocialButton
                                label="Email"
                                href="mailto:hello@giftify.com"
                            >
                                <Mail size={15} />
                            </SocialButton>
                        </div>
                    </div>

                    {/* SHOP */}
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/35">
                            Shop
                        </p>

                        <div className="mt-5 flex flex-col gap-3">
                            {shopLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="
                                        w-fit text-sm text-white/65
                                        transition-colors duration-300
                                        hover:text-[#FEA38E]
                                    "
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* COMPANY */}
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/35">
                            Company
                        </p>

                        <div className="mt-5 flex flex-col gap-3">
                            {companyLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="
                                        w-fit text-sm text-white/65
                                        transition-colors duration-300
                                        hover:text-[#FEA38E]
                                    "
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* STAY IN THE LOOP */}
                    <div>
                        <div className="flex items-center gap-2 text-[#FEA38E]">
                            <Sparkles size={13} />

                            <p className="text-[10px] font-bold uppercase tracking-[0.24em]">
                                Stay in the loop
                            </p>
                        </div>

                        <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">
                            New arrivals and gifting ideas, once in a while.
                        </p>

                        <form className="mt-5 flex h-12 max-w-sm items-center rounded-full border border-white/15 bg-white/[0.04] p-1 transition-all duration-300 focus-within:border-[#FEA38E]/50 focus-within:bg-white/[0.06]">
                            <input
                                type="email"
                                placeholder="Your email"
                                suppressHydrationWarning
                                className="
                                    min-w-0 flex-1
                                    bg-transparent
                                    px-4
                                    text-sm
                                    text-white
                                    outline-none
                                    placeholder:text-white/30
                                "
                            />

                            <button
                                type="submit"
                                aria-label="Subscribe"
                                className="
                                    flex h-10 w-10 shrink-0
                                    items-center justify-center
                                    rounded-full
                                    bg-[#FEA38E]
                                    text-ink
                                    transition-all duration-300
                                    hover:scale-105
                                    hover:bg-white
                                "
                            >
                                <ArrowRight size={16} />
                            </button>
                        </form>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="mt-10 border-t border-white/10 pt-5">
                    <div className="flex flex-col gap-3 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
                        <p suppressHydrationWarning>
                            © 2026 Giftify. All rights reserved.
                        </p>

                        <p>
                            Made with <span className="text-white/55">♥</span> for thoughtful
                            gifting.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}