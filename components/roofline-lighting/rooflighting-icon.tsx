// components/icons/RooflineLightIcon.tsx
"use client";

interface RooflineLightIconProps {
  size?: number;
  className?: string;
  fillColor?: string;
  glow?: boolean;
  glowIntensity?: number;
}

export const RooflineLightIcon = ({
  size = 24,
  className = "",
  fillColor = "#ff890b",
  glow = false,
  glowIntensity = 0.5,
}: RooflineLightIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-1 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: "block", margin: 0, padding: 0 }}
    >
      <defs>
        <filter id="led-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur
            stdDeviation={`${2 + glowIntensity * 4}`}
            result="blur"
          />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Glow circle behind the star */}
      {glow && (
        <circle
          cx="12"
          cy="12"
          r={8 + glowIntensity * 6}
          fill={fillColor}
          opacity={0.2 + glowIntensity * 0.3}
          filter="url(#led-glow)"
        />
      )}

      {/* Star icon path */}
      <path
        d="M2 0 C2.66 0 3.32 0 4 0 C4 2.64 4 5.28 4 8 C4.55429688 7.4946875 5.10859375 6.989375 5.6796875 6.46875 C6.40414063 5.8190625 7.12859375 5.169375 7.875 4.5 C8.59429688 3.8503125 9.31359375 3.200625 10.0546875 2.53125 C12 1 12 1 14 1 C12.33248852 4.94139078 9.77289351 7.7892812 7 11 C9.64 11 12.28 11 15 11 C15 11.66 15 12.32 15 13 C12.36 13 9.72 13 7 13 C7.5053125 13.55429688 8.010625 14.10859375 8.53125 14.6796875 C9.1809375 15.40414063 9.830625 16.12859375 10.5 16.875 C11.1496875 17.59429688 11.799375 18.31359375 12.46875 19.0546875 C14 21 14 21 14 23 C10.05860922 21.33248852 7.2107188 18.77289351 4 16 C4 18.64 4 21.28 4 24 C3.34 24 2.68 24 2 24 C2 21.36 2 18.72 2 16 C1.44570312 16.5053125 0.89140625 17.010625 0.3203125 17.53125 C-0.404140625 18.1809375 -1.12859375 18.830625 -1.875 19.5 C-2.59429688 20.1496875 -3.31359375 20.799375 -4.0546875 21.46875 C-6 23 -6 23 -8 23 C-6.33248852 19.05860922 -3.77289351 16.2107188 -1 13 C-3.64 13 -6.28 13 -9 13 C-9 12.34 -9 11.68 -9 11 C-6.36 11 -3.72 11 -1 11 C-1.5053125 10.44570312 -2.010625 9.89140625 -2.53125 9.3203125 C-3.1809375 8.59585937 -3.830625 7.87140625 -4.5 7.125 C-5.1496875 6.40570312 -5.799375 5.68640625 -6.46875 4.9453125 C-8 3 -8 3 -8 1 C-4.05860922 2.66751148 -1.2107188 5.22710649 2 8 C2 5.36 2 2.72 2 0 Z"
        fill={fillColor}
        transform="translate(10, 0)"
      />
    </svg>
  );
};
