"use client";

import Link from "next/link";
import Image from "next/image";

export default function CTASection() {
  return (
    <div className="w-full bg-[#101518] py-2 md:py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top Section - Ready to take the first step? */}
        <div className="flex items-center justify-between gap-4 mb-1 md:mb-2">
          {/* Left Divider */}
          <div className="flex-1">
            <div className="w-full h-[1px] bg-white/30" />
          </div>

          {/* Center Text */}
          <div>
            <h5 className="text-brand-accent text-base md:text-lg lg:text-xl font-semibold tracking-wide whitespace-nowrap">
              Ready to take the first step?
            </h5>
          </div>

          {/* Right Divider */}
          <div className="flex-1">
            <div className="w-full h-[1px] bg-white/30" />
          </div>
        </div>

        {/* Middle Section - HomeAdvisor Logos + Title */}
        <div className="flex flex-col md:flex-row items-center justify-around gap-6 md:gap-8 lg:gap-12 mb-1 md:mb-2">
          {/* Left Logo */}
          <div className="flex-shrink-0">
            <Link
              href="http://www.homeadvisor.com/rated.FestiveLightingPros.133355255.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/cta/Home-Advisors-logo.png"
                alt="Home Advisors Logo"
                width={261}
                height={236}
                className="w-auto h-20 md:h-24 lg:h-28 object-contain hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          {/* Center Title */}
          <div>
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold text-center tracking-tight">
              DISCOVER THE FLP DIFFERENCE <br /> FOR YOURSELF
            </h2>
          </div>

          {/* Right Logo */}
          <div className="flex-shrink-0">
            <Link
              href="http://www.homeadvisor.com/rated.FestiveLightingPros.133355255.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/cta/Home-Advisors-1year-logo.png"
                alt="Home Advisor 1 Year Screened and Approved Logo"
                width={214}
                height={245}
                className="w-auto h-20 md:h-24 lg:h-28 object-contain hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
        </div>

        {/* Bottom Section - Contact Us Button */}
        <div className="flex items-center justify-between gap-4">
          {/* Left Divider */}
          <div className="flex-1">
            <div className="w-full h-[1px] bg-white/30" />
          </div>

          {/* Center Button */}
          <div>
            <Link
              href="https://ct.clienttether.com/page/flp-form"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#ff890b] hover:bg-[#e07a00] text-white font-semibold text-base md:text-lg px-2 md:px-4 py-1 md:py-2 rounded-md transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
          </div>

          {/* Right Divider */}
          <div className="flex-1">
            <div className="w-full h-[1px] bg-white/30" />
          </div>
        </div>
      </div>
    </div>
  );
}
