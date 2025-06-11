import { z } from 'zod/v4';
import { assignmentSchema } from './assignment.schema.js';

/**
 * Schema de validação para turmas/classes
 * Define a estrutura de uma turma incluindo nome, turno, curso e atribuições de professores
 */
export const classSchema = z.object({
	name: z.string().min(3, { error: 'Invalid class name' }),
	shift: z.enum(['Morning', 'Afternoon', 'Evening', 'Full'], {
		error: 'Invalid shift',
	}),
	course: z.string().min(3, { error: 'Invalid course name' }),
	assignments: z.array(assignmentSchema),
});
