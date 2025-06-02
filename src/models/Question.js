import { createAlternative } from './Alternative.js';

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
