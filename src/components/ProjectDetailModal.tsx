import React, { useEffect } from "react";
import html from "../assets/image/icon_html.svg";
import css from "../assets/image/icon_css.svg";
import js from "../assets/image/icon_javascript.svg";
import ts from "../assets/image/ts.png";
import react from "../assets/image/react.png";
import tailwind from "../assets/image/tailwind.png";
import electron from "../assets/image/electron.png";
import github from "../assets/image/icon_github.svg";
import figma from "../assets/image/icon_figma.svg";
import zeplin from "../assets/image/zeplin.png";
import Tooltip from "./ToolTip";
import axios from "../assets/image/axios.png";
import storybook from "../assets/image/storybook-icon.svg";
import reactquery from "../assets/image/ReactQuery.png";
import firebase from "../assets/image/firebase.png";
import vite from "../assets/image/Vite.svg";
import docker from "../assets/image/docker.png";
import jenkins from "../assets/image/jenkins.png";

// 기술 이름을 아이콘 경로로 매핑
const technologyIcons: { [key: string]: string } = {
  html,
  css,
  js,
  ts,
  react,
  reactquery,
  axios,
  storybook,
  tailwind,
  electron,
  github,
  figma,
  zeplin,
  firebase,
  vite,
  docker,
  jenkins,
};

// 기술 이름을 한글로 매핑
const technologyNames: { [key: string]: string } = {
  html: "HTML5",
  css: "CSS3",
  js: "JavaScript",
  ts: "TypeScript",
  react: "React",
  tailwind: "Tailwind CSS",
  electron: "Electron",
  github: "GitHub",
  figma: "Figma",
  zeplin: "Zeplin",
  reactquery: "React Query",
  storybook: "Storybook",
  axios: "Axios",
  firebase: "Firebase",
  vite: "Vite",
  docker: "Docker",
  jenkins: "Jenkins",
};

interface ProjectDetailModalProps {
  project: any | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl max-h-[90vh] lg:max-h-[95vh] relative mt-12 lg:mt-0">
        {/* 모바일 닫기 버튼 - 모달 위에 표시 (겹치지 않게) */}
        <button
          onClick={onClose}
          className="lg:hidden absolute -top-12 right-0 w-10 h-10 bg-[#373737] text-white rounded-full flex items-center justify-center text-base font-bold hover:bg-[#373737]/40 transition-colors z-[60] shadow-lg"
        >
          ✕
        </button>

        {/* 메인 모달 */}
        <div className="bg-white rounded-md w-full overflow-y-auto">
          {/* 헤더 */}
          <div className="p-4 sm:p-6 border-b border-gray-200">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                {project.category === "work"
                  ? "회사 프로젝트"
                  : project.category === "team"
                    ? "팀 프로젝트"
                    : "개인 프로젝트"}{" "}
                •{" "}
                {project.duration === "side"
                  ? "사이드 프로젝트"
                  : "장기 프로젝트"}
              </p>
            </div>
          </div>

          {/* 메인 콘텐츠 */}
          <div className="p-4 sm:p-6">
            {/* 프로젝트 이미지 */}
            <div className="mb-4 sm:mb-6">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 sm:h-96 md:h-[28rem] object-cover rounded-lg"
                />
              ) : (
                <div className="w-full h-72 sm:h-96 md:h-[28rem] bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-sm sm:text-base">
                    이미지 없음
                  </span>
                </div>
              )}
            </div>

            {/* 프로젝트 설명 */}
            <div className="mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                프로젝트 설명
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* 사용 기술 */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                  사용 기술
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech: string, index: number) => {
                    const icon = technologyIcons[tech.toLowerCase()];
                    const name = technologyNames[tech.toLowerCase()] || tech;
                    const isGithub = tech.toLowerCase() === "github";
                    return icon ? (
                      <Tooltip key={index} text={name} position="top">
                        <div className="w-[50px] h-[50px] p-0.5 rounded-xl flex flex-col justify-center items-center shrink-0 hover:bg-gray-100 transition-colors cursor-pointer">
                          <img
                            src={icon}
                            alt={name}
                            className={`w-full h-full object-contain ${
                              isGithub ? "brightness-0" : ""
                            }`}
                          />
                        </div>
                      </Tooltip>
                    ) : null;
                  })}
                </div>
              </div>
            )}

            {/* 태그 */}
            <div className="mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                태그
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: any, index: number) => (
                  <span
                    key={index}
                    className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 주요 기능 */}
            {project.mainFeatures && project.mainFeatures.length > 0 && (
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                  주요 기능
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  {project.mainFeatures.map(
                    (feature: string, index: number) => (
                      <li key={index}>{feature}</li>
                    ),
                  )}
                </ul>
              </div>
            )}

            {/* 링크 */}
            {/* <div className="flex gap-4">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
                >
                  GitHub 바로가기
                </a>
              )}
              {project.siteUrl && (
                <a 
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  사이트로 이동
                </a>
              )}
            </div> */}
          </div>
        </div>

        {/* 오른쪽 사이드바 - 데스크톱에서만 표시 */}
        <div className="hidden lg:flex lg:ml-4 flex-col gap-4">
          {/* X 버튼 */}
          <button
            onClick={onClose}
            className="w-9 h-9 bg-[#373737] text-white rounded-full flex items-center justify-center text-sm font-bold hover:bg-[#373737]/40 transition-colors"
          >
            ✕
          </button>

          {/* GitHub 버튼 */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white text-black rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
