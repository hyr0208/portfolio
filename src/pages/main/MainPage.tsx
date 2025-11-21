import MainProfile from "../mainProfile/MainProfile";
import AboutMe from "../aboutMe/AboutMe";
import Career from "../career/Career";
import ProjectPage from "../project/Project";
import LastPage from "../lastPage/LastPage";
// import Education from "../education/Education";
import useScrollToTarget from "../../hooks/useScrollToTarget";
import NavMenu from "../../components/NavMenu";
import { useEffect, useState } from "react";

function MainPage() {
  const careerSection = useScrollToTarget("Career");
  const projectSection = useScrollToTarget("Project");
  const [showScrollButton, setShowScrollButton] = useState(false);

  const navTabs = [careerSection, projectSection];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      // 첫 페이지(뷰포트 높이)를 넘어갔을 때만 버튼 표시
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      // 스크롤이 뷰포트 높이를 넘어갔을 때 버튼 표시
      setShowScrollButton(scrollPosition > viewportHeight);
    };

    window.addEventListener("scroll", handleScroll);
    // 초기 상태 확인
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#232323] text-white">
      {/* 상단 전체 너비 영역 */}
      <MainProfile />
      <AboutMe />

      {/* 네비게이션 메뉴 */}

      {/* 콘텐츠 영역 */}
      <div className="flex flex-col md:flex-row">
        <NavMenu navTabs={navTabs} />
        <div className="flex-1 md:ml-[300px] pt-16 md:pt-0">
          <section id="Career">
            <div
              ref={careerSection.targetRef}
              className="pt-12 md:pt-20 px-6 md:px-11 flex items-center justify-end mb-12 md:mb-16"
            >
              <Career />
            </div>
          </section>

          <section id="Project">
            <div ref={projectSection.targetRef} className="min-h-screen">
              <ProjectPage />
            </div>
          </section>

          <section id="LastPage">
            <div className="min-h-screen">
              <LastPage />
            </div>
          </section>

          {/* <section id="Education">
            <div
              ref={educationSection.targetRef}
              className="min-h-screen flex items-center justify-center"
            >
              <Education />
            </div>
          </section> */}
        </div>
      </div>

      {/* 맨 위로 스크롤 버튼 - 첫 페이지를 넘어갔을 때만 표시 */}
      {showScrollButton && (
        <button
          className="fixed bottom-5 right-5 bg-white w-[50px] flex h-[50px] items-center justify-center font-bold rounded-full hover:opacity-80 shadow-lg z-50 transition-opacity duration-300"
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
      )}
    </div>
  );
}

export default MainPage;
