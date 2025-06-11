/**
 * Rotas específicas para funcionalidades do professor
 * Gerencia turmas, matérias, quizzes, vídeos, resumos e estatísticas
 */
import express from 'express';
import {
	getTeacherClassesController,
	getClassSubjectsByTeacherController,
	getSubjectQuizzesController,
	getTeacherClassByIdController,
	getTeacherStatisticsController,
	getClassStatisticsController
} from '../controllers/TeacherController.js';
import {
	createQuizController,
	updateQuizController,
	updateQuizVisibilityController,
	deleteQuizController,
	getQuizWithQuestionsController,
} from '../controllers/QuizController.js';
import {
	createVideoController,
	getAllVideosController,
	getVideoByIdController,
	updateVideoController,
	deleteVideoController,
} from '../controllers/VideoController.js';
import {
	getAllResumesController,
	getResumeByIdController,
	createResumeController,
	updateResumeController,
	deleteResumeController,
} from '../controllers/ResumeController.js';
import {
	getQuizResultsController,
} from '../controllers/QuizController.js';

const router = express.Router();

// rota para obter as estatísticas do professor
router.get('/status', getTeacherStatisticsController);

// Rota para obter as turmas de um professor
router.get('/classes', getTeacherClassesController);

// Rota para obter uma turma específica
router.get('/classes/:classId', getTeacherClassByIdController);

// Rota para obter as matérias que ele leciona naquela turma
router.get('/classes/:classId/subjects', getClassSubjectsByTeacherController);

// Rota para obter os quizzes de uma materia
router.get(
	'/classes/:classId/subjects/:subjectId/quizzes',
	getSubjectQuizzesController,
);

// Rota para obter um quiz específico com suas questões
router.get(
	'/classes/:classId/subjects/:subjectId/quiz/:quizId',
	getQuizWithQuestionsController,
);

// Rota para obter os resultados dos alunos em um quiz
router.get(
	'/classes/:classId/quizzes/:quizId/results',
	getQuizResultsController
);

// Rota para criar questionários
router.post('/classes/:classId/subjects/:subjectId/quiz', createQuizController);

// Rota para atualizar questionários
router.put('/quiz/:quizId', updateQuizController);

// Rota para atualizar a visibilidade de um questionário
router.patch('/quiz/:quizId/visibility', updateQuizVisibilityController);

// Rota para Deletar um questionário
router.delete('/quiz/:quizId', deleteQuizController);

// Rota para criar vídeos
router.post('/videos', createVideoController);

// Rota para obter todos os vídeos
router.get('/videos', getAllVideosController);

// Rota para obter um vídeo pelo ID
router.get('/videos/:videoId', getVideoByIdController);

// Rota para atualizar um vídeo
router.put('/videos/:videoId', updateVideoController);

// Rota para deletar um vídeo
router.delete('/videos/:videoId', deleteVideoController);

// Rota para obter um resumo
router.get('/resumes', getAllResumesController);

// Rota para obter um resumo pelo ID do aluno
router.get('/resumes/:resumeId', getResumeByIdController);

// Rota para criar um resumo
router.post('/resumes', createResumeController);

// Rota para atualizar um resumo
router.put('/resumes/:resumeId', updateResumeController);

// Rota para deletar um resumo
router.delete('/resumes/:resumeId', deleteResumeController);

// Rota para obter estatísticas da turma
router.get('/classes/:classId/statistics', getClassStatisticsController);

export default router;
