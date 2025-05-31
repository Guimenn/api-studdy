import { questionSchema } from '../schemas/question.schema.js';
import { createAlternative } from './Alternative.js';

async function createQuestion(tx, questionData, quiz_id) {
	let question;

	try {
		question = questionSchema.parse(questionData);
	} catch (error) {
		console.error('Invalid question data:', error);
		throw new Error(`Invalid question data: ${error.message}`);
	}

	try {
		const createdQuestion = await tx.question.create({
			data: {
				statement: question.statement,
				points: question.points,
				quiz_id: quiz_id,
			},
		});

		for (const alternativeData of question.alternatives) {
			await createAlternative(tx, alternativeData, createdQuestion.id);
		}

		return createdQuestion;
	} catch (error) {
		console.error('Error creating question:', error);
		throw error;
	}
}

export { createQuestion };
