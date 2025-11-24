import MainProfile from "../mainProfile/MainProfile";
import AboutMe from "../aboutMe/AboutMe";
import Career from "../career/Career";
import ProjectPage from "../project/Project";
import Certification from "../certification/Certification";
import LastPage from "../lastPage/LastPage";
// import Education from "../education/Education";
import useScrollToTarget from "../../hooks/useScrollToTarget";
import NavMenu from "../../components/NavMenu";
import { useEffect, useState } from "react";

function MainPage() {
  const careerSection = useScrollToTarget("Career");
  const projectSection = useScrollToTarget("Project");
  const certificationSection = useScrollToTarget("Certification");
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navTabs = [careerSection, projectSection, certificationSection];

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

  useEffect(() => {
    const checkModalState = () => {
      setIsModalOpen(document.body.classList.contains("modal-open"));
    };

    // MutationObserver를 사용하여 body 클래스 변경 감지
    const observer = new MutationObserver(checkModalState);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // 초기 상태 확인
    checkModalState();

    return () => observer.disconnect();
  }, []);

  // 스크롤에 따라 가장 가까운 섹션에 포커스 설정
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: careerSection.targetRef, setter: careerSection.setIsTarget },
        { ref: projectSection.targetRef, setter: projectSection.setIsTarget },
        {
          ref: certificationSection.targetRef,
          setter: certificationSection.setIsTarget,
        },
      ];

      let closestSection: (typeof sections)[0] | null = null;
      let closestDistance = Infinity;

      sections.forEach((section) => {
        const el = section.ref.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top);

        // 화면 상단에 가까운 섹션 찾기
        if (rect.top <= window.innerHeight * 0.3 && rect.bottom > 0) {
          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = section;
          }
        }
      });

      // 가장 가까운 섹션에만 포커스
      sections.forEach((section) => {
        section.setter(section === closestSection);
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 실행

    return () => window.removeEventListener("scroll", handleScroll);
  }, [careerSection, projectSection, certificationSection]);

  // 페이지 진입 시 초기 포커스 설정
  useEffect(() => {
    const checkInitialFocus = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      // 스크롤이 Career 섹션 이전에 있으면 Career에 포커스
      if (scrollPosition < viewportHeight * 2) {
        careerSection.setIsTarget(true);
        projectSection.setIsTarget(false);
        certificationSection.setIsTarget(false);
      }
    };

    // 약간의 지연 후 초기 상태 확인 (DOM이 완전히 렌더링된 후)
    const timer = setTimeout(checkInitialFocus, 100);
    return () => clearTimeout(timer);
  }, [careerSection, projectSection, certificationSection]);

  return (
    <div className="bg-[#232323] text-white">
      {/* 상단 전체 너비 영역 */}
      <MainProfile />
      <AboutMe />

      {/* 네비게이션 메뉴 */}

      {/* 콘텐츠 영역 */}
      <div className="flex flex-col md:flex-row relative 2xl:max-w-[1600px] 2xl:mx-auto">
        <NavMenu navTabs={navTabs} />
        <div className="flex-1 md:ml-[300px] md:pt-0">
          <section id="Career">
            <div
              ref={careerSection.targetRef}
              className="md:pt-12 px-6 md:px-8 flex items-center justify-center mb-8 md:mb-12"
            >
              <Career />
            </div>
          </section>

          <section id="Project">
            <div ref={projectSection.targetRef} className="min-h-screen">
              <ProjectPage />
            </div>
          </section>

          <section id="Certification">
            <div ref={certificationSection.targetRef} className="min-h-screen">
              <Certification />
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

      {/* 맨 위로 스크롤 버튼 및 소셜 링크 - 첫 페이지를 넘어갔을 때만 표시 */}
      {showScrollButton && (
        <div
          className={`fixed bottom-5 right-5 z-50 flex flex-col gap-3 items-center transition-all duration-300 ${
            isModalOpen
              ? "lg:blur-sm lg:opacity-50 opacity-0 pointer-events-none"
              : ""
          }`}
        >
          {/* GitHub 버튼 */}
          <a
            href="https://github.com/hyr0208"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white w-[50px] h-[50px] flex items-center justify-center rounded-full hover:opacity-80 shadow-lg transition-opacity duration-300"
            aria-label="GitHub로 이동"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="black"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          {/* 이메일 버튼 */}
          <a
            href="mailto:hhyr0208@gmail.com"
            className="bg-white w-[50px] h-[50px] flex items-center justify-center rounded-full hover:opacity-80 shadow-lg transition-opacity duration-300"
            aria-label="이메일 보내기"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>

          {/* 맨 위로 스크롤 버튼 */}
          <button
            className="bg-white w-[50px] h-[50px] flex items-center justify-center font-bold rounded-full hover:opacity-80 shadow-lg transition-opacity duration-300"
            onClick={scrollToTop}
            aria-label="맨 위로"
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
      )}
    </div>
  );
}

export default MainPage;
