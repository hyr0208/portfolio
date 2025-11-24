import css from "../../assets/image/icon_css.svg";
import electron from "../../assets/image/electron.png";
import html from "../../assets/image/icon_html.svg";
import js from "../../assets/image/icon_javascript.svg";
import react from "../../assets/image/react.png";
import tailwind from "../../assets/image/tailwind.png";
import ts from "../../assets/image/ts.png";
import ps from "../../assets/image/Photoshop.png";
import ill from "../../assets/image/illustrator.png";
import office from "../../assets/image/office.png";
import accounting from "../../assets/image/accounting.png";

function Career() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="items-start justify-end grid grid-cols-2 grid-row-3 gap-4 pt-9 max-lg:h-auto max-lg:grid-cols-1 max-xl:grid-cols-1 max-2xl:h-auto 2xl:max-w-[1400px] 2xl:mx-auto">
        <div className="bg-[#373737] md:w-[600px] p-5 rounded md:h-[30rem] h-[40rem] flex flex-col justify-between">
          <div className="tracking-tighter flex flex-col gap-3">
            <span className="text-[14px] text-[#a6a6a6]">2021.11 - 재직중</span>
            <div className="flex flex-col gap-1">
              <p className="text-[24px]">(주)엔투소프트</p>
              <p className="text-[14px]">@ 프로젝트팀 - 프론트엔드 웹 개발</p>
            </div>

            <ul className="text-[16px] text-[#a6a6a6] space-y-2 list-disc list-outside pl-5">
              <li>저축은행 모바일앱 기획 및 유지보수 작업</li>
              <li>
                HTML, CSS, Javascript를 활용한 저축은행 모바일 웹 대출시스템
                작업
              </li>
              <li>
                React, Javascript를 활용한 저축은행 모바일 웹 대출시스템 작업
              </li>
              <li>React, Typescript를 활용한 (주)오너마인드 랜딩페이지 작업</li>
              <li>
                React, Next.js를 활용한 저축은행 디지털 전환 홈페이지 유지보수
                작업
              </li>
              <li>
                React, Javascript를 활용한 저축은행 차세대 시스템 프로젝트 작업
              </li>
              <li>
                React, Electron을 활용한 저축은행 차세대 시스템 유지보수 작업
              </li>
            </ul>
          </div>

          <div className="flex-wrap md:gap-3 gap-2 grid md:grid-cols-8 grid-cols-4 pt-4">
            {[html, css, js, ts, react, tailwind, electron].map((icon, idx) => (
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

        <div className="bg-[#373737] p-5 overflow-y-auto flex flex-col rounded h-[30rem] relative justify-between">
          <div className="flex flex-col gap-3 text-white">
            <div className="tracking-tighter flex flex-col gap-3">
              <span className="text-[14px] text-[#a6a6a6]">
                2019.01 - 2021.09
              </span>
              <div className="flex flex-col gap-1">
                <p className="text-[24px]">하나컴퓨터학원</p>
                <p className="text-[14px]">@ 컴퓨터자격증 강사</p>
              </div>

              <ul className="text-[16px] text-[#a6a6a6] space-y-2 list-disc list-outside pl-5">
                <li>OA관련 자격증 강의</li>
                <li>전산회계 및 회계관리 자격증 강의</li>
                <li>디자인 관련 자격증 강의</li>
                <li>
                  Photoshop, Illustrator를 활용해 홍보 마케팅, 광고 디자인 작업
                </li>
              </ul>
            </div>
          </div>

          <div className="flex-wrap md:gap-3 gap-2 grid md:grid-cols-6 grid-cols-4">
            {[office, accounting, ps, ill].map((icon, idx) => (
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
  );
}

export default Career;
