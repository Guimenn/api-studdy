import express from 'express';
import { createQuizController, generateAlternatives } from '../controllers/QuizController.js';

const router = express.Router();

router.post('/', createQuizController);
router.post('/generate-alternatives', generateAlternatives);

export default router;
