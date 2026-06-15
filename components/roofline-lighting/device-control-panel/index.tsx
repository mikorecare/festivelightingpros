"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, X } from "lucide-react";
import { DeviceFrame } from "@/components/wrapper/device-frame-wrapper";
import DeviceControlPanelHeader from "./device-control-panel-header";
import { ThemeSelector } from "../components/theme-selector";
import { useThemeUI } from "../contexts/theme-context";
import { memo } from "react";

interface DeviceControlPanelProps {
  isNight: boolean;
  onToggleNight: () => void;
  isMobile?: boolean;
  onClose?: () => void;
}

export const DeviceControlPanel = memo(({
  isNight,
  onToggleNight,
  isMobile = false,
  onClose,
}: DeviceControlPanelProps) => {
  const { isRGBMode } = useThemeUI();

  const ControlsContent = () => (
    <div className="flex flex-col h-full">
      <DeviceControlPanelHeader />
      <div className="flex-1 overflow-y-auto px-4 py-3">
        <ThemeSelector />
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-[#1a1f26] rounded-2xl overflow-hidden max-w-sm w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-800">
              <h3 className="text-lg font-semibold text-white">Smart Controls</h3>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-3">
              <ThemeSelector />
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <DeviceFrame width={320} height={560} variant="premium">
      <ControlsContent />
    </DeviceFrame>
  );
});

DeviceControlPanel.displayName = "DeviceControlPanel";