/**
 * Rotas para acesso a quizzes
 * Permite que professores e alunos visualizem questionários
 */
import express from 'express';

import authenticated from '../middlewares/authenticated.js';
import autorizeRole from '../middlewares/authorizeRole.js';
import { getQuizByIdController, getAllQuizzesController } from '../controllers/QuizController.js';

const router = express.Router();

// Quiz routes (accessible by Teachers and Students only)
router.get('/quizzes', authenticated, autorizeRole(['Teacher', 'Student']), getAllQuizzesController);
router.get('/:quizId', authenticated, autorizeRole(['Teacher', 'Student']), getQuizByIdController);

export default router;
