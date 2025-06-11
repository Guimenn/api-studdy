/**
 * Rotas específicas para funcionalidades do aluno
 * Gerencia acesso a turmas, matérias, quizzes, tentativas, resumos, vídeos e estatísticas
 */
import express from 'express';
import {
	getStudentClassController,
	getStudentSubjectsController,
	getStudentQuizzesController,
	getStudentStatisticsController,
} from '../controllers/StudentController.js';
import {
	getQuizzesBySubjectController,
	getSubjectStatisticsController,
	startAttemptController,
	changeAttemptStatusController,
	submitQuizController,
	getQuizAttemptResponsesController,
	checkExistingAttemptController,
} from '../controllers/QuizController.js';
import {
	getAllResumesController,
	getResumeByIdController,
} from '../controllers/ResumeController.js';
import {
	getVideoByIdController,
	getAllVideosController
} from '../controllers/VideoController.js';

const router = express.Router();

// Rota para obter as informações da turma do aluno
router.get('/class', getStudentClassController);

// Rota para obter as matérias da turma do aluno
router.get('/subjects', getStudentSubjectsController);

// Rota para obter todos os quizzes
router.get('/quizzes', getStudentQuizzesController);

// Rota para obter os quizzes de uma materia
router.get('/subjects/:subjectId/quizzes', getQuizzesBySubjectController);

// Rota para obter as estatísticas de uma materia
router.get('/subjects/:subjectId/statistics', getSubjectStatisticsController);

// Rota para iniciar uma tentativa
router.post(
	'/subjects/:subjectId/quizzes/:quizId/start',
	startAttemptController,
);

// rota para verificar se existe uma tentativa para um quiz específico
router.get('/attempt/:quizId', checkExistingAttemptController);

// rota para atualizar o status da tentativa
router.put('/attempt/:attemptId', changeAttemptStatusController);

// rota para enviar respostas
router.post('/attempt/:attemptId/submit', submitQuizController);

// rota para obter as respostas de uma tentativa
router.get('/attempt/:attemptId/responses', getQuizAttemptResponsesController);


// Rota para obter um resumo
router.get('/resumes', getAllResumesController);

// Rota para obter um resumo pelo ID do aluno
router.get('/resumes/:resumeId', getResumeByIdController);

// Rota para obter todos os vídeos
router.get('/videos', getAllVideosController);

// Rota para obter um vídeo pelo ID
router.get('/videos/:videoId', getVideoByIdController);
	
// Rota para obter as estatísticas do aluno
router.get('/status', getStudentStatisticsController);

export default router;
