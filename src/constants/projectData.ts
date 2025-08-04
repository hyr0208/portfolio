export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  category: 'team' | 'single';
  type: 'app' | 'responsive' | 'toy' | 'portfolio' | 'publishing';
  duration: 'side' | 'long-term';
}

export const projects: Project[] = [
  {
    id: 1,
    title: "라이더링크 랜딩페이지",
    description: "라이더링크 랜딩페이지 입니다.",
    tags: ["팀", "앱", "사이드"],
    category: "team",
    type: "publishing",
    duration: "side"
  },
  
];

export type FilterType = 'all' | 'team' | 'single'; 