import React, { useState } from "react";
import { projects, FilterType } from "../../constants/projectData";
import type { Project } from "../../constants/projectData";
import ProjectFilter from "../../components/ProjectFilter";
import ProjectCard from "../../components/ProjectCard";
import ProjectDetailModal from "../../components/ProjectDetailModal";
import ScrollAnimation from "../../components/ScrollAnimation";

const INITIAL_DISPLAY_COUNT = 6;

const ProjectPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    setShowAll(false);
  };

  // 필터링된 프로젝트 목록
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.category === activeFilter;
  });

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_DISPLAY_COUNT);

  const hasMore = filteredProjects.length > INITIAL_DISPLAY_COUNT;

  return (
    <div className="min-h-screen bg-[#232323] text-white">
      <div className="container mx-auto px-6 pt-8 pb-6 md:pt-8 md:pb-8 2xl:max-w-[1400px]">
        <ScrollAnimation animation="fade-up">
          <ProjectFilter
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <ScrollAnimation
              key={project.id}
              animation="fade-up"
              delay={index * 100}
              threshold={0.05}
            >
              <ProjectCard
                project={project}
                onDetailClick={() => handleProjectClick(project)}
              />
            </ScrollAnimation>
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="group flex items-center gap-2 px-8 py-3 rounded-full border border-[#555] text-gray-300 hover:border-white hover:text-white transition-all duration-300"
            >
              <span className="text-sm font-medium">
                {showAll
                  ? "접기"
                  : `더보기 (${filteredProjects.length - INITIAL_DISPLAY_COUNT})`}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        )}

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
