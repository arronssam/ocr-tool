const express = require('express');
const app = express();

// 서버가 받아들이는 데이터 형식 설정 (JSON 형태)
app.use(express.json());

// 임시 도서 데이터 (원래는 DB에 넣어야 하지만, 처음엔 메모리에 저장합니다)
let books = [
    { id: 1, title: "혼자 공부하는 자바스크립트", author: "윤인성" },
    { id: 2, title: "Do it! 노드제이스", author: "조인석" }
];

// [조회] 브라우저에 주소를 입력하면 도서 목록을 보여주는 기능
app.get('/books', (req, res) => {
    res.json(books);
});

// [등록] 새로운 도서를 추가하는 기능
app.post('/books', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(newBook);
    res.status(201).json({ message: "도서가 등록되었습니다!", book: newBook });
});

// 클라우드 배포를 위해 포트 설정 (매우 중요)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 달리는 중입니다!`);
});