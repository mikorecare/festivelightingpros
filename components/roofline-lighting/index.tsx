"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RooflineCanvas } from "./components/roofline-canvass";
import { DeviceControlPanel } from "./device-control-panel";
import { useRooflineLighting } from "./hooks/useRooflineLighting";
import { ThemeProvider, useThemeUI } from "./contexts/theme-context";

function RooflineLightingContent() {
  const {
    isNight,
    imageDimensions,
    containerRef,
    canvasRef,
    hotZones,
    handleToggleNight,
    getTriangleCenter,
    getLEDDotsForZone,
  } = useRooflineLighting();

  const { currentThemeKey, isRGBMode } = useThemeUI();
  const [showMobileControls, setShowMobileControls] = useState(false);

  return (
    <section className="relative w-full bg-gradient-to-br from-[#0a0c10] to-[#14181f] font-poppins overflow-hidden">
      <div className="hidden lg:block">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-12 px-4"
        >
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Smart App-Controlled{" "}
            <span className="text-[#ff890b]">Roofline Lighting</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-3xl mx-auto mt-4">
            Choose from holiday themes and watch your roofline come to life
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-8 pb-12">
          <div className="flex gap-6 items-start">
            <div className="flex-1 my-auto">
              <RooflineCanvas
                isNight={isNight}
                imageDimensions={imageDimensions}
                containerRef={containerRef}
                canvasRef={canvasRef}
                getTriangleCenter={getTriangleCenter}
                getLEDDotsForZone={getLEDDotsForZone}
                hotZones={hotZones}
                isMobile={false}
              />
            </div>
            <div className="w-[320px] flex-shrink-0">
              <DeviceControlPanel
                isNight={isNight}
                onToggleNight={handleToggleNight}
                isMobile={false}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div className="text-center py-10 px-4">
          <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight">
            Smart App-Controlled{" "}
            <span className="text-[#ff890b]">Roofline Lighting</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mt-3">
            Tap the image to open controls
          </p>
        </div>

        <div className="px-4 pb-8">
          <div
            className="relative w-full aspect-[16/9] bg-black/50 rounded-xl overflow-hidden shadow-lg border border-white/10 cursor-pointer"
            onClick={() => setShowMobileControls(true)}
          >
            <RooflineCanvas
              isNight={isNight}
              imageDimensions={imageDimensions}
              containerRef={containerRef}
              canvasRef={canvasRef}
              getTriangleCenter={getTriangleCenter}
              getLEDDotsForZone={getLEDDotsForZone}
              hotZones={hotZones}
              isMobile={true}
            />
            <div className="absolute bottom-2 left-2 right-2 bg-black/50 backdrop-blur-sm rounded-lg p-2 text-center">
              <div className="text-white text-xs">
                Theme: {currentThemeKey} {isRGBMode ? "• RGB Mode" : ""}
              </div>
            </div>
          </div>
        </div>

        {showMobileControls && (
          <DeviceControlPanel
            isNight={isNight}
            onToggleNight={handleToggleNight}
            isMobile={true}
            onClose={() => setShowMobileControls(false)}
          />
        )}
      </div>
    </section>
  );
}

export default function RooflineLighting() {
  return (
    <ThemeProvider>
      <RooflineLightingContent />
    </ThemeProvider>
  );
}
