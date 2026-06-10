import { SocialIcon } from "../icons/social-media-icons";

export default function TopBar() {
  return (
    <div className="hidden md:flex bg-[#1d3156] text-white py-2 px-4 md:px-8 justify-between items-center">
      {/* Social Icons - One line! */}
      <div className="flex gap-2">
        <SocialIcon name="facebook" />
        <SocialIcon name="instagram" />
        <SocialIcon name="twitter" />
        <SocialIcon name="youtube" />
        <SocialIcon name="pinterest" />
      </div>

      {/* Welcome Text */}
      <div className="text-sm font-medium">
        Welcome to{" "}
        <span className="relative inline-block font-semibold">
          Festive Lighting Pros
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff890b] animate-pulse"></span>
        </span>
      </div>

      {/* Right Side */}
      <div className="flex gap-6 items-center text-sm">
        <a href="/locations" className="hover:text-[#ff890b] transition">
          📍 Find a Location
        </a>
        <a
          href="tel:18333577767"
          className="bg-[#ff890b] hover:bg-[#e07a00] px-4 py-1.5 rounded-full text-white font-semibold text-xs transition flex items-center gap-2"
        >
          📞 833.FLP.PROS
        </a>
      </div>
    </div>
  );
}
