import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Festive Lighting Pros: Outdoor Lighting Solutions Company",
  description:
    "Professional outdoor lighting solutions for residential and commercial properties. Christmas light installation, landscape lighting, and year-round illumination.",
  keywords: [
    "outdoor lighting",
    "Christmas lights",
    "landscape lighting",
    "festive lighting",
    "light installation",
  ],
  authors: [{ name: "Festive Lighting Pros" }],
  robots: "index, follow",
  openGraph: {
    title: "Festive Lighting Pros | Outdoor Lighting Solutions",
    description:
      "Professional outdoor lighting installation for homes and businesses.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/favicon.png",
        alt: "Festive Lighting Pros",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
