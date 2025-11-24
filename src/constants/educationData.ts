export interface Education {
  id: number;
  school: string; // 학교명
  major: string; // 전공
  degree: string; // 학위 (예: 학사, 석사)
  period: string; // 기간 (예: "2015.03 - 2019.02")
  status: "graduated" | "attending"; // 졸업/재학
  description?: string; // 설명 (선택)
  activities?: string[]; // 주요 활동이나 과목 (선택)
}

export const educations: Education[] = [
  {
    id: 1,
    school: "한양사이버대학교",
    major: "재무회계세무학과",
    degree: "학사",
    period: "2019.09 - 2023.08",
    status: "graduated",
    description:
      "재무, 회계, 세무 분야를 통합적으로 교육하여 경제주체들의 재무·회계·세무 의사결정 전문가를 양성하고, 글로벌 금융시장에 대한 이해를 제공하는 것을 목표로 하는 학과입니다.",
    // activities: ["주요 활동 1", "주요 활동 2"],
  },
];
