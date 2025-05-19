import express from 'express';
import { GenericController } from '../../controllers/GenericController.js';

const router = express.Router();
const adminsController = GenericController('admins');

// Rotas para Alunos
router.get('/', adminsController.listar);
router.get('/:id', adminsController.buscarPorId);
router.post('/', adminsController.criar);
router.put('/:id', adminsController.atualizar);
router.delete('/:id', adminsController.excluir);
router.get('/filtro', adminsController.buscarComFiltro);
router.get('/:id/relacionamentos', adminsController.buscarRelacionamentos);

export default router; 