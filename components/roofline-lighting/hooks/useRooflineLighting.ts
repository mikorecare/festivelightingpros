"use client";

import { useState, useEffect, useRef } from "react";
import { useHotZones } from "./useHotZones";

export const useRooflineLighting = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isNight, setIsNight] = useState(true);
    const [brightness, setBrightness] = useState(80);
    const [selectedColor, setSelectedColor] = useState("#ff890b");
    const [imageDimensions, setImageDimensions] = useState({
        width: 0,
        height: 0,
    });

    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLDivElement>(null);
    const hotZones = useHotZones();

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
        // Increased from 8 to 15 dots per edge for closer spacing
        const dotsPerEdge = 15;

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

    const getTriangleCenter = (points: number[][]) => {
        const centerX = (points[0][0] + points[1][0] + points[2][0]) / 3;
        const centerY = (points[0][1] + points[1][1] + points[2][1]) / 3;
        return { x: centerX, y: centerY };
    };

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

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageDimensions({
                width: img.width,
                height: img.height,
            });
            setImageLoaded(true);
        };
        img.src = isNight ? "/rooflighting/night.jpg" : "/rooflighting/day.jpg";
    }, [isNight]);

    return {
        imageLoaded,
        isNight,
        brightness,
        selectedColor,
        imageDimensions,
        containerRef,
        canvasRef,
        hotZones,
        handleToggleNight,
        handleColorSelect,
        handleBrightnessChange,
        getLedColor,
        getTriangleCenter,
        getLEDDotsForZone,
        isPointInTriangle,
        setImageLoaded,
    };
};