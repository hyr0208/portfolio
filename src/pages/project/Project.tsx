import React, { useState, useMemo } from 'react';
import { projects, FilterType } from '../../constants/projectData';
import ProjectCard from '../../components/ProjectCard';
import ProjectFilter from '../../components/ProjectFilter';

function Project() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects;
    }
    return projects.filter(project => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-[#232323] text-white">
      <div className="container mx-auto px-6 py-8">
        {/* 필터 섹션 */}
        <ProjectFilter 
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        
        {/* 프로젝트 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* 프로젝트가 없을 때 */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              해당 카테고리의 프로젝트가 없습니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Project;
