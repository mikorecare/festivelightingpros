"use client";

interface RooflineLightIconProps {
  size?: number;
  className?: string;
  fillColor?: string;
  glowIntensity?: number;
}

export const RooflineLightIcon = ({
  size = 8,
  className = "",
  fillColor = "#ff890b",
  glowIntensity = 1,
}: RooflineLightIconProps) => {
  // Convert hex to RGB for glow calculations
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 255, g: 137, b: 11 };
  };

  const rgb = hexToRgb(fillColor);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: "block", margin: 0, padding: 0 }}
    >
      <defs>
        {/* Strong outer glow */}
        <filter id="strongGlow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur
            stdDeviation={`${3 + glowIntensity * 5}`}
            result="blur1"
          />
          <feGaussianBlur
            stdDeviation={`${1 + glowIntensity * 2}`}
            result="blur2"
          />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="blur2" />
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Radial gradient for realistic LED */}
        <radialGradient id="ledGradient" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="20%" stopColor={fillColor} stopOpacity="1" />
          <stop offset="60%" stopColor={fillColor} stopOpacity="0.8" />
          <stop offset="100%" stopColor={fillColor} stopOpacity="0.3" />
        </radialGradient>
      </defs>

      {/* Outer glow circle */}
      <circle
        cx="10"
        cy="10"
        r={size / 1.2}
        fill={fillColor}
        opacity="0.6"
        filter="url(#strongGlow)"
      />

      {/* Medium glow */}
      <circle
        cx="10"
        cy="10"
        r={size / 1.8}
        fill={fillColor}
        opacity="0.4"
        filter="url(#strongGlow)"
      />

      {/* Main LED body */}
      <circle cx="10" cy="10" r={size / 2.5} fill="url(#ledGradient)" />

      {/* White hot center */}
      <circle cx="7.5" cy="7.5" r={size / 6} fill="#ffffff" opacity="0.9" />

      {/* Specular highlight */}
      <ellipse
        cx="6"
        cy="6"
        rx={size / 8}
        ry={size / 12}
        fill="#ffffff"
        opacity="0.7"
        transform="rotate(-45 6 6)"
      />
    </svg>
  );
};
