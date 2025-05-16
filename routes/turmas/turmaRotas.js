import express from 'express';
import { GenericController } from '../../controllers/GenericController.js';

const router = express.Router();
const turmaController = GenericController('turmas');

// Rotas para Turmas
router.get('/', turmaController.listar);
router.get('/:id', turmaController.buscarPorId);
router.post('/', turmaController.criar);
router.put('/:id', turmaController.atualizar);
router.delete('/:id', turmaController.excluir);
router.get('/filtro', turmaController.buscarComFiltro);
router.get('/:id/relacionamentos', turmaController.buscarRelacionamentos);

export default router; 