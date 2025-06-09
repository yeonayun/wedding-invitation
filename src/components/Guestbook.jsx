import { useState } from 'react';
import '../styles/Guestbook.css';

function Guestbook() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [entries, setEntries] = useState([]);
  const [showForm, setShowForm] = useState(false);

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
    setShowForm(false);
  };

  const handleDelete = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
  };

  return (
    <section className="guestbook">
      <h2 className="guestbook-title">방명록</h2>

      {showForm ? (
        <form className="guestbook-form" onSubmit={handleSubmit}>
          <div className="form-box">
            <div
              className="form-header"
              onClick={() => document.getElementById('nameInput')?.focus()}
            >
              FROM.
              <input
                id="nameInput"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름"
                className="inline-input"
              />
            </div>
            <textarea
              placeholder="작성하기.."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="form-footer">
              <button type="button" onClick={() => setShowForm(false)} className="close-button">✕</button>
              <button type="submit" className="submit-button">완료</button>
            </div>
          </div>
        </form>
      ) : (
        <button className="show-form-button" onClick={() => setShowForm(true)}>✏️ 작성하기</button>
      )}

      <div className="entries">
        {entries.length === 0 ? (
          <p>방명록이 아직 없어요. 메시지를 남겨주세요!</p>
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
