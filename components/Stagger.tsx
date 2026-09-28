// components/Stagger.tsx
"use client";

import { motion, type Variants } from "framer-motion";  // Variants type එක එකතු කළා
import type { ReactNode } from "react";

// container object එකට Variants type එක දුන්නා
const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export function StaggerContainer({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// item object එකටත් Variants type එක දුන්නා
const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    },
};

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <motion.div variants={item} className={className}>
            {children}
        </motion.div>
    );
}