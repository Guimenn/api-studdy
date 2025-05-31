import express from 'express';
import { createQuizController } from '../controllers/QuizController.js';

const router = express.Router();

router.post('/', createQuizController);

export default router;
