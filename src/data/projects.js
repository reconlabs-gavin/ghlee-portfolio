const projects = [
  {
    id: 1,
    title: "PMCS(Perigee Mission Control System)",
    period: "2023.06 – 2024.10",
    image: "../assets/jdp-01k.png",
    description: "웹 기반 발사체 & 지상 설비 통합 관제 시스템 개발",
    technologies: ["React", "TypeScript", "FastAPI", "Python", "RabbitMQ"],
    highlights: [
      "PNID 기반 관제 화면용 범용 캔버스 컴포넌트 구현",
      "실시간 발사체 TLM 모니터링 시스템 개발",
      "MSA 구조 도입 및 마이크로 서비스 설계",
      "실제 발사체 & 발사 선박 시스템 원격 연동 시험 완료"
    ]
  },
  {
    id: 2,
    title: "저온가스 저장탱크 모니터링 시스템",
    period: "2021.06 – 2022.06",
    image: "https://via.placeholder.com/400x250/64b5f6/ffffff?text=Tank+Monitoring+System",
    description: "냉동고·저온가스 탱크 상태를 실시간으로 모니터링하는 시스템",
    technologies: ["React", "TypeScript", "C#", ".NET"],
    highlights: [
      "계층 구조 UI 대시보드 설계 및 범용 컴포넌트 구현",
      "고객사별 요구사항 대응 가능한 컴포넌트 범용성 확보",
      "백신안전기술지원센터, 대구 식약청 등 현장 안정적 운용",
      "실시간 관제 효율 및 시스템 확장성 확보"
    ]
  },
  {
    id: 3,
    title: "미디어 공급 냉장고 시스템",
    period: "2022.07 – 2023.03",
    image: "https://via.placeholder.com/400x250/81c7ff/ffffff?text=Media+Supply+System",
    description: "배양액의 가열 및 공급 상태를 모니터링하는 냉장 시스템",
    technologies: ["React", "TypeScript", "C#", ".NET"],
    highlights: [
      "배양액 가열 및 이송 관련 주요 API 구현",
      "온도 조건 달성을 위한 특수 로직 실험·최적화",
      "글로벌 제약사(일라이 릴리, 미국국립보건원) 솔루션 납품",
      "자동화된 배양 공정 및 실시간 모니터링 구현"
    ]
  },
  {
    id: 4,
    title: "AI 기반 대뇌 피질 두께분석 솔루션",
    period: "2019.02 – 2019.06",
    image: "https://via.placeholder.com/400x250/3498ff/ffffff?text=Brain+MRI+Analysis",
    description: "MRI 데이터를 통한 3D 뇌 시각화 및 분석 솔루션",
    technologies: ["React", "TypeScript", "three.js", "vtk.js"],
    highlights: [
      "3D 뇌 MRI 영역 시각화를 위한 React 컴포넌트 설계",
      "경량 3차원 볼륨 데이터 획득 시스템 구현",
      "웹 로딩 대기시간 최적화 솔루션 개발",
      "의료진 작업 프로세스 단축 및 업무 효율성 증대"
    ]
  },
  {
    id: 5,
    title: "AI 기반 전립선암 병리영상 솔루션",
    period: "2019.07 – 2021.05",
    image: "https://via.placeholder.com/400x250/64b5f6/ffffff?text=Pathology+Analysis",
    description: "병리영상(WSI)으로부터 전립선암을 진단하는 AI 플랫폼",
    technologies: ["React", "TypeScript", "openseadragon.js"],
    highlights: [
      "병리영상(WSI) 웹 브라우저 실시간 렌더링 시스템 구현",
      "AI Model 고도화를 위한 Dataset 생성용 Annotation 툴 구현",
      "고해상도 이미지 처리와 사용자 인터랙션 최적화",
      "기가 단위 이미지 고속 로딩 및 처리 시스템 구축"
    ]
  }
]

export default projects
