"use client";

import { RefObject, useMemo, useEffect, useState, JSX } from "react";
import Image from "next/image";
import { useAnimation, useThemeUI } from "../contexts/theme-context";

interface RooflineCanvasProps {
  isNight: boolean;
  imageDimensions: { width: number; height: number };
  containerRef: RefObject<HTMLDivElement | null>;
  canvasRef: RefObject<HTMLDivElement | null>;
  getTriangleCenter: (points: number[][]) => { x: number; y: number };
  getLEDDotsForZone: (points: number[][]) => Array<{ x: number; y: number }>;
  hotZones: any[];
  isMobile?: boolean;
}

export const RooflineCanvas = ({
  isNight,
  containerRef,
  canvasRef,
  getLEDDotsForZone,
  hotZones,
  isMobile = false,
}: RooflineCanvasProps) => {
  const { currentThemeKey } = useThemeUI();
  const { subscribe, getCurrentColor } = useAnimation();
  const [updateTrigger, setUpdateTrigger] = useState(0);

  const currentImage = isNight
    ? "/rooflighting/night.jpg"
    : "/rooflighting/day.jpg";

  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setUpdateTrigger(prev => prev + 1);
    });
    return unsubscribe;
  }, [subscribe]);

  useEffect(() => {
    setUpdateTrigger(prev => prev + 1);
  }, [currentThemeKey]);

  const getRoofNumberFromZone = (zoneId: string): number => {
    const zoneMap: Record<string, number> = {
      roofline_left: 1,
      roofline_center: 2,
      roofline_right: 3,
    };
    return zoneMap[zoneId] || 1;
  };

  const ledElements = useMemo(() => {
    const elements: JSX.Element[] = [];

    hotZones.forEach((zone) => {
      if (zone.type === "polygon" && zone.points) {
        const ledDots = getLEDDotsForZone(zone.points);
        const roofNum = getRoofNumberFromZone(zone.id);
        
        const points = zone.points
          .map((p: number[]) => `${p[0] * 100}% ${p[1] * 100}%`)
          .join(", ");

        elements.push(
          <polygon
            key={`line-${zone.id}`}
            points={points}
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="0.3"
            strokeDasharray="1,2"
          />
        );

        ledDots.forEach((dot, idx) => {
          if (isMobile && idx % 2 !== 0) return;
          
          const color = getCurrentColor(roofNum, idx);
          const cx = `${dot.x * 100}%`;
          const cy = `${dot.y * 100}%`;
          
          elements.push(
            <g key={`led-${zone.id}-${idx}`}>
              <circle
                cx={cx}
                cy={cy}
                r="0.75%"
                fill={color}
                opacity="0.4"
                filter="url(#simpleGlow)"
              />
              <circle
                cx={cx}
                cy={cy}
                r="0.4%"
                fill={color}
                opacity="0.95"
              />
              <circle
                cx={`${dot.x * 100 - 0.08}%`}
                cy={`${dot.y * 100 - 0.08}%`}
                r="0.12%"
                fill="#ffffff"
                opacity="0.8"
              />
            </g>
          );
        });
      }
    });

    return elements;
  }, [hotZones, getLEDDotsForZone, getCurrentColor, isMobile, updateTrigger]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/9] bg-black/50 rounded-xl overflow-hidden shadow-2xl border border-white/10"
    >
      <div ref={canvasRef} className="relative w-full h-full">
        <Image
          src={currentImage}
          alt="Roofline lighting preview"
          fill
          className="object-cover transition-opacity duration-500"
          priority
          loading="eager"
        />
        
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <filter id="simpleGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {ledElements}
        </svg>
      </div>
    </div>
  );
};