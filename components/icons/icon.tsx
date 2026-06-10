import { ReactNode } from "react";

interface IconProps {
  children: ReactNode;
  size?: number;
  className?: string;
}

export const Icon = ({ children, size = 20, className = "" }: IconProps) => (
  <svg
    className={className}
    style={{ width: size, height: size }}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    {children}
  </svg>
);
