"use server";

import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import GalleryGrid from "@/components/gallery-grid";
import HeroCarousel from "@/components/hero";
import ReviewsSection from "@/components/reviews-section";
import RooflineLighting from "@/components/roofline-lighting";
import ServicesGrid from "@/components/services-grid";
import SignatureProcess from "@/components/signature-process";
import VideoSection from "@/components/video-section";

export default async function Home() {
  return (
    <>
      <HeroCarousel />
      <ServicesGrid />
      <SignatureProcess />
      <GalleryGrid />
      <CTASection />
      <ReviewsSection />
      <VideoSection />
      <RooflineLighting />
      <Footer />
    </>
  );
}
