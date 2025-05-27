import express from 'express';
import alunoRotas from './alunos/alunoRotas.js';
import professorRotas from './professores/professorRotas.js';
import disciplinaRotas from './disciplinas/disciplinaRotas.js';
import turmaRotas from './turmas/turmaRotas.js';
import questaoRotas from './questoes/questoesRotas.js';
import gerarAlternativas from './questoes/gerarQuestao.js';
import adminsRotas from './admin/adminRotas.js'
import resumosRotas from './resumos/resumosRotas.js';
const router = express.Router();

// Registrando as rotas de cada entidade
router.use('/alunos', alunoRotas);
router.use('/professores', professorRotas);
router.use('/disciplinas', disciplinaRotas);
router.use('/turmas', turmaRotas);
router.use('/questoes', questaoRotas);
router.use('/gerar-alternativas', gerarAlternativas);
router.use('/admins', adminsRotas)
router.use('/resumos', resumosRotas);

export default router; 