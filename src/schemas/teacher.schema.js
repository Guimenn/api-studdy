import { z } from 'zod/v4';
import { userSchema, userUpdateSchema } from './user.schema.js';

/**
 * Schema de validação para professores
 * Combina dados de usuário com informações específicas do professor (disciplinas que leciona)
 */
export const teacherSchema = z.object({
	user: userSchema,
	teacher: z.object({
		subjects: z
			.array(
				z.object({
					id: z.number().int().positive(),
					name: z.string().min(1).optional(),
				}),
			)
			.nonempty('At least one subject must be provided'),
	}),
});

/**
 * Schema para atualização de dados do professor
 */
export const updateTeacherSchema = z.object({
	user: userUpdateSchema,
	teacher: z.object({
		subjects: z
			.array(
				z.object({
					id: z.number().int().positive(),
					name: z.string().min(1).optional(),
				}),
			)
			.nonempty('At least one subject must be provided'),
	}),
});
