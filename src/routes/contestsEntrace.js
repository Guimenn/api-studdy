/**
 * Rotas para gerenciamento de concursos e vestibulares
 * Operações CRUD com controle de acesso baseado em roles
 */
import express from 'express';
import {
	getAllContestsController,
	getContestByIdController,
	createContestController,
	updateContestController,
	deleteContestController,
} from '../controllers/ContestController.js';
import {
	getAllEntranceExamsController,
	getEntranceExamByIdController,
	createEntranceExamController,
	updateEntranceExamController,
	deleteEntranceExamController,
} from '../controllers/EntranceController.js';
import { authenticateToken } from '../middlewares/authenticateToken.js';
import authorizeRole from '../middlewares/authorizeRole.js';

const router = express.Router();

// Contest Routes
// GET - Público (todos podem acessar)
router.get('/contests', getAllContestsController);
router.get('/contests/:contestId', getContestByIdController);

// POST, PUT, DELETE - Apenas Admin e Teacher
router.post('/contests', authenticateToken, authorizeRole(['Admin', 'Teacher']), createContestController);
router.put('/contests/:contestId', authenticateToken, authorizeRole(['Admin', 'Teacher']), updateContestController);
router.delete('/contests/:contestId', authenticateToken, authorizeRole(['Admin', 'Teacher']), deleteContestController);

// Entrance Exam Routes
// GET - Público (todos podem acessar)
router.get('/entrance-exams', getAllEntranceExamsController);
router.get('/entrance-exams/:examId', getEntranceExamByIdController);

// POST, PUT, DELETE - Apenas Admin e Teacher
router.post('/entrance-exams', authenticateToken, authorizeRole(['Admin', 'Teacher']), createEntranceExamController);
router.put('/entrance-exams/:examId', authenticateToken, authorizeRole(['Admin', 'Teacher']), updateEntranceExamController);
router.delete('/entrance-exams/:examId', authenticateToken, authorizeRole(['Admin', 'Teacher']), deleteEntranceExamController);

export default router;
