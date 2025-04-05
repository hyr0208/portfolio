import React, { useEffect, useState } from "react";

type ScrollTarget = {
  targetRef: React.RefObject<HTMLElement | null>;
  scrollToTarget: () => void;
  isTarget: boolean;
  setIsTarget: React.Dispatch<React.SetStateAction<boolean>>;
  targetName: string;
};

function NavMenu({ navTabs }: { navTabs: ScrollTarget[] }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("menu-trigger");

    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px 0px -90% 0px", // 화면 하단 기준 거의 올라왔을 때 감지
        threshold: 0,
      }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, []);

  return (
    <nav
      className={`
        fixed z-50 
        top-4 w-full justify-center
        flex gap-6 
        transition-all duration-700 ease-in-out transform

        md:top-20 md:left-16 md:w-auto md:flex-col
        ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
      `}
    >
      {navTabs.map((tab) => (
        <button
          key={tab.targetName}
          onClick={tab.scrollToTarget}
          className="text-2xl md:text-4xl font-semibold text-white opacity-70 hover:opacity-100 transition-opacity"
        >
          {tab.targetName}
        </button>
      ))}
    </nav>
  );
}

export default NavMenu;
