import { z } from 'zod/v4';
import { userSchema, userUpdateSchema } from './user.schema.js';

// Schema de validação de estudante
export const studentSchema = z.object({
	user: userSchema,
	student: z.object({
		class_id: z.number().int().positive({ error: 'Invalid class id' }),
	}),
});

export const updateStudentSchema = z.object({
	user: userUpdateSchema,
	student: z.object({
		class_id: z.number().int().positive({ error: 'Invalid class id' }),
	}),
});
