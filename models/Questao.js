
import { readAll, read, deleteRecord, update, create } from '../config/database.js';

const listarQuestoes = async () => {
    try {
        const questoes = await readAll('questoes');
        return questoes;
    } catch (err) {
        console.error('Erro ao listar questoes: ', err);
        throw err;
    }
};


const obterQuestaoPorID = async (id) => {
	try  {
		return await read('questoes', `id = ${id}`);
	} catch (err) {
		console.error('Erro ao obter Questao por ID: ', err);
		throw err;
	 }
};

const criarQuestao = async (QuestaoData) => {
    try {
        return await create('questoes', QuestaoData);
    } catch (error) {
        console.error('Erro ao criar Questao: ', error)
        throw error;
    }
}

const atualizarQuestao = async (id, QuestaoData) => {
    try {
        await update('questoes', QuestaoData, `id = ${id}`);
    } catch (error) {
        console.error('Erro ao atualizar Questao:', error)
        throw error
    }
}

const excluirQuestao = async (id) => {
    try {
        await deleteRecord('questoes', `id = ${id}`)
    }
    catch (error) {
        console.error('Erro ao excluir Questao: ', error)
        throw error;
    }
}

export { listarQuestoes, obterQuestaoPorID, criarQuestao, atualizarQuestao, excluirQuestao };