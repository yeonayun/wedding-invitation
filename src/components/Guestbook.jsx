import { useState } from 'react';
import '../styles/Guestbook.css';

function Guestbook() {
  const [entries, setEntries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showAllModal, setShowAllModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [deletePassword, setDeletePassword] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const now = new Date();
    const date = `${now.getFullYear().toString().slice(2)}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

    setEntries([{ name, password, message, date }, ...entries]);
    setName('');
    setPassword('');
    setMessage('');
    setShowModal(false);
  };

  const handleDelete = () => {
    if (deletePassword === entries[deleteIndex].password) {
      const updated = [...entries];
      updated.splice(deleteIndex, 1);
      setEntries(updated);
      setDeleteIndex(null);
      setDeletePassword('');
    } else {
      alert('비밀번호가 틀렸습니다.');
    }
  };

  return (
    <section className="guestbook">
      <h1 className="guestbook-header">Guestbook</h1>
      <h2 className="guestbook-title">따뜻한 마음으로 축복해 주세요</h2>

      <div className="entries-container">
        {entries.slice(0, 3).map((entry, index) => (
          <div key={index} className="entry-card">
            <button className="entry-delete-button" onClick={() => setDeleteIndex(index)}>✕</button>
            <p className="entry-name"><strong>{entry.name}</strong></p>
            <p className="entry-message">{entry.message}</p>
            <p className="entry-date">{entry.date}</p>
          </div>
        ))}
      </div>

      {entries.length > 3 && (
        <button className="secondary-button" onClick={() => setShowAllModal(true)}>더 보기</button>
      )}

      <button className="primary-button" onClick={() => setShowModal(true)}>작성하기</button>

      {/* 작성 모달 */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
            <form onSubmit={handleSubmit}>
              <label>성함</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="본인 성함 입력" required />

              <label>비밀번호</label>
              <input type="password" maxLength="10" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="방명록 삭제를 위한 비밀번호 입력(최대 10자리)" required />

              <label>내용</label>
              <textarea maxLength="100" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="최대 100자까지 입력" required />

              <button type="submit" className="submit-button">제출하기</button>
            </form>
          </div>
        </div>
      )}

      {/* 전체보기 모달 */}
      {showAllModal && (
        <div className="modal-overlay">
          <div className="modal scroll-modal">
            <button className="modal-close" onClick={() => setShowAllModal(false)}>✕</button>
            <div className="entries-scroll-list">
              {entries.map((entry, index) => (
                <div key={index} className="entry-card">
                  <button className="entry-delete-button" onClick={() => setDeleteIndex(index)}>✕</button>
                  <p className="entry-name"><strong>{entry.name}</strong></p>
                  <p className="entry-message">{entry.message}</p>
                  <p className="entry-date">{entry.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 삭제 모달 */}
      {deleteIndex !== null && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={() => setDeleteIndex(null)}>✕</button>
            <label>비밀번호</label>
            <input type="password" value={deletePassword} onChange={(e) => setDeletePassword(e.target.value)} placeholder="비밀번호 입력" />
            <button className="submit-button" onClick={handleDelete}>삭제하기</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Guestbook;
