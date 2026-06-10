"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MegaMenu from "@/components/header/mega-menu";

export default function MainNav() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const navLinkClasses =
    "text-xs font-semibold text-[var(--e-global-color-primary)] hover:text-[var(--e-global-color-accent)] transition-colors duration-300 font-poppins whitespace-nowrap";
  const navButtonClasses =
    "text-xs font-semibold text-[var(--e-global-color-primary)] hover:text-[var(--e-global-color-accent)] transition-colors duration-300 flex items-center gap-1 font-poppins whitespace-nowrap";

  return (
    <nav className="hidden md:flex bg-white shadow-md sticky top-0 z-40 border-b-4 border-[var(--e-global-color-accent)] relative">
      <div className="px-4 md:px-8 w-full">
        <div className="flex justify-between items-center py-2 max-w-7xl mx-auto w-full">
          {/* Logo */}
          <div className="w-32 md:w-40 flex-shrink-0">
            <Link href="/">
              <Image
                src="/FLP-LOGO-R-1.png"
                alt="Festive Lighting Pros"
                width={505}
                height={210}
                className="w-full h-auto transition-transform duration-300 hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6 items-center">
            <Link href="/" className={navLinkClasses}>
              Home
            </Link>

            {/* Services Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("services")}
            >
              <button className={navButtonClasses}>
                Services{" "}
                <span className="text-xs transition-transform duration-300 group-hover:rotate-180">
                  ▼
                </span>
              </button>
            </div>

            {/* About Us Mega Menu */}
            <div className="relative" onMouseEnter={() => setOpenMenu("about")}>
              <button className={navButtonClasses}>
                About Us{" "}
                <span className="text-xs transition-transform duration-300 group-hover:rotate-180">
                  ▼
                </span>
              </button>
            </div>

            <Link href="/blog" className={navLinkClasses}>
              Blog
            </Link>
            <Link href="/gallery" className={navLinkClasses}>
              Gallery
            </Link>
            <Link href="/contact-us" className={navLinkClasses}>
              Contact Us
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <a
              href="https://ct.clienttether.com/page/flp-form"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button inline-block bg-[var(--e-global-color-accent)] text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-[var(--e-global-color-primary)] hover:scale-105 hover:shadow-lg font-[Poppins] whitespace-nowrap"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Mega Menu Container - Full width of nav with animation */}
      <div
        className={`absolute left-0 right-0 top-full bg-white shadow-2xl rounded-b-lg z-50 border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          openMenu === "services" || openMenu === "about"
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div className="px-4 md:px-8 py-6">
          <div className="max-w-7xl mx-auto">
            {openMenu === "services" && <MegaMenu type="services" />}
            {openMenu === "about" && <MegaMenu type="about" />}
          </div>
        </div>
      </div>
    </nav>
  );
}
