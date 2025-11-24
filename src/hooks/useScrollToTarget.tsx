import { useEffect, useRef, useState } from "react";

function useScrollToTarget(id: string) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [isTarget, setIsTarget] = useState(false);

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    // 초기 상태 확인
    const checkInitialState = () => {
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const isInViewport = rect.top < viewportHeight * 0.5 && rect.bottom > 0;
      if (isInViewport) {
        setIsTarget(true);
      }
    };

    checkInitialState();

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTarget(entry.isIntersecting);
      },
      {
        root: null,
        threshold: [0.1, 0.5], // 요소가 10%~50% 정도 보일 때 감지
        rootMargin: "-10% 0px", // 화면 상단 부근에서 감지하도록 설정
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [id]);

  const scrollToTarget = () => {
    const el = targetRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const mobileOffset =
      window.innerWidth < 768
        ? Math.max(
            (document.querySelector("nav")?.getBoundingClientRect().height ??
              0) - 16,
            0
          )
        : 0;

    window.scrollTo({
      top: rect.top + scrollTop - mobileOffset,
      behavior: "smooth",
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
