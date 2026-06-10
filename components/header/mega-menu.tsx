import Link from "next/link";
import Image from "next/image";

const servicesData = {
  outdoor: [
    {
      title: "Landscape Lighting",
      description: "Highlight your yard's best features with elegant lighting.",
      icon: "/icons/landscape.svg",
      href: "/landscape-lighting",
    },
    {
      title: "Permanent Lighting",
      description: "Year-round lighting built to last and impress.",
      icon: "/icons/permanent.svg",
      href: "/permanent-lighting",
    },
    {
      title: "Patio Lighting",
      description: "Create a warm, inviting glow for your patio space.",
      icon: "/icons/patio.svg",
      href: "/patio-lighting",
    },
    {
      title: "Special Events",
      description: "Custom lighting setups for weddings, parties, and more.",
      icon: "/icons/events.svg",
      href: "/special-events",
    },
  ],
  holiday: [
    {
      title: "Holiday Outdoor Lighting",
      description: "Dazzling lights for roofs, trees, and yards.",
      icon: "/icons/holiday-outdoor.svg",
      href: "/holiday-outdoor-lighting",
    },
    {
      title: "Holiday Decor",
      description: "Wreaths, garlands, and holiday displays.",
      icon: "/icons/holiday-decor.svg",
      href: "/holiday-decor",
    },
    {
      title: "Holiday Interior",
      description: "Elegant indoor lighting and festive accents.",
      icon: "/icons/holiday-interior.svg",
      href: "/holiday-interior",
    },
  ],
};

const aboutData = [
  {
    title: "About Us",
    description: "Discover who we are and what we stand for.",
    icon: "/icons/about.svg",
    href: "/about-flp",
  },
  {
    title: "Meet the Team",
    description: "Get to know the people behind our work.",
    icon: "/icons/team.svg",
    href: "/about-flp#meet-the-team",
  },
  {
    title: "Testimonials",
    description: "See what our happy clients are saying.",
    icon: "/icons/testimonials.svg",
    href: "/#testimonials",
  },
  {
    title: "Careers",
    description: "Join our team and grow with us.",
    icon: "/icons/careers.svg",
    href: "/careers",
  },
];

export default function MegaMenu({ type }: { type: "services" | "about" }) {
  if (type === "services") {
    return (
      <div className="absolute top-full left-0 mt-2 w-[800px] bg-white shadow-2xl rounded-lg p-6 grid grid-cols-2 gap-6 z-50">
        {/* Outdoor Lighting */}
        <div>
          <h4 className="font-bold text-[#1d3156] mb-3 border-b-2 border-[#ff890b] pb-1">
            OUTDOOR LIGHTING SERVICES
          </h4>
          <div className="space-y-3">
            {servicesData.outdoor.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="flex gap-3 p-2 rounded-lg hover:bg-gray-50 transition group"
              >
                <div className="w-10 h-10 bg-[#ff890b]/10 rounded-lg flex items-center justify-center">
                  <span className="text-[#ff890b] text-xl">💡</span>
                </div>
                <div>
                  <div className="font-semibold group-hover:text-[#ff890b] transition">
                    {service.title}
                  </div>
                  <div className="text-xs text-gray-500">
                    {service.description}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Holiday Lighting */}
        <div>
          <h4 className="font-bold text-[#1d3156] mb-3 border-b-2 border-[#ff890b] pb-1">
            HOLIDAY LIGHTING SERVICES
          </h4>
          <div className="space-y-3">
            {servicesData.holiday.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="flex gap-3 p-2 rounded-lg hover:bg-gray-50 transition group"
              >
                <div className="w-10 h-10 bg-[#ff890b]/10 rounded-lg flex items-center justify-center">
                  <span className="text-[#ff890b] text-xl">🎄</span>
                </div>
                <div>
                  <div className="font-semibold group-hover:text-[#ff890b] transition">
                    {service.title}
                  </div>
                  <div className="text-xs text-gray-500">
                    {service.description}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // About Us Mega Menu
  return (
    <div className="absolute top-full left-0 mt-2 w-[400px] bg-white shadow-2xl rounded-lg p-6 z-50">
      <div className="grid grid-cols-1 gap-3">
        {aboutData.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition group"
          >
            <div className="w-12 h-12 bg-[#1d3156]/10 rounded-full flex items-center justify-center">
              <span className="text-[#1d3156] text-xl">⭐</span>
            </div>
            <div>
              <div className="font-semibold group-hover:text-[#ff890b] transition">
                {item.title}
              </div>
              <div className="text-xs text-gray-500">{item.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
