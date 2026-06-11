"use client";

import Link from "next/link";
import Image from "next/image";
import {
  LandscapeServiceIcon,
  PermanentServiceIcon,
  PatioServiceIcon,
  SpecialEventsServiceIcon,
  HolidaysServiceIcon,
} from "../icons/icon-wrapper";

const galleryItems = [
  {
    title: "LANDSCAPE",
    href: "/landscape-lighting#LandscapeGallery",
    icon: LandscapeServiceIcon,
    image: "/gallery/Mobile_ArchitecturalSlide_compressed.webp",
    alt: "Landscape Lighting Gallery",
  },
  {
    title: "PERMANENT",
    href: "/permanent-lighting#PermanentGallery",
    icon: PermanentServiceIcon,
    image: "/gallery/Mobile_PermanentSlide_compressed.webp",
    alt: "Permanent Lighting Gallery",
  },
  {
    title: "PATIO",
    href: "/patio-lighting#PatioGallery",
    icon: PatioServiceIcon,
    image: "/gallery/Patio-lighting-outdoor-restaurant_compressed.webp",
    alt: "Patio Lighting Gallery",
  },
  {
    title: "SPECIAL EVENTS",
    href: "/special-events#SpecialEventsGallery",
    icon: SpecialEventsServiceIcon,
    image: "/gallery/SpecialEvents_Gallery-Cover_compressed.jpg",
    alt: "Special Events Gallery",
  },
  {
    title: "HOLIDAY",
    href: "/holiday-outdoor-lighting#HolidayGallery",
    icon: HolidaysServiceIcon,
    image: "/gallery/Holidays_Gallery-Cover_compressed.webp",
    alt: "Holiday Lighting Gallery",
  },
];

export default function GalleryGrid() {
  return (
    <div className="relative w-full bg-gradient-to-t from-[#1d3156] to-[#101518] py-4 md:py-8 overflow-hidden">
      {/* Swoosh Background - fixed to viewport, won't move on zoom */}
      <div className="absolute bottom-0 right-0 w-[50%] h-auto opacity-20 pointer-events-none z-0">
        <Image
          src="/gallery/Swoosh-boxed.png"
          alt=""
          width={1920}
          height={400}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-2">
          <h2 className="text-[#c49a3f] text-sm md:text-base tracking-[0.2em] font-semibold mb-3">
            OUR WORK IN FOCUS
          </h2>
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            GALLERY
          </h2>
          <div className="h-6"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {galleryItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                href={item.href}
                className="group relative block rounded-xl overflow-hidden bg-[#1a1f26] transition-all duration-300 hover:shadow-xl hover:shadow-black/30 z-10"
              >
                {/* Image Container - landscape on mobile, portrait on larger screens */}
                <div className="relative aspect-[4/3] sm:aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                </div>

                {/* Details Panel - white panel that slides up from bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 bg-white text-center transition-all duration-300 ease-out translate-y-[70px] group-hover:translate-y-0"
                  style={{ padding: "30px 20px 30px" }}
                >
                  {/* Icon Circle - centered at the top of white panel, overlapping the image */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Icon className="text-[#ff890b] w-10 h-10" />
                  </div>

                  {/* Title - add top margin to account for the icon circle */}
                  <div className="text-[#1d3156] text-lg font-bold tracking-wide mt-2 mb-3 pb-6">
                    {item.title}
                  </div>

                  {/* View Gallery Button */}
                  <div className="text-[#ff890b] text-sm font-semibold tracking-wide opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    VIEW GALLERY
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="h-8"></div>
      </div>
    </div>
  );
}
