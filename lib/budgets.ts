// lib/budgets.ts

export type BudgetRange = {
    min: number;
    max: number;
    label: string;
};

export const budgetRanges: Record<string, BudgetRange> = {
    "under-3000": { min: 0, max: 3000, label: "Under Rs. 3,000" },
    "3000-5000": { min: 3000, max: 5000, label: "Rs. 3,000 – Rs. 5,000" },
    "5000-10000": { min: 5000, max: 10000, label: "Rs. 5,000 – Rs. 10,000" },
    "over-10000": { min: 10000, max: Infinity, label: "Over Rs. 10,000" },
};

export const budgetOptions = [
    { label: "Under Rs. 3,000", value: "under-3000" },
    { label: "Rs. 3,000 – Rs. 5,000", value: "3000-5000" },
    { label: "Rs. 5,000 – Rs. 10,000", value: "5000-10000" },
    { label: "Over Rs. 10,000", value: "over-10000" },
];