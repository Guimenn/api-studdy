import { z } from 'zod/v4';
import { questionSchema } from './question.schema.js';

// Schema de validação de questionário
export const quizSchema = z.object({
	title: z
		.string()
		.min(3, { error: 'Invalid title' })
		.transform((title) => title.trim()),
	questions: z.array(questionSchema).min(1, {
		error: 'At least one question must be provided',
	}),
	duration_minutes: z.number().positive({ error: 'Invalid duration' }),
	max_attempts: z.number().positive({ error: 'Invalid max attempts' }),
	visibility: z.enum(['draft', 'public', 'archived'], {
		error: 'Invalid visibility',
	}),
});

export const visibilitySchema = z.object({
	visibility: z.enum(['draft', 'public', 'archived'], {
		error: 'Invalid visibility',
	}),
});
