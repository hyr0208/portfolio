# 🎨 Portfolio Website

프론트엔드 개발자 yyyerin의 포트폴리오 웹사이트입니다.

![Portfolio](https://img.shields.io/badge/Portfolio-yyyerin.co.kr-61DAFB?style=flat-square&logo=react)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ 주요 기능

- 📱 **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 디바이스 지원
- 🎯 **스크롤 네비게이션**: 부드러운 스크롤 애니메이션과 섹션 이동
- 💼 **프로젝트 포트폴리오**: 필터링 기능이 있는 프로젝트 갤러리
- 🎨 **모던한 UI/UX**: Tailwind CSS를 활용한 세련된 디자인
- ⚡ **성능 최적화**: React 최신 버전과 최적화된 번들링

## 🛠️ 기술 스택

### Frontend

- **React** 19.0.0
- **TypeScript** 4.9.5
- **Tailwind CSS** 3.4.1
- **React Router** 7.4.0
- **Axios** 1.8.4
- **Day.js** 1.11.19
- **Zustand** 5.0.3

### Tools

- **React Scripts** 5.0.1
- **Web Vitals** 2.1.4

## 📦 설치 및 실행

### Prerequisites

- Node.js 16.x 이상
- npm 또는 yarn

### Installation

```bash
# 저장소 클론
git clone https://github.com/hyr0208/portfolio.git

# 프로젝트 디렉토리로 이동
cd portfolio

# 의존성 설치
npm install
```

### Development

```bash
# 개발 서버 실행
npm start
```

개발 서버는 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

### Build

```bash
# 프로덕션 빌드
npm run build
```

빌드된 파일은 `build` 폴더에 생성됩니다.

### Test

```bash
# 테스트 실행
npm test
```

## 📁 프로젝트 구조

```
portfolio/
├── public/              # 정적 파일
├── src/
│   ├── apis/           # API 관련 함수
│   ├── assets/         # 이미지, 폰트 등 리소스
│   ├── components/     # 재사용 가능한 컴포넌트
│   │   ├── NavMenu.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectFilter.tsx
│   │   └── ...
│   ├── constants/      # 상수 데이터
│   │   ├── projectData.ts
│   │   ├── certificationData.ts
│   │   ├── educationData.ts
│   │   └── imageData.ts
│   ├── hooks/          # 커스텀 훅
│   │   ├── useScrollToTarget.tsx
│   │   └── useVisitorCount.tsx
│   ├── pages/          # 페이지 컴포넌트
│   │   ├── mainProfile/
│   │   ├── aboutMe/
│   │   ├── career/
│   │   ├── project/
│   │   ├── certification/
│   │   ├── education/
│   │   └── lastPage/
│   ├── routes/         # 라우팅 설정
│   └── App.tsx
├── package.json
└── README.md
```

## 🎯 주요 섹션

1. **Main Profile**: 메인 히어로 섹션
2. **About Me**: 자기소개 및 기술 스택
3. **Career**: 경력 및 경험
4. **Project**: 프로젝트 포트폴리오
5. **Certification**: 자격증 목록
6. **Education**: 학력 정보
7. **Last Page**: 마무리 페이지

## 🚀 배포

현재 [portfolio.yyyerin.co.kr](https://portfolio.yyyerin.co.kr)에 배포되어 있습니다.

## 📝 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.

## 📧 연락처

- **GitHub**: [@hyr0208](https://github.com/hyr0208)
- **Portfolio**: [portfolio.yyyerin.co.kr](https://portfolio.yyyerin.co.kr)

---

Made with ❤️ by yyyerin
