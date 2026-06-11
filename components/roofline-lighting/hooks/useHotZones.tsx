"use client";

export interface HotZone {
  id: string;
  name: string;
  type: "polygon" | "circle";
  points?: number[][];
  cx?: number;
  cy?: number;
  r?: number;
  onClick?: () => void;
}

export const useHotZones = () => {
  const hotZones: HotZone[] = [
    {
      id: "roofline_left",
      name: "Roofline Left",
      type: "polygon",
      points: [
        [0.085, 0.46],
        [0.27, 0.27],
        [0.47, 0.465],
      ],
    },
    {
      id: "roofline_center",
      name: "Roofline Center",
      type: "polygon",
      points: [
        [0.4, 0.39],
        [0.555, 0.235],
        [0.713, 0.39],
      ],
    },
    {
      id: "roofline_right",
      name: "Roofline Right",
      type: "polygon",
      points: [
        [0.61, 0.4807],
        [0.765, 0.33],
        [0.92, 0.485],
      ],
    },
  ];

  return hotZones;
};
