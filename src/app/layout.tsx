import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://riopinardentalcare.com"),
  title: {
    default: `${siteConfig.name} | Orlando Family Dentist`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/rio-pinar-tooth-logo.png",
    apple: "/rio-pinar-tooth-logo.png",
  },
  keywords: [
    "Orlando dentist",
    "family dentist Orlando",
    "cosmetic dentistry",
    "emergency dental",
    "dental cleanings",
  ],
  openGraph: {
    title: `${siteConfig.name} | Orlando Family Dentist`,
    description: siteConfig.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${playfair.variable} antialiased`}>
        <div className="min-h-screen bg-slate-950 text-white">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
