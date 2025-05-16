import express from 'express';
const router = express.Router();
import { gerarAlternativas } from '../../controllers/AnswerController.js';

router.post('/', gerarAlternativas);

router.options('/', (req, res) => {
	res.setHeader('Allow', 'POST, OPTIONS');
	res.status(204).send()
})

export default router;