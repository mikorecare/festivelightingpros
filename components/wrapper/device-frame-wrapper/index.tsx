"use client";

import { ReactNode } from "react";
import { StatusBar } from "./status-bar";

// Types
export type DeviceType = "iphone" | "android" | "generic";
export type DeviceVariant = "light" | "dark" | "premium";

export interface DeviceFrameProps {
  children: ReactNode;
  deviceType?: DeviceType;
  variant?: DeviceVariant;
  width?: number;
  height?: number;
  borderRadius?: number;
  showCamera?: boolean;
  showSilentSwitch?: boolean;
  showHomeIndicator?: boolean;
  screenColor?: string;
  className?: string;
}

const CameraModule = () => (
  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 z-30">
    <div className="relative bg-black/90 rounded-full px-4 py-1.5 flex items-center gap-3 backdrop-blur-sm border border-[#3d3d3d]/30 shadow-lg">
      <div className="absolute top-0 left-3 right-3 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="relative w-5 h-5 rounded-full bg-gradient-to-br from-[#2a2a2a] to-[#0a0a0a] flex items-center justify-center overflow-hidden shadow-inner">
        <div className="w-2.5 h-2.5 bg-gradient-to-br from-[#1a1a1a] to-black rounded-full border border-white/10" />
        <div className="absolute -top-1 -left-1 w-3 h-3 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-[1px]" />
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-gradient-to-tl from-blue-300/20 to-transparent rounded-full blur-[1px]" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 rounded-full border border-white/20" />
      </div>

      <div className="flex items-center gap-1.5">
        {[0.6, 0.5, 0.4].map((opacity, i) => (
          <div key={i} className="relative">
            <div
              className={`w-2 h-2 ${i === 2 ? "w-1.5 h-1.5" : ""} bg-gradient-to-br from-[#4a4a4a] to-[#2a2a2a] rounded-full opacity-${opacity * 100}`}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent" />
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-5 right-5 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute right-0 top-2 bottom-2 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
    </div>
  </div>
);

const SilentSwitch = () => (
  <div className="absolute -left-[8px] top-20 w-[4px] h-7 bg-[#3d3d3d] rounded-l-lg">
    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
  </div>
);

const HomeIndicator = () => (
  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 z-20">
    <div className="absolute inset-0 bg-gray-800/80 rounded-t-full" />
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
    <div className="absolute inset-0 rounded-full shadow-inner shadow-black/20" />
    <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-white/10 rounded-full" />
  </div>
);

const MetallicBody = ({
  children,
  variant,
}: {
  children: ReactNode;
  variant: DeviceVariant;
}) => {
  const baseColors = {
    light: {
      body: "from-[#2a2a2a] to-[#1a1a1a]",
      metal: "from-[#6a6a6a] via-[#4a4a4a] to-[#3a3a3a]",
    },
    dark: {
      body: "from-[#0a0a0a] to-black",
      metal: "from-[#4a4a4a] via-[#2a2a2a] to-[#1a1a1a]",
    },
    premium: {
      body: "from-[#1a1a1a] to-[#0a0a0a]",
      metal: "from-[#5a5a5a] via-[#3a3a3a] to-[#2a2a2a]",
    },
  };

  const colors = baseColors[variant];

  return (
    <>
      <div
        className={`absolute inset-0 bg-gradient-to-br ${colors.body} rounded-[44px]`}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-[44px]" />
        <div className="absolute inset-0 rounded-[44px] ring-1 ring-white/10" />
        <div className="absolute inset-0 rounded-[44px] shadow-inner" />
      </div>

      <div className="absolute inset-0 rounded-[44px] p-[2px]">
        <div
          className={`absolute inset-0 rounded-[44px] bg-gradient-to-b ${colors.metal} opacity-90`}
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, 
              rgba(255,255,255,0.05) 0px, 
              rgba(255,255,255,0.05) 2px,
              rgba(0,0,0,0.1) 2px, 
              rgba(0,0,0,0.1) 4px
            )`,
          }}
        />

        <div className="absolute top-0 left-5 right-5 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-t-full" />
        <div className="absolute bottom-0 left-5 right-5 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-b-full" />
        <div className="absolute left-0 top-5 bottom-5 w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent rounded-l-full" />
        <div className="absolute right-0 top-5 bottom-5 w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent rounded-r-full" />

        <div className="absolute top-0 left-0 w-8 h-8 rounded-tl-[44px] bg-gradient-to-br from-white/30 via-white/10 to-transparent" />
        <div className="absolute top-0 right-0 w-8 h-8 rounded-tr-[44px] bg-gradient-to-bl from-white/30 via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-8 h-8 rounded-bl-[44px] bg-gradient-to-tr from-white/20 via-white/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-8 h-8 rounded-br-[44px] bg-gradient-to-tl from-white/20 via-white/5 to-transparent" />
      </div>

      {children}
    </>
  );
};

const ScreenContent = ({
  children,
  isDarkMode,
  screenColor,
}: {
  children: ReactNode;
  isDarkMode: boolean;
  screenColor?: string;
}) => (
  <div
    className={`absolute inset-0 rounded-[38px] overflow-hidden transition-colors duration-300`}
    style={{
      top: "4px",
      bottom: "4px",
      left: "4px",
      right: "4px",
      backgroundColor: screenColor || (isDarkMode ? "#111827" : "#f9fafb"),
    }}
  >
    <div className="absolute inset-0 shadow-inner pointer-events-none z-10" />

    <div
      className="h-full w-full overflow-y-auto overflow-x-hidden relative"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <StatusBar />
      {children}
    </div>
  </div>
);

// Main Component
export function DeviceFrame({
  children,
  deviceType = "iphone",
  variant = "premium",
  width = 375,
  height = 812,
  borderRadius = 44,
  showCamera = true,
  showSilentSwitch = true,
  showHomeIndicator = true,
  screenColor,
  className = "",
}: DeviceFrameProps) {

  // Device-specific adjustments
  const deviceConfig = {
    iphone: {
      silentSwitch: true,
      camera: true,
      homeIndicator: true,
    },
    android: {
      silentSwitch: false,
      camera: true,
      homeIndicator: false,
    },
    generic: {
      silentSwitch: false,
      camera: false,
      homeIndicator: false,
    },
  };

  const config = deviceConfig[deviceType];

  return (
    <div className={`relative ${className}`}>
      <div
        className="relative shadow-2xl overflow-hidden"
        style={{
          width,
          height,
          borderRadius,
        }}
      >
        <MetallicBody variant={variant}>
          <div className="absolute inset-[2px] bg-[#0a0a0a] rounded-[42px] overflow-hidden">
            <div className="absolute inset-[6px] bg-black rounded-[38px] overflow-hidden">
              {showCamera && config.camera && <CameraModule />}
              {showSilentSwitch && config.silentSwitch && <SilentSwitch />}

              <ScreenContent isDarkMode={false} screenColor={screenColor}>
                {children}
              </ScreenContent>

              {showHomeIndicator && config.homeIndicator && <HomeIndicator />}
            </div>
          </div>
        </MetallicBody>
      </div>

      <style>
        {`
          .overflow-y-auto::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
}
