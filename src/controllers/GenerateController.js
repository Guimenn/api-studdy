import { z, ZodError } from 'zod/v4';
import {
	generateWrongAlternatives,
	generateResume,
} from '../models/Generate.js';

// Controller para gerar alternativas incorretas usando IA
async function generateWrongAlternativesController(req, res) {
	let { question, correct_answer } = req.body;

	try {
		question = z.string().trim().parse(question);
		correct_answer = z.string().trim().parse(correct_answer);
	} catch (error) {
		if (error instanceof ZodError) {
			const formatted = error['issues'].map((err) => ({
				path: err.path.join('.'),
				message: err.message,
			}));

			return res.status(400).json({
				message: 'Invalid request body',
				errors: formatted,
			});
		}
	}

	try {
		const rawResponse = await generateWrongAlternatives(
			question,
			correct_answer,
		);

		const incorrectAnswers = rawResponse.split('\n').filter(Boolean);

		res.status(200).json({ incorrectAnswers });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: error });
	}
}

// Controller para gerar resumos usando IA
async function generateResumeController(req, res) {
	let { title } = req.body;

	try {
		title = z.string().trim().parse(title);
	} catch (error) {
		if (error instanceof ZodError) {
			const formatted = error['issues'].map((err) => ({
				path: err.path.join('.'),
				message: err.message,
			}));

			return res.status(400).json({
				message: 'Invalid request body',
				errors: formatted,
			});
		}
	}

	try {
		const resume = await generateResume(title);
		res.status(200).json({ resume });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: error });
	}

	res.status(200).json({ resume });
}

export { generateWrongAlternativesController, generateResumeController };
