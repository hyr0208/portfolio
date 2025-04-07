import { useEffect, useRef, useState } from "react";

function useScrollToTarget(id: string) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [isTarget, setIsTarget] = useState(false);

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTarget(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.6, // 최소 60% 보여야 감지
        rootMargin: "-30% 0px -30% 0px", // 위아래 30% 여유
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [id]);

  const scrollToTarget = () => {
    targetRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center", // 화면 중앙으로 오게
    });
  };

  return {
    targetRef,
    scrollToTarget,
    isTarget,
    setIsTarget,
    targetName: id,
  };
}

export default useScrollToTarget;
