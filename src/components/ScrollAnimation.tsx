import React, { ReactNode } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

export type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "flip-up"
  | "flip-down"
  | "slide-up"
  | "slide-down";

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

const animationStyles: Record<
  AnimationType,
  { initial: string; animate: string }
> = {
  "fade-up": {
    initial: "opacity-0 translate-y-10",
    animate: "opacity-100 translate-y-0",
  },
  "fade-down": {
    initial: "opacity-0 -translate-y-10",
    animate: "opacity-100 translate-y-0",
  },
  "fade-left": {
    initial: "opacity-0 translate-x-10",
    animate: "opacity-100 translate-x-0",
  },
  "fade-right": {
    initial: "opacity-0 -translate-x-10",
    animate: "opacity-100 translate-x-0",
  },
  "zoom-in": {
    initial: "opacity-0 scale-90",
    animate: "opacity-100 scale-100",
  },
  "zoom-out": {
    initial: "opacity-0 scale-110",
    animate: "opacity-100 scale-100",
  },
  "flip-up": {
    initial: "opacity-0 rotate-x-90",
    animate: "opacity-100 rotate-x-0",
  },
  "flip-down": {
    initial: "opacity-0 -rotate-x-90",
    animate: "opacity-100 rotate-x-0",
  },
  "slide-up": {
    initial: "opacity-0 translate-y-20",
    animate: "opacity-100 translate-y-0",
  },
  "slide-down": {
    initial: "opacity-0 -translate-y-20",
    animate: "opacity-100 translate-y-0",
  },
};

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  threshold = 0.1,
  className = "",
}) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold });
  const { initial, animate } = animationStyles[animation];

  return (
    <div
      ref={ref}
      className={`transform transition-all ${isVisible ? animate : initial} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
