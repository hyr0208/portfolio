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

      </div>
      
      {/* 프로젝트 정보 */}
      <div className="space-y-2">
        <h3 className="text-white font-semibold text-lg">{project.title}</h3>
        <p className="text-gray-300 text-sm font-light leading-relaxed">{project.description}</p>
        
        {/* 태그들 - 카드 안에 위치 */}
        <div className="flex flex-wrap gap-2 mt-4">
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