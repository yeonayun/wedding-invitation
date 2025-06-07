import { useState } from 'react';
import '../styles/Guestbook.css'; // CSS 파일 경로 맞게 조정

function Guestbook() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [entries, setEntries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const today = new Date();
    const formattedDate = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;

    const newEntry = {
      name,
      message,
      date: formattedDate
    };

    setEntries([newEntry, ...entries]);
    setName('');
    setMessage('');
  };

  const handleDelete = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
  };

  return (
    <section className="guestbook">
      <h2 className="guestbook-title">방명록</h2>
      <form className="guestbook-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="축하 메시지"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="submit-button">✏️ 작성하기</button>
      </form>

      <div className="entries">
        {entries.length === 0 ? (
          <p>방명록이 아직 없어요.메시지를 남겨주세요!</p>
        ) : (
          entries.map((entry, index) => (
            <div key={index} className="entry-card">
              <p className="entry-from">FROM. <strong>{entry.name}</strong></p>
              <p className="entry-message">{entry.message}</p>
              <div className="entry-footer">
                <span>{entry.date}</span>
                <button className="delete-button" onClick={() => handleDelete(index)}>✕</button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Guestbook;
