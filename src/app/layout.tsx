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
  metadataBase: new URL("https://fictiousdesigns.vercel.app"),
  title: {
    default: "Fictious Designs | Design, Branding e Presenca Digital",
    template: "%s | Fictious Designs",
  },
  description:
    "Transformamos ideias em identidades visuais, websites e estrategias digitais para marcas que querem destacar-se em Mocambique e alem.",
  applicationName: "Fictious Designs",
  openGraph: {
    siteName: "Fictious Designs",
    locale: "pt_MZ",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fictious Designs - Design, Branding e Presenca Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
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
      <body className="flex min-h-full flex-col"><StructuredData />{children}</body>
    </html>
  );
}