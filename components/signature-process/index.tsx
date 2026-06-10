"use client";

import Image from "next/image";

const steps = [
  {
    title: "Design",
    description:
      "Your lighting vision begins with a free design consultation. Time to spark your imagination.",
    icon: "/signature-process/Process_Design-Icon.png",
  },
  {
    title: "Install",
    description:
      "Our trained installers bring their professional expertise, knowledge, and equipment to do the job right.",
    icon: "/signature-process/Install_Icon.png",
  },
  {
    title: "Maintain",
    description:
      "Your lights are monitored either on site or remotely to ensure they are in proper working order.",
    icon: "/signature-process/Maintain_Icon.png",
  },
];

export default function SignatureProcess() {
  return (
    <div className="w-full bg-white relative overflow-hidden">
      {/* Swoosh Background */}
      <div className="absolute top-0 left-0 w-full opacity-10 pointer-events-none">
        <Image
          src="/signature-process/Swoosh-dark.png"
          alt=""
          width={1920}
          height={400}
          className="w-full h-auto object-cover pt-3"
          priority
        />
      </div>

      <div className="relative z-10 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Top Title */}
          <div className="text-center mb-2">
            <h2 className="text-brand-primary text-lg md:text-xl font-semibold tracking-wider">
              TRANSFORMING SPACES WITH LIGHT
            </h2>
          </div>

          {/* Main Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-accent">
              OUR SIGNATURE PROCESS
            </h2>
          </div>

          {/* Steps with connecting lines */}
          <div className="relative flex flex-col md:flex-row justify-between items-stretch gap-8 md:gap-4">
            {/* Connecting Line - Desktop */}
            <div
              className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-brand-accent/30"
              style={{
                width: "calc(100% - 4rem)",
                margin: "0 auto",
                left: "2rem",
                right: "2rem",
              }}
            />

            {steps.map((step, index) => (
              <div key={index} className="flex-1 text-center relative">
                {/* Icon */}
                <div className="flex justify-center mb-6 relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-brand-primary/10 rounded-full flex items-center justify-center relative z-10 bg-white">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={60}
                      height={60}
                      className="w-12 h-12 md:w-20 md:h-20 object-contain"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-brand-primary mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile connecting lines (vertical) */}
          <div className="md:hidden flex flex-col items-center mt-4">
            {steps.slice(0, -1).map((_, index) => (
              <div key={index} className="w-0.5 h-8 bg-brand-accent/30 my-2" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
