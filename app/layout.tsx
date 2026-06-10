import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    "light installation