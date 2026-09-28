import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

const baseUrl = "https://giftify.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = [
        "",
        "/shop",
        "/bundles",
        "/find-your-gift",
        "/occasions",
        "/collections",
        "/about",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
    }));

    const productRoutes = products.map((product) => ({
        url: `${baseUrl}/shop/${product.slug}`,
        lastModified: new Date(),
    }));

    return [...staticRoutes, ...productRoutes];
}