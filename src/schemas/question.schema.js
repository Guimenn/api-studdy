import { z } from 'zod/v4';
import { alternativeSchema } from './alternative.schema.js';

// schema de validação de questão
export const questionSchema = z.object({
	statement: z
		.string()
		.min(3, { error: 'Invalid statement' })
		.transform((statement) => statement.trim()),
	points: z.number().min(1).max(100).default(10), // Cada questão vale 10 pontos por padrão
	alternatives: z.array(alternativeSchema).min(2, {
		error: 'At least two alternatives must be provided',
	}),
});
