"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Gift, ArrowRight } from "lucide-react";
import { budgetOptions } from "@/lib/budgets";
import CustomSelect from "@/components/CustomSelect";

const occasionOptions = [
    { label: "Birthday", value: "Birthday" },
    { label: "Anniversary", value: "Anniversary" },
    { label: "For Her", value: "For Her" },
    { label: "For Him", value: "For Him" },
    { label: "Graduation", value: "Graduation" },
    { label: "Thank You", value: "Thank You" },
    { label: "Just Because", value: "Just Because" },
];

const recipientOptions = [
    { label: "Mom", value: "Mom" },
    { label: "Dad", value: "Dad" },
    { label: "Friend", value: "Friend" },
    { label: "Partner", value: "Partner" },
    { label: "Child", value: "Child" },
];

const budgetOptionsFormatted = budgetOptions.map((b) => ({
    label: b.label,
    value: b.value,
}));

export default function GiftFinder() {
    const router = useRouter();

    const [occasion, setOccasion] = useState("");
    const [recipient, setRecipient] = useState("");
    const [budget, setBudget] = useState("");

    const handleFind = () => {
        const params = new URLSearchParams();

        if (occasion) params.set("occasion", occasion);
        if (recipient) params.set("recipient", recipient);
        if (budget) params.set("budget", budget);

        const query = params.toString();
        router.push(query ? `/shop?${query}` : "/shop");
    };

    return (
        <section className="relative z-20 mx-auto -mt-16 max-w-6xl px-6">
            <div
                aria-hidden="true"
                className="absolute left-1/2 top-16 bottom-0 -z-10 w-screen -translate-x-1/2 bg-cream"
            />

            <div className="flex flex-col gap-5 rounded-[2rem] border border-cream/15 bg-gradient-to-br from-espresso to-cocoa p-7 shadow-2xl shadow-espresso/30 ring-1 ring-cream/10 sm:flex-row sm:items-center">
                <div className="flex flex-1 items-center gap-4 pr-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream/10 text-honey">
                        <Gift size={22} />
                    </div>

                    <div>
                        <p className="font-display text-xl font-bold text-white">
                            Gift Finder
                        </p>
                        <p className="mt-0.5 text-sm text-cream/60">
                            Tell us what you&apos;re looking for and we&apos;ll help you find the perfect gift.
                        </p>
                    </div>
                </div>

                <CustomSelect
                    value={occasion}
                    onChange={setOccasion}
                    options={occasionOptions}
                    placeholder="Select occasion"
                />

                <CustomSelect
                    value={recipient}
                    onChange={setRecipient}
                    options={recipientOptions}
                    placeholder="Select recipient"
                />

                <CustomSelect
                    value={budget}
                    onChange={setBudget}
                    options={budgetOptionsFormatted}
                    placeholder="Select budget"
                />

                <button
                    type="button"
                    onClick={handleFind}
                    className="group inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-full bg-cream py-2 pl-6 pr-2 text-sm font-bold text-espresso shadow-lg shadow-black/30 transition-all duration-300 hover:-translate-y-0.5 sm:w-auto sm:justify-start"
                >
                    Find a Gift
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-coral text-white transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRight size={16} />
                    </span>
                </button>
            </div>
        </section>
    );
}