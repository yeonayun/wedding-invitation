import '../styles/Invitation.css'
import { FaPhone, FaCommentDots } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'

function Invitation() {
  const cardRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target) // 한 번만 실행
        }
      },
      { threshold: 0.2 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current)
    }
  }, [])

  const groom = {
    name: '전영호',
    phone: '010-1234-5678',
    kakao: 'https://open.kakao.com/o/groom-link'
  }

  const bride = {
    name: '연아윤',
    phone: '010-9876-5432',
    kakao: 'https://open.kakao.com/o/bride-link'
  }

  return (
    <div
      className={`invitation-card fade-up ${isVisible ? 'show' : ''}`}
      ref={cardRef}
    >
      <div className="invitation-icon">
        <img src="/flower.png" alt="flower" />
    </div>
    
      <h2>INVITATION</h2>
      <p className="invitation-text">
        겨울로 가는 길목에서,<br/><br/>
        <strong>2024년 11월 30일</strong>,<br/>
        우리의 첫 만남이 따스한 인연이 되었습니다.<br/><br/>
        그리고 7년이 흐른 오늘, <strong>2030년 11월 30일</strong>,<br/>
        그 인연을 영원한 사랑으로 맺으려 합니다.<br/><br/>
        소중한 여러분을 모시고<br/>
        우리의 사랑과 약속을 나누고자 합니다.<br/><br/>
        함께해 주셔서 따뜻한 축복과 격려로<br/>
        이 순간을 더욱 빛내 주시면 감사하겠습니다.
      </p>

      <div className="contact-row">
        <div className="contact">
          <p>김상기 · 이선주 <span>장남</span> {groom.name}</p>
          <a href={`tel:${groom.phone}`}><FaPhone /></a>
          <a href={groom.kakao} target="_blank" rel="noopener noreferrer"><FaCommentDots /></a>
        </div>
        <div className="contact">
          <p>연장흠 · 이미영 <span>장녀</span> {bride.name}</p>
          <a href={`tel:${bride.phone}`}><FaPhone /></a>
          <a href={bride.kakao} target="_blank" rel="noopener noreferrer"><FaCommentDots /></a>
        </div>
      </div>

      <div className="calendar">
        <div className="calendar-header">11월</div>
        <div className="calendar-grid">
          {['', '', '', '', '', '1', '2',
            '3','4','5','6','7','8','9',
            '10','11','12','13','14','15','16',
            '17','18','19','20','21','22','23',
            '24','25','26','27','28','29',
            <div className="highlight">30</div>]
            .map((day, i) => (
              <div key={i} className="calendar-day">{day}</div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Invitation
