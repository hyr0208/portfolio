import React, { useState } from 'react';
import { projects, FilterType } from '../../constants/projectData';
import type { Project } from '../../constants/projectData';
import ProjectFilter from '../../components/ProjectFilter';
import ProjectCard from '../../components/ProjectCard';
import ProjectDetailModal from '../../components/ProjectDetailModal';

const ProjectPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-[#232323] text-white">
      <div className="container mx-auto px-6 py-8">
        <ProjectFilter 
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onDetailClick={() => handleProjectClick(project)}
            />
          ))}
        </div>

        <ProjectDetailModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
};

export default ProjectPage;
