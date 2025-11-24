import React, { useEffect, useState } from "react";

type ScrollTarget = {
  targetRef: React.RefObject<HTMLElement | null>;
  scrollToTarget: () => void;
  isTarget: boolean;
  setIsTarget: React.Dispatch<React.SetStateAction<boolean>>;
  targetName: string;
};

function NavMenu({ navTabs }: { navTabs: ScrollTarget[] }) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const careerSection = navTabs[0]?.targetRef.current;
      if (careerSection) {
        const rect = careerSection.getBoundingClientRect();
        // Career 섹션이 화면 상단에 도달했을 때 고정
        setIsFixed(rect.top <= 0);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navTabs]);

  return (
    <nav
      className={`${
        isFixed
          ? "fixed top-0 bg-[#232323] px-6 md:px-8 py-3 md:py-6 z-50 transition-all duration-300 ease-in-out md:left-0 2xl:left-[calc((100vw-1600px)/2)]"
          : "relative"
      } w-full md:fixed md:left-0 md:h-screen md:w-[300px] 2xl:left-[calc((100vw-1600px)/2)]`}
    >
      <ul className="flex justify-center md:flex-col gap-4 md:gap-6 items-center md:items-start">
        {navTabs.map((tab) => {
          const displayName =
            tab.targetName === "Career"
              ? "Career"
              : tab.targetName === "Certification"
              ? "Cert."
              : tab.targetName;
          return (
            <li key={tab.targetName}>
              <button
                onClick={tab.scrollToTarget}
                className={`
                  text-2xl md:text-6xl font-medium transition-all duration-300 ease-in-out whitespace-nowrap
                  ${
                    tab.isTarget
                      ? "text-white opacity-100"
                      : "text-white opacity-40 hover:opacity-100"
                  }
                `}
              >
                {displayName}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavMenu;
