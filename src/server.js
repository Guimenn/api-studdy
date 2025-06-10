import express from 'express';
import prisma from '../prisma/client.js';
import { createUser } from './models/User.js';
import env from 'dotenv';
import cors from 'cors';

import authenticated from './middlewares/authenticated.js';
import autorizeRole from './middlewares/authorizeRole.js';
import blockAdmin from './middlewares/blockAdmin.js';
import { getQuizByIdController, getAllQuizzesController } from './controllers/QuizController.js';

// Routes
import authRoute from './routes/authRoute.js';
import adminRoute from './routes/adminRoute.js';
import teacherRoute from './routes/teacherRoute.js';
import generateRoute from './routes/generateRoute.js';
import studentRoute from './routes/studentRoute.js';
import userRoute from './routes/userRoute.js';
import quizRoute from './routes/quizRoute.js';
import ContestsEntraceRoute from './routes/contestsEntrace.js';

// Config
const app = express();
const port = 3000;
env.config();

// express middlewares
app.use(express.json());
app.use(
	cors({
		origin: `https://studdy-three.vercel.app`,
		credentials: true,
	}),
);

// Login route
app.use('/login', authRoute);


// Admin route
app.use('/admin', authenticated, autorizeRole(['Admin']), adminRoute);

// Teacher route
app.use('/teacher', authenticated, autorizeRole(['Teacher']), teacherRoute);

// Generate route
app.use('/generate', authenticated, autorizeRole(['Teacher']), generateRoute);

// Student route
app.use('/student', authenticated, autorizeRole(['Student']), studentRoute);

// Quiz route
app.use('/quiz', quizRoute);

// User Route
app.use('/user', userRoute);

// Contests Entrace Route
app.use('/contestsEntrace', ContestsEntraceRoute);

// Start server
try {
	const adminExists = await prisma.user.findFirst({
		where: { role: 'Admin' },
	});

	const admin = {
		name: 'Admin',
		email: 'admin@admin.com',
		password: 'admin123',
		cpf: '177.932.340-90',
		birth_date: new Date('2000-01-01'),
		role: 'Admin',
	};

	if (!adminExists) await createUser(admin);
} catch (error) {
	console.error('Error creating admin user:', error);
}

app.listen(port, () => {
	console.log(`Servidor rodando na porta: http://localhost:${port}`);
});
