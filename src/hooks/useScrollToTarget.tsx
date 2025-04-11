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
        threshold: [0.3, 0.7], // 요소가 30%~70% 정도 보일 때 감지
        rootMargin: "-20% 0px" // 화면 중앙 부근에서 감지하도록 설정
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
