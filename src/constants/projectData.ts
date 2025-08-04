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
    tags: ["팀", "웹", "사이드"],
    category: "team",
    type: "publishing",
    duration: "side"
  },
  {
    id: 2,
    title: "포트폴리오 사이트",
    description: "저만의 포트폴리오를 만들기위해 제작한 사이트입니다.",
    image: "/images/portfolio.webp",
    tags: ["솔로", "반응형", "포트폴리오"],
    category: "single",
    type: "portfolio",
    duration: "side"
  },
  
];

export type FilterType = 'all' | 'team' | 'single'; 