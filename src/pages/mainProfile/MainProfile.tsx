import BackGroundImage from "../../assets/image/front_bg.jpg";
import yerinImage from "../../assets/image/yerinImage.png";

function MainProfile() {
  return (
    <div>
      <div className="relative h-screen">
        <img
          src={BackGroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 text-center w-full pt-10">
          <p className="text-[40px] md:text-[80px] text-white/80 font-normal tracking-tight leading-none">
            Front-End Developer
          </p>
          <p className="absolute top-[8%] md:top-[10%] left-1/2 -translate-x-1/2 text-[26px] md:text-[50px] text-black font-normal leading-none">
            프론트엔드 개발자
          </p>
        </div>

        <div className="absolute inset-0 flex items-end justify-center">
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
