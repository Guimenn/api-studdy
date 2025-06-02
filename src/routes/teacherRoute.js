import express from 'express';
import {
	getTeacherClassesController,
	getClassSubjectsByTeacherController,
	getSubjectQuizzesController,
} from '../controllers/TeacherController.js';
import {
	createQuizController,
	updateQuizController,
	updateQuizVisibilityController,
	deleteQuizController,
	generateAlternatives,
} from '../controllers/QuizController.js';

const router = express.Router();

// Rota para obter as turmas de um professor
router.get('/classes', getTeacherClassesController);

// Rota para obter as matérias que ele leciona naquela turma
router.get('/classes/:classId/subjects', getClassSubjectsByTeacherController);

// Rota para obter os quizzes de uma materia
router.get(
	'/classes/:classId/subjects/:subjectId/quizzes',
	getSubjectQuizzesController,
);

// Rota para criar questionários
router.post('/classes/:classId/quiz', createQuizController);

// Rota para gerar alternativas
router.post('/generate-alternatives', generateAlternatives);

// Rota para atualizar questionários
router.put(
	'/classes/:classId/subjects/:subjectId/quiz/:quizId',
	updateQuizController,
);

// Rota para atualizar a visibilidade de um questionário
router.patch(
	'/classes/:classId/subjects/:subjectId/quiz/:quizId/visibility',
	updateQuizVisibilityController,
);

// Rota para Deletar um questionário
router.delete(
	'/classes/:classId/subjects/:subjectId/quiz/:quizId',
	deleteQuizController,
);

export default router;
