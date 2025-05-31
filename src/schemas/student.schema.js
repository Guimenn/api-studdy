import { z } from 'zod/v4';
import { userSchema } from './user.schema.js';

// Schema de validação de estudante
export const studentSchema = z.object({
	user: userSchema,
	student: z.object({
		class_id: z.number().int().positive({ error: 'Invalid class id' }),
	}),
});
