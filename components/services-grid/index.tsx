"use client";

import Link from "next/link";
import {
  LandscapeServiceIcon,
  PermanentServiceIcon,
  PatioServiceIcon,
  SpecialEventsServiceIcon,
  HolidaysServiceIcon,
  HolidayDecorIcon,
  HolidayInteriorIcon,
} from "../icons/icon-wrapper";

const services = [
  {
    title: "Landscape",
    subtitle: "Lighting",
    href: "/landscape-lighting",
    icon: LandscapeServiceIcon,
  },
  {
    title: "Permanent",
    subtitle: "Lighting",
    href: "/permanent-lighting",
    icon: PermanentServiceIcon,
  },
  {
    title: "Patio",
    subtitle: "Lighting",
    href: "/patio-lighting",
    icon: PatioServiceIcon,
  },
  {
    title: "Special",
    subtitle: "Events",
    href: "/special-events",
    icon: SpecialEventsServiceIcon,
  },
  {
    title: "Holiday",
    subtitle: "Outdoor Lighting",
    href: "/holiday-outdoor-lighting",
    icon: HolidaysServiceIcon,
  },
  {
    title: "Holiday",
    subtitle: "Decor",
    href: "/holiday-decor",
    icon: HolidayDecorIcon,
  },
  {
    title: "Holiday",
    subtitle: "Interior",
    href: "/holiday-interior",
    icon: HolidayInteriorIcon,
  },
];

export default function ServicesGrid() {
  return (
    <div className="w-full bg-[var(--e-global-color-primary)] py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-6">
          <h4 className="text-white text-lg md:text-xl font-semibold">
            Start Your Outdoor Lighting Design Ideas Here
          </h4>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                href={service.href}
                className="group flex flex-col items-center text-center transition-all duration-300 hover:scale-105"
              >
                {/* Icon Circle */}
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 mb-1">
                  <Icon
                    className="text-brand-accent w-7 h-7 md:w-8 md:h-8"
                    size={32}
                  />
                </div>
                {/* Title */}
                <span className="text-xs font-semibold text-white group-hover:text-brand-accent transition-colors duration-300 whitespace-nowrap">
                  {service.title}
                </span>
                <span className="text-[10px] text-brand-accent whitespace-nowrap">
                  {service.subtitle}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
