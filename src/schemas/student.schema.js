import { z } from 'zod/v4';
import { userSchema, userUpdateSchema } from './user.schema.js';

/**
 * Schema de validação para estudantes
 * Combina dados de usuário com informações específicas do estudante (turma)
 */
export const studentSchema = z.object({
	user: userSchema,
	student: z.object({
		class_id: z.number().int().positive({ error: 'Invalid class id' }),
	}),
});

/**
 * Schema para atualização de dados do estudante
 */
export const updateStudentSchema = z.object({
	user: userUpdateSchema,
	student: z.object({
		class_id: z.number().int().positive({ error: 'Invalid class id' }),
	}),
});
