const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 4000;
const DATA_FILE = path.join(__dirname, 'data', 'guestbook.json');

app.use(cors());
app.use(express.json());

// 방명록 데이터 불러오기
app.get('/api/guestbook', (req, res) => {
  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ message: '데이터를 불러올 수 없습니다.' });
    res.json(JSON.parse(data || '[]'));
  });
});

// 방명록 작성
app.post('/api/guestbook', (req, res) => {
  const { name, password, message } = req.body;

  if (!name || !password || !message) {
    return res.status(400).json({ message: '모든 필드를 입력해주세요.' });
  }

  const newEntry = {
    id: Date.now(), // 고유 ID
    name,
    password,
    message,
    date: new Date().toLocaleString(),
  };

  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    let entries = [];
    if (!err && data) entries = JSON.parse(data);
    entries.unshift(newEntry); // 최신순으로 추가
    fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2), (err) => {
      if (err) return res.status(500).json({ message: '저장에 실패했습니다.' });
      res.status(200).json(newEntry); // 새로 추가된 항목을 반환
    });
  });
});

// 방명록 삭제
app.delete('/api/guestbook/:id', (req, res) => {
  const id = Number(req.params.id);
  const { password } = req.body;

  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ message: '데이터를 불러올 수 없습니다.' });

    let entries = JSON.parse(data);
    const entryIndex = entries.findIndex(entry => entry.id === id);

    if (entryIndex === -1) {
      return res.status(404).json({ message: '방명록을 찾을 수 없습니다.' });
    }

    if (entries[entryIndex].password === password) {
      entries.splice(entryIndex, 1);
      fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2), (err) => {
        if (err) return res.status(500).json({ message: '삭제에 실패했습니다.' });
        res.status(200).json({ message: '삭제 완료' });
      });
    } else {
      res.status(403).json({ message: '비밀번호가 틀렸습니다.' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
