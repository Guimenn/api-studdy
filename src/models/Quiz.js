import prisma from '../../prisma/client.js';
import { quizSchema } from '../schemas/quiz.schema.js';
import { createQuestion } from './Question.js';

async function createQuiz(quizData) {
	let quiz;

	try {
		quiz = quizSchema.parse(quizData);
	} catch (error) {
		console.error('Invalid quiz data:', error);
		throw new Error(`Invalid quiz data: ${error.message}`);
	}

	try {
		return await prisma.$transaction(async (tx) => {
			let totalPoints = 0;

			quiz.questions.forEach((question) => {
				totalPoints += question.points;
			});

			const createdQuiz = await tx.quiz.create({
				data: {
					title: quiz.title,
					duration_minutes: quiz.duration_minutes,
					max_points: totalPoints, // calcula com base nos pontos da questão
					max_attempt: quiz.max_attempts,
					visibility: quiz.visibility || 'draft',
					teacher_subject_class_id: 1,
				},
			});

			for (const questionData of quiz.questions) {
				await createQuestion(tx, questionData, createdQuiz.id);
			}

			return createdQuiz;
		});
	} catch (error) {
		console.log('Error creating quiz:', error);
		throw error;
	}
}

export { createQuiz };
