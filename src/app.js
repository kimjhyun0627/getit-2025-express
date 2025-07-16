import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// 기본 라우트
app.get('/', (req, res) => {
	res.send('Hello, World!');
});

// JSON 응답 예시
app.get('/api/status', (req, res) => {
	res.status(200).json({ status: '안녕하세요 !', timestamp: Date.now() });
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
