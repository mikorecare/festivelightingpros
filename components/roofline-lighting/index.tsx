"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useHotZones } from "./hooks/useHotZones";
import { RooflineLightIcon } from "./rooflighting-icon";
import { DeviceFrame } from "@/components/wrapper/device-frame-wrapper";
import { Moon, Sun, X } from "lucide-react";

export default function RooflineLighting() {
  const [activeZone, setActiveZone] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isNight, setIsNight] = useState(true);
  const [showDevice, setShowDevice] = useState(false);
  const [brightness, setBrightness] = useState(80);
  const [selectedColor, setSelectedColor] = useState("#ff890b");
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const hotZones = useHotZones();

  const colorPresets = [
    { name: "Orange", value: "#ff890b" },
    { name: "Red", value: "#ff0000" },
    { name: "Green", value: "#00ff00" },
    { name: "Blue", value: "#0000ff" },
    { name: "Purple", value: "#ff00ff" },
    { name: "White", value: "#ffffff" },
    { name: "Cyan", value: "#00ffff" },
    { name: "Pink", value: "#ff69b4" },
  ];

  const getPointsAlongLine = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    numPoints: number,
  ) => {
    const points = [];
    for (let i = 0; i <= numPoints; i++) {
      const t = i / numPoints;
      const x = x1 + (x2 - x1) * t;
      const y = y1 + (y2 - y1) * t;
      points.push({ x, y });
    }
    return points;
  };

  const getLEDDotsForZone = (points: number[][]) => {
    const [p1, p2, p3] = points;
    const dotsPerEdge = 8;

    const edge1 = getPointsAlongLine(p1[0], p1[1], p2[0], p2[1], dotsPerEdge);
    const edge2 = getPointsAlongLine(p2[0], p2[1], p3[0], p3[1], dotsPerEdge);
    const edge3 = getPointsAlongLine(p3[0], p3[1], p1[0], p1[1], dotsPerEdge);

    return [...edge1, ...edge2, ...edge3];
  };

  const isPointInTriangle = (
    px: number,
    py: number,
    ax: number,
    ay: number,
    bx: number,
    by: number,
    cx: number,
    cy: number,
  ) => {
    const sign = (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      x3: number,
      y3: number,
    ) => (x1 - x3) * (y2 - y3) - (x2 - x3) * (y1 - y3);

    const d1 = sign(px, py, ax, ay, bx, by);
    const d2 = sign(px, py, bx, by, cx, cy);
    const d3 = sign(px, py, cx, cy, ax, ay);

    const hasNeg = d1 < 0 || d2 < 0 || d3 < 0;
    const hasPos = d1 > 0 || d2 > 0 || d3 > 0;

    return !(hasNeg && hasPos);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !imageDimensions.width) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    let hoveredId: string | null = null;

    for (const zone of hotZones) {
      if (zone.type === "polygon" && zone.points) {
        const [p1, p2, p3] = zone.points;
        const inside = isPointInTriangle(
          x,
          y,
          p1[0],
          p1[1],
          p2[0],
          p2[1],
          p3[0],
          p3[1],
        );
        if (inside) {
          hoveredId = zone.id;
          break;
        }
      }
    }

    setActiveZone(hoveredId);
  };

  const handleCanvasClick = () => {
    setShowDevice(!showDevice);
  };

  const getTriangleCenter = (points: number[][]) => {
    const centerX = (points[0][0] + points[1][0] + points[2][0]) / 3;
    const centerY = (points[0][1] + points[1][1] + points[2][1]) / 3;
    return { x: centerX, y: centerY };
  };

  const currentImage = isNight
    ? "/rooflighting/night.jpg"
    : "/rooflighting/day.jpg";

  const getLedColor = () => {
    if (!isNight) return "#333333";

    const r = parseInt(selectedColor.slice(1, 3), 16);
    const g = parseInt(selectedColor.slice(3, 5), 16);
    const b = parseInt(selectedColor.slice(5, 7), 16);

    const brightnessFactor = brightness / 100;
    const newR = Math.floor(r * brightnessFactor);
    const newG = Math.floor(g * brightnessFactor);
    const newB = Math.floor(b * brightnessFactor);

    return `rgb(${newR}, ${newG}, ${newB})`;
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const handleBrightnessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrightness(parseInt(e.target.value));
  };

  const handleToggleNight = () => {
    setIsNight(!isNight);
  };

  // Shared LED overlay component for both desktop and mobile
  const LEDOverlay = () => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {hotZones.map((zone) => {
        if (zone.type === "polygon" && zone.points) {
          const ledDots = getLEDDotsForZone(zone.points);
          const isActive = activeZone === zone.id;
          const ledColor = getLedColor();

          return (
            <g key={`led-${zone.id}`}>
              {/* Connecting lines */}
              <polygon
                points={zone.points
                  .map((p) => `${p[0] * 100}% ${p[1] * 100}%`)
                  .join(", ")}
                fill="none"
                stroke={
                  isNight
                    ? `rgba(${parseInt(selectedColor.slice(1, 3), 16)}, ${parseInt(selectedColor.slice(3, 5), 16)}, ${parseInt(selectedColor.slice(5, 7), 16)}, 0.3)`
                    : "rgba(85, 85, 85, 0.3)"
                }
                strokeWidth="1"
                strokeDasharray="4, 4"
              />

              {/* LED Icons */}
              {ledDots.map((dot, idx) => (
                <foreignObject
                  key={`${zone.id}-dot-${idx}`}
                  x={`${dot.x * 100 - 1}%`}
                  y={`${dot.y * 100 - 1}%`}
                  width="24"
                  height="24"
                  style={{ overflow: "visible" }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <RooflineLightIcon size={8} fillColor={ledColor} />
                  </div>
                </foreignObject>
              ))}
            </g>
          );
        }
        return null;
      })}
    </svg>
  );

  return (
    <section className="relative w-full bg-gradient-to-br from-[#0a0c10] to-[#14181f] font-poppins overflow-hidden">
      {/* Desktop Layout */}
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
            Explore endless color possibilities with just a tap. Try out
            different lighting combinations in real time and discover the
            perfect look for every occasion.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto px-8 pb-12">
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/9] bg-black/50 rounded-xl overflow-hidden shadow-2xl border border-white/10 cursor-pointer"
            onMouseMove={handleMouseMove}
            onClick={handleCanvasClick}
          >
            <h2 className="text-white p-2">Click or Tap on the image</h2>
            <div ref={canvasRef} className="relative w-full h-full">
              <Image
                src={currentImage}
                alt="Roofline lighting preview"
                fill
                className="object-cover transition-opacity duration-500"
                onLoad={(e) => {
                  const img = e.target as HTMLImageElement;
                  setImageDimensions({
                    width: img.naturalWidth,
                    height: img.naturalHeight,
                  });
                  setImageLoaded(true);
                }}
                priority
              />

              <LEDOverlay />

              {activeZone && (
                <div
                  className="absolute z-20 pointer-events-none"
                  style={{
                    left: `${getTriangleCenter(hotZones.find((z) => z.id === activeZone)!.points!).x * 100}%`,
                    top: `${getTriangleCenter(hotZones.find((z) => z.id === activeZone)!.points!).y * 100 - 20}%`,
                    transform: "translate(0,0)",
                  }}
                >
                  <div className="bg-black/90 backdrop-blur-sm border border-[#ff890b]/50 rounded-lg px-4 py-2 shadow-lg">
                    <div className="text-[#ff890b] text-xs font-bold tracking-wider">
                      {hotZones.find((z) => z.id === activeZone)?.name}
                    </div>
                  </div>
                </div>
              )}

              {/* Device Frame INSIDE Canvas - Bottom Right */}
              <AnimatePresence>
                {showDevice && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="absolute bottom-4 right-4 z-30"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowDevice(false);
                        }}
                        className="absolute -top-2 -right-2 z-50 w-6 h-6 bg-black/80 rounded-full flex items-center justify-center hover:bg-black transition-colors border border-white/20"
                      >
                        <X className="w-3 h-3 text-white" />
                      </button>

                      <DeviceFrame width={320} height={550} variant="premium">
                        <div className="p-4 space-y-4">
                          <h3 className="text-lg font-bold text-brand-accent">
                            Smart Controls
                          </h3>

                          <div className="space-y-2">
                            <label className="text-sm text-gray-700">
                              Lighting Mode
                            </label>
                            <button
                              onClick={handleToggleNight}
                              className={`relative w-full h-12 rounded-full transition-all duration-300 ${
                                isNight ? "bg-[#ff890b]" : "bg-gray-600"
                              }`}
                            >
                              <span
                                className={`absolute top-1 w-10 h-10 bg-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center z-10 ${
                                  isNight ? "right-1" : "left-1"
                                }`}
                              >
                                {isNight ? (
                                  <Moon size={18} />
                                ) : (
                                  <Sun size={18} />
                                )}
                              </span>
                              <span className="absolute inset-0 flex items-center justify-between px-4 text-white text-sm font-bold">
                                <span>NIGHT</span>
                                <span>DAY</span>
                              </span>
                            </button>
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm text-gray-700">
                              Color Presets
                            </label>
                            <div className="grid grid-cols-4 gap-2">
                              {colorPresets.map((color) => (
                                <button
                                  key={color.value}
                                  onClick={() => handleColorSelect(color.value)}
                                  className={`w-10 h-10 rounded-full transition-all duration-200 ${
                                    selectedColor === color.value
                                      ? "ring-2 ring-white scale-110 border-2 border-black"
                                      : "border border-black/30 hover:scale-105"
                                  }`}
                                  style={{ backgroundColor: color.value }}
                                  title={color.name}
                                />
                              ))}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm text-gray-700">
                              Brightness: {brightness}%
                            </label>
                            <input
                              type="range"
                              min="0"
                              max="100"
                              value={brightness}
                              onChange={handleBrightnessChange}
                              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#ff890b]"
                              onClick={(e) => e.stopPropagation()}
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm text-gray-700">
                              Current Color
                            </label>
                            <div className="flex items-center gap-3">
                              <div
                                className="w-10 h-10 rounded-full border-2 border-gray"
                                style={{ backgroundColor: selectedColor }}
                              />
                              <span className="text-white text-sm">
                                {selectedColor}
                              </span>
                            </div>
                          </div>
                        </div>
                      </DeviceFrame>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - NOW WITH LED OVERLAY */}
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
            onClick={() => setShowDevice(true)}
          >
            <Image
              src={currentImage}
              alt="Roofline preview"
              fill
              className="object-cover"
            />

            {/* LED Overlay on mobile too! */}
            {imageLoaded && <LEDOverlay />}

            {/* Mobile indicator */}
            <div className="absolute bottom-2 left-2 right-2 bg-black/50 backdrop-blur-sm rounded-lg p-2 text-center">
              <div className="flex items-center justify-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: isNight ? selectedColor : "#333" }}
                />
                <span className="text-white text-xs">
                  {isNight ? `Lights ON (${brightness}%)` : "Lights OFF"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Controls Modal */}
        <AnimatePresence>
          {showDevice && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setShowDevice(false)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-[#1a1f26] rounded-2xl p-6 max-w-sm w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-white">
                    Smart Controls
                  </h3>
                  <button onClick={() => setShowDevice(false)}>
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>

                <div className="space-y-2 mb-4">
                  <label className="text-sm text-gray-300">Lighting Mode</label>
                  <button
                    onClick={handleToggleNight}
                    className={`relative w-full h-12 rounded-full transition-all duration-300 ${
                      isNight ? "bg-[#ff890b]" : "bg-gray-600"
                    }`}
                  >
                    <span
                      className={`absolute top-1 w-10 h-10 bg-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center ${
                        isNight ? "right-1" : "left-1"
                      }`}
                    >
                      {isNight ? <Moon size={18} /> : <Sun size={18} />}
                    </span>
                    <span className="absolute inset-0 flex items-center justify-between px-4 text-white text-sm font-bold">
                      <span>NIGHT</span>
                      <span>DAY</span>
                    </span>
                  </button>
                </div>

                <div className="space-y-2 mb-4">
                  <label className="text-sm text-gray-300">Color Presets</label>
                  <div className="grid grid-cols-4 gap-2">
                    {colorPresets.map((color) => (
                      <button
                        key={color.value}
                        onClick={() => handleColorSelect(color.value)}
                        className={`w-12 h-12 rounded-full transition-all duration-200 ${
                          selectedColor === color.value
                            ? "ring-2 ring-white scale-110 border-2 border-black"
                            : "border border-black/30 hover:scale-105"
                        }`}
                        style={{ backgroundColor: color.value }}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-300">
                    Brightness: {brightness}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={brightness}
                    onChange={handleBrightnessChange}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#ff890b]"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
