import React from "react";
import useScrollToTarget from "../../hooks/useScrollToTarget";
import MainProfile from "../mainProfile/MainProfile";
import AboutMe from "../aboutMe/AboutMe";
import Career from "../career/Career";
import Project from "../project/Project";
import Education from "../education/Education";
import NavMenu from "../../components/NavMenu";

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
    <div className="bg-[#232323] text-white">
      {/* 상단 전체 너비 영역 */}
      <MainProfile />
      <AboutMe />

      {/* 본문: 2단 구조 */}
      <div className="flex md:flex-row">
        {/* 왼쪽 메뉴 */}
        <div className="w-64 px-4">
          <NavMenu navTabs={navTabs} />
        </div>

        {/* 오른쪽 콘텐츠 */}
        <div className="flex-1 px-4">
          <section id="Career">
            <div
              ref={navTabs[0].targetRef}
              className="min-h-screen pt-20  flex items-center justify-center"
            >
              <h2 className="text-white text-4xl font-bold">Career Section</h2>
            </div>
          </section>

          <section id="Project">
            <div
              ref={navTabs[1].targetRef}
              className="min-h-screen flex items-center justify-center"
            >
              <h2 className="text-white text-4xl font-bold">Project Section</h2>
            </div>
          </section>

          <section id="Education">
            <div
              ref={navTabs[2].targetRef}
              className="min-h-screen flex items-center justify-center"
            >
              <h2 className="text-white text-4xl font-bold">
                Education Section
              </h2>
            </div>
          </section>
          {/* <section id="Project" ref={navTabs[1].targetRef}>
            <Project />
          </section>
          <section id="Education" ref={navTabs[2].targetRef}>
            <Education />
          </section> */}
        </div>
      </div>

      {/* 맨 위로 스크롤 버튼 */}
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
            fill="black"
            d="m5.84 15.41l5.66-5.66l5.66 5.66l-.71.7l-4.95-4.95l-4.95 4.95z"
          />
        </svg>
      </button>
    </div>
  );
}

export default MainPage;
