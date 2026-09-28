// components/FadeIn.tsx
"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

// animation object එක වෙනම හදලා Variants type එක දෙන්න
const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
};

export default function FadeIn({
    children,
    delay = 0,
    className = "",
    viewport = { once: true, margin: "-40px" },
}: {
    children: ReactNode;
    delay?: number;
    className?: string;
    viewport?: { once?: boolean; margin?: string; amount?: "some" | "all" | number };
}) {
    return (
        <motion.div
            className={className}
            variants={fadeInVariants}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            transition={{ duration: 0.7, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}