import React, { useState } from 'react';
import Modal from './Modal';
import '../styles/GuestCheck.css';

const GuestCheck = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);      // 1차 모달
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);  // 2차 모달
  const [isSubmitted, setIsSubmitted] = useState(false);      // 제출 메시지

  const [attendance, setAttendance] = useState('');
  const [side, setSide] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState('0');

  const [message, setMessage] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubmit = () => {
    if (!attendance || !side || !name) {
      alert('필수 항목을 모두 입력해주세요.');
      return;
    }
    setIsConfirmOpen(true);
  };

  const handleFinalSubmit = () => {
    if (!agree) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }

    console.log({ attendance, side, name, phone, guests, message });

    setIsConfirmOpen(false);
    setIsModalOpen(false);
    setIsSubmitted(true);

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="guest-check-container">
      {isSubmitted && (
        <div className="submit-toast">제출이 완료되었습니다.</div>
      )}

      <div className="guest-check-intro">
        <p className="title">참석 여부</p>
        <p className="subtitle">결혼식 참석 여부를 체크해주세요</p>
        <button className="check-button" onClick={() => setIsModalOpen(true)}>
          참석 여부 체크하기
        </button>
      </div>

      {/* 1차 모달 */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form className="guest-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>참석 여부를 선택해 주세요. <span className="required">*</span></label>
            <div className="radio-group">
              <div className={`radio-button ${attendance === '참석' ? 'selected' : ''}`} onClick={() => setAttendance('참석')}>참석</div>
              <div className={`radio-button ${attendance === '불참석' ? 'selected' : ''}`} onClick={() => setAttendance('불참석')}>불참석</div>
            </div>
          </div>

          <div className="form-group">
            <label>참석 정보를 선택해 주세요. <span className="required">*</span></label>
            <div className="radio-group">
              <div className={`radio-button ${side === '신랑측' ? 'selected' : ''}`} onClick={() => setSide('신랑측')}>신랑측</div>
              <div className={`radio-button ${side === '신부측' ? 'selected' : ''}`} onClick={() => setSide('신부측')}>신부측</div>
            </div>
          </div>

          <div className="form-group left-align">
            <label>성함<span className="required">*</span></label>
            <input type="text" placeholder="본인 성함 입력" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <div className="form-group left-align">
            <label>연락처</label>
            <input type="text" placeholder="핸드폰 번호 입력" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>

          <div className="form-group left-align">
            <label>추가 인원</label>
            <select className="small-select" value={guests} onChange={(e) => setGuests(e.target.value)}>
              <option value="0">본인 외 0명</option>
              <option value="1">본인 외 1명</option>
              <option value="2">본인 외 2명</option>
              <option value="3">본인 외 3명</option>
            </select>
          </div>

          <button className="next-button" onClick={handleSubmit}>다음</button>
        </form>
      </Modal>

      {/* 2차 모달 */}
      <Modal isOpen={isConfirmOpen} onClose={() => setIsConfirmOpen(false)}>
        <form className="guest-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>전달사항</label>
            <input
              type="text"
              maxLength={25}
              placeholder="최대 25자까지 입력 가능"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              개인정보 수집 및 이용에 동의합니다. <span className="required">*</span>
            </label>
            <p className="info-subtext">항목: 성함, 연락처 · 보유 기간: 행사 종료 시까지</p>
          </div>

          <div className="button-group">
            <button type="button" className="check-button" onClick={() => setIsConfirmOpen(false)}>이전</button>
            <button type="submit" className="next-button" onClick={handleFinalSubmit}>제출하기</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default GuestCheck;
