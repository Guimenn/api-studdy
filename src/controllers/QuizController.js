import { createQuiz } from '../models/Quiz.js';

async function createQuizController(req, res) {
	try {
		const quiz = await createQuiz(req.body);
		return res.status(201).json(quiz);
	} catch (error) {
		console.error('Error creating quiz:', error);
		return res.status(500).json({ message: 'Error creating quiz' });
	}
}

export { createQuizController };
