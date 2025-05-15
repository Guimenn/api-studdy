import express from 'express';
const router = express.Router();
import { generateAlternatives } from '../controllers/AnswerController.js';

router.post('/gerar-alternativas', generateAlternatives);

router.options('/', (req, res) => {
	res.setHeader('Allow', 'POST, OPTIONS');
	res.status(204).send()
})

export default router;