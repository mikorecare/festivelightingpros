"use client";

import Link from "next/link";
import Image from "next/image";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e12] to-[#101518] flex flex-col items-center justify-center px-4 py-20">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-[#ff890b]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#ff890b]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Mascot Image */}
        <div className="mb-6">
          <div className="w-48 h-48 mx-auto relative">
            <Image
              src="/Festivo-Presenting-768x1018.png"
              alt="Festivo Mascot"
              width={768}
              height={1018}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>
        {/* 404 Number with glow effect */}
        <div className="relative mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-[#ff890b] tracking-tighter">
            404
          </h1>
          <div className="absolute inset-0 blur-2xl bg-[#ff890b]/20 rounded-full" />
        </div>

        {/* Error Message */}
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
          Oops! The Lights Went Out Here
        </h2>

        <p className="text-gray-400 text-base md:text-lg mb-8">
          We couldn't find the page you're looking for. It might have been
          moved, deleted, or maybe the path never existed. But don't worry,
          Festivo is here to help you find your way back to the light.
        </p>

        {/* Quick Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#ff890b] hover:bg-[#e07a00] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Popular Pages */}
        <div className="border-t border-white/10 pt-8">
          <h3 className="text-white font-semibold mb-4">
            Popular Pages You Might Like:
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/landscape-lighting"
              className="text-gray-400 hover:text-[#ff890b] transition-colors text-sm"
            >
              Landscape Lighting
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/permanent-lighting"
              className="text-gray-400 hover:text-[#ff890b] transition-colors text-sm"
            >
              Permanent Lighting
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/patio-lighting"
              className="text-gray-400 hover:text-[#ff890b] transition-colors text-sm"
            >
              Patio Lighting
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/holiday-outdoor-lighting"
              className="text-gray-400 hover:text-[#ff890b] transition-colors text-sm"
            >
              Holiday Lighting
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/contact-us"
              className="text-gray-400 hover:text-[#ff890b] transition-colors text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Search Suggestion */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-gray-500 text-sm">
            Need help?{" "}
            <Link href="/contact-us" className="text-[#ff890b] hover:underline">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>

      {/* Footer note */}
      <div className="absolute bottom-8 left-0 right-0 text-center text-gray-600 text-xs">
        <p>© Festive Lighting Pros. Let us brighten your world.</p>
      </div>
    </div>
  );
}
