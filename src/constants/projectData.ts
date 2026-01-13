import riderlinkImage from "../assets/image/riderlink.png";
import ownerMindImage from "../assets/image/ownermind.png";
import soolgameImage from "../assets/image/soolgame-landing.png";
import gcmsImage from "../assets/image/gcms.png";
import smartBankImage from "../assets/image/sfis.png";
import AllCert from "../assets/image/AllCert.png";

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
  mainFeatures?: string[]; // 주요 기능
}

export const projects: Project[] = [
  {
    id: 1,
    title: "저축은행 중앙회 중도금대출 관리 시스템",
    description: "저축은행 중앙회에서 운영하는 중도금대출 관리 시스템입니다.",
    image: gcmsImage,
    tags: ["팀", "웹"],
    technologies: [
      "react",
      "ts",
      "tailwind",
      "electron",
      "zustand",
      "axios",
      "reactquery",
      "storybook",
      "zeplin",
    ],
    category: "team",
    type: "publishing",
    duration: "long-term",
    detailUrl: "modal",
    mainFeatures: [
      "보안 폐쇄망 환경에서 yarn offline 캐시를 활용한 React 개발 환경 구축 및 배포",
      "RealGrid 샘플 코드를 분석하여, 중도금 대출 사용자 관리를 위한 스프레드시트 기능(필터, 엑셀 다운로드, 더블 클릭 등)을 Custom Hook으로 모듈화하고, 공통 로직을 추출하여 재사용 가능한 컴포넌트 형태로 구현",
      "RealGrid를 활용한 강력한 스프레드시트 기능 제공",
      "Electron을 활용한 데스크톱 애플리케이션 빌드 및 배포 프로세스 구축",
      "보안 폐쇄망 환경에 최적화된 안정적인 시스템 운영",
      "대량의 데이터를 효율적으로 처리하기 위한 가상화 및 페이징 기능 구현",
    ],
  },
  {
    id: 2,
    title: "스마트저축은행 차세대 시스템 구축",
    description:
      "스마트저축은행 차세대 시스템 구축 프로젝트에서 공통부를 담당하여 개발을 하였고, 보안 폐쇄망 환경에서 React 기반의 공통 컴포넌트 라이브러리를 구축하며 Storybook을 활용한 컴포넌트 문서화 및 테스트 환경을 구축했습니다. RealGrid와 RealReport를 활용한 데이터 그리드 및 리포트 기능을 제공하며, 20여개의 재사용 가능한 공통 컴포넌트를 개발하여 프로젝트 전반의 개발 효율성을 향상시켰습니다.",
    image: smartBankImage,
    tags: ["팀", "웹"],
    technologies: [
      "react",
      "ts",
      "tailwind",
      "electron",
      "zustand",
      "axios",
      "reactquery",
      "storybook",
      "zeplin",
    ],
    category: "team",
    type: "publishing",
    duration: "long-term",
    detailUrl: "modal",
    mainFeatures: [
      "보안 폐쇄망 환경에서 React와 TypeScript를 활용한 개발 환경 구축 및 배포",
      "TypeScript와 React Query를 활용한 타입 안정성 및 서버 상태 관리",
      "20여개의 재사용 가능한 공통 컴포넌트 개발 및 모듈화",
      "Zustand를 활용한 전역 상태 관리 및 컴포넌트 간 데이터 공유",
      "재사용 가능한 컴포넌트 구조 설계 및 Props 인터페이스 표준화",
      "공통 컴포넌트 라이브러리 구조 설계 및 npm 패키지 형태로 배포",
      "Storybook을 활용한 공통 컴포넌트 문서화 및 시각적 테스트 환경 구축",
      "RealGrid와 RealReport API를 활용한 데이터 바인딩 및 리포트 생성 로직 구현",
    ],
  },
  {
    id: 3,
    title: "오너십 랜딩페이지",
    description:
      "오너십은 사용자가 자신의 자산을 효율적으로 관리하고 추적할 수 있도록 돕는 자산 관리 서비스입니다.\n부동산, 차량, 금융 자산 등 다양한 유형의 자산을 등록하고 관리할 수 있으며, 각 자산의 상세 정보와 변동 사항을 체계적으로 기록하여 자산의 상태를 지속적으로 모니터링할 수 있습니다. 직관적인 인터페이스와 데이터 시각화를 통해 사용자가 쉽게 자산을 관리할 수 있도록 지원합니다.",
    image: ownerMindImage,
    tags: ["팀", "반응형", "퍼블리싱"],
    technologies: ["react", "ts", "tailwind", "github", "zeplin", "figma"],
    category: "team",
    type: "publishing",
    duration: "side",
    detailUrl: "modal",
    siteUrl: "https://ownermind.co.kr/",
    mainFeatures: [
      "React와 TypeScript를 활용한 타입 안정성 확보",
      "React.memo 및 useMemo를 활용한 렌더링 성능 최적화",
      "Tailwind CSS를 사용한 유지보수 가능한 스타일링",
      "반응형 디자인을 위한 미디어 쿼리 및 Tailwind CSS 브레이크포인트 활용",
      "컴포넌트 재사용성을 고려한 모듈화된 구조",
      "반응형 레이아웃 구현 및 크로스 브라우저 호환성",
      "SEO 최적화를 위한 메타 태그 및 Open Graph 설정",
      "성능 최적화를 위한 코드 스플리팅 및 레이지 로딩 적용",
      "이미지 최적화 및 WebP 포맷 변환을 통한 로딩 속도 개선",
    ],
  },

  {
    id: 4,
    title: "포트폴리오 사이트",
    description: "저만의 포트폴리오를 만들기위해 제작한 사이트입니다.",
    image: "/images/portfolio.webp",
    tags: ["솔로", "반응형", "포트폴리오", "사이드"],
    technologies: ["react", "ts", "tailwind", "github"],
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
      "커스텀 훅(useScrollToTarget)을 통한 스크롤 위치 추적 및 네비게이션 상태 관리",
      "GitHub API 연동을 통한 외부 링크 처리 및 새 창 열기 구현",
      "모달 컴포넌트를 통한 프로젝트 상세 정보 표시",
      "섹션별 스크롤 위치 계산 및 자동 스크롤 기능 구현",
      "모달 상태 관리 및 body 스크롤 잠금 기능 구현",
    ],
  },
  {
    id: 5,
    title: "AllCert - 자격증 포털",
    description:
      "다양한 자격증 정보를 한눈에 확인하고, 원하는 자격증을 쉽게 찾아볼 수 있는 자격증 포털 사이트입니다.\nIT, 어학, 전문자격, 기술, 금융, 디자인 등 다양한 분야의 자격증 정보를 제공하며, 실시간 검색과 카테고리 필터링 기능을 통해 원하는 자격증을 빠르게 찾을 수 있습니다.",
    image: AllCert,
    tags: ["솔로", "반응형", "사이드"],
    technologies: ["react", "ts", "tailwind", "vite", "github"],
    category: "single",
    type: "responsive",
    duration: "side",
    githubUrl: "https://github.com/hyr0208/AllCert",
    siteUrl: "https://allcert.yyyerin.co.kr",
    detailUrl: "modal",
    mainFeatures: [
      "React 18과 TypeScript를 활용한 모던 프론트엔드 개발",
      "Vite를 활용한 빠른 개발 환경 및 빌드 최적화",
      "TailwindCSS를 사용한 반응형 디자인 구현",
      "실시간 검색 기능으로 자격증 이름, 기관, 키워드 빠르게 검색",
      "카테고리 필터링으로 원하는 분야의 자격증만 모아보기",
      "클릭 한 번으로 자격증 공식 사이트 바로가기 연결",
      "PC, 태블릿, 모바일 모든 기기에서 최적화된 반응형 화면",
      "Lucide React를 활용한 아이콘 시스템 구축",
    ],
  },
  {
    id: 6,
    title: "술게임 랜딩페이지",
    description:
      "술게임은 친구들과 함께 즐길 수 있는 다양한 술게임을 제공하는 서비스입니다.\n다양한 게임 모드와 재미있는 인터랙션을 통해 사용자들이 즐겁고 편안한 시간을 보낼 수 있도록 설계되었습니다. 직관적인 UI와 부드러운 애니메이션으로 사용자 경험을 향상시키고, 모바일과 데스크톱 모두에서 최적화된 반응형 디자인을 제공합니다.",
    image: soolgameImage,
    tags: ["팀", "반응형", "사이드"],
    technologies: ["react", "ts", "tailwind", "github"],
    category: "team",
    type: "publishing",
    duration: "side",
    githubUrl: "https://github.com/hyr0208/soolgame-landing",
    detailUrl: "modal",
    mainFeatures: [
      "React와 JavaScript를 활용한 동적 UI 구현",
      "React Hooks(useState, useEffect)를 활용한 상태 관리",
      "Tailwind CSS를 사용한 반응형 디자인",
      "CSS 애니메이션 및 Tailwind CSS transition 유틸리티를 활용한 인터랙션 구현",
      "컴포넌트 기반 아키텍처로 재사용성 향상",
      "상태 관리 및 이벤트 핸들링 최적화",
      "반응형 디자인을 위한 미디어 쿼리 및 모바일 퍼스트 접근 방식 적용",
      "컴포넌트 Props 인터페이스 설계 및 타입 안정성 확보",
    ],
  },
  {
    id: 7,
    title: "라이더링크 랜딩페이지",
    description:
      "라이더링크는 자전거 및 오토바이 라이더를 위한 최적의 경로 추천 서비스입니다.\n사용자의 현재 위치와 목적지를 기반으로 최적의 라이딩 경로를 제공하며, 실시간 교통 정보를 반영하여 안전하고 효율적인 경로를 안내합니다. 다양한 경로 옵션(최단 거리, 최단 시간, 경치 좋은 길)을 제공하고, 자주 이용하는 경로를 저장하고 공유할 수 있는 기능을 제공합니다.",
    image: riderlinkImage,
    tags: ["팀", "반응형", "사이드"],
    technologies: ["react", "ts", "tailwind", "axios", "github"],
    category: "team",
    type: "publishing",
    duration: "side",
    detailUrl: "modal",
    siteUrl: "https://riderlink.co.kr/",
    mainFeatures: [
      "React와 TypeScript를 활용한 컴포넌트 기반 개발",
      "Tailwind CSS를 사용한 반응형 디자인 구현",
      "Axios를 활용한 HTTP 클라이언트 설정 및 인터셉터 구현",
      "SEO 최적화를 위한 메타 태그 및 구조화된 마크업",
      "성능 최적화를 위한 코드 스플리팅 및 이미지 최적화",
      "다양한 화면 크기에 대응하는 반응형 레이아웃",
      "CSS Grid와 Flexbox를 활용한 반응형 레이아웃 구조 설계",
      "이미지 최적화 및 레이지 로딩을 통한 초기 로딩 속도 개선",
    ],
  },
];

export type FilterType = "all" | "team" | "single";
