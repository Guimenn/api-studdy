import express from 'express';
import { GenericController } from '../../controllers/GenericController.js';
import authMiddleware from '../../middlewares/authMiddleware.js';
import multer from 'multer';
import path from 'path';
import {
	fileURLToPath
} from 'url';

const __filename = fileURLToPath(
	import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(__dirname, '../uploads/'));
	},
	filename: (req, file, cb) => {
		const nomeArquivo = `${Date.now()}-${file.originalname}`;
		cb(null, nomeArquivo);
	}
})

const upload = multer({
	storage: storage
})
const router = express.Router();

const questoesController = GenericController('questoes');

// Rotas para Questões
router.get('/', questoesController.listar);
router.get('/:id', questoesController.buscarPorId);
router.post('/', questoesController.criar);
router.put('/:id', questoesController.atualizar);
router.delete('/:id', questoesController.excluir);
router.get('/filtro', questoesController.buscarComFiltro);
router.get('/:id/relacionamentos', questoesController.buscarRelacionamentos);

router.options('/', (req, res) => {
	res.setHeader('Allow', 'GET, PUT, DELETE, POST, OPTIONS');
	res.status(204).send()
})

export default router;

