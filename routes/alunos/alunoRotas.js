import express from 'express';
import { GenericController } from '../../controllers/GenericController.js';

const router = express.Router();
const alunoController = GenericController('alunos');

// Rotas para Alunos
router.get('/', alunoController.listar);
router.get('/:id', alunoController.buscarPorId);
router.post('/', alunoController.criar);
router.put('/:id', alunoController.atualizar);
router.delete('/:id', alunoController.excluir);
router.get('/filtro', alunoController.buscarComFiltro);
router.get('/:id/relacionamentos', alunoController.buscarRelacionamentos);

export default router; 