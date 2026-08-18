import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site";

const GOOGLE_TAG_MANAGER_ID = "GTM-WNQ7KPKH";

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
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GOOGLE_TAG_MANAGER_ID}');`}
        </Script>
      </head>
      <body className={`${manrope.variable} ${playfair.variable} antialiased`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_MANAGER_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <div className="min-h-screen bg-slate-950 text-white">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
