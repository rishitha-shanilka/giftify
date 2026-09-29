import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/cart", "/checkout", "/wishlist", "/api/"],
            },
        ],
        sitemap: "https://giftify-lk.netlify.app/sitemap.xml",
        host: "https://giftify-lk.netlify.app",
    };
}