import express from 'express';
import { GenericController } from '../../controllers/GenericController.js';

const router = express.Router();
const professorController = GenericController('professores');

// Rotas para Professores
router.get('/', professorController.listar);
router.get('/:id', professorController.buscarPorId);
router.post('/', professorController.criar);
router.put('/:id', professorController.atualizar);
router.delete('/:id', professorController.excluir);
router.get('/filtro', professorController.buscarComFiltro);
router.get('/:id/relacionamentos', professorController.buscarRelacionamentos);
router.get('/email/:email', professorController.buscaPorEmail)

export default router; 