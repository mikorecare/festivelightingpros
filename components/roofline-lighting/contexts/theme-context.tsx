"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  ReactNode,
  useEffect,
} from "react";

export const HOLIDAY_THEMES: Record<string, any> = {
  warmwhite: {
    name: "Warm White",
    roof1: "#ebeeb7",
    roof2: "#ebeeb7",
    roof3: "#ebeeb7",
    colors: ["#ebeeb7"],
  },
  halloween: {
    name: "Halloween",
    roof1: "#e98f37",
    roof2: "#af1bb9",
    roof3: "#e98f37",
    colors: ["#e98f37", "#af1bb9"],
  },
  christmas: {
    name: "Christmas",
    roof1: "#FF0000",
    roof2: "#008000",
    roof3: "#FFFFFF",
    colors: ["#FF0000", "#008000", "#FFFFFF", "#FFD700"],
  },
  stpatricks: {
    name: "St. Patrick's Day",
    roof1: "limegreen",
    roof2: "white",
    roof3: "limegreen",
    colors: ["limegreen", "white"],
  },
  fourthOfJuly: {
    name: "4th of July",
    roof1: "red",
    roof2: "white",
    roof3: "blue",
    colors: ["red", "white", "blue"],
  },
  valentinesday: {
    name: "Valentine's Day",
    roof1: "red",
    roof2: "#FFC0CB",
    roof3: "red",
    colors: ["red", "#FFC0CB"],
  },
  easter: {
    name: "Easter",
    roof1: "#FFD1DC",
    roof2: "#87CEEB",
    roof3: "#C8A2C8",
    colors: ["#FFD1DC", "#87CEEB", "#C8A2C8"],
  },
  thanksgiving: {
    name: "Thanksgiving",
    roof1: "#8B4513",
    roof2: "#FFFF00",
    roof3: "#FFA500",
    colors: ["#8B4513", "#FFFF00", "#FFA500", "#FF4500"],
  },
  pride: {
    name: "Pride Month",
    roof1: "#FF0018",
    roof2: "#FFA52C",
    roof3: "#FFFF41",
    colors: ["#FF0018", "#FFA52C", "#FFFF41", "#008018", "#0000F9", "#86007D"],
  },
  aprilfoolsday: {
    name: "April Fools",
    roof1: "#FFFF00",
    roof2: "#FFA500",
    roof3: "#FFFF00",
    colors: ["#FFFF00", "#FFA500"],
  },
  cancerawarenessday: {
    name: "Cancer Awareness",
    roof1: "#95126b",
    roof2: "#ff94a1",
    roof3: "#670046",
    colors: ["#95126b", "#ff94a1", "#670046", "#ff4c6b"],
  },
  cincodemayo: {
    name: "Cinco De Mayo",
    roof1: "green",
    roof2: "white",
    roof3: "red",
    colors: ["green", "white", "red"],
  },
  constitutionday: {
    name: "Constitution Day",
    roof1: "#3C3B6E",
    roof2: "#7F5933",
    roof3: "#B22234",
    colors: ["#3C3B6E", "#7F5933", "#B22234"],
  },
  earthday: {
    name: "Earth Day",
    roof1: "#228B22",
    roof2: "#1E90FF",
    roof3: "#228B22",
    colors: ["#228B22", "#1E90FF"],
  },
  fathersday: {
    name: "Fathers Day",
    roof1: "#0000CD",
    roof2: "#8B4513",
    roof3: "#0000CD",
    colors: ["#0000CD", "#A9A9A9", "#8B4513"],
  },
  frostedpastels: {
    name: "Frosted Pastel",
    roof1: "#FFC0CB",
    roof2: "#FFFFFF",
    roof3: "#575799",
    colors: ["#FFC0CB", "#FFFFFF", "#98FF98", "#575799"],
  },
  hanukkah: {
    name: "Hanukkah",
    roof1: "blue",
    roof2: "white",
    roof3: "blue",
    colors: ["#0038B8", "white", "#C0C0C0"],
  },
  indigenouspeoplesday: {
    name: "Indigenous Peoples Day",
    roof1: "#8B4513",
    roof2: "#D2691E",
    roof3: "#A0522D",
    colors: ["#8B4513", "#D2691E", "#A0522D"],
  },
  juneteenth: {
    name: "Juneteenth",
    roof1: "#FF0000",
    roof2: "#000000",
    roof3: "#008000",
    colors: ["#FF0000", "#000000", "#FFCE1B", "#008000"],
  },
  martinlutherking: {
    name: "Martin Luther King",
    roof1: "blue",
    roof2: "#FFD700",
    roof3: "blue",
    colors: ["#003366", "#FFFFFF", "#FFD700"],
  },
  memorialsday: {
    name: "Memorial Day",
    roof1: "#B22234",
    roof2: "white",
    roof3: "#3C3B6E",
    colors: ["#B22234", "white", "#3C3B6E"],
  },
  mothersday: {
    name: "Mothers Day",
    roof1: "#FFC0CB",
    roof2: "#575799",
    roof3: "#FFDAB9",
    colors: ["#FFC0CB", "#575799", "#FFDAB9"],
  },
  nationalicecreamday: {
    name: "Ice Cream Day",
    roof1: "#B3EBF2",
    roof2: "#FFB6C1",
    roof3: "#98FF98",
    colors: ["#B3EBF2", "#FFB6C1", "#98FF98"],
  },
  nativeamericanheritage: {
    name: "Native American Heritage",
    roof1: "#8B4513",
    roof2: "#40E0D0",
    roof3: "#A0522D",
    colors: ["#422701", "#40E0D0", "#A0522D"],
  },
  newyearseve: {
    name: "New Years Eve",
    roof1: "#FFD700",
    roof2: "white",
    roof3: "#FFD700",
    colors: ["#FFD700", "#C0C0C0"],
  },
  presidentsday: {
    name: "Presidents Day",
    roof1: "red",
    roof2: "white",
    roof3: "blue",
    colors: ["red", "#FFFFFF", "#3C3B6E"],
  },
  winterwonderland: {
    name: "Winter Wonderland",
    roof1: "#AEEFFF",
    roof2: "#2E8B57",
    roof3: "white",
    colors: ["#AEEFFF", "#FFFFFF", "#C0C0C0", "#2E8B57"],
  },
  candycanesweet: {
    name: "Candy Cane",
    roof1: "#FF3366",
    roof2: "#FFB6C1",
    roof3: "#00CED1",
    colors: ["#FF3366", "#FFFFFF", "#00CED1", "#FFB6C1"],
  },
  womenshistorymonth: {
    name: "Women's History Month",
    roof1: "#800080",
    roof2: "#FFFFFF",
    roof3: "#800080",
    colors: ["#800080", "#FFFFFF"],
  },
  womensequalityday: {
    name: "Women's Equality Day",
    roof1: "#FFD700",
    roof2: "#FFFFFF",
    roof3: "#800080",
    colors: ["#FFD700", "#800080", "#FFFFFF"],
  },
  glamgoldandblack: {
    name: "Glam Gold & Black",
    roof1: "#F7E7CE",
    roof2: "#FFD700",
    roof3: "#FFFFF0",
    colors: ["#FFD700", "#F7E7CE", "#000000", "#FFFFF0"],
  },
};

