import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const GA_ID = "G-7421H6YBD0";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Union French Cleaners | Premium Dry Cleaning in San Francisco Since 1989",
  description: "San Francisco's finest dry cleaning and garment care service. Expert cleaning for suits, dresses, leather, wedding gowns, and more. Serving the community since 1989.",
  icons: {
    icon: '/ufc-favicon-trimed.png',
    apple: '/ufc-favicon-trimed.png',
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} font-serif antialiased`}
        style={{ fontFamily: 'var(--font-playfair), serif' }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
