import express from 'express';
import cors from 'cors';

// Routes
import authRoute from './routes/loginRoute.js';
import adminRoute from './routes/adminRoute.js';
import quizRoute from './routes/quizRoute.js';

// express config
const app = express();
const port = 3000;

// express middlewares
app.use(express.json());
app.use(
	cors({
		origin: `http://localhost:3001`,
		credentials: true,
	}),
);

// Login route
app.use('/login', authRoute);

// Admin route
app.use('/admin', adminRoute);

// Quiz route
app.use('/quiz', quizRoute);

app.listen(port, () => {
	console.log(`Servidor rodando na porta: http://localhost:${port}`);
});
