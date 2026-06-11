"use client";

import { useState, useEffect } from "react";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";
import TopBar from "./topbar";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - fixed */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-out ${
          showTopBar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <TopBar />
      </div>

      {/* Spacer to push content down when top bar is visible */}
      <div className={`${showTopBar ? "h-[42px]" : "h-0"} md:h-[42px]`} />

      {/* Main Navigation - sticky */}
      <div className="sticky top-0 z-40">
        <MainNav />
      </div>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      />
    </>
  );
}
