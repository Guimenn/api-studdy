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

/**
 * Configuração do servidor Express
 * API principal da plataforma Studdy
 */
const app = express();
const port = 3000;
env.config();

// Middlewares globais
app.use(express.json());
app.use(
	cors({
		origin: `https://api-studdy.onrender.com`,
		credentials: true,
	}),
);

/**
 * Configuração das rotas da API
 * Cada rota tem middlewares específicos de autenticação e autorização
 */

// Rota de autenticação (pública)
app.use('/login', authRoute);

// Rotas protegidas por papel de usuário
app.use('/admin', authenticated, autorizeRole(['Admin']), adminRoute);
app.use('/teacher', authenticated, autorizeRole(['Teacher']), teacherRoute);
app.use('/generate', authenticated, autorizeRole(['Teacher']), generateRoute);
app.use('/student', authenticated, autorizeRole(['Student']), studentRoute);

// Rotas com proteção básica
app.use('/quiz', quizRoute);
app.use('/user', userRoute);
app.use('/contestsEntrace', ContestsEntraceRoute);

/**
 * Inicialização do servidor
 * Cria usuário admin padrão se não existir
 */
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
