# 이건희(LEE GEON HEE) Portfolio

[![Deploy Status](https://github.com/your-username/my-portfolio-app/workflows/Deploy%20to%20AWS%20S3%20+%20CloudFront/badge.svg)](https://github.com/your-username/my-portfolio-app/actions)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-ghlee--edu.com-blue)](https://ghlee-edu.com)
[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.0-orange.svg)](https://vitejs.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.178.0-green.svg)](https://threejs.org/)

> 다양한 산업 경험을 가진 풀스택 개발자의 인터랙티브 포트폴리오 웹사이트

## 🌟 특징

- **3D 애니메이션**: Three.js 기반 인터랙티브 포인트 클라우드 배경
- **반응형 디자인**: 모바일부터 대형 디스플레이까지 최적화된 UI/UX
- **스마트 내비게이션**: 스크롤 방향 감지 및 자동 숨김/표시 기능
- **현대적 기술 스택**: React 19 + Vite + ES6+ 활용
- **AWS 클라우드 배포**: S3 + CloudFront + GitHub Actions 자동 배포
- **성능 최적화**: 모바일 디바이스별 성능 최적화 및 프레임 스킵 적용

## 🚀 라이브 데모

**🌐 [https://ghlee-edu.com](https://ghlee-edu.com)**

## 🛠 기술 스택

### Frontend
- **React 19.1.0**: 최신 React Hook 및 Concurrent Features 활용
- **Vite 7.0.0**: 초고속 빌드 도구 및 HMR
- **Three.js 0.178.0**: 3D 그래픽 및 WebGL 렌더링
- **Modern CSS**: Flexbox, Grid, CSS Variables, Animation

### 배포 및 인프라
- **AWS S3**: 정적 웹사이트 호스팅
- **AWS CloudFront**: 글로벌 CDN 및 HTTPS 지원
- **AWS Route 53**: 도메인 관리 및 DNS
- **GitHub Actions**: CI/CD 자동 배포 파이프라인

### 개발 도구
- **ESLint**: 코드 품질 및 일관성 유지
- **VS Code Extensions**: 개발 환경 최적화

## 📁 프로젝트 구조

```
my-portfolio-app/
├── public/                    # 정적 파일
│   ├── favicon.svg
│   ├── profile.jpg
│   └── vite.svg
├── src/
│   ├── components/           # React 컴포넌트
│   │   ├── About.jsx        # 자기소개 섹션
│   │   ├── Contact.jsx      # 연락처 정보
│   │   ├── Experience.jsx   # 경력 사항
│   │   ├── Header.jsx       # 히어로 섹션
│   │   ├── PointCloudBackground.jsx  # 3D 배경
│   │   ├── Projects.jsx     # 프로젝트 포트폴리오
│   │   └── Skills.jsx       # 기술 스택
│   ├── data/                # 데이터 파일
│   │   ├── experiences.js   # 경력 데이터
│   │   ├── projects.js      # 프로젝트 데이터
│   │   └── skills.js        # 기술 스택 데이터
│   ├── assets/              # 이미지 및 미디어
│   ├── App.jsx              # 메인 애플리케이션
│   ├── App.css              # 글로벌 스타일
│   ├── index.css            # 기본 스타일
│   └── main.jsx             # 앱 진입점
├── aws-setup/               # AWS 설정 가이드
│   ├── README.md            # 배포 가이드
│   ├── s3-bucket-policy.json
│   └── github-actions-policy.json
├── .github/workflows/       # CI/CD 파이프라인
│   └── deploy.yml           # 자동 배포 설정
└── package.json
```

## 🎯 주요 기능

### 1. 3D 인터랙티브 배경
- **동적 포인트 클라우드**: 2000개 파티클의 실시간 웨이브 애니메이션
- **성능 최적화**: 디바이스별 파티클 수 조정 (모바일: 800개, 데스크톱: 2000개)
- **그라디언트 색상**: 다양한 블루 톤의 아름다운 색상 팔레트

### 2. 스마트 내비게이션
```javascript
// 스크롤 방향 감지 네비게이션
const handleScroll = () => {
  const currentScrollY = window.scrollY
  
  if (window.innerWidth <= 768) {
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShowNav(false) // 아래로 스크롤 시 숨김
    } else {
      setShowNav(true)  // 위로 스크롤 시 표시
    }
  }
}
```

### 3. 반응형 디자인
- **모바일 우선**: 320px부터 2560px+ 대형 디스플레이까지 지원
- **햄버거 메뉴**: 모바일에서 직관적인 내비게이션
- **적응형 그리드**: 화면 크기에 따른 레이아웃 자동 조정

### 4. 프로젝트 쇼케이스
- **5개 주요 프로젝트**: 발사체 관제 시스템, AI 의료 솔루션 등
- **기술 스택 태그**: 각 프로젝트의 사용 기술 시각화
- **인터랙티브 카드**: 호버 효과 및 smooth transition

## 🚀 빠른 시작

### 1. 프로젝트 클론
```bash
git clone https://github.com/your-username/my-portfolio-app.git
cd my-portfolio-app
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 개발 서버 실행
```bash
npm run dev
```

### 4. 브라우저에서 확인
```
http://localhost:5173
```

## 📦 빌드 및 배포

### 로컬 빌드
```bash
npm run build     # 프로덕션 빌드
npm run preview   # 빌드 결과 미리보기
```

### AWS 자동 배포
1. **main 브랜치**에 푸시하면 자동으로 배포됩니다
2. **GitHub Actions**가 다음 작업을 수행합니다:
   - 의존성 설치 및 빌드
   - AWS S3에 파일 업로드
   - CloudFront 캐시 무효화
   - 배포 완료 알림

## ⚙️ AWS 설정

상세한 AWS 설정 가이드는 [aws-setup/README.md](./aws-setup/README.md)를 참조하세요.

### 필요한 GitHub Secrets
```
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_REGION
S3_BUCKET_NAME
CLOUDFRONT_DISTRIBUTION_ID
DOMAIN_NAME
```

## 🎨 커스터마이징

### 개인 정보 수정
```javascript
// src/data/experiences.js
const experiences = [
  {
    position: "개발자",
    company: "회사명",
    period: "2023.01 – 현재",
    details: ["주요 업무 내용"]
  }
]

// src/data/projects.js
const projects = [
  {
    title: "프로젝트명",
    description: "프로젝트 설명",
    technologies: ["React", "Node.js"]
  }
]
```

### 스타일 수정
```css
/* src/App.css */
:root {
  --primary-color: #3498ff;    /* 메인 컬러 */
  --secondary-color: #64b5f6;  /* 보조 컬러 */
  --background-color: #0f1419; /* 배경 컬러 */
}
```

### 3D 배경 설정
```javascript
// src/components/PointCloudBackground.jsx
const config = {
  particleCount: 2000,        // 파티클 수
  animationSpeed: 1.0,        // 애니메이션 속도
  quality: 1.0                // 렌더링 품질
}
```

## 📊 성능 최적화

### 모바일 최적화
- **파티클 수 조정**: 디바이스 성능에 따른 동적 조정
- **프레임 스킵**: 모바일에서 60fps → 30fps로 조정
- **이미지 최적화**: WebP 포맷 및 압축 적용

### 번들 최적화
- **Code Splitting**: 컴포넌트별 lazy loading
- **Tree Shaking**: 사용하지 않는 코드 제거
- **Asset Optimization**: 이미지 및 폰트 최적화

## 🔧 개발 도구

### 권장 VS Code 확장
- Amazon Q (코드 어시스턴트)
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- Auto Rename Tag

### 코드 품질
```bash
npm run lint        # ESLint 실행
npm run lint:fix    # ESLint 자동 수정
```

## 🌍 브라우저 지원

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ IE 11 (제한적 지원)

## 📄 라이선스

이 프로젝트는 개인 포트폴리오용으로 제작되었습니다.

## 👨‍💻 개발자

**이건희 (LEE GEON HEE)**
- 📧 Email: rjsgml5698@gmail.com
- 💼 LinkedIn: [LEE GEON HEE](https://www.linkedin.com/in/geonhee-lee-092725186/)
- 🌐 Portfolio: [https://ghlee-edu.com](https://ghlee-edu.com)

---

### 📚 추가 정보

- **React 19 공식 문서**: [https://react.dev](https://react.dev)
- **Vite 공식 문서**: [https://vitejs.dev](https://vitejs.dev)
- **Three.js 공식 문서**: [https://threejs.org/docs](https://threejs.org/docs)
- **AWS 배포 가이드**: [aws-setup/README.md](./aws-setup/README.md)
