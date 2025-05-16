import express from 'express';
import { GenericController } from '../../controllers/GenericController.js';

const router = express.Router();
const disciplinaController = GenericController('disciplinas');

// Rotas para Disciplinas
router.get('/', disciplinaController.listar);
router.get('/:id', disciplinaController.buscarPorId);
router.post('/', disciplinaController.criar);
router.put('/:id', disciplinaController.atualizar);
router.delete('/:id', disciplinaController.excluir);
router.get('/filtro', disciplinaController.buscarComFiltro);
router.get('/:id/relacionamentos', disciplinaController.buscarRelacionamentos);

export default router; 