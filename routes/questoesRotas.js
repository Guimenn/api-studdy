import express from 'express';

import {
	listarQuestoesController,
	obterQuestaoPorIDController,
	criarQuestaoController,
	atualizarQuestaoController,
	excluirQuestaoController
} from '../controllers/AnswerController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
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



router.get('/', listarQuestoesController);
router.get('/:id', obterQuestaoPorIDController);

router.post('/', upload.single('capa'), criarQuestaoController)


router.put('/:id', authMiddleware, upload.single('capa'), atualizarQuestaoController)
router.delete('/:id', authMiddleware, excluirQuestaoController)

router.options('/', (req, res) => {
	res.setHeader('Allow', 'GET, PUT, DELETE, POST, OPTIONS');
	res.status(204).send()
})



export default router;

