import { imageData } from "../../constants/imageData";

function MainPage() {
  return (
    <div className="max-w-[1280px]">
      <div className="object-cover w-screen relative">
        <img
          src={imageData.BackGroundImage}
          alt=""
          className="w-screen h-screen"
        />

        <div className="absolute bottom-0 left-0 top-0 text-center w-full pt-10">
          <p className="md:text-[100px] text-[150px] text-white/80 font-normal tracking-tight leading-none">
            Front-End Developer
          </p>
          <p className="absolute md:top-[20%] top-[30%] left-1/2 -translate-x-1/2 md:text-[50px] text-[70px] text-black font-light leading-none">
            프론트엔드 개발자
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
