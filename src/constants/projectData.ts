import riderlinkImage from "../assets/image/riderlink.png";
import ownerMindImage from "../assets/image/ownermind.png";
import soolgameImage from "../assets/image/soolgame-landing.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  technologies?: string[]; // 사용 기술 (아이콘으로 표시)
  category: "team" | "single";
  type: "app" | "responsive" | "toy" | "portfolio" | "publishing";
  duration: "side" | "long-term";
  githubUrl?: string;
  siteUrl?: string;
  detailUrl?: string;
  mainFeatures?: string[]; // 주요 기능 (기술적인 내용)
  features?: string[]; // 특징
}

export const projects: Project[] = [
  {
    id: 1,
    title: "라이더링크 랜딩페이지",
    description:
      "라이더링크는 자전거 및 오토바이 라이더를 위한 최적의 경로 추천 서비스입니다.\n사용자의 현재 위치와 목적지를 기반으로 최적의 라이딩 경로를 제공하며, 실시간 교통 정보를 반영하여 안전하고 효율적인 경로를 안내합니다. 다양한 경로 옵션(최단 거리, 최단 시간, 경치 좋은 길)을 제공하고, 자주 이용하는 경로를 저장하고 공유할 수 있는 기능을 제공합니다.",
    image: riderlinkImage,
    tags: ["팀", "반응형", "사이드"],
    technologies: ["react", "ts", "tailwind"],
    category: "team",
    type: "publishing",
    duration: "side",
    detailUrl: "modal",
    siteUrl: "https://riderlink.co.kr/",
    mainFeatures: [
      "React와 TypeScript를 활용한 컴포넌트 기반 개발",
      "Tailwind CSS를 사용한 반응형 디자인 구현",
      "SEO 최적화를 위한 메타 태그 및 구조화된 마크업",
      "성능 최적화를 위한 코드 스플리팅 및 이미지 최적화",
      "다양한 화면 크기에 대응하는 반응형 레이아웃",
    ],
    features: [
      "직관적이고 모던한 사용자 인터페이스",
      "브랜드 아이덴티티를 반영한 일관된 디자인 시스템",
      "빠른 페이지 로딩 속도와 부드러운 사용자 경험",
      "모바일, 태블릿, 데스크톱 등 모든 디바이스에서 최적화된 화면",
    ],
  },
  {
    id: 2,
    title: "오너십 랜딩페이지",
    description:
      "오너십은 사용자가 자신의 자산을 효율적으로 관리하고 추적할 수 있도록 돕는 자산 관리 서비스입니다.\n부동산, 차량, 금융 자산 등 다양한 유형의 자산을 등록하고 관리할 수 있으며, 각 자산의 상세 정보와 변동 사항을 체계적으로 기록하여 자산의 상태를 지속적으로 모니터링할 수 있습니다. 직관적인 인터페이스와 데이터 시각화를 통해 사용자가 쉽게 자산을 관리할 수 있도록 지원합니다.",
    image: ownerMindImage,
    tags: ["팀", "반응형", "퍼블리싱"],
    technologies: ["react", "ts", "tailwind"],
    category: "team",
    type: "publishing",
    duration: "side",
    detailUrl: "modal",
    siteUrl: "https://ownermind.co.kr/",
    mainFeatures: [
      "React와 TypeScript를 활용한 타입 안정성 확보",
      "Tailwind CSS를 사용한 유지보수 가능한 스타일링",
      "컴포넌트 재사용성을 고려한 모듈화된 구조",
      "반응형 레이아웃 구현 및 크로스 브라우저 호환성",
      "SEO 최적화 및 성능 최적화 적용",
    ],
    features: [
      "직관적이고 사용자 친화적인 인터페이스",
      "모던한 디자인과 브랜드 아이덴티티 반영",
      "모바일, 태블릿, 데스크톱 등 모든 디바이스에서 최적화",
      "빠른 페이지 로딩 속도와 부드러운 사용자 경험",
    ],
  },
  {
    id: 3,
    title: "포트폴리오 사이트",
    description: "저만의 포트폴리오를 만들기위해 제작한 사이트입니다.",
    image: "/images/portfolio.webp",
    tags: ["솔로", "반응형", "포트폴리오", "사이드"],
    technologies: ["react", "ts", "tailwind"],
    category: "single",
    type: "portfolio",
    duration: "side",
    githubUrl: "https://github.com/hyr0208/portfolio",
    detailUrl: "modal",
    mainFeatures: [
      "React와 TypeScript를 활용한 SPA 개발",
      "Tailwind CSS를 사용한 유틸리티 기반 스타일링",
      "React Router를 통한 라우팅 및 스크롤 기반 네비게이션",
      "Intersection Observer API를 활용한 섹션 감지 및 하이라이트",
      "모달 컴포넌트를 통한 프로젝트 상세 정보 표시",
    ],
    features: [
      "패드백을 수용하고, 지속적으로 개선 중",
      "메인 화면, 마지막 화면에서 github 바로가기",
      "소개 - 커리어 - 프로젝트 순으로 표시",
      "프로젝트 '자세히보기' 버튼 클릭 시 상세 정보 표시",
    ],
  },
  {
    id: 4,
    title: "술게임 랜딩페이지",
    description:
      "술게임은 친구들과 함께 즐길 수 있는 다양한 술게임을 제공하는 서비스입니다.\n다양한 게임 모드와 재미있는 인터랙션을 통해 사용자들이 즐겁고 편안한 시간을 보낼 수 있도록 설계되었습니다. 직관적인 UI와 부드러운 애니메이션으로 사용자 경험을 향상시키고, 모바일과 데스크톱 모두에서 최적화된 반응형 디자인을 제공합니다.",
    image: soolgameImage,
    tags: ["팀", "반응형", "사이드"],
    technologies: ["react", "js", "tailwind"],
    category: "team",
    type: "publishing",
    duration: "side",
    githubUrl: "https://github.com/hyr0208/soolgame-landing",
    detailUrl: "modal",
    mainFeatures: [
      "React와 JavaScript를 활용한 동적 UI 구현",
      "Tailwind CSS를 사용한 반응형 디자인",
      "컴포넌트 기반 아키텍처로 재사용성 향상",
      "애니메이션 및 인터랙션 효과 구현",
      "상태 관리 및 이벤트 핸들링 최적화",
    ],
    features: [
      "직관적이고 재미있는 사용자 인터페이스",
      "부드러운 애니메이션과 인터랙션 효과",
      "모바일, 태블릿, 데스크톱 등 모든 디바이스에서 최적화",
      "모던한 디자인과 브랜드 아이덴티티 반영",
    ],
  },
];

export type FilterType = "all" | "team" | "single";
