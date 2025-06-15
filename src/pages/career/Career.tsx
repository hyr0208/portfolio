import css from "../../assets/image/icon_css.svg";
import electron from "../../assets/image/electron.png";
import html from "../../assets/image/icon_html.svg";
import js from "../../assets/image/icon_javascript.svg";
import react from "../../assets/image/react.png";
import tailwind from "../../assets/image/tailwind.png";
import ts from "../../assets/image/ts.png";

function Career() {
  return (
    <div className="min-h-screen">
      <div className="items-start justify-end grid grid-cols-2 grid-row-3 gap-4 mt-[2rem] pt-9 max-lg:h-auto max-lg:grid-cols-1 max-xl:grid-cols-1 max-2xl:h-screen">
        <div className="bg-[#373737] overflow-hidden flex flex-col rounded h-[30rem] relative justify-between md:w-[480px]">
          <div className="p-5 flex flex-col gap-3 text-white">
            <span className="text-[14px] text-[#a6a6a6]">
              2019.01 - 2021.09
            </span>
            <div className="flex flex-col gap-1">
              <p className="text-[24px]">하나컴퓨터학원</p>
              <p className="text-[14px]">@ 컴퓨터자격증 강사</p>
            </div>

            <div className="text-[16px] text-[#a6a6a6]">
              <li>OA관련 자격증 강의</li>
              <li>전산회계 및 회계관리 자격증 강의</li>
              <li>디자인 관련 자격증 강의</li>
              <li>
                Photoshop, Illustrator를 활용해 홍보 마케팅, 광고 디자인 작업
              </li>
            </div>
          </div>
        </div>

        <div className="bg-[#373737] p-5 rounded md:h-[30rem] h-[40rem] flex flex-col justify-between md:w-[480px]">
          <div className="tracking-tighter flex flex-col gap-3">
            <span className="text-[14px] text-[#a6a6a6]">2021.11 - 재직중</span>
            <div className="flex flex-col gap-1">
              <p className="text-[24px]">(주)엔투소프트</p>
              <p className="text-[14px]">@ 프로젝트팀 - 프론트엔드 웹 개발</p>
            </div>

            <div className="text-[16px] text-[#a6a6a6]">
              <li>저축은행 모바일앱 기획 및 유지보수 작업</li>
              <li>
                HTML, CSS, Javascript를 활용한 저축은행 모바일 웹 대출시스템
                작업
              </li>
              <li>React, Javascript를 활용한 저축은행 모바일 웹 작업</li>
              <li>(주)오너마인드 랜딩페이지 작업</li>
              <li>
                React, Next.js를 활용한 저축은행 디지털 전환 홈페이지 유지보수
                작업
              </li>
              <li>
                React, Javascript를 활용한 저축은행 차세대 시스템 프로젝트 작업
              </li>
            </div>
          </div>

          <div className="flex-wrap md:gap-3 gap-2 grid md:grid-cols-8 grid-cols-4">
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
      </div>
    </div>
  );
}

export default Career;
