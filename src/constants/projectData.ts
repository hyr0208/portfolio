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
  detailUrl?: string;
  features?: string[]; // 주요 기능 및 특징
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
    detailUrl: "modal",
    siteUrl: "https://riderlink.co.kr/",
    features: [
      "반응형 웹 디자인으로 모든 디바이스에서 최적화",
      "SEO 최적화로 검색 엔진 노출도 향상",
      "빠른 로딩 속도와 사용자 친화적 인터페이스",
      "브랜드 아이덴티티를 반영한 일관된 디자인"
    ]
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
    detailUrl: "modal",
    siteUrl: "https://ownermind.co.kr/",
    features: [
      "커뮤니티 중심의 사용자 경험 설계",
      "소셜 미디어 연동 및 공유 기능",
      "실시간 알림 및 업데이트 시스템",
      "관리자 대시보드 및 콘텐츠 관리 기능"
    ]
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
    githubUrl: "https://github.com/hyr0208/portfolio",
    detailUrl: "modal",
    features: [
      "패드백을 수용하고, 지속적으로 개선 중",
      "메인 화면, 마지막 화면에서 github 바로가기",
      "소개 - 커리어 - 프로젝트 순으로 표시",
      "프로젝트 '자세히보기' 버튼 클릭 시 상세 정보 표시"
    ]
  },
  
];

export type FilterType = 'all' | 'team' | 'single'; 