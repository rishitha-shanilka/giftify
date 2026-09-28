"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";

type Option = {
    label: string;
    value: string;
};

type CustomSelectProps = {
    value: string;
    onChange: (value: string) => void;
    options: Option[];
    placeholder: string;
};

export default function CustomSelect({
    value,
    onChange,
    options,
    placeholder,
}: CustomSelectProps) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const selected = options.find((o) => o.value === value);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={ref} className="relative w-full sm:w-auto">
            {/* Trigger Button */}
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className={`group flex w-full min-w-[170px] items-center justify-between gap-3 rounded-full border px-5 py-3 text-sm transition-all duration-300 sm:w-auto ${open
                        ? "border-coral bg-cream/[0.12] text-cream ring-2 ring-coral/20"
                        : "border-cream/15 bg-cream/[0.06] text-cream/85 hover:border-cream/30 hover:bg-cream/[0.10]"
                    }`}
            >
                <span className="truncate">
                    {selected ? selected.label : placeholder}
                </span>
                <ChevronDown
                    size={16}
                    className={`shrink-0 text-coral transition-transform duration-300 ${open ? "rotate-180" : ""
                        }`}
                />
            </button>

            {/* Dropdown Menu */}
            {open && (
                <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-cream/15 bg-espresso shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-black/20 sm:left-0 sm:right-auto sm:min-w-[220px]">
                    <div className="max-h-72 overflow-y-auto p-2">
                        {options.map((option) => {
                            const isSelected = option.value === value;
                            return (
                                <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => {
                                        onChange(option.value);
                                        setOpen(false);
                                    }}
                                    className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-all duration-200 ${isSelected
                                            ? "bg-coral/15 text-coral"
                                            : "text-cream/70 hover:bg-cream/[0.08] hover:text-cream"
                                        }`}
                                >
                                    <span className="truncate">{option.label}</span>
                                    {isSelected && (
                                        <Check
                                            size={15}
                                            className="shrink-0 text-coral"
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}