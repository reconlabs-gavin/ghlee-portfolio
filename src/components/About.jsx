import profile from '../assets/profile.jpg'

export default function About() {
  return (
    <div className="about">
      <img src={profile} alt="Profile" className="profile-img" />
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          다양한 산업에서 실시간 데이터 처리, 관제 시스템, 3D 시각화 등 프론트엔드와 백엔드 모두 경험한 개발자입니다.
          발사체 관제 시스템부터 의료 AI 솔루션까지, 혁신적인 기술로 문제를 해결하는 것을 즐깁니다.
        </p>
      </div>
    </div>
  )
}
