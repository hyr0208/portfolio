import React from "react";

type ScrollTarget = {
  targetRef: React.RefObject<HTMLElement | null>;
  scrollToTarget: () => void;
  isTarget: boolean;
  setIsTarget: React.Dispatch<React.SetStateAction<boolean>>;
  targetName: string;
};

function NavMenu({ navTabs }: { navTabs: ScrollTarget[] }) {
  return (
    <nav className="sticky top-20 px-4 py-6">
      <ul className="flex md:flex-col gap-4 md:gap-6 items-start justify-center">
        {navTabs.map((tab) => (
          <li key={tab.targetName}>
            <button
              onClick={tab.scrollToTarget}
              className={`
                text-xl md:text-2xl font-medium transition-opacity
                ${
                  tab.isTarget
                    ? "text-white opacity-100"
                    : "text-white opacity-40 hover:opacity-100"
                }
              `}
            >
              {tab.targetName}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavMenu;
