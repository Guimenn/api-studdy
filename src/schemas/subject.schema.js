import { z } from 'zod/v4';

/**
 * Schema de validação para disciplinas/matérias
 * Define a estrutura e validação para nomes de disciplinas acadêmicas
 */
export const subjectSchema = z.object({
	name: z
		.string()
		.min(3, {
			error: 'The subject name must be at least 3 characters long',
		})
		.max(100, {
			error: 'The subject name must be at most 100 characters long',
		})
		.transform((name) => name.trim().toLowerCase()),
});
