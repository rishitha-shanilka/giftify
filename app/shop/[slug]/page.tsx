import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import ProductClient from "./ProductClient";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) return { title: "Product Not Found — Giftify" };

    return {
        title: `${product.name} — Giftify`,
        description: `${product.name} — ${product.category}, Rs. ${product.price.toLocaleString("en-LK")}. Order via WhatsApp with a personal message.`,
    };
}

export default async function ProductDetailPage({ params }: Props) {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) return notFound();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        category: product.category,
        offers: {
            "@type": "Offer",
            price: product.price,
            priceCurrency: "LKR",
            availability: "https://schema.org/InStock",
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: product.rating,
            reviewCount: product.reviews,
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ProductClient product={product} />
        </>
    );
}