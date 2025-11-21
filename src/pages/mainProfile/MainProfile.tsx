import BackGroundImage from "../../assets/image/front_bg.jpg";
import yerinImage from "../../assets/image/yerin.png";
import Tooltip from "../../components/ToolTip";
import { useVisitorCount } from "../../hooks/useVisitorCount";

function MainProfile() {
  const { visitorCount, isLoading } = useVisitorCount();

  return (
    <div>
      <div className="relative h-screen overflow-hidden">
        <div className="absolute md:top-14 top-5 md:left-20 left-5 z-10 flex gap-4 md:gap-6">
          <Tooltip text="GitHub로 이동" position="bottom">
            <a
              href="https://github.com/hyr0208"
              className="relative flex gap-1 items-center flex-col z-20 font-normal py-1 px-2 transition-all ease-in-out duration-[0.3s] hover:text-[#fff] text-black after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:z-[-1] after:w-full after:h-1 after:bg-black after:block after:transition-all after:ease-in-out after:duration-[0.3s] hover:after:h-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Tooltip>
          <Tooltip text="이메일 보내기" position="bottom">
            <a
              href="mailto:hhyr0208@gmail.com"
              className="relative flex gap-1 items-center flex-col z-20 font-normal py-1 px-2 transition-all ease-in-out duration-[0.3s] hover:text-[#fff] text-black after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:z-[-1] after:w-full after:h-1 after:bg-black after:block after:transition-all after:ease-in-out after:duration-[0.3s] hover:after:h-full"
            >
              Email
            </a>
          </Tooltip>
        </div>

        {/* 방문자 수 표시 */}
        {/* <div className="absolute md:top-14 top-5 md:right-20 right-5 z-10">
          <p className="text-gray-600 text-sm md:text-base font-normal bg-white/40 py-2 px-4 rounded-full">
            Today{" "}
            <span className="font-medium">
              {isLoading ? "..." : visitorCount.toLocaleString()}
            </span>
          </p>
        </div> */}

        <img
          src={BackGroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 text-center w-full pt-10 translate-y-[60px]">
          <p className="text-[40px] md:text-[80px] text-white/90 font-normal tracking-tight leading-none">
            Front-End Developer
          </p>
          <p className="absolute top-[8%] md:top-[10%] left-1/2 -translate-x-1/2 text-[26px] md:text-[50px] text-black font-normal leading-none">
            <span className="typing">프론트엔드 개발자</span>
          </p>
        </div>

        <div className="absolute inset-0 flex items-end justify-center translate-y-[60px] ">
          <img
            src={yerinImage}
            alt=""
            className="w-[500px] md:w-[650px] h-[700px] md:h-[900px] object-cover "
          />
        </div>
      </div>
    </div>
  );
}

export default MainProfile;
