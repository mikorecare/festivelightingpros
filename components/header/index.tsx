"use client";

import { useState } from "react";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";
import TopBar from "./topbar";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full z-50">
      {/* Top Bar - hidden on mobile */}
      <TopBar />

      {/* Desktop Navigation - hidden on mobile/tablet */}
      <MainNav />

      {/* Mobile Navigation - visible only on mobile */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      />
    </header>
  );
}
