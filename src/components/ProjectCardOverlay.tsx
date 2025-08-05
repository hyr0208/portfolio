import React from 'react';

interface ProjectCardOverlayProps {
  title: string;
  isVisible: boolean;
  githubUrl?: string;
  siteUrl?: string;
}

const ProjectCardOverlay: React.FC<ProjectCardOverlayProps> = ({ 
  title, 
  isVisible, 
  githubUrl, 
  siteUrl 
}) => {
  if (!isVisible) return null;

  const handleGithubClick = () => {
    if (githubUrl) {
      window.open(githubUrl, '_blank');
    }
  };

  const handleSiteClick = () => {
    if (siteUrl) {
      window.open(siteUrl, '_blank');
    }
  };

  return (
    <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center rounded-lg transition-all duration-300">
      <h3 className="text-white font-bold text-xl mb-6">{title}</h3>
      <div className="flex flex-col gap-3">
        {githubUrl && (
          <button 
            onClick={handleGithubClick}
            className="px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition-colors duration-200"
          >
            Github 바로가기
          </button>
        )}
        {siteUrl && (
          <button 
            onClick={handleSiteClick}
            className="px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition-colors duration-200"
          >
            사이트로 이동
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCardOverlay; 