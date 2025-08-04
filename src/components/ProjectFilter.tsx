import React from 'react';
import { FilterType } from '../constants/projectData';

interface ProjectFilterProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({ activeFilter, onFilterChange }) => {
  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'team', label: 'Team' },
    { value: 'single', label: 'Single' }
  ];

  return (
    <div className="flex gap-4 mb-8">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            activeFilter === filter.value
              ? 'bg-white text-gray-800'
              : 'bg-[#373737] text-white hover:bg-[#404040]'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter; 