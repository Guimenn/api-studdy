/**
 * Rotas para geração de conteúdo usando IA
 * Fornece endpoints para gerar resumos e alternativas incorretas
 */
import express from 'express';
import {
	generateResumeController,
	generateWrongAlternativesController,
} from '../controllers/GenerateController.js';

const router = express.Router();

// Rota para gerar resumos
router.post('/generate-resume', generateResumeController);

// Rota para gerar alternativas erradas
router.post('/generate-alternatives', generateWrongAlternativesController);
export default router;
