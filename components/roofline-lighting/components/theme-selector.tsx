"use client";

import { useCallback, memo } from "react";
import { useThemeUI } from "../contexts/theme-context";

export const ThemeSelector = memo(() => {
  const {
    currentThemeKey,
    isRGBMode,
    setTheme,
    toggleRGBMode,
    themes: HOLIDAY_THEMES,
  } = useThemeUI();

  const handleRGBModeToggle = useCallback(() => {
    toggleRGBMode();
  }, [toggleRGBMode]);

  const themeList = Object.entries(HOLIDAY_THEMES).filter(
    ([key]) => key !== "warmwhite",
  );

  return (
    <div className="space-y-4">
      {/* Sticky RGB Mode Toggle Button */}
      <div className="sticky top-0 z-10 bg-white">
        <button
          onClick={handleRGBModeToggle}
          className={`w-full py-3 rounded-lg text-sm font-medium transition-all ${
            isRGBMode
              ? "bg-[#ff890b] text-white hover:bg-[#ff7000]"
              : "bg-gray-700 text-gray-200 hover:bg-gray-600"
          }`}
        >
          {isRGBMode ? "RGB Mode: ON" : "RGB Mode: OFF"}
        </button>
      </div>

      {/* Theme Grid */}
      <div className="grid grid-cols-2 gap-3 max-h-[400px] overflow-y-auto pr-1">
        {/* Warm White Theme */}
        <button
          key="warmwhite"
          onClick={() => setTheme("warmwhite")}
          className={`relative rounded-xl overflow-hidden transition-all ${
            currentThemeKey === "warmwhite"
              ? "ring-2 ring-[#ff890b] ring-offset-2 ring-offset-gray-900 scale-95"
              : "hover:scale-95"
          }`}
        >
          <div className="flex h-16">
            <div className="flex-1 bg-[#ebeeb7]" />
            <div className="flex-1 bg-[#ebeeb7]" />
            <div className="flex-1 bg-[#ebeeb7]" />
          </div>
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="text-white text-xs font-medium text-center px-1">
              Warm White
            </span>
          </div>
          {currentThemeKey === "warmwhite" && (
            <div className="absolute top-2 right-2 w-2 h-2 bg-[#ff890b] rounded-full" />
          )}
        </button>

        {/* All Other Themes */}
        {themeList.map(([key, theme]) => (
          <button
            key={key}
            onClick={() => setTheme(key)}
            className={`relative rounded-xl overflow-hidden transition-all ${
              currentThemeKey === key
                ? "ring-2 ring-[#ff890b] ring-offset-2 ring-offset-gray-900 scale-95"
                : "hover:scale-95"
            }`}
          >
            <div className="flex h-16">
              <div
                className="flex-1"
                style={{ backgroundColor: theme.roof1 }}
              />
              <div
                className="flex-1"
                style={{ backgroundColor: theme.roof2 || theme.roof1 }}
              />
              <div
                className="flex-1"
                style={{ backgroundColor: theme.roof3 || theme.roof1 }}
              />
            </div>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white text-xs font-medium text-center px-1 leading-tight">
                {theme.name}
              </span>
            </div>
            {currentThemeKey === key && (
              <div className="absolute top-2 right-2 w-2 h-2 bg-[#ff890b] rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* RGB Mode Indicator */}
      {isRGBMode && (
        <div className="bg-[#ff890b]/10 border border-[#ff890b]/20 rounded-lg p-2">
          <p className="text-[11px] text-[#ff890b] text-center">
            RGB Mode Active - Colors alternating across roof sections
          </p>
        </div>
      )}
    </div>
  );
});

ThemeSelector.displayName = "ThemeSelector";
