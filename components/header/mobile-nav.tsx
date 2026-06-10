"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, MapPin } from "lucide-react";

const mobileMenuItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#", hasSubmenu: true },
  { name: "About Us", href: "#", hasSubmenu: true },
  { name: "Blog", href: "/blog" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function MobileNav({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <>
      {/* Mobile Header Bar */}
      <div className="md:hidden flex justify-between items-center px-4 py-3 bg-white shadow-md sticky top-0 z-50">
        <Link href="/">
          <Image
            src="/FLP-LOGO-R-1.png"
            alt="FLP Logo"
            width={120}
            height={50}
          />
        </Link>
        <div className="flex gap-4 items-center">
          <a href="tel:18333577767" className="text-brand-accent">
            <Phone size={24} />
          </a>
          <button onClick={onToggle} className="text-brand-primary">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] bg-white z-40 overflow-y-auto shadow-lg">
          <div className="p-4 space-y-2">
            {mobileMenuItems.map((item) => (
              <div key={item.name}>
                {item.hasSubmenu ? (
                  <button
                    onClick={() =>
                      setOpenSubmenu(
                        openSubmenu === item.name ? null : item.name,
                      )
                    }
                    className="w-full text-left py-3 px-4 text-brand-primary font-semibold flex justify-between items-center border-b border-gray-100"
                  >
                    {item.name}
                    <span>{openSubmenu === item.name ? "▲" : "▼"}</span>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onToggle}
                    className="block py-3 px-4 text-brand-primary font-semibold border-b border-gray-100"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Submenu (simplified for mobile) */}
                {item.hasSubmenu && openSubmenu === item.name && (
                  <div className="pl-6 py-2 space-y-2 bg-gray-50 rounded-lg mt-1">
                    {item.name === "Services" && (
                      <>
                        <Link
                          href="/landscape-lighting"
                          className="block py-2 px-3 text-sm"
                          onClick={onToggle}
                        >
                          Landscape Lighting
                        </Link>
                        <Link
                          href="/permanent-lighting"
                          className="block py-2 px-3 text-sm"
                          onClick={onToggle}
                        >
                          Permanent Lighting
                        </Link>
                        <Link
                          href="/patio-lighting"
                          className="block py-2 px-3 text-sm"
                          onClick={onToggle}
                        >
                          Patio Lighting
                        </Link>
                        <Link
                          href="/holiday-outdoor-lighting"
                          className="block py-2 px-3 text-sm"
                          onClick={onToggle}
                        >
                          Holiday Lighting
                        </Link>
                      </>
                    )}
                    {item.name === "About Us" && (
                      <>
                        <Link
                          href="/about-flp"
                          className="block py-2 px-3 text-sm"
                          onClick={onToggle}
                        >
                          About Us
                        </Link>
                        <Link
                          href="/careers"
                          className="block py-2 px-3 text-sm"
                          onClick={onToggle}
                        >
                          Careers
                        </Link>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="pt-6">
              <a
                href="https://ct.clienttether.com/page/flp-form"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-brand-accent text-white text-center py-3 rounded-full font-semibold"
                onClick={onToggle}
              >
                Schedule a Consultation
              </a>
            </div>

            {/* Mobile Location Link */}
            <div className="pt-4 text-center">
              <Link
                href="/locations"
                className="text-brand-primary text-sm flex items-center justify-center gap-2"
                onClick={onToggle}
              >
                <MapPin size={14} />
                Find a Location
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
