import React from "react";
import useScrollToTarget from "../../hooks/useScrollToTarget";
import AboutMe from "../aboutMe/AboutMe";
import MainProfile from "../mainProfile/MainProfile";

function MainPage() {
  const navTabs = [
    useScrollToTarget("Career"),
    useScrollToTarget("Project"),
    useScrollToTarget("Education"),
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="">
      <MainProfile />

      <AboutMe />

      <button
        className="fixed bottom-5 right-5 bg-white w-[50px] flex h-[50px] items-center justify-center font-bold rounded-full hover:opacity-80 shadow-lg"
        onClick={scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 24 26"
        >
          <path
            fill="currentColor"
            d="m5.84 15.41l5.66-5.66l5.66 5.66l-.71.7l-4.95-4.95l-4.95 4.95z"
          />
        </svg>
      </button>
    </div>
  );
}

export default MainPage;
