import { z } from 'zod/v4';

export const assignmentSchema = z.object({
	subject_id: z.number().int().positive({ error: 'Invalid subject id' }),
	teacher_id: z.number().int().positive({ error: 'Invalid teacher id' }),
});
