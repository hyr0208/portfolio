import MainProfile from "../mainProfile/MainProfile";
import AboutMe from "../aboutMe/AboutMe";
import Career from "../career/Career";
import Project from "../project/Project";
import Education from "../education/Education";
import useScrollToTarget from "../../hooks/useScrollToTarget";
import NavMenu from "../../components/NavMenu";

function MainPage() {
  const careerSection = useScrollToTarget("Career");
  const projectSection = useScrollToTarget("Project");
  const educationSection = useScrollToTarget("Education");

  const navTabs = [careerSection, projectSection, educationSection];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#232323] text-white">
      {/* 상단 전체 너비 영역 */}
      <MainProfile />
      <AboutMe />

      {/* 네비게이션 메뉴 */}

      {/* 콘텐츠 영역 */}
      <div className="flex">
        <NavMenu navTabs={navTabs} />
        <div className="flex-1 md:ml-[300px]">
          <section id="Career">
            <div
              ref={careerSection.targetRef}
              className="pt-20 px-11 flex items-center justify-end"
            >
              <Career />
            </div>
          </section>

          <section id="Project">
            <div
              ref={projectSection.targetRef}
              className="min-h-screen"
            >
              <Project />
            </div>
          </section>

          <section id="Education">
            <div
              ref={educationSection.targetRef}
              className="min-h-screen flex items-center justify-center"
            >
              <Education />
            </div>
          </section>
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
