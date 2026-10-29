import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fictious-designs.vercel.app"),
  title: {
    default: "Fictious Media",
    template: "%s | Fictious Media",
  },
  description:
    "Transformamos ideias em identidades visuais, websites e estrategias digitais para marcas que querem destacar-se em Mocambique e alem.",
  applicationName: "Fictious Media",
  openGraph: {
    siteName: "Fictious Media",
    locale: "pt_MZ",
    type: "website",
    images: [
      {
        url: "/fictious-media-og-image.png",
        width: 1200,
        height: 630,
        alt: "Fictious Media - Design, Branding e Presença Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/fictious-media-og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <StructuredData />
        {children}
        <GoogleAnalytics gaId="G-RP7J49NQKT" />
      </body>
    </html>
  );
}
