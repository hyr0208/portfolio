// components/Tooltip.tsx
import React from "react";

interface TooltipProps {
  children: React.ReactNode;
  text: string;
  position?: "top" | "bottom" | "left" | "right";
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  text,
  position = "top",
}) => {
  return (
    <div className="relative group inline-block">
      {children}
      <div
        className={`
          absolute z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
          text-xs bg-black/60 text-white px-2 py-1 rounded whitespace-nowrap tracking-tight
          ${position === "top" && "bottom-full mb-1 left-1/2 -translate-x-1/2"}
          ${position === "bottom" && "top-full mt-1 left-1/2 -translate-x-1/2"}
          ${position === "left" && "right-full mr-1 top-1/2 -translate-y-1/2"}
          ${position === "right" && "left-full ml-1 top-1/2 -translate-y-1/2"}
        `}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
