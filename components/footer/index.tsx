"use client";

import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "../icons/social-media-icons";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#1d3156] to-[#101518] pt-12 pb-6 md:pt-16 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo */}
          <div className="flex justify-center sm:justify-start">
            <Link href="/">
              <Image
                src="/FLP-LOGO-R-2.png"
                alt="Festive Lighting Pros"
                width={505}
                height={210}
                className="w-40 md:w-48 lg:w-56 h-auto transition-transform duration-300 hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Column 2: Contact Information */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <p className="text-gray-300 text-sm leading-relaxed">
                1973 Northgate Blvd.
                <br />
                Sarasota, FL 34234
              </p>
              <p className="text-gray-300 text-sm">
                Email:{" "}
                <a
                  href="mailto:corp@flppros.com"
                  className="text-white hover:text-[#ff890b] transition-colors duration-300"
                >
                  Corp@FLPpros.com
                </a>
              </p>
              <p className="text-gray-300 text-sm">
                Phone:{" "}
                <a
                  href="tel:19412397919"
                  className="text-white hover:text-[#ff890b] transition-colors duration-300"
                >
                  941-239-7919
                </a>
                <br />
                Toll Free:{" "}
                <a
                  href="tel:18333577767"
                  className="text-white hover:text-[#ff890b] transition-colors duration-300"
                >
                  833.FLP.PROS
                </a>
              </p>
              <p className="text-gray-300 text-sm">
                <Link
                  href="/careers"
                  className="text-white hover:text-[#ff890b] transition-colors duration-300"
                >
                  Careers
                </Link>
              </p>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/landscape-lighting"
                  className="text-gray-300 hover:text-[#ff890b] transition-colors duration-300 text-sm"
                >
                  Landscape Lighting
                </Link>
              </li>
              <li>
                <Link
                  href="/permanent-lighting"
                  className="text-gray-300 hover:text-[#ff890b] transition-colors duration-300 text-sm"
                >
                  Permanent Lighting
                </Link>
              </li>
              <li>
                <Link
                  href="/patio-lighting"
                  className="text-gray-300 hover:text-[#ff890b] transition-colors duration-300 text-sm"
                >
                  Patio Lighting
                </Link>
              </li>
              <li>
                <Link
                  href="/holiday-outdoor-lighting"
                  className="text-gray-300 hover:text-[#ff890b] transition-colors duration-300 text-sm"
                >
                  Holiday Lighting
                </Link>
              </li>
              <li>
                <Link
                  href="/special-events"
                  className="text-gray-300 hover:text-[#ff890b] transition-colors duration-300 text-sm"
                >
                  Special Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex justify-center sm:justify-start gap-4">
              <SocialIcon name="facebook" />
              <SocialIcon name="instagram" />
              <SocialIcon name="twitter" />
              <SocialIcon name="youtube" />
              <SocialIcon name="pinterest" />
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Festive Lighting Pros. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
