import { z } from 'zod/v4';

/**
 * Schema de validação para atribuições de professores a matérias
 * Define a relação entre professores e disciplinas que eles lecionam
 */
export const assignmentSchema = z.object({
	subject_id: z.number().int().positive({ error: 'Invalid subject id' }),
	teacher_id: z.number().int().positive({ error: 'Invalid teacher id' }),
});
