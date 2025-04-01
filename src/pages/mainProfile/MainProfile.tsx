import BackGroundImage from "../../assets/image/front_bg.jpg";
import yerinImage from "../../assets/image/yerin.png";

function MainProfile() {
  return (
    <div>
      <div className="relative h-screen">
        <div className="absolute top-14 left-20 z-10">
          <a
            href="https://github.com/hyr0208"
            className="relative flex gap-1 items-center flex-col z-20 font-light py-1 px-2 transition-all ease-in-out duration-[0.3s] hover:text-[#fff] after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:z-[-1] after:w-full after:h-1 after:bg-black after:block after:transition-all after:ease-in-out after:duration-[0.3s] hover:after:h-full tracking-tight"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>

        <img
          src={BackGroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 text-center w-full pt-10 translate-y-[60px]">
          <p className="text-[40px] md:text-[80px] text-white/80 font-normal tracking-tight leading-none">
            Front-End Developer
          </p>
          <p className="absolute top-[8%] md:top-[10%] left-1/2 -translate-x-1/2 text-[26px] md:text-[50px] text-black font-normal leading-none">
            프론트엔드 개발자
          </p>
        </div>

        <div className="absolute inset-0 flex items-end justify-center translate-y-[60px]">
          <img
            src={yerinImage}
            alt=""
            className="w-[500px] md:w-[650px] h-[700px] md:h-[900px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default MainProfile;
