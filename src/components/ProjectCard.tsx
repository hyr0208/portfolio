import React from 'react';
import { Project } from '../constants/projectData';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-[#373737] rounded-lg p-4 hover:bg-[#404040] transition-colors duration-200 cursor-pointer">
      {/* 프로젝트 이미지 */}
      <div className="w-full h-48 bg-[#404040] rounded-md mb-4 flex items-center justify-center relative">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover rounded-md"
          />
        ) : (
          <div className="text-gray-400 text-sm">이미지 없음</div>
        )}
        {/* 프로젝트 제목 오버레이 (이미지가 있는 경우) */}
        {project.image && (
          <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
            {project.title}
          </div>
        )}
      </div>
      
      {/* 프로젝트 정보 */}
      <div className="space-y-2">
        {!project.image && (
          <h3 className="text-white font-semibold text-lg">{project.title}</h3>
        )}
        <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
        
        {/* 태그들 */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-[#404040] text-white text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 