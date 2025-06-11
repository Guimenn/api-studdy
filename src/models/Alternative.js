/**
 * Model para operações relacionadas a alternativas de questões
 * Gerencia a criação e manipulação de alternativas em quizzes
 */

/**
 * Cria uma nova alternativa para uma questão específica
 * @param {Object} tx - Transação do Prisma para operações atômicas
 * @param {Object} alternative - Dados da alternativa (response, correct_alternative)
 * @param {number} question_id - ID da questão à qual a alternativa pertence
 * @returns {Object} - Alternativa criada
 * @throws {Error} - Se houver erro na criação
 */
async function createAlternative(tx, alternative, question_id) {
	try {
		// Cria a alternativa na tabela Alternative
		return await tx.alternative.create({
			data: { ...alternative, question_id },
		});
	} catch (error) {
		throw error;
	}
}

export { createAlternative };
