import riderlinkImage from '../assets/image/riderlink.png';
import ownerMindImage from '../assets/image/ownermind.png';

export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  category: 'team' | 'single';
  type: 'app' | 'responsive' | 'toy' | 'portfolio' | 'publishing';
  duration: 'side' | 'long-term';
  githubUrl?: string;
  siteUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "라이더링크 랜딩페이지",
    description: "라이더링크 랜딩페이지 입니다.",
    image: riderlinkImage,
    tags: ["팀", "반응형", "사이드"],
    category: "team",
    type: "publishing",
    duration: "side",
    siteUrl: "https://riderlink.co.kr/"
  },
  {
    id: 2,
    title: "오너십 랜딩페이지",
    description: "오너십 커뮤니티 랜딩페이지 입니다.",
    image: ownerMindImage,
    tags: ["팀", "반응형", "퍼블리싱"],
    category: "team",
    type: "publishing",
    duration: "side",
    siteUrl: "https://ownermind.co.kr/"
  },
  {
    id: 3,
    title: "포트폴리오 사이트",
    description: "저만의 포트폴리오를 만들기위해 제작한 사이트입니다.",
    image: "/images/portfolio.webp",
    tags: ["솔로", "반응형", "포트폴리오", "사이드"],
    category: "single",
    type: "portfolio",
    duration: "side",
    siteUrl: "https://portfolio.yyyerin.co.kr/",
    githubUrl: "https://github.com/hyr0208/portfolio"
  },
  
];

export type FilterType = 'all' | 'team' | 'single'; 