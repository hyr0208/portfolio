import emoge from "../../assets/image/emoge.png";
import css from "../../assets/image/icon_css.svg";
import electron from "../../assets/image/electron.png";
import html from "../../assets/image/icon_html.svg";
import js from "../../assets/image/icon_javascript.svg";
import react from "../../assets/image/react.png";
import tailwind from "../../assets/image/tailwind.png";
import ts from "../../assets/image/ts.png";

function AboutMe() {
  return (
    <div className="">
      <div className=" relative h-screen bg-[#232323] px-10 pt-10 z-1 max-lg:h-auto max-lg:py-20">
        <h2 className="text-white text-6xl ">About me</h2>

        <div className="md:px-52 px-5 flex flex-col gap-20">
          <div className="flex flex-col items-center pt-10">
            <img
              src={emoge}
              alt=""
              className="md:w-[500px] h-auto rounded-xl"
            />

            <div>
              <p className="text-white font-light text-center md:text-[24px] text-[18px]">
                포기하지 않고 책임감있게 일하는 프론트엔드 개발자입니다.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6">
            <div className="text-white text-4xl font-normal">Skill & Tolls</div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-white text-2xl font-light pb-5">
                  FrontEnd
                </div>

                <div className="flex gap-2">
                  <div className="p-3 rounded-xl bg-black flex flex-col justify-center items-center w-auto">
                    <img src={html} alt="" className="w-[36px] h-[25px]" />
                  </div>
                  <div className="p-3 rounded-xl bg-black flex flex-col justify-center items-center w-auto">
                    <img src={css} alt="" className="w-[36px] h-[25px]" />
                  </div>
                  <div className="p-3 rounded-xl bg-black flex flex-col justify-center items-center w-auto">
                    <img src={js} alt="" className="w-[36px] h-[25px]" />
                  </div>
                  <div className="p-3 rounded-xl bg-black flex flex-col justify-center items-center w-auto">
                    <img src={ts} alt="" className="w-[26px] h-[20px]" />
                  </div>
                  <div className="p-3 rounded-xl bg-black flex flex-col justify-center items-center w-auto">
                    <img src={react} alt="" className="w-[30px] h-[23px]" />
                  </div>
                  <div className="p-3 rounded-xl bg-black flex flex-col justify-center items-center w-auto">
                    <img src={tailwind} alt="" className="w-[25px] h-[23px]" />
                  </div>
                  <div className="p-3 rounded-xl bg-black flex flex-col justify-center items-center w-auto">
                    <img src={electron} alt="" className="w-[25px] h-[23px]" />
                  </div>
                </div>
              </div>

              {/* <div className="text-white text-2xl font-light pb-5">Tools</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
