"use client";

import Link from "next/link";
import Image from "next/image";
import {
  LandscapeServiceIcon,
  PermanentServiceIcon,
  PatioServiceIcon,
  SpecialEventsServiceIcon,
  HolidaysServiceIcon,
  HolidayDecorIcon,
  HolidayInteriorIcon,
  AboutUsIcon,
  CareersIcon,
  TeamIcon,
  TestimonialsIcon,
} from "../icons/icon-wrapper";

const servicesData = {
  outdoor: [
    {
      title: "Landscape Lighting",
      description: "Highlight your yard's best features with elegant lighting.",
      href: "/landscape-lighting",
      icon: LandscapeServiceIcon,
    },
    {
      title: "Permanent Lighting",
      description: "Year-round lighting built to last and impress.",
      href: "/permanent-lighting",
      icon: PermanentServiceIcon,
    },
    {
      title: "Patio Lighting",
      description: "Create a warm, inviting glow for your patio space.",
      href: "/patio-lighting",
      icon: PatioServiceIcon,
    },
    {
      title: "Special Events",
      description: "Custom lighting setups for weddings, parties, and more.",
      href: "/special-events",
      icon: SpecialEventsServiceIcon,
    },
  ],
  holiday: [
    {
      title: "Holiday Outdoor Lighting",
      description: "Dazzling lights for roofs, trees, and yards.",
      href: "/holiday-outdoor-lighting",
      icon: HolidaysServiceIcon,
    },
    {
      title: "Holiday Decor",
      description: "Wreaths, garlands, and holiday displays.",
      href: "/holiday-decor",
      icon: HolidayDecorIcon,
    },
    {
      title: "Holiday Interior",
      description: "Elegant indoor lighting and festive accents.",
      href: "/holiday-interior",
      icon: HolidayInteriorIcon,
    },
  ],
};

const aboutData = [
  {
    title: "About Us",
    description: "Discover who we are and what we stand for.",
    href: "/about-flp",
    icon: AboutUsIcon,
  },
  {
    title: "Meet the Team",
    description: "Get to know the people behind our work.",
    href: "/about-flp#meet-the-team",
    icon: TeamIcon,
  },
  {
    title: "Testimonials",
    description: "See what our happy clients are saying.",
    href: "/#testimonials",
    icon: TestimonialsIcon,
  },
  {
    title: "Careers",
    description: "Join our team and grow with us.",
    href: "/careers",
    icon: CareersIcon,
  },
];

export default function MegaMenu({ type }: { type: "services" | "about" }) {
  if (type === "services") {
    return (
      <div className="flex px-25 gap-8 animate-fadeInUp">
        {/* Left side - Image */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <Image
            src="/Festivo-Presenting-768x1018.png"
            alt="Festivo Presenting"
            width={768}
            height={1018}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Right side - Services links */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Outdoor Lighting */}
          <div className="animate-slideInLeft">
            <div className="ue-menu-title font-bold text-brand-primary mb-3 border-b-2 border-brand-accent pb-1 inline-block">
              OUTDOOR LIGHTING SERVICES
            </div>
            <div className="space-y-3 mt-4">
              {servicesData.outdoor.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="ue-link-item flex gap-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:translate-x-2 group"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="ue-graphic-element w-10 h-10 bg-brand-accent/10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-brand-accent/20 group-hover:scale-110 flex-shrink-0">
                      <Icon className="text-brand-accent" size={20} />
                    </div>
                    <div className="ue-link-item-content">
                      <div className="ue-link-item-title font-semibold group-hover:text-brand-accent transition">
                        {service.title}
                      </div>
                      <div className="ue-link-item-text text-xs text-gray-500">
                        {service.description}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Holiday Lighting */}
          <div className="animate-slideInRight">
            <div className="ue-menu-title font-bold text-brand-primary mb-3 border-b-2 border-brand-accent pb-1 inline-block">
              HOLIDAY LIGHTING SERVICES
            </div>
            <div className="space-y-3 mt-4">
              {servicesData.holiday.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="ue-link-item flex gap-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:translate-x-2 group"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="ue-graphic-element w-10 h-10 bg-brand-accent/10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-brand-accent/20 group-hover:scale-110 flex-shrink-0">
                      <Icon className="text-brand-accent" size={20} />
                    </div>
                    <div className="ue-link-item-content">
                      <div className="ue-link-item-title font-semibold group-hover:text-brand-accent transition">
                        {service.title}
                      </div>
                      <div className="ue-link-item-text text-xs text-gray-500">
                        {service.description}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // About Us Mega Menu
  return (
    <div className="flex px-25 gap-8 animate-fadeInUp">
      {/* Left side - Image */}
      <div className="hidden lg:block w-80 flex-shrink-0">
        <Image
          src="/6007-Nicklaus-Cove18.jpg"
          alt="About Us Dropdown"
          width={1800}
          height={1200}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Right side - About Us links */}
      <div className="flex-1">
        <div className="ue-menu-title font-bold text-brand-primary mb-4 pb-1">
          WHO WE ARE
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aboutData.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                href={item.href}
                className="ue-link-item flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:translate-x-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="ue-graphic-element w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-brand-primary/20 group-hover:scale-110 flex-shrink-0 overflow-visible">
                  <div className="scale-75 origin-center">
                    <Icon className="text-brand-primary" size={48} />
                  </div>
                </div>
                <div className="ue-link-item-content">
                  <div className="ue-link-item-title font-semibold group-hover:text-brand-accent transition">
                    {item.title}
                  </div>
                  <div className="ue-link-item-text text-xs text-gray-500">
                    {item.description}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
