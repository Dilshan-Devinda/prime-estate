import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Prime Estates | Luxury Real Estate",
  description:
    "Prime Estates portfolio website featuring premium homes, curated listings, and a modern inquiry experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
        <header className="sticky top-0 z-20 border-b border-black/10 bg-[color:var(--color-bg)]/95 backdrop-blur">
          <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
            <Link
              href="/"
              className="font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-wide"
            >
              Prime Estates
            </Link>
            <div className="flex items-center gap-5 text-sm font-semibold uppercase tracking-[0.08em]">
              <Link
                href="/properties"
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                Properties
              </Link>
              <Link
                href="/about"
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                Contact
              </Link>
            </div>
          </nav>
        </header>
        <main className="flex-1 pt-2">{children}</main>
        <footer className="mt-10 border-t border-black/10 bg-[var(--color-soft)]">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 text-xs md:text-sm">
            <p>
              © {new Date().getFullYear()} Prime Estates. Crafted for premium
              living.
            </p>
            <p>Colombo | Kandy | Negombo</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
