import BackGroundImage from "../../assets/image/front_bg.jpg";

function LastPage() {
  return (
    <div>
      <div className="relative h-screen overflow-hidden">
        <img
          src={BackGroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 text-center w-full pt-10 translate-y-[60px]">
          <p className="text-[90px] md:text-[150px] text-white/90 font-normal tracking-tight leading-none">
            Thank You
          </p>
          <p className="absolute top-[13%] md:top-[15%] left-1/2 -translate-x-1/2 text-[26px] md:text-[50px] text-black font-normal leading-none">
            <span className="">봐주셔서 감사합니다 {":)"}</span>
          </p>
        </div>

        {/* <div className="absolute inset-0 flex items-end justify-center translate-y-[60px]">
          <img
            src={yerinImage}
            alt=""
            className="w-[500px] md:w-[650px] h-[700px] md:h-[900px] object-cover"
          />
        </div> */}
      </div>
    </div>
  );
}

export default LastPage;
