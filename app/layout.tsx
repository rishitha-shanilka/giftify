import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Cormorant_Garamond } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WishlistProvider } from "@/lib/wishlist-context";
import { CartProvider } from "@/lib/cart-context";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700", "800"],
});


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-accent",
  weight: ["500", "600"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "Giftify — Thoughtfully Curated Gifts",
  description: "Find something worth remembering for every occasion.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} ${cormorant.variable}`}>
      <body>
        <WishlistProvider>
          <CartProvider>
            <Navbar />
            {children}
            <Footer />
          </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}