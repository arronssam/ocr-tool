const express = require('express');
const cors = require('cors'); // 1. CORS 프로그램 불러오기
const app = express();

app.use(cors()); // 2. 모든 도메인에서 내 API에 접속할 수 있도록 허용 (보안 해제)
app.use(express.json());

// 임시 도서 데이터
let books = [
    { id: 1, title: "혼자 공부하는 자바스크립트", author: "윤인성" },
    { id: 2, title: "Do it! 노드제이스", author: "조인석" }
];

// 전체 도서 목록 조회
app.get('/books', (req, res) => {
    res.json(books);
});

// 새로운 도서 등록
app.post('/books', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(newBook);
    res.status(201).json({ message: "도서가 등록되었습니다!", book: newBook });
});

// 포트 설정
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`서버가 포트 ${PORT} 에서 달리는 중입니다!`);
});
