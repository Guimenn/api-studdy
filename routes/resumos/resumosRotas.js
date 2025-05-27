import express from 'express';
const router = express.Router();
import { gerarResumo } from '../../controllers/resumo/resumoController.js';

router.post('/', gerarResumo);

router.options('/', (req, res) => {
	res.setHeader('Allow', 'POST, OPTIONS');
	res.status(204).send()
})

export default router;