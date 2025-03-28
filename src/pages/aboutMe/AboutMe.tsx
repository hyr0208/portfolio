import emoge from "../../assets/image/emoge.png";
import css from "../../assets/image/icon_css.svg";
import electron from "../../assets/image/electron.png";
import html from "../../assets/image/icon_html.svg";
import js from "../../assets/image/icon_javascript.svg";
import react from "../../assets/image/react.png";
import tailwind from "../../assets/image/tailwind.png";
import ts from "../../assets/image/ts.png";
import github from "../../assets/image/icon_github.svg";
import discord from "../../assets/image/icon_discord.svg";
import figma from "../../assets/image/icon_figma.svg";

function AboutMe() {
  return (
    <div className="">
      <div className=" relative h-full bg-[#232323] px-10 py-10 z-1 max-lg:h-auto max-lg:py-20">
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

          <div className="flex flex-col items-start gap-6 ">
            <div className="text-white text-4xl font-normal">Skill & Tolls</div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              <div>
                <div className="text-white text-2xl font-light pb-5">
                  FrontEnd
                </div>

                <div className="flex flex-wrap md:gap-3 gap-2">
                  {[html, css, js, ts, react, tailwind, electron].map(
                    (icon, idx) => (
                      <div
                        key={idx}
                        className="w-[60px] h-[60px] p-1 rounded-xl bg-black flex flex-col justify-center items-center shrink-0"
                      >
                        <img
                          src={icon}
                          alt=""
                          className="w-[36px] h-[25px] object-contain"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>

              <div>
                <div className="text-white text-2xl font-light pb-5">Tools</div>

                <div className="flex flex-wrap md:gap-3 gap-2">
                  {[github, discord, figma].map((icon, idx) => (
                    <div
                      key={idx}
                      className="w-[60px] h-[60px] p-1 rounded-xl bg-black flex flex-col justify-center items-center shrink-0"
                    >
                      <img
                        src={icon}
                        alt=""
                        className="w-[36px] h-[25px] object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
