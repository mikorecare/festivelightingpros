"use server";

import HeroCarousel from "@/components/hero";
import ServicesGrid from "@/components/services-grid";
import SignatureProcess from "@/components/signature-process";

export default async function Home() {
  return (
    <>
      <HeroCarousel />
      <ServicesGrid />
      <SignatureProcess />
    </>
  );
}
