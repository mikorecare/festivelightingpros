
'use client';
import { motion } from "framer-motion";

export function StatusBar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="sticky  top-0 h-15 z-20 text-black px-4 bg-white pt-6 flex justify-between items-center text-xs"
    >
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <SignalIcon />
        <WifiIcon />
        <BatteryIcon />
      </div>
    </motion.div>
  );
}

const SignalIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 13h2v4H2v-4zm4-3h2v7H6v-7zm4-3h2v10h-2V7zm4-3h2v13h-2V4z" />
  </svg>
);

const WifiIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 16a2 2 0 110-4 2 2 0 010 4zm0-8a6 6 0 00-4.95 2.55L6.7 12.2a4 4 0 016.6 0l1.65-1.65A6 6 0 0010 8z" />
  </svg>
);

const BatteryIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
    <path d="M4 6h12v8H4V6zm13-2v12H3V4h14zm-1 2H4v8h12V6z" />
  </svg>
);
