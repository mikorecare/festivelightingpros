"use client";

import { Phone } from "lucide-react";
import { SocialIcon } from "../icons/social-media-icons";
import { useEffect, useState } from "react";

export default function TopBar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="hidden md:block bg-elementor-primary">
      <div className="px-4 md:px-8">
        <div className="flex justify-between items-center py-2.5 max-w-7xl mx-auto">
          {/* Social Icons - Left */}
          <div className="flex gap-2">
            <SocialIcon name="facebook" />
            <SocialIcon name="instagram" />
            <SocialIcon name="twitter" />
            <SocialIcon name="youtube" />
            <SocialIcon name="pinterest" />
          </div>

          {/* Welcome Text - Center */}
          <div className="text-center">
            <h6 className="text-white m-0 font-semibold leading-loose">
              Welcome to{" "}
              <span className="relative inline-block">
                <span className="font-bold relative z-10 text-[var(--e-global-color-accent)]">
                  Festive Lighting Pros
                </span>
                {mounted && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    className="absolute bottom-[-2px] left-0 w-full h-5 -z-0"
                    aria-hidden="true"
                  >
                    <path
                      d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"
                      fill="none"
                      stroke="var(--e-global-color-accent)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray="500"
                      strokeDashoffset="500"
                    />
                  </svg>
                )}
              </span>
            </h6>
          </div>

          {/* Right Side - Location & Phone */}
          <div className="flex items-center gap-6">
            <a
              href="/locations"
              className="text-white hover:opacity-80 transition-opacity duration-300 text-xs font-medium whitespace-nowrap"
            >
              Find a Location
            </a>

            <a
              href="tel:18333577767"
              className="inline-flex items-center gap-2 text-white font-bold text-xs transition-colors duration-300 hover:text-[var(--e-global-color-accent)] whitespace-nowrap"
            >
              <Phone size={12} />
              <span>833.FLP.PROS</span>
            </a>
          </div>
        </div>
      </div>

      {/* Add the keyframe animation to global styles - you can put this in your global.css */}
      <style jsx>{`
        @keyframes underline-draw {
          0% {
            stroke-dashoffset: 500;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        svg path {
          animation: underline-draw 2s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}
