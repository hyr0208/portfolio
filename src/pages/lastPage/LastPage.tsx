import BackGroundImage from "../../assets/image/front_bg.jpg";
import { useEffect, useState } from "react";
import Tooltip from "../../components/ToolTip";

function LastPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // 스크롤이 거의 맨 아래에 도달했을 때만 표시
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="relative h-screen overflow-hidden">
        <img
          src={BackGroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* 메인 콘텐츠 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {/* Thank You 메시지 */}
          <div className="mb-6 md:mb-8 relative">
            <p className="text-[60px] sm:text-[80px] md:text-[120px] lg:text-[150px] text-white/90 font-normal tracking-tight leading-none mb-2 md:mb-4">
              Thank You
            </p>
            <p className="absolute top-[60%] left-1/2 -translate-x-1/2 text-[18px] sm:text-[22px] md:text-[40px] lg:text-[50px] text-black font-normal leading-none whitespace-nowrap">
              봐주셔서 감사합니다 :)
            </p>
          </div>

          {/* 설명 텍스트 */}
          <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto mb-8 md:mb-12 px-4 sm:px-6">
            <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              프론트엔드 개발자로 성장하기 위해 낯선 기술에도 적극적으로 도전하고, <br className="hidden sm:block"/>
              항상 사용자의 관점에서 생각하며 사용하기 좋은 서비스를 만들고 싶습니다.
            </p>
          </div>

          {/* 버튼들 */}
          <div className="flex gap-4 sm:gap-6 mb-8 md:mb-12">
          <Tooltip text="GitHub로 이동" position="bottom">
            <a
              href="https://github.com/hyr0208"
              className="relative flex gap-1 items-center flex-col z-20 font-normal py-1 px-2 text-sm sm:text-base transition-all ease-in-out duration-[0.3s] hover:text-[#fff] text-black after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:z-[-1] after:w-full after:h-1 after:bg-black after:block after:transition-all after:ease-in-out after:duration-[0.3s] hover:after:h-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Tooltip>
          </div>

          {/* 푸터 */}
          <div className="fixed bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 text-center text-gray-400 text-xs sm:text-sm px-4">
            <p className="mb-1 leading-tight">Copyright 2025. hanyerin all rights reserved.</p>
            <p className="hidden sm:block leading-tight">React, Tailwind CSS 기반으로 제작된 사이트입니다.</p>
            <p className="sm:hidden leading-tight">React, Tailwind CSS 기반으로 제작된 사이트입니다.</p>
          </div>
        </div>

        {/* 맨 위로 스크롤 버튼 */}
        <button
          className="fixed bottom-3 sm:bottom-5 right-3 sm:right-5 bg-white w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex items-center justify-center font-bold rounded-full hover:opacity-80 shadow-lg"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            className="sm:w-[35px] sm:h-[35px]"
            viewBox="0 0 24 26"
          >
            <path
              fill="black"
              d="m5.84 15.41l5.66-5.66l5.66 5.66l-.71.7l-4.95-4.95l-4.95 4.95z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default LastPage;
