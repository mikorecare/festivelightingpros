"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 20,
      duration: 0.5,
    },
  },
};

export default function ServicesGrid() {
  return (
    <div className="w-full bg-[var(--e-global-color-primary)] py-2 pb-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-2"
      >
        <h4 className="uppercase text-white text-lg md:text-xl font-medium tracking-[1.5px]">
          Start Your Outdoor Lighting Design Ideas Here
        </h4>
      </motion.div>

      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap w-full justify-between items-center py-2 gap-4 md:gap-6"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    type: "spring" as const,
                    stiffness: 400,
                    damping: 17,
                  }}
                >
                  <Link
                    href={service.href}
                    className="group flex flex-row gap-2 items-center text-center transition-colors duration-300"
                  >
                    <Icon
                      className="text-gray-800 w-10 h-10 md:w-15 md:h-15 transition-all duration-300 group-hover:text-brand-accent"
                      size={32}
                    />
                    <span className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-brand-accent transition-colors duration-300 whitespace-nowrap">
                      {service.title}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