interface UIContextType {
  currentThemeKey: string;
  isRGBMode: boolean;
  themes: Record<string, any>;
  setTheme: (themeKey: string) => void;
  toggleRGBMode: () => void;
}

interface AnimationContextType {
  subscribe: (callback: () => void) => () => void;
  getCurrentColor: (roofNum: number, dotIndex: number) => string;
}

const UIContext = createContext<UIContextType | undefined>(undefined);
const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined,
);

export const useThemeUI = () => {
  const context = useContext(UIContext);
  if (!context) throw new Error("useThemeUI must be used within ThemeProvider");
  return context;
};

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context)
    throw new Error("useAnimation must be used within ThemeProvider");
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentThemeKey, setCurrentThemeKey] = useState("warmwhite");
  const [isRGBMode, setIsRGBMode] = useState(false);
  const [forceCanvasUpdate, setForceCanvasUpdate] = useState(0);

  const animationIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const subscribersRef = useRef<Set<() => void>>(new Set());
  const chaseStepRef = useRef(0);
  const currentThemeRef = useRef(HOLIDAY_THEMES[currentThemeKey]);
  const isRGBModeRef = useRef(isRGBMode);

  useEffect(() => {
    currentThemeRef.current = HOLIDAY_THEMES[currentThemeKey];
  }, [currentThemeKey]);

  useEffect(() => {
    isRGBModeRef.current = isRGBMode;
  }, [isRGBMode]);

  const subscribe = useCallback((callback: () => void) => {
    subscribersRef.current.add(callback);
    return () => {
      subscribersRef.current.delete(callback);
    };
  }, []);

  const notifySubscribers = useCallback(() => {
    subscribersRef.current.forEach((callback) => callback());
  }, []);

  const getCurrentColor = useCallback(
    (roofNum: number, dotIndex: number): string => {
      const theme = currentThemeRef.current;
      const isRGB = isRGBModeRef.current;

      if (isRGB && theme.colors && theme.colors.length > 0) {
        const colorIndex =
          (dotIndex + chaseStepRef.current) % theme.colors.length;
        return theme.colors[colorIndex];
      }

      if (roofNum === 1) return theme.roof1;
      if (roofNum === 2) return theme.roof2;
      return theme.roof3;
    },
    [],
  );

  const setTheme = useCallback(
    (themeKey: string) => {
      if (HOLIDAY_THEMES[themeKey]) {
        if (animationIntervalRef.current) {
          clearInterval(animationIntervalRef.current);
          animationIntervalRef.current = null;
        }
        setCurrentThemeKey(themeKey);
        setIsRGBMode(false);
        chaseStepRef.current = 0;
        isRGBModeRef.current = false;
        setForceCanvasUpdate((prev) => prev + 1);
        notifySubscribers();
      }
    },
    [notifySubscribers],
  );

  const toggleRGBMode = useCallback(() => {
    if (isRGBMode) {
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
        animationIntervalRef.current = null;
      }
      setIsRGBMode(false);
      isRGBModeRef.current = false;
      chaseStepRef.current = 0;
      notifySubscribers();
    } else {
      setIsRGBMode(true);
      isRGBModeRef.current = true;
      chaseStepRef.current = 0;
      notifySubscribers();

      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
      }
      animationIntervalRef.current = setInterval(() => {
        if (isRGBModeRef.current) {
          chaseStepRef.current =
            (chaseStepRef.current + 1) %
            (currentThemeRef.current.colors?.length || 1);
          notifySubscribers();
        }
      }, 200);
    }
  }, [isRGBMode, notifySubscribers]);

  useEffect(() => {
    return () => {
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
      }
    };
  }, []);

  return (
    <UIContext.Provider
      value={{
        currentThemeKey,
        isRGBMode,
        themes: HOLIDAY_THEMES,
        setTheme,
        toggleRGBMode,
      }}
    >
      <AnimationContext.Provider value={{ subscribe, getCurrentColor }}>
        {children}
      </AnimationContext.Provider>
    </UIContext.Provider>
  );
};
