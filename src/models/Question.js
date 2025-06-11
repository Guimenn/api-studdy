import { createAlternative } from './Alternative.js';

/**
 * Model para operações relacionadas a questões de quiz
 * Gerencia a criação de questões e suas alternativas associadas
 */

/**
 * Cria uma nova questão com suas alternativas em uma transação atômica
 * @param {Object} tx - Transação do Prisma para operações atômicas
 * @param {Object} question - Dados da questão (statement, points, alternatives)
 * @param {number} quiz_id - ID do quiz ao qual a questão pertence
 * @returns {Object} - Questão criada
 * @throws {Error} - Se houver erro na criação da questão ou alternativas
 */
async function createQuestion(tx, question, quiz_id) {
	try {
		// Cria a questão na tabela Question
		const created = await tx.question.create({
			data: {
				statement: question.statement,
				points: question.points,
				quiz_id: quiz_id,
			},
		});

		// Para cada alternativa, cria a alternativa na tabela Alternative
		for (const alternativeData of question.alternatives) {
			await createAlternative(tx, alternativeData, created.id);
		}

		return created;
	} catch (error) {
		throw error;
	}
}

export { createQuestion };
