"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MegaMenu from "./mega-menu";

export default function MainNav() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <nav className="hidden md:flex bg-white shadow-md sticky top-0 z-40 px-4 md:px-8 py-3 justify-between items-center">
      {/* Logo */}
      <div className="w-32 md:w-40">
        <Link href="/">
          <Image
            src="/FLP-LOGO-R-1.png"
            alt="Festive Lighting Pros"
            width={505}
            height={210}
            className="w-full h-auto"
            priority
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 items-center">
        <Link href="/" className="hover:text-[#ff890b] transition">
          Home
        </Link>

        {/* Services Mega Menu */}
        <div
          className="relative"
          onMouseEnter={() => setOpenMenu("services")}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <button className="hover:text-[#ff890b] transition flex items-center gap-1">
            Services <span className="text-xs">▼</span>
          </button>
          {openMenu === "services" && <MegaMenu type="services" />}
        </div>

        {/* About Us Mega Menu */}
        <div
          className="relative"
          onMouseEnter={() => setOpenMenu("about")}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <button className="hover:text-[#ff890b] transition flex items-center gap-1">
            About Us <span className="text-xs">▼</span>
          </button>
          {openMenu === "about" && <MegaMenu type="about" />}
        </div>

        <Link href="/blog" className="hover:text-[#ff890b] transition">
          Blog
        </Link>
        <Link href="/gallery" className="hover:text-[#ff890b] transition">
          Gallery
        </Link>
        <Link href="/contact-us" className="hover:text-[#ff890b] transition">
          Contact Us
        </Link>
      </div>

      {/* CTA Button */}
      <div>
        <a
          href="https://ct.clienttether.com/page/flp-form"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#ff890b] hover:bg-[#e07a00] text-white px-6 py-2 rounded-full text-sm font-semibold transition transform hover:scale-105 inline-block"
        >
          Schedule a Consultation
        </a>
      </div>
    </nav>
  );
}
